async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#1b1424");
  brush.noStroke();
  brush.fill("#8a3a1a", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,430); brush.vertex(0,430); brush.endShape(true);
  brush.fill("#d8892a", 210); brush.fillBleed(0.3);
  brush.beginShape(0.5); brush.vertex(0,300); brush.vertex(600,310); brush.vertex(600,450); brush.vertex(0,450); brush.endShape(true);
  brush.fill("#e8b04a", 190);
  brush.beginShape(0.5); brush.vertex(100,380); brush.vertex(500,385); brush.vertex(500,450); brush.vertex(100,450); brush.endShape(true);
  // hill
  brush.fill("#0b0710", 245); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,520); brush.vertex(150,470); brush.vertex(300,430); brush.vertex(450,460); brush.vertex(600,500); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  // castle
  brush.fill("#0b0710", 240);
  brush.beginShape(0.1); brush.vertex(250,450); brush.vertex(250,375); brush.vertex(350,375); brush.vertex(350,450); brush.endShape(true);
  brush.beginShape(0.1); brush.vertex(235,450); brush.vertex(235,330); brush.vertex(275,330); brush.vertex(275,450); brush.endShape(true);
  brush.beginShape(0.1); brush.vertex(325,450); brush.vertex(325,310); brush.vertex(370,310); brush.vertex(370,450); brush.endShape(true);
  brush.beginShape(0.1); brush.vertex(235,330); brush.vertex(255,290); brush.vertex(275,330); brush.endShape(true);
  brush.beginShape(0.1); brush.vertex(325,310); brush.vertex(348,262); brush.vertex(370,310); brush.endShape(true);
  brush.fill("#f0c060", 255); brush.circle(300,410,6,0.2); brush.circle(350,350,5,0.2);
  // stars
  brush.fill("#f5d890", 230);
  for (let i = 0; i < 26; i++) brush.circle((i*131)%600, 15 + (i*47)%230, 1.7, 0.3);
}
