async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e9e9f0");
  brush.noStroke();
  brush.fill("#2a2a8a", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,380); brush.vertex(0,380); brush.endShape(true);
  brush.fill("#f08a1a", 210);
  brush.beginShape(0.5); brush.vertex(350,260); brush.vertex(600,250); brush.vertex(600,380); brush.vertex(350,380); brush.endShape(true);
  brush.fill("#1a1a6a", 220); brush.fillBleed(0.25);
  brush.beginShape(0.5); brush.vertex(0,380); brush.vertex(600,380); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#3a3aa0", 190);
  brush.beginShape(0.5); brush.vertex(0,420); brush.vertex(600,430); brush.vertex(600,470); brush.vertex(0,460); brush.endShape(true);
  // headland
  brush.fill("#10104a", 240); brush.fillBleed(0.2);
  brush.beginShape(0.5); brush.vertex(0,600); brush.vertex(0,470); brush.vertex(150,430); brush.vertex(260,470); brush.vertex(330,600); brush.endShape(true);
  // cypress bent right
  brush.fill("#0a0a30", 240); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6); brush.vertex(110,460); brush.vertex(130,330); brush.vertex(200,230); brush.vertex(300,190); brush.vertex(310,230); brush.vertex(230,300); brush.vertex(190,380); brush.vertex(180,460); brush.endShape(true);
  brush.fill("#1a1a60", 200);
  brush.beginShape(0.6); brush.vertex(140,440); brush.vertex(160,340); brush.vertex(220,260); brush.vertex(280,220); brush.vertex(240,300); brush.vertex(190,380); brush.endShape(true);
}
