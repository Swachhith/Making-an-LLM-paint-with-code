async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f8e6cc");
  brush.noStroke();
  brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.fill("#ff9a30", 180);
  brush.beginShape(0.4); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,430); brush.vertex(0,430); brush.endShape(true);
  brush.fill("#e0305a", 170);
  brush.beginShape(0.6); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,220); brush.vertex(0,260); brush.endShape(true);
  brush.fill("#ffd080", 160);
  brush.beginShape(0.8); brush.vertex(0,330); brush.vertex(600,320); brush.vertex(600,450); brush.vertex(0,450); brush.endShape(true);
  brush.fill("#d81818", 230); brush.circle(300,380,56,0.3);
  brush.fill("#ffb860", 150);
  brush.beginShape(0.8); brush.vertex(0,375); brush.vertex(600,365); brush.vertex(600,415); brush.vertex(0,420); brush.endShape(true);
  brush.fill("#5a1a50", 210);
  brush.beginShape(0.5); brush.vertex(0,600); brush.vertex(0,450); brush.vertex(600,440); brush.vertex(600,600); brush.endShape(true);
  brush.fill("#c82a40", 180);
  brush.beginShape(0.5); brush.vertex(260,450); brush.vertex(340,450); brush.vertex(380,560); brush.vertex(220,560); brush.endShape(true);
  brush.fill("#2a1040", 200);
  brush.beginShape(0.6); brush.vertex(0,600); brush.vertex(0,520); brush.vertex(600,515); brush.vertex(600,600); brush.endShape(true);
}
