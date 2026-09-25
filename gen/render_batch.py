"""Render, gate and contact-sheet one round of a generation batch.

Used by the cloud agent between drafting and revising. It exists mostly to save
credit: the agent looks at ONE contact-sheet image per 12 paintings instead of
opening 12 renders, and reads a few summary lines instead of full metrics.

    python gen/render_batch.py gen/batches/batch_01.json --round 0

Expects sketches at gen/out/<batch>/<id>_r<round>.js. Writes next to each:
    <id>_r<round>.png          the render
    manifest.json              every sketch, round, gate result, metrics
    sheet_r<round>_<k>.png     4x3 contact sheets with id / PASS-FAIL / coverage
"""
from __future__ import annotations

import argparse
import glob
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, ROOT)


def _ensure_chrome():
    """Point Playwright at the Chrome that gen/cloud_setup.sh installed."""
    if os.environ.get("WC_CHROME"):
        return
    prof = "/etc/profile.d/wc_chrome.sh"
    if os.path.exists(prof):
        line = open(prof).read().strip()
        if "=" in line:
            os.environ["WC_CHROME"] = line.split("=", 1)[1]
            return
    found = sorted(glob.glob("/opt/chrome-*/chrome-linux64/chrome"))
    if found:
        os.environ["WC_CHROME"] = found[-1]


def contact_sheets(entries, out_dir, rnd, cols=4, rows=3, px=256):
    from PIL import Image, ImageDraw
    per = cols * rows
    paths = []
    for k in range(0, len(entries), per):
        chunk = entries[k:k + per]
        sheet = Image.new("RGB", (cols * px, rows * (px + 22)), "white")
        draw = ImageDraw.Draw(sheet)
        for i, e in enumerate(chunk):
            x, y = (i % cols) * px, (i // cols) * (px + 22)
            png = os.path.join(out_dir, e["stem"] + ".png")
            if os.path.exists(png):
                sheet.paste(Image.open(png).convert("RGB").resize((px, px)), (x, y + 22))
            status = "PASS" if e["passed"] else "FAIL"
            cov = e.get("coverage")
            label = f'{e["stem"]} {status}' + (f" cov {cov:.2f}" if cov is not None else "")
            draw.text((x + 4, y + 5), label, fill=(0, 0, 0) if e["passed"] else (200, 0, 0))
        path = os.path.join(out_dir, f"sheet_r{rnd}_{k // per + 1}.png")
        sheet.save(path)
        paths.append(path)
    return paths


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("batch", help="gen/batches/batch_XX.json")
    ap.add_argument("--round", type=int, required=True)
    args = ap.parse_args()

    _ensure_chrome()
    from train.gate import check_render, check_source, extract_code
    from train.render import Renderer

    items = {it["id"]: it for it in json.load(open(args.batch, encoding="utf-8"))}
    name = os.path.splitext(os.path.basename(args.batch))[0]
    out_dir = os.path.join(ROOT, "gen", "out", name)
    man_path = os.path.join(out_dir, "manifest.json")
    manifest = json.load(open(man_path, encoding="utf-8")) if os.path.exists(man_path) else {}

    sketches = sorted(glob.glob(os.path.join(out_dir, f"*_r{args.round}.js")))
    if not sketches:
        sys.exit(f"no sketches matching {out_dir}/*_r{args.round}.js")

    entries = []
    with Renderer() as r:
        for path in sketches:
            stem = os.path.basename(path)[:-3]
            item_id = stem.rsplit("_r", 1)[0]
            code = extract_code(open(path, encoding="utf-8").read())
            fails, _ = check_source(code)
            e = {"stem": stem, "id": item_id, "round": args.round,
                 **{k: items.get(item_id, {}).get(k) for k in ("category", "subject", "composition", "palette")},
                 "chars": len(code)}
            if not fails:
                res = r.render(code, seed=1, png_path=os.path.join(out_dir, stem + ".png"))
                rfails, facts = check_render(res)
                fails += rfails
                e.update({"coverage": facts.get("coverage"), "shapes": facts.get("shapes"),
                          "distinct_hues": facts.get("distinct_hues")})
            e["passed"] = not fails
            e["failures"] = fails
            manifest[stem] = e
            entries.append(e)

    json.dump(manifest, open(man_path, "w", encoding="utf-8"), indent=1)
    sheets = contact_sheets(entries, out_dir, args.round)

    ok = sum(e["passed"] for e in entries)
    print(f"round {args.round}: {ok}/{len(entries)} passed the gate")
    for e in entries:
        if not e["passed"]:
            print(f"  FAIL {e['stem']}: {e['failures'][0][:100]}")
    print("contact sheets:", " ".join(os.path.relpath(s, ROOT) for s in sheets))


if __name__ == "__main__":
    main()
