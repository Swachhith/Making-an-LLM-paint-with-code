async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efeadb");
  brush.noStroke();
  // gold sky
  brush.fill("#e0a820", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 200); brush.vertex(-10, 220);
  brush.endShape(true);
  // dark forest back
  brush.fill("#0e4a2a", 215); brush.fillBleed(0.25);
  brush.beginShape(0.4);
  brush.vertex(-10, 180); brush.vertex(80, 140); brush.vertex(150, 190); brush.vertex(230, 130); brush.vertex(330, 190);
  brush.vertex(420, 120); brush.vertex(520, 180); brush.vertex(610, 140); brush.vertex(610, 300); brush.vertex(-10, 300);
  brush.endShape(true);
  // frozen lake gold-tinted, left as pale with wash
  brush.fill("#d8c070", 170); brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(120, 280); brush.vertex(480, 280); brush.vertex(520, 440); brush.vertex(430, 560); brush.vertex(160, 560); brush.vertex(80, 430);
  brush.endShape(true);
  brush.fill("#e0b030", 140);
  brush.beginShape(0.5);
  brush.vertex(200, 310); brush.vertex(400, 310); brush.vertex(420, 420); brush.vertex(190, 420);
  brush.endShape(true);
  // snowy banks left and right (paper) with green around
  brush.fill("#14603a", 205);
  brush.beginShape(0.5);
  brush.vertex(-10, 300); brush.vertex(120, 285); brush.vertex(80, 430); brush.vertex(150, 570); brush.vertex(100, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(610, 300); brush.vertex(480, 285); brush.vertex(520, 440); brush.vertex(440, 570); brush.vertex(500, 610); brush.vertex(610, 610);
  brush.endShape(true);
  // snow patches on banks: darker shadows beside
  brush.fill("#0a3a22", 220);
  brush.beginShape(0.4);
  brush.vertex(-10, 330); brush.vertex(60, 340); brush.vertex(40, 400); brush.vertex(-10, 410);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(610, 360); brush.vertex(560, 370); brush.vertex(570, 440); brush.vertex(610, 450);
  brush.endShape(true);
  // pine trees
  brush.fill("#0a3a22", 230);
  brush.beginShape(0.2);
  brush.vertex(30, 520); brush.vertex(60, 400); brush.vertex(90, 520);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(520, 540); brush.vertex(555, 420); brush.vertex(590, 540);
  brush.endShape(true);
  // foreground shadow
  brush.fill("#0a3a22", 190);
  brush.beginShape(0.5);
  brush.vertex(-10, 600); brush.vertex(300, 570); brush.vertex(610, 600); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  // sun
  brush.fill("#f5d060", 200);
  brush.circle(300, 90, 28, 0.4);
}
