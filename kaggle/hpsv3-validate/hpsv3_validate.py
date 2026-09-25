"""Validate an HPSv3 deployment against the reference pool's recorded scores.

The pool ships `hpsv3_mu` for all 178 paintings. If this deployment is right --
same weights, same preprocessing, same prompt -- our scores should reproduce
theirs. We also try two prompt wordings, because which text Paniego scored
against is not documented and the reward must use the same one for its
normalisation (fit on the pool) to be valid.

Memory: HPSv3.safetensors is a COMPLETE state dict, so the Qwen2-VL base
weights are never downloaded. The model is built with empty weights and the
checkpoint is streamed tensor-by-tensor onto the GPU(s).
"""
import json, math, os, subprocess, sys, time
os.environ.setdefault("HF_HOME", "/tmp/hf")
os.environ.setdefault("PYTORCH_ALLOC_CONF", "expandable_segments:True")
T0 = time.time()

def log(*a):
    print(f"[{time.time() - T0:6.0f}s]", *a, flush=True)

# hpsv3 pins transformers==4.45.2. The pin is load-bearing: the checkpoint's key
# layout (model.layers.*, visual.blocks.*) is 4.45's Qwen2-VL; later versions
# restructured the class and the keys stop matching.
subprocess.run([sys.executable, "-m", "pip", "install", "-q", "hpsv3==1.0.0"], check=True)
import torch, transformers, accelerate
n_gpu = torch.cuda.device_count()
gpus = [(torch.cuda.get_device_name(i), torch.cuda.get_device_properties(i).total_memory / 2**30)
        for i in range(n_gpu)]
log("torch", torch.__version__, "| transformers", transformers.__version__,
    "| accelerate", accelerate.__version__, "| gpus", gpus)

