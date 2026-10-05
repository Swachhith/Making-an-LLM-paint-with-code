async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f5f3ec");
  brush.noStroke();
  brush.fill("#2f7fd8", 190); brush.fillBleed(0.3); brush.fillTexture(0.4,0.4);
  brush.beginShape(0.8); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,380); brush.vertex(0,380); brush.endShape(true);
  brush.fill("#f0a040", 150); brush.beginShape(0.8); brush.vertex(0,250); brush.vertex(600,250); brush.vertex(600,380); brush.vertex(0,380); brush.endShape(true);
  // mountain
  brush.fill("#6a3aa8", 210);
  brush.beginShape(0.3); brush.vertex(60,380); brush.vertex(240,200); brush.vertex(330,110); brush.vertex(420,210); brush.vertex(560,380); brush.endShape(true);
  brush.fill("#3a1a78", 200);
  brush.beginShape(0.3); brush.vertex(330,110); brush.vertex(420,210); brush.vertex(560,380); brush.vertex(340,380); brush.endShape(true);
  brush.fill("#f4f0f8", 220); brush.beginShape(0.3); brush.vertex(300,150); brush.vertex(330,110); brush.vertex(360,155); brush.vertex(330,140); brush.endShape(true);
  // tarn
  brush.fill("#1a5aa8", 200);
  brush.beginShape(0.6); brush.vertex(0,380); brush.vertex(600,380); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#4a1a90", 190);
  brush.beginShape(0.6); brush.vertex(100,385); brush.vertex(540,385); brush.vertex(430,520); brush.vertex(330,640); brush.vertex(230,520); brush.endShape(true);
  brush.fill("#e87820", 170); brush.beginShape(0.6); brush.vertex(0,560); brush.vertex(200,540); brush.vertex(600,570); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#2a8a40", 200); brush.beginShape(0.6); brush.vertex(0,380); brush.vertex(120,372); brush.vertex(80,420); brush.vertex(0,430); brush.endShape(true);
}
