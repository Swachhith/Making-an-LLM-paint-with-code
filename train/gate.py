"""The gate: does this completion deserve to be scored at all?

Surya's rubric weights the gate at 0.05 -- it is not where quality comes from,
it is what stops the reward being spent on rollouts that never painted
anything. Two halves: a static check on the source, and a check on what the
render actually produced.

Returns a float in [0, 1] plus the reasons, so a training run can report *why*
rollouts are being rejected instead of only that they were.
"""
from __future__ import annotations

import json
import os
import re
from typing import Any

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
CONTRACT = json.load(open(os.path.join(ROOT, "env", "contract.json"), encoding="utf-8"))

ALLOWED = set(CONTRACT["allowedBrushMethods"])
BANNED = set(CONTRACT["bannedIdentifiers"])
LIMITS = CONTRACT["limits"]

_FENCE = re.compile(r"^\s*```(?:javascript|js)?\s*\n(.*?)\n\s*```\s*$", re.S | re.I)
_BRUSH_CALL = re.compile(r"brush\s*\.\s*(\w+)")
_IDENT = re.compile(r"(?<![\w.$])([A-Za-z_$][\w$]*)")

# Names bound by the sketch itself. A banned name that the sketch declares is
# shadowed and harmless -- 77 of the 178 reference sketches use `top` as a
# local for a petal's top edge, and flagging those would reject good paintings
# for ordinary variable naming.
_DECL = re.compile(
    r"(?:\b(?:const|let|var)\s+([A-Za-z_$][\w$]*)"      # const top = ...
    r"|\bfunction\s+([A-Za-z_$][\w$]*)"                  # function drawPetal(
    r"|\bfor\s*\(\s*(?:const|let|var)\s+([A-Za-z_$][\w$]*)"  # for (let top
    r"|\bclass\s+([A-Za-z_$][\w$]*))"
)
_PARAMS = re.compile(r"function\s*[\w$]*\s*\(([^)]*)\)")


_COMMENTS = re.compile(r"//[^\n]*|/\*.*?\*/", re.S)
_STRINGS = re.compile(r"'(?:\\.|[^'\\])*'|\"(?:\\.|[^\"\\])*\"|`(?:\\.|[^`\\])*`", re.S)


def strip_noncode(code: str) -> str:
    """Remove comments and string literals before scanning identifiers.

    Without this the scanner reads prose: 77 of the 178 reference sketches were
    rejected for the banned name `top` appearing only in a comment such as
    `// Petal 1 - top`. Colour literals like "#f6efe1" are likewise not code.
    """
    return _STRINGS.sub('""', _COMMENTS.sub(" ", code))


def _declared_names(code: str) -> set[str]:
    names: set[str] = set()
    for groups in _DECL.findall(code):
        names.update(g for g in groups if g)
    # Destructuring and multi-declarator forms: const a = 1, top = 2
    for chunk in re.findall(r"\b(?:const|let|var)\s+([^;=\n]+?)=", code):
        names.update(re.findall(r"[A-Za-z_$][\w$]*", chunk))
    for plist in _PARAMS.findall(code):
        names.update(re.findall(r"[A-Za-z_$][\w$]*", plist))
    return names


def extract_code(completion: str) -> str:
    """Models wrap code in fences despite being told not to. Strip them."""
    if not completion:
        return ""
    m = _FENCE.match(completion.strip())
    if m:
        return m.group(1)
    # Unterminated fence, or prose then a fence.
    if "```" in completion:
        parts = completion.split("```")
        for p in parts[1:]:
            p = re.sub(r"^(javascript|js)\s*\n", "", p, flags=re.I)
            if "function" in p or "brush." in p:
                return p.strip()
    return completion.strip()


