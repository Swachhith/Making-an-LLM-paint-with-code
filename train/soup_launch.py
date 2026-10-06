"""Run the `soup` CLI with TRL's fused Liger GRPO loss switched on.

    python train/soup_launch.py --verbose train --config soup_grpo.yaml --yes

Same arguments as `soup`; Soup does all the training. The one change: Soup
0.75 builds trl.GRPOConfig without `use_liger_kernel`, and `training.use_liger`
is not passed to its GRPO trainer. Without it TRL materialises the full
logits of every completion -- with Qwen3.5's 248k vocabulary, 8 completions x
3,072 tokens needed a 22.7 GiB fp32 gradient on top of ~59 GiB, and the
smoke test ran out of memory on an 80 GB A100. With it, TRL computes the GRPO
loss through Liger's chunked fused-linear kernel and the logits are never
built.

Soup imports GRPOConfig from `trl` inside its trainer at run time, so
replacing the attribute on the `trl` module before the CLI starts is enough.
Soup's own loss override only applies to non-standard `grpo_variant`s, which
this config does not use, so TRL's Liger path is the one that runs.
"""
import sys

import trl

_GRPOConfig = trl.GRPOConfig


class GRPOConfig(_GRPOConfig):
    def __post_init__(self):
        self.use_liger_kernel = True
        super().__post_init__()


GRPOConfig.__name__ = GRPOConfig.__qualname__ = "GRPOConfig"
trl.GRPOConfig = GRPOConfig

if __name__ == "__main__":
    from soup_cli.cli import run
    print("[soup_launch] trl.GRPOConfig patched: use_liger_kernel=True", flush=True)
    sys.argv[0] = "soup"
    sys.exit(run())
