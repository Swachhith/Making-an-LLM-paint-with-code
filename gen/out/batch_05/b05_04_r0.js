async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e6ddcc");
  brush.noStroke();
  // sage and umber ground so the white bloom stands against it
  brush.fill("#a8a785", 165);
  brush.fillBleed(0.5);
  brush.fillTexture(0.6, 0.3);
  brush.beginShape(0.9);
  brush.vertex(30, 40); brush.vertex(570, 60); brush.vertex(560, 560); brush.vertex(40, 570);
  brush.endShape(true);
  brush.fill("#8f7c5d", 140);
  brush.fillBleed(0.4);
  brush.beginShape(0.9);
  brush.vertex(330, 330); brush.vertex(570, 360); brush.vertex(560, 570); brush.vertex(200, 570);
  brush.endShape(true);
  // stem from lower right
  brush.fill("#5c5a38", 210);
  brush.fillBleed(0.08);
  brush.beginShape(0.5);
  brush.vertex(300, 320); brush.vertex(312, 322); brush.vertex(470, 585); brush.vertex(455, 588);
  brush.endShape(true);
  // two serrated-ish leaves
  brush.fill("#6d7045", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(390, 450); brush.vertex(455, 405); brush.vertex(525, 395); brush.vertex(560, 420);
  brush.vertex(520, 455); brush.vertex(450, 470);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(410, 500); brush.vertex(350, 520); brush.vertex(275, 555); brush.vertex(245, 590);
  brush.vertex(320, 575); brush.vertex(395, 535);
  brush.endShape(true);
  // five white petals: paper-white fill, then grey-ochre shadows toward the centre
  let cx = 270, cy = 270;
  for (let i = 0; i < 5; i++) {
    let a = -90 + i * 72 + 10;
    brush.fill("#fbf7ee", 235);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.4);
    brush.beginShape(0.85);
    brush.vertex(cx, cy);
    brush.vertex(cx + 150 * cos(a - 32), cy + 150 * sin(a - 32));
    brush.vertex(cx + 200 * cos(a - 12), cy + 200 * sin(a - 12));
    brush.vertex(cx + 190 * cos(a + 14), cy + 190 * sin(a + 14));
    brush.vertex(cx + 140 * cos(a + 36), cy + 140 * sin(a + 36));
    brush.endShape(true);
    brush.fill("#c9bda3", 150);
    brush.fillBleed(0.25);
    brush.beginShape(0.85);
    brush.vertex(cx, cy);
    brush.vertex(cx + 90 * cos(a + 10), cy + 90 * sin(a + 10));
    brush.vertex(cx + 150 * cos(a + 28), cy + 150 * sin(a + 28));
    brush.vertex(cx + 70 * cos(a + 38), cy + 70 * sin(a + 38));
    brush.endShape(true);
  }
  // the red eye bleeding outward in rays
  brush.fill("#9b2c2c", 200);
  brush.fillBleed(0.35);
  brush.fillTexture(0.5, 0.6);
  brush.circle(cx, cy, 48, true);
  brush.fill("#6d1a20", 215);
  brush.fillBleed(0.15);
  brush.circle(cx, cy, 24, true);
  // staminal column reaching up-left
  brush.fill("#c9a86a", 220);
  brush.fillBleed(0.05);
  brush.beginShape(0.4);
  brush.vertex(cx - 3, cy); brush.vertex(cx + 5, cy + 2); brush.vertex(cx - 80, cy - 105); brush.vertex(cx - 88, cy - 100);
  brush.endShape(true);
  brush.fill("#b0462f", 220);
  brush.circle(cx - 86, cy - 104, 8, true);
  brush.fill("#d9b25a", 220);
  brush.circle(cx - 62, cy - 74, 5, true);
  brush.circle(cx - 45, cy - 55, 5, true);
}
