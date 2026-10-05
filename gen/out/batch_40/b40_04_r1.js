async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eae0d0");
  brush.noStroke();
  // sky
  brush.fill("#f8a020", 230); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 280); brush.vertex(-10, 280);
  brush.endShape(true);
  brush.fill("#e03018", 210);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 110); brush.vertex(300, 150); brush.vertex(-10, 120);
  brush.endShape(true);
  brush.fill("#8a1a50", 195);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 30); brush.vertex(-10, 50);
  brush.endShape(true);
  brush.fill("#ffd860", 215);
  brush.circle(450, 190, 32, 0.4);
  // far hills
  brush.fill("#4a2a6a", 225); brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(-10, 255); brush.vertex(120, 225); brush.vertex(260, 262); brush.vertex(420, 205); brush.vertex(610, 250); brush.vertex(610, 330); brush.vertex(-10, 330);
  brush.endShape(true);
  brush.fill("#2a1a4a", 220);
  brush.beginShape(0.6);
  brush.vertex(-10, 310); brush.vertex(150, 275); brush.vertex(330, 315); brush.vertex(610, 285); brush.vertex(610, 400); brush.vertex(-10, 410);
  brush.endShape(true);
  // near hills dark
  brush.fill("#101a2a", 235);
  brush.beginShape(0.6);
  brush.vertex(-10, 400); brush.vertex(200, 355); brush.vertex(400, 395); brush.vertex(610, 360); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#0a1018", 225);
  brush.beginShape(0.6);
  brush.vertex(-10, 520); brush.vertex(150, 480); brush.vertex(400, 520); brush.vertex(610, 490); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  // wall: pale stone band winding upward, narrowing with distance
  brush.fill("#c8b898", 235); brush.fillBleed(0.15); brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(40, 610); brush.vertex(110, 545); brush.vertex(250, 530); brush.vertex(390, 480); brush.vertex(340, 430);
  brush.vertex(215, 405); brush.vertex(190, 350); brush.vertex(255, 318); brush.vertex(300, 292); brush.vertex(325, 292);
  brush.vertex(300, 325); brush.vertex(240, 352); brush.vertex(245, 380); brush.vertex(350, 405); brush.vertex(430, 465);
  brush.vertex(410, 520); brush.vertex(290, 570); brush.vertex(190, 578); brush.vertex(170, 610);
  brush.endShape(true);
  brush.fill("#6a5a48", 215);
  brush.beginShape(0.5);
  brush.vertex(170, 610); brush.vertex(190, 578); brush.vertex(290, 570); brush.vertex(410, 520); brush.vertex(414, 540); brush.vertex(300, 592); brush.vertex(215, 610);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(215, 405); brush.vertex(245, 380); brush.vertex(350, 405); brush.vertex(345, 425);
  brush.endShape(true);
  // small trees on hill
  brush.fill("#0a1018", 235);
  brush.beginShape(0.3);
  brush.vertex(480, 400); brush.vertex(505, 330); brush.vertex(535, 400);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(70, 405); brush.vertex(95, 340); brush.vertex(120, 405);
  brush.endShape(true);
}
