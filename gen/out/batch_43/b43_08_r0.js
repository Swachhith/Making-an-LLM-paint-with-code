async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf4e4");
  brush.noStroke();
  // big sky
  brush.fill("#2f9be0", 180); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 400); brush.vertex(-10, 400);
  brush.endShape(true);
  brush.fill("#ffd24a", 150); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, 250); brush.vertex(610, 230); brush.vertex(610, 420); brush.vertex(-10, 420);
  brush.endShape(true);
  // pavement
  brush.fill("#6a5a8a", 200); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(-10, 500); brush.vertex(610, 490); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  // cafe building, off-centre right
  brush.fill("#d62a3a", 215); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.3);
  brush.vertex(300, 505); brush.vertex(300, 300); brush.vertex(590, 300); brush.vertex(590, 505);
  brush.endShape(true);
  brush.fill("#7a1428", 200); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(300, 300); brush.vertex(300, 270); brush.vertex(590, 270); brush.vertex(590, 300);
  brush.endShape(true);
  // awning stripes
  for (let i = 0; i < 6; i++) {
    brush.fill(i % 2 ? "#fff3d8" : "#1a8a4a", 230); brush.fillBleed(0.2); brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.3);
    brush.vertex(290 + i * 50, 330); brush.vertex(340 + i * 50, 330); brush.vertex(345 + i * 50, 385); brush.vertex(280 + i * 50, 385);
    brush.endShape(true);
  }
  // window and door
  brush.fill("#ffc85a", 220); brush.fillBleed(0.2); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(330, 410); brush.vertex(330, 490); brush.vertex(430, 490); brush.vertex(430, 410);
  brush.endShape(true);
  brush.fill("#1c3a8a", 230); brush.fillBleed(0.2); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(470, 500); brush.vertex(470, 410); brush.vertex(550, 410); brush.vertex(550, 500);
  brush.endShape(true);
  // tables
  brush.fill("#1a1a40", 220); brush.fillBleed(0.2); brush.fillTexture(0.3, 0.3);
  brush.circle(130, 520, 34, 0.4); brush.circle(220, 535, 34, 0.4);
  // cloud
  brush.fill("#ffffff", 200); brush.fillBleed(0.3); brush.fillTexture(0.3, 0.3);
  brush.circle(120, 110, 40, 0.8); brush.circle(170, 100, 32, 0.8);
}
