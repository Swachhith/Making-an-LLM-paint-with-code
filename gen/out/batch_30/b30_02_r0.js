async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe8d4");
  brush.noStroke();
  // wall / window frame in dark green
  brush.fill("#0f3a2a", 220); brush.fillBleed(0.25); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.2); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  // window glass: sky
  brush.fill("#f2b84a", 200);
  brush.beginShape(0.2); brush.vertex(110,80); brush.vertex(490,80); brush.vertex(490,520); brush.vertex(110,520); brush.endShape(true);
  brush.fill("#e8892f", 190);
  brush.beginShape(0.5); brush.vertex(110,80); brush.vertex(490,80); brush.vertex(490,230); brush.vertex(110,250); brush.endShape(true);
  brush.fill("#c8901f", 200); brush.circle(300,260,70,1);
  brush.fill("#f7e08a", 200); brush.circle(300,260,45,1);
  // water lower half
  brush.fill("#1c5a40", 190);
  brush.beginShape(0.6); brush.vertex(110,300); brush.vertex(490,300); brush.vertex(490,520); brush.vertex(110,520); brush.endShape(true);
  brush.fill("#e0a838", 190);
  brush.beginShape(0.6); brush.vertex(270,310); brush.vertex(330,310); brush.vertex(345,500); brush.vertex(255,500); brush.endShape(true);
  brush.fill("#f4d26a", 180); brush.circle(300,360,30,1);
  // mullions
  brush.fill("#0a2a1c", 235);
  brush.beginShape(0.1); brush.vertex(290,80); brush.vertex(310,80); brush.vertex(310,520); brush.vertex(290,520); brush.endShape(true);
  brush.beginShape(0.1); brush.vertex(110,295); brush.vertex(490,295); brush.vertex(490,315); brush.vertex(110,315); brush.endShape(true);
  // sill
  brush.fill("#1a4a34", 220);
  brush.beginShape(0.2); brush.vertex(80,520); brush.vertex(520,520); brush.vertex(520,560); brush.vertex(80,560); brush.endShape(true);
}
