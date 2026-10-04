"""Which image encoder best captures the rater's taste?

Same protocol as reward_model_exp.py (ratings held out by prompt, and by whole
category), run over several encoders and their concatenations, with a paired
bootstrap over prompts so a winner is only declared when the gap is bigger
than the noise.

    python train/encoder_sweep.py

Embeddings are cached per encoder in results/emb_<name>.npz; models are loaded
one at a time and freed, because this laptop has ~3 GB of free memory.
"""
from __future__ import annotations

import gc
import json
import os
import sys
import time

import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, ROOT)
from train.reward_model_exp import auc, load_rows, metrics, oof_scores  # noqa: E402

ENCODERS = {
    # name: (kind, hf id, batch size)
    "clip_b32": ("clip", "openai/clip-vit-base-patch32", 32),
    "dinov2_base": ("dinov2", "facebook/dinov2-base", 16),
    "siglip_base": ("siglip", "google/siglip-base-patch16-224", 16),
    "clip_l14": ("clip", "openai/clip-vit-large-patch14", 8),
}


def embed(name, rows):
    path = os.path.join(ROOT, "results", f"emb_{name}.npz")
    keys = [r["key"] for r in rows]
    if os.path.exists(path):
        z = np.load(path, allow_pickle=True)
        if list(z["keys"]) == keys:
            return z["X"]
    if name == "clip_b32":   # reuse the cache from reward_model_exp.py
        old = os.path.join(ROOT, "results", "clip_embeddings.npz")
        if os.path.exists(old):
            z = np.load(old, allow_pickle=True)
            if list(z["keys"]) == keys:
                np.savez(path, X=z["X"], keys=np.array(keys))
                return z["X"]

    import torch
    from PIL import Image
    torch.set_num_threads(max(1, (os.cpu_count() or 4) - 1))
    kind, hf, bs = ENCODERS[name]
    if kind == "clip":
        from transformers import CLIPImageProcessor, CLIPModel
        model = CLIPModel.from_pretrained(hf, low_cpu_mem_usage=True).eval()
        proc = CLIPImageProcessor.from_pretrained(hf)
        fwd = lambda px: model.get_image_features(pixel_values=px)
    elif kind == "siglip":
        from transformers import AutoImageProcessor, SiglipVisionModel
        model = SiglipVisionModel.from_pretrained(hf, low_cpu_mem_usage=True).eval()
        proc = AutoImageProcessor.from_pretrained(hf, use_fast=False)
        fwd = lambda px: model(pixel_values=px).pooler_output
    else:  # dinov2: CLS token plus the mean of patch tokens, the usual probe
        from transformers import AutoImageProcessor, AutoModel
        model = AutoModel.from_pretrained(hf, low_cpu_mem_usage=True).eval()
        proc = AutoImageProcessor.from_pretrained(hf, use_fast=False)
        def fwd(px):
            h = model(pixel_values=px).last_hidden_state
            return torch.cat([h[:, 0], h[:, 1:].mean(1)], dim=-1)

    out, t0 = [], time.time()
    with torch.inference_mode():
        for i in range(0, len(rows), bs):
            ims = [Image.open(r["png"]).convert("RGB") for r in rows[i:i + bs]]
            px = proc(images=ims, return_tensors="pt")["pixel_values"]
            out.append(torch.nn.functional.normalize(fwd(px), dim=-1).float().numpy())
            if (i // bs) % 10 == 0:
                print(f"  {name}: {min(i + bs, len(rows))}/{len(rows)} ({time.time() - t0:.0f}s)", flush=True)
    X = np.concatenate(out)
    np.savez(path, X=X, keys=np.array(keys))
    print(f"  {name}: done, dim {X.shape[1]}, {time.time() - t0:.0f}s", flush=True)
    del model
    gc.collect()
    return X


def bootstrap_gap(score_a, score_b, y, groups, n=2000, seed=0):
    """Paired bootstrap over prompts of love-vs-okay AUC(a) - AUC(b)."""
    rng = np.random.default_rng(seed)
    ug = np.unique(groups)
    by_g = {g: np.where(groups == g)[0] for g in ug}
    diffs = []
    for _ in range(n):
        idx = np.concatenate([by_g[g] for g in rng.choice(ug, len(ug), replace=True)])
        yy, a, b = y[idx], score_a[idx], score_b[idx]
        da = auc(a[yy == 2], a[yy == 1]); db = auc(b[yy == 2], b[yy == 1])
        if np.isfinite(da) and np.isfinite(db):
            diffs.append(da - db)
    diffs = np.sort(diffs)
    return float(np.mean(diffs)), float(diffs[int(.025 * len(diffs))]), \
        float(diffs[int(.975 * len(diffs))]), float((diffs > 0).mean())


def main():
    from sklearn.model_selection import GroupKFold, LeaveOneGroupOut
    rows = load_rows()
    y = np.array([r["y"] for r in rows])
    groups = np.array([r["group"] for r in rows])
    cats = np.array([r["category"] for r in rows])
    print(f"{len(rows)} paintings, {len(set(groups))} prompts", flush=True)

    feats = {}
    for name in ENCODERS:
        try:
            feats[name] = embed(name, rows)
        except Exception as e:  # one failing encoder must not lose the others
            print(f"  {name}: FAILED ({type(e).__name__}: {e})", flush=True)
    names = list(feats)
    combos = {n: feats[n] for n in names}
    for a in names:
        for b in names:
            if a < b and "clip_b32" not in (a, b):
                combos[f"{a}+{b}"] = np.hstack([feats[a], feats[b]])

    gkf = list(GroupKFold(n_splits=5).split(np.zeros(len(y)), y, groups))
    logo = list(LeaveOneGroupOut().split(np.zeros(len(y)), y, cats))
    res, oof = {}, {}
    print(f"\n{'encoder':30s} {'dim':>5s} | by prompt: {'love/nope':>9s} {'love/okay':>9s} {'spearman':>8s} "
          f"| unseen category: {'love/okay':>9s} {'night':>6s}", flush=True)
    for name, X in combos.items():
        s1 = oof_scores(X, y, groups, gkf)
        s2 = oof_scores(X, y, groups, logo)
        m1, m2 = metrics(s1, y), metrics(s2, y)
        night = cats == "night"
        night_auc = auc(s2[night][y[night] == 2], s2[night][y[night] < 2])
        res[name] = {"dim": X.shape[1], "by_prompt": m1, "leave_category_out": m2, "night_unseen": night_auc}
        oof[name] = s1
        print(f"{name:30s} {X.shape[1]:5d} | {'':11s}{m1['love_vs_nope']:9.3f} {m1['love_vs_okay']:9.3f} "
              f"{m1['spearman']:8.3f} | {'':17s}{m2['love_vs_okay']:9.3f} {night_auc:6.3f}", flush=True)

    best = max(res, key=lambda k: res[k]["by_prompt"]["love_vs_okay"])
    if best != "clip_b32" and "clip_b32" in oof:
        mean, lo, hi, p = bootstrap_gap(oof[best], oof["clip_b32"], y, groups)
        res["bootstrap_best_vs_clip_b32"] = {"best": best, "gap_love_vs_okay": mean,
                                             "ci95": [lo, hi], "p_better": p}
        print(f"\nbest on love/okay: {best}. vs clip_b32: gap {mean:+.3f}, 95% CI [{lo:+.3f}, {hi:+.3f}], "
              f"better in {p:.0%} of bootstrap resamples", flush=True)
    json.dump(res, open(os.path.join(ROOT, "results", "encoder_sweep.json"), "w"), indent=2)


if __name__ == "__main__":
    main()
