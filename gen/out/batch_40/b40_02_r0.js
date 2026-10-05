async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1f4f2");
  brush.noStroke();
  // sky
  brush.fill("#2c8fe0", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 260); brush.vertex(-10, 260);
  brush.endShape(true);
  // water river leading into distance
  brush.fill("#0a7a9a", 210); brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(285, 250); brush.vertex(320, 250); brush.vertex(520, 610); brush.vertex(60, 610);
  brush.endShape(true);
  brush.fill("#15b0b8", 170);
  brush.beginShape(0.5);
  brush.vertex(295, 270); brush.vertex(312, 270); brush.vertex(400, 600); brush.vertex(220, 600);
  brush.endShape(true);
  // left cliffs
  brush.fill("#6a2a8a", 200); brush.fillBleed(0.25);
  brush.beginShape(0.3);
  brush.vertex(-10, 40); brush.vertex(120, 90); brush.vertex(240, 230); brush.vertex(290, 255); brush.vertex(60, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#1a3a9a", 190);
  brush.beginShape(0.3);
  brush.vertex(-10, 150); brush.vertex(100, 170); brush.vertex(215, 258); brush.vertex(140, 460); brush.vertex(-10, 520);
  brush.endShape(true);
  brush.fill("#e0382a", 150);
  brush.beginShape(0.4);
  brush.vertex(-10, 300); brush.vertex(70, 290); brush.vertex(110, 420); brush.vertex(-10, 470);
  brush.endShape(true);
  // right cliffs
  brush.fill("#c8501a", 200); brush.fillBleed(0.25);
  brush.beginShape(0.3);
  brush.vertex(610, 10); brush.vertex(480, 110); brush.vertex(370, 230); brush.vertex(330, 255); brush.vertex(520, 610); brush.vertex(610, 610);
  brush.endShape(true);
  brush.fill("#8a1f4a", 190);
  brush.beginShape(0.3);
  brush.vertex(610, 140); brush.vertex(500, 190); brush.vertex(400, 260); brush.vertex(480, 450); brush.vertex(610, 520);
  brush.endShape(true);
  // distant blue mountain
  brush.fill("#3a5ad0", 180);
  brush.beginShape(0.4);
  brush.vertex(240, 255); brush.vertex(300, 200); brush.vertex(360, 255);
  brush.endShape(true);
  // sun on water
  brush.fill("#f5c030", 170);
  brush.circle(305, 330, 22, 0.5);
}
