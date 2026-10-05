"""SFT warm-start of Qwen3.5-4B with Soup, then a base-vs-SFT generation test.

Inputs: Kaggle dataset swachhithb/watercolors-sft (built by train/build_sft.py).
Outputs in /kaggle/working:
    adapter/                 the LoRA adapter
    gen_base.jsonl           2 sketches per held-out prompt, adapter OFF
    gen_sft.jsonl            2 sketches per held-out prompt, adapter ON
    soup_train.log           the full training log

The two generation sets come from the same loaded weights with the adapter
switched off and on, the same prompts and the same sampling settings, so any
difference is the fine-tuning and nothing else. They are rendered and scored
locally (gate + taste model).
"""
import glob
import json
import os
import shutil
import subprocess
import sys
import time

T0 = time.time()
WORK = "/kaggle/working"
RUN = os.path.join(WORK, "run")
SAMPLES_PER_PROMPT = 2
MAX_NEW_TOKENS = 3000      # longest rated sketch is ~2,500 tokens


def log(*a):
    print(f"[{time.time() - T0:7.0f}s]", *a, flush=True)


def find_input():
    for root, _, files in os.walk("/kaggle/input"):
        if "sft_train.jsonl" in files:
            return root
    raise SystemExit("dataset not attached: sft_train.jsonl not found under /kaggle/input")


# -- bootstrap: Soup on a Python it supports --------------------------------------
# Kaggle's image moved to Python 3.13 (it was 3.12 a week earlier). Every recent
# soup-cli release declares Requires-Python <3.13, and Soup warns that 3.13 can
# crash inside PyTorch's native extension. So build a Python 3.12 environment
# with uv (it fetches a standalone interpreter), install the stack there, and
# re-run this same file inside it with --inner.
VENV = "/tmp/venv312"
if "--inner" not in sys.argv:
    log("kaggle python:", sys.version.split()[0])
    subprocess.run([sys.executable, "-m", "pip", "install", "-q", "uv"], check=True)
    subprocess.run(["uv", "venv", "--python", "3.12", VENV], check=True)
    vpy = os.path.join(VENV, "bin", "python")
    subprocess.run(["uv", "pip", "install", "--python", vpy, "soup-cli[train,liger]==0.75.2"], check=True)
    # Fast Gated-DeltaNet kernels; transformers falls back to a slower torch
    # path without them, so a failed install is not fatal.
    r = subprocess.run(["uv", "pip", "install", "--python", vpy, "flash-linear-attention"])
    log("flash-linear-attention installed" if r.returncode == 0 else "flash-linear-attention unavailable")
    log("re-running inside the Python 3.12 environment")
    sys.exit(subprocess.run([vpy, "-u", os.path.abspath(__file__), "--inner"]).returncode)

SOUP = os.path.join(os.path.dirname(sys.executable), "soup")

import torch  # noqa: E402
import transformers  # noqa: E402
gpus = [(torch.cuda.get_device_name(i), round(torch.cuda.get_device_properties(i).total_memory / 2**30, 1))
        for i in range(torch.cuda.device_count())]
log("torch", torch.__version__, "| transformers", transformers.__version__, "| gpus", gpus)

# -- data -------------------------------------------------------------------------
src = find_input()
os.makedirs(os.path.join(RUN, "data"), exist_ok=True)
for f in ("sft_train.jsonl", "sft_eval_prompts.jsonl"):
    shutil.copy(os.path.join(src, f), os.path.join(RUN, "data", f))
shutil.copy(os.path.join(src, "soup_sft.yaml"), os.path.join(RUN, "soup_sft.yaml"))
SYSTEM = open(os.path.join(src, "prompt.md"), encoding="utf-8").read().strip()
os.chdir(RUN)

