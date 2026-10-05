async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1f0ea");
  brush.noStroke();
  brush.fill("#1a7ad0", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#0a55b0", 180);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,200); brush.vertex(0,260); brush.endShape(true);
  // big peak, off-centre right
  brush.fill("#6a3fa0", 210); brush.fillBleed(0.25);
  brush.beginShape(0.3); brush.vertex(180,600); brush.vertex(390,110); brush.vertex(600,600); brush.endShape(true);
  brush.fill("#3a1f78", 210);
  brush.beginShape(0.3); brush.vertex(390,110); brush.vertex(600,600); brush.vertex(420,600); brush.vertex(405,300); brush.endShape(true);
  brush.fill("#e0701f", 180);
  brush.beginShape(0.3); brush.vertex(390,110); brush.vertex(330,290); brush.vertex(380,250); brush.vertex(405,300); brush.endShape(true);
  // small peak left
  brush.fill("#2a9a8a", 200);
  brush.beginShape(0.3); brush.vertex(-20,600); brush.vertex(110,330); brush.vertex(240,600); brush.endShape(true);
  // cloud wrap: white paper-like clouds
  brush.fill("#fbfaf6", 235); brush.fillBleed(0.3);
  brush.beginShape(0.9); brush.vertex(200,330); brush.vertex(330,290); brush.vertex(470,330); brush.vertex(560,360); brush.vertex(450,400); brush.vertex(300,390); brush.vertex(190,370); brush.endShape(true);
  brush.fill("#e8eef8", 220);
  brush.beginShape(0.9); brush.vertex(120,470); brush.vertex(300,440); brush.vertex(520,480); brush.vertex(500,530); brush.vertex(300,520); brush.vertex(110,520); brush.endShape(true);
  brush.fill("#d0dcf0", 200);
  brush.circle(430, 200, 28, 0.8); brush.circle(100, 130, 35, 0.8);
}
