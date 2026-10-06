"""Build the GRPO prompt set from every generation batch.

    python train/build_grpo_prompts.py

writes data/grpo_prompts.jsonl (every prompt except the held-out evaluation
prompts) and data/grpo_smoke.jsonl (8 prompts, for a 2-step smoke test).

Each row is the conversation up to the painting: the system prompt and the
request, in exactly the format build_sft.py trained on. The other columns
(id, category, subject) reach reward_fn as kwargs; reward.py groups rollouts
by prompt for imputation.
"""
import collections
import glob
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, ROOT)
from train.build_sft import HELDOUT_FILE, SYSTEM, request  # noqa: E402


def main():
    held = set(json.load(open(HELDOUT_FILE, encoding="utf-8"))["ids"])
    prompts = {}
    for f in sorted(glob.glob(os.path.join(ROOT, "gen", "batches", "batch_*.json"))):
        for it in json.load(open(f, encoding="utf-8")):
            it = {**it, "category": it.get("category") or "flowers"}
            prompts.setdefault(it["id"], it)
    rows = [{"messages": [{"role": "system", "content": SYSTEM},
                          {"role": "user", "content": request(it)}],
             "id": it["id"], "category": it["category"], "subject": it["subject"]}
            for pid, it in sorted(prompts.items()) if pid not in held]

    os.makedirs(os.path.join(ROOT, "data"), exist_ok=True)
    with open(os.path.join(ROOT, "data", "grpo_prompts.jsonl"), "w", encoding="utf-8") as f:
        for r in rows:
            f.write(json.dumps(r) + "\n")
    # one prompt per category: 8 prompts = 2 optimizer steps of 4 prompts x 8
    # paintings, so the smoke test covers a full step, an optimizer update and a
    # second generation with the updated weights, on dark and light paper alike
    smoke = [next(r for r in rows if r["category"] == c)
             for c in sorted({r["category"] for r in rows})]
    with open(os.path.join(ROOT, "data", "grpo_smoke.jsonl"), "w", encoding="utf-8") as f:
        for r in smoke:
            f.write(json.dumps(r) + "\n")
    print(f"{len(rows)} GRPO prompts ({len(held)} held out):",
          dict(collections.Counter(r["category"] for r in rows)))


if __name__ == "__main__":
    main()
