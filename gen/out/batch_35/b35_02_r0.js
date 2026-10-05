async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2e6d2");
  randomSeed(2);
  brush.noStroke(); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  // far haze
  brush.fill("#e0a060", 170);
  brush.beginShape(0.4); brush.vertex(0,200); brush.vertex(600,180); brush.vertex(600,300); brush.vertex(0,300); brush.endShape(true);
  // far mesas
  brush.fill("#d07038", 180);
  brush.beginShape(0.3); brush.vertex(60,300); brush.vertex(80,230); brush.vertex(200,225); brush.vertex(230,300); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(380,300); brush.vertex(400,250); brush.vertex(520,245); brush.vertex(560,300); brush.endShape(true);
  // mid walls
  brush.fill("#b8501f", 200);
  brush.beginShape(0.35); brush.vertex(0,180); brush.vertex(170,200); brush.vertex(210,330); brush.vertex(150,420); brush.vertex(0,440); brush.endShape(true);
  brush.beginShape(0.35); brush.vertex(600,150); brush.vertex(430,210); brush.vertex(400,340); brush.vertex(460,430); brush.vertex(600,450); brush.endShape(true);
  // strata
  brush.fill("#8a3414", 150);
  for (let i = 0; i < 5; i++) {
    brush.beginShape(0.3); brush.vertex(0,230+i*40); brush.vertex(150,235+i*38); brush.vertex(160,255+i*38); brush.vertex(0,260+i*40); brush.endShape(true);
    brush.beginShape(0.3); brush.vertex(600,210+i*40); brush.vertex(450,230+i*38); brush.vertex(455,250+i*38); brush.vertex(600,245+i*40); brush.endShape(true);
  }
  // foreground floor
  brush.fill("#d9944a", 200);
  brush.beginShape(0.4); brush.vertex(0,430); brush.vertex(300,380); brush.vertex(600,440); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  // dark near rocks
  brush.fill("#2a1610", 225);
  brush.beginShape(0.4); brush.vertex(0,500); brush.vertex(120,470); brush.vertex(240,540); brush.vertex(180,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#4a2216", 190);
  brush.beginShape(0.4); brush.vertex(420,600); brush.vertex(470,520); brush.vertex(600,500); brush.vertex(600,600); brush.endShape(true);
}
