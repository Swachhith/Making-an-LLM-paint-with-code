async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6ead4");
  brush.noStroke();
  brush.fillBleed(0.28);
  brush.fillTexture(0.4, 0.4);
  brush.fill("#e8b048", 170);
  brush.beginShape(0.7);
  brush.vertex(230, 60); brush.vertex(580, 100); brush.vertex(560, 520); brush.vertex(250, 560);
  brush.endShape(true);
  brush.fill("#d86a38", 150);
  brush.beginShape(0.7);
  brush.vertex(300, 360); brush.vertex(580, 330); brush.vertex(570, 580); brush.vertex(290, 590);
  brush.endShape(true);
  // stem + leaves
  brush.fill("#2a3a1a", 215);
  brush.beginShape(0.5);
  brush.vertex(405, 590); brush.vertex(400, 380); brush.vertex(422, 380); brush.vertex(430, 590);
  brush.endShape(true);
  brush.fill("#3a4a22", 200);
  brush.beginShape(0.6);
  brush.vertex(410, 560); brush.vertex(330, 470); brush.vertex(300, 360); brush.vertex(370, 430); brush.vertex(418, 520);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(418, 540); brush.vertex(480, 460); brush.vertex(520, 400); brush.vertex(505, 490); brush.vertex(430, 580);
  brush.endShape(true);
  // black bloom
  brush.fill("#1a0e1e", 220);
  brush.beginShape(0.7);
  brush.vertex(350, 240); brush.vertex(362, 170); brush.vertex(400, 130); brush.vertex(412, 220); brush.vertex(380, 340); brush.vertex(345, 330);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(470, 240); brush.vertex(455, 170); brush.vertex(420, 130); brush.vertex(410, 220); brush.vertex(440, 340); brush.vertex(475, 330);
  brush.endShape(true);
  brush.fill("#2e1a32", 200);
  brush.beginShape(0.7);
  brush.vertex(375, 340); brush.vertex(370, 200); brush.vertex(412, 150); brush.vertex(452, 200); brush.vertex(448, 340); brush.vertex(412, 372);
  brush.endShape(true);
  brush.fill("#0a0610", 210);
  brush.beginShape(0.6);
  brush.vertex(395, 340); brush.vertex(400, 230); brush.vertex(425, 230); brush.vertex(430, 340);
  brush.endShape(true);
  brush.fill("#b8402a", 120);
  brush.circle(412, 155, 22, 1.2);
}
