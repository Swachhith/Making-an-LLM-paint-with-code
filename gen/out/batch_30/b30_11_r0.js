async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3f5f2");
  brush.noStroke();
  brush.fill("#2a9ae8", 190); brush.fillBleed(0.3); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.8); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,420); brush.vertex(0,420); brush.endShape(true);
  brush.fill("#f0c850", 140); brush.circle(500,90,60,1);
  // sea
  brush.fill("#0a5ac0", 200); brush.beginShape(0.6); brush.vertex(0,430); brush.vertex(600,420); brush.vertex(600,520); brush.vertex(0,520); brush.endShape(true);
  // church
  brush.fill("#f2eada", 130);
  brush.beginShape(0.1); brush.vertex(150,300); brush.vertex(430,300); brush.vertex(430,520); brush.vertex(150,520); brush.endShape(true);
  brush.fill("#d89870", 190); brush.beginShape(0.1); brush.vertex(150,300); brush.vertex(430,300); brush.vertex(430,520); brush.vertex(150,520); brush.endShape(true);
  brush.fill("#1a5ad8", 230); brush.beginShape(0.8); brush.vertex(180,300); brush.vertex(200,220); brush.vertex(290,160); brush.vertex(380,220); brush.vertex(400,300); brush.endShape(true);
  brush.fill("#0a2a90", 200); brush.beginShape(0.8); brush.vertex(290,160); brush.vertex(380,220); brush.vertex(400,300); brush.vertex(290,300); brush.endShape(true);
  brush.fill("#f0e0c0", 220); brush.beginShape(0.1); brush.vertex(283,110); brush.vertex(299,110); brush.vertex(299,165); brush.vertex(283,165); brush.endShape(true);
  brush.fill("#1a3a90", 220); for (const x of [190,260,330,390]) { brush.beginShape(0.5); brush.vertex(x,370); brush.vertex(x+30,370); brush.vertex(x+30,440); brush.vertex(x,440); brush.endShape(true); }
  brush.fill("#d83030", 200); brush.circle(100,560,40,1.3); brush.fill("#2a9a4a", 200); brush.beginShape(0.7); brush.vertex(0,520); brush.vertex(600,520); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
}
