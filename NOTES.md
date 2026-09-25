# Findings log

Hard-won facts, so they don't have to be rediscovered. Each one cost a debugging
cycle. Newest at the bottom of each section.

## p5.brush (v2.2.3, with p5 2.2.0)

- **All 10 of the article's allowlisted methods survive the v1→v2 rewrite.**
  `scaleBrushes, noStroke, fill, noFill, fillBleed, fillTexture, beginShape,
  vertex, endShape, circle` all exist. The library exposes 50 functions total,
  so the allowlist is ~20% of the surface.
- **p5.brush keeps module-level state bound to the first p5 instance on a page.**
  Reusing a page renders a blank canvas for every sketch after the first --
  no error, coverage exactly 0. This is why `train/render.py` recycles the page
  on every render (`recycle_after=1`); raising that will quietly corrupt a run.
  It also invalidated an earlier probe of mine that concluded `circle()` was
  inert -- it is not, it paints fine (cov 0.044 under `noStroke`).
- **`scaleBrushes` is the genuinely inert method** under a fill-only allowlist.
  Metrics are byte-identical at scale 0.3 / 1.0 / 3.0, including on `circle`.
  It scales brush tips, which only stroke and hatch work use -- both banned.
  Dropped from the allowlist on that evidence, along with `noFill` (which, once
  `noStroke` is set, can only switch painting off). That gives the eight
  methods Surya's post specifies. See `results/allowlist/probe.json`.
- `fillBleed` and `fillTexture` both do measurable work: coverage 0.053 with
  neither, 0.078 with bleed; texture raises edge gradient 1.64 -> 2.10.
- **Compositing is asynchronous.** Reading pixels straight after the sketch body
  returns a blank or half-finished canvas. This is the single most dangerous bug
  in the pipeline, because it fails *quietly*: you get a valid PNG of a pale,
  partial painting and a plausible-looking low reward. An early probe read
  `coverage: 0.047` that way; the same sketch reads `0.153` once settled.
  The harness now polls a 64x64 downsample until the checksum stops changing.
- v2 auto-hooks p5's `randomSeed()`/`noiseSeed()`, so one seed fully determines
  a painting — rollouts are reproducible for free.
- v2 removed `brush.push/pop/translate/rotate/scale`; p5's own are used instead.

## Browser / rendering environment

- **Never use `requestAnimationFrame` in the settle loop.** rAF is suspended
  outright in a hidden or occluded tab. The render then hangs forever and every
  rollout returns blank. Timer-based polling is correct because it is only
  *clamped* in the background, not suspended.
- Chrome's *intensive* background throttling is far more aggressive than the
  documented ~1s clamp: a hidden tab managed **1 setTimeout tick in 16.8s**.
  The Playwright launch flags in `train/render.py` (`--disable-background-timer-
  throttling`, `--disable-renderer-backgrounding`, `IntensiveWakeUpThrottling`)
  are load-bearing, not hygiene.
- The Claude-in-Chrome MCP tab is permanently `visibilityState: "hidden"`, so it
  is unusable for developing a render loop. Use `train/render.py` instead — it's
  also the exact code path training uses.
- WEBGL canvas puts the origin at the centre. The harness translates to
  top-left so the model can reason in plain `0..W` / `0..H` coordinates.
- `import` and `eval` are reserved words and cannot be used as function
  parameter names in strict mode, so they can't be shadowed at runtime the way
  the other banned identifiers are. The static gate has to own those two.

## Performance

- **1.6s per 768x768 render** on an Intel Iris Xe (integrated), of which ~0.7s
  is the settle wait. The article reports 69–96s per render on its CPU-only HF
  Space, and says 70–80% of each training step was rendering.
- That is a ~50x speedup on weaker hardware, and it changes the economics of the
  whole project: rendering stops being the bottleneck and the GPU running the
  policy becomes it. Worth re-measuring on the Colab/Kaggle box with `gpu=True`.

## Model

