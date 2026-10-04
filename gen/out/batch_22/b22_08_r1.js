async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf6ea");
  randomSeed(88);
  brush.noStroke();
  const cx = 405, cy = 225;
  // a warm peach halo so the flower sits in light
  brush.fill("#f9d7b0", 160);
  brush.fillBleed(0.35);
  brush.fillTexture(0.5, 0.5);
  brush.circle(cx, cy, 190, 0.6);
  // stem and blade leaves
  brush.fill("#2f6e18", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(396, 250); brush.vertex(382, 430); brush.vertex(376, 620); brush.vertex(398, 620); brush.vertex(402, 430); brush.vertex(414, 250);
  brush.endShape(true);
  brush.fill("#3f8a22", 210);
  brush.beginShape(0.6);
  brush.vertex(386, 390); brush.vertex(310, 360); brush.vertex(275, 372); brush.vertex(335, 395);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(392, 490); brush.vertex(470, 445); brush.vertex(500, 452); brush.vertex(448, 492);
  brush.endShape(true);
  // a bud hanging from a side stalk
  brush.fill("#2f6e18", 215);
  brush.beginShape(0.6);
  brush.vertex(398, 330); brush.vertex(470, 300); brush.vertex(480, 314); brush.vertex(404, 348);
  brush.endShape(true);
  brush.fill("#e8600a", 225);
  brush.fillBleed(0.25);
  brush.beginShape(0.8);
  brush.vertex(466, 300); brush.vertex(500, 305); brush.vertex(505, 360); brush.vertex(485, 368); brush.vertex(470, 330);
  brush.endShape(true);
  // six petals, swept back hard: each bends from base to a tip that curls behind
  for (let i = 0; i < 6; i++) {
    let a = i * 60 - 90 + 12;
    let bend = (i % 2 ? 1 : -1) * 18;
    const P = (r, da) => [cx + r * cos(a + da), cy + r * sin(a + da)];
    let pts = [P(0, 0), P(50, -24), P(110, -12 + bend * 0.3), P(150, bend * 0.6), P(135, bend + 14), P(95, 16 + bend * 0.3), P(45, 22)];
    brush.fill("#ff6a00", 230);
    brush.fillBleed(0.3);
    brush.fillTexture(0.45, 0.5);
    brush.beginShape(0.7);
    for (const q of pts) brush.vertex(q[0], q[1]);
    brush.endShape(true);
    brush.fill("#e84400", 225);
    brush.fillBleed(0.22);
    brush.beginShape(0.7);
    for (const q of [P(0, 0), P(45, -12), P(120, bend * 0.4), P(45, 12)]) brush.vertex(q[0], q[1]);
    brush.endShape(true);
    // the curled-back tip, darker
    brush.fill("#c23000", 220);
    brush.fillBleed(0.2);
    brush.beginShape(0.7);
    for (const q of [P(125, bend * 0.4 - 6), P(150, bend * 0.6), P(135, bend + 14), P(118, bend * 0.4 + 8)]) brush.vertex(q[0], q[1]);
    brush.endShape(true);
    for (let k = 0; k < 9; k++) {
      let q = P(random(18, 90), random(-10, 10));
      brush.fill("#3a0e04", 240);
      brush.fillBleed(0.05);
      brush.circle(q[0], q[1], random(2, 4.5), 0.3);
    }
  }
  brush.fill("#ffb028", 220);
  brush.fillBleed(0.25);
  brush.circle(cx, cy, 22, 0.4);
  // six long stamens hanging down, wide enough to paint
  for (let k = 0; k < 6; k++) {
    let a = 60 + k * 12;
    let d = 115 + (k % 2) * 15;
    brush.fill("#8a9a3a", 200);
    brush.fillBleed(0.12);
    brush.beginShape(0.4);
    brush.vertex(cx - 5, cy); brush.vertex(cx + d * cos(a) - 4, cy + d * sin(a)); brush.vertex(cx + d * cos(a) + 4, cy + d * sin(a)); brush.vertex(cx + 5, cy);
    brush.endShape(true);
    brush.fill("#5a1c08", 245);
    brush.fillBleed(0.05);
    brush.circle(cx + d * cos(a), cy + d * sin(a) + 3, 8, 0.3);
  }
}
