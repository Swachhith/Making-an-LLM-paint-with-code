"""End-to-end check of reward.py on one fake GRPO group, fully offline.

Default terms (gate, length, taste); HPSv3 needs its GPU service, so it is left
out here. Six rollouts, each exercising a different path:

    a sketch the rater loved           -> highest taste score
    a sketch the rater rated okay      -> middle
    a sketch the rater rated nope      -> lowest of the three
    invented brush method              -> gate failure, must score exactly 0
    sketch that paints nothing         -> gate failure (near-blank), must score 0
    loved sketch, render forced to time out -> infra failure, must be IMPUTED
                                          to the group mean (zero advantage)

The rated sketches are part of the taste model's training data, so this checks
the wiring, not generalisation -- that is measured in train/taste_model.py.

    python train/test_reward.py
"""
import glob
import json
import os
import random
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, ROOT)

from train.reward import Reward, local_render_fn, report  # noqa: E402

ratings = json.load(open(os.path.join(ROOT, "gen", "ratings.json"), encoding="utf-8"))
rng = random.Random(7)
by_tier = {}
for key, v in sorted(ratings.items()):
    js = os.path.join(ROOT, "gen", "out", *key.split("/")) + ".js"
    if os.path.exists(js):
        by_tier.setdefault(v["tier"], []).append((key, js, v.get("subject") or "a flower"))
pick = {t: rng.choice(by_tier[t]) for t in ("love", "okay", "nope")}

BROKEN = """async function setup() { createCanvas(600, 600, WEBGL); angleMode(DEGREES); noLoop(); }
function draw() { translate(-width/2, -height/2); background("#f6efe1");
  brush.watercolorPetal(300, 300, 120); }"""
BLANK = """async function setup() { createCanvas(600, 600, WEBGL); angleMode(DEGREES); noLoop(); }
function draw() { translate(-width/2, -height/2); background("#f6efe1");
  brush.noStroke(); brush.fill("#f6efe1", 5); brush.circle(300, 300, 10); }"""

src = lambda t: open(pick[t][1], encoding="utf-8").read()
cases = [
    ("rated love", src("love"), pick["love"][2]),
    ("rated okay", src("okay"), pick["okay"][2]),
    ("rated nope", src("nope"), pick["nope"][2]),
    ("invented method", BROKEN, "a flower"),
    ("paints nothing", BLANK, "a flower"),
    ("render timeout", "```javascript\n" + src("love") + "\n```", pick["love"][2]),
]


def flaky_render(codes):
    """Render normally, except force a timeout on the last sketch."""
    out = local_render_fn(codes[:-1]) if len(codes) > 1 else []
    return out + [{"ok": False, "stage": "timeout", "error": "simulated"}] if codes else out


log = os.path.join(ROOT, "results", "reward_selftest.jsonl")
if os.path.exists(log):
    os.remove(log)

R = Reward(terms=["gate", "length", "taste"], render_fn=flaky_render, log_path=log)
totals = R([c for _, c, _ in cases], subject=[s for _, _, s in cases], prompts=["p"] * len(cases))

logged = [json.loads(l) for l in open(log, encoding="utf-8")]
print(f"{'case':16s} {'total':>6s}  {'imputed':>7s}  terms / failures")
for (name, _, _), t, row in zip(cases, totals, logged):
    detail = {k: round(v, 3) for k, v in row["terms"].items()} if row["passed"] else row["failures"][:1]
    print(f"{name:16s} {t:6.3f}  {str(row['imputed']):>7s}  {detail}")

taste = {name: row["terms"].get("taste") for (name, _, _), row in zip(cases, logged)}
checks = {
    "invented method scores 0": totals[3] == 0.0,
    "paints nothing scores 0": totals[4] == 0.0,
    "timeout is imputed, not 0": logged[5]["imputed"] and totals[5] > 0,
    "imputed == mean of scored": abs(totals[5] - sum(totals[:5]) / 5) < 1e-9,
    "taste: love > okay > nope": taste["rated love"] > taste["rated okay"] > taste["rated nope"],
}
print()
for k, v in checks.items():
    print(f"  [{'PASS' if v else 'FAIL'}] {k}")
print()
report(log)
sys.exit(0 if all(checks.values()) else 1)
