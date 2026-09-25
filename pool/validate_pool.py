"""Validate our render harness against the reference corpus.

Renders all 178 reference sketches through our harness and compares the
measured paint coverage against the value recorded in the dataset. Two
questions: do known-good sketches still run under p5.brush v2 and our gate,
and does our renderer agree with the one that produced the pool?

    python pool/validate_pool.py [--limit N]
"""
from __future__ import annotations

import argparse
import json
import os
import sys
import time

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, ROOT)
from train.render import Renderer  # noqa: E402


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--limit", type=int, default=0)
    ap.add_argument("--out", default=os.path.join(ROOT, "results", "pool_validation.json"))
    args = ap.parse_args()

    rows = json.load(open(os.path.join(HERE, "pool.json"), encoding="utf-8"))
    by_stem = {os.path.basename(r["source_file"])[:-3]: r for r in rows if r.get("source_file")}
    stems = sorted(by_stem)
    if args.limit:
        stems = stems[: args.limit]

    os.makedirs(os.path.dirname(args.out), exist_ok=True)
    out_dir = os.path.join(ROOT, "results", "pool_repro")
    os.makedirs(out_dir, exist_ok=True)

    results = []
    t0 = time.time()
    with Renderer() as r:
        for i, stem in enumerate(stems, 1):
            row = by_stem[stem]
            src_path = os.path.join(HERE, "sources", f"{stem}.js")
            if not os.path.exists(src_path):
                continue
            src = open(src_path, encoding="utf-8", errors="replace").read()
            res = r.render(src, seed=1, png_path=os.path.join(out_dir, f"{stem}.png"))
            res.pop("png_b64", None)
            m = res.get("metrics") or {}
            rec = {
                "stem": stem,
                "tier": row.get("tier"),
                "generator": row.get("generator_model"),
                "ok": bool(res.get("ok")),
                "stage": res.get("stage"),
                "error": (res.get("error") or "")[:140],
                "ours_coverage": m.get("coverage"),
                "theirs_coverage": row.get("paint_coverage"),
                "hpsv3_mu": row.get("hpsv3_mu"),
                "brush_calls": res.get("brushCalls"),
                "shapes": res.get("shapes"),
                "settled": (res.get("settle") or {}).get("settled"),
                "ms": res.get("timingMs"),
                "src_chars": len(src),
            }
            results.append(rec)
            if i % 10 == 0 or i == len(stems):
                ok = sum(1 for x in results if x["ok"])
                el = time.time() - t0
                print(f"  {i}/{len(stems)}  ok={ok}  {el:.0f}s elapsed "
                      f"({el / i:.1f}s/render)", flush=True)

    with open(args.out, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2)

    ok = [x for x in results if x["ok"]]
    bad = [x for x in results if not x["ok"]]
    print(f"\nrendered {len(ok)}/{len(results)} successfully")
    if bad:
        stages = {}
        for b in bad:
            stages[b["stage"]] = stages.get(b["stage"], 0) + 1
        print("  failures by stage:", stages)
        for b in bad[:6]:
            print(f"    {b['stem']}: [{b['stage']}] {b['error']}")

    pairs = [(x["ours_coverage"], x["theirs_coverage"]) for x in ok
             if x["ours_coverage"] is not None and x["theirs_coverage"] is not None]
    if pairs:
        diffs = [a - b for a, b in pairs]
        n = len(diffs)
        mean = sum(diffs) / n
        sd = (sum((d - mean) ** 2 for d in diffs) / n) ** 0.5
        within = sum(1 for d in diffs if abs(d) < 0.05) / n
        ma = sum(a for a, _ in pairs) / n
        mb = sum(b for _, b in pairs) / n
        va = sum((a - ma) ** 2 for a, _ in pairs) ** 0.5
        vb = sum((b - mb) ** 2 for _, b in pairs) ** 0.5
        cov = sum((a - ma) * (b - mb) for a, b in pairs)
        print(f"\ncoverage agreement over {n} sketches:")
        print(f"  mean(ours - theirs) = {mean:+.4f}   sd = {sd:.4f}")
        print(f"  within 0.05         = {within * 100:.0f}%")
        if va and vb:
            print(f"  pearson r           = {cov / (va * vb):.3f}")
    print(f"\nwrote {args.out}")


if __name__ == "__main__":
    main()
