async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8ecef");

  // cool grey-blue ground, left paper bare at top
  brush.noStroke();
  brush.fill("#a9b8c6", 175);
  brush.fillBleed(0.45, "out");
  brush.fillTexture(0.6, 0.3);
  brush.beginShape(0.5);
  brush.vertex(0, 380);
  brush.vertex(600, 330);
  brush.vertex(600, 600);
  brush.vertex(0, 600);
  brush.endShape(true);

  // stem with thorns, slight lean
  brush.fill("#355f50", 235);
  brush.fillBleed(0.04, "out");
  brush.fillTexture(0.3, 0.6);
  brush.beginShape(0.4);
  brush.vertex(292, 385);
  brush.vertex(306, 385);
  brush.vertex(322, 600);
  brush.vertex(308, 600);
  brush.endShape(true);
  for (let t of [[300, 450, 1], [306, 520, -1]]) {
    brush.fill("#5a3a3a", 220);
    brush.fillBleed(0.02, "out");
    brush.beginShape(0.1);
    brush.vertex(t[0], t[1]);
    brush.vertex(t[0] + t[2] * 14, t[1] - 8);
    brush.vertex(t[0], t[1] + 8);
    brush.endShape(true);
  }

  // serrated leaf
  brush.fill("#3e6f5f", 215);
  brush.fillBleed(0.15, "out");
  brush.fillTexture(0.5, 0.6);
  brush.beginShape(0.5);
  brush.vertex(304, 490);
  brush.vertex(350, 455);
  brush.vertex(372, 462);
  brush.vertex(400, 445);
  brush.vertex(420, 452);
  brush.vertex(450, 440);
  brush.vertex(425, 480);
  brush.vertex(380, 498);
  brush.vertex(340, 500);
  brush.endShape(true);

  // sepals peeled down under the head
  for (let a of [-60, -25, 20, 55]) {
    brush.fill("#3a6656", 225);
    brush.fillBleed(0.08, "out");
    brush.beginShape(0.7);
    brush.vertex(292, 372);
    brush.vertex(300 + a * 0.8, 395);
    brush.vertex(300 + a * 1.4, 420);
    brush.vertex(308, 376);
    brush.endShape(true);
  }

  // outer back petals: broad dark crimson wash, bleeding
  brush.fill("#8e1427", 190);
  brush.fillBleed(0.3, "out");
  brush.fillTexture(0.6, 0.6);
  brush.beginShape(0.8);
  brush.vertex(200, 200);
  brush.vertex(250, 160);
  brush.vertex(300, 175);
  brush.vertex(355, 158);
  brush.vertex(405, 205);
  brush.vertex(390, 300);
  brush.vertex(300, 375);
  brush.vertex(210, 300);
  brush.endShape(true);

  // inner coiled petals visible at the top, darker
  brush.fill("#5e0717", 225);
  brush.fillBleed(0.1, "out");
  brush.fillTexture(0.5, 0.7);
  brush.beginShape(0.8);
  brush.vertex(245, 190);
  brush.vertex(290, 168);
  brush.vertex(345, 180);
  brush.vertex(330, 215);
  brush.vertex(270, 215);
  brush.endShape(true);
  brush.fill("#a01a30", 200);
  brush.fillBleed(0.08, "out");
  brush.beginShape(0.8);
  brush.vertex(275, 185);
  brush.vertex(315, 176);
  brush.vertex(320, 198);
  brush.vertex(285, 204);
  brush.endShape(true);

  // left wrapping petal
  brush.fill("#a8182f", 210);
  brush.fillBleed(0.15, "out");
  brush.beginShape(0.8);
  brush.vertex(205, 215);
  brush.vertex(265, 200);
  brush.vertex(290, 250);
  brush.vertex(285, 330);
  brush.vertex(300, 370);
  brush.vertex(230, 315);
  brush.endShape(true);
  // right wrapping petal overlapping
  brush.fill("#b62238", 205);
  brush.fillBleed(0.15, "out");
  brush.beginShape(0.8);
  brush.vertex(395, 215);
  brush.vertex(330, 205);
  brush.vertex(300, 250);
  brush.vertex(305, 330);
  brush.vertex(300, 370);
  brush.vertex(372, 315);
  brush.endShape(true);
  // front petal with rolled lip
  brush.fill("#c42c42", 200);
  brush.fillBleed(0.15, "out");
  brush.beginShape(0.8);
  brush.vertex(235, 260);
  brush.vertex(300, 240);
  brush.vertex(365, 260);
  brush.vertex(345, 330);
  brush.vertex(300, 368);
  brush.vertex(255, 330);
  brush.endShape(true);
  // cool pale light along the rolled lips
  for (let lip of [[235, 262, 300, 244, 365, 262], [210, 218, 255, 204, 275, 212], [330, 210, 370, 206, 392, 218]]) {
    brush.fill("#e2a7b5", 190);
    brush.fillBleed(0.08, "out");
    brush.beginShape(0.8);
    brush.vertex(lip[0], lip[1]);
    brush.vertex(lip[2], lip[3]);
    brush.vertex(lip[4], lip[5]);
    brush.vertex(lip[2], lip[3] + 10);
    brush.endShape(true);
  }
  // blue-violet shadow pooling at the base
  brush.fill("#3e2340", 180);
  brush.fillBleed(0.2, "out");
  brush.beginShape(0.8);
  brush.vertex(245, 318);
  brush.vertex(300, 368);
  brush.vertex(355, 318);
  brush.vertex(300, 345);
  brush.endShape(true);
}
