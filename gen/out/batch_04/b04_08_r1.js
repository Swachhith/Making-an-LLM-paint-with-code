async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf1e0");
  brush.noStroke();

  // a peach blush low behind the stem
  brush.fill("#f2c9a0", 140);
  brush.fillBleed(0.5);
  brush.fillTexture(0.6, 0.6);
  brush.circle(360, 470, 170, 0.6);

  // long curving stem to lower right
  brush.fill("#4b6b2e", 220);
  brush.fillBleed(0.08);
  brush.fillTexture(0.3, 0.2);
  brush.beginShape(0.9);
  brush.vertex(290, 330); brush.vertex(300, 330); brush.vertex(340, 460); brush.vertex(430, 595); brush.vertex(418, 598); brush.vertex(328, 465);
  brush.endShape(true);
  // anemone leaves are cut and ferny: a whorl of lobed shapes
  const lx = 340, ly = 440;
  for (const d of [-1, 1]) {
    brush.fill("#557a2c", 220);
    brush.fillBleed(0.2);
    brush.beginShape(0.4);
    brush.vertex(lx, ly);
    brush.vertex(lx + d * 40, ly - 30); brush.vertex(lx + d * 55, ly - 15);
    brush.vertex(lx + d * 80, ly - 40); brush.vertex(lx + d * 95, ly - 20);
    brush.vertex(lx + d * 120, ly - 30); brush.vertex(lx + d * 105, ly + 5);
    brush.vertex(lx + d * 60, ly + 10);
    brush.endShape(true);
  }

  // anemone: six rounded petals, cobalt with violet pooling
  const cx = 290, cy = 250;
  for (let i = 0; i < 6; i++) {
    const a = i * 60 + 15;
    const px = cx + cos(a) * 72, py = cy + sin(a) * 66;
    brush.fill(i % 2 ? "#3d5fcc" : "#5a4fc0", 205);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.6);
    brush.beginShape(1);
    brush.vertex(cx + cos(a - 22) * 30, cy + sin(a - 22) * 30);
    brush.vertex(cx + cos(a - 26) * 110, cy + sin(a - 26) * 105);
    brush.vertex(px + cos(a) * 60, py + sin(a) * 60);
    brush.vertex(cx + cos(a + 26) * 110, cy + sin(a + 26) * 105);
    brush.vertex(cx + cos(a + 22) * 30, cy + sin(a + 22) * 30);
    brush.endShape(true);
  }
  for (let i = 0; i < 6; i++) {
    const a = i * 60 + 15;
    brush.fill("#22308c", 205);
    brush.fillBleed(0.2);
    brush.circle(cx + cos(a) * 45, cy + sin(a) * 42, 34, 0.4);
  }
  // white ring around the eye, left as near-paper
  brush.fill("#f4f1f8", 225);
  brush.fillBleed(0.1);
  brush.circle(cx, cy, 36, 0.3);
  // black-violet boss with a stamen halo
  brush.fill("#1a1030", 235);
  brush.fillBleed(0.1);
  brush.circle(cx, cy, 20, 0.4);
  for (let i = 0; i < 14; i++) {
    const a = i * 360 / 14;
    brush.fill("#261a3e", 215);
    brush.circle(cx + cos(a) * 29, cy + sin(a) * 29, 3.5, 0.3);
  }
}
