"""Put a policy model's scored generations into the rating UI.

    python gen/import_policy_samples.py results/sft_eval/v7/scored.json sft_v7 --variant sft

Reads the output of train/score_generations.py and writes gen/out/<name>/
(sketch .js, render .png, manifest.json) in the same layout render_batch.py
uses, so serve.py lists the paintings for rating and taste_model.py trains on
the ratings. Only gate-passing paintings are imported: there is nothing to rate
otherwise. Ratings of the model's own output are on-policy data -- exactly what
the reward model sees during RL -- so they are worth more per rating than
another batch from the generator.

build_sft.py reads only gen/out/batch_*, so these never become SFT targets
(their prompts are the held-out evaluation prompts).
"""
import argparse
import json
import os
import re
import shutil
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, ROOT)
from train.gate import extract_code  # noqa: E402

_THINK = re.compile(r"<think>.*?</think>", re.S | re.I)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("scored", help="scored.json from train/score_generations.py")
    ap.add_argument("name", help="output folder under gen/out/, e.g. sft_v7")
    ap.add_argument("--variant", default="sft", help="which variant in scored.json to import")
    ap.add_argument("--prompts", default=os.path.join(ROOT, "data", "sft_eval_prompts.jsonl"),
                    help="prompt file, for composition and palette")
    args = ap.parse_args()
    if args.name.startswith("batch_") or args.name.startswith("_"):
        sys.exit("name must not start with batch_ (reserved for generator batches) or _ (hidden)")

    rows = json.load(open(args.scored, encoding="utf-8"))[args.variant]
    prompts = {}
    if os.path.exists(args.prompts):
        prompts = {p["id"]: p for p in map(json.loads, open(args.prompts, encoding="utf-8"))}
    render_dir = os.path.join(os.path.dirname(os.path.abspath(args.scored)), "renders")
    out_dir = os.path.join(ROOT, "gen", "out", args.name)
    os.makedirs(out_dir, exist_ok=True)

    manifest = {}
    for r in rows:
        if not r["passed"]:
            continue
        png = os.path.join(render_dir, f"{args.variant}_{r['id']}_s{r['sample']}.png")
        if not os.path.exists(png):
            continue
        stem = f"{r['id']}_s{r['sample']}"
        shutil.copy(png, os.path.join(out_dir, stem + ".png"))
        with open(os.path.join(out_dir, stem + ".js"), "w", encoding="utf-8") as f:
            f.write(extract_code(_THINK.sub("", r["completion"])).strip() + "\n")
        p = prompts.get(r["id"], {})
        manifest[stem] = {"stem": stem, "id": r["id"], "round": None, "category": r.get("category"),
                          "subject": r.get("subject"), "composition": p.get("composition"),
                          "palette": p.get("palette"), "passed": True, "coverage": r.get("coverage"),
                          "source": f"policy:{args.name}"}
    json.dump(manifest, open(os.path.join(out_dir, "manifest.json"), "w", encoding="utf-8"), indent=1)
    print(f"imported {len(manifest)} of {len(rows)} {args.variant} generations into gen/out/{args.name}/")


if __name__ == "__main__":
    main()
