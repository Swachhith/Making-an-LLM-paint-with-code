async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e6eef0");
  brush.noStroke();
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.fill("#1e8090", 180);
  brush.beginShape(0.4);
  brush.vertex(-40, -40); brush.vertex(640, -40); brush.vertex(640, 400); brush.vertex(-40, 400);
  brush.endShape(true);
  brush.fill("#2a3a90", 150);
  brush.beginShape(0.8);
  brush.vertex(-40, -40); brush.vertex(640, -40); brush.vertex(640, 150); brush.vertex(300, 230); brush.vertex(-40, 120);
  brush.endShape(true);
  brush.fill("#68b8c4", 150);
  brush.beginShape(0.8);
  brush.vertex(-40, 300); brush.vertex(640, 260); brush.vertex(640, 420); brush.vertex(-40, 420);
  brush.endShape(true);
  brush.fill("#e2eef0", 255);
  brush.beginShape(0.8);
  brush.vertex(-40, 410); brush.vertex(200, 380); brush.vertex(640, 400); brush.vertex(640, 650); brush.vertex(-40, 650);
  brush.endShape(true);
  brush.fill("#2a4a8a", 200);
  brush.beginShape(0.8);
  brush.vertex(-40, 450); brush.vertex(300, 420); brush.vertex(640, 460); brush.vertex(640, 500); brush.vertex(-40, 520);
  brush.endShape(true);
  const tiers = [[430, 200, 40], [415, 270, 70], [405, 340, 100]];
  for (let t = 0; t < tiers.length; t++) {
    brush.fill("#102a50", 215 - t * 5);
    brush.beginShape(0.3);
    brush.vertex(tiers[t][0] , tiers[t][1] - 5); brush.vertex(tiers[t][0] + 70 + tiers[t][2] * 0.0, tiers[t][1] + 90); brush.vertex(tiers[t][0] + 150 - t * 5, tiers[t][1] + 110); brush.vertex(tiers[t][0] - 150 + t * 5, tiers[t][1] + 110); brush.vertex(tiers[t][0] - 70, tiers[t][1] + 90);
    brush.endShape(true);
  }
  brush.fill("#1a6878", 190);
  brush.beginShape(0.5);
  brush.vertex(430, 300); brush.vertex(520, 420); brush.vertex(350, 420);
  brush.endShape(true);
  brush.fill("#e6f2f2", 255);
  brush.beginShape(0.4);
  brush.vertex(430, 205); brush.vertex(455, 275); brush.vertex(430, 268); brush.vertex(410, 280);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(420, 290); brush.vertex(470, 345); brush.vertex(430, 340); brush.vertex(395, 350);
  brush.endShape(true);
  brush.fill("#0e2040", 220);
  brush.beginShape(0.4);
  brush.vertex(418, 400); brush.vertex(446, 400); brush.vertex(448, 470); brush.vertex(416, 470);
  brush.endShape(true);
}
