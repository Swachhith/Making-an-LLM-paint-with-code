"""GRPO for the watercolour painter on Kaggle's free 2x T4, one 12 h session at a time.

    GPU 1: `trl vllm-serve` -- the policy in fp16, generating the rollouts
    GPU 0: train/grpo_trl.py -- LoRA in fp16 (a T4 has no bf16), micro-batch 2
    CPU:   rendering (3 Chromium workers) + taste model + SigLIP subject check

A full epoch (119 steps) is ~15-20 h, so it spans two sessions: the run saves
and stops at STOP_AFTER_HOURS, and the next session -- with this kernel's
previous output attached as an input -- resumes from the latest checkpoint.

Inputs: dataset swachhithb/watercolors-grpo (code.tar.gz: env/, train/, data/;
adapter/: the SFT run-1 LoRA). Optional: a previous version's output (resume).
"""
import glob
import json
import os
import shutil
import subprocess
import sys
import tarfile
import threading
import time
import urllib.request

MODE = "smoke"                 # "smoke": 2 steps on 8 prompts | "full": the epoch
STOP_AFTER_HOURS = 10.5        # Kaggle ends sessions at 12 h; leave time to save
STALL_MINUTES = 30             # no trainer output this long = hung: kill and save what exists
                               # (a failed weight push leaves the trainer waiting forever)
HYPER = ["--temperature", "0.8", "--lr", "5e-5"]
T0 = time.time()
WORK = "/kaggle/working"
RUN = f"{WORK}/run"
CODE = "/kaggle/tmp/wc"
MODEL = "/kaggle/tmp/sft"
VENV = "/kaggle/tmp/venv312"


def log(*a):
    print(f"[{(time.time() - T0) / 60:6.1f} min]", *a, flush=True)


def find(name):
    for root, dirs, files in os.walk("/kaggle/input"):
        if name in files or name in dirs:
            return os.path.join(root, name)
    return None


# -- 1. environment ---------------------------------------------------------------
if "--inner" not in sys.argv:
    log("kaggle python", sys.version.split()[0])
    subprocess.run([sys.executable, "-m", "pip", "install", "-q", "uv"], check=True)
    subprocess.run(["uv", "venv", "--python", "3.12", VENV], check=True)
    py = f"{VENV}/bin/python"
    subprocess.run(["uv", "pip", "install", "--python", py, "vllm==0.30.0", "trl==1.14.1", "peft",
                    "liger-kernel>=0.8.2", "flash-linear-attention", "playwright", "pillow", "numpy",
                    "requests", "pyyaml", "sentencepiece"], check=True)
    subprocess.run([py, "-m", "playwright", "install", "--with-deps", "chromium"], check=True)
    log("environment ready; re-running inside it")
    sys.exit(subprocess.run([py, "-u", os.path.abspath(__file__), "--inner"]).returncode)

import torch  # noqa: E402

log("torch", torch.__version__, "| gpus", [torch.cuda.get_device_name(i) for i in range(torch.cuda.device_count())])

# -- 2. code, data, adapter ---------------------------------------------------------
os.makedirs(CODE, exist_ok=True)
tgz = find("code.tar.gz")
if tgz and os.path.isfile(tgz):
    with tarfile.open(tgz) as t:
        t.extractall(CODE)
else:
    # Kaggle unpacks .tar.gz files in datasets: copy the unpacked tree instead
    hit = next(os.path.join(r, f) for r, _, fs in os.walk("/kaggle/input") for f in fs
               if f == "grpo_trl.py" and os.path.basename(r) == "train")
    shutil.copytree(os.path.dirname(os.path.dirname(hit)), CODE, dirs_exist_ok=True)
for need in ("train/grpo_trl.py", "env/taste_model.npz", "data/grpo_prompts.jsonl"):
    assert os.path.exists(f"{CODE}/{need}"), f"missing {need} in the code bundle"
adapter = os.path.dirname(find("adapter_config.json"))   # dataset root holds the LoRA files
log("code at", CODE, "| adapter", adapter)

# -- 3. resume? ---------------------------------------------------------------------
prev = [p for p in glob.glob("/kaggle/input/*/run") if os.path.isdir(p)]
resume = False
if prev:
    shutil.copytree(prev[0], RUN, dirs_exist_ok=True)
    cks = sorted(glob.glob(f"{RUN}/checkpoint-*"), key=lambda p: int(p.rsplit("-", 1)[1]))
    resume = bool(cks)
    log("previous output found:", prev[0], "| latest checkpoint:", cks[-1] if cks else None)
os.makedirs(RUN, exist_ok=True)

# -- 4. merge the SFT adapter (fp16) and force thinking off ------------------------------
from peft import PeftModel  # noqa: E402
from transformers import AutoModelForCausalLM, AutoTokenizer  # noqa: E402

