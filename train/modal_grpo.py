"""GRPO for the watercolour painter on Modal, with Soup as the trainer.

    modal run train/modal_grpo.py::merge --adapter results/sft_eval/v7/adapter
    modal run --detach train/modal_grpo.py::train_trl --smoke    # TRL + vLLM (option B)
    modal run train/modal_grpo.py::train --smoke        # Soup: 8 prompts = 2 steps, ~$1
    WC_MODAL_GPU=L40S modal run train/modal_grpo.py::train --smoke --quant 4bit
    modal run --detach train/modal_grpo.py::train       # the real run (~120 steps)
    modal run train/modal_grpo.py::fetch --run <name>   # pull logs + adapter back

Modelled on the app `soup train --cloud modal` renders (image with soup-cli,
`soup train --config ... --yes` on one GPU, outputs on a Volume), extended with
what this reward needs and Soup's stub does not ship: the render harness and a
headless Chromium, the taste-model weights, the prompt data, and the merged
SFT model to start from.

Everything lives on the Volume "watercolors-grpo":
    /vol/models/qwen3.5-4b-sft-<tag>   merged SFT model (thinking forced off)
    /vol/runs/<run>/                   soup output, reward_log.jsonl, train.log
"""
import os
import subprocess
import sys
import threading
import time

import modal

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
REPO = "/root/wc"                 # repo copy inside the container; soup runs from here
VOL = "/vol"
BASE_MODEL = "Qwen/Qwen3.5-4B"
GPU = os.environ.get("WC_MODAL_GPU", "A100-80GB")
STALL_MINUTES = 20        # no training output for this long = hung; see _supervise

app = modal.App("watercolors-grpo")
vol = modal.Volume.from_name("watercolors-grpo", create_if_missing=True)
hf_cache = modal.Volume.from_name("watercolors-hf-cache", create_if_missing=True)

_SKIP = ["**/__pycache__/**", "**/*.pyc", "**/checkpoint-*/**"]


def _build_causal_conv1d():
    """Compile causal-conv1d (source-only on PyPI) for the A100 (sm_80).

    Without it Qwen3.5's short-convolution layers run a reference torch path;
    fla, installed alongside, already covers the gated-delta-rule kernels.
    """
    import subprocess as sp
    t = time.time()
    sp.run(["pip", "install", "--no-build-isolation", "causal-conv1d"], check=True,
           env={**os.environ, "MAX_JOBS": "16"})
    import causal_conv1d
    print(f"causal_conv1d {causal_conv1d.__version__} built in {(time.time() - t) / 60:.1f} min", flush=True)


image = (
    # CUDA *devel* base: causal-conv1d ships only as source and needs nvcc. Its
    # absence put Qwen3.5's conv layers on the slow torch path in the smoke test
    # (fla, also installed here, covers the gated-delta-rule kernels).
    modal.Image.from_registry("nvidia/cuda:13.0.3-devel-ubuntu22.04", add_python="3.12")
    .apt_install("git", "build-essential")      # g++ for the causal-conv1d build
    .pip_install("soup-cli[train,liger]==0.75.2", "flash-linear-attention", "playwright", "pillow",
                 "numpy", "ninja", "packaging", "wheel")
    .env({"TORCH_CUDA_ARCH_LIST": "8.0", "CAUSAL_CONV1D_FORCE_BUILD": "TRUE", "CC": "gcc", "CXX": "g++"})
    # The default image builder is too small for nvcc: the same build ran 40+
    # minutes in `run_commands`. A build function gets explicit CPUs and RAM.
    .run_function(_build_causal_conv1d, cpu=16, memory=32768, timeout=3600)
    # TRL's GRPO trainer imports requests; the debian_slim base had it, the CUDA
    # base does not. Added after the build so its cached layer is reused.
    .pip_install("requests")
    .run_commands("playwright install --with-deps chromium")
    .env({"HF_HOME": "/hf", "PYTHONUNBUFFERED": "1", "TOKENIZERS_PARALLELISM": "false",
          "WC_REWARD_TERMS": "gate,length,taste", "WC_RENDER_WORKERS": "8"})
    .add_local_dir(os.path.join(ROOT, "env"), f"{REPO}/env", ignore=_SKIP)
    .add_local_dir(os.path.join(ROOT, "train"), f"{REPO}/train", ignore=_SKIP)
    .add_local_file(os.path.join(ROOT, "data", "grpo_prompts.jsonl"), f"{REPO}/data/grpo_prompts.jsonl")
    .add_local_file(os.path.join(ROOT, "data", "grpo_smoke.jsonl"), f"{REPO}/data/grpo_smoke.jsonl")
)
volumes = {VOL: vol, "/hf": hf_cache}

