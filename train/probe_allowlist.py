"""Probe: which brush methods actually put pigment on the canvas?

Surya's post specifies an allowlist of eight methods but does not name them.
Paniego's reproduction lists ten. This checks, empirically, which of the ten
do any work under the watercolour constraints -- so the allowlist is chosen
from evidence rather than reconstructed by guessing.
"""
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from train.render import Renderer  # noqa: E402

QUAD = """
brush.beginShape(0.4);
brush.vertex(W*0.25, H*0.25); brush.vertex(W*0.75, H*0.27);
brush.vertex(W*0.72, H*0.75); brush.vertex(W*0.27, H*0.72);
brush.endShape(true);
"""

CASES = {
    # baseline: the minimal set that is known to work
    "baseline_fill_poly":
        'brush.noStroke(); brush.fill(340,55,88,160); brush.fillBleed(0.3,"out");'
        ' brush.fillTexture(0.6,0.4);' + QUAD,

    # does noFill kill the only pigment mechanism?
    "noFill_then_poly":
        'brush.noStroke(); brush.fill(340,55,88,160); brush.noFill();' + QUAD,

    # circle, every combination
    "circle_noStroke":
        'brush.noStroke(); brush.fill(340,55,88,160); brush.circle(W/2,H/2,150);',
    "circle_default_stroke":
        'brush.fill(340,55,88,160); brush.circle(W/2,H/2,150);',
    "circle_after_poly":
        'brush.noStroke(); brush.fill(340,55,88,160);' + QUAD +
        ' brush.circle(W*0.3,H*0.3,90);',

    # does scaleBrushes change anything measurable?
    "scaleBrushes_0p5":
        'brush.scaleBrushes(0.5); brush.noStroke(); brush.fill(340,55,88,160);'
        ' brush.fillBleed(0.3,"out"); brush.fillTexture(0.6,0.4);' + QUAD,
    "scaleBrushes_2p0":
        'brush.scaleBrushes(2.0); brush.noStroke(); brush.fill(340,55,88,160);'
        ' brush.fillBleed(0.3,"out"); brush.fillTexture(0.6,0.4);' + QUAD,

    # is fillBleed / fillTexture actually doing visible work?
    "no_bleed_no_texture":
        'brush.noStroke(); brush.fill(340,55,88,160);' + QUAD,
    "bleed_only":
        'brush.noStroke(); brush.fill(340,55,88,160); brush.fillBleed(0.6,"out");' + QUAD,
    "texture_only":
        'brush.noStroke(); brush.fill(340,55,88,160); brush.fillTexture(0.9,0.6);' + QUAD,

    # the proposed eight-method set, used together
    "proposed_eight":
        'brush.scaleBrushes(1.1); brush.noStroke();\n'
        'for (let i = 0; i < 3; i++) {\n'
        '  brush.fill(340 - i*20, 55, 88, 90 + i*40);\n'
        '  brush.fillBleed(0.35 - i*0.08, "out");\n'
        '  brush.fillTexture(0.55, 0.45);\n'
        '  brush.beginShape(0.5);\n'
        '  for (let t = 0; t < 6; t++) {\n'
        '    const a = t/6 * Math.PI*2, r = (220 - i*55);\n'
        '    brush.vertex(W/2 + Math.cos(a)*r, H/2 + Math.sin(a)*r);\n'
        '  }\n'
        '  brush.endShape(true);\n'
        '}',
}

OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "results", "allowlist")


def main():
    os.makedirs(OUT, exist_ok=True)
    rows = []
    with Renderer() as r:
        for name, src in CASES.items():
            res = r.render(src, seed=11, png_path=os.path.join(OUT, f"{name}.png"))
            m = res.get("metrics") or {}
            rows.append({
                "case": name,
                "ok": res.get("ok"),
                "err": (res.get("error") or "")[:60],
                "cov": round(m.get("coverage", 0), 4),
                "ink": round(m.get("inkMass", 0), 4),
                "sat": round(m.get("meanSaturation", 0), 3),
                "edge": round(m.get("edgeGradient", 0), 2),
                "ms": res.get("timingMs"),
            })
            print(f"  {name:24s} cov={rows[-1]['cov']:<8} ink={rows[-1]['ink']:<8} "
                  f"edge={rows[-1]['edge']:<7} ok={rows[-1]['ok']}")

    with open(os.path.join(OUT, "probe.json"), "w") as f:
        json.dump(rows, f, indent=2)
    print(f"\nwrote {OUT}/probe.json")


if __name__ == "__main__":
    main()
