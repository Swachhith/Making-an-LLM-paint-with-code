"""Can a small model learn the rater's taste from gen/ratings.json?

Surya's "next step we didn't get to": instead of asking a large VLM judge to
compare paintings, fit a reward model directly on the human ratings. Here: CLIP
image embeddings + a linear classifier, validated two ways --

  * by prompt (GroupKFold on the prompt id): all three rounds of a prompt are
    near-duplicates, so they are always held out together; splitting them
    would let the model recognise a sibling instead of learning taste;
  * by category (leave one category out): the RL policy will paint things the
    ratings never covered, so this is the honest test of generalisation.

Compared against the Gemma judge on exactly the same paintings.

    python train/reward_model_exp.py
"""
from __future__ import annotations

import glob
import json
import os
import sys
import time

import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
EMB_CACHE = os.path.join(ROOT, "results", "clip_embeddings.npz")
MODEL = "openai/clip-vit-base-patch32"
TIER = {"nope": 0, "okay": 1, "love": 2}


def load_rows():
    ratings = json.load(open(os.path.join(ROOT, "gen", "ratings.json"), encoding="utf-8"))
    man = {}
    for f in glob.glob(os.path.join(ROOT, "gen", "out", "batch_*", "manifest.json")):
        b = os.path.basename(os.path.dirname(f))
        for s, e in json.load(open(f, encoding="utf-8")).items():
            man[f"{b}/{s}"] = e
    rows = []
    for key, v in sorted(ratings.items()):
        e = man.get(key)
        png = os.path.join(ROOT, "gen", "out", *key.split("/")) + ".png"
        if e and os.path.exists(png) and v["tier"] in TIER:
            rows.append({"key": key, "png": png, "y": TIER[v["tier"]], "group": e["id"],
                         "category": e.get("category") or "flowers", "round": e.get("round"),
                         "coverage": e.get("coverage") or 0.0})
    return rows


def embed(rows):
    if os.path.exists(EMB_CACHE):
        z = np.load(EMB_CACHE, allow_pickle=True)
        if list(z["keys"]) == [r["key"] for r in rows]:
            print(f"embeddings: cached ({len(rows)})")
            return z["X"]
    import torch
    from PIL import Image
    from transformers import CLIPModel, CLIPProcessor
    torch.set_num_threads(max(1, (os.cpu_count() or 4) - 1))
    model = CLIPModel.from_pretrained(MODEL).eval()
    proc = CLIPProcessor.from_pretrained(MODEL, use_fast=False)
    out, t0 = [], time.time()
    with torch.inference_mode():
        for i in range(0, len(rows), 32):
            ims = [Image.open(r["png"]).convert("RGB") for r in rows[i:i + 32]]
            feats = model.get_image_features(**proc(images=ims, return_tensors="pt"))
            out.append(torch.nn.functional.normalize(feats, dim=-1).numpy())
            print(f"  embedded {min(i + 32, len(rows))}/{len(rows)} ({time.time() - t0:.0f}s)", flush=True)
    X = np.concatenate(out)
    np.savez(EMB_CACHE, X=X, keys=np.array([r["key"] for r in rows]))
    return X


def auc(pos, neg):
    pos, neg = np.asarray(pos), np.asarray(neg)
    if not len(pos) or not len(neg):
        return float("nan")
    gt = (pos[:, None] > neg[None, :]).mean()
    eq = (pos[:, None] == neg[None, :]).mean()
    return float(gt + 0.5 * eq)


def metrics(score, y):
    from scipy.stats import spearmanr
    s, y = np.asarray(score), np.asarray(y)
    return {"love_vs_nope": auc(s[y == 2], s[y == 0]),
            "love_vs_okay": auc(s[y == 2], s[y == 1]),
            "okay_vs_nope": auc(s[y == 1], s[y == 0]),
            "spearman": float(spearmanr(s, y).correlation)}


