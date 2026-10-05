async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#1c1214");
  brush.noStroke();
  // crimson sky
  brush.fill("#b01830", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 300); brush.vertex(-10, 300);
  brush.endShape(true);
  brush.fill("#e04050", 150);
  brush.beginShape(0.5);
  brush.vertex(100, 150); brush.vertex(500, 140); brush.vertex(520, 290); brush.vertex(80, 290);
  brush.endShape(true);
  // black peak
  brush.fill("#0a0608", 235); brush.fillBleed(0.2);
  brush.beginShape(0.2);
  brush.vertex(120, 300); brush.vertex(240, 200); brush.vertex(300, 90); brush.vertex(330, 130); brush.vertex(360, 170); brush.vertex(470, 300);
  brush.endShape(true);
  // flanking ridges
  brush.fill("#2a0a14", 215);
  brush.beginShape(0.3);
  brush.vertex(-10, 300); brush.vertex(-10, 230); brush.vertex(100, 250); brush.vertex(200, 300);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(610, 300); brush.vertex(610, 240); brush.vertex(520, 255); brush.vertex(430, 300);
  brush.endShape(true);
  // cream highlight on lit face
  brush.fill("#f8e8c0", 235); brush.fillBleed(0.15);
  brush.beginShape(0.2);
  brush.vertex(300, 90); brush.vertex(330, 130); brush.vertex(310, 175); brush.vertex(285, 140);
  brush.endShape(true);
  // reflection: water
  brush.fill("#6a0e20", 200); brush.fillBleed(0.25);
  brush.beginShape(0.4);
  brush.vertex(-10, 300); brush.vertex(610, 300); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#8a1428", 170);
  brush.beginShape(0.5);
  brush.vertex(100, 310); brush.vertex(500, 310); brush.vertex(520, 440); brush.vertex(80, 440);
  brush.endShape(true);
  // reflected peak, inverted
  brush.fill("#0a0608", 225);
  brush.beginShape(0.3);
  brush.vertex(120, 300); brush.vertex(240, 400); brush.vertex(300, 510); brush.vertex(330, 470); brush.vertex(360, 430); brush.vertex(470, 300);
  brush.endShape(true);
  brush.fill("#e8c8a0", 150);
  brush.beginShape(0.3);
  brush.vertex(300, 510); brush.vertex(330, 470); brush.vertex(315, 425); brush.vertex(290, 460);
  brush.endShape(true);
  // ripples dark
  brush.fill("#0a0608", 190);
  brush.beginShape(0.3);
  brush.vertex(-10, 520); brush.vertex(200, 540); brush.vertex(200, 565); brush.vertex(-10, 550);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(420, 560); brush.vertex(610, 540); brush.vertex(610, 570); brush.vertex(420, 585);
  brush.endShape(true);
}
