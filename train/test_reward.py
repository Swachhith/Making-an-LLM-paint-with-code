"""End-to-end check of reward.py on a fake GRPO group built from the pool.

One group of six rollouts, each exercising a different path:

    best love-tier sketch     -> should score highest
    median love-tier sketch   -> high
    worst okay-tier sketch    -> lower
    invented brush method     -> gate failure, must score exactly 0
    sketch that paints nothing-> gate failure (near-blank), must score 0
    love sketch, render forced to time out -> infra failure, must be IMPUTED
                                 to the group mean (zero advantage), never 0

    python train/test_reward.py
"""
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, ROOT)

from train.reward import Reward, local_render_fn, report  # noqa: E402

rows = json.load(open(os.path.join(ROOT, "pool", "pool.json"), encoding="utf-8"))


def src(r):
    stem = os.path.basename(r["source_file"])[:-3]
    return open(os.path.join(ROOT, "pool", "sources", f"{stem}.js"), encoding="utf-8").read()


love = sorted([r for r in rows if r["tier"] == "love"], key=lambda r: -r["hpsv3_mu"])
okay = sorted([r for r in rows if r["tier"] == "okay"], key=lambda r: r["hpsv3_mu"])

BROKEN = """async function setup() { createCanvas(600, 600, WEBGL); angleMode(DEGREES); noLoop(); }
function draw() { translate(-width/2, -height/2); background("#f6efe1");
  brush.watercolorPetal(300, 300, 120); }"""
BLANK = """async function setup() { createCanvas(600, 600, WEBGL); angleMode(DEGREES); noLoop(); }
function draw() { translate(-width/2, -height/2); background("#f6efe1");
  brush.noStroke(); brush.fill("#f6efe1", 5); brush.circle(300, 300, 10); }"""

cases = [
    ("best love", src(love[0])),
    ("median love", src(love[len(love) // 2])),
    ("worst okay", src(okay[0])),
    ("invented method", BROKEN),
    ("paints nothing", BLANK),
    ("render timeout", "```javascript\n" + src(love[1]) + "\n```"),
]

# Simulate a render timeout for the last case only -- the path that must be
# imputed rather than scored zero.
def flaky_render(codes):
    out = local_render_fn(codes[:-1]) if len(codes) > 1 else []
    return out + [{"ok": False, "stage": "timeout", "error": "simulated"}] \
        if codes else out


log = os.path.join(ROOT, "results", "reward_selftest.jsonl")
if os.path.exists(log):
    os.remove(log)

R = Reward(terms=["gate", "length", "pairwise"], render_fn=flaky_render, log_path=log)
subject = ["a hibiscus"] * len(cases)
totals = R([c for _, c in cases], subject=subject, prompts=["p"] * len(cases))

logged = [json.loads(l) for l in open(log, encoding="utf-8")]
print(f"{'case':18s} {'total':>6s}  {'imputed':>7s}  terms / failures")
for (name, _), t, row in zip(cases, totals, logged):
    detail = row["terms"] if row["passed"] else row["failures"][:1]
    print(f"{name:18s} {t:6.3f}  {str(row['imputed']):>7s}  {detail}")

good = [t for (n, _), t in zip(cases, totals) if n in ("best love", "median love", "worst okay")]
checks = {
    "invented method scores 0": totals[3] == 0.0,
    "paints nothing scores 0": totals[4] == 0.0,
    "timeout is imputed, not 0": logged[5]["imputed"] and totals[5] > 0,
    "imputed == mean of scored": abs(totals[5] - sum(totals[:5]) / 5) < 1e-9,
    "love >= okay (median love vs worst okay)": totals[1] >= totals[2],
}
print()
for k, v in checks.items():
    print(f"  [{'PASS' if v else 'FAIL'}] {k}")
print("\njudge:", json.dumps(R.judge.stats()["primary"]))
print()
report(log)
