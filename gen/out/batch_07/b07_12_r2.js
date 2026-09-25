async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f9f1e3");
  brush.noStroke();

  // soft peach glow in the top right corner only
  brush.fill("#efcfae", 160);
  brush.fillBleed(0.6, "out");
  brush.fillTexture(0.6, 0.3);
  brush.circle(520, 90, 170, true);

  // stems
  brush.fill("#6e7c3e", 210);
  brush.fillBleed(0.15, "out");
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.6);
  brush.vertex(240, 360);
  brush.vertex(253, 360);
  brush.vertex(282, 600);
  brush.vertex(268, 600);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(468, 250);
  brush.vertex(478, 252);
  brush.vertex(420, 420);
  brush.vertex(345, 600);
  brush.vertex(333, 600);
  brush.vertex(410, 415);
  brush.endShape(true);

  // five broad oval petals, warm grey outer pass
  const cx = 240, cy = 270;
  for (let i = 0; i < 5; i++) {
    const a = i * 72 - 60;
    const px = cx + cos(a) * 95, py = cy + sin(a) * 95;
    brush.fill("#e2d4c4", 200);
    brush.fillBleed(0.4, "out");
    brush.fillTexture(0.5, 0.9);
    brush.beginShape(1);
    for (let t = 0; t < 360; t += 45) {
      const rx = 105, ry = 78;
      const lx = cos(t) * rx, ly = sin(t) * ry;
      brush.vertex(px + lx * cos(a) - ly * sin(a), py + lx * sin(a) + ly * cos(a));
    }
    brush.endShape(true);
  }
  // lilac-grey shadow near the centre of each petal
  for (let i = 0; i < 5; i++) {
    const a = i * 72 - 60;
    brush.fill("#c9bcc4", 180);
    brush.fillBleed(0.3, "out");
    brush.circle(cx + cos(a) * 62, cy + sin(a) * 62, 34, true);
  }

  // dark centre with ring of stamens
  brush.fill("#2b2540", 230);
  brush.fillBleed(0.35, "out");
  brush.circle(cx, cy, 38, true);
  brush.fill("#1c1828", 235);
  brush.fillBleed(0.05, "in");
  for (let k = 0; k < 22; k++) {
    const r = 46 + (k % 3) * 6;
    brush.circle(cx + cos(k * 16.4) * r, cy + sin(k * 16.4) * r, 4, true);
  }
  brush.fill("#56627e", 200);
  brush.circle(cx - 6, cy - 8, 12, true);

  // green ruff of cut leaves on the stem below
  brush.fill("#8a9a50", 205);
  brush.fillBleed(0.25, "out");
  brush.beginShape(0.3);
  brush.vertex(200, 450);
  brush.vertex(225, 420);
  brush.vertex(248, 445);
  brush.vertex(275, 415);
  brush.vertex(300, 450);
  brush.vertex(260, 470);
  brush.endShape(true);

  // closed bud, blushed and nodding
  brush.fill("#dcc6ba", 210);
  brush.fillBleed(0.35, "out");
  brush.fillTexture(0.5, 0.6);
  brush.beginShape(0.9);
  brush.vertex(474, 255);
  brush.vertex(438, 200);
  brush.vertex(462, 128);
  brush.vertex(508, 190);
  brush.endShape(true);
  brush.fill("#c48e8e", 200);
  brush.fillBleed(0.2, "in");
  brush.beginShape(0.9);
  brush.vertex(476, 250);
  brush.vertex(470, 180);
  brush.vertex(466, 136);
  brush.vertex(498, 196);
  brush.endShape(true);
  brush.fill("#7c8a46", 215);
  brush.beginShape(0.5);
  brush.vertex(446, 240);
  brush.vertex(476, 262);
  brush.vertex(502, 236);
  brush.vertex(476, 250);
  brush.endShape(true);
}
