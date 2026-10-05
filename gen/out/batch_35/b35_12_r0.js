async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#102a30");
  randomSeed(12);
  brush.noStroke(); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.fill("#1a7078", 200);
  brush.beginShape(0.4); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#e88a30", 170);
  brush.beginShape(0.5); brush.vertex(380,40); brush.vertex(580,60); brush.vertex(570,300); brush.vertex(390,280); brush.endShape(true);
  // platform dark
  brush.fill("#0a1a20", 215);
  brush.beginShape(0.4); brush.vertex(0,520); brush.vertex(600,500); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  // coat
  brush.fill("#6a2a1a", 225);
  brush.beginShape(0.4); brush.vertex(120,600); brush.vertex(140,380); brush.vertex(220,320); brush.vertex(340,320); brush.vertex(400,390); brush.vertex(420,600); brush.endShape(true);
  brush.fill("#3a1a12", 200);
  brush.beginShape(0.4); brush.vertex(220,600); brush.vertex(230,400); brush.vertex(300,330); brush.vertex(330,600); brush.endShape(true);
  // neck + head
  brush.fill("#d8985a", 215);
  brush.beginShape(0.4); brush.vertex(250,330); brush.vertex(310,330); brush.vertex(305,280); brush.vertex(255,280); brush.endShape(true);
  brush.circle(282, 230, 48, 0.3);
  // hat
  brush.fill("#1a1a24", 230);
  brush.beginShape(0.4); brush.vertex(225,215); brush.vertex(340,215); brush.vertex(330,160); brush.vertex(235,160); brush.endShape(true);
  brush.beginShape(0.4); brush.vertex(200,225); brush.vertex(365,225); brush.vertex(350,205); brush.vertex(215,205); brush.endShape(true);
  // suitcase
  brush.fill("#c8782a", 230);
  brush.beginShape(0.2); brush.vertex(430,600); brush.vertex(430,470); brush.vertex(580,470); brush.vertex(580,600); brush.endShape(true);
  brush.fill("#5a3010", 215);
  brush.beginShape(0.2); brush.vertex(490,470); brush.vertex(520,470); brush.vertex(520,430); brush.vertex(490,430); brush.endShape(true);
}
