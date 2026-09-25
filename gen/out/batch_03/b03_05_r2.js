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
    brush.fill("#4a14a0", 225);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.6);
    brush.beginShape(0.55);
    v = pt(14, -24); brush.vertex(v[0], v[1]);
    v = pt(75, -22); brush.vertex(v[0], v[1]);
    v = pt(125, 0); brush.vertex(v[0], v[1]);
    v = pt(75, 22); brush.vertex(v[0], v[1]);
    v = pt(14, 24); brush.vertex(v[0], v[1]);
    brush.endShape(true);
    brush.fill("#9b4df0", 205);
    brush.fillBleed(0.15);
    brush.beginShape(0.6);
    v = pt(22, -8); brush.vertex(v[0], v[1]);
    v = pt(78, -9); brush.vertex(v[0], v[1]);
    v = pt(112, 0); brush.vertex(v[0], v[1]);
    v = pt(78, 9); brush.vertex(v[0], v[1]);
    v = pt(22, 8); brush.vertex(v[0], v[1]);
    brush.endShape(true);
    brush.fill("#d23aa8", 190);
    brush.fillBleed(0.05);
    brush.beginShape(0.5);
    v = pt(24, -2); brush.vertex(v[0], v[1]);
    v = pt(100, 0); brush.vertex(v[0], v[1]);
    v = pt(24, 2); brush.vertex(v[0], v[1]);
    brush.endShape(true);
  }
  brush.fill("#f7e23a", 235);
  brush.fillBleed(0.15);
  brush.fillTexture(0.4, 0.3);
  brush.circle(cx, cy, 22 * size, true);
  brush.fill("#e0a020", 220);
  brush.circle(cx + 3, cy + 3, 9 * size, true);
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1eee8");
  brush.noStroke();
  brush.fill("#c7b0ec", 170);
  brush.fillBleed(0.5);
  brush.fillTexture(0.6, 0.5);
  brush.circle(420, 150, 170, true);
  brush.noStroke();

  // twining stems
  brush.fill("#0d5a36", 220);
  brush.fillBleed(0.1);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.8);
  brush.vertex(200, 240); brush.vertex(260, 420); brush.vertex(230, 600); brush.vertex(242, 600); brush.vertex(272, 420); brush.vertex(212, 240);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(440, 390); brush.vertex(330, 480); brush.vertex(262, 560); brush.vertex(272, 566); brush.vertex(340, 490); brush.vertex(448, 400);
  brush.endShape(true);

  let leafs = [[258, 440, 200, 150], [300, 510, -20, 150], [250, 330, -30, 110], [120, 560, 300, 110]];
  for (let L of leafs) {
    brush.fill("#138a4a", 210);
    brush.fillBleed(0.25);
    brush.fillTexture(0.55, 0.5);
    brush.beginShape(0.6);
    brush.vertex(L[0], L[1]);
    brush.vertex(L[0] + cos(L[2] - 22) * L[3] * 0.55, L[1] + sin(L[2] - 22) * L[3] * 0.55);
    brush.vertex(L[0] + cos(L[2]) * L[3], L[1] + sin(L[2]) * L[3]);
    brush.vertex(L[0] + cos(L[2] + 22) * L[3] * 0.55, L[1] + sin(L[2] + 22) * L[3] * 0.55);
    brush.endShape(true);
    brush.fill("#0a5a30", 200);
    brush.fillBleed(0.1);
    brush.beginShape(0.6);
    brush.vertex(L[0], L[1]);
    brush.vertex(L[0] + cos(L[2] + 4) * L[3] * 0.6, L[1] + sin(L[2] + 4) * L[3] * 0.6);
    brush.vertex(L[0] + cos(L[2]) * L[3] * 0.95, L[1] + sin(L[2]) * L[3] * 0.95);
    brush.vertex(L[0] + cos(L[2] + 15) * L[3] * 0.5, L[1] + sin(L[2] + 15) * L[3] * 0.5);
    brush.endShape(true);
  }

  drawClematis(210, 210, 1.4, 8, 1.0);
  drawClematis(440, 380, 1.15, 25, 0.5);
}
