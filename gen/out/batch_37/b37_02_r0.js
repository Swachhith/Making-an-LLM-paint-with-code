async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f8f3e6");
  brush.noStroke();
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.fill("#3a9be0", 190);
  brush.beginShape(0.5);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 200); brush.vertex(0, 200);
  brush.endShape(true);
  brush.fill("#00b8b0", 220);
  brush.beginShape(0.8);
  brush.vertex(0, 200); brush.vertex(600, 190); brush.vertex(600, 400); brush.vertex(380, 430); brush.vertex(250, 330); brush.vertex(0, 300);
  brush.endShape(true);
  brush.fill("#00e0d0", 170);
  brush.beginShape(0.8);
  brush.vertex(300, 215); brush.vertex(560, 220); brush.vertex(540, 340); brush.vertex(340, 330);
  brush.endShape(true);
  brush.fill("#e8a020", 230);
  brush.beginShape(0.7);
  brush.vertex(0, 300); brush.vertex(250, 330); brush.vertex(380, 430); brush.vertex(300, 600); brush.vertex(0, 600);
  brush.endShape(true);
  brush.fill("#d06820", 200);
  brush.beginShape(0.7);
  brush.vertex(0, 400); brush.vertex(200, 420); brush.vertex(240, 600); brush.vertex(0, 600);
  brush.endShape(true);
  brush.fill("#1a7a3a", 230);
  brush.beginShape(0.8);
  brush.vertex(430, 430); brush.vertex(600, 400); brush.vertex(600, 600); brush.vertex(380, 600);
  brush.endShape(true);
  brush.fill("#c8501c", 220);
  brush.beginShape(0.8);
  brush.vertex(470, 220); brush.vertex(600, 190); brush.vertex(600, 330); brush.vertex(520, 300);
  brush.endShape(true);
  brush.fill("#f5ead0", 255);
  brush.beginShape(0.6);
  brush.vertex(340, 440); brush.vertex(400, 470); brush.vertex(360, 600); brush.vertex(310, 600);
  brush.endShape(true);
  brush.fill("#0a8a9a", 200);
  brush.circle(100, 130, 30, 0.8);
}