# Option B: TRL 1.x + vLLM. Soup's TRL (< 1.0) supports vLLM <= 0.12, which has
# no Qwen3.5; TRL 1.14 supports vLLM 0.20-0.30, and Qwen3.5 arrived in 0.28.
# vLLM pins torch 2.13, so this is a separate image (the causal-conv1d build
# above targets torch 2.14; vLLM brings its own Qwen3.5 kernels for generation).
image_trl = (
    modal.Image.debian_slim(python_version="3.12")
    .pip_install("vllm==0.30.0", "trl==1.14.1", "peft", "liger-kernel>=0.8.2", "flash-linear-attention",
                 "playwright", "pillow", "numpy", "requests", "pyyaml",
                 "sentencepiece")   # SigLIP tokenizer (subject adherence)
    .run_commands("playwright install --with-deps chromium")
    .env({"HF_HOME": "/hf", "PYTHONUNBUFFERED": "1", "TOKENIZERS_PARALLELISM": "false",
          "WC_REWARD_TERMS": "gate,length,taste", "WC_RENDER_WORKERS": "8"})
    .add_local_dir(os.path.join(ROOT, "env"), f"{REPO}/env", ignore=_SKIP)
    .add_local_dir(os.path.join(ROOT, "train"), f"{REPO}/train", ignore=_SKIP)
    .add_local_file(os.path.join(ROOT, "data", "grpo_prompts.jsonl"), f"{REPO}/data/grpo_prompts.jsonl")
    .add_local_file(os.path.join(ROOT, "data", "grpo_smoke.jsonl"), f"{REPO}/data/grpo_smoke.jsonl")
)


def _model_dir(tag: str) -> str:
    return f"{VOL}/models/qwen3.5-4b-sft-{tag}"


# ---------------------------------------------------------------------------
# 1. Merge the SFT adapter into the base model
# ---------------------------------------------------------------------------
@app.function(image=image_trl, volumes=volumes, cpu=4, memory=32768, timeout=3600)
def _merge(adapter_files: dict, tag: str) -> str:
    import torch
    from peft import PeftModel
    from transformers import AutoModelForCausalLM, AutoTokenizer

    adir = "/tmp/adapter"
    os.makedirs(adir, exist_ok=True)
    for name, blob in adapter_files.items():
        with open(os.path.join(adir, name), "wb") as f:
            f.write(blob)
    # Same class the SFT run trained (Soup loads AutoModelForCausalLM), so the
    # adapter's module names match.
    model = AutoModelForCausalLM.from_pretrained(BASE_MODEL, dtype=torch.bfloat16)
    model = PeftModel.from_pretrained(model, adir).merge_and_unload()
    out = _model_dir(tag)
    model.save_pretrained(out, safe_serialization=True)

    tok = AutoTokenizer.from_pretrained(BASE_MODEL)
    # Thinking OFF regardless of caller: TRL applies the template with no
    # chat_template_kwargs, and Qwen3.5 defaults to thinking. Verified locally
    # to reproduce build_sft.py's format exactly (prompt and assistant turn).
    tok.chat_template = "{%- set enable_thinking = false %}\n" + tok.chat_template
    tok.save_pretrained(out)
    vol.commit()
    return out


@app.local_entrypoint()
def merge(adapter: str = "results/sft_eval/v7/adapter", tag: str = "v1"):
    files = {}
    for name in os.listdir(adapter):
        p = os.path.join(adapter, name)
        if os.path.isfile(p) and name.startswith(("adapter_", "tokenizer", "chat_template")):
            files[name] = open(p, "rb").read()
    assert "adapter_model.safetensors" in files and "adapter_config.json" in files, f"no adapter in {adapter}"
    print(f"merging {adapter} ({sum(map(len, files.values())) / 2**20:.0f} MB) as {tag} ...")
    print("saved to", _merge.remote(files, tag))


