"""How much learning signal does GRPO get at each sampling temperature?

    python train/grpo_signal.py results/hparam/tsweep

Reads <dir>/<variant>/scored.json (from `modal run train/modal_grpo.py::tsweep`)
and rebuilds each rollout's reward the way reward.py does (gate .05, length .05,
taste .60, renormalised; a gate failure scores 0). GRPO learns only from
differences *within* a prompt's group, so per variant it reports:

  pass          gate pass rate
  taste|pass    mean taste of passing paintings
  group std     mean within-group std of the reward  (total signal)
  taste std     mean within-group std of taste among passing rollouts only
  fail share    share of within-group reward variance explained by pass/fail
                -- high means GRPO mostly learns "don't break the sketch"
"""
import json
import os
import sys

import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, ROOT)
from train.gate import length_score  # noqa: E402

W = {"gate": 0.05, "length": 0.05, "taste": 0.60}


def reward(r):
    if not r["passed"]:
        return 0.0
    terms = {"gate": 1.0, "length": length_score("x" * r.get("chars", 0)), "taste": r.get("taste", 0.0)}
    return sum(W[k] * terms[k] for k in W) / sum(W.values())


def analyse(rows):
    groups = {}
    for r in rows:
        groups.setdefault(r["id"], []).append(r)
    stds, taste_stds, fail_shares = [], [], []
    for g in groups.values():
        rw = np.array([reward(r) for r in g])
        stds.append(rw.std())
        ok = [r.get("taste", 0.0) for r in g if r["passed"]]
        if len(ok) >= 2:
            taste_stds.append(np.std(ok))
        if rw.var() > 0:
            passed = np.array([r["passed"] for r in g], float)
            # variance explained by the pass/fail split (between-class / total)
            mu = rw.mean()
            between = sum(len(rw[passed == c]) * (rw[passed == c].mean() - mu) ** 2
                          for c in (0.0, 1.0) if (passed == c).any()) / len(rw)
            fail_shares.append(between / rw.var())
    ok = [r for r in rows if r["passed"]]
    return {"pass": len(ok) / len(rows), "taste|pass": np.mean([r.get("taste", 0) for r in ok]),
            "reward": np.mean([reward(r) for r in rows]), "group std": np.mean(stds),
            "taste std": np.mean(taste_stds), "fail share": np.mean(fail_shares) if fail_shares else 0.0,
            "hit limit": np.mean([r.get("hit_limit", False) for r in rows])}


def main():
    d = sys.argv[1] if len(sys.argv) > 1 else os.path.join(ROOT, "results", "hparam", "tsweep")
    print(f"{'variant':8s} {'pass':>5s} {'taste|pass':>10s} {'reward':>7s} {'group std':>9s} "
          f"{'taste std':>9s} {'fail share':>10s} {'hit limit':>9s}")
    for v in sorted(os.listdir(d)):
        f = os.path.join(d, v, "scored.json")
        if not os.path.exists(f):
            continue
        res = json.load(open(f, encoding="utf-8"))
        for name, rows in res.items():
            a = analyse(rows)
            print(f"{name:8s} {a['pass']:5.0%} {a['taste|pass']:10.3f} {a['reward']:7.3f} {a['group std']:9.3f} "
                  f"{a['taste std']:9.3f} {a['fail share']:10.0%} {a['hit limit']:9.0%}")


if __name__ == "__main__":
    main()
