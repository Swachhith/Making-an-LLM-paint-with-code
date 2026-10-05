async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbeed0");
  brush.noStroke();
  brush.fill("#ff7a1a", 215); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,380); brush.vertex(0,380); brush.endShape(true);
  brush.fill("#e0206a", 200);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,160); brush.vertex(0,200); brush.endShape(true);
  brush.fill("#ffd23a", 220);
  brush.beginShape(0.5); brush.vertex(120,250); brush.vertex(480,245); brush.vertex(500,380); brush.vertex(100,380); brush.endShape(true);
  brush.fill("#ffe880", 230); brush.circle(300,300,60,0.3);
  // sea
  brush.fill("#1a4ab8", 215);
  brush.beginShape(0.5); brush.vertex(0,375); brush.vertex(600,375); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#f06a30", 170);
  brush.beginShape(0.5); brush.vertex(230,380); brush.vertex(370,380); brush.vertex(400,520); brush.vertex(200,520); brush.endShape(true);
  // pier
  brush.fill("#2a1a20", 240);
  brush.beginShape(0.1); brush.vertex(0,440); brush.vertex(600,430); brush.vertex(600,462); brush.vertex(0,472); brush.endShape(true);
  for (let i = 0; i < 6; i++) { brush.beginShape(0.1); brush.vertex(40+i*100,460); brush.vertex(62+i*100,460); brush.vertex(62+i*100,560); brush.vertex(40+i*100,560); brush.endShape(true); }
  // boy
  brush.fill("#1a1018", 245);
  brush.beginShape(0.5); brush.vertex(380,350); brush.vertex(405,350); brush.vertex(410,435); brush.vertex(375,435); brush.endShape(true);
  brush.circle(392,335,11,0.3);
  brush.beginShape(0.3); brush.vertex(400,360); brush.vertex(470,300); brush.vertex(480,312); brush.vertex(405,376); brush.endShape(true);
  brush.fill("#1a1018", 190);
  brush.beginShape(0.3); brush.vertex(470,300); brush.vertex(486,300); brush.vertex(488,440); brush.vertex(472,440); brush.endShape(true);
}
