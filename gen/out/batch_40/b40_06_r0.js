async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#16121c");
  brush.noStroke();
  // warm sky glow low
  brush.fill("#e8802a", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, 200); brush.vertex(610, 190); brush.vertex(610, 380); brush.vertex(-10, 380);
  brush.endShape(true);
  brush.fill("#c8402a", 170);
  brush.beginShape(0.5);
  brush.vertex(-10, 80); brush.vertex(610, 70); brush.vertex(610, 260); brush.vertex(-10, 280);
  brush.endShape(true);
  brush.fill("#f0b040", 180);
  brush.circle(380, 270, 70, 0.4);
  // moon
  brush.fill("#f8d890", 235); brush.fillBleed(0.15);
  brush.circle(380, 270, 36, 0.3);
  // sea
  brush.fill("#2a1a2a", 215); brush.fillBleed(0.25);
  brush.beginShape(0.4);
  brush.vertex(-10, 340); brush.vertex(610, 340); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  // moon path on water
  brush.fill("#e8802a", 190);
  brush.beginShape(0.5);
  brush.vertex(350, 345); brush.vertex(415, 345); brush.vertex(440, 450); brush.vertex(330, 450);
  brush.endShape(true);
  brush.fill("#f0b040", 180);
  brush.beginShape(0.5);
  brush.vertex(365, 350); brush.vertex(400, 350); brush.vertex(410, 420); brush.vertex(355, 420);
  brush.endShape(true);
  brush.fill("#e8802a", 170);
  brush.beginShape(0.5);
  brush.vertex(380, 450); brush.vertex(430, 450); brush.vertex(460, 540); brush.vertex(360, 540);
  brush.endShape(true);
  // dark rocks / headland left
  brush.fill("#0a0810", 235); brush.fillBleed(0.2);
  brush.beginShape(0.4);
  brush.vertex(-10, 330); brush.vertex(60, 300); brush.vertex(140, 335); brush.vertex(240, 345); brush.vertex(200, 400); brush.vertex(100, 420); brush.vertex(-10, 450);
  brush.endShape(true);
  // pine on headland
  brush.beginShape(0.2);
  brush.vertex(40, 310); brush.vertex(70, 200); brush.vertex(100, 310);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(80, 315); brush.vertex(110, 240); brush.vertex(140, 330);
  brush.endShape(true);
  // distant sailboat
  brush.beginShape(0.2);
  brush.vertex(500, 340); brush.vertex(530, 290); brush.vertex(540, 340);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(490, 340); brush.vertex(550, 340); brush.vertex(535, 360); brush.vertex(505, 360);
  brush.endShape(true);
  // foreground rock
  brush.beginShape(0.4);
  brush.vertex(520, 610); brush.vertex(540, 520); brush.vertex(600, 500); brush.vertex(610, 610);
  brush.endShape(true);
}
