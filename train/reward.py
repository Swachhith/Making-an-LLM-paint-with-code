"""The reward: Surya's four-signal rubric, plus the diagnostics that saved him.

    gate 0.05 . length 0.05 . HPSv3 0.30 . taste 0.60

The 0.60 term was Surya's pairwise VLM judge. Here it is a taste model learned
from the rater's own ratings (train/taste_model.py): on the same paintings and
labels it beat the Gemma 4 31B judge on every measure (love vs okay 0.80 vs
0.63), costs nothing per call and needs no API. The pairwise judge remains
available as the "pairwise" term, e.g. as an independent cross-check.

Soup loads this file with `training.reward_fn: ./train/reward.py` and calls
`reward_fn(completions, **kwargs)`, which must return one finite float per
completion.

Design decisions that are load-bearing:

* **Every term is logged separately, per rollout** (results/reward_log.jsonl).
  Surya's first rubric plateaued at 0.65 for a whole run; the diagnosis came
  from scoring sub-rewards in isolation and finding five judges correlated at
  0.85-0.95, and a length term that had saturated by step 30. Run
  `python train/reward.py --report` to get the correlation matrix and the
  per-term saturation check at any point during training.

* **Infrastructure failures never score 0.** A render that timed out or a judge
  that did not answer is not a bad painting; Paniego measured this noise at
  1.5% of rollouts, 5.2% in his worst run. Soup requires a finite float, so such
  rollouts are given the mean of the successfully scored rollouts in their
  group. That makes their advantage exactly zero: they contribute no gradient
  and do not shift the baseline for anyone else.

* **A gate failure is the model's fault and does score 0**, and skips the paid
  or slow terms entirely -- there is nothing to judge.

* **One judge and one reference pair per group.** GRPO compares rollouts within
  a group, so all of them are judged by the same model against the same two
  references. Paniego found a step's reward depends heavily on which references
  it drew; drawing per group keeps that variation between groups, where the
  baseline absorbs it, instead of inside them.

* **Disabled terms are renormalised away**, matching Paniego's configs (his
  HPS-only run used 0.90 on HPSv3). With `scale_rewards: none` the reward scale
  sets the effective step size, so the enabled weights always sum to 1.

Configuration is by environment variable so the same file serves every phase:

    WC_REWARD_TERMS    gate,length,hpsv3,taste   (phase 1: gate,length)
    WC_TASTE_MODEL     env/taste_model.npz       (refit: python train/taste_model.py fit)
    WC_JUDGE           nvidia:google/gemma-4-31b-it   (only if "pairwise" is enabled)
    WC_FALLBACK_JUDGE  openrouter:z-ai/glm-5.3-flash
    WC_REWARD_LOG      results/reward_log.jsonl
"""
from __future__ import annotations

import atexit
import json
import math
import os
import re
import statistics
import sys
import threading
import time
from typing import Callable

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, ROOT)

from train.gate import check_render, check_source, extract_code, length_score  # noqa: E402

CONTRACT = json.load(open(os.path.join(ROOT, "env", "contract.json"), encoding="utf-8"))
WEIGHTS = CONTRACT["reward"]["weights"]
ALL_TERMS = ("gate", "length", "hpsv3", "taste", "pairwise")
DEFAULT_TERMS = ("gate", "length", "hpsv3", "taste")

# One seed for every rollout: the reward is then a deterministic function of the
# code, so two rollouts that wrote the same sketch score the same.
RENDER_SEED = 1

_THINK = re.compile(r"<think>.*?</think>", re.S | re.I)


# ---------------------------------------------------------------------------
# HPSv3 normalisation
# ---------------------------------------------------------------------------
def hps_prompt(subject: str) -> str:
    """Text HPSv3 scores the painting against.

    Paniego's environment used one fixed prompt for everything ("a loose
    watercolour flower"). With a multi-flower pool that stops HPSv3 checking
    *which* flower was painted, so the subject is kept -- and in our validation
    the "a watercolour painting of {subject}" wording separated the tiers best
    (AUC 0.901 vs 0.840 for the bare subject). Must be identical everywhere
    HPSv3 is called, or scores stop being comparable.
    """
    return f"a loose watercolour painting of {subject}"


