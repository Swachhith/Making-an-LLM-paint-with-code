async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function drawClematis(cx, cy, size, tilt, squash) {
  for (let k = 0; k < 6; k++) {
    let a = k * 60 + tilt;
    let pt = (r, d) => [cx + cos(a + d) * r * size, cy + sin(a + d) * r * size * squash];
    let v;
    brush.fill("#5a1fa8", 215);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.6);
    brush.beginShape(0.55);
    v = pt(12, -20); brush.vertex(v[0], v[1]);
    v = pt(70, -17); brush.vertex(v[0], v[1]);
    v = pt(120, 0); brush.vertex(v[0], v[1]);
    v = pt(70, 17); brush.vertex(v[0], v[1]);
    v = pt(12, 20); brush.vertex(v[0], v[1]);
    brush.endShape(true);
    brush.fill("#8a3de0", 200);
    brush.fillBleed(0.15);
    brush.beginShape(0.6);
    v = pt(20, -4); brush.vertex(v[0], v[1]);
    v = pt(75, -6); brush.vertex(v[0], v[1]);
    v = pt(108, 0); brush.vertex(v[0], v[1]);
    v = pt(75, 6); brush.vertex(v[0], v[1]);
    v = pt(20, 4); brush.vertex(v[0], v[1]);
    brush.endShape(true);
  }
  brush.fill("#f2e25a", 230);
  brush.fillBleed(0.15);
  brush.fillTexture(0.4, 0.3);
  brush.circle(cx, cy, 20 * size, true);
  brush.fill("#ffffff", 180);
  brush.circle(cx - 3, cy - 3, 7 * size, true);
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4f1ea");
  brush.noStroke();

  brush.fill("#1f8a5a", 160);
  brush.fillBleed(0.4);
  brush.fillTexture(0.6, 0.5);
  brush.beginShape(0.7);
  brush.vertex(0, 380);
  brush.vertex(200, 330);
  brush.vertex(420, 420);
  brush.vertex(600, 360);
  brush.vertex(600, 600);
  brush.vertex(0, 600);
  brush.endShape(true);

  let leafs = [[120, 470, -30], [480, 470, 200], [300, 520, 250]];
  for (let L of leafs) {
    brush.fill("#0f6a3a", 210);
    brush.fillBleed(0.2);
    brush.beginShape(0.6);
    brush.vertex(L[0], L[1]);
    brush.vertex(L[0] + cos(L[2] - 20) * 80, L[1] + sin(L[2] - 20) * 80);
    brush.vertex(L[0] + cos(L[2]) * 140, L[1] + sin(L[2]) * 140);
    brush.vertex(L[0] + cos(L[2] + 20) * 80, L[1] + sin(L[2] + 20) * 80);
    brush.endShape(true);
  }

  drawClematis(200, 230, 1.35, 8, 1.0);
  drawClematis(430, 380, 1.1, 25, 0.55);
}
