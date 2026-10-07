"""GRPO for the watercolour painter with TRL 1.x and vLLM (run by modal_grpo.py).

    python train/grpo_trl.py --model /vol/models/qwen3.5-4b-sft-v1 --data data/grpo_prompts.jsonl --out /vol/runs/x

Why not `soup train`: Soup 0.75 pins TRL < 1.0, which supports vLLM <= 0.12,
and vLLM added Qwen3.5 in 0.28. Without vLLM, Soup's GRPO generates with HF
`generate()`; the smoke tests measured ~7 minutes per step on an A100 80 GB
(412 s even with the compiled causal-conv1d kernel), ~$36 for one epoch.

Same hyperparameters as train/soup_grpo.yaml (the Soup attempt), same
prompts (build_grpo_prompts.py), same reward (reward.py). What changes:
  * generation runs in vLLM, colocated on the training GPU, sleeping during
    the optimizer step so training gets the memory back;
  * use_liger_kernel: the fused GRPO loss never builds the 248k-vocabulary
    logits (without it 8 x 3,072 tokens needed a 22.7 GiB gradient and ran out
    of memory on 80 GB);
  * chat_template_kwargs enable_thinking=False -- also forced in the merged
    model's template, so the prompt is the SFT format either way.
"""
import argparse
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, ROOT)

# --- hyperparameters (see soup_grpo.yaml for the reasoning behind each) ------
MAX_COMPLETION = 3072      # rated sketches run to ~2,600 tokens
NUM_GENERATIONS = 8        # paintings per prompt; the group baseline
PROMPTS_PER_STEP = 4       # -> 32 paintings per optimizer step
MICRO_BATCH = 8            # completions per forward/backward
# Run 1 used T=1.0 and LR 2e-5: at T=1.0, 69% of the within-group reward spread
# was broken-vs-working sketches (train/grpo_signal.py), so it learned reliability
# and taste stayed flat. At T=0.8 taste is most of the signal (37% pass/fail).
TEMPERATURE = 0.8
LR = 2e-5                  # LoRA wants ~10x a full fine-tune's rate
BETA = 0.05                # KL to the SFT model: the guard against gaming the taste model
LORA_R, LORA_ALPHA = 16, 32
SEED = 20261005


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--model", required=True, help="merged SFT model directory")
    ap.add_argument("--data", default=os.path.join(ROOT, "data", "grpo_prompts.jsonl"))
    ap.add_argument("--out", required=True)
    ap.add_argument("--epochs", type=float, default=1.0)
    ap.add_argument("--max-steps", type=int, default=-1)
    ap.add_argument("--save-steps", type=int, default=20)
    ap.add_argument("--resume", action="store_true", help="continue from the latest checkpoint in --out")
    ap.add_argument("--temperature", type=float, default=TEMPERATURE)
    ap.add_argument("--lr", type=float, default=LR)
    ap.add_argument("--beta", type=float, default=BETA)
    ap.add_argument("--stop-at", type=int, default=0,
                    help="stop (and save) after this many steps, keeping the full run's LR schedule")
    args = ap.parse_args()

    from datasets import Dataset
    from peft import LoraConfig
    from trl import GRPOConfig, GRPOTrainer

    from train.reward import reward_fn

    rows = [json.loads(l) for l in open(args.data, encoding="utf-8")]
    ds = Dataset.from_list([{"prompt": r["messages"], "id": r["id"], "category": r["category"],
                             "subject": r["subject"]} for r in rows])
    print(f"{len(ds)} prompts from {args.data}", flush=True)

    cfg = GRPOConfig(
        output_dir=args.out,
        num_train_epochs=args.epochs,
        max_steps=args.max_steps,
        per_device_train_batch_size=MICRO_BATCH,
        gradient_accumulation_steps=PROMPTS_PER_STEP * NUM_GENERATIONS // MICRO_BATCH,
        num_generations=NUM_GENERATIONS,
        max_completion_length=MAX_COMPLETION,
        learning_rate=args.lr,
        lr_scheduler_type="cosine",
        warmup_steps=0.05,
        beta=args.beta,
        temperature=args.temperature,
        bf16=True,
        gradient_checkpointing=True,
        use_liger_kernel=True,
        use_vllm=True,
        vllm_mode="colocate",
        vllm_gpu_memory_utilization=0.3,
        vllm_enable_sleep_mode=True,
        vllm_max_model_length=4096,       # ~770-token prompt + 3,072 completion
        chat_template_kwargs={"enable_thinking": False},
        logging_steps=1,
        save_steps=args.save_steps,
        save_total_limit=3,
        seed=SEED,
        report_to="none",
        log_completions=False,
    )
    peft = LoraConfig(r=LORA_R, lora_alpha=LORA_ALPHA, lora_dropout=0.05,
                      target_modules="all-linear", task_type="CAUSAL_LM")
    callbacks = []
    if args.stop_at:
        from transformers import TrainerCallback

        class StopAt(TrainerCallback):
            def on_step_end(self, a, state, control, **kw):
                if state.global_step >= args.stop_at:
                    control.should_save = control.should_training_stop = True
                return control

        callbacks.append(StopAt())
    print(f"T={args.temperature} lr={args.lr} beta={args.beta} stop_at={args.stop_at or 'end'}", flush=True)
    trainer = GRPOTrainer(model=args.model, reward_funcs=reward_fn, args=cfg,
                          train_dataset=ds, peft_config=peft, callbacks=callbacks)
    # resume_from_checkpoint=True picks the latest checkpoint-N in output_dir and
    # restores adapter, optimizer, LR schedule, RNG and the data position.
    trainer.train(resume_from_checkpoint=True if args.resume else None)
    trainer.save_model(os.path.join(args.out, "final"))
    print("saved adapter to", os.path.join(args.out, "final"), flush=True)


if __name__ == "__main__":
    main()
