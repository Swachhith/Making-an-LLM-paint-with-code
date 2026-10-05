async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0d0a2a");
  brush.noStroke();
  brush.fill("#2a1a7a", 200); brush.fillBleed(0.3); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.8); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,420); brush.vertex(0,420); brush.endShape(true);
  brush.fill("#5a2aa8", 190); brush.beginShape(0.8); brush.vertex(0,230); brush.vertex(600,200); brush.vertex(600,420); brush.vertex(0,420); brush.endShape(true);
  brush.fill("#8a5ad8", 150); brush.circle(480,110,60,1.2);
  brush.fill("#f4efd8", 230); brush.circle(480,110,26,1);
  for (const [x,y] of [[60,50],[150,120],[240,60],[330,30],[400,140],[560,40],[90,200]]) { brush.fill("#f4efd8", 230); brush.circle(x,y,3,1); }
  // river
  brush.fill("#1a1466", 220); brush.beginShape(0.6); brush.vertex(0,470); brush.vertex(600,470); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  // bridge
  brush.fill("#06041a", 240);
  brush.beginShape(0.1); brush.vertex(0,340); brush.vertex(600,340); brush.vertex(600,375); brush.vertex(0,375); brush.endShape(true);
  for (const x of [60,200,340,480]) { brush.beginShape(0.1); brush.vertex(x,375); brush.vertex(x+24,375); brush.vertex(x+24,480); brush.vertex(x,480); brush.endShape(true); }
  // train
  brush.beginShape(0.2); brush.vertex(120,300); brush.vertex(520,300); brush.vertex(520,340); brush.vertex(120,340); brush.endShape(true);
  brush.beginShape(0.2); brush.vertex(450,280); brush.vertex(520,280); brush.vertex(520,340); brush.vertex(450,340); brush.endShape(true);
  for (let x=140;x<440;x+=45){ brush.fill("#f6d070", 230); brush.circle(x,318,6,1); }
  brush.fill("#f6d070", 230); brush.circle(512,310,7,1);
  brush.fill("#8a5ad8", 150); brush.beginShape(0.6); brush.vertex(200,490); brush.vertex(400,490); brush.vertex(380,560); brush.vertex(220,560); brush.endShape(true);
}
