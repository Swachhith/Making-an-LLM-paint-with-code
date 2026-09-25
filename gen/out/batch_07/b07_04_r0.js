async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2f5f7");
  brush.noStroke();

  // water band
  brush.fill("#b9d0dc", 150);
  brush.fillBleed(0.6, "out");
  brush.fillTexture(0.6, 0.3);
  brush.beginShape(0.3);
  brush.vertex(0, 430);
  brush.vertex(600, 410);
  brush.vertex(600, 600);
  brush.vertex(0, 600);
  brush.endShape(true);

  // lily pad, flat ellipse
  brush.fill("#8fb7a8", 180);
  brush.fillBleed(0.3, "out");
  brush.beginShape(0.9);
  brush.vertex(120, 470);
  brush.vertex(300, 440);
  brush.vertex(470, 468);
  brush.vertex(300, 510);
  brush.endShape(true);

  // stem
  brush.fill("#7ea598", 200);
  brush.fillBleed(0.1, "out");
  brush.beginShape(0.5);
  brush.vertex(294, 470);
  brush.vertex(290, 380);
  brush.vertex(302, 380);
  brush.vertex(306, 470);
  brush.endShape(true);

  // back petals: tall points, pale
  const back = [[-70, 200], [-30, 150], [30, 150], [70, 200]];
  for (const b of back) {
    brush.fill("#efc3d6", 170);
    brush.fillBleed(0.4, "out");
    brush.fillTexture(0.5, 0.6);
    brush.beginShape(0.7);
    brush.vertex(300 + b[0] * 0.3, 385);
    brush.vertex(300 + b[0] * 1.2, 300);
    brush.vertex(300 + b[0], b[1]);
    brush.vertex(300 + b[0] * 0.6, 300);
    brush.endShape(true);
  }

  // front cupped petals
  brush.fill("#e7a3c1", 200);
  brush.fillBleed(0.35, "out");
  brush.beginShape(0.8);
  brush.vertex(300, 390);
  brush.vertex(215, 330);
  brush.vertex(200, 250);
  brush.vertex(265, 320);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(300, 390);
  brush.vertex(385, 330);
  brush.vertex(400, 250);
  brush.vertex(335, 320);
  brush.endShape(true);
  brush.fill("#f0b8d0", 210);
  brush.beginShape(0.8);
  brush.vertex(300, 392);
  brush.vertex(258, 300);
  brush.vertex(300, 205);
  brush.vertex(342, 300);
  brush.endShape(true);

  // pink tips deepened
  brush.fill("#d4769f", 200);
  brush.fillBleed(0.2, "in");
  brush.circle(202, 258, 10, true);
  brush.circle(398, 258, 10, true);
  brush.circle(300, 212, 10, true);

  // reflection hint
  brush.fill("#d9b3c8", 120);
  brush.fillBleed(0.6, "out");
  brush.circle(300, 540, 40, true);
}
