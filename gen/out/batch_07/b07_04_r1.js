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
  brush.vertex(-120, 442);
  brush.vertex(720, 414);
  brush.vertex(720, 680);
  brush.vertex(-120, 680);
  brush.endShape(true);

  // lily pad, flat ellipse
  brush.fill("#8fb7a8", 180);
  brush.fillBleed(0.3, "out");
  brush.beginShape(0.9);
  brush.vertex(48, 498);
  brush.vertex(300, 456);
  brush.vertex(538, 495);
  brush.vertex(300, 554);
  brush.endShape(true);

  // stem
  brush.fill("#7ea598", 200);
  brush.fillBleed(0.1, "out");
  brush.beginShape(0.5);
  brush.vertex(292, 498);
  brush.vertex(286, 372);
  brush.vertex(303, 372);
  brush.vertex(308, 498);
  brush.endShape(true);

  // back petals: tall points, pale
  const back = [[-98, 120], [-42, 50], [42, 50], [98, 120]];
  for (const b of back) {
    brush.fill("#eeb6cf", 195);
    brush.fillBleed(0.4, "out");
    brush.fillTexture(0.5, 0.6);
    brush.beginShape(0.7);
    brush.vertex(300 + b[0] * 0.3, 379);
    brush.vertex(300 + b[0] * 1.2, 260);
    brush.vertex(300 + b[0], b[1]);
    brush.vertex(300 + b[0] * 0.6, 260);
    brush.endShape(true);
  }

  // front cupped petals
  brush.fill("#e595ba", 215);
  brush.fillBleed(0.35, "out");
  brush.beginShape(0.8);
  brush.vertex(300, 386);
  brush.vertex(181, 302);
  brush.vertex(160, 190);
  brush.vertex(251, 288);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(300, 386);
  brush.vertex(419, 302);
  brush.vertex(440, 190);
  brush.vertex(349, 288);
  brush.endShape(true);
  brush.fill("#eea9c8", 220);
  brush.beginShape(0.8);
  brush.vertex(300, 389);
  brush.vertex(241, 260);
  brush.vertex(300, 127);
  brush.vertex(359, 260);
  brush.endShape(true);

  // soft rose flush up the centre of each front petal
  brush.fill("#d9689a", 190);
  brush.fillBleed(0.3, "in");
  brush.beginShape(0.8);
  brush.vertex(300, 360);
  brush.vertex(284, 250);
  brush.vertex(300, 170);
  brush.vertex(316, 250);
  brush.endShape(true);

  // pink tips deepened
  brush.fill("#d4769f", 200);
  brush.fillBleed(0.2, "in");
  brush.circle(163, 201, 14, true);
  brush.circle(437, 201, 14, true);
  brush.circle(300, 137, 14, true);

  // reflection hint
  brush.fill("#d9b3c8", 120);
  brush.fillBleed(0.6, "out");
  brush.circle(300, 596, 56, true);
}
