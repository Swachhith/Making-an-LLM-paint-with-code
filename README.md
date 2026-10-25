# Watercolours

Teaching a small language model to **paint watercolours in code**.

The policy, `Qwen/Qwen3.5-4B`, writes a complete p5.js program that uses the
[p5.brush](https://github.com/acamposuribe/p5.brush) watercolour fills. A
headless browser renders the program, and the painting is scored by a reward
learned from one person's blind ratings. The model is fine-tuned on rated
examples (SFT) and then trained with reinforcement learning (GRPO).

The project reproduces Sergio Paniego's *Training a coding model to paint
watercolours* (TRL + OpenEnv) at a smaller scale. The policy is 4B rather than
35B-A3B, the subjects go well beyond flowers, and the VLM judge is replaced by
a taste model trained on the rater's own ratings.

> **Read [`NOTES.md`](NOTES.md) before you touch the renderer, the prompt or the
> reward.** It records the failures that took real debugging time to find, and
> several of them fail silently (blank canvases, half-composited renders,
> constant reward terms).

---

## Results so far

All numbers come from the **37 held-out prompts** in
`train/heldout_prompts.json`. These prompts never appear in SFT or RL training.

| model | gate pass | taste per attempt | love-like |
|---|---|---|---|
| Qwen3.5-4B base | 30% | 0.054 | – |
| + SFT warm-start (run v7) | 96% | 0.229 → 0.308* | 7% |
| + GRPO (119 steps, T = 0.8, LR 5e-5) | **97%** | **0.410** | **16%** |

\* 0.229 was measured with the SFT kernel's sampler. 0.308 is the same SFT
model sampled through the GRPO evaluation sampler, which is the paired baseline
for the RL comparison.

- **SFT vs base:** better in all 8 categories. The paired 95% CI on taste is
  +0.13 to +0.23.
- **GRPO vs SFT:** +0.102 taste (95% CI +0.049 to +0.159). KL to SFT is about
  0.007. Taste was still rising when the cosine LR schedule reached zero.
- **Human check (141 paintings, rated blind and shuffled):** GRPO paintings
  were loved 10% of the time against 7% for SFT, and rated nope 69% against
  78% (paired +0.12 tier). The ratings also showed **reward hacking**: the RL
  policy painted flowers for landscape prompts, and the taste model rewarded
  it. A SigLIP subject-adherence factor now multiplies the taste term (see
  [Reward](#the-reward)).

---

## How it works

```
 prompt ──► Qwen3.5-4B ──► p5.brush sketch (JS)
                                 │
                                 ▼
                    static gate (allowlist, banned identifiers)
                                 │
                                 ▼
             Playwright Chromium ─► env/render.html ─► 600×600 PNG
                                 │
                                 ▼
     reward = gate · length · HPSv3 · taste × subject adherence
                                 │
                                 ▼
                     GRPO advantage within the group
```

### 1. The environment (`env/`)

- **`env/contract.json`** is the single source of truth: canvas size, the ten
  allowed `brush.*` methods, banned identifiers (`eval`, `fetch`, `window`,
  `Date`, ...), gate limits, render settings and reward weights.
- **`env/render.html`** is the render harness. The browser studio and the
  Playwright trainer both use it, so a painting you debug by hand is
  byte-identical to the one that produces reward during training.
- **`env/prompt.md`** is the policy's system prompt. It describes the brush API
  and how the materials actually behave, as measured: one fill pass reaches
  only about 9% of the hex colour, thin strips smear into fans, and light paint
  never covers dark.
- **`env/vendor/`** holds p5 2.2.0 and p5.brush 2.2.3, so rendering works
  offline and in sandboxes that block jsdelivr.

Rendering is **deterministic**. `Math.random` is seeded before the libraries
load, and `setup()` is wrapped to call `randomSeed`/`noiseSeed`. The harness
also **waits for compositing to settle** before it reads pixels, because
p5.brush composites asynchronously. A render on an Intel Iris Xe takes about
1.6 s.

### 2. Data generation (`gen/`)

Claude Code cloud sessions paint the training pool. `gen/BRIEF.md` takes each
session through **draft → render → contact sheet → revise ×2** for 12 prompts,
and `gen/render_batch.py` renders, gates and builds a contact sheet for each
round.

- 43 batches. Prompts cover **8 categories**: flowers, trees, landscapes,
  houses, people, sunsets, night skies and mountains.
- Batches 28–43 are steered by the ratings (`gen/make_batches.py`): about 60%
  use palettes from the loved family, and the weakest categories get more
  items. These batches were generated with Sonnet 5.5, and the rater loved
  27% of them.
- Paintings live in `gen/out/<batch>/` as `<id>_r<round>.js` and `.png`.

### 3. Rating (`app/rate.html`, `serve.py`)

A small local rating UI. You rate each painting **love / okay / nope**, blind
to its round and generator. `serve.py` serves the project and writes the
ratings straight back to `gen/ratings.json`.

```bash
python serve.py --port 8777
# open http://localhost:8777/app/rate.html
```

So far there are **1,752 ratings**.

### 4. The reward (`train/reward.py`)

| term | weight | what it measures |
|---|---|---|
| gate | 0.05 | the static check passes and the render is non-blank with ≥ 3 shapes |
| length | 0.05 | the source length is inside the band |
| HPSv3 | 0.30 | a human-preference score, `logistic(mu/4)`, as an independent anchor |
| taste | 0.60 | a model learned from the ratings, multiplied by subject adherence |

- **Taste model** (`train/taste_model.py`): DINOv2-base and SigLIP-base
  embeddings, concatenated, with two balanced logistic heads, P(≥ okay) and
  P(love). Held out by prompt, it scores love/nope AUC 0.88 and love/okay AUC
  0.71. On the same paintings it beat the Gemma 4 31B pairwise judge on every
  measure, and it costs nothing per call.
- **Subject adherence** (`train/adherence.py`): the SigLIP image–text match
  for *"a loose watercolour painting of {subject}"*, turned into a soft factor
  that only penalises clear misses. It separates own-subject paintings from
  other-category ones with AUC 0.958.
- **Infrastructure failures never score 0.** A render timeout, a hung sketch
  or a scorer error gets its group's mean reward, which means zero advantage
  and no gradient. A **gate failure does score 0**, because that one is the
  model's fault.
- Every term is logged per rollout. To see per-term saturation and the
  correlation matrix between terms during a run:

  ```bash
  python train/reward.py --report
  ```

### 5. Training (`train/`, `kaggle/`)

| stage | where | tooling |
|---|---|---|
| SFT warm-start | Kaggle T4 | Soup (`train/soup_sft.yaml`, `kaggle/sft/`) |
| GRPO (main path) | Modal A100 80 GB | TRL 1.14 + vLLM 0.30 (`train/grpo_trl.py`, `train/modal_grpo.py`) |
| GRPO (free path, WIP) | Kaggle 2× T4 | vLLM server on GPU 1, fp16 LoRA on GPU 0 (`kaggle/grpo/`) |

GRPO uses TRL directly rather than Soup. Soup pins TRL < 1.0, which caps vLLM
at 0.12, and Qwen3.5 support only arrived in vLLM 0.28. HF `generate()` took
412 s per step. TRL with colocated vLLM takes 118 s per step. Both paths need
the **Liger GRPO loss**, because without it the 248k-vocabulary logits run out
of memory on 80 GB.

---

## Repository layout

```
app/rate.html              rating UI
env/                       contract, render harness, policy prompt, taste weights, vendored libs
gen/                       generation brief, batches, cloud setup, rendered paintings, ratings
kaggle/                    Kaggle kernels: HPSv3 validation, SFT, GRPO on 2x T4
pool/                      fetch and validate Paniego's 178-painting reference pool
train/
  render.py                Playwright renderer (worker pool, hang guard)
  gate.py                  static and render checks
  reward.py                the reward, per-term logging, --report
  taste_model.py           fit / score the learned taste model
  adherence.py             SigLIP subject-adherence factor
  build_sft.py             SFT dataset from rated sketches
  build_grpo_prompts.py    479 RL prompts in the SFT request format
  grpo_trl.py              GRPO trainer (TRL + vLLM)
  modal_grpo.py            Modal entrypoints: merge, train_trl, evaluate, tsweep, score, fetch
  score_generations.py     gate + render + taste, paired bootstrap between variants
  grpo_signal.py           how much reward spread is broken-vs-working vs taste
  bench_judge.py           AUC benchmark that any VLM judge must pass
  encoder_sweep.py         encoder comparison for the taste model
  test_reward.py           offline reward self-test
serve.py                   static server with a /save endpoint for the rating UI
NOTES.md                   findings log; read it first
```

---

## Getting started

### Requirements

- Python 3.10+ (use 3.12 for Soup)
- `playwright` with Chromium (`playwright install chromium`). You can set
  `WC_CHROME` to use a separately installed Chrome instead.
- For the reward: `torch`, `transformers`, `numpy`, `scikit-learn` (DINOv2 and
  SigLIP run on CPU)
- For training: a [Modal](https://modal.com) account (A100 80 GB) or Kaggle
  GPUs
- API keys, if you use the optional pairwise judge, go in `.env`. That file is
  gitignored.

### Common commands

```bash
# Render one generation round and build its contact sheets
python gen/render_batch.py gen/batches/batch_01.json --round 0

# Refit the taste model after new ratings, then score some paintings
python train/taste_model.py fit
python train/taste_model.py score path/to/a.png path/to/b.png

# Offline reward self-test (love > okay > nope; a blank canvas scores 0)
python train/test_reward.py

# Build the SFT data and the RL prompts
python train/build_sft.py
python train/build_grpo_prompts.py

# GRPO on Modal (merge the SFT adapter first), then evaluate on held-out prompts
modal run train/modal_grpo.py::merge --adapter results/sft_eval/v7/adapter --tag v1
modal run --detach train/modal_grpo.py::train_trl --tag v1 --run my-run
modal run train/modal_grpo.py::evaluate --run my-run
```

### Useful environment variables

| variable | default | purpose |
|---|---|---|
| `WC_REWARD_TERMS` | `gate,length,hpsv3,taste` | which reward terms are on; weights are renormalised |
| `WC_TASTE_MODEL` | `env/taste_model.npz` | taste model weights |
| `WC_ADHERENCE` | `1` | SigLIP subject check (`0` turns it off) |
| `WC_RENDER_WORKERS` | – | size of the browser process pool (4.5× faster, identical results) |
| `WC_REWARD_DEVICE` | – | device for the taste and adherence models |
| `WC_REWARD_LOG` | `results/reward_log.jsonl` | per-rollout term log |

---

## Lessons worth knowing

From `NOTES.md`, in short:

- **p5.brush binds its state to the first p5 instance on a page.** If you reuse
  a page, every later render is blank, with no error. The renderer recycles
  the page on every render.
- **Never use `requestAnimationFrame` to wait for a render.** It is suspended
  in hidden tabs, so every render hangs.
- **Measure a judge before you trust it.** With thinking turned off, one judge
  returned a near-constant score (AUC 0.486) while the reward curve still
  looked like learning.
- **The published reference tiers are an exact HPSv3 threshold** (AUC 1.000),
  so benchmarking against them measures agreement with HPSv3, not with human
  taste.
- **The sampling temperature decides what GRPO learns.** At T = 1.0, 69% of
  the reward spread within a group was broken-vs-working sketches. At T = 0.8
  it was 37%, which left most of the gradient for taste.
- **Rate the policy's own output.** Only the human ratings caught the policy
  painting flowers for landscape prompts.

---

## Credits

- Sergio Paniego's watercolour RL write-up, and the
  `FineEnvs/watercolour-reference-pool` / `FineEnvs/watercolour-hpsv3` releases
- [p5.js](https://p5js.org) (LGPL-2.1) and
  [p5.brush](https://github.com/acamposuribe/p5.brush) (MIT), vendored in
  `env/vendor/`
- [HPSv3](https://github.com/MizzenAI/HPSv3), [TRL](https://github.com/huggingface/trl),
  [vLLM](https://github.com/vllm-project/vllm), Qwen3.5, DINOv2, SigLIP
