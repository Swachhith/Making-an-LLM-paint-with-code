"""Write generation batches 28-43, steered by the ratings so far.

    python gen/make_batches.py

Two findings from the 965 ratings drive the mix:

  * palette matters more than subject. Dark and high-contrast palettes were
    loved 33-44% of the time but used for only ~100 paintings; muted, cool
    light, warm light, splashy and misty palettes were loved 1-6% of the time
    across ~560. So ~60% of items get a palette from the loved family (half of
    those new variants in the same spirit, to avoid one look), ~25% "saturated
    and bold" (20% love, the workhorse), and ~15% the low palettes -- kept so
    the taste model still sees them, not because they pay off;
  * people, trees and landscapes are the weakest categories for both the rater
    (0-2% love) and the fine-tuned model, so they get the most items. Pairing
    them with loved palettes also answers whether the low love rate is the
    subject or the soft way they were painted.

Every subject is new (none appears in batches 01-27), so the RL prompt set
gains coverage instead of repeats. Each item records the intended generator
model, copied into manifest.json by render_batch.py.
"""
import collections
import glob
import json
import os
import random

HERE = os.path.dirname(os.path.abspath(__file__))
FIRST, LAST, PER_BATCH = 28, 43, 12
GENERATOR = "claude-sonnet-5-5"
SEED = 20261005

COUNTS = {"people": 34, "trees": 32, "landscapes": 32, "houses": 22, "mountains": 22,
          "flowers": 18, "sunsets": 16, "night": 16}          # 192 = 16 batches x 12

SUBJECTS = {
    "people": [
        "a street musician playing a violin", "a woman in a red coat crossing a bridge",
        "an old man feeding pigeons", "a girl on a swing", "a surfer carrying a board at dusk",
        "a farmer with a scythe in a field", "a couple dancing under a streetlight",
        "a boy fishing from a pier", "a woman painting at an easel outdoors",
        "a monk in orange robes walking", "a skater on a frozen lake", "a mother carrying a child",
        "a figure in a doorway lit from behind", "a runner on a beach at sunrise",
        "a gondolier on a canal", "a grandmother knitting by a window",
        "a woman with a lantern on a dark path", "a man rowing across a lake",
        "two children chasing bubbles", "a flamenco dancer in a red dress",
        "a shepherd with sheep on a hillside", "a person stargazing on a hill",
        "a market seller under an awning", "a ballerina on a dark stage",
        "a cellist playing alone", "a jazz trumpeter in a smoky club",
        "a woman reading on a train", "a lone traveller with a suitcase at a station",
        "a gardener kneeling among flowers", "a tea picker on a green hillside",
        "a horse rider on a beach", "a kite seller with colourful kites",
        "a woman in a kimono with a paper umbrella", "a fisherman casting a net at dawn",
    ],
    "trees": [
        "a lone acacia on the savanna", "a giant redwood trunk", "a gnarled olive tree",
        "a jacaranda in purple bloom", "a banyan tree with hanging roots",
        "a row of poplars along a road", "a snow-laden fir tree", "a red maple by a stream",
        "a bonsai pine on a rock", "a dead tree on a moor", "a mangrove at the water's edge",
        "an avenue of plane trees", "a lemon tree in a terracotta pot", "a yellow ginkgo in autumn",
        "a rowan tree with red berries", "a fallen log in a forest", "a dense jungle canopy",
        "a solitary pine on a cliff edge", "a magnolia tree in early spring",
        "an orchard of flowering almond trees", "a lightning-struck oak",
        "a forest of aspens in gold", "a coconut grove at dusk", "a wind-bent cypress by the sea",
        "an elm silhouetted at twilight", "a copper beech in summer", "a twisted juniper on a mountain",
        "a fig tree in a courtyard", "a sycamore with peeling bark", "a eucalyptus grove",
        "a holly tree in winter", "a bamboo grove",
    ],
    "landscapes": [
        "a glacier meeting the sea", "a canyon with red rock walls", "a salt flat with a mirror sky",
        "a frozen lake with snowy banks", "a sunflower field under a storm",
        "a vineyard on rolling hills", "a waterfall in a green gorge", "a marsh with tall grass",
        "an iceberg floating in dark water", "a moorland with heather",
        "a tea plantation on steep hills", "a black sand beach", "a tulip field in stripes",
        "a fjord between steep cliffs", "a prairie with a lone windpump",
        "a hot spring steaming in snow", "a cornfield at harvest", "an oasis in the desert",
        "a coastal cliff path", "a bamboo forest path", "a river delta from above",
        "a cave mouth opening onto the sea", "a bog with a wooden walkway",
        "a field of bluebells in a wood", "a sandy cove with turquoise water",
        "a stone wall winding over hills", "a geyser erupting", "a lagoon with a sandbar",
        "a steppe with wild horses", "a terraced vineyard by a river", "a mossy boulder field",
        "a frozen waterfall",
    ],
    "houses": [
        "a stilt house over water", "a Japanese temple among trees", "a farmhouse in a snowstorm",
        "a castle on a rocky island", "a lighthouse keeper's cottage", "a blue-domed church by the sea",
        "a log cabin by a lake", "a desert adobe house", "a tower house in fog",
        "a greenhouse full of plants", "a ruined abbey", "a bridge with houses on it",
        "a mountain monastery", "a narrow alley of old houses", "a bell tower at dusk",
        "a beach hut in a row", "a treehouse in an oak", "a corner café with an awning",
        "a farmhouse with a glowing porch", "a pagoda reflected in a pond",
        "a stone cottage with smoke from the chimney", "a water mill by a stream",
    ],
    "mountains": [
        "a single conical peak at dawn", "a mountain pass with a winding road",
        "a mountain covered in autumn forest", "a mountain silhouette against a red sky",
        "a cloud-wrapped summit", "a mountain range under a full moon", "a glacier in a valley",
        "a cliff face with a waterfall", "rocky pinnacles in mist", "a snowy ridge with climbers",
        "a mountain hut in deep snow", "a mountain reflected in a still tarn",
        "a sunrise lighting one peak", "a steep green karst peak", "a storm over the mountains",
        "a high plateau with scattered rocks", "a cable car over a valley",
        "a mountain lake of turquoise", "a dark volcano with glowing lava",
        "a mountain village with terraces", "a desert mountain at sunset", "a ski slope at dusk",
    ],
    "flowers": [
        "a red amaryllis", "a black tulip", "a bird of paradise flower", "a purple foxglove",
        "a white gardenia", "a bunch of sweet peas", "a crimson protea", "a blue delphinium spike",
        "a yellow daffodil", "a lotus on dark water", "a scarlet geranium", "a deep purple lilac",
        "a passion flower", "an orange marigold", "a red hibiscus at night", "a white water lily",
        "a cluster of forget-me-nots", "a dark red dahlia",
    ],
    "sunsets": [
        "a sunset over a frozen lake", "a sunset over a harbour with boats",
        "a sunset through a forest", "a sunset over mountains with alpenglow",
        "a sunset over a wheat field", "a sunset behind a lighthouse", "a sunset over a desert road",
        "a sunset over a river with a bridge", "a red sun sinking into haze",
        "a sunset after rain with puddles", "a sunset over the savanna with an acacia",
        "a sunset over a snowy field", "a sunset over a marsh with birds",
        "a sunset seen through a window", "a sunset over an island", "a sunset over sand dunes",
    ],
    "night": [
        "a lantern-lit street at night", "the northern lights over a lake", "a moonlit forest path",
        "a city skyline at night with lit windows", "a campfire under the stars",
        "a lighthouse beam at night", "a full moon over a snowy field", "a harbour at night",
        "a meteor shower over a desert", "a lone streetlamp in the rain",
        "a night train crossing a bridge", "a moonrise over the sea",
        "a tent glowing under the milky way", "a night market with lanterns",
        "an owl on a branch under the moon", "a castle under a starry sky",
    ],
}

