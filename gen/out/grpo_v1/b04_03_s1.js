async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fff8f2");
  brush.noStroke();
  // stem, two leaves: long and narrow, pale green
  brush.fill("#8bbd8a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(300, 470); brush.vertex(270, 620); brush.vertex(300, 620); brush.vertex(330, 470);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(300, 470); brush.vertex(330, 620); brush.vertex(300, 620); brush.vertex(270, 470);
  brush.endShape(true);
  // cup: six rounded petals, overlapping, pale pink
  const cx = 300, cy = 330;
  for (let k = 0; k < 6; k++) {
    const a = k * 60;
    const len = 150;
    brush.fill("#f7b8c8", 205);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.6);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 20) * len * 0.7, cy + sin(a - 20) * len * 0.7);
    brush.vertex(cx + cos(a - 10) * len, cy + sin(a - 10) * len);
    brush.vertex(cx + cos(a + 10) * len, cy + sin(a + 10) * len);
    brush.vertex(cx + cos(a + 20) * len * 0.7, cy + sin(a + 20) * len * 0.7);
    brush.endShape(true);
    // a second, more opaque pass on each petal
    brush.fill("#f29aa8", 220);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.6);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 5) * len * 0.5, cy + sin(a - 5) * len * 0.5);
    brush.vertex(cx + cos(a) * len * 0.85, cy + sin(a) * len * 0.85);
    brush.vertex(cx + cos(a + 5) * len * 0.5, cy + sin(a + 5) * len * 0.5);
    brush.endShape(true);
  }
  // darker heart at the centre
  brush.fill("#e88aa8", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(cx - 18, cy - 12); brush.vertex(cx - 6, cy - 16); brush.vertex(cx + 6, cy - 12); brush.vertex(cx + 18, cy - 16);
  brush.vertex(cx + 18, cy + 6); brush.vertex(cx + 10, cy + 14); brush.vertex(cx, cy + 16); brush.vertex(cx - 10, cy + 14); brush.vertex(cx - 18, cy + 6);
  brush.endShape(true);
  // stamen: six lines radiating from the heart
  for (let k = 0; k < 6; k++) {
    const a = k * 60;
    brush.fill("#f2c44a", 235);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.3);
    brush.vertex(cx, cy); brush.vertex(cx + cos(a) * 40, cy + sin(a) * 40); brush.vertex(cx + cos(a) * 70, cy + sin(a) * 70); brush.vertex(cx + cos(a) * 82, cy + sin(a) * 82);
    brush.endShape(true);
  }
  // a few dots of pollen
  brush.fill("#e8a82a", 230);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.3);
  brush.circle(cx - 12, cy - 10, 2.5, 0.3);
  brush.circle(cx + 12, cy + 8, 2.2, 0.3);
  brush.circle(cx + 18, cy - 16, 2, 0.3);
  brush.circle(cx - 18, cy + 14, 2.2, 0.3);
  brush.circle(cx - 6, cy + 18, 2, 0.3);
  // a shadow on the paper, bottom right of the cup
  brush.fill("#e8a8b8", 170);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(330, 330); brush.vertex(420, 350); brush.vertex(420, 400); brush.vertex(330, 380);
  brush.endShape(true);
}
