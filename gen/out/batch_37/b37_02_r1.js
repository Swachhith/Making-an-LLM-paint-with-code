async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#faf4e4");
  brush.noStroke();
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.fill("#2a88e8", 210);
  brush.beginShape(0.3);
  brush.vertex(-40, -40); brush.vertex(640, -40); brush.vertex(640, 180); brush.vertex(-40, 180);
  brush.endShape(true);
  brush.fill("#ffffff", 0);
  brush.fill("#00c0c0", 200);
  brush.beginShape(0.5);
  brush.vertex(-40, 170); brush.vertex(640, 170); brush.vertex(640, 330); brush.vertex(400, 360); brush.vertex(300, 300); brush.vertex(200, 260); brush.vertex(-40, 260);
  brush.endShape(true);
  brush.fill("#00a8c8", 220);
  brush.beginShape(0.5);
  brush.vertex(380, 200); brush.vertex(560, 210); brush.vertex(540, 320); brush.vertex(420, 330);
  brush.endShape(true);
  brush.fill("#10d8c0", 180);
  brush.beginShape(0.8);
  brush.vertex(-40, 240); brush.vertex(240, 262); brush.vertex(330, 310); brush.vertex(380, 380); brush.vertex(300, 400); brush.vertex(120, 330); brush.vertex(-40, 320);
  brush.endShape(true);
  brush.fill("#f0b030", 230);
  brush.beginShape(0.7);
  brush.vertex(-40, 300); brush.vertex(200, 290); brush.vertex(360, 380); brush.vertex(470, 440); brush.vertex(380, 650); brush.vertex(-40, 650);
  brush.endShape(true);
  brush.fill("#d86a1c", 190);
  brush.beginShape(0.7);
  brush.vertex(-40, 420); brush.vertex(200, 410); brush.vertex(290, 480); brush.vertex(260, 650); brush.vertex(-40, 650);
  brush.endShape(true);
  brush.fill("#0c7a3a", 235);
  brush.beginShape(0.7);
  brush.vertex(500, 410); brush.vertex(640, 340); brush.vertex(640, 650); brush.vertex(440, 650); brush.vertex(480, 520);
  brush.endShape(true);
  brush.fill("#c4401c", 220);
  brush.beginShape(0.6);
  brush.vertex(470, 190); brush.vertex(640, 150); brush.vertex(640, 330); brush.vertex(540, 300);
  brush.endShape(true);
  brush.fill("#faf4e4", 255);
  brush.beginShape(0.5);
  brush.vertex(380, 450); brush.vertex(430, 480); brush.vertex(400, 650); brush.vertex(340, 650);
  brush.endShape(true);
  brush.fill("#ffffff", 0);
  brush.fill("#e0f4f0", 255);
  brush.circle(120, 200, 14, 0.8);
}
