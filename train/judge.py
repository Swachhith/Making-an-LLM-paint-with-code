"""Pairwise aesthetic judge, backend-agnostic.

Surya's key reward finding: absolute 0-10 scoring compressed near zero and gave
no dynamic range, while "which of these two is the better watercolour" opened
it up. A vision model handles a relative question far more reliably than an
abstract scale.

Load-bearing design notes:

* Comparisons are **batched** -- one request carries the candidate and both
  references and returns both verdicts, then a second request repeats with the
  candidate in a different position to cancel position bias. Two requests per
  rollout instead of four.
* Every judge model measured so far emits a reasoning trace before answering,
  and none of them let you switch it off. So the prompt asks for a terminal
  `ANSWER: a,b` sentinel and the parser reads that line, not the whole reply.
* Failures return None, never 0.0. A throttled judge is not a bad painting;
  scoring it zero trains the model on our own infrastructure noise.
* One judge model serves a whole GRPO group. Mixing judges inside a group would
  feed judge-strictness differences straight into the advantages.

Judges are named "<backend>:<model>", e.g.
    openrouter:thinkingmachines/inkling-small
    google:gemma-4-31b-it
"""
from __future__ import annotations

import base64
import collections
import io
import json
import os
import random
import re
import threading
import time
import urllib.error
import urllib.request

try:
    from PIL import Image
except ImportError:
    Image = None

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
CONTRACT = json.load(open(os.path.join(ROOT, "env", "contract.json"), encoding="utf-8"))

# Chosen on a 20-vs-20 benchmark against the pool tiers (train/bench_judge.py):
# Gemma 4 31B via NVIDIA AUC 0.820, GLM-5.3-flash AUC 0.730; paired bootstrap
# puts Gemma ahead in 88% of resamples. Gemma also spreads scores over the
# range (love 0.76 / okay 0.33) where GLM bunches them near zero.
DEFAULT_JUDGE = "nvidia:google/gemma-4-31b-it"
FALLBACK_JUDGE = "openrouter:z-ai/glm-5.3-flash"

# Judged on washes and edges, not fine detail. 384px cuts the payload ~7x
# against a full 600px render with no measurable change in verdicts.
JUDGE_IMAGE_PX = 384

RUBRIC = (
    "You are judging watercolour paintings.\n"
    "Weigh, in this order: does it read as the subject described; does it look like "
    "real watercolour (soft bleeding edges, translucent washes, pigment pooling "
    "where shapes meet, paper showing through); is it a pleasing composition.\n"
    "Penalise flat even fills, hard vector-like edges, muddy colour, empty canvases.\n"
    "A full-bleed painting (sky or landscape to the edges) is as valid as one on "
    "bare paper; do not prefer either."
)


class JudgeUnavailable(RuntimeError):
    """The judge cannot serve any request -- bad key, no access, quota gone.

    Raised rather than returned: these do not recover on retry, and a judge
    silently returning None for every rollout would leave a run with its
    0.60-weight term absent while merely looking flaky.
    """


def _env(name: str) -> str | None:
    if os.environ.get(name):
        return os.environ[name]
    path = os.path.join(ROOT, ".env")
    if os.path.exists(path):
        for line in open(path, encoding="utf-8"):
            if line.startswith(name + "="):
                return line.split("=", 1)[1].strip()
    return None


_thumb_cache: dict = {}


def _b64_image(png, px: int = JUDGE_IMAGE_PX) -> str:
    key = png if isinstance(png, str) and os.path.exists(png) else None
    if key and key in _thumb_cache:
        return _thumb_cache[key]

    if isinstance(png, str):
        if png.startswith("data:"):
            raw = base64.b64decode(png.split(",", 1)[1])
        elif os.path.exists(png):
            raw = open(png, "rb").read()
        else:
            raw = base64.b64decode(png)
    else:
        raw = png

    if Image is not None and px:
        try:
            im = Image.open(io.BytesIO(raw)).convert("RGB")
            if max(im.size) > px:
                im = im.resize((px, px), Image.LANCZOS)
            buf = io.BytesIO()
            im.save(buf, "PNG", optimize=True)
            raw = buf.getvalue()
        except Exception:
            pass

    out = base64.b64encode(raw).decode()
    if key:
        _thumb_cache[key] = out
    return out