def _supervise(cmd: list, out: str) -> int:
    """Run a training command, streaming its log to the volume.

    Commits the volume every 10 minutes (a crash or timeout keeps what was
    done), samples peak GPU memory, and prints the per-term reward report.
    """
    env = {**os.environ, "WC_REWARD_LOG": f"{out}/reward_log.jsonl",
           "PYTORCH_CUDA_ALLOC_CONF": "expandable_segments:True"}
    stop = threading.Event()

    def checkpoint_volume():
        while not stop.wait(600):
            try:
                vol.commit()
            except Exception as e:     # noqa: BLE001
                print("volume commit failed:", e, flush=True)

    peak = {"mib": 0}

    def sample_gpu_memory():
        while not stop.wait(2):
            try:
                used = subprocess.run(["nvidia-smi", "--query-gpu=memory.used,memory.total",
                                       "--format=csv,noheader,nounits"],
                                      capture_output=True, text=True).stdout.split(",")
                peak["mib"] = max(peak["mib"], int(used[0])); peak["total"] = int(used[1])
            except Exception:          # noqa: BLE001
                pass

    threading.Thread(target=checkpoint_volume, daemon=True).start()
    threading.Thread(target=sample_gpu_memory, daemon=True).start()
    t0 = time.time()
    with open(f"{out}/train.log", "a") as log:          # append: a resumed run keeps the old log
        p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, env=env)
        last = {"t": time.time()}

        def stall_watchdog():
            # A training step prints within ~3 min (the first, with vLLM start-up,
            # within ~8). Silence for STALL_MINUTES means a hang: kill it instead
            # of billing an idle GPU -- a hung render once cost 2 h 20 min.
            while not stop.wait(30):
                if time.time() - last["t"] > STALL_MINUTES * 60 and p.poll() is None:
                    msg = f"\nSTALLED: no output for {STALL_MINUTES} min; killing the run\n"
                    log.write(msg); log.flush(); sys.stdout.write(msg)
                    p.kill()
                    return

        threading.Thread(target=stall_watchdog, daemon=True).start()
        for line in p.stdout:
            last["t"] = time.time()
            log.write(line); log.flush()
            sys.stdout.write(line)
        rc = p.wait()
    stop.set()
    if os.path.exists(env["WC_REWARD_LOG"]):       # per-term report: the plateau diagnostic
        subprocess.run([sys.executable, "-c", "import sys; sys.path.insert(0, '.'); "
                        "from train.reward import report; report(sys.argv[1])", env["WC_REWARD_LOG"]], env=env)
    mem = f"peak GPU memory {peak['mib'] / 1024:.1f} of {peak.get('total', 0) / 1024:.0f} GiB"
    with open(f"{out}/train.log", "a") as log:
        print(mem, file=log)
    vol.commit()
    print(f"exit {rc} after {(time.time() - t0) / 60:.1f} min; {mem}; outputs in {out}", flush=True)
    return rc


# ---------------------------------------------------------------------------
# 2. GRPO with Soup
# ---------------------------------------------------------------------------
# Registered only with WC_SOUP=1 (see image_trl for why Soup is not the default)
if os.environ.get("WC_SOUP") == "1":
    @app.function(image=image, volumes=volumes, gpu=GPU, cpu=10, memory=65536, timeout=24 * 3600)
    def _train(tag: str, run: str, smoke: bool, quant: str = "") -> str:
        import yaml

        os.chdir(REPO)
        out = f"{VOL}/runs/{run}"
        os.makedirs(out, exist_ok=True)
        cfg = yaml.safe_load(open("train/soup_grpo.yaml", encoding="utf-8"))
        cfg["base"] = _model_dir(tag)
        cfg["output"] = f"{out}/output"
        if quant:
            cfg["training"]["quantization"] = quant
        if smoke:
            cfg["data"]["train"] = "./data/grpo_smoke.jsonl"
            cfg["training"]["save_steps"] = 1000
        yaml.safe_dump(cfg, open(f"{out}/soup_grpo.yaml", "w"), sort_keys=False)
        if not os.path.isdir(cfg["base"]):
            raise SystemExit(f"{cfg['base']} not found -- run the merge step first")

        rc = _supervise([sys.executable, "train/soup_launch.py", "--verbose", "train",
                         "--config", f"{out}/soup_grpo.yaml", "--yes"], out)
        if rc != 0:
            raise SystemExit(rc)
        return out


    @app.local_entrypoint()
    def train(tag: str = "v1", run: str = "", smoke: bool = False, quant: str = ""):
        """quant overrides training.quantization ("4bit" or "none").
        The GPU comes from WC_MODAL_GPU (default A100-80GB), e.g. L40S, A10G, L4."""
        run = run or f"{'smoke' if smoke else 'grpo'}-{tag}-{time.strftime('%m%d-%H%M')}"
        print(f"run {run} on {GPU} (smoke={smoke}, quantization={quant or 'from yaml'})")
        print("outputs:", _train.with_options(gpu=GPU).remote(tag, run, smoke, quant))


