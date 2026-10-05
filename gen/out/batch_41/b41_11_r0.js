async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2e8d4");
  brush.noStroke();
  brush.fill("#f0d8a0", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,360); brush.vertex(0,380); brush.endShape(true);
  brush.fill("#9ac0d8", 180);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,120); brush.vertex(0,170); brush.endShape(true);
  // meadow
  brush.fill("#8aa850", 210);
  brush.beginShape(0.5); brush.vertex(0,380); brush.vertex(300,360); brush.vertex(600,375); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#5a7a30", 190);
  brush.beginShape(0.5); brush.vertex(0,470); brush.vertex(300,450); brush.vertex(600,480); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  // tree small, off-centre right
  brush.fill("#3a2018", 235); brush.fillBleed(0.2);
  brush.beginShape(0.2); brush.vertex(446,400); brush.vertex(468,400); brush.vertex(464,330); brush.vertex(450,330); brush.endShape(true);
  brush.fill("#5a1a2a", 215); brush.fillBleed(0.3);
  brush.beginShape(0.7); brush.vertex(400,300); brush.vertex(430,250); brush.vertex(480,240); brush.vertex(520,280); brush.vertex(510,335); brush.vertex(430,345); brush.endShape(true);
  brush.fill("#2e0e1c", 225);
  brush.beginShape(0.7); brush.vertex(420,305); brush.vertex(450,268); brush.vertex(490,268); brush.vertex(505,310); brush.vertex(440,335); brush.endShape(true);
  brush.fill("#1a0c14", 200);
  brush.beginShape(0.5); brush.vertex(400,402); brush.vertex(540,398); brush.vertex(560,420); brush.vertex(390,424); brush.endShape(true);
  // distant hedge
  brush.fill("#3a4a38", 200);
  brush.beginShape(0.6); brush.vertex(0,372); brush.vertex(80,350); brush.vertex(160,368); brush.vertex(180,380); brush.vertex(0,388); brush.endShape(true);
}
