async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e6e6f0");
  brush.noStroke();
  brush.fill("#2e2e9a", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,390); brush.vertex(0,390); brush.endShape(true);
  brush.fill("#1c1c70", 160);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,180); brush.vertex(0,140); brush.endShape(true);
  // accent: orange sunset band at horizon + sun
  brush.fill("#f58a14", 225); brush.fillBleed(0.3);
  brush.beginShape(0.5); brush.vertex(200,330); brush.vertex(600,310); brush.vertex(600,395); brush.vertex(200,395); brush.endShape(true);
  brush.fill("#ffc040", 235); brush.circle(480,345,34,0.2);
  // sea
  brush.fill("#1a1a80", 225); brush.fillBleed(0.25);
  brush.beginShape(0.5); brush.vertex(0,390); brush.vertex(600,390); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#4a4ab8", 180);
  for (let i = 0; i < 5; i++) { brush.beginShape(0.6); brush.vertex(0,420+i*32); brush.vertex(300,410+i*32); brush.vertex(600,425+i*32); brush.vertex(600,438+i*32); brush.vertex(0,436+i*32); brush.endShape(true); }
  brush.fill("#f58a14", 170);
  brush.beginShape(0.6); brush.vertex(440,395); brush.vertex(520,395); brush.vertex(510,470); brush.vertex(460,480); brush.endShape(true);
  // cliff
  brush.fill("#0e0e4a", 245); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,600); brush.vertex(0,420); brush.vertex(120,395); brush.vertex(260,430); brush.vertex(310,520); brush.vertex(290,600); brush.endShape(true);
  // cypress: bent flame, leaning right
  brush.fill("#08082e", 245); brush.fillBleed(0.2);
  brush.beginShape(0.6); brush.vertex(70,420); brush.vertex(95,340); brush.vertex(130,260); brush.vertex(190,190); brush.vertex(270,140); brush.vertex(330,120); brush.vertex(325,175); brush.vertex(270,235); brush.vertex(235,310); brush.vertex(215,380); brush.vertex(220,425); brush.endShape(true);
  brush.fill("#2a2a8a", 190);
  brush.beginShape(0.6); brush.vertex(110,390); brush.vertex(130,310); brush.vertex(180,230); brush.vertex(250,170); brush.vertex(290,150); brush.vertex(240,230); brush.vertex(190,320); brush.vertex(170,390); brush.endShape(true);
  brush.fill("#08082e", 235);
  brush.beginShape(0.6); brush.vertex(100,300); brush.vertex(40,260); brush.vertex(30,285); brush.vertex(95,335); brush.endShape(true);
}