POOL = json.loads("[[\"okay_c0092_r2\", \"okay\", \"a magenta hibiscus\", 6.624366760253906], [\"okay_c0001_r1\", \"okay\", \"a white hibiscus with a red eye\", 5.3858723640441895], [\"love_c0011_r1\", \"love\", \"a white hibiscus with a red eye\", 8.419869422912598], [\"love_c0059_r2\", \"love\", \"a coral hibiscus\", 8.473607063293457], [\"love_c0049_r2\", \"love\", \"a coral hibiscus\", 8.129838943481445], [\"love_c0072_r0\", \"love\", \"a magenta hibiscus\", 7.793642044067383], [\"love_c0004_r2\", \"love\", \"a coral hibiscus\", 7.549259662628174], [\"okay_c0014_r2\", \"okay\", \"a coral hibiscus\", 6.654109001159668], [\"okay_c0087_r1\", \"okay\", \"a magenta hibiscus\", 6.3999457359313965], [\"love_c0066_r2\", \"love\", \"a white hibiscus with a red eye\", 8.236639022827148], [\"love_c0076_r2\", \"love\", \"a white hibiscus with a red eye\", 7.941746711730957], [\"okay_c0010_r0\", \"okay\", \"a peach hibiscus\", 5.375507831573486], [\"okay_c0000_r0\", \"okay\", \"a peach hibiscus\", 6.51118803024292], [\"love_c0040_r2\", \"love\", \"a peach hibiscus\", 7.926506996154785], [\"love_c0032_r2\", \"love\", \"a magenta hibiscus\", 8.001227378845215], [\"okay_c0054_r0\", \"okay\", \"a coral hibiscus\", 6.013242244720459], [\"okay_c0008_r1\", \"okay\", \"a yellow hibiscus\", 6.423610687255859], [\"okay_c0019_r0\", \"okay\", \"a coral hibiscus\", 5.989310264587402], [\"love_c0055_r1\", \"love\", \"a peach hibiscus\", 7.54768705368042], [\"love_c0027_r1\", \"love\", \"a magenta hibiscus\", 8.694257736206055], [\"okay_c0037_r1\", \"okay\", \"a magenta hibiscus\", 5.9904937744140625], [\"love_c0103_r0\", \"love\", \"a yellow hibiscus\", 7.383191108703613], [\"okay_c0051_r2\", \"okay\", \"a white hibiscus with a red eye\", 6.871903896331787], [\"love_c0103_r1\", \"love\", \"a yellow hibiscus\", 7.504058361053467], [\"love_c0027_r0\", \"love\", \"a magenta hibiscus\", 8.826115608215332], [\"love_c0055_r0\", \"love\", \"a peach hibiscus\", 8.091805458068848], [\"okay_c0009_r1\", \"okay\", \"a coral hibiscus\", 5.002492427825928], [\"okay_c0019_r1\", \"okay\", \"a coral hibiscus\", 6.661259174346924], [\"okay_c0018_r0\", \"okay\", \"a yellow hibiscus\", 5.823144912719727], [\"okay_c0008_r0\", \"okay\", \"a yellow hibiscus\", 5.662936210632324], [\"okay_c0054_r1\", \"okay\", \"a coral hibiscus\", 6.643307209014893], [\"okay_c0083_r2\", \"okay\", \"a yellow hibiscus\", 5.179290771484375], [\"okay_c0000_r1\", \"okay\", \"a peach hibiscus\", 6.7754340171813965], [\"love_c0087_r0\", \"love\", \"a magenta hibiscus\", 7.781055450439453], [\"okay_c0097_r0\", \"okay\", \"a magenta hibiscus\", 6.897668361663818], [\"love_c0048_r2\", \"love\", \"a yellow hibiscus\", 8.14632797241211], [\"okay_c0058_r2\", \"okay\", \"a yellow hibiscus\", 6.066551208496094], [\"love_c0072_r1\", \"love\", \"a magenta hibiscus\", 7.610899925231934], [\"love_c0062_r1\", \"love\", \"a magenta hibiscus\", 7.483125686645508], [\"love_c0015_r2\", \"love\", \"a peach hibiscus\", 7.589529514312744], [\"okay_c0086_r1\", \"okay\", \"a white hibiscus with a red eye\", 6.171204090118408], [\"love_c0063_r0\", \"love\", \"a yellow hibiscus\", 7.968545436859131], [\"okay_c0011_r0\", \"okay\", \"a white hibiscus with a red eye\", 7.363351821899414], [\"love_c0077_r2\", \"love\", \"a magenta hibiscus\", 7.415608882904053], [\"okay_c0067_r2\", \"okay\", \"a magenta hibiscus\", 6.681327819824219], [\"okay_c0057_r0\", \"okay\", \"a magenta hibiscus\", 5.988947868347168], [\"okay_c0047_r0\", \"okay\", \"a magenta hibiscus\", 7.313473701477051], [\"okay_c0098_r2\", \"okay\", \"a yellow hibiscus\", 5.345364093780518], [\"love_c0088_r2\", \"love\", \"a yellow hibiscus\", 7.504963397979736], [\"okay_c0031_r2\", \"okay\", \"a white hibiscus with a red eye\", 6.895124435424805], [\"okay_c0035_r0\", \"okay\", \"a peach hibiscus\", 6.310243129730225], [\"love_c0079_r1\", \"love\", \"a coral hibiscus\", 7.710127830505371], [\"love_c0068_r0\", \"love\", \"a yellow hibiscus\", 7.678781986236572], [\"okay_c0110_r0\", \"okay\", \"a peach hibiscus\", 7.234748840332031], [\"okay_c0078_r0\", \"okay\", \"a yellow hibiscus\", 5.822946071624756], [\"okay_c0100_r0\", \"okay\", \"a peach hibiscus\", 7.300665378570557], [\"okay_c0046_r1\", \"okay\", \"a white hibiscus with a red eye\", 7.040375709533691], [\"love_c0095_r0\", \"love\", \"a peach hibiscus\", 8.046586036682129], [\"okay_c0060_r1\", \"okay\", \"a peach hibiscus\", 7.363393306732178], [\"love_c0108_r1\", \"love\", \"a yellow hibiscus\", 7.574646472930908], [\"love_c0070_r1\", \"love\", \"a peach hibiscus\", 8.501941680908203], [\"love_c0012_r1\", \"love\", \"a magenta hibiscus\", 7.442063331604004], [\"love_c0091_r2\", \"love\", \"a white hibiscus with a red eye\", 7.4673075675964355], [\"okay_c0013_r0\", \"okay\", \"a yellow hibiscus\", 6.186229228973389], [\"love_c0003_r0\", \"love\", \"a yellow hibiscus\", 7.51838493347168], [\"love_c0075_r2\", \"love\", \"a peach hibiscus\", 8.062928199768066], [\"love_c0084_r1\", \"love\", \"a coral hibiscus\", 8.42147159576416], [\"okay_c0094_r1\", \"okay\", \"a coral hibiscus\", 6.215800762176514], [\"okay_c0071_r0\", \"okay\", \"a white hibiscus with a red eye\", 7.023615837097168], [\"okay_c0071_r1\", \"okay\", \"a white hibiscus with a red eye\", 6.865664005279541], [\"okay_c0061_r1\", \"okay\", \"a white hibiscus with a red eye\", 5.268726348876953], [\"love_c0084_r0\", \"love\", \"a coral hibiscus\", 8.670711517333984], [\"okay_c0094_r0\", \"okay\", \"a coral hibiscus\", 6.687648773193359], [\"okay_c0039_r2\", \"okay\", \"a coral hibiscus\", 5.169633865356445], [\"okay_c0013_r1\", \"okay\", \"a yellow hibiscus\", 5.15277624130249], [\"love_c0003_r1\", \"love\", \"a yellow hibiscus\", 7.507931709289551], [\"okay_c0090_r2\", \"okay\", \"a peach hibiscus\", 5.245970249176025], [\"love_c0080_r2\", \"love\", \"a peach hibiscus\", 8.436151504516602], [\"love_c0064_r2\", \"love\", \"a coral hibiscus\", 7.9529314041137695], [\"okay_c0002_r0\", \"okay\", \"a magenta hibiscus\", 6.323322772979736], [\"love_c0012_r0\", \"love\", \"a magenta hibiscus\", 7.6126508712768555], [\"love_c0060_r0\", \"love\", \"a peach hibiscus\", 7.774058818817139], [\"okay_c0108_r0\", \"okay\", \"a yellow hibiscus\", 6.274172306060791], [\"love_c0095_r1\", \"love\", \"a peach hibiscus\", 8.639803886413574], [\"okay_c0030_r2\", \"okay\", \"a peach hibiscus\", 5.534221649169922], [\"love_c0099_r2\", \"love\", \"a coral hibiscus\", 7.459820747375488], [\"love_c0024_r0\", \"love\", \"a coral hibiscus\", 8.564224243164062], [\"love_c0034_r0\", \"love\", \"a coral hibiscus\", 7.40432071685791], [\"love_c0068_r1\", \"love\", \"a yellow hibiscus\", 8.256096839904785], [\"love_c0110_r1\", \"love\", \"a peach hibiscus\", 8.296561241149902], [\"love_c0078_r1\", \"love\", \"a yellow hibiscus\", 7.4378767013549805], [\"love_c0100_r1\", \"love\", \"a peach hibiscus\", 7.619840621948242], [\"love_c0042_r2\", \"love\", \"a magenta hibiscus\", 7.677889823913574], [\"love_c0079_r0\", \"love\", \"a coral hibiscus\", 7.445478916168213], [\"love_c0035_r1\", \"love\", \"a peach hibiscus\", 7.626945495605469], [\"okay_c0057_r1\", \"okay\", \"a magenta hibiscus\", 5.767542839050293], [\"okay_c0047_r1\", \"okay\", \"a magenta hibiscus\", 6.234775543212891], [\"okay_c0030_r1\", \"okay\", \"a peach hibiscus\", 7.194772720336914], [\"love_c0104_r0\", \"love\", \"a coral hibiscus\", 7.42676305770874], [\"love_c0099_r1\", \"love\", \"a coral hibiscus\", 7.514366626739502], [\"okay_c0100_r2\", \"okay\", \"a peach hibiscus\", 7.25677490234375], [\"love_c0068_r2\", \"love\", \"a yellow hibiscus\", 8.07738971710205], [\"okay_c0043_r0\", \"okay\", \"a yellow hibiscus\", 6.410874843597412], [\"okay_c0021_r0\", \"okay\", \"a white hibiscus with a red eye\", 5.747097969055176], [\"love_c0088_r0\", \"love\", \"a yellow hibiscus\", 7.625014305114746], [\"okay_c0047_r2\", \"okay\", \"a magenta hibiscus\", 7.236008644104004], [\"love_c0057_r2\", \"love\", \"a magenta hibiscus\", 7.611031532287598], [\"okay_c0061_r2\", \"okay\", \"a white hibiscus with a red eye\", 5.228657245635986], [\"love_c0071_r2\", \"love\", \"a white hibiscus with a red eye\", 7.439922332763672], [\"okay_c0017_r0\", \"okay\", \"a magenta hibiscus\", 5.807035446166992], [\"okay_c0007_r0\", \"okay\", \"a magenta hibiscus\", 6.894704818725586], [\"okay_c0039_r1\", \"okay\", \"a coral hibiscus\", 5.9887237548828125], [\"love_c0075_r0\", \"love\", \"a peach hibiscus\", 8.000481605529785], [\"okay_c0003_r2\", \"okay\", \"a yellow hibiscus\", 6.361945629119873], [\"okay_c0013_r2\", \"okay\", \"a yellow hibiscus\", 5.675393104553223], [\"love_c0080_r1\", \"love\", \"a peach hibiscus\", 8.188469886779785], [\"okay_c0064_r1\", \"okay\", \"a coral hibiscus\", 6.9922990798950195], [\"okay_c0074_r1\", \"okay\", \"a coral hibiscus\", 7.372082710266113], [\"okay_c0038_r0\", \"okay\", \"a yellow hibiscus\", 5.377638339996338], [\"okay_c0091_r0\", \"okay\", \"a white hibiscus with a red eye\", 5.180613994598389], [\"okay_c0016_r1\", \"okay\", \"a white hibiscus with a red eye\", 7.344085693359375], [\"love_c0108_r2\", \"love\", \"a yellow hibiscus\", 8.34911823272705], [\"okay_c0070_r2\", \"okay\", \"a peach hibiscus\", 6.9831132888793945], [\"okay_c0060_r2\", \"okay\", \"a peach hibiscus\", 6.857123851776123], [\"love_c0012_r2\", \"love\", \"a magenta hibiscus\", 7.403765678405762], [\"okay_c0091_r1\", \"okay\", \"a white hibiscus with a red eye\", 7.202275276184082], [\"okay_c0028_r1\", \"okay\", \"a yellow hibiscus\", 5.9319539070129395], [\"love_c0064_r0\", \"love\", \"a coral hibiscus\", 7.654571056365967], [\"love_c0074_r0\", \"love\", \"a coral hibiscus\", 7.575171947479248], [\"okay_c0075_r1\", \"okay\", \"a peach hibiscus\", 7.282652378082275], [\"okay_c0039_r0\", \"okay\", \"a coral hibiscus\", 5.513918399810791], [\"okay_c0084_r2\", \"okay\", \"a coral hibiscus\", 7.23160457611084], [\"okay_c0088_r1\", \"okay\", \"a yellow hibiscus\", 7.12176513671875], [\"okay_c0031_r1\", \"okay\", \"a white hibiscus with a red eye\", 6.637928009033203], [\"love_c0079_r2\", \"love\", \"a coral hibiscus\", 7.76314115524292], [\"okay_c0099_r0\", \"okay\", \"a coral hibiscus\", 6.815770149230957], [\"love_c0104_r1\", \"love\", \"a coral hibiscus\", 8.016764640808105], [\"okay_c0020_r0\", \"okay\", \"a peach hibiscus\", 6.2471442222595215], [\"okay_c0000_r2\", \"okay\", \"a peach hibiscus\", 7.366326808929443], [\"love_c0010_r2\", \"love\", \"a peach hibiscus\", 8.501953125], [\"okay_c0066_r0\", \"okay\", \"a white hibiscus with a red eye\", 5.40684700012207], [\"love_c0048_r1\", \"love\", \"a yellow hibiscus\", 7.7128376960754395], [\"love_c0004_r0\", \"love\", \"a coral hibiscus\", 7.411374092102051], [\"love_c0072_r2\", \"love\", \"a magenta hibiscus\", 8.366713523864746], [\"love_c0015_r1\", \"love\", \"a peach hibiscus\", 7.52672815322876], [\"okay_c0049_r0\", \"okay\", \"a coral hibiscus\", 7.18195915222168], [\"love_c0059_r0\", \"love\", \"a coral hibiscus\", 7.738949775695801], [\"okay_c0092_r0\", \"okay\", \"a magenta hibiscus\", 7.036065578460693], [\"okay_c0082_r0\", \"okay\", \"a magenta hibiscus\", 5.7631683349609375], [\"love_c0067_r1\", \"love\", \"a magenta hibiscus\", 7.497140407562256], [\"love_c0077_r1\", \"love\", \"a magenta hibiscus\", 7.665462493896484], [\"okay_c0051_r1\", \"okay\", \"a white hibiscus with a red eye\", 6.769469738006592], [\"okay_c0103_r2\", \"okay\", \"a yellow hibiscus\", 7.039947986602783], [\"okay_c0019_r2\", \"okay\", \"a coral hibiscus\", 6.776556015014648], [\"okay_c0107_r0\", \"okay\", \"a magenta hibiscus\", 6.430605411529541], [\"love_c0032_r0\", \"love\", \"a magenta hibiscus\", 7.650687217712402], [\"okay_c0022_r0\", \"okay\", \"a magenta hibiscus\", 5.683409690856934], [\"love_c0040_r0\", \"love\", \"a peach hibiscus\", 8.065085411071777], [\"love_c0040_r1\", \"love\", \"a peach hibiscus\", 8.288122177124023], [\"love_c0032_r1\", \"love\", \"a magenta hibiscus\", 7.449965953826904], [\"okay_c0022_r1\", \"okay\", \"a magenta hibiscus\", 7.051527500152588], [\"love_c0055_r2\", \"love\", \"a peach hibiscus\", 7.77396821975708], [\"okay_c0045_r2\", \"okay\", \"a peach hibiscus\", 5.3242716789245605], [\"love_c0037_r2\", \"love\", \"a magenta hibiscus\", 8.800193786621094], [\"love_c0027_r2\", \"love\", \"a magenta hibiscus\", 8.436915397644043], [\"okay_c0051_r0\", \"okay\", \"a white hibiscus with a red eye\", 5.610709190368652], [\"okay_c0067_r0\", \"okay\", \"a magenta hibiscus\", 7.145811557769775], [\"okay_c0077_r0\", \"okay\", \"a magenta hibiscus\", 7.252993583679199], [\"okay_c0092_r1\", \"okay\", \"a magenta hibiscus\", 6.3773512840271], [\"okay_c0049_r1\", \"okay\", \"a coral hibiscus\", 6.714982032775879], [\"okay_c0015_r0\", \"okay\", \"a peach hibiscus\", 6.812106609344482], [\"love_c0004_r1\", \"love\", \"a coral hibiscus\", 8.043147087097168], [\"okay_c0058_r0\", \"okay\", \"a yellow hibiscus\", 6.105032920837402], [\"okay_c0048_r0\", \"okay\", \"a yellow hibiscus\", 7.155771732330322], [\"okay_c0087_r2\", \"okay\", \"a magenta hibiscus\", 7.09377908706665], [\"love_c0076_r1\", \"love\", \"a white hibiscus with a red eye\", 7.437044620513916], [\"love_c0066_r1\", \"love\", \"a white hibiscus with a red eye\", 7.8438401222229], [\"okay_c0083_r0\", \"okay\", \"a yellow hibiscus\", 5.496199607849121]]")

