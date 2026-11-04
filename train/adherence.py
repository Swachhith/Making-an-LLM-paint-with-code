"""Subject adherence: does the painting show what the prompt asked for?

The taste model sees only the image. In the first full GRPO run that let the
policy paint flowers for landscape prompts -- the taste model scored them up
(+0.08 on held-out landscapes) while the rater gave all 6 RL landscapes "nope".
This term closes the gap with SigLIP (the encoder the taste model already
uses): its sigmoid image-text logit is a match probability,

    p = sigmoid(logit_scale * cos(image, text) + logit_bias)
    text = hps_prompt(subject) = "a loose watercolour painting of {subject}"

    python train/adherence.py embed      # embed every rated painting (cache for taste fit too)
    python train/adherence.py validate   # does p separate right from wrong subjects?
"""
from __future__ import annotations

import collections
import glob
import json
import os
import sys

import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, ROOT)

SIGLIP = "google/siglip-base-patch16-224"
ADHERENCE_L0, ADHERENCE_WIDTH = -10.0, 0.75
CACHE = {n: os.path.join(ROOT, "results", f"emb_{n}.npz") for n in ("dinov2_base", "siglip_base")}


def prompt_text(subject: str) -> str:
    from train.reward import hps_prompt
    return hps_prompt(subject)


class Adherence:
    """Text side of SigLIP; the image side comes from taste_model.Embedder."""

    def __init__(self, device: str | None = None):
        import torch
        from transformers import AutoTokenizer, SiglipModel
        self.torch = torch
        self.device = device or os.environ.get("WC_REWARD_DEVICE") or ("cuda" if torch.cuda.is_available() else "cpu")
        m = SiglipModel.from_pretrained(SIGLIP, low_cpu_mem_usage=True).eval()
        self.text = m.text_model.to(self.device)
        self.scale = float(m.logit_scale.detach().exp())
        self.bias = float(m.logit_bias.detach())
        self.tok = AutoTokenizer.from_pretrained(SIGLIP)
        self._cache = {}

    def text_embed(self, subjects: list) -> np.ndarray:
        torch = self.torch
        todo = [s for s in dict.fromkeys(subjects) if s not in self._cache]
        with torch.inference_mode():
            for i in range(0, len(todo), 64):
                chunk = todo[i:i + 64]
                t = self.tok([prompt_text(s) for s in chunk], padding="max_length", max_length=64,
                             truncation=True, return_tensors="pt").to(self.device)
                e = torch.nn.functional.normalize(self.text(**t).pooler_output, dim=-1).float().cpu().numpy()
                self._cache.update(zip(chunk, e))
        return np.stack([self._cache[s] for s in subjects])

    def factor(self, image_sig: np.ndarray, subjects: list) -> np.ndarray:
        """Reward multiplier in (0, 1): a clear-miss penalty on SigLIP's logit.

        L0 = -10, width 0.75. The first setting (-7, 1.5) was chosen on the
        rated, mostly Claude-made paintings, where it cut 12% of own-subject
        ones -- but the policy's looser paintings sit lower: it cut 37% of
        them, put SigLIP's noise into every group, and a 119-step run stayed
        flat (reward 0.28 throughout vs 0.40 -> 0.49 without it). At -10/0.75:
        14% of policy paintings and 4% of rated own-subject ones fall below
        0.5, while wrong-subject paintings keep ~30% (flowers painted for a
        beach-walk prompt sit near -12).
        """
        logit = self.scale * np.sum(image_sig * self.text_embed(subjects), axis=1) + self.bias
        return 1.0 / (1.0 + np.exp(-(logit - ADHERENCE_L0) / ADHERENCE_WIDTH))

    def prob(self, image_sig: np.ndarray, subjects: list) -> np.ndarray:
        """image_sig: L2-normalised SigLIP image embeddings (Embedder's last 768 dims)."""
        cos = np.sum(image_sig * self.text_embed(subjects), axis=1)
        return 1.0 / (1.0 + np.exp(-(self.scale * cos + self.bias)))


def _manifests():
    man = {}
    for f in glob.glob(os.path.join(ROOT, "gen", "out", "[!_]*", "manifest.json")):
        b = os.path.basename(os.path.dirname(f))
        for s, e in json.load(open(f, encoding="utf-8")).items():
            man[f"{b}/{s}"] = e
    return man


