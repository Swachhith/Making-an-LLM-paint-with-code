async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbfaf5");
  brush.noStroke();
  const cx = 210, cy = 380;
  // faint lilac shadow wash behind the bloom
  brush.fill("#d9c8ea", 160);
  brush.fillBleed(0.35);
  brush.fillTexture(0.5, 0.5);
  brush.circle(cx + 20, cy + 10, 200, 0.6);
  // vine: a wide soft stem sweeping in from the upper right
  brush.fill("#3f7a22", 215);
  brush.fillBleed(0.22);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(590, 20); brush.vertex(500, 110); brush.vertex(400, 220); brush.vertex(280, 330);
  brush.vertex(298, 348); brush.vertex(418, 240); brush.vertex(520, 128); brush.vertex(610, 40);
  brush.endShape(true);
  brush.fill("#5f9a33", 215);
  brush.beginShape(0.7);
  brush.vertex(440, 180); brush.vertex(500, 200); brush.vertex(550, 185); brush.vertex(500, 158);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(500, 110); brush.vertex(470, 60); brush.vertex(430, 45); brush.vertex(455, 95);
  brush.endShape(true);
  // a closed bud further along the vine
  brush.fill("#7a2fc0", 220);
  brush.fillBleed(0.25);
  brush.beginShape(0.7);
  brush.vertex(545, 70); brush.vertex(570, 40); brush.vertex(580, 80); brush.vertex(560, 100);
  brush.endShape(true);
  // six broad, overlapping sepals
  for (let i = 0; i < 6; i++) {
    let a = i * 60 + 10;
    let L = 165;
    const P = (r, da) => [cx + r * cos(a + da), cy + r * sin(a + da)];
    let pts = [P(0, 0), P(60, -40), P(120, -24), P(L, 0), P(120, 24), P(60, 40)];
    brush.fill("#8a2be2", 215);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.7);
    for (const q of pts) brush.vertex(q[0], q[1]);
    brush.endShape(true);
    brush.fill("#6a12c8", 225);
    brush.fillBleed(0.25);
    brush.beginShape(0.7);
    for (const q of [P(0, 0), P(55, -30), P(110, -16), P(L * 0.93, 0), P(110, 16), P(55, 30)]) brush.vertex(q[0], q[1]);
    brush.endShape(true);
    brush.fill("#4a0a9a", 210);
    brush.fillBleed(0.2);
    brush.beginShape(0.6);
    for (const q of [P(10, 0), P(60, -8), P(L * 0.85, 0), P(60, 8)]) brush.vertex(q[0], q[1]);
    brush.endShape(true);
  }
  // centre: green boss and a crown of pale stamens
  brush.fill("#b8d060", 235);
  brush.fillBleed(0.2);
  brush.circle(cx, cy, 34, 0.4);
  for (let k = 0; k < 16; k++) {
    let a = k * 22.5;
    brush.fill("#f4ecb0", 240);
    brush.fillBleed(0.1);
    brush.circle(cx + 30 * cos(a), cy + 30 * sin(a), 6, 0.3);
  }
  brush.fill("#6f8f28", 230);
  brush.circle(cx, cy, 13, 0.3);
}