def oof_scores(X, y, groups, splitter, Cs=(0.03, 0.1, 0.3, 1.0, 3.0)):
    """Out-of-fold scores from an ordinal-ish model: two logistic regressions
    (tier >= okay, tier == love), summed. C is chosen INSIDE each training fold
    by grouped inner CV, so nothing about the held-out fold leaks into it."""
    from sklearn.linear_model import LogisticRegression
    from sklearn.model_selection import GroupKFold
    score = np.zeros(len(y))
    for tr, te in splitter:
        total = np.zeros(len(te))
        for thr in (1, 2):
            yt = (y[tr] >= thr).astype(int)
            inner = GroupKFold(n_splits=4)
            best_c, best = Cs[0], -1
            for c in Cs:
                vals = []
                for itr, ite in inner.split(X[tr], yt, groups[tr]):
                    if len(set(yt[itr])) < 2:
                        continue
                    m = LogisticRegression(C=c, max_iter=2000, class_weight="balanced")
                    m.fit(X[tr][itr], yt[itr])
                    p = m.decision_function(X[tr][ite])
                    vals.append(auc(p[yt[ite] == 1], p[yt[ite] == 0]))
                v = np.nanmean(vals) if vals else -1
                if v > best:
                    best, best_c = v, c
            m = LogisticRegression(C=best_c, max_iter=2000, class_weight="balanced").fit(X[tr], yt)
            total += m.decision_function(X[te])
        score[te] = total
    return score


def main():
    from sklearn.model_selection import GroupKFold, LeaveOneGroupOut
    rows = load_rows()
    y = np.array([r["y"] for r in rows])
    groups = np.array([r["group"] for r in rows])
    cats = np.array([r["category"] for r in rows])
    print(f"{len(rows)} rated paintings | love {int((y == 2).sum())} okay {int((y == 1).sum())} "
          f"nope {int((y == 0).sum())} | {len(set(groups))} prompts | {len(set(cats))} categories")
    X = embed(rows)

    res = {}
    by_prompt = oof_scores(X, y, groups, GroupKFold(n_splits=5).split(X, y, groups))
    res["clip_by_prompt"] = metrics(by_prompt, y)
    by_cat = oof_scores(X, y, groups, LeaveOneGroupOut().split(X, y, cats))
    res["clip_leave_category_out"] = metrics(by_cat, y)
    res["coverage_only"] = metrics([r["coverage"] for r in rows], y)

    # Head-to-head with Gemma on exactly the paintings it scored.
    gem = None
    f = os.path.join(ROOT, "results", "judge_vs_ratings.jsonl")
    if os.path.exists(f):
        for line in open(f, encoding="utf-8"):
            d = json.loads(line)
            if d.get("judge", "").startswith("nvidia:google/gemma"):
                gem = d
    if gem:
        idx = {r["key"]: i for i, r in enumerate(rows)}
        pairs = [(x["key"], x["score"]) for x in gem["rows"] if x["score"] is not None and x["key"] in idx]
        ii = [idx[k] for k, _ in pairs]
        res["gemma_same_paintings"] = metrics([s for _, s in pairs], y[ii])
        res["clip_same_paintings"] = metrics(by_prompt[ii], y[ii])
        res["n_same_paintings"] = len(ii)

    per_cat = {}
    for c in sorted(set(cats)):
        m = cats == c
        if (y[m] == 2).sum() and (y[m] < 2).sum():
            per_cat[c] = {"n": int(m.sum()), "love": int((y[m] == 2).sum()),
                          "auc_love_vs_rest_heldout": auc(by_cat[m][y[m] == 2], by_cat[m][y[m] < 2])}
    res["per_category_leave_out"] = per_cat

    print(f"\n{'':32s} {'love/nope':>10s} {'love/okay':>10s} {'okay/nope':>10s} {'spearman':>9s}")
    for k in ("gemma_same_paintings", "clip_same_paintings", "clip_by_prompt",
              "clip_leave_category_out", "coverage_only"):
        if k in res:
            m = res[k]
            print(f"{k:32s} {m['love_vs_nope']:10.3f} {m['love_vs_okay']:10.3f} "
                  f"{m['okay_vs_nope']:10.3f} {m['spearman']:9.3f}")
    if "n_same_paintings" in res:
        print(f"(the 'same_paintings' rows use the {res['n_same_paintings']} paintings Gemma scored)")
    print("\nheld-out category (model never saw it): love vs rest AUC")
    for c, v in per_cat.items():
        print(f"  {c:11s} n={v['n']:3d} loves={v['love']:3d}  {v['auc_love_vs_rest_heldout']:.3f}")
    json.dump(res, open(os.path.join(ROOT, "results", "reward_model_exp.json"), "w"), indent=2)


if __name__ == "__main__":
    main()