# ---------------------------------------------------------------------------
# 2b. GRPO with TRL + vLLM (option B; see train/grpo_trl.py)
# ---------------------------------------------------------------------------
# 6 CPUs / 32 GB: 8 render workers mostly wait on Chromium; 10 / 64 GB added ~$1/h
@app.function(image=image_trl, volumes=volumes, gpu=GPU, cpu=6, memory=32768, timeout=24 * 3600)
def _train_trl(tag: str, run: str, smoke: bool, max_steps: int = -1, resume: bool = False,
               extra: list | None = None) -> str:
    os.chdir(REPO)
    out = f"{VOL}/runs/{run}"
    os.makedirs(out, exist_ok=True)
    model = _model_dir(tag)
    if not os.path.isdir(model):
        raise SystemExit(f"{model} not found -- run the merge step first")
    data = "data/grpo_smoke.jsonl" if smoke else "data/grpo_prompts.jsonl"
    rc = _supervise([sys.executable, "train/grpo_trl.py", "--model", model, "--data", data, "--out", out,
                     "--max-steps", str(max_steps), "--save-steps", "1000" if smoke else "20",
                     *(["--resume"] if resume else []), *(extra or [])], out)
    if rc != 0:
        raise SystemExit(rc)
    return out


@app.local_entrypoint()
def train_trl(tag: str = "v1", run: str = "", smoke: bool = False, max_steps: int = -1, resume: bool = False,
              temperature: float = 0.0, lr: float = 0.0, beta: float = -1.0, stop_at: int = 0):
    """Submits the run and returns. `.spawn()`, not `.remote()`: with `.remote()`
    the call belongs to this local process, and when that process was stopped
    (even under `modal run --detach`) Modal cancelled the training at step 48.
    Use with `modal run --detach` so the app outlives this process."""
    run = run or f"{'smoke' if smoke else 'grpo'}-trl-{tag}-{time.strftime('%m%d-%H%M')}"
    extra = [*(["--temperature", str(temperature)] if temperature else []), *(["--lr", str(lr)] if lr else []),
             *(["--beta", str(beta)] if beta >= 0 else []), *(["--stop-at", str(stop_at)] if stop_at else [])]
    call = _train_trl.with_options(gpu=GPU).spawn(tag, run, smoke, max_steps, resume, extra)
    print(f"submitted {run} on {GPU} (TRL + vLLM, smoke={smoke}, resume={resume}, {extra}); call {call.object_id}")
    print(f"follow: modal volume get watercolors-grpo runs/{run}/train.log  (committed every 10 min)")


