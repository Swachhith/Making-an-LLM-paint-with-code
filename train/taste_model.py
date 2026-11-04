"""The taste model: a reward learned from the rater's own ratings.

Replaces the pairwise VLM judge as the 0.60 term. On the same paintings, with the
same labels, a linear probe on image embeddings beat the Gemma 4 31B judge on
every measure (love vs okay 0.80 vs 0.63; see NOTES.md), costs nothing per
call, and scores in a fraction of a second instead of 20-45 s over an API.

Embeddings: DINOv2-base (CLS + mean patch token) and SigLIP-base (pooled),
each L2-normalised, concatenated in that order -- the best combination in
train/encoder_sweep.py. Two balanced logistic regressions on top:
P(tier >= okay) and P(tier == love). The score is their mean, in [0, 1]:
nope-like ~0, okay-like ~0.5, love-like ~1.

    python train/taste_model.py fit              # train on gen/ratings.json
    python train/taste_model.py score a.png ...  # score paintings

Limits, measured: it only knows subject types it has ratings for (held-out
category love/okay 0.70; unseen night skies near chance), and a small linear
model is an easier target for an RL policy to game than a large judge -- keep
HPSv3 as an independent anchor and periodically rate the policy's own output.
"""
from __future__ import annotations

import base64
import glob
import hashlib
import io
import json
import os
import sys
import time

import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
WEIGHTS = os.path.join(ROOT, "env", "taste_model.npz")
DINO = "facebook/dinov2-base"
SIGLIP = "google/siglip-base-patch16-224"
TIER = {"nope": 0, "okay": 1, "love": 2}


class Embedder:
    """DINOv2-base + SigLIP-base image embeddings, identical to the sweep's."""

    def __init__(self, device: str | None = None):
        import torch
        from transformers import AutoImageProcessor, AutoModel, SiglipVisionModel
        self.torch = torch
        # WC_REWARD_DEVICE=cpu keeps the encoders off a GPU that training needs (Kaggle T4)
        self.device = device or os.environ.get("WC_REWARD_DEVICE") or ("cuda" if torch.cuda.is_available() else "cpu")
        if self.device == "cpu":
            torch.set_num_threads(max(1, (os.cpu_count() or 4) - 1))
        self.dino = AutoModel.from_pretrained(DINO, low_cpu_mem_usage=True).eval().to(self.device)
        self.dino_proc = AutoImageProcessor.from_pretrained(DINO, use_fast=False)
        self.sig = SiglipVisionModel.from_pretrained(SIGLIP, low_cpu_mem_usage=True).eval().to(self.device)
        self.sig_proc = AutoImageProcessor.from_pretrained(SIGLIP, use_fast=False)

    @staticmethod
    def _image(x):
        from PIL import Image
        if isinstance(x, Image.Image):
            return x.convert("RGB")
        if isinstance(x, (bytes, bytearray)):
            return Image.open(io.BytesIO(x)).convert("RGB")
        if isinstance(x, str) and os.path.exists(x):
            return Image.open(x).convert("RGB")
        if isinstance(x, str):                       # base64, optionally a data URL
            return Image.open(io.BytesIO(base64.b64decode(x.split(",", 1)[-1]))).convert("RGB")
        raise TypeError(f"cannot read an image from {type(x).__name__}")

    def __call__(self, images, batch: int = 16) -> np.ndarray:
        torch = self.torch
        out = []
        with torch.inference_mode():
            for i in range(0, len(images), batch):
                ims = [self._image(x) for x in images[i:i + batch]]
                px = self.dino_proc(images=ims, return_tensors="pt")["pixel_values"].to(self.device)
                h = self.dino(pixel_values=px).last_hidden_state
                d = torch.nn.functional.normalize(torch.cat([h[:, 0], h[:, 1:].mean(1)], -1), dim=-1)
                px = self.sig_proc(images=ims, return_tensors="pt")["pixel_values"].to(self.device)
                s = torch.nn.functional.normalize(self.sig(pixel_values=px).pooler_output, dim=-1)
                out.append(torch.cat([d, s], -1).float().cpu().numpy())
        return np.concatenate(out) if out else np.zeros((0, 2304), dtype=np.float32)


class TasteModel:
    def __init__(self, weights: str = WEIGHTS, device: str | None = None):
        z = np.load(weights, allow_pickle=False)
        self.W = z["W"]          # (2304, 2): columns = [>= okay, == love]
        self.b = z["b"]          # (2,)
        self.meta = json.loads(str(z["meta"]))
        self.embedder = None
        self.device = device

    def _embed(self, images):
        if self.embedder is None:
            self.embedder = Embedder(self.device)
        return self.embedder(images)

    def score_embeddings(self, X: np.ndarray) -> np.ndarray:
        p = 1.0 / (1.0 + np.exp(-(X @ self.W + self.b)))
        return p.mean(axis=1)

    def score(self, images) -> list:
        """Score paintings (paths, PNG bytes, base64, or PIL images) in [0, 1]."""
        if not len(images):
            return []
        return [float(s) for s in self.score_embeddings(self._embed(list(images)))]