def check_source(code: str) -> tuple[list[str], dict[str, Any]]:
    """Static checks. Returns (failures, facts)."""
    fails: list[str] = []
    facts: dict[str, Any] = {}

    facts["chars"] = len(code)
    if not code.strip():
        return (["empty completion"], facts)
    if len(code) > LIMITS["maxSourceChars"]:
        fails.append(f"source too long ({len(code)} chars)")

    # Must be a complete sketch in the corpus format.
    if not re.search(r"function\s+setup\s*\(", code):
        fails.append("no setup()")
    if not re.search(r"function\s+draw\s*\(", code):
        fails.append("no draw()")
    if not re.search(r"createCanvas\s*\(", code):
        fails.append("no createCanvas()")

    scan = strip_noncode(code)

    # Must actually use the library rather than painting with raw p5.
    used = _BRUSH_CALL.findall(scan)
    facts["brush_methods"] = sorted(set(used))
    facts["brush_calls_static"] = len(used)
    if not used:
        fails.append("uses no brush methods")

    invented = sorted(set(used) - ALLOWED)
    facts["invented_methods"] = invented
    if invented:
        fails.append("methods not on the allowlist: " + ", ".join(invented[:5]))

    # Cheats and escapes. Checked on identifiers, so `brush.fill` and a local
    # named `textWidth` don't trip the `text` rule.
    idents = set(_IDENT.findall(scan))
    hits = sorted((idents & BANNED) - _declared_names(scan))
    facts["banned_identifiers"] = hits
    if hits:
        fails.append("banned identifiers: " + ", ".join(hits[:5]))

    return (fails, facts)


def check_render(render: dict[str, Any]) -> tuple[list[str], dict[str, Any]]:
    """Checks on what the sketch actually painted."""
    fails: list[str] = []
    facts: dict[str, Any] = {}

    if not render.get("ok"):
        return ([f"render failed [{render.get('stage')}]: {render.get('error')}"], facts)

    m = render.get("metrics") or {}
    cov = m.get("coverage", 0.0)
    facts.update({
        "coverage": cov,
        "distinct_hues": m.get("distinctHues", 0),
        "shapes": render.get("shapes", 0),
        "brush_calls": render.get("brushCalls", 0),
        "settled": (render.get("settle") or {}).get("settled"),
    })

    if cov < LIMITS["minCoverage"]:
        fails.append(f"near-blank canvas (coverage {cov:.3f})")
    if cov > LIMITS["maxCoverage"]:
        fails.append(f"canvas flooded (coverage {cov:.3f})")
    if render.get("shapes", 0) < LIMITS["minShapes"]:
        fails.append(f"too few shapes ({render.get('shapes')})")
    if m.get("distinctHues", 0) < LIMITS["minDistinctHues"]:
        fails.append(f"too few distinct hues ({m.get('distinctHues')})")

    # A render that never settled produced an unknown intermediate frame. That
    # is infrastructure noise, not a bad painting -- the caller must drop the
    # rollout rather than score it 0, or the model trains on our own flakiness.
    if facts["settled"] is False:
        fails.append("INFRA: render never settled")

    return (fails, facts)


def gate(code: str, render: dict[str, Any] | None = None) -> dict[str, Any]:
    """Full gate. score is 1.0 only when nothing failed.

    `infra` marks failures that are our fault, not the model's; those rollouts
    should be excluded from the GRPO group entirely rather than scored zero.
    """
    fails, facts = check_source(code)
    if render is not None:
        rfails, rfacts = check_render(render)
        fails = fails + rfails
        facts.update(rfacts)
    infra = any(f.startswith("INFRA:") or "render failed [driver]" in f
                or "render failed [timeout]" in f for f in fails)
    return {"score": 0.0 if fails else 1.0, "passed": not fails,
            "failures": fails, "infra": infra, "facts": facts}


def length_score(code: str) -> float:
    """Binary, deliberately.

    Surya's original length ramp was ~32% of reward, saturated by step 30 and
    then produced zero gradient; his fixed run compressed code from 13,500 to
    under 2,000 tokens. Longer is explicitly not better -- this only rules out
    degenerate extremes.
    """
    n = len(code)
    cfg = CONTRACT["reward"]["length"]
    return 1.0 if cfg["minChars"] <= n <= cfg["maxChars"] else 0.0