class RateLimiter:
    """Token bucket over requests/min, tokens/min and requests/day.

    Proactive: acquire() blocks until a request is safe to send. With published
    hard limits this beats reactive backoff -- no wasted calls, and step times
    stay predictable instead of collapsing under retry storms. Set rpm/tpm to 0
    to disable a dimension (paid endpoints with generous limits).
    """

    def __init__(self, rpm: int = 0, tpm: int = 0, rpd: int = 0, headroom: float = 0.9):
        self.rpm = int(rpm * headroom) if rpm else 0
        self.tpm = int(tpm * headroom) if tpm else 0
        self.rpd = rpd
        self.lock = threading.Lock()
        self.req_times: collections.deque = collections.deque()
        self.tok_events: collections.deque = collections.deque()
        self.day_count = 0
        self.day_start = time.time()
        self.waited_s = 0.0

    def _prune(self, now):
        while self.req_times and now - self.req_times[0] > 60:
            self.req_times.popleft()
        while self.tok_events and now - self.tok_events[0][0] > 60:
            self.tok_events.popleft()
        if now - self.day_start > 86400:
            self.day_start, self.day_count = now, 0

    def acquire(self, est_tokens: int):
        if not (self.rpm or self.tpm or self.rpd):
            return
        while True:
            with self.lock:
                now = time.time()
                self._prune(now)
                if self.rpd and self.day_count >= self.rpd:
                    raise JudgeUnavailable(
                        f"daily request cap reached ({self.rpd}); resets in "
                        f"{(86400 - (now - self.day_start)) / 3600:.1f}h")
                tok = sum(t for _, t in self.tok_events)
                ok_rpm = (not self.rpm) or len(self.req_times) < self.rpm
                ok_tpm = (not self.tpm) or tok + est_tokens <= self.tpm
                if ok_rpm and ok_tpm:
                    self.req_times.append(now)
                    self.tok_events.append((now, est_tokens))
                    self.day_count += 1
                    return
                waits = []
                if self.req_times:
                    waits.append(60 - (now - self.req_times[0]))
                if self.tok_events:
                    waits.append(60 - (now - self.tok_events[0][0]))
                positive = [w for w in waits if w > 0]
                wait = max(0.05, min(positive) if positive else 0.5)
            self.waited_s += wait
            time.sleep(wait)

    def correct(self, actual: int):
        with self.lock:
            if self.tok_events:
                ts, _ = self.tok_events[-1]
                self.tok_events[-1] = (ts, actual)