from huggingface_hub import hf_hub_download, snapshot_download
pool_dir = snapshot_download("FineEnvs/watercolour-reference-pool", repo_type="dataset",
                             allow_patterns=["images/*"])
log("pool images:", len(os.listdir(os.path.join(pool_dir, "images"))))
ckpt = hf_hub_download("MizzenAI/HPSv3", "HPSv3.safetensors")
log("checkpoint:", round(os.path.getsize(ckpt) / 1e9, 2), "GB")

from accelerate import init_empty_weights, infer_auto_device_map, load_checkpoint_and_dispatch
from transformers import AutoConfig, AutoProcessor
from hpsv3.model.qwen2vl_trainer import Qwen2VLRewardModelBT
from hpsv3.inference import HPSv3RewardInferencer

BASE = "Qwen/Qwen2-VL-7B-Instruct"
processor = AutoProcessor.from_pretrained(BASE, padding_side="right")
processor.tokenizer.add_special_tokens({"additional_special_tokens": ["<|Reward|>"]})
special_ids = processor.tokenizer.convert_tokens_to_ids(["<|Reward|>"])

config = AutoConfig.from_pretrained(BASE)
config.use_cache = False
config._attn_implementation = "sdpa"          # FlashAttention-2 needs Ampere+
config.vocab_size = len(processor.tokenizer)  # 151658, matches the checkpoint

