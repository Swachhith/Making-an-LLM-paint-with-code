async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0a1520");
  brush.noStroke(); brush.fillTexture(0.4, 0.4); brush.fillBleed(0.3);
  brush.fill("#f09a3a", 205);
  brush.beginShape(0.5); brush.vertex(-40,-40); brush.vertex(640,-40); brush.vertex(640,270); brush.vertex(-40,270); brush.endShape(true);
  brush.fill("#e0407a", 195);
  brush.beginShape(0.5); brush.vertex(-40,-40); brush.vertex(640,-40); brush.vertex(640,120); brush.vertex(-40,170); brush.endShape(true);
  brush.fill("#7a2a8a", 185);
  brush.beginShape(0.5); brush.vertex(-40,-40); brush.vertex(640,-40); brush.vertex(640,50); brush.vertex(-40,70); brush.endShape(true);
  brush.fill("#fbdc8a", 220);
  brush.beginShape(0.5); brush.vertex(60,200); brush.vertex(540,190); brush.vertex(540,275); brush.vertex(60,285); brush.endShape(true);
  brush.fill("#fff0b0", 215); brush.circle(300, 245, 34, 0.5);
  // dark water
  brush.fill("#0e3050", 215); brush.fillBleed(0.25);
  brush.beginShape(0.5); brush.vertex(-40,255); brush.vertex(640,262); brush.vertex(640,640); brush.vertex(-40,640); brush.endShape(true);
  brush.fill("#06182a", 190);
  brush.beginShape(0.5); brush.vertex(-40,420); brush.vertex(640,410); brush.vertex(640,640); brush.vertex(-40,640); brush.endShape(true);
  brush.fill("#d07a4a", 150);
  brush.beginShape(0.6); brush.vertex(120,275); brush.vertex(480,275); brush.vertex(430,340); brush.vertex(170,340); brush.endShape(true);
  brush.fill("#f09a3a", 110);
  brush.beginShape(0.6); brush.vertex(40,350); brush.vertex(560,345); brush.vertex(540,375); brush.vertex(60,380); brush.endShape(true);
  // iceberg tip
  brush.fill("#d4ecf4", 235); brush.fillBleed(0.25);
  brush.beginShape(0.2); brush.vertex(235,305); brush.vertex(270,170); brush.vertex(325,50); brush.vertex(365,140); brush.vertex(405,305); brush.endShape(true);
  brush.fill("#8ac0d8", 215);
  brush.beginShape(0.2); brush.vertex(325,50); brush.vertex(405,305); brush.vertex(345,305); brush.vertex(322,160); brush.endShape(true);
  brush.fill("#f4a060", 150);
  brush.beginShape(0.2); brush.vertex(325,50); brush.vertex(300,130); brush.vertex(272,175); brush.vertex(312,180); brush.endShape(true);
  // submerged
  brush.fill("#2a9ab8", 205);
  brush.beginShape(0.5); brush.vertex(235,305); brush.vertex(405,305); brush.vertex(450,430); brush.vertex(350,600); brush.vertex(225,470); brush.endShape(true);
  brush.fill("#14708a", 195);
  brush.beginShape(0.5); brush.vertex(320,320); brush.vertex(405,310); brush.vertex(430,440); brush.vertex(350,580); brush.endShape(true);
  brush.fill("#8ae0e8", 150);
  brush.beginShape(0.5); brush.vertex(245,320); brush.vertex(300,320); brush.vertex(290,430); brush.vertex(240,440); brush.endShape(true);
  brush.fill("#f8e8c0", 230);
  for (let i = 0; i < 14; i++) brush.circle(40 + i * 43, 20 + (i * 37) % 60, 2, 0.3);
}