def _hps_normaliser() -> Callable[[float], float]:
    """Map raw HPSv3 mu into (0, 1): logistic(mu / 4), centred on zero.

    This is Paniego's calibration (FineEnvs/watercolour-hpsv3 app.py): zero is the
    natural centre of a Bradley-Terry reward, and a scale of 4 spreads his measured
    tiers (mu -9.2 .. +5.2 at 448px) across the range without clipping, so a bad
    painting and a terrible one still differ -- the signal early training runs on.

    NOT fitted to the pool's `hpsv3_mu` column. That column is on a different
    scale (5.0-8.8, mean 7.07) that neither his environment nor our deployment
    reproduces (ours: mean -0.66 on the same images); fitting to it mapped every
    real score to ~0.0001 and would have made the 0.30 HPSv3 term a silent zero.
    """
    return lambda mu: 1.0 / (1.0 + math.exp(-mu / 4.0))


# ---------------------------------------------------------------------------
# Default renderer: local headless Chromium. Modal injects a fan-out instead.
# ---------------------------------------------------------------------------
_renderer = None
_renderer_lock = threading.Lock()


def local_render_fn(codes: list) -> list:
    global _renderer
    with _renderer_lock:
        if _renderer is None:
            from train.render import Renderer
            _renderer = Renderer().__enter__()
            atexit.register(lambda: _renderer.__exit__(None, None, None))
        return [_renderer.render(c, seed=RENDER_SEED) for c in codes]