with init_empty_weights():
    model = Qwen2VLRewardModelBT(config, output_dim=2, reward_token="special",
                                 special_token_ids=special_ids, rm_head_type="ranknet",
                                 rm_head_kwargs=None)
# Build in bf16 on meta. Left at the fp32 default, accelerate would upcast every
# bf16 tensor on load and need ~33 GB.
model = model.to(torch.bfloat16)

NO_SPLIT = ["Qwen2VLDecoderLayer", "Qwen2VLVisionBlock"]
if gpus and gpus[0][1] > 22:
    device_map = {"": 0}
else:
    # The vision tower is placed first, on GPU 0, and its activations are the
    # big ones. Filling GPU 0 to the brim (run 1: 11.9 GB vs 3.6 GB on GPU 1)
    # left no room for them. Cap GPU 0 and push the decoder layers to GPU 1.
    mm = {i: "13GiB" for i in range(n_gpu)}
    mm[0] = "7GiB"
    mm["cpu"] = "24GiB"
    device_map = infer_auto_device_map(model, max_memory=mm, no_split_module_classes=NO_SPLIT,
                                       dtype=torch.bfloat16)
    # HPSv3's forward indexes the reward-head output with a mask built from
    # input_ids (qwen2vl_trainer.py:237). Inputs live on cuda:0, so the head
    # must too -- otherwise "indices should be ... on the same device". The
    # head is ~3.7M params; accelerate's hook moves hidden states over to it.
    head_keys = [k for k in device_map if k == "rm_head" or k.startswith("rm_head.")]
    for k in head_keys:
        device_map[k] = 0
    if not head_keys:
        device_map["rm_head"] = 0
    log("device map (non-layer entries):",
        {k: v for k, v in device_map.items() if ".layers." not in k and ".blocks." not in k})
