async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f5ecda");
  randomSeed(4);
  brush.noStroke(); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  // big blue sky
  brush.fill("#1c5fc0", 200);
  brush.beginShape(0.4); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,320); brush.vertex(0,300); brush.endShape(true);
  brush.fill("#6aa8e8", 160);
  brush.beginShape(0.5); brush.vertex(100,40); brush.vertex(400,30); brush.vertex(380,160); brush.vertex(90,150); brush.endShape(true);
  // cliff rock rising
  brush.fill("#7a4a2a", 210);
  brush.beginShape(0.35); brush.vertex(0,600); brush.vertex(0,300); brush.vertex(120,260); brush.vertex(260,200); brush.vertex(480,230); brush.vertex(600,320); brush.vertex(600,600); brush.endShape(true);
  brush.fill("#a86a38", 180);
  brush.beginShape(0.35); brush.vertex(60,600); brush.vertex(100,340); brush.vertex(260,230); brush.vertex(460,260); brush.vertex(520,600); brush.endShape(true);
  // monastery walls
  brush.fill("#e8a030", 225);
  brush.beginShape(0.2); brush.vertex(160,330); brush.vertex(460,330); brush.vertex(460,230); brush.vertex(160,230); brush.endShape(true);
  brush.fill("#c8281e", 230);
  brush.beginShape(0.2); brush.vertex(190,230); brush.vertex(250,230); brush.vertex(220,160); brush.endShape(true);
  brush.beginShape(0.2); brush.vertex(300,230); brush.vertex(380,230); brush.vertex(340,120); brush.endShape(true);
  brush.fill("#d8581e", 220);
  brush.beginShape(0.2); brush.vertex(400,230); brush.vertex(450,230); brush.vertex(425,175); brush.endShape(true);
  // dark windows
  brush.fill("#2a1020", 225);
  for (let i = 0; i < 6; i++) brush.circle(190 + i * 50, 285, 8, 0.3);
  // foreground dark shadow
  brush.fill("#1c2a1c", 215);
  brush.beginShape(0.4); brush.vertex(0,600); brush.vertex(0,480); brush.vertex(200,520); brush.vertex(400,490); brush.vertex(600,520); brush.vertex(600,600); brush.endShape(true);
}