# ---------------------------------------------------------------------------
# Fitting
# ---------------------------------------------------------------------------
def _rated_rows():
    ratings = json.load(open(os.path.join(ROOT, "gen", "ratings.json"), encoding="utf-8"))
    man = {}
    for f in glob.glob(os.path.join(ROOT, "gen", "out", "[!_]*", "manifest.json")):
        b = os.path.basename(os.path.dirname(f))
        for s, e in json.load(open(f, encoding="utf-8")).items():
            man[f"{b}/{s}"] = e
    rows = []
    for key, v in sorted(ratings.items()):
        png = os.path.join(ROOT, "gen", "out", *key.split("/")) + ".png"
        if key in man and os.path.exists(png) and v["tier"] in TIER:
            rows.append({"key": key, "png": png, "y": TIER[v["tier"]], "group": man[key]["id"],
                         "category": man[key].get("category") or "flowers"})
    digest = hashlib.sha1(json.dumps({k: v["tier"] for k, v in sorted(ratings.items())}).encode()).hexdigest()[:12]
    return rows, digest


def _embeddings(rows):
    """Reuse the sweep's cached embeddings when they cover exactly these rows."""
    keys = [r["key"] for r in rows]
    caches = [os.path.join(ROOT, "results", f"emb_{n}.npz") for n in ("dinov2_base", "siglip_base")]
    if all(os.path.exists(c) for c in caches):
        zs = [np.load(c, allow_pickle=True) for c in caches]
        if all(list(z["keys"]) == keys for z in zs):
            print("embeddings: cached from the encoder sweep")
            return np.hstack([zs[0]["X"], zs[1]["X"]])
    print(f"embedding {len(rows)} paintings...", flush=True)
    return Embedder()([r["png"] for r in rows])


def fit(Cs=(0.03, 0.1, 0.3, 1.0, 3.0)):
    from sklearn.linear_model import LogisticRegression
    from sklearn.model_selection import GroupKFold
    sys.path.insert(0, ROOT)
    from train.reward_model_exp import auc, metrics, oof_scores

    rows, digest = _rated_rows()
    y = np.array([r["y"] for r in rows]); groups = np.array([r["group"] for r in rows])
    X = _embeddings(rows)
    print(f"{len(rows)} rated paintings (love {int((y == 2).sum())}, okay {int((y == 1).sum())}, "
          f"nope {int((y == 0).sum())}), ratings digest {digest}")

    # Honest estimate first: held out by prompt, C chosen inside each fold.
    cv = metrics(oof_scores(X, y, groups, GroupKFold(n_splits=5).split(X, y, groups)), y)

    # Then the deployed model: C by grouped CV on everything, fit on everything.
    W, b, chosen = np.zeros((X.shape[1], 2)), np.zeros(2), []
    for j, thr in enumerate((1, 2)):
        yt = (y >= thr).astype(int)
        best_c, best = Cs[0], -1.0
        for c in Cs:
            vals = []
            for tr, te in GroupKFold(n_splits=5).split(X, yt, groups):
                m = LogisticRegression(C=c, max_iter=3000, class_weight="balanced").fit(X[tr], yt[tr])
                p = m.decision_function(X[te]); vals.append(auc(p[yt[te] == 1], p[yt[te] == 0]))
            if np.mean(vals) > best:
                best, best_c = float(np.mean(vals)), c
        m = LogisticRegression(C=best_c, max_iter=3000, class_weight="balanced").fit(X, yt)
        W[:, j], b[j] = m.coef_[0], m.intercept_[0]
        chosen.append(best_c)

    meta = {"encoders": [DINO, SIGLIP], "embedding": "dinov2 CLS+meanpatch (L2) | siglip pooled (L2)",
            "heads": ["P(tier>=okay)", "P(tier==love)"], "score": "mean of the two probabilities",
            "C": chosen, "n": len(rows), "ratings_digest": digest,
            "cv_by_prompt": cv, "fitted": time.strftime("%Y-%m-%d %H:%M")}
    os.makedirs(os.path.dirname(WEIGHTS), exist_ok=True)
    np.savez(WEIGHTS, W=W.astype(np.float32), b=b.astype(np.float32), meta=np.array(json.dumps(meta)))
    print(f"held-out by prompt: love/nope {cv['love_vs_nope']:.3f}  love/okay {cv['love_vs_okay']:.3f}  "
          f"okay/nope {cv['okay_vs_nope']:.3f}  spearman {cv['spearman']:.3f}")
    print(f"wrote {os.path.relpath(WEIGHTS, ROOT)} (C = {chosen})")

    # In-sample score by tier, so the [0,1] scale is easy to read.
    s = TasteModel().score_embeddings(X)
    print("mean score by tier (in-sample): " + "  ".join(
        f"{t} {s[y == v].mean():.2f}" for t, v in TIER.items()))


if __name__ == "__main__":
    cmd = sys.argv[1] if len(sys.argv) > 1 else "fit"
    if cmd == "fit":
        fit()
    elif cmd == "score":
        tm = TasteModel()
        for p, s in zip(sys.argv[2:], tm.score(sys.argv[2:])):
            print(f"{s:.3f}  {p}")