# ---------------------------------------------------------------------------
# Evaluation: generate on the held-out prompts, SFT vs SFT+RL, same sampler
# ---------------------------------------------------------------------------
@app.function(image=image_trl, volumes=volumes, gpu=GPU, cpu=4, memory=32768, timeout=3600)
def _generate(tag: str, run: str, prompts: list, samples: int = 2, adapter: str = "final") -> dict:
    """Sketches for each held-out prompt from the SFT model and from SFT + the
    run's final RL adapter, through one vLLM sampler with identical settings
    (temperature 0.7, top_p 0.8, top_k 20, seed 1234 -- as the SFT evaluation),
    so the comparison isolates what RL changed. The adapter is merged first:
    plain weights are what the policy will be served as anyway."""
    import gc

    # top-k/top-p sampling defaults to FlashInfer's sampler, which JIT-compiles
    # with nvcc at warm-up; this slim image has no CUDA toolkit. vLLM's own
    # sampler needs none (training's colocated vLLM samples without top-k/p).
    os.environ["VLLM_USE_FLASHINFER_SAMPLER"] = "0"
    import torch
    from peft import PeftModel
    from transformers import AutoModelForCausalLM, AutoTokenizer
    from vllm import LLM, SamplingParams

    sft = _model_dir(tag)
    rl = "/tmp/rl-merged"
    m = AutoModelForCausalLM.from_pretrained(sft, dtype=torch.bfloat16)
    m = PeftModel.from_pretrained(m, f"{VOL}/runs/{run}/{adapter}").merge_and_unload()
    m.save_pretrained(rl, safe_serialization=True)
    AutoTokenizer.from_pretrained(sft).save_pretrained(rl)
    del m; gc.collect()

    params = SamplingParams(n=samples, temperature=0.7, top_p=0.8, top_k=20, max_tokens=3000, seed=1234)
    msgs = [[{"role": "system", "content": p["system"]}, {"role": "user", "content": p["request"]}]
            for p in prompts]
    out = {}
    for variant, path in (("sft", sft), ("grpo", rl)):
        llm = LLM(model=path, dtype="bfloat16", max_model_len=4096, gpu_memory_utilization=0.85, seed=1234)
        res = llm.chat(msgs, params, chat_template_kwargs={"enable_thinking": False})
        rows = []
        for p, r in zip(prompts, res):
            for k, o in enumerate(r.outputs):
                rows.append({"id": p["id"], "category": p["category"], "subject": p["subject"],
                             "request": p["request"], "sample": k, "variant": variant, "completion": o.text,
                             "gen_tokens": len(o.token_ids), "hit_limit": o.finish_reason == "length"})
        out[variant] = rows
        del llm; gc.collect(); torch.cuda.empty_cache()
    return out


@app.local_entrypoint()
def evaluate(run: str, tag: str = "v1", dest: str = "results/grpo_eval", adapter: str = "final"):
    """modal run train/modal_grpo.py::evaluate --run grpo-trl-v1-full
    then: modal run train/modal_grpo.py::score --files <dest>/gen_sft.jsonl,<dest>/gen_grpo.jsonl --dest <dest>"""
    import json
    sys.path.insert(0, ROOT)
    from train.build_sft import SYSTEM
    prompts = [{**json.loads(l), "system": SYSTEM}
               for l in open(os.path.join(ROOT, "data", "sft_eval_prompts.jsonl"), encoding="utf-8")]
    res = _generate.remote(tag, run, prompts, 2, adapter)
    d = os.path.join(dest, run if adapter == "final" else f"{run}-{adapter}")
    os.makedirs(d, exist_ok=True)
    for variant, rows in res.items():
        with open(os.path.join(d, f"gen_{variant}.jsonl"), "w", encoding="utf-8") as f:
            for r in rows:
                print(json.dumps(r), file=f)
        print(f"{variant}: {len(rows)} sketches -> {d}/gen_{variant}.jsonl")


# ---------------------------------------------------------------------------
# Hyperparameter diagnostic: what does each sampling temperature give GRPO?
# ---------------------------------------------------------------------------
@app.function(image=image_trl, volumes=volumes, gpu=GPU, cpu=4, memory=32768, timeout=3600)
def _sample(tag: str, prompts: list, temps: list, n: int = 8) -> dict:
    """n sketches per prompt from the SFT model at each temperature, sampled as
    GRPO samples (top_p 1.0, no top-k, 3,072 tokens) -- one vLLM engine."""
    os.environ["VLLM_USE_FLASHINFER_SAMPLER"] = "0"     # see _generate
    from vllm import LLM, SamplingParams
    llm = LLM(model=_model_dir(tag), dtype="bfloat16", max_model_len=4096, gpu_memory_utilization=0.85, seed=1234)
    msgs = [[{"role": "system", "content": p["system"]}, {"role": "user", "content": p["request"]}]
            for p in prompts]
    out = {}
    for t in temps:
        res = llm.chat(msgs, SamplingParams(n=n, temperature=t, top_p=1.0, max_tokens=3072, seed=1234),
                       chat_template_kwargs={"enable_thinking": False})
        out[f"T{t}"] = [{"id": p["id"], "category": p["category"], "subject": p["subject"],
                         "request": p["request"], "sample": k, "variant": f"T{t}", "completion": o.text,
                         "gen_tokens": len(o.token_ids), "hit_limit": o.finish_reason == "length"}
                        for p, r in zip(prompts, res) for k, o in enumerate(r.outputs)]
    return out


