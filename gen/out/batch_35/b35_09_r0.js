async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4e2d6");
  randomSeed(9);
  brush.noStroke(); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.fill("#d81e2a", 210);
  brush.beginShape(0.4); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,450); brush.vertex(0,450); brush.endShape(true);
  brush.fill("#f06a30", 190);
  brush.beginShape(0.5); brush.vertex(0,230); brush.vertex(600,250); brush.vertex(600,450); brush.vertex(0,450); brush.endShape(true);
  brush.fill("#ffc050", 180);
  brush.beginShape(0.5); brush.vertex(300,320); brush.vertex(600,300); brush.vertex(600,450); brush.vertex(300,450); brush.endShape(true);
  brush.fill("#6a0a2a", 200);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,70); brush.vertex(0,110); brush.endShape(true);
  // peak left-of-centre, large
  brush.fill("#1c0a2a", 235);
  brush.beginShape(0.15); brush.vertex(-20,600); brush.vertex(60,400); brush.vertex(130,300); brush.vertex(200,110); brush.vertex(250,260); brush.vertex(330,360); brush.vertex(420,440); brush.vertex(640,600); brush.endShape(true);
  brush.fill("#3a1030", 190);
  brush.beginShape(0.3); brush.vertex(440,450); brush.vertex(520,400); brush.vertex(600,440); brush.vertex(600,600); brush.vertex(440,600); brush.endShape(true);
  brush.fill("#2a0a1a", 215);
  brush.beginShape(0.4); brush.vertex(0,600); brush.vertex(0,520); brush.vertex(300,540); brush.vertex(600,520); brush.vertex(600,600); brush.endShape(true);
}