model = load_checkpoint_and_dispatch(model, ckpt, device_map=device_map,
                                     no_split_module_classes=NO_SPLIT, dtype=torch.bfloat16)
model.rm_head.to(torch.float32)   # stored bf16, upcast exactly -- as their loader does
model.eval()
# PyPI hpsv3 1.0.0's reward() has NO inference_mode/no_grad (GitHub main does).
# With autograd on, every layer's activations are kept for a backward pass that
# never happens -- that, not batch size, caused all three OOMs (8.6 GB in the
# vision tower at batch 4, 4.5 GB in the decoder at batch 1).
model.requires_grad_(False)
# The last two steps of their create_model_and_processor (train.py:113-114).
# Without pad_token_id the forward refuses any batch larger than 1.
model.config.tokenizer_padding_side = processor.tokenizer.padding_side
model.config.pad_token_id = processor.tokenizer.pad_token_id
log("model loaded | devices:", sorted({str(p.device) for p in model.parameters()}),
    "| gpu mem GB:", [round(torch.cuda.memory_allocated(i) / 2**30, 1) for i in range(n_gpu)])

inf = HPSv3RewardInferencer.__new__(HPSv3RewardInferencer)
inf.model, inf.processor = model, processor
inf.device, inf.use_special_tokens, inf.data_config = "cuda:0", True, None

