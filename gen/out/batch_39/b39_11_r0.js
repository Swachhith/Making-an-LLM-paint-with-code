async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0c1020");
  brush.noStroke();
  brush.fill("#2a4a8a", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,350); brush.vertex(0,350); brush.endShape(true);
  brush.fill("#fff6d0", 255); brush.fillBleed(0.15);
  brush.circle(420,150,95,0.15);
  brush.fill("#ece0b0", 200); brush.circle(420,150,110,0.2);
  // path
  brush.fill("#8aa0c8", 200); brush.fillBleed(0.3);
  brush.beginShape(0.5); brush.vertex(260,350); brush.vertex(320,350); brush.vertex(480,600); brush.vertex(120,600); brush.endShape(true);
  // forest
  brush.fill("#050a14", 240); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,260); brush.vertex(120,300); brush.vertex(250,340); brush.vertex(260,360); brush.vertex(110,600); brush.vertex(0,600); brush.endShape(true);
  brush.beginShape(0.5); brush.vertex(600,270); brush.vertex(470,310); brush.vertex(330,345); brush.vertex(325,360); brush.vertex(490,600); brush.vertex(600,600); brush.endShape(true);
  for (const x of [40, 130, 520, 570]) {
    brush.fill("#050a14", 235);
    brush.beginShape(0.5); brush.vertex(x-20,600); brush.vertex(x-12,0); brush.vertex(x+12,0); brush.vertex(x+20,600); brush.endShape(true);
  }
  brush.fill("#101a30", 210);
  brush.beginShape(0.5); brush.vertex(0,120); brush.vertex(200,60); brush.vertex(230,140); brush.vertex(0,200); brush.endShape(true);
}
