async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#14161a");
  brush.noStroke();
  // night backdrop wash
  brush.fill("#2a3a4a", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 300); brush.vertex(-10, 300);
  brush.endShape(true);
  brush.fill("#4a5a6a", 150);
  brush.beginShape(0.6);
  brush.vertex(-10, 40); brush.vertex(610, 20); brush.vertex(610, 200); brush.vertex(-10, 220);
  brush.endShape(true);
  // mill body (close up, big)
  brush.fill("#6a4a3a", 215); brush.fillBleed(0.2); brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.1);
  brush.vertex(60, 470); brush.vertex(60, 200); brush.vertex(200, 90); brush.vertex(340, 200); brush.vertex(340, 470);
  brush.endShape(true);
  brush.fill("#3a2a24", 200);
  brush.beginShape(0.1);
  brush.vertex(200, 90); brush.vertex(340, 200); brush.vertex(340, 260); brush.vertex(200, 150);
  brush.endShape(true);
  // roof dark
  brush.fill("#1a1214", 225);
  brush.beginShape(0.1);
  brush.vertex(40, 215); brush.vertex(200, 70); brush.vertex(360, 215); brush.vertex(340, 215); brush.vertex(200, 100); brush.vertex(60, 215);
  brush.endShape(true);
  // water wheel right
  brush.fill("#2a2220", 225); brush.fillBleed(0.2);
  brush.circle(400, 380, 105, 0.3);
  brush.fill("#6a4a3a", 190);
  brush.circle(400, 380, 70, 0.3);
  brush.fill("#14100e", 220);
  brush.circle(400, 380, 22, 0.2);
  // spokes as wide shapes
  brush.fill("#2a2220", 215);
  brush.beginShape(0.1);
  brush.vertex(385, 290); brush.vertex(415, 290); brush.vertex(415, 470); brush.vertex(385, 470);
  brush.endShape(true);
  brush.beginShape(0.1);
  brush.vertex(310, 365); brush.vertex(490, 365); brush.vertex(490, 395); brush.vertex(310, 395);
  brush.endShape(true);
  // stream
  brush.fill("#2a4a6a", 200); brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(-10, 480); brush.vertex(610, 470); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#4a7a9a", 150);
  brush.beginShape(0.5);
  brush.vertex(300, 490); brush.vertex(520, 485); brush.vertex(560, 560); brush.vertex(240, 575);
  brush.endShape(true);
  // warm windows
  brush.fill("#f8b040", 245); brush.fillBleed(0.15);
  brush.beginShape(0.3);
  brush.vertex(110, 330); brush.vertex(110, 270); brush.vertex(160, 270); brush.vertex(160, 330);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(230, 330); brush.vertex(230, 270); brush.vertex(280, 270); brush.vertex(280, 330);
  brush.endShape(true);
  brush.fill("#e8802a", 190);
  brush.circle(200, 170, 14, 0.3);
  brush.fill("#f8b040", 150);
  brush.beginShape(0.5);
  brush.vertex(100, 495); brush.vertex(180, 495); brush.vertex(190, 580); brush.vertex(90, 580);
  brush.endShape(true);
}
