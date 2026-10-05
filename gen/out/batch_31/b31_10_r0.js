async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe6d2");
  brush.noStroke();
  // outside seen through the cave
  brush.fill("#18a0e0", 220); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(170, 150); brush.vertex(300, 100); brush.vertex(430, 150); brush.vertex(450, 420); brush.vertex(150, 420); brush.endShape(true);
  brush.fill("#ffd030", 220);
  brush.beginShape(0.5); brush.vertex(190, 150); brush.vertex(410, 150); brush.vertex(410, 270); brush.vertex(190, 270); brush.endShape(true);
  brush.fill("#0a50c0", 200);
  brush.beginShape(0.5); brush.vertex(180, 270); brush.vertex(420, 270); brush.vertex(440, 420); brush.vertex(160, 420); brush.endShape(true);
  // cave rock
  brush.fill("#5a2a6a", 230); brush.fillBleed(0.2);
  brush.beginShape(0.4);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 610); brush.vertex(470, 610); brush.vertex(460, 400); brush.vertex(430, 150); brush.vertex(300, 90); brush.vertex(170, 150); brush.vertex(140, 400); brush.vertex(130, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#2a1040", 190);
  brush.beginShape(0.4); brush.vertex(-10, -10); brush.vertex(300, 40); brush.vertex(610, -10); brush.vertex(610, 120); brush.vertex(300, 60); brush.vertex(-10, 120); brush.endShape(true);
  // river path
  brush.fill("#10c0b0", 220);
  brush.beginShape(0.4); brush.vertex(285, 300); brush.vertex(315, 300); brush.vertex(470, 610); brush.vertex(130, 610); brush.endShape(true);
  brush.fill("#e84a8a", 180);
  brush.beginShape(0.4); brush.vertex(295, 330); brush.vertex(310, 330); brush.vertex(350, 520); brush.vertex(270, 520); brush.endShape(true);
}