- `Qwen/Qwen3.5-4B` is tagged `image-text-to-text` — **natively multimodal**, so
  one model can both write the sketch and look at its own render. No second
  model needed for the critic role.
- It is **not** plain dense: "Gated DeltaNet combined with sparse
  Mixture-of-Experts", 32 layers, hidden 2560. So the article's most expensive
  lesson applies here too — a hand-written `target_modules` list will silently
  adapt a fraction of the layers. Use all-linear.
- Thinking mode is **on by default** (`<think>...</think>`), toggled with
  `chat_template_kwargs: {enable_thinking: false}`. The paint turn should have it
  off or reasoning eats the completion budget before the sketch starts; the
  critique turn is where it earns its tokens.
- Sampling per the card: thinking `temp=1.0, top_p=0.95, top_k=20`; precise
  coding `temp=0.6, top_p=0.95, top_k=20`.

## Soup (trainer)

- `task: grpo` with `reward_fn: ./my_reward.py` exporting
  `def reward_fn(completions, **kwargs) -> list[float]`. Dataset columns arrive
  as kwargs. Must return one finite float per completion.
- Comma-separated `reward_fn: "a,b"` builds an ensemble and unlocks the
  `rm_ensemble` reward-hack detector (needs >= 2 reward functions).
- `grpo_variant`: standard / gspo / dapo / dr_grpo / bnpo / two_sided / rft.
- Multi-turn hook exists — `rollout_backend: openenv` + `rollout_func:
  module:fn` — but the exact signature is **not** documented. Would need reading
  Soup's source and TRL 0.29's `rollout_func` contract. Deferred.
- Unknown config keys are a hard load error since v0.75, so typos fail loudly.


## The reference corpus (FineEnvs/watercolour-reference-pool)

178 rows: **82 love, 96 okay** (no nope tier published). Ships the rendered PNG
*and* the p5.brush source for every entry, plus tier, subject, generator model,
refinement round, `hpsv3_mu` and `paint_coverage`. `pool/fetch_pool.py` pulls it
all; 355/356 files download clean (one PNG 404s).

**The sketches are complete p5 programs, not fragments.** 178/178 define their
own `setup()` and `draw()`, call `createCanvas(600, 600, WEBGL)`, `angleMode(DEGREES)`,
`noLoop()`, `translate(-width/2, -height/2)` and paint their own `background()`.
Our harness originally injected a bare body and owned the canvas, which made it
incompatible with every reference sketch; it now runs full sketches in p5 GLOBAL
mode and the canvas is 600x600.

- Colours are **hex strings with alpha** -- `brush.fill("#f5e8c8", 90)` -- not the
  HSB numbers we first assumed.
- `circle()` takes a 4th argument (`brush.circle(300, 300, 580, 0.35)`).
- Paper colour varies per sketch, so the harness measures it from the border ring
  rather than assuming one. Verified: it recovers `#f6efe1` exactly.
- Injecting the sketch **must not** be wrapped in `try { }`. A `function setup()`
  inside a block is block-scoped, so p5 global mode never sees it. Inject bare and
  catch failures with a `window` error listener.

**Method usage across all 178** (files using / total calls), which settles the
allowlist empirically:

    vertex 178/11294 · fill 178/2095 · beginShape 178/1758 · endShape 178/1757
    fillBleed 178/1185 · fillTexture 152/961 · circle 170/859
    scaleBrushes 178/180 · noStroke 138/140 · noFill 6/10

`scaleBrushes` is called once per file by every sketch but has no measurable
effect on output -- ritual, because the prompt lists it. `noFill` appears in 6
files. They are the two marginal methods, which corroborates the reconstruction
of Surya's eight. **Both are kept anyway**: gating them out would fail all 178
known-good sketches, and the corpus is our validation set and SFT data.

**Harness validation.** 25/25 reference sketches render successfully. Our measured
coverage vs the dataset's recorded `paint_coverage`: **Pearson r = 0.949**, mean
bias **-0.020**, 92% within 0.05. The small negative bias matches what the images
show -- p5.brush v2 bleeds slightly less far than the v1 that built the pool.
~1.8s per render.