# -- train --------------------------------------------------------------------
log("soup train starting")
with open(os.path.join(WORK, "soup_train.log"), "w") as lf:
    p = subprocess.Popen([SOUP, "--verbose", "train", "--config", "soup_sft.yaml", "--yes"], stdout=subprocess.PIPE,
                         stderr=subprocess.STDOUT, text=True, env={**os.environ, "PYTHONUNBUFFERED": "1",
                              "PYTORCH_CUDA_ALLOC_CONF": "expandable_segments:True",
                              # one T4: with two visible, the model is split across them and
                              # Liger's fused loss sees hidden states and lm_head on different GPUs
                              "CUDA_VISIBLE_DEVICES": "0"})
    for line in p.stdout:
        lf.write(line); lf.flush()
        if any(k in line.lower() for k in ("loss", "error", "epoch", "trainable", "step", "warn")):
            print("  soup|", line.rstrip()[:220], flush=True)
    rc = p.wait()
log("soup train exit code", rc)
if rc != 0:
    raise SystemExit("training failed -- see soup_train.log")

cands = [os.path.dirname(p) for p in glob.glob(os.path.join(RUN, "output", "**", "adapter_config.json"),
                                               recursive=True)]
if not cands:
    raise SystemExit("no adapter_config.json found under output/")
adapter_dir = max(cands, key=os.path.getmtime)
shutil.copytree(adapter_dir, os.path.join(WORK, "adapter"), dirs_exist_ok=True)
log("adapter:", adapter_dir, "->", os.path.join(WORK, "adapter"))

# -- generation test ------------------------------------------------------------
from peft import PeftModel  # noqa: E402
from transformers import AutoModelForCausalLM, AutoTokenizer, BitsAndBytesConfig  # noqa: E402

BASE = "Qwen/Qwen3.5-4B"
tok = AutoTokenizer.from_pretrained(BASE)
tok.padding_side = "left"
if tok.pad_token is None:
    tok.pad_token = tok.eos_token
model = AutoModelForCausalLM.from_pretrained(
    BASE, device_map={"": 0},
    quantization_config=BitsAndBytesConfig(load_in_4bit=True, bnb_4bit_quant_type="nf4",
                                           bnb_4bit_compute_dtype=torch.float16))
model = PeftModel.from_pretrained(model, adapter_dir).eval()
log("generation model loaded")

prompts = [json.loads(l) for l in open("data/sft_eval_prompts.jsonl", encoding="utf-8")]
jobs = [(p, k) for p in prompts for k in range(SAMPLES_PER_PROMPT)]
texts = [tok.apply_chat_template([{"role": "system", "content": SYSTEM},
                                  {"role": "user", "content": p["request"]}],
                                 tokenize=False, add_generation_prompt=True, enable_thinking=False)
         for p, _ in jobs]


def generate(tag, batch=10):
    out_path = os.path.join(WORK, f"gen_{tag}.jsonl")
    torch.manual_seed(1234)    # same sampling stream for both variants
    with open(out_path, "w", encoding="utf-8") as f:
        for i in range(0, len(texts), batch):
            t = time.time()
            enc = tok(texts[i:i + batch], return_tensors="pt", padding=True).to(0)
            with torch.inference_mode():
                if tag == "base":
                    with model.disable_adapter():
                        gen = model.generate(**enc, max_new_tokens=MAX_NEW_TOKENS, do_sample=True,
                                             temperature=0.7, top_p=0.8, top_k=20)
                else:
                    gen = model.generate(**enc, max_new_tokens=MAX_NEW_TOKENS, do_sample=True,
                                         temperature=0.7, top_p=0.8, top_k=20)
            new = gen[:, enc["input_ids"].shape[1]:]
            for (p, k), ids in zip(jobs[i:i + batch], new):
                n_tok = int((ids != tok.pad_token_id).sum())
                f.write(json.dumps({"id": p["id"], "category": p["category"], "subject": p["subject"],
                                    "request": p["request"], "sample": k, "variant": tag,
                                    "completion": tok.decode(ids, skip_special_tokens=True),
                                    "gen_tokens": n_tok, "hit_limit": n_tok >= MAX_NEW_TOKENS}) + "\n")
            f.flush()
            log(f"  {tag}: {min(i + batch, len(texts))}/{len(texts)} ({time.time() - t:.0f}s for this batch)")
    return out_path


for tag in ("base", "sft"):
    log(f"generating {tag}")
    generate(tag)
log("done")
