"""Benchmark a judge: does it actually separate good paintings from bad ones?

Speed and price are easy to measure and easy to over-weight. The property that
decides whether a judge can carry a 0.60 reward weight is discrimination -- if
its verdicts do not track quality, the reward is noise and the run learns
nothing, expensively.

Uses the reference pool as ground truth: paintings hand-rated `love` should beat
paintings rated `okay` when both are judged against the same love references.

    python train/bench_judge.py                              # default judge
    python train/bench_judge.py openrouter:... google:...    # compare several
"""
from __future__ import annotations

import concurrent.futures
import json
import os
import sys
import time

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, ROOT)

from train.judge import (DEFAULT_JUDGE, JudgeUnavailable,  # noqa: E402
                         ReferencePool, make_judge)

N_PER_TIER = 6          # candidates sampled from each tier
N_REFS = 2              # references per comparison, per the contract
CONCURRENCY = 4


def candidates(pool: ReferencePool, n: int, ref_stems: set) -> dict:
    """Pick n love and n okay candidates, spread across the HPSv3 range."""
    by_tier: dict = {"love": [], "okay": []}
    for r in pool.rows:
        if not r.get("source_file"):
            continue
        stem = os.path.basename(r["source_file"])[:-3]
        if stem in ref_stems:
            continue
        png = os.path.join(ROOT, "pool", "renders", f"{stem}.png")
        if not os.path.exists(png) or r.get("tier") not in by_tier:
            continue
        by_tier[r["tier"]].append({"stem": stem, "png": png,
                                   "hpsv3_mu": r.get("hpsv3_mu", 0),
                                   "tier": r["tier"]})
    out = {}
    for tier, items in by_tier.items():
        items.sort(key=lambda x: x["hpsv3_mu"])
        if len(items) <= n:
            out[tier] = items
        else:  # even spread across the tier's quality range
            step = (len(items) - 1) / (n - 1) if n > 1 else 0
            out[tier] = [items[round(i * step)] for i in range(n)]
    return out


def auc(pos: list, neg: list) -> float:
    """P(a random love scores above a random okay); 0.5 is chance."""
    if not pos or not neg:
        return float("nan")
    wins = sum((1.0 if p > q else 0.5 if p == q else 0.0) for p in pos for q in neg)
    return wins / (len(pos) * len(neg))


def bench(spec: str, n_per_tier: int = N_PER_TIER) -> dict:
    pool = ReferencePool(seed=0)
    refs = pool.sample(N_REFS)
    ref_stems = {r["stem"] for r in refs}
    ref_pngs = [r["png"] for r in refs]
    cands = candidates(pool, n_per_tier, ref_stems)

    print(f"\n=== {spec}")
    print(f"    refs: {[r['stem'] for r in refs]}")
    try:
        judge = make_judge(spec)
    except JudgeUnavailable as e:
        print(f"    UNAVAILABLE: {e}")
        return {"judge": spec, "error": str(e)}

    jobs = [c for tier in ("love", "okay") for c in cands[tier]]
    results: dict = {}
    t0 = time.time()

    def run(c):
        return c["stem"], judge.score(c["png"], ref_pngs)

    try:
        with concurrent.futures.ThreadPoolExecutor(max_workers=CONCURRENCY) as ex:
            for stem, res in ex.map(run, jobs):
                results[stem] = res
    except JudgeUnavailable as e:
        print(f"    UNAVAILABLE mid-run: {e}")
        return {"judge": spec, "error": str(e)}

    wall = time.time() - t0
    scored = {"love": [], "okay": []}
    dropped = 0
    for c in jobs:
        s = results.get(c["stem"], {}).get("score")
        if s is None:
            dropped += 1
        else:
            scored[c["tier"]].append(s)
        print(f"    {c['tier']:5s} hps={c['hpsv3_mu']:.1f}  {c['stem']:18s} -> "
              f"{'DROPPED' if s is None else f'{s:.2f}'}")

    st = judge.stats()
    mean_love = sum(scored["love"]) / len(scored["love"]) if scored["love"] else float("nan")
    mean_okay = sum(scored["okay"]) / len(scored["okay"]) if scored["okay"] else float("nan")
    a = auc(scored["love"], scored["okay"])

    print(f"\n    mean love = {mean_love:.3f}   mean okay = {mean_okay:.3f}   "
          f"separation = {mean_love - mean_okay:+.3f}")
    print(f"    AUC = {a:.3f}  (0.5 = cannot tell them apart)")
    print(f"    dropped {dropped}/{len(jobs)} | {wall:.0f}s wall | "
          f"{st['requests']} reqs, {st['failures']} fails, "
          f"${st['cost_usd']:.4f}, median {st['median_latency_s']}s")
    for e in judge.errors[:3]:
        print(f"      err: {e[:140]}")

    return {"judge": spec, "mean_love": mean_love, "mean_okay": mean_okay,
            "separation": mean_love - mean_okay, "auc": a,
            "dropped": dropped, "n": len(jobs), "wall_s": round(wall), **st}


if __name__ == "__main__":
    import argparse
    ap = argparse.ArgumentParser()
    ap.add_argument("specs", nargs="*", default=[DEFAULT_JUDGE])
    ap.add_argument("--n", type=int, default=N_PER_TIER,
                    help="candidates per tier (6 gives +/-0.15 AUC error; 20 gives ~+/-0.08)")
    ap.add_argument("--concurrency", type=int, default=CONCURRENCY)
    args = ap.parse_args()
    CONCURRENCY = args.concurrency
    out = [bench(s, args.n) for s in (args.specs or [DEFAULT_JUDGE])]
    path = os.path.join(ROOT, "results", "judge_bench.json")
    os.makedirs(os.path.dirname(path), exist_ok=True)
    prev = []
    if os.path.exists(path):
        try:
            prev = json.load(open(path, encoding="utf-8"))
        except Exception:
            prev = []
    json.dump(prev + out, open(path, "w", encoding="utf-8"), indent=2)
    print(f"\nwrote {path}")