# ---------------------------------------------------------------------------
# The reward function
# ---------------------------------------------------------------------------
class Reward:
    def __init__(self, terms=None, render_fn: Callable | None = None,
                 hps_fn: Callable | None = None, judge=None, taste=None,
                 log_path: str | None = None):
        terms = terms or os.environ.get("WC_REWARD_TERMS", ",".join(DEFAULT_TERMS)).split(",")
        self.terms = tuple(t.strip() for t in terms if t.strip())
        unknown = set(self.terms) - set(ALL_TERMS)
        if unknown:
            raise ValueError(f"unknown reward terms {unknown}; choose from {ALL_TERMS}")

        total = sum(WEIGHTS[t] for t in self.terms)
        self.weights = {t: WEIGHTS[t] / total for t in self.terms}

        self.render_fn = render_fn or local_render_fn
        self.hps_fn = hps_fn
        if "hpsv3" in self.terms and hps_fn is None:
            raise ValueError("hpsv3 is enabled but no hps_fn was given -- "
                             "deploy the HPSv3 scorer or drop the term")
        self.hps_norm = _hps_normaliser() if "hpsv3" in self.terms else None

        self.taste = taste
        if "taste" in self.terms and taste is None:
            from train.taste_model import TasteModel, WEIGHTS as TASTE_WEIGHTS
            path = os.environ.get("WC_TASTE_MODEL", TASTE_WEIGHTS)
            if not os.path.exists(path):
                raise ValueError(f"taste is enabled but {path} does not exist -- "
                                 "run `python train/taste_model.py fit`")
            self.taste = TasteModel(path)   # encoders load lazily, on first use

        self.judge = judge
        if "pairwise" in self.terms and judge is None:
            from train.judge import FALLBACK_JUDGE, DEFAULT_JUDGE, GroupJudge
            self.judge = GroupJudge(os.environ.get("WC_JUDGE", DEFAULT_JUDGE),
                                    os.environ.get("WC_FALLBACK_JUDGE", FALLBACK_JUDGE))
        self.pool = None
        if "pairwise" in self.terms:
            from train.judge import ReferencePool
            self.pool = ReferencePool()

        self.log_path = log_path or os.environ.get(
            "WC_REWARD_LOG", os.path.join(ROOT, "results", "reward_log.jsonl"))
        os.makedirs(os.path.dirname(self.log_path), exist_ok=True)
        self.calls = 0

    # -- helpers ------------------------------------------------------------
    @staticmethod
    def _text(completion) -> str:
        """TRL passes plain strings, or message lists for conversational data."""
        if isinstance(completion, str):
            return completion
        if isinstance(completion, list) and completion:
            last = completion[-1]
            return last.get("content", "") if isinstance(last, dict) else str(last)
        return str(completion or "")

    @staticmethod
    def _group_keys(n: int, kwargs: dict) -> list:
        """Group rollouts by the prompt they answer, whatever order TRL uses."""
        prompts = kwargs.get("prompts")
        if prompts and len(prompts) == n:
            return [json.dumps(p, sort_keys=True, default=str) for p in prompts]
        subjects = kwargs.get("subject")
        if subjects and len(subjects) == n:
            return [str(s) for s in subjects]
        return ["all"] * n

    # -- main entry ---------------------------------------------------------
    def __call__(self, completions: list, **kwargs) -> list:
        self.calls += 1
        t0 = time.time()
        n = len(completions)
        subjects = kwargs.get("subject") or ["a hibiscus"] * n
        groups = self._group_keys(n, kwargs)

        codes = [extract_code(_THINK.sub("", self._text(c))) for c in completions]
        rows = [{"call": self.calls, "i": i, "group": groups[i][:80],
                 "subject": subjects[i], "chars": len(codes[i]),
                 "terms": {}, "imputed": False, "failures": []} for i in range(n)]

        # 1. static gate -- no point rendering code that cannot pass
        static_ok = []
        for i, code in enumerate(codes):
            fails, _ = check_source(code)
            rows[i]["failures"] += fails
            static_ok.append(not fails)

        # 2. render what survived
        to_render = [i for i in range(n) if static_ok[i]]
        renders = dict(zip(to_render, self.render_fn([codes[i] for i in to_render]))) \
            if to_render else {}

        # 3. full gate on the render
        passed, infra = [False] * n, [False] * n
        for i in to_render:
            rfails, facts = check_render(renders[i])
            rows[i]["failures"] += rfails
            rows[i]["coverage"] = facts.get("coverage")
            if any(f.startswith("INFRA:") or "[driver]" in f or "[timeout]" in f
                   for f in rfails):
                infra[i] = True
            elif not rfails:
                passed[i] = True

        for i in range(n):
            if "gate" in self.terms:
                rows[i]["terms"]["gate"] = 1.0 if passed[i] else 0.0
            if "length" in self.terms:
                rows[i]["terms"]["length"] = length_score(codes[i]) if passed[i] else 0.0

        good = [i for i in range(n) if passed[i]]

        # 4. HPSv3
        if "hpsv3" in self.terms and good:
            raw = self.hps_fn([renders[i]["png_b64"] for i in good],
                              [hps_prompt(subjects[i]) for i in good])
            for i, mu in zip(good, raw):
                if mu is None:
                    infra[i] = True
                else:
                    rows[i]["hpsv3_mu"] = mu
                    rows[i]["terms"]["hpsv3"] = self.hps_norm(mu)

        # 5. taste model -- an absolute score per painting, learned from ratings.
        #    A failure here (model load, OOM) is infrastructure, never a 0.
        if "taste" in self.terms:
            idx = [i for i in good if not infra[i]]
            if idx:
                try:
                    scores = self.taste.score([renders[i]["png_b64"] for i in idx])
                except Exception as e:
                    scores = [None] * len(idx)
                    for i in idx:
                        rows[i]["failures"].append(f"INFRA: taste model: {type(e).__name__}: {e}")
                for i, s in zip(idx, scores):
                    if s is None:
                        infra[i] = True
                    else:
                        rows[i]["terms"]["taste"] = s

        # 6. pairwise judge -- one reference pair and one judge per group
        if "pairwise" in self.terms and good:
            for g in dict.fromkeys(groups[i] for i in good):
                idx = [i for i in good if groups[i] == g and not infra[i]]
                if not idx:
                    continue
                refs = self.pool.sample()
                # Each reference carries its own subject: the pool mixes flowers,
                # and the judge must not reward a candidate for merely being a
                # different species from the reference.
                scores, judge_name = self.judge.score_group(
                    [renders[i]["png_b64"] for i in idx], [r["png"] for r in refs],
                    subjects[idx[0]], [r.get("subject") or "a flower" for r in refs])
                for i, s in zip(idx, scores):
                    rows[i]["judge"] = judge_name
                    rows[i]["refs"] = [r["stem"] for r in refs]
                    if s is None:
                        infra[i] = True
                    else:
                        rows[i]["terms"]["pairwise"] = s

        # 7. combine; gate failures score 0, infra failures are imputed
        totals: list = [None] * n
        for i in range(n):
            if infra[i]:
                continue
            if not passed[i]:
                totals[i] = 0.0
            else:
                totals[i] = sum(self.weights[t] * rows[i]["terms"].get(t, 0.0)
                                for t in self.terms)

        for g in set(groups):
            members = [i for i in range(n) if groups[i] == g]
            scored = [totals[i] for i in members if totals[i] is not None]
            fill = sum(scored) / len(scored) if scored else 0.0
            for i in members:
                if totals[i] is None:
                    totals[i] = fill
                    rows[i]["imputed"] = True

        # 8. log
        dt = time.time() - t0
        with open(self.log_path, "a", encoding="utf-8") as f:
            for i in range(n):
                rows[i]["total"] = totals[i]
                rows[i]["passed"] = passed[i]
                rows[i]["seconds"] = round(dt, 1)
                f.write(json.dumps(rows[i]) + "\n")
        return [float(t) for t in totals]


