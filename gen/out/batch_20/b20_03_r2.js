async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f0ebe4");
  brush.noStroke();

  // bold ground: saturated green-teal wash lower, magenta haze upper right
  brush.fill("#6aa84a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(-20, 420); brush.vertex(220, 360); brush.vertex(460, 430); brush.vertex(620, 390); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#c26aa8", 140);
  brush.circle(470, 170, 190, 0.9);

  // long arcing stem, lower-left up and over to the right, drooping flower
  for (let p = 0; p < 2; p++) {
    brush.fill("#1e6a36", 235);
    brush.fillBleed(0.18);
    brush.fillTexture(0.35, 0.4);
    brush.beginShape(0.8);
    brush.vertex(20, 610); brush.vertex(80, 400); brush.vertex(200, 240); brush.vertex(340, 170); brush.vertex(420, 200); brush.vertex(440, 250);
    brush.vertex(420, 256); brush.vertex(405, 222); brush.vertex(340, 196); brush.vertex(215, 262); brush.vertex(104, 410); brush.vertex(50, 615);
    brush.endShape(true);
  }
  // leathery leaflets, palmate, low curvature to keep points
  brush.fill("#0f4a28", 225);
  brush.fillBleed(0.22);
  brush.fillTexture(0.4, 0.4);
  const leaves = [[92, 380, 170], [92, 380, 200], [92, 380, 230], [92, 380, 140], [180, 265, 290], [180, 265, 320]];
  for (const l of leaves) {
    brush.beginShape(0.35);
    brush.vertex(l[0], l[1]);
    brush.vertex(l[0] + cos(l[2] - 9) * 60, l[1] + sin(l[2] - 9) * 60);
    brush.vertex(l[0] + cos(l[2]) * 115, l[1] + sin(l[2]) * 115);
    brush.vertex(l[0] + cos(l[2] + 9) * 60, l[1] + sin(l[2] + 9) * 60);
    brush.endShape(true);
  }

  // nodding hellebore hanging from the arc, face turned down-left
  const cx = 420, cy = 340;
  const angs = [0, 70, 140, 215, 290];
  for (let pass = 0; pass < 3; pass++) {
    const r = [135, 115, 80][pass];
    const col = ["#6a0f4a", "#4e0838", "#3a0428"][pass];
    for (const a0 of angs) {
      const a = a0 + 15;
      brush.fill(col, [205, 215, 220][pass]);
      brush.fillBleed(0.24);
      brush.fillTexture(0.5, 0.45);
      brush.beginShape(0.45);
      brush.vertex(cx + cos(a) * 12, cy + sin(a) * 12);
      brush.vertex(cx + cos(a - 26) * r * 0.55, cy + sin(a - 26) * r * 0.55);
      brush.vertex(cx + cos(a - 18) * r * 0.9, cy + sin(a - 18) * r * 0.9);
      brush.vertex(cx + cos(a) * r, cy + sin(a) * r);
      brush.vertex(cx + cos(a + 18) * r * 0.9, cy + sin(a + 18) * r * 0.9);
      brush.vertex(cx + cos(a + 26) * r * 0.55, cy + sin(a + 26) * r * 0.55);
      brush.endShape(true);
    }
  }
  brush.fill("#1e0214", 235);
  brush.fillBleed(0.2);
  brush.circle(cx, cy, 30, 0.5);
  brush.fill("#d8e03a", 250);
  brush.fillBleed(0.15);
  brush.circle(cx, cy, 16, 0.6);
  brush.fill("#f2c21a", 245);
  for (let k = 0; k < 10; k++) brush.circle(cx + cos(k * 36) * 24, cy + sin(k * 36) * 24, 4, 0.4);

  // closed bud on a side shoot
  brush.fill("#1e6a36", 225);
  brush.beginShape(0.5);
  brush.vertex(250, 222); brush.vertex(240, 140); brush.vertex(258, 136); brush.vertex(272, 214);
  brush.endShape(true);
  for (let p = 0; p < 2; p++) {
    brush.fill("#5a0a40", 230);
    brush.fillBleed(0.22);
    brush.beginShape(0.5);
    brush.vertex(250, 140); brush.vertex(222, 110); brush.vertex(232, 70); brush.vertex(250, 55); brush.vertex(268, 70); brush.vertex(276, 110);
    brush.endShape(true);
  }
}