VARIANTS = {
    "subject": lambda s: s,
    "watercolour_painting_of": lambda s: f"a watercolour painting of {s}",
}
# In transformers 4.45 the vision tower's sdpa path concatenates every image in
# the batch and builds ONE dense attention mask over all of them, so its memory
# grows with batch size squared. Batch 8 asked for 3.09 GiB on a T4.
# With gradients off, activations are transient. The vision tower's sdpa path
# still builds one dense mask over every image in the batch (quadratic in batch
# size), so stay moderate on 16 GB cards.
BS = 8 if gpus and gpus[0][1] > 22 else 4
results = {k: [] for k in VARIANTS}
for name, fmt in VARIANTS.items():
    t = time.time()
    for b in range(0, len(POOL), BS):
        chunk = POOL[b:b + BS]
        paths = [os.path.join(pool_dir, "images", f"{r[0]}.png") for r in chunk]
        # keyword args on purpose: PyPI 1.0.0 defines reward(image_paths, prompts)
        # while GitHub main defines reward(prompts, image_paths). Keywords are
        # correct against both.
        if name == "subject" and b == 0:
            probe = inf.prepare_batch(image_paths=paths, prompts=[fmt(r[2]) for r in chunk])
            log("first batch: image_grid_thw", probe["image_grid_thw"].tolist(),
                "| input_ids", tuple(probe["input_ids"].shape),
                "| pixel_values", tuple(probe["pixel_values"].shape))
            del probe
        with torch.inference_mode():
            out = inf.reward(prompts=[fmt(r[2]) for r in chunk], image_paths=paths).float().cpu()
        if b % 40 == 0:
            log(f"  {name}: {b + len(chunk)}/{len(POOL)} | peak GB",
                [round(torch.cuda.max_memory_allocated(i) / 2**30, 1) for i in range(n_gpu)])
        for r, row in zip(chunk, out.tolist()):
            results[name].append({"stem": r[0], "tier": r[1], "subject": r[2],
                                  "theirs": r[3], "mu": row[0], "sigma": row[1]})
    dt = time.time() - t
    log(f"{name}: {len(POOL)} images in {dt:.0f}s ({len(POOL) / dt:.2f} img/s at batch {BS})")

