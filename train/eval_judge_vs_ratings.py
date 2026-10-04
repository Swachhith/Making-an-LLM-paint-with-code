"""Does a judge agree with the human rater? (gen/ratings.json)

bench_judge.py measured judges against the reference pool's tiers -- which turned
out to be an exact HPSv3 threshold, so it measured agreement with HPSv3. This
measures agreement with the person whose taste the reward is meant to encode.

All loves, plus an equal seeded sample of okays and nopes, each judged against
the same two love-tier references, with every image judged against its own
subject.

    python train/eval_judge_vs_ratings.py nvidia:google/gemma-4-31b-it
"""
from __future__ import annotations

import argparse
import concurrent.futures
import glob
import json
import os
import random
import sys
import time

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, ROOT)
from train.judge import JudgeUnavailable, ReferencePool, make_judge  # noqa: E402

TIER = {"love": 2, "okay": 1, "nope": 0}


def candidates(per_tier_cap: int, seed: int) -> list:
    ratings = json.load(open(os.path.join(ROOT, "gen", "ratings.json"), encoding="utf-8"))
    by = {"love": [], "okay": [], "nope": []}
    for key, v in ratings.items():
        batch, stem = key.split("/", 1)
        png = os.path.join(ROOT, "gen", "out", batch, stem + ".png")
        if os.path.exists(png) and v["tier"] in by:
            by[v["tier"]].append({"key": key, "png": png, "tier": v["tier"],
                                  "subject": v.get("subject") or "a flower"})
    rng = random.Random(seed)
    n = min(per_tier_cap, len(by["love"]))          # all loves, matched counts
    out = []
    for t in ("love", "okay", "nope"):
        items = sorted(by[t], key=lambda x: x["key"])
        out += items if len(items) <= n else rng.sample(items, n)
    return out


def auc(pos, neg):
    if not pos or not neg:
        return float("nan")
    return sum((1 if a > b else .5 if a == b else 0) for a in pos for b in neg) / (len(pos) * len(neg))


def spearman(x, y):
    def ranks(v):
        order = sorted(range(len(v)), key=lambda i: v[i]); r = [0.0] * len(v); i = 0
        while i < len(v):
            j = i
            while j + 1 < len(v) and v[order[j + 1]] == v[order[i]]:
                j += 1
            for k in range(i, j + 1):
                r[order[k]] = (i + j) / 2
            i = j + 1
        return r
    rx, ry = ranks(x), ranks(y); mx, my = sum(rx) / len(rx), sum(ry) / len(ry)
    num = sum((a - mx) * (b - my) for a, b in zip(rx, ry))
    den = (sum((a - mx) ** 2 for a in rx) * sum((b - my) ** 2 for b in ry)) ** 0.5
    return num / den if den else float("nan")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("spec")
    ap.add_argument("--cap", type=int, default=40)
    ap.add_argument("--concurrency", type=int, default=4)
    ap.add_argument("--seed", type=int, default=0)
    args = ap.parse_args()

    cands = candidates(args.cap, args.seed)
    pool = ReferencePool(seed=args.seed)
    refs = pool.sample(2)
    judge = make_judge(args.spec)
    print(f"{args.spec}: {len(cands)} candidates "
          f"({sum(c['tier']=='love' for c in cands)} love / "
          f"{sum(c['tier']=='okay' for c in cands)} okay / "
          f"{sum(c['tier']=='nope' for c in cands)} nope) vs refs "
          f"{[r['stem'] for r in refs]}", flush=True)

    t0 = time.time()

    def run(c):
        return judge.score(c["png"], [r["png"] for r in refs], c["subject"],
                           [r["subject"] for r in refs])

    # Progress is printed per candidate and each result is appended to a partial
    # file as it lands: on a congested endpoint a run can take an hour, and the
    # first version only reported at the very end, so a killed run kept nothing.
    partial = os.path.join(ROOT, "results",
                           "judge_vs_ratings_partial_" + args.spec.replace("/", "_").replace(":", "_") + ".jsonl")
    results = [None] * len(cands)
    try:
        with concurrent.futures.ThreadPoolExecutor(max_workers=args.concurrency) as ex:
            futs = {ex.submit(run, c): i for i, c in enumerate(cands)}
            for done, fut in enumerate(concurrent.futures.as_completed(futs), 1):
                i = futs[fut]
                results[i] = fut.result()
                sc = results[i].get("score")
                print(f"  [{done:3d}/{len(cands)}] {cands[i]['tier']:4s} "
                      f"{'DROPPED' if sc is None else f'{sc:.2f}'}  "
                      f"{cands[i]['subject'][:40]}  ({time.time() - t0:.0f}s)", flush=True)
                with open(partial, "a", encoding="utf-8") as f:
                    f.write(json.dumps({**cands[i], "score": sc}) + "\n")
    except JudgeUnavailable as e:
        print("UNAVAILABLE:", e)
        return

    rows = [{**c, "score": r.get("score")} for c, r in zip(cands, results)]
    ok = [x for x in rows if x["score"] is not None]
    s = {t: [x["score"] for x in ok if x["tier"] == t] for t in TIER}
    res = {
        "judge": args.spec, "n": len(rows), "dropped": len(rows) - len(ok),
        "mean": {t: (sum(v) / len(v) if v else None) for t, v in s.items()},
        "auc_love_vs_nope": auc(s["love"], s["nope"]),
        "auc_love_vs_okay": auc(s["love"], s["okay"]),
        "auc_okay_vs_nope": auc(s["okay"], s["nope"]),
        "spearman_vs_tier": spearman([x["score"] for x in ok], [TIER[x["tier"]] for x in ok]),
        "seconds": round(time.time() - t0), **judge.stats(),
    }
    print(json.dumps({k: (round(v, 3) if isinstance(v, float) else v) for k, v in res.items()
                      if k in ("n", "dropped", "auc_love_vs_nope", "auc_love_vs_okay",
                               "auc_okay_vs_nope", "spearman_vs_tier", "seconds", "cost_usd",
                               "failures")}), flush=True)
    print("mean score by tier:", {k: round(v, 3) for k, v in res["mean"].items() if v is not None})
    out = os.path.join(ROOT, "results", "judge_vs_ratings.jsonl")
    with open(out, "a", encoding="utf-8") as f:
        f.write(json.dumps({**res, "rows": rows}) + "\n")


if __name__ == "__main__":
    main()
