async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef3f0");
  randomSeed(1807);
  brush.noStroke();

  // bold sky
  brush.fill("#2e8fd0", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.6);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 300); brush.vertex(0, 330);
  brush.endShape(true);
  // meadow at bottom
  brush.fill("#9bc42a", 210);
  brush.beginShape(0.6);
  brush.vertex(0, 520); brush.vertex(600, 500); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);

  // background pines, smaller
  let back = [60, 140, 520, 575];
  for (let x of back) {
    let top = random(170, 230);
    brush.fill("#1f6a5a", 190);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.2);
    brush.vertex(x, top); brush.vertex(x + 45, 530); brush.vertex(x - 45, 530);
    brush.endShape(true);
  }

  // big pine filling the canvas, stacked tiers
  let cx = 310;
  brush.fill("#5a2e14", 220);
  brush.beginShape(0.3);
  brush.vertex(296, 400); brush.vertex(324, 400); brush.vertex(330, 600); brush.vertex(290, 600);
  brush.endShape(true);
  let tiers = 7;
  for (let i = 0; i < tiers; i++) {
    let t = i / (tiers - 1);
    let top = 20 + t * 400;
    let bottom = top + 110;
    let w = 50 + t * 210;
    let cols = ["#0b5a3a", "#0f7a44"];
    for (let p = 0; p < 2; p++) {
      brush.fill(cols[p], p == 0 ? 210 : 190);
      brush.fillBleed(0.25);
      brush.fillTexture(0.45, 0.5);
      brush.beginShape(0.35);
      brush.vertex(cx + random(-5, 5), top);
      brush.vertex(cx + w * (p ? 0.7 : 1), bottom + random(-10, 10));
      brush.vertex(cx + w * 0.4, bottom - 18);
      brush.vertex(cx, bottom - 4);
      brush.vertex(cx - w * 0.4, bottom - 18);
      brush.vertex(cx - w * (p ? 0.7 : 1), bottom + random(-10, 10));
      brush.endShape(true);
    }
  }
  // sunlit edge on right
  for (let i = 0; i < 6; i++) {
    brush.fill("#6fbf2a", 170);
    brush.fillBleed(0.3);
    brush.circle(cx + 40 + i * 25, 120 + i * 60, 14, 0.5);
  }
}