**Limitation:** every subject in the pool is a hibiscus. Paniego's own conclusion
was that a single-subject pool causes the policy to converge on one flower. Any
data generated to extend this pool should widen the subject range deliberately.


## Judge selection (measured, not assumed)

Benchmarked with `train/bench_judge.py`, which scores 6 `love` and 6 `okay`
paintings against the same two love references and reports AUC. 0.5 means the
judge cannot tell the tiers apart, and a judge that cannot discriminate makes
the 0.60 reward weight pure noise.

| judge | AUC | separation | median latency | cost/call | failures |
|---|---|---|---|---|---|
| openrouter:inkling-small | **0.847** | +0.292 | 8.3s | $0.0014 | 0/24 |
| nvidia:nemotron-3-nano-omni (thinking ON) | 0.597 | +0.125 | 31.3s | $0 | 2/22 |
| nvidia:nemotron-3-nano-omni (thinking OFF) | **0.486** | **+0.000** | 1.8s | $0 | 2/22 |
| google:gemma-4-31b-it (free) | not benched | -- | 50.8s | $0 | 2/8 (25%) |

**Disabling the reasoning trace destroyed the judge.** With `enable_thinking:
false`, nemotron-omni returned mean love 0.292 and mean okay 0.292 -- exactly
identical, AUC below chance -- because it had collapsed into a near-constant
output (almost every painting scored 0.25). It was 5x faster and free, and it
was measuring nothing.

This is the failure mode that would never have shown up in a reward curve. At
0.60 weight, a blind judge means the dominant reward term is noise, while gate
and length keep the curve rising -- slow plausible "learning" that produces
nothing. It is exactly Surya's 0.65 plateau, and exactly why he diagnosed by
scoring sub-rewards in isolation. **Any judge swap must clear the AUC bar in
`train/bench_judge.py` before it goes near a run.**

**inkling-small is the judge.** mean love 0.583 vs mean okay 0.292
(separation +0.292), 0 dropped of 12, and roughly **$2.40 per 110-step run**.

Things that cost real time to discover:

