async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#1a1012");
  brush.noStroke();
  // crimson sky, glowing behind peak
  brush.fill("#e8183c", 235); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 305); brush.vertex(-10, 305);
  brush.endShape(true);
  brush.fill("#ff5a6a", 215);
  brush.beginShape(0.5);
  brush.vertex(80, 140); brush.vertex(520, 130); brush.vertex(540, 300); brush.vertex(60, 300);
  brush.endShape(true);
  brush.fill("#8a0c24", 220);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 80); brush.vertex(-10, 110);
  brush.endShape(true);
  brush.fill("#8a0c24", 210);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 80); brush.vertex(-10, 110);
  brush.endShape(true);
  // black peak
  brush.fill("#0a0608", 245); brush.fillBleed(0.15);
  brush.beginShape(0.2);
  brush.vertex(110, 305); brush.vertex(240, 200); brush.vertex(300, 85); brush.vertex(335, 130); brush.vertex(365, 175); brush.vertex(490, 305);
  brush.endShape(true);
  brush.fill("#0a0608", 235);
  brush.beginShape(0.2);
  brush.vertex(110, 305); brush.vertex(240, 200); brush.vertex(300, 85); brush.vertex(335, 130); brush.vertex(365, 175); brush.vertex(490, 305);
  brush.endShape(true);
  brush.fill("#1a0610", 235);
  brush.beginShape(0.2);
  brush.vertex(200, 305); brush.vertex(260, 220); brush.vertex(310, 150); brush.vertex(380, 305);
  brush.endShape(true);
  brush.fill("#1a0610", 225);
  brush.beginShape(0.2);
  brush.vertex(200, 305); brush.vertex(260, 220); brush.vertex(310, 150); brush.vertex(380, 305);
  brush.endShape(true);
  // flanking ridges
  brush.fill("#3a0a18", 235);
  brush.beginShape(0.3);
  brush.vertex(-10, 305); brush.vertex(-10, 225); brush.vertex(100, 250); brush.vertex(210, 305);
  brush.endShape(true);
  brush.fill("#3a0a18", 225);
  brush.beginShape(0.3);
  brush.vertex(-10, 305); brush.vertex(-10, 225); brush.vertex(100, 250); brush.vertex(210, 305);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(610, 305); brush.vertex(610, 235); brush.vertex(520, 255); brush.vertex(420, 305);
  brush.endShape(true);
  brush.fill("#3a0a18", 225);
  brush.beginShape(0.3);
  brush.vertex(610, 305); brush.vertex(610, 235); brush.vertex(520, 255); brush.vertex(420, 305);
  brush.endShape(true);
  // cream highlight on lit face (paper-ish cream)
  brush.fill("#f8e8c0", 245); brush.fillBleed(0.1);
  brush.beginShape(0.2);
  brush.vertex(300, 85); brush.vertex(335, 130); brush.vertex(312, 185); brush.vertex(283, 140);
  brush.endShape(true);
  // water
  brush.fill("#7a0c20", 235); brush.fillBleed(0.25);
  brush.beginShape(0.4);
  brush.vertex(-10, 305); brush.vertex(610, 305); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#7a0c20", 225);
  brush.beginShape(0.4);
  brush.vertex(-10, 305); brush.vertex(610, 305); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#e8183c", 215);
  brush.beginShape(0.5);
  brush.vertex(80, 315); brush.vertex(520, 315); brush.vertex(545, 450); brush.vertex(60, 450);
  brush.endShape(true);
  // reflection
  brush.fill("#0a0608", 240);
  brush.beginShape(0.3);
  brush.vertex(110, 305); brush.vertex(240, 410); brush.vertex(300, 525); brush.vertex(335, 480); brush.vertex(365, 435); brush.vertex(490, 305);
  brush.endShape(true);
  brush.fill("#0a0608", 230);
  brush.beginShape(0.3);
  brush.vertex(110, 305); brush.vertex(240, 410); brush.vertex(300, 525); brush.vertex(335, 480); brush.vertex(365, 435); brush.vertex(490, 305);
  brush.endShape(true);
  brush.fill("#e8c8a0", 215);
  brush.beginShape(0.3);
  brush.vertex(300, 525); brush.vertex(335, 480); brush.vertex(315, 430); brush.vertex(288, 468);
  brush.endShape(true);
  brush.fill("#0a0608", 215);
  brush.beginShape(0.3);
  brush.vertex(-10, 520); brush.vertex(220, 545); brush.vertex(220, 572); brush.vertex(-10, 555);
  brush.endShape(true);
  brush.fill("#0a0608", 205);
  brush.beginShape(0.3);
  brush.vertex(-10, 520); brush.vertex(220, 545); brush.vertex(220, 572); brush.vertex(-10, 555);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(400, 565); brush.vertex(610, 540); brush.vertex(610, 575); brush.vertex(400, 592);
  brush.endShape(true);
  brush.fill("#0a0608", 205);
  brush.beginShape(0.3);
  brush.vertex(400, 565); brush.vertex(610, 540); brush.vertex(610, 575); brush.vertex(400, 592);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(60, 590); brush.vertex(260, 585); brush.vertex(260, 610); brush.vertex(60, 610);
  brush.endShape(true);
  brush.fill("#0a0608", 205);
  brush.beginShape(0.3);
  brush.vertex(60, 590); brush.vertex(260, 585); brush.vertex(260, 610); brush.vertex(60, 610);
  brush.endShape(true);
}