m = AutoModelForCausalLM.from_pretrained("Qwen/Qwen3.5-4B", dtype=torch.float16)
m = PeftModel.from_pretrained(m, adapter).merge_and_unload()
m.save_pretrained(MODEL, safe_serialization=True)
tok = AutoTokenizer.from_pretrained("Qwen/Qwen3.5-4B")
tok.chat_template = "{%- set enable_thinking = false %}\n" + tok.chat_template
tok.save_pretrained(MODEL)
del m
log("merged SFT model at", MODEL)

# -- 5. vLLM server on GPU 1 ----------------------------------------------------------
vllm_log = open(f"{WORK}/vllm.log", "w")
server = subprocess.Popen([f"{VENV}/bin/trl", "vllm-serve", "--model", MODEL, "--dtype", "float16",
                           "--max_model_len", "4096", "--port", "8000",
                           # 0.7: each step TRL pushes new weights, and unpacking the embedding
                           # table (248k vocab x 2560, fp16) needs ~2.2 GiB free (1.19 + 1.04).
                           # Free was ~300 MB at 0.9 and ~810 MB at 0.8 (vLLM's real footprint
                           # runs ~1.9 GB above its share); 0.7 leaves ~2.5 GB, and its ~1.7 GB
                           # cache still holds ~80 sequences' state -- we need 32.
                           "--gpu_memory_utilization", "0.7",
                           # eager: CUDA-graph capture needs one Mamba-state block per possible
                           # sequence (default 256) and a T4 holds 163; trl vllm-serve cannot
                           # lower max_num_seqs. Also skips a ~10 min compile at start-up.
                           "--enforce_eager", "True"],
                          env={**os.environ, "CUDA_VISIBLE_DEVICES": "1",
                               "VLLM_USE_FLASHINFER_SAMPLER": "0"},
                          stdout=vllm_log, stderr=subprocess.STDOUT)
for _ in range(180):
    try:
        if urllib.request.urlopen("http://127.0.0.1:8000/health/", timeout=5).status == 200:
            break
    except Exception:          # noqa: BLE001
        pass
    if server.poll() is not None:
        print(open(f"{WORK}/vllm.log").read()[-4000:])
        raise SystemExit("vLLM server exited")
    time.sleep(10)
else:
    raise SystemExit("vLLM server never became healthy")
log("vLLM server up on GPU 1")

# -- 6. train on GPU 0 ----------------------------------------------------------------
data = "data/grpo_smoke.jsonl" if MODE == "smoke" else "data/grpo_prompts.jsonl"
cmd = [sys.executable, "-u", "train/grpo_trl.py", "--model", MODEL, "--data", data, "--out", RUN,
       "--vllm-mode", "server", "--micro-batch", "2", "--fp16", "--save-steps", "10",
       "--stop-after-hours", str(STOP_AFTER_HOURS - (time.time() - T0) / 3600), *HYPER,
       *(["--max-steps", "2"] if MODE == "smoke" else []), *(["--resume"] if resume else [])]
env = {**os.environ, "CUDA_VISIBLE_DEVICES": "0", "WC_REWARD_DEVICE": "cpu", "WC_RENDER_WORKERS": "3",
       "WC_REWARD_TERMS": "gate,length,taste", "WC_REWARD_LOG": f"{RUN}/reward_log.jsonl",
       "PYTORCH_CUDA_ALLOC_CONF": "expandable_segments:True", "TOKENIZERS_PARALLELISM": "false"}
log("trainer:", " ".join(cmd[2:]))
last = {"t": time.time()}
with open(f"{WORK}/train.log", "a") as tl:
    p = subprocess.Popen(cmd, cwd=CODE, env=env, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)

    def watchdog():
        while p.poll() is None:
            time.sleep(60)
            if time.time() - last["t"] > STALL_MINUTES * 60:
                print(f"STALLED: no trainer output for {STALL_MINUTES} min; killing", flush=True)
                p.kill()

    threading.Thread(target=watchdog, daemon=True).start()
    for line in p.stdout:
        last["t"] = time.time()
        tl.write(line); tl.flush()
        if any(k in line for k in ("'loss'", "Error", "Traceback", "saved", "time budget", "STALL", "hung", "T=")):
            print("  |", line.rstrip()[:240], flush=True)
    rc = p.wait()
server.terminate()
log("trainer exit", rc)

# -- 7. keep the output small: final adapter + the latest checkpoint only -------------------
cks = sorted(glob.glob(f"{RUN}/checkpoint-*"), key=lambda q: int(q.rsplit("-", 1)[1]))
for c in cks[:-1]:
    shutil.rmtree(c, ignore_errors=True)
log("kept:", [os.path.basename(c) for c in cks[-1:]], "final" if os.path.isdir(f"{RUN}/final") else "(no final yet)")