- **Every judge model tried emits a reasoning trace and none allow disabling
  it.** Gemma returns HTTP 400 for `thinkingConfig` ("not supported for this
  model"); inkling spends ~250-500 reasoning tokens. So the prompt asks for a
  terminal `ANSWER: <n>,<n>` sentinel and the parser reads that line rather
  than the whole reply.
- **Run `max_tokens` generously.** Output budget is only billed when generated,
  but hitting the cap wastes the entire call: the model spends its budget
  reasoning and returns *empty* content with `finish_reason: length`. At 1400
  this still fired twice in 24 calls. Now 3000.
- `thinkingmachines/inkling-small:free` is **not usable from a script** --
  HTTP 403, "only available on agentic harnesses". The paid variant is needed,
  and at $0.45/M in / $1.20/M out it is cheap enough not to matter.
- Gemma's free tier is a false economy: 50.8s median latency and 16k TPM means
  ~6.2h of judging per run, during which the Modal trainer and HPSv3 GPUs idle
  at ~$1.90/h -- about $11 of credit to avoid a $2 API bill.


## NVIDIA NIM (integrate.api.nvidia.com)

- **`extra_body` is an OpenAI *SDK* field, not a wire field.** The SDK unpacks
  it into the request body; sent literally over raw HTTP it returns
  `400 Validation: Unsupported parameter(s): extra_body`. Put
  `chat_template_kwargs` at the TOP LEVEL of the JSON body instead.
- **`nvidia/nemotron-3-nano-omni-30b-a3b-reasoning` is the only judge found so
  far whose reasoning can be switched off**, via
  `chat_template_kwargs: {enable_thinking: false}`:

      thinking=False : 1.6s,   8 completion tokens
      thinking=True  : 15.5s, 871 completion tokens

  With it off, `max_tokens` can drop to 64 -- no risk of the empty-response
  `finish_reason: length` failure that plagues the reasoning judges.
- The account's model list is not the same as the account's *entitlements*:
  `nvidia/cosmos-reason2-8b` and `nvidia/vila` are both listed but return
  `404 ... Not found for account`. `nvidia/cosmos3-nano-reasoner` does not
  exist on this endpoint at all.
- The shared endpoint is oversubscribed and returns
  `503 ResourceExhausted: Worker local total request limit reached (122/16)`
  under load, and `meta/llama-3.2-90b-vision-instruct` timed out entirely.
  Reliability has to be measured, not assumed, before this is trusted at a
  0.60 reward weight.
- `google/gemma-4-31b-it` served by NVIDIA is much better behaved than Google's
  own free endpoint: 23.4s vs 50.8s, and 112 completion tokens vs 555 thinking
  tokens plus a long preamble.


## Decisions locked (2026-09-25)

- **Policy: Qwen3.5-4B.** Considered prism-ml/Ternary-Bonsai-2-27B-gguf and
  rejected it for RL: it ships only as GGUF for Prism's llama.cpp fork, with
  ternary weights "consumed directly, never expanded back to FP16" and a
  Hadamard rotation folded in. There is no PyTorch path to backprop through,
  so Soup/TRL cannot train it. Its trainable base (Qwen3.8-27B, ~54 GB FP16)
  would need an 80 GB GPU and ~$40-70 per run, and would not come out ternary.
  It remains a strong candidate for *generating* pool data on a Modal L4.
- **Judge: Gemma 4 31B via NVIDIA NIM**, GLM-5.3-flash fallback.

| 20 vs 20, same references | AUC | love / okay mean | dropped | median latency |
|---|---|---|---|---|
| nvidia:google/gemma-4-31b-it | **0.820** | 0.762 / 0.325 | 0/40 | 20.8s |
| openrouter:z-ai/glm-5.3-flash | 0.730 | 0.329 / 0.100 | 1/40 | 12.8s |

  Paired bootstrap over 39 shared candidates: Gemma +0.084 AUC, 95% CI
  [-0.054, +0.216], ahead in 88% of resamples. Not formally significant, but it
  led at both sample sizes and uses the score range far better -- GLM bunches
  love-tier paintings near 0.33, which is the compression Surya designed around.

- **Fallback switches whole groups, never single calls** (`GroupJudge`). Mixing
  judges inside a GRPO group puts judge strictness into the advantages.
- **Latency guard is a runaway limit (90s), not a cost optimiser.** I first set
  it at 40s on the claim that above that idle GPU time outweighs the fallback's
  API cost; the real break-even at concurrency 8 is ~24s, and Gemma's medians
  (20-45s) straddle 40s -- so a 40s guard would have silently handed most steps
  to GLM, overriding the judge choice. Gemma costs ~$2/run more at typical
  latency; that premium buys the better judge deliberately.

## Reward (train/reward.py)

Self-test on a fake GRPO group from the pool (train/test_reward.py): best love
0.786 > median love 0.357 > worst okay 0.143; invented method and blank canvas
both exactly 0; a simulated render timeout imputed to the group mean (0.257),
i.e. zero advantage, rather than scored 0. All five checks pass.

- `python train/reward.py --report` prints per-term mean/sd, the fraction of
  groups where a term had zero variance (Surya's saturated length term), and the
  correlation matrix between terms.
- The first version of the report computed stats only over gate-passing
  rollouts, where gate is 1.0 by definition -- so it could never show gate or
  length saturating. Fixed: gate/length use all scored rollouts.
- Note: under this rubric **length is almost redundant with gate** -- it is 0
  whenever the gate fails and 1 for nearly every passing sketch (all 178 pool
  sketches are inside the band). Both weigh only 0.05, so it is harmless, but
  it is exactly the kind of overlap the correlation check is there to show.


## Kaggle (testing and initial runs)

- **Set `PYTHONIOENCODING=utf-8` for every `kaggle` CLI call on Windows.** Kernel
  logs contain characters the default cp1252 console cannot encode; the CLI then
  crashes *mid-download* and leaves a 0-byte log that looks like an empty run.
- **`machine_shape: NvidiaL4` in kernel-metadata.json was silently ignored** --
  the run landed on 2x Tesla T4 (14.56 GiB each) with no warning. Always log the
  GPU name from inside the kernel rather than trusting the request. (Retrying
  with the CLI's `--accelerator NvidiaL4` flag.)
- T4s have no native bf16 and no FlashAttention-2 support; HPSv3's config asks
  for FA2, so force `sdpa`.

## HPSv3 deployment (kaggle/hpsv3-validate)

- `HPSv3.safetensors` is a **complete** state dict (736 tensors, 16.58 GB, all
  bf16, verified from the header via an HTTP range request without downloading).
  The stock loader downloads the 16 GB Qwen2-VL base and then overwrites every
  weight with it -- ~32 GB of host RAM against Kaggle's ~29. Build the model with
  `init_empty_weights` and stream the checkpoint with `load_checkpoint_and_dispatch`
  instead: loaded in ~97s, base weights never fetched.
- Build the empty model **in bf16**. At the fp32 default, accelerate upcasts every
  bf16 tensor on load to match and needs ~33 GB.
- `transformers==4.45.2` (pinned by hpsv3) is load-bearing: the checkpoint keys
  are 4.45's Qwen2-VL layout. `config.vocab_size` must be set to 151658 (base
  tokenizer + `<|Reward|>`) before construction to match the checkpoint.
- **PyPI hpsv3 1.0.0 and GitHub `main` disagree on argument order**: PyPI defines
  `reward(self, image_paths, prompts)`, GitHub `reward(self, prompts, image_paths)`.
  (I first read GitHub and wrongly concluded the model card was swapped -- the
  card matches PyPI.) Always call by keyword; that is correct against both.
- **PyPI hpsv3 1.0.0's `reward()` runs with autograd ON** -- no `inference_mode`
  or `no_grad` anywhere in its inference.py; GitHub `main` added the decorator.
  PyTorch then keeps every layer's activations for a backward pass that never
  runs. This, not batch size, caused three OOMs in a row (vision tower 8.6 GB at
  batch 4; decoder 4.5 GB at batch 1 on a 762-token input). Found from a frame
  that was *missing* from the traceback: a decorated function always shows
  `torch/utils/_contextlib.py decorate_context` between caller and body.
  Wrap every call in `torch.inference_mode()` and `requires_grad_(False)`.
- Vision attention memory is still quadratic in batch size (4.45's Qwen2-VL
  vision tower under sdpa builds one dense mask over every image in the batch),
  but with autograd off that is a transient cost; batch 4 on T4, 8 on 24 GB.
- Actual input seen by the model: a 600px render becomes a 30x30 patch grid
  (420px, 900 patches -> 225 image tokens), 762 tokens total with the prompt.
- On 2x T4 the auto device map filled GPU 0 first (11.9 / 3.6 GB), leaving the
  vision tower -- which lives on GPU 0 -- no activation room. Cap GPU 0 (7 GiB).


## Render determinism (fixed 2026-09-25)

- **The full-sketch harness rewrite silently dropped seeding.** It set
  `window.__seed` and never applied it, and the `mulberry32` PRNG itself was
  lost in the rewrite. Four renders of one sketch at seed 1 gave coverage
  0.177-0.203 -- as different as different seeds. Every reward would have
  carried render luck into the GRPO advantages. (The r = 0.946 pool validation
  was measured under this noise; it holds as a ranking.)
- Two sources, both now closed:
  1. **Load-time randomness.** p5.brush bundles simplex-noise, which builds its
     permutation tables from `Math.random` *when the script loads* -- before any
     per-render seeding, and the renderer opens a fresh page per image. Fixed by
     seeding `Math.random` with a constant in an inline script before the libs.
  2. **Run-time randomness.** `setup()` is wrapped to call `randomSeed(seed)` and
     `noiseSeed(seed)` before the sketch's own code, and `Math.random` is
     re-seeded per render.
- Residual after the fix, measured: same seed differs on 0.02-0.05% of pixels,
  mean abs diff 0.001-0.003, vs 43-81% / 9-18 between seeds -- ~5,000x smaller
  and invisible at the 384-420px the scorers see. Likely SwiftShader's parallel
  rasterisation; not worth chasing.
- **Different browser builds rasterise slightly differently** (Playwright's
  chromium 0.1948 vs Chrome stable 0.1942 coverage on the same sketch). Fine for
  generating data you rate by eye; use one build for the whole of a training run.

## Offline rendering

- p5 2.2.0 (LGPL-2.1) and p5.brush 2.2.3 (MIT) are vendored in `env/vendor/`;
  the harness loads them first and only falls back to jsdelivr if missing.
  Claude cloud sandboxes (default "Trusted" network) allow npm/PyPI/GitHub/apt
  and storage.googleapis.com but **not cdn.jsdelivr.net** and **not Playwright's
  browser CDN**. `WC_CHROME` lets the renderer use a separately installed Chrome
  (Chrome for Testing downloads from storage.googleapis.com).


## HPSv3 validation result, and what the pool tiers really are (2026-09-25)

Kaggle 2x T4, 178 pool images, 2609s. Our deployment vs the dataset's `hpsv3_mu`:

| prompt | pearson | our mean | their mean | love-vs-okay AUC |
|---|---|---|---|---|
| bare subject | 0.726 | -2.03 | 7.07 | 0.840 |
| "a watercolour painting of {subject}" | 0.811 | -0.66 | 7.07 | 0.901 |

- **The dataset's `hpsv3_mu` column is on a different scale from HPSv3 as
  deployed.** Paniego's own scorer (FineEnvs/watercolour-hpsv3) reports mu from
  -9.2 to +5.2 on his pool at 448px, and his environment scores everything
  against one fixed prompt, "a loose watercolour flower". Our scale (mean -0.66)
  matches his environment's; the published column (5.0-8.8) matches neither.
- **The published love/okay tiers are an exact threshold on that column**: okay
  max 7.372, love min 7.383, AUC 1.000. Hand rating chose which 178 paintings
  were kept; the love/okay split coincides perfectly with HPSv3.
  Consequence: **every judge AUC in this file measures agreement with HPSv3's
  ranking, not with human taste.** The user's own ratings will be the first true
  taste signal; the judge should be re-checked against them.
- **Bug caught:** reward.py had fitted its HPSv3 normaliser to that column
  (centre ~7.1, sd ~0.9). Real scores (~ -1) mapped to ~0.0001 -- the 0.30 term
  would have been a silent constant. Now logistic(mu/4), Paniego's calibration.
- HPSv3 prompt is now `hps_prompt(subject)` = "a loose watercolour painting of
  {subject}" -- subject kept so HPSv3 still checks *which* flower, in a
  multi-flower pool. Must be identical everywhere HPSv3 is called.
- His vendored libs were p5.js 2.3.2 / p5.brush 2.2.1 (ours 2.2.0 / 2.2.3) --
  plausibly the small coverage bias.
- His env scored at 448x448. A 600px render reaches the model at 420px via
  Qwen2-VL's smart_resize (floor), so resize renders to 448 before scoring to
  match HPSv3's training resolution.
- **Throughput on 2x T4: 0.16 img/s (~6s/image).** T4 lacks native bf16. At 8
  rollouts/step that is ~50s/step of HPSv3 on Kaggle; an L4 should be far faster.
- Seeded re-validation of the renderer: 178/178, pearson 0.953 (up from 0.946),
  bias -0.0095 -- removing render noise tightened agreement.