LOVED_PALETTES = [
    "near-black with a few warm lights", "high contrast with dark silhouettes",
    "high contrast with deep shadows", "limited palette: two warm colours plus one dark",
    "deep blue and violet", "cool teal and indigo",
]
LOVED_VARIANTS = [   # new, in the same spirit; untested
    "deep jewel tones on dark paper", "dark green and gold", "crimson and black with one cream highlight",
    "indigo with one bright accent colour", "deep teal with warm orange accents",
    "dark ground with a glowing sky",
]
WORKHORSE = ["saturated and bold"]
LOW_PALETTES = ["muted and earthy", "cool light", "warm light", "soft and pastel",
                "loose and splashy, with visible drips and blooms of colour"]


def palettes(n, rng):
    k_loved = round(n * 0.6); k_work = round(n * 0.25); k_low = n - k_loved - k_work
    out = ([rng.choice(LOVED_PALETTES if i % 2 == 0 else LOVED_VARIANTS) for i in range(k_loved)]
           + WORKHORSE * k_work + [rng.choice(LOW_PALETTES) for _ in range(k_low)])
    rng.shuffle(out)
    return out


def main():
    rng = random.Random(SEED)
    old = collections.defaultdict(list)
    seen = set()
    for f in sorted(glob.glob(os.path.join(HERE, "batches", "batch_*.json"))):
        if int(os.path.basename(f)[6:8]) >= FIRST:
            continue
        for it in json.load(open(f, encoding="utf-8")):
            old[it.get("category", "flowers")].append(it["composition"]); seen.add(it["subject"])
    assert sum(COUNTS.values()) == (LAST - FIRST + 1) * PER_BATCH

    items = []
    for cat, n in COUNTS.items():
        subs = SUBJECTS[cat]
        dup = [s for s in subs if s in seen]
        assert not dup, f"{cat}: subjects already used: {dup}"
        assert len(subs) >= n, f"{cat}: need {n} subjects, have {len(subs)}"
        comps = sorted(set(old[cat]))
        for subject, palette in zip(rng.sample(subs, n), palettes(n, rng)):
            items.append({"category": cat, "subject": subject, "composition": rng.choice(comps),
                          "palette": palette, "generator": GENERATOR})
    rng.shuffle(items)

    for b in range(FIRST, LAST + 1):
        chunk = items[(b - FIRST) * PER_BATCH:(b - FIRST + 1) * PER_BATCH]
        for j, it in enumerate(chunk, 1):
            it["id"] = f"b{b}_{j:02d}"
        path = os.path.join(HERE, "batches", f"batch_{b:02d}.json")
        if os.path.exists(path):
            raise SystemExit(f"refusing to overwrite {path}")
        json.dump(chunk, open(path, "w", encoding="utf-8"), indent=1)

    fam = collections.Counter("loved" if i["palette"] in LOVED_PALETTES else
                              "loved-variant" if i["palette"] in LOVED_VARIANTS else
                              "workhorse" if i["palette"] in WORKHORSE else "low" for i in items)
    print(f"wrote batch_{FIRST}..batch_{LAST}: {len(items)} items")
    print("categories:", dict(collections.Counter(i["category"] for i in items)))
    print("palette families:", dict(fam))


if __name__ == "__main__":
    main()
