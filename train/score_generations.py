"""Render and score generated sketches; compare variants paired by prompt.

    python train/score_generations.py results/sft_eval/gen_base.jsonl results/sft_eval/gen_sft.jsonl

For each completion: strip any thinking, extract the code, gate it, render it,
and score the painting with the taste model. Variants are compared on the same
prompts and sample indices, with a paired bootstrap over prompts, and a
contact sheet per variant is written for eyeballing.
"""
from __future__ import annotations

import collections
import json
import os
import re
import sys

import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, ROOT)
from train.gate import check_render, check_source, extract_code  # noqa: E402

_THINK = re.compile(r"<think>.*?</think>", re.S | re.I)


def score_file(path, renderer, taste, out_dir):
    rows = [json.loads(l) for l in open(path, encoding="utf-8")]
    variant = rows[0]["variant"] if rows else os.path.basename(path)
    os.makedirs(out_dir, exist_ok=True)
    pngs, idx = [], []
    for i, r in enumerate(rows):
        code = extract_code(_THINK.sub("", r["completion"]))
        fails, facts = check_source(code)
        r.update({"chars": len(code), "invented": facts.get("invented_methods", [])})
        if not fails:
            png = os.path.join(out_dir, f"{variant}_{r['id']}_s{r['sample']}.png")
            res = renderer.render(code, seed=1, png_path=png)
            rf, rfacts = check_render(res)
            fails += rf
            r["coverage"] = rfacts.get("coverage")
            if not rf:
                pngs.append(png); idx.append(i)
        r["passed"] = not fails
        r["failure"] = fails[0] if fails else None
    for i, s in zip(idx, taste.score(pngs)):
        rows[i]["taste"] = s
    return variant, rows


def summary(rows):
    n = len(rows); ok = [r for r in rows if r["passed"]]
    t = [r["taste"] for r in ok]
    return {"n": n, "gate_pass": len(ok) / n,
            "taste_mean_passing": float(np.mean(t)) if t else float("nan"),
            # failures count as 0: what the policy actually delivers per attempt
            "taste_mean_all": float(np.mean([r.get("taste", 0.0) if r["passed"] else 0.0 for r in rows])),
            "love_like": sum(1 for x in t if x >= 0.66) / n,
            "hit_token_limit": sum(r.get("hit_limit", False) for r in rows) / n,
            "invented_method": sum(bool(r["invented"]) for r in rows) / n,
            "failures": dict(collections.Counter((r["failure"] or "").split(":")[0].split("(")[0].strip()
                                                 for r in rows if not r["passed"]))}


def paired_bootstrap(a_rows, b_rows, n=4000, seed=0):
    """Mean per-attempt taste (failures = 0) of b minus a, paired by prompt."""
    key = lambda r: (r["id"], r["sample"])
    A = {key(r): (r.get("taste", 0.0) if r["passed"] else 0.0) for r in a_rows}
    B = {key(r): (r.get("taste", 0.0) if r["passed"] else 0.0) for r in b_rows}
    by_prompt = collections.defaultdict(list)
    for k in A.keys() & B.keys():
        by_prompt[k[0]].append(B[k] - A[k])
    pids = list(by_prompt); rng = np.random.default_rng(seed)
    diffs = []
    for _ in range(n):
        pick = rng.choice(len(pids), len(pids), replace=True)
        diffs.append(np.mean([d for j in pick for d in by_prompt[pids[j]]]))
    diffs = np.sort(diffs)
    return float(np.mean(diffs)), float(diffs[int(.025 * n)]), float(diffs[int(.975 * n)]), \
        float((diffs > 0).mean())


def contact_sheet(rows, variant, out_dir, cols=8, px=160):
    from PIL import Image, ImageDraw
    rows = sorted(rows, key=lambda r: (r["category"], r["id"], r["sample"]))
    h = (len(rows) + cols - 1) // cols
    sheet = Image.new("RGB", (cols * px, h * (px + 14)), "white"); d = ImageDraw.Draw(sheet)
    for i, r in enumerate(rows):
        x, y = (i % cols) * px, (i // cols) * (px + 14)
        png = os.path.join(out_dir, f"{variant}_{r['id']}_s{r['sample']}.png")
        if r["passed"] and os.path.exists(png):
            sheet.paste(Image.open(png).convert("RGB").resize((px, px)), (x, y + 14))
            d.text((x + 2, y + 1), f"{r['category'][:6]} {r.get('taste', 0):.2f}", fill=(0, 0, 0))
        else:
            d.text((x + 2, y + 1), f"{r['category'][:6]} FAIL", fill=(200, 0, 0))
            d.text((x + 4, y + 40), (r["failure"] or "")[:24], fill=(200, 0, 0))
    path = os.path.join(out_dir, f"sheet_{variant}.png"); sheet.save(path)
    return path


def main():
    from train.render import Renderer
    from train.taste_model import TasteModel
    paths = sys.argv[1:]
    out_dir = os.path.join(os.path.dirname(os.path.abspath(paths[0])), "renders")
    taste = TasteModel()
    results = {}
    with Renderer() as renderer:
        for p in paths:
            v, rows = score_file(p, renderer, taste, out_dir)
            results[v] = rows
            print(f"scored {v}: {len(rows)} completions", flush=True)

    print(f"\n{'variant':8s} {'gate pass':>9s} {'taste|pass':>10s} {'taste/attempt':>13s} "
          f"{'love-like':>9s} {'hit limit':>9s} {'invented':>8s}  failures")
    for v, rows in results.items():
        s = summary(rows)
        print(f"{v:8s} {s['gate_pass']:9.0%} {s['taste_mean_passing']:10.3f} {s['taste_mean_all']:13.3f} "
              f"{s['love_like']:9.0%} {s['hit_token_limit']:9.0%} {s['invented_method']:8.0%}  {s['failures']}")
    if len(results) == 2:
        (va, ra), (vb, rb) = list(results.items())
        mean, lo, hi, p = paired_bootstrap(ra, rb)
        print(f"\n{vb} - {va}, taste per attempt (failures = 0), paired by prompt: "
              f"{mean:+.3f}  95% CI [{lo:+.3f}, {hi:+.3f}]  {vb} better in {p:.0%} of resamples")
        print("\nby category, taste per attempt:")
        for c in sorted({r["category"] for r in ra}):
            fa = [r.get("taste", 0.0) if r["passed"] else 0.0 for r in ra if r["category"] == c]
            fb = [r.get("taste", 0.0) if r["passed"] else 0.0 for r in rb if r["category"] == c]
            print(f"  {c:11s} n={len(fa):3d}  {va} {np.mean(fa):.3f}   {vb} {np.mean(fb):.3f}")
    for v, rows in results.items():
        print("contact sheet:", os.path.relpath(contact_sheet(rows, v, out_dir), ROOT))
    json.dump(results, open(os.path.join(os.path.dirname(out_dir), "scored.json"), "w"), indent=1)


if __name__ == "__main__":
    main()