# ---------------------------------------------------------------------------
# Soup entry point
# ---------------------------------------------------------------------------
_default: Reward | None = None


def reward_fn(completions, **kwargs):
    global _default
    if _default is None:
        _default = Reward()
    return _default(completions, **kwargs)


# ---------------------------------------------------------------------------
# Diagnostics: the check that found Surya's plateau
# ---------------------------------------------------------------------------
def report(log_path: str | None = None, last_calls: int | None = None) -> None:
    path = log_path or os.path.join(ROOT, "results", "reward_log.jsonl")
    rows = [json.loads(l) for l in open(path, encoding="utf-8") if l.strip()]
    if last_calls:
        cut = max(r["call"] for r in rows) - last_calls
        rows = [r for r in rows if r["call"] > cut]
    n = len(rows)
    passed = [r for r in rows if r.get("passed") and not r.get("imputed")]
    print(f"{n} rollouts over {len({r['call'] for r in rows})} reward calls | "
          f"gate pass {len(passed) / max(1, n):.0%} | "
          f"imputed (infra) {sum(r['imputed'] for r in rows) / max(1, n):.1%}")

    scored = [r for r in rows if not r.get("imputed")]
    terms = [t for t in ALL_TERMS if any(t in r["terms"] for r in scored)]
    if not scored or not terms:
        return

    # gate and length are recorded for every rollout, so their variance comes
    # from failures and is measured over all scored rollouts. Among passing
    # rollouts gate is 1.0 by definition and would always look constant --
    # hiding exactly the saturation this report exists to catch.
    print("\nper term:")
    for t in terms:
        pool = scored if t in ("gate", "length") else passed
        v = [r["terms"][t] for r in pool if t in r["terms"]]
        if not v:
            continue
        # A term that is constant within a group contributes zero advantage.
        # Surya's length ramp did exactly this from step 30 on.
        by_group: dict = {}
        for r in pool:
            if t in r["terms"]:
                by_group.setdefault((r["call"], r["group"]), []).append(r["terms"][t])
        flat = [g for g in by_group.values() if len(g) > 1 and max(g) - min(g) < 1e-9]
        multi = [g for g in by_group.values() if len(g) > 1]
        print(f"  {t:9s} mean {statistics.fmean(v):.3f}  sd {statistics.pstdev(v):.3f}  "
              f"zero-variance groups {len(flat)}/{len(multi)}")

    # gate is 1.0 on every passing rollout, so it cannot correlate with anything.
    terms = [t for t in terms if t != "gate"]
    if len(terms) > 1:
        print("\npearson r between terms, gate-passing rollouts "
              "(> ~0.85 means two terms measure one thing):")
        print("           " + "".join(f"{t:>10s}" for t in terms))
        for a in terms:
            line = f"  {a:9s}"
            for b in terms:
                pairs = [(r["terms"][a], r["terms"][b]) for r in passed
                         if a in r["terms"] and b in r["terms"]]
                if len(pairs) < 3:
                    line += f"{'--':>10s}"
                    continue
                xs, ys = zip(*pairs)
                try:
                    line += f"{statistics.correlation(xs, ys):>10.2f}"
                except statistics.StatisticsError:
                    line += f"{'const':>10s}"
            print(line)


if __name__ == "__main__":
    if "--report" in sys.argv:
        report()
