async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7efe4");
  brush.noStroke();
  brush.fill("#e0301a", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,200); brush.vertex(600,210); brush.vertex(600,380); brush.vertex(0,380); brush.endShape(true);
  brush.fill("#f08a10", 210);
  brush.beginShape(0.5); brush.vertex(0,300); brush.vertex(600,310); brush.vertex(600,400); brush.vertex(0,400); brush.endShape(true);
  brush.fill("#7a1a8a", 200);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,230); brush.vertex(0,210); brush.endShape(true);
  brush.fill("#fff0b0", 255); brush.circle(400,345,42,0.2);
  // snowfield: leave paper, add blue shadows
  brush.fill("#4a5ac0", 190); brush.fillBleed(0.3);
  brush.beginShape(0.5); brush.vertex(0,420); brush.vertex(300,400); brush.vertex(600,415); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#e8603a", 190);
  brush.beginShape(0.5); brush.vertex(300,430); brush.vertex(520,420); brush.vertex(560,470); brush.vertex(380,480); brush.endShape(true);
  brush.fill("#3a3a9a", 200);
  brush.beginShape(0.5); brush.vertex(40,520); brush.vertex(250,470); brush.vertex(300,520); brush.vertex(60,570); brush.endShape(true);
  brush.fill("#2a1a3a", 220);
  brush.beginShape(0.3); brush.vertex(60,400); brush.vertex(70,370); brush.vertex(90,370); brush.vertex(100,400); brush.endShape(true);
}
