async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ece6dc");
  brush.noStroke();
  // sky glow, tall composition: sky upper, wall climbing up the middle
  brush.fill("#f2b04a", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 300); brush.vertex(-10, 300);
  brush.endShape(true);
  brush.fill("#e0603a", 170);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 120); brush.vertex(-10, 160);
  brush.endShape(true);
  // distant dark hills
  brush.fill("#3a3050", 200); brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(-10, 260); brush.vertex(120, 230); brush.vertex(260, 270); brush.vertex(420, 215); brush.vertex(610, 255); brush.vertex(610, 330); brush.vertex(-10, 330);
  brush.endShape(true);
  // mid hill
  brush.fill("#1e2a3a", 215);
  brush.beginShape(0.6);
  brush.vertex(-10, 340); brush.vertex(150, 290); brush.vertex(330, 330); brush.vertex(610, 300); brush.vertex(610, 420); brush.vertex(-10, 430);
  brush.endShape(true);
  // foreground hill
  brush.fill("#10161f", 225);
  brush.beginShape(0.6);
  brush.vertex(-10, 450); brush.vertex(200, 400); brush.vertex(400, 440); brush.vertex(610, 410); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  // the wall: winding band from bottom to far hill
  brush.fill("#7a7468", 215); brush.fillBleed(0.2); brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(70, 610); brush.vertex(130, 540); brush.vertex(260, 520); brush.vertex(380, 470); brush.vertex(330, 420);
  brush.vertex(220, 400); brush.vertex(190, 345); brush.vertex(260, 320); brush.vertex(300, 295); brush.vertex(330, 295);
  brush.vertex(300, 330); brush.vertex(235, 355); brush.vertex(240, 385); brush.vertex(345, 405); brush.vertex(420, 465);
  brush.vertex(400, 510); brush.vertex(280, 560); brush.vertex(170, 570); brush.vertex(150, 610);
  brush.endShape(true);
  brush.fill("#4a463e", 190);
  brush.beginShape(0.5);
  brush.vertex(150, 610); brush.vertex(170, 570); brush.vertex(280, 560); brush.vertex(400, 510); brush.vertex(405, 525); brush.vertex(290, 580); brush.vertex(200, 610);
  brush.endShape(true);
  // pale sun streak
  brush.fill("#f8d070", 180);
  brush.circle(450, 150, 30, 0.4);
}