class BaseJudge:
    """Shared prompt construction, parsing and scoring.

    Subclasses implement _send(content, max_out) -> (text|None, tokens, cost).
    `content` is a backend-neutral list of {"text": str} and {"image": b64}.
    """

    name = "base"

    def __init__(self, model: str, subject: str = "a hibiscus", timeout: int = 120,
                 retries: int = 3, image_px: int = JUDGE_IMAGE_PX,
                 rpm: int = 0, tpm: int = 0, rpd: int = 0, max_out: int = 3000):
        self.model = model
        self.subject = subject
        self.timeout = timeout
        self.retries = retries
        self.image_px = image_px
        self.max_out = max_out
        self.limiter = RateLimiter(rpm, tpm, rpd)
        self.calls = 0
        self.failures = 0
        self.tokens_used = 0
        self.cost = 0.0
        self.latencies: list = []
        self.errors: list = []
        self._est_tokens = 1300

    # -- to implement ------------------------------------------------------
    def _send(self, content: list, max_out: int):
        raise NotImplementedError

    # -- prompt ------------------------------------------------------------
    def _round(self, images: list, pairs: list, subjects: list | None = None):
        """Ask for several pairwise verdicts in one request.

        `pairs` are 1-based index pairs into `images`. Returns the winning
        index per pair, or None where the verdict could not be read.

        `subjects` names what EACH image is meant to depict. With a multi-flower
        pool the references are usually a different flower from the candidate
        (Paniego's pool is all hibiscus), and "which is the better painting of a
        coral peony?" against a hibiscus reference rewards any recognisable peony
        for its subject alone. Each image is judged against its own subject.
        """
        qs = "; ".join(f"image {a} or image {b}" for a, b in pairs)
        example = ",".join(str(p[0]) for p in pairs)
        if subjects:
            listing = "; ".join(f"image {i + 1} is meant to show {s}"
                                for i, s in enumerate(subjects))
            header = (f"{len(images)} watercolour paintings, numbered 1 to {len(images)}. "
                      f"{listing}.")
            question = ("Which is the better watercolour painting of its own subject: "
                        f"{qs}?\nJudge each image against what it is meant to show; "
                        "do not prefer one flower species over another.")
        else:
            header = (f"{len(images)} watercolour paintings of {self.subject}, "
                      f"numbered 1 to {len(images)}.")
            question = f"Which is the better watercolour painting: {qs}?"
        content = [{"text": header}]
        for b64 in images:
            content.append({"image": b64})
        content.append({"text": (
            f"{RUBRIC}\n\n{question}\n"
            f"You must pick one for each; ties are not allowed.\n"
            f"Think briefly, then end your reply with exactly this final line:\n"
            f"ANSWER: {example.replace(example, ','.join('<n>' for _ in pairs))}"
        )})

        txt = self._send(content, self.max_out)
        if txt is None:
            return [None] * len(pairs)

        # Read the sentinel line; fall back to the last numbers in the reply.
        m = re.search(r"ANSWER\s*:\s*([^\n]+)", txt, re.I)
        nums = [int(x) for x in re.findall(r"\d+", m.group(1))] if m else []
        if len(nums) < len(pairs):
            nums = [int(x) for x in re.findall(r"\d+", txt)][-len(pairs):]

        out = []
        for i, (a, b) in enumerate(pairs):
            v = nums[i] if i < len(nums) else None
            out.append(v if v in (a, b) else None)
        if all(v is None for v in out):
            self.errors.append(f"unparseable: {txt[-120:]!r}")
        return out

    # -- scoring -----------------------------------------------------------
    def score(self, candidate_png, reference_pngs: list,
              candidate_subject: str | None = None,
              reference_subjects: list | None = None) -> dict:
        """Fraction of comparisons the candidate wins.

        Two requests: the candidate leads in the first and trails in the
        second, so a model that favours whichever image comes first cancels
        out. score=None when too few verdicts returned to mean anything, so
        the caller drops the rollout rather than scoring it zero.

        Pass candidate_subject and reference_subjects whenever the references
        can be a different flower from the candidate.
        """
        cand = _b64_image(candidate_png, self.image_px)
        refs = [_b64_image(r, self.image_px) for r in reference_pngs]
        n = len(refs)
        wins = done = 0
        per_image = candidate_subject is not None and reference_subjects is not None
        s1 = [candidate_subject] + list(reference_subjects) if per_image else None
        s2 = list(reference_subjects) + [candidate_subject] if per_image else None

        for v in self._round([cand] + refs, [(1, i + 2) for i in range(n)], s1):
            if v is not None:
                done += 1
                wins += 1 if v == 1 else 0
        for v in self._round(refs + [cand], [(i + 1, n + 1) for i in range(n)], s2):
            if v is not None:
                done += 1
                wins += 1 if v == n + 1 else 0

        expected = 2 * n
        if done < max(1, expected // 2):
            return {"score": None, "wins": wins, "comparisons": done,
                    "expected": expected, "reason": "too many judge failures"}
        return {"score": wins / done, "wins": wins,
                "comparisons": done, "expected": expected}

    def stats(self) -> dict:
        n = max(1, self.calls)
        lat = sorted(self.latencies)
        return {"judge": f"{self.name}:{self.model}",
                "requests": self.calls, "failures": self.failures,
                "tokens": self.tokens_used,
                "tokens_per_request": round(self.tokens_used / n),
                "cost_usd": round(self.cost, 5),
                "median_latency_s": round(lat[len(lat) // 2], 2) if lat else None,
                "throttle_wait_s": round(self.limiter.waited_s, 1)}


class OpenRouterJudge(BaseJudge):
    name = "openrouter"
    URL = "https://openrouter.ai/api/v1/chat/completions"

    def __init__(self, model: str = "thinkingmachines/inkling-small", **kw):
        super().__init__(model, **kw)
        self.key = _env("OPENROUTER_API_KEY")
        if not self.key:
            raise JudgeUnavailable("no OPENROUTER_API_KEY (env or .env)")

    def _extra_body(self) -> dict:
        return {}

    def _send(self, content: list, max_out: int):
        parts = []
        for c in content:
            if "text" in c:
                parts.append({"type": "text", "text": c["text"]})
            else:
                parts.append({"type": "image_url", "image_url":
                              {"url": "data:image/png;base64," + c["image"]}})
        body = {"model": self.model, "messages": [{"role": "user", "content": parts}],
                "temperature": 0.0, "max_tokens": max_out}
        body.update(self._extra_body())
        data = json.dumps(body).encode()
        headers = {"Content-Type": "application/json",
                   "Authorization": f"Bearer {self.key}"}

        for attempt in range(self.retries + 1):
            self.limiter.acquire(self._est_tokens)
            t0 = time.time()
            try:
                req = urllib.request.Request(self.URL, data=data, headers=headers)
                with urllib.request.urlopen(req, timeout=self.timeout) as r:
                    out = json.loads(r.read())
            except urllib.error.HTTPError as e:
                try:
                    detail = e.read()[:300].decode(errors="replace")
                except Exception:
                    detail = ""
                if e.code in (401, 402, 403):
                    raise JudgeUnavailable(f"HTTP {e.code}: {detail}") from None
                if e.code in (408, 429, 500, 502, 503, 504) and attempt < self.retries:
                    time.sleep(min(2 ** attempt * 2, 20))
                    continue
                self.failures += 1
                self.errors.append(f"HTTP {e.code}: {detail}")
                return None
            except Exception as e:
                if attempt < self.retries:
                    time.sleep(2 ** attempt * 2)
                    continue
                self.failures += 1
                self.errors.append(f"{type(e).__name__}: {e}")
                return None

            self.latencies.append(time.time() - t0)
            usage = out.get("usage") or {}
            used = usage.get("total_tokens") or 0
            if used:
                self.limiter.correct(used)
                self._est_tokens = int(0.7 * self._est_tokens + 0.3 * used)
                self.tokens_used += used
            self.cost += float(usage.get("cost") or 0.0)
            self.calls += 1

            if out.get("error"):
                self.errors.append(f"body error: {json.dumps(out['error'])[:200]}")
                return None
            choice = (out.get("choices") or [{}])[0]
            txt = (choice.get("message") or {}).get("content")
            if not txt or not txt.strip():
                # finish_reason 'length' means it ran out of budget mid-reasoning
                # and emitted nothing -- raise max_out rather than treat as a loss.
                self.errors.append(
                    f"empty response (finish={choice.get('finish_reason')}, "
                    f"completion_tokens={(out.get('usage') or {}).get('completion_tokens')})")
                return None
            return txt.strip()

        self.failures += 1
        return None


class GoogleJudge(BaseJudge):
    name = "google"
    URL = "https://generativelanguage.googleapis.com/v1beta/models/{m}:generateContent"

    def __init__(self, model: str = "gemma-4-31b-it", rpm: int = 30,
                 tpm: int = 16_000, rpd: int = 13_000, **kw):
        kw.setdefault("max_out", 3000)
        super().__init__(model, rpm=rpm, tpm=tpm, rpd=rpd, **kw)
        self.key = _env("GEMINI_API_KEY")
        if not self.key:
            raise JudgeUnavailable("no GEMINI_API_KEY (env or .env)")

    def _send(self, content: list, max_out: int):
        parts = []
        for c in content:
            if "text" in c:
                parts.append({"text": c["text"]})
            else:
                parts.append({"inline_data": {"mime_type": "image/png",
                                              "data": c["image"]}})
        body = {"contents": [{"role": "user", "parts": parts}],
                "generationConfig": {"temperature": 0.0, "maxOutputTokens": max_out}}
        data = json.dumps(body).encode()
        url = self.URL.format(m=self.model) + f"?key={self.key}"

        for attempt in range(self.retries + 1):
            self.limiter.acquire(self._est_tokens)
            t0 = time.time()
            try:
                req = urllib.request.Request(
                    url, data=data, headers={"Content-Type": "application/json"})
                with urllib.request.urlopen(req, timeout=self.timeout) as r:
                    out = json.loads(r.read())
            except urllib.error.HTTPError as e:
                try:
                    detail = e.read()[:300].decode(errors="replace")
                except Exception:
                    detail = ""
                if e.code in (401, 403):
                    raise JudgeUnavailable(f"HTTP {e.code}: {detail}") from None
                if e.code in (429, 500, 502, 503, 504) and attempt < self.retries:
                    time.sleep(min(2 ** attempt * 3, 30))
                    continue
                self.failures += 1
                self.errors.append(f"HTTP {e.code}: {detail}")
                return None
            except Exception as e:
                if attempt < self.retries:
                    time.sleep(2 ** attempt * 2)
                    continue
                self.failures += 1
                self.errors.append(f"{type(e).__name__}: {e}")
                return None

            self.latencies.append(time.time() - t0)
            usage = out.get("usageMetadata") or {}
            used = usage.get("totalTokenCount") or 0
            if used:
                self.limiter.correct(used)
                self._est_tokens = int(0.7 * self._est_tokens + 0.3 * used)
                self.tokens_used += used
            self.calls += 1

            cand = (out.get("candidates") or [{}])[0]
            txt = "".join(p.get("text", "") for p in
                          (cand.get("content") or {}).get("parts") or [])
            if not txt.strip():
                self.errors.append(f"empty ({cand.get('finishReason')})")
                return None
            return txt.strip()

        self.failures += 1
        return None


class NvidiaJudge(OpenRouterJudge):
    """NVIDIA NIM. OpenAI-compatible, but two differences that matter.

    Its Nemotron models are the only judges measured so far that let you turn
    the reasoning trace OFF (`chat_template_kwargs.enable_thinking`), which
    takes a verdict from ~15s and 871 completion tokens down to ~1.6s and 8.

    Note the field goes at the TOP LEVEL of the request body. `extra_body` is
    an OpenAI *SDK* wrapper that the client unpacks; sent literally over raw
    HTTP it returns 400 "Unsupported parameter(s): `extra_body`".
    """

    name = "nvidia"
    URL = "https://integrate.api.nvidia.com/v1/chat/completions"

    def __init__(self, model: str = "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning",
                 thinking: bool | None = None, **kw):
        # thinking=None sends no chat_template_kwargs at all. That field is
        # Nemotron-specific; other models on NIM (e.g. google/gemma-4-31b-it)
        # reject or ignore it, so it must be opt-in rather than always-on.
        # With thinking explicitly off the reply is ~8 tokens.
        kw.setdefault("max_out", 64 if thinking is False else 3000)
        BaseJudge.__init__(self, model, **kw)
        self.thinking = thinking
        self.key = _env("NVIDIA_API_KEY")
        if not self.key:
            raise JudgeUnavailable("no NVIDIA_API_KEY (env or .env)")

    def _extra_body(self) -> dict:
        if self.thinking is None:
            return {}
        return {"chat_template_kwargs": {"enable_thinking": self.thinking}}


def make_judge(spec: str = DEFAULT_JUDGE, **kw) -> BaseJudge:
    backend, _, model = spec.partition(":")
    if backend == "openrouter":
        return OpenRouterJudge(model, **kw)
    if backend == "google":
        return GoogleJudge(model, **kw)
    if backend == "nvidia":
        return NvidiaJudge(model, **kw)                      # no thinking field
    if backend == "nvidia-think":
        return NvidiaJudge(model, thinking=True, **kw)
    if backend == "nvidia-nothink":
        return NvidiaJudge(model, thinking=False, **kw)
    raise ValueError(f"unknown judge backend {backend!r} in {spec!r}")


class GroupJudge:
    """Scores one GRPO group with ONE judge, falling back as a whole group.

    GRPO advantages are computed within a group, so every rollout in a group
    must be scored by the same judge -- otherwise differences in judge
    strictness leak straight into the gradient. The fallback therefore never
    replaces individual calls: if the primary fails for any rollout, the entire
    group is re-scored by the fallback.

    Two switches are sticky for the rest of the run: the primary raising
    JudgeUnavailable (bad key, entitlement, quota), and the latency guard. The
    guard exists because a slow free judge is not free -- each second it takes
    is a second the trainer and HPSv3 GPUs sit idle on Modal.

    It is a runaway limit, not a cost optimiser. Measured Gemma-on-NVIDIA
    medians run 20-45s, and at concurrency 8 the cost break-even against GLM is
    only ~24s, so Gemma typically costs ~$2/run more. That premium buys the
    better judge (AUC 0.82 vs 0.73) and was chosen deliberately, so the guard
    only fires when latency turns pathological (default 90s,
    WC_JUDGE_LATENCY_GUARD).
    """

    def __init__(self, primary: str = DEFAULT_JUDGE, fallback: str | None = FALLBACK_JUDGE,
                 latency_guard_s: float | None = None, guard_window: int = 16,
                 concurrency: int = 8):
        self.primary = make_judge(primary)
        self.fallback_spec = fallback
        self._fallback = None
        self.latency_guard_s = latency_guard_s if latency_guard_s is not None else \
            float(os.environ.get("WC_JUDGE_LATENCY_GUARD", "90"))
        self.guard_window = guard_window
        self.concurrency = concurrency
        self.sticky_fallback = False
        self.switch_reason: str | None = None
        self.group_fallbacks = 0

    def _fb(self):
        if self._fallback is None:
            if not self.fallback_spec:
                raise JudgeUnavailable("primary judge failed and no fallback configured")
            self._fallback = make_judge(self.fallback_spec)
        return self._fallback

    def _run(self, judge, pngs: list, refs: list, subject: str,
             ref_subjects: list | None = None) -> list:
        import concurrent.futures
        judge.subject = subject
        with concurrent.futures.ThreadPoolExecutor(max_workers=self.concurrency) as ex:
            return [r.get("score") for r in ex.map(
                lambda p: judge.score(p, refs, subject if ref_subjects else None, ref_subjects),
                pngs)]

    def _check_latency(self):
        lat = self.primary.latencies[-self.guard_window:]
        if len(lat) >= self.guard_window:
            med = sorted(lat)[len(lat) // 2]
            if med > self.latency_guard_s and self.fallback_spec:
                self.sticky_fallback = True
                self.switch_reason = (f"latency guard: primary median {med:.1f}s over "
                                      f"last {len(lat)} calls > {self.latency_guard_s}s")

    def score_group(self, pngs: list, refs: list, subject: str,
                    ref_subjects: list | None = None) -> tuple:
        """Returns (scores, judge_name). A score is None only if even the
        fallback could not produce it; the caller treats that as infra noise.
        Pass ref_subjects so each image is judged against its own subject."""
        if not pngs:
            return ([], None)
        if not self.sticky_fallback:
            try:
                scores = self._run(self.primary, pngs, refs, subject, ref_subjects)
                if all(s is not None for s in scores):
                    self._check_latency()
                    return (scores, f"{self.primary.name}:{self.primary.model}")
                self.group_fallbacks += 1          # partial failure: whole group moves
            except JudgeUnavailable as e:
                self.sticky_fallback = True
                self.switch_reason = f"primary unavailable: {e}"
        fb = self._fb()
        return (self._run(fb, pngs, refs, subject, ref_subjects), f"{fb.name}:{fb.model}")

    def stats(self) -> dict:
        out = {"primary": self.primary.stats(), "sticky_fallback": self.sticky_fallback,
               "switch_reason": self.switch_reason, "group_fallbacks": self.group_fallbacks}
        if self._fallback is not None:
            out["fallback"] = self._fallback.stats()
        return out


class ReferencePool:
    """Samples references from the love tier, per Surya's rubric."""

    def __init__(self, tier: str | None = None, seed: int | None = None):
        cfg = CONTRACT["reward"]["pairwise"]
        self.tier = tier or cfg["tier"]
        self.n = cfg["referencesPerRollout"]
        rows = json.load(open(os.path.join(ROOT, "pool", "pool.json"), encoding="utf-8"))
        self.rows = rows
        self.items = []
        for r in rows:
            if r.get("tier") != self.tier or not r.get("source_file"):
                continue
            stem = os.path.basename(r["source_file"])[:-3]
            png = os.path.join(ROOT, "pool", "renders", f"{stem}.png")
            if os.path.exists(png):
                self.items.append({"stem": stem, "png": png,
                                   "subject": r.get("subject"),
                                   "hpsv3_mu": r.get("hpsv3_mu")})
        if not self.items:
            raise RuntimeError(f"no '{self.tier}' references -- run pool/fetch_pool.py")
        self.rng = random.Random(seed)

    def sample(self, n: int | None = None, exclude: set | None = None) -> list:
        pool = [i for i in self.items if not exclude or i["stem"] not in exclude]
        return self.rng.sample(pool, min(n or self.n, len(pool)))


if __name__ == "__main__":
    import sys
    spec = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_JUDGE
    pool = ReferencePool(seed=0)
    j = make_judge(spec)
    cand = pool.items[0]
    refs = pool.sample(2, exclude={cand["stem"]})
    print("score:", json.dumps(j.score(cand["png"], [r["png"] for r in refs])))
    print("stats:", json.dumps(j.stats()))
    for e in j.errors[:3]:
        print("  err:", e[:180])