def embed():
    """Embed every rated painting with the taste model's encoders; write the
    cache taste_model.fit() reuses when it covers exactly its rows."""
    from train.taste_model import Embedder, _rated_rows
    rows, digest = _rated_rows()
    print(f"embedding {len(rows)} rated paintings (ratings {digest})...", flush=True)
    X = Embedder()([r["png"] for r in rows])
    keys = np.array([r["key"] for r in rows])
    np.savez(CACHE["dinov2_base"], X=X[:, :1536], keys=keys)
    np.savez(CACHE["siglip_base"], X=X[:, 1536:], keys=keys)
    print("wrote", CACHE["dinov2_base"], CACHE["siglip_base"])


def _auc(pos, neg):
    pos, neg = np.asarray(pos), np.asarray(neg)
    return float(((pos[:, None] > neg[None]).sum() + .5 * (pos[:, None] == neg[None]).sum()) / (len(pos) * len(neg)))


def validate():
    z = np.load(CACHE["siglip_base"], allow_pickle=True)
    keys, S = list(z["keys"]), z["X"]
    man, ratings = _manifests(), json.load(open(os.path.join(ROOT, "gen", "ratings.json"), encoding="utf-8"))
    subj = [man[k]["subject"] for k in keys]
    cat = [man[k].get("category") or "flowers" for k in keys]
    A = Adherence(device="cpu")
    own = A.prob(S, subj)

    rng = np.random.default_rng(0)
    by_cat = collections.defaultdict(list)
    for s, c in zip(subj, cat):
        by_cat[c].append(s)
    cats = sorted(by_cat)
    other = [rng.choice(by_cat[rng.choice([c2 for c2 in cats if c2 != c])]) for c in cat]
    wrong = A.prob(S, other)
    print(f"1. own subject vs a random subject from another category: AUC {_auc(own, wrong):.3f}"
          f"  (median p {np.median(own):.3f} vs {np.median(wrong):.3f})")
    for c in cats:
        i = [j for j, x in enumerate(cat) if x == c]
        print(f"     {c:11s} n={len(i):4d}  AUC {_auc(own[i], wrong[i]):.3f}  median p own {np.median(own[i]):.3f}")

    # 2. the failure the rater saw: flower paintings offered landscape prompts
    fl = [j for j, c in enumerate(cat) if c == "flowers"]
    land = by_cat["landscapes"]
    p_fl_as_land = A.prob(S[fl], [rng.choice(land) for _ in fl])
    li = [j for j, c in enumerate(cat) if c == "landscapes"]
    print(f"2. landscape prompt: real landscapes vs flower paintings  AUC {_auc(own[li], p_fl_as_land):.3f}"
          f"  (median p {np.median(own[li]):.3f} vs {np.median(p_fl_as_land):.3f})")

    # 3. retrieval: rank of the painting's own subject among every subject
    allsub = sorted(set(subj))
    T = A.text_embed(allsub)
    ranks = []
    for j in range(len(keys)):
        sims = T @ S[j]
        ranks.append(int((sims > sims[allsub.index(subj[j])]).sum()) + 1)
    ranks = np.array(ranks)
    print(f"3. own subject's rank among {len(allsub)} subjects: median {np.median(ranks):.0f}, "
          f"top-10 {np.mean(ranks <= 10):.0%}, top-50 {np.mean(ranks <= 50):.0%}")

    # 4. relation to the rater, and the RL vs SFT paintings
    tier = np.array([{"nope": 0, "okay": 1, "love": 2}[ratings[k]["tier"]] for k in keys])
    from scipy.stats import spearmanr
    print(f"4. spearman(adherence, rating) {spearmanr(own, tier)[0]:+.3f}")
    for folder in ("eval_sft_v1", "grpo_v1"):
        for c in ("landscapes", "flowers", None):
            i = [j for j, k in enumerate(keys) if k.startswith(folder + "/") and (c is None or cat[j] == c)]
            if i:
                print(f"   {folder:11s} {c or 'all':10s} n={len(i):3d}  mean p {own[i].mean():.3f}")


if __name__ == "__main__":
    {"embed": embed, "validate": validate}[sys.argv[1] if len(sys.argv) > 1 else "validate"]()
