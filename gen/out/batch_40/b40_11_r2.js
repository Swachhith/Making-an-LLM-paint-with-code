async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#101216");
  brush.noStroke();
  // moonlit backdrop so the dark mill reads against it
  brush.fill("#5a80a8", 235); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 330); brush.vertex(-10, 330);
  brush.endShape(true);
  brush.fill("#7a98b8", 200);
  brush.beginShape(0.6);
  brush.vertex(-10, 30); brush.vertex(610, 10); brush.vertex(610, 220); brush.vertex(-10, 240);
  brush.endShape(true);
  // trees behind
  brush.fill("#1a2a3a", 235);
  brush.beginShape(0.5);
  brush.vertex(-10, 330); brush.vertex(-10, 190); brush.vertex(40, 120); brush.vertex(90, 190); brush.vertex(60, 330);
  brush.endShape(true);
  brush.fill("#1a2a3a", 225);
  brush.beginShape(0.5);
  brush.vertex(-10, 330); brush.vertex(-10, 190); brush.vertex(40, 120); brush.vertex(90, 190); brush.vertex(60, 330);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(380, 330); brush.vertex(410, 130); brush.vertex(480, 60); brush.vertex(560, 150); brush.vertex(610, 100); brush.vertex(610, 330);
  brush.endShape(true);
  brush.fill("#1a2a3a", 225);
  brush.beginShape(0.5);
  brush.vertex(380, 330); brush.vertex(410, 130); brush.vertex(480, 60); brush.vertex(560, 150); brush.vertex(610, 100); brush.vertex(610, 330);
  brush.endShape(true);
  // mill body, close up, two passes
  brush.fill("#8a5a40", 235); brush.fillBleed(0.2); brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.1);
  brush.vertex(60, 480); brush.vertex(60, 210); brush.vertex(200, 95); brush.vertex(345, 210); brush.vertex(345, 480);
  brush.endShape(true);
  brush.fill("#4a2e24", 225);
  brush.beginShape(0.1);
  brush.vertex(60, 480); brush.vertex(60, 210); brush.vertex(130, 160); brush.vertex(130, 480);
  brush.endShape(true);
  brush.fill("#4a2e24", 215);
  brush.beginShape(0.1);
  brush.vertex(60, 480); brush.vertex(60, 210); brush.vertex(130, 160); brush.vertex(130, 480);
  brush.endShape(true);
  brush.fill("#2a1814", 240);
  brush.beginShape(0.1);
  brush.vertex(40, 225); brush.vertex(200, 70); brush.vertex(365, 225); brush.vertex(340, 225); brush.vertex(200, 105); brush.vertex(65, 225);
  brush.endShape(true);
  brush.fill("#2a1814", 230);
  brush.beginShape(0.1);
  brush.vertex(40, 225); brush.vertex(200, 70); brush.vertex(365, 225); brush.vertex(340, 225); brush.vertex(200, 105); brush.vertex(65, 225);
  brush.endShape(true);
  brush.beginShape(0.1);
  brush.vertex(200, 70); brush.vertex(365, 225); brush.vertex(345, 245); brush.vertex(200, 100);
  brush.endShape(true);
  brush.fill("#2a1814", 230);
  brush.beginShape(0.1);
  brush.vertex(200, 70); brush.vertex(365, 225); brush.vertex(345, 245); brush.vertex(200, 100);
  brush.endShape(true);
  // water wheel
  brush.fill("#1a1210", 245); brush.fillBleed(0.2);
  brush.circle(405, 385, 108, 0.3);
  brush.circle(405, 385, 108, 0.3);
  brush.fill("#8a5a40", 210);
  brush.circle(405, 385, 72, 0.3);
  brush.fill("#1a1210", 245);
  brush.circle(405, 385, 24, 0.2);
  brush.circle(405, 385, 24, 0.2);
  brush.beginShape(0.1);
  brush.vertex(390, 292); brush.vertex(420, 292); brush.vertex(420, 480); brush.vertex(390, 480);
  brush.endShape(true);
  brush.fill("#1a1210", 235);
  brush.beginShape(0.1);
  brush.vertex(390, 292); brush.vertex(420, 292); brush.vertex(420, 480); brush.vertex(390, 480);
  brush.endShape(true);
  brush.beginShape(0.1);
  brush.vertex(310, 370); brush.vertex(500, 370); brush.vertex(500, 400); brush.vertex(310, 400);
  brush.endShape(true);
  brush.fill("#1a1210", 235);
  brush.beginShape(0.1);
  brush.vertex(310, 370); brush.vertex(500, 370); brush.vertex(500, 400); brush.vertex(310, 400);
  brush.endShape(true);
  // stream
  brush.fill("#2a5a8a", 235); brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(-10, 485); brush.vertex(610, 472); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#6a9ac0", 190);
  brush.beginShape(0.5);
  brush.vertex(300, 495); brush.vertex(530, 488); brush.vertex(565, 565); brush.vertex(240, 580);
  brush.endShape(true);
  brush.fill("#14283c", 215);
  brush.beginShape(0.5);
  brush.vertex(-10, 520); brush.vertex(240, 510); brush.vertex(250, 545); brush.vertex(-10, 570);
  brush.endShape(true);
  brush.fill("#14283c", 205);
  brush.beginShape(0.5);
  brush.vertex(-10, 520); brush.vertex(240, 510); brush.vertex(250, 545); brush.vertex(-10, 570);
  brush.endShape(true);
  // warm windows & reflection
  brush.fill("#f8b830", 250); brush.fillBleed(0.1);
  brush.beginShape(0.3);
  brush.vertex(150, 345); brush.vertex(150, 275); brush.vertex(205, 275); brush.vertex(205, 345);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(250, 345); brush.vertex(250, 285); brush.vertex(300, 285); brush.vertex(300, 345);
  brush.endShape(true);
  brush.fill("#f08818", 220);
  brush.circle(200, 170, 16, 0.3);
  brush.fill("#f8b830", 185);
  brush.beginShape(0.5);
  brush.vertex(150, 495); brush.vertex(300, 495); brush.vertex(310, 580); brush.vertex(140, 580);
  brush.endShape(true);
}
