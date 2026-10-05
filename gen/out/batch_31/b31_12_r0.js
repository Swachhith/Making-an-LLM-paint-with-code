async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1ecd8");
  brush.noStroke();
  brush.fill("#e8c860", 170); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5); brush.vertex(100, -10); brush.vertex(500, -10); brush.vertex(500, 200); brush.vertex(100, 200); brush.endShape(true);
  // mountains left & right, dark green
  brush.fill("#1a4a30", 220); brush.fillBleed(0.2);
  brush.beginShape(0.3); brush.vertex(-10, 80); brush.vertex(120, 160); brush.vertex(200, 330); brush.vertex(150, 610); brush.vertex(-10, 610); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(610, 40); brush.vertex(470, 150); brush.vertex(400, 330); brush.vertex(450, 610); brush.vertex(610, 610); brush.endShape(true);
  brush.fill("#0a2a1a", 190);
  brush.beginShape(0.3); brush.vertex(-10, 300); brush.vertex(100, 360); brush.vertex(80, 610); brush.vertex(-10, 610); brush.endShape(true);
  // glacier wall
  brush.fill("#9ad0d0", 210); brush.fillBleed(0.25);
  brush.beginShape(0.2); brush.vertex(190, 200); brush.vertex(300, 140); brush.vertex(410, 200); brush.vertex(420, 400); brush.vertex(190, 400); brush.endShape(true);
  brush.fill("#4a9aa8", 200);
  brush.beginShape(0.1); brush.vertex(210, 300); brush.vertex(260, 270); brush.vertex(290, 400); brush.vertex(210, 400); brush.endShape(true);
  brush.beginShape(0.1); brush.vertex(330, 250); brush.vertex(390, 230); brush.vertex(405, 400); brush.vertex(340, 400); brush.endShape(true);
  // sea
  brush.fill("#1a6a60", 220);
  brush.beginShape(0.4); brush.vertex(150, 400); brush.vertex(450, 400); brush.vertex(480, 610); brush.vertex(120, 610); brush.endShape(true);
  brush.fill("#e0b030", 160);
  brush.beginShape(0.4); brush.vertex(240, 470); brush.vertex(380, 470); brush.vertex(390, 520); brush.vertex(230, 520); brush.endShape(true);
  brush.fill("#cfe8e8", 200);
  brush.circle(270, 430, 18, 0.7); brush.circle(340, 450, 14, 0.7);
}
