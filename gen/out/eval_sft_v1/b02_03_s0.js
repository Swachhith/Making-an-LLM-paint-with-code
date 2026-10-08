async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2f6f8");
  randomSeed(1101);
  brush.noStroke();

  // cool blue-grey ground
  brush.fill("#a9b8c4", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(0, 420); brush.vertex(600, 380); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);

  // stem, two passes
  brush.fill("#3a5a4a", 215);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.4);
  brush.vertex(300, 560); brush.vertex(312, 560); brush.vertex(318, 470); brush.vertex(306, 470);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(300, 560); brush.vertex(312, 560); brush.vertex(318, 320); brush.vertex(306, 320);
  brush.endShape(true);

  // rose: a side view, petals unfurling from a tight base
  let cx = 300, cy = 320;
  let rings = 5;
  for (let r = 0; r < rings; r++) {
    let n = 13 - r;
    let len = 110 - r * 14;
    let outer = 55 - r * 7;
    for (let i = 0; i < n; i++) {
      let a = i * 360 / n + r * 12;
      let w = 16 + r * 4;
      let tip = [cos(a + 90), sin(a + 90)];
      brush.fill("#c2203a", 225 - r * 12);
      brush.fillBleed(0.25);
      brush.fillTexture(0.45, 0.45);
      brush.beginShape(0.6);
      brush.vertex(cx + cos(a) * outer, cy + sin(a) * outer);
      brush.vertex(cx + cos(a) * len * 0.5 + tip[0] * w * 0.4, cy + sin(a) * len * 0.5 + tip[1] * w * 0.4);
      brush.vertex(cx + cos(a) * len, cy + sin(a) * len);
      brush.vertex(cx + cos(a) * len * 0.5 - tip[0] * w * 0.4, cy + sin(a) * len * 0.5 - tip[1] * w * 0.4);
      brush.endShape(true);
    }
  }
  // shadow side of the bloom
  brush.fill("#6a0a12", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(cx + 10, cy + 10, 55, 0.7);
  // cool light on the upper petals
  brush.fill("#b8c8e8", 170);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.circle(cx - 8, cy - 8, 42, 0.4);
}
