"""Build the supervised warm-start dataset from the rated generations.

Each example teaches: (system prompt + painting request) -> the exact p5.brush
sketch that produced a painting the rater liked.

  * love and okay sketches only; nope sketches are excluded;
  * loves are written twice, so the taste signal is not diluted by the
    larger okay tier (110 loves vs 377 okays);
  * 37 PROMPTS (train/heldout_prompts.json) are held out entirely for the
    before/after generation test -- all three rounds of a prompt go to the
    same side, or the test would measure memorisation;
  * the user message format here is the one the RL prompts will reuse.

    python train/build_sft.py
writes data/sft_train.jsonl and data/sft_eval_prompts.jsonl
"""
from __future__ import annotations

import collections
import glob
import json
import os
import random
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, ROOT)
from train.gate import extract_code  # noqa: E402

SYSTEM = open(os.path.join(ROOT, "env", "prompt.md"), encoding="utf-8").read().strip()
HOLDOUT = 0.12
SEED = 20261004
HELDOUT_FILE = os.path.join(HERE, "heldout_prompts.json")
MAX_TOKENS = 3328   # = data.max_length in soup_sft.yaml; longer examples are dropped,
                    # since truncating them would teach sketches that stop mid-code


def request(item: dict) -> str:
    """The user turn. RL prompts must use exactly this format."""
    lines = [f"Paint {item['subject']}."]
    if item.get("composition"):
        lines.append(f"Composition: {item['composition']}.")
    if item.get("palette"):
        lines.append(f"Palette: {item['palette']}.")
    return "\n".join(lines)


def main():
    ratings = json.load(open(os.path.join(ROOT, "gen", "ratings.json"), encoding="utf-8"))
    prompts = {}            # prompt id -> item (subject, composition, palette, category)
    examples = collections.defaultdict(list)   # prompt id -> [(tier, code)]
    for man in sorted(glob.glob(os.path.join(ROOT, "gen", "out", "batch_*", "manifest.json"))):
        batch = os.path.basename(os.path.dirname(man))
        for stem, e in json.load(open(man, encoding="utf-8")).items():
            pid = e["id"]
            prompts.setdefault(pid, {"id": pid, "subject": e.get("subject"),
                                     "composition": e.get("composition"),
                                     "palette": e.get("palette"),
                                     "category": e.get("category") or "flowers"})
            tier = (ratings.get(f"{batch}/{stem}") or {}).get("tier")
            js = os.path.join(ROOT, "gen", "out", batch, stem + ".js")
            if tier in ("love", "okay") and os.path.exists(js):
                examples[pid].append((tier, extract_code(open(js, encoding="utf-8").read()).strip()))

    # Held-out prompts: frozen in train/heldout_prompts.json so that adding
    # batches never moves a prompt between train and evaluation. Only when the
    # file is missing is a fresh split drawn (stratified by category).
    if os.path.exists(HELDOUT_FILE):
        held = set(json.load(open(HELDOUT_FILE, encoding="utf-8"))["ids"])
    else:
        rng = random.Random(SEED)
        by_cat = collections.defaultdict(list)
        for pid, it in sorted(prompts.items()):
            by_cat[it["category"]].append(pid)
        held = set()
        for cat, pids in by_cat.items():
            rng.shuffle(pids)
            held.update(pids[:max(1, round(len(pids) * HOLDOUT))])

    from transformers import AutoTokenizer
    tok = AutoTokenizer.from_pretrained("Qwen/Qwen3.5-4B")
    too_long = 0

    os.makedirs(os.path.join(ROOT, "data"), exist_ok=True)
    n_rows, tiers = 0, collections.Counter()
    with open(os.path.join(ROOT, "data", "sft_train.jsonl"), "w", encoding="utf-8") as f:
        for pid in sorted(examples):
            if pid in held:
                continue
            for tier, code in examples[pid]:
                row = {"messages": [{"role": "system", "content": SYSTEM},
                                    {"role": "user", "content": request(prompts[pid])},
                                    {"role": "assistant", "content": code}]}
                if len(tok.apply_chat_template(row["messages"], tokenize=True)) > MAX_TOKENS:
                    too_long += 1
                    continue
                for _ in range(2 if tier == "love" else 1):
                    f.write(json.dumps(row) + "\n"); n_rows += 1
                tiers[tier] += 1
    with open(os.path.join(ROOT, "data", "sft_eval_prompts.jsonl"), "w", encoding="utf-8") as f:
        for pid in sorted(held):
            f.write(json.dumps({**prompts[pid], "request": request(prompts[pid])}) + "\n")

    train_prompts = len([p for p in examples if p not in held and examples[p]])
    print(f"prompts: {len(prompts)} total, {len(held)} held out for evaluation "
          f"({dict(collections.Counter(prompts[p]['category'] for p in held))})")
    print(f"train: {tiers['love']} love (x2) + {tiers['okay']} okay = {n_rows} rows "
          f"from {train_prompts} prompts ({too_long} sketches over {MAX_TOKENS} tokens dropped)")
    print("example user turn:\n  " + request(prompts[sorted(prompts)[0]]).replace("\n", "\n  "))


if __name__ == "__main__":
    main()