@app.local_entrypoint()
def tsweep(tag: str = "v1", temps: str = "0.7,0.8,0.9,1.0", n_prompts: int = 32,
           dest: str = "results/hparam/tsweep"):
    """Sample at each temperature, then render + taste-score each in parallel."""
    import json
    import random
    sys.path.insert(0, ROOT)
    from train.build_sft import SYSTEM, request
    rows = [json.loads(l) for l in open(os.path.join(ROOT, "data", "grpo_prompts.jsonl"), encoding="utf-8")]
    rng = random.Random(7)
    by_cat = {}
    for r in rows:
        by_cat.setdefault(r["category"], []).append(r)
    pick = []                                    # stratified: 4 prompts per category
    for cat in sorted(by_cat):
        pick += rng.sample(by_cat[cat], n_prompts // len(by_cat))
    prompts = [{"id": r["id"], "category": r["category"], "subject": r["subject"],
                "request": r["messages"][1]["content"], "system": SYSTEM} for r in pick]
    res = _sample.remote(tag, prompts, [float(t) for t in temps.split(",")])
    os.makedirs(dest, exist_ok=True)
    payloads = []
    for variant, rws in res.items():
        text = "".join(json.dumps(r) + chr(10) for r in rws)
        open(os.path.join(dest, f"gen_{variant}.jsonl"), "w", encoding="utf-8").write(text)
        payloads.append({f"gen_{variant}.jsonl": text})
    for variant, out in zip(res, _score.map(payloads)):
        d = os.path.join(dest, variant)
        os.makedirs(d, exist_ok=True)
        for rel, blob in out["files"].items():
            os.makedirs(os.path.dirname(os.path.join(d, rel)), exist_ok=True)
            open(os.path.join(d, rel), "wb").write(blob)
        print(f"{variant}: scored -> {d}")


# ---------------------------------------------------------------------------
# Evaluation: render + score generations off the local machine
# ---------------------------------------------------------------------------
@app.function(image=image_trl, volumes={"/hf": hf_cache}, cpu=8, memory=16384, timeout=3600)
def _score(files: dict, images: bool = False) -> dict:
    """Run train/score_generations.py on uploaded generation files (CPU only)."""
    work = "/tmp/eval"
    os.makedirs(work, exist_ok=True)
    paths = []
    for name, text in files.items():
        with open(f"{work}/{name}", "w", encoding="utf-8") as f:
            f.write(text)
        paths.append(f"{work}/{name}")
    r = subprocess.run([sys.executable, "train/score_generations.py", *paths], cwd=REPO,
                       capture_output=True, text=True)
    out = {"stdout": r.stdout[-20000:], "stderr": r.stderr[-4000:], "files": {}}
    import glob
    pattern = "*.png" if images else "sheet_*.png"     # images=True: every render, for rating
    for path in [f"{work}/scored.json", *glob.glob(f"{work}/renders/{pattern}")]:
        out["files"][os.path.relpath(path, work)] = open(path, "rb").read()
    return out


@app.local_entrypoint()
def score(files: str, dest: str, images: bool = False):
    """modal run train/modal_grpo.py::score --files a.jsonl,b.jsonl --dest results/x"""
    payload = {os.path.basename(p): open(p, encoding="utf-8").read() for p in files.split(",")}
    res = _score.remote(payload, images)
    print(res["stdout"])
    if res["stderr"].strip():
        print("--- stderr (tail) ---")
        print(res["stderr"][-1500:])
    for rel, blob in res["files"].items():
        local = os.path.join(dest, rel)
        os.makedirs(os.path.dirname(local), exist_ok=True)
        open(local, "wb").write(blob)
        print("saved", local)


# ---------------------------------------------------------------------------
# 3. Fetch results
# ---------------------------------------------------------------------------
@app.local_entrypoint()
def fetch(run: str, dest: str = "results/grpo"):
    """Download a run's logs and final adapter (not intermediate checkpoints)."""
    n = 0
    for entry in vol.listdir(f"/runs/{run}", recursive=True):
        path = entry.path.lstrip("/")
        if entry.type != modal.volume.FileEntryType.FILE or "/checkpoint-" in path:
            continue
        local = os.path.join(ROOT, dest, os.path.relpath(path, "runs"))
        os.makedirs(os.path.dirname(local), exist_ok=True)
        with open(local, "wb") as f:
            for chunk in vol.read_file(path):
                f.write(chunk)
        n += 1
    print(f"fetched {n} files into {dest}/{run}")
