async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f0e6d2");
  brush.noStroke();
  brush.fillBleed(0.3); brush.fillTexture(0.5, 0.4);
  brush.fill("#d8a878", 190);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,400); brush.vertex(0,400); brush.endShape(true);
  brush.fill("#b8788a", 170);
  brush.beginShape(0.6); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,200); brush.vertex(0,240); brush.endShape(true);
  brush.fill("#e8c870", 200); brush.circle(420,340,40,0.3);
  brush.fill("#8a6a58", 200);
  brush.beginShape(0.7); brush.vertex(60,420); brush.vertex(130,370); brush.vertex(200,350); brush.vertex(280,380); brush.vertex(340,420); brush.endShape(true);
  brush.fill("#5a4a44", 210);
  brush.beginShape(0.7); brush.vertex(100,420); brush.vertex(170,380); brush.vertex(230,385); brush.vertex(290,420); brush.endShape(true);
  brush.fill("#7a8a78", 190);
  brush.beginShape(0.5); brush.vertex(0,400); brush.vertex(600,400); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#a88a60", 180);
  brush.beginShape(0.6); brush.vertex(380,400); brush.vertex(460,400); brush.vertex(500,600); brush.vertex(340,600); brush.endShape(true);
  brush.fill("#5a6a60", 190);
  brush.beginShape(0.6); brush.vertex(0,480); brush.vertex(600,470); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#4a3a38", 200);
  brush.beginShape(0.7); brush.vertex(0,600); brush.vertex(0,520); brush.vertex(120,545); brush.vertex(200,600); brush.endShape(true);
}