def pearson(x, y):
    mx, my = sum(x) / len(x), sum(y) / len(y)
    sx = math.sqrt(sum((a - mx) ** 2 for a in x)); sy = math.sqrt(sum((b - my) ** 2 for b in y))
    return sum((a - mx) * (b - my) for a, b in zip(x, y)) / (sx * sy)

summary = {}
for name, rs in results.items():
    ok = [r for r in rs if math.isfinite(r["mu"])]
    ours = [r["mu"] for r in ok]; theirs = [r["theirs"] for r in ok]
    mad = sum(abs(a - b) for a, b in zip(ours, theirs)) / len(ok)
    love = [r["mu"] for r in ok if r["tier"] == "love"]; okay = [r["mu"] for r in ok if r["tier"] == "okay"]
    auc = sum((1 if a > b else .5 if a == b else 0) for a in love for b in okay) / (len(love) * len(okay))
    summary[name] = {"n": len(ok), "nan": len(rs) - len(ok), "pearson": pearson(ours, theirs),
                     "mean_abs_diff": mad, "mean_ours": sum(ours) / len(ours),
                     "mean_theirs": sum(theirs) / len(theirs), "love_vs_okay_auc": auc}
    log(name, json.dumps({k: round(v, 4) if isinstance(v, float) else v
                          for k, v in summary[name].items()}))

json.dump({"gpus": gpus, "summary": summary, "results": results, "seconds": time.time() - T0},
          open("/kaggle/working/hpsv3_validation.json", "w"), indent=1)
log("done")
