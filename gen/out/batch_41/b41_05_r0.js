async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0e1424");
  brush.noStroke();
  brush.fill("#2a2a78", 210); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,330); brush.vertex(0,330); brush.endShape(true);
  brush.fill("#6a2f8a", 190);
  brush.beginShape(0.5); brush.vertex(0,120); brush.vertex(600,100); brush.vertex(600,320); brush.vertex(0,330); brush.endShape(true);
  // valley walls
  brush.fill("#0f5a6a", 225); brush.fillBleed(0.25);
  brush.beginShape(0.5); brush.vertex(0,170); brush.vertex(130,260); brush.vertex(250,340); brush.vertex(240,420); brush.vertex(0,430); brush.endShape(true);
  brush.fill("#7a1f4a", 225);
  brush.beginShape(0.5); brush.vertex(600,150); brush.vertex(470,250); brush.vertex(350,340); brush.vertex(360,420); brush.vertex(600,430); brush.endShape(true);
  // glacier tongue
  brush.fill("#6ad0e0", 215); brush.fillBleed(0.3);
  brush.beginShape(0.5); brush.vertex(240,320); brush.vertex(360,320); brush.vertex(480,430); brush.vertex(600,520); brush.vertex(0,520); brush.vertex(110,430); brush.endShape(true);
  brush.fill("#2fa0c8", 200);
  brush.beginShape(0.5); brush.vertex(260,345); brush.vertex(340,345); brush.vertex(420,440); brush.vertex(300,500); brush.vertex(170,450); brush.endShape(true);
  brush.fill("#d6f0f6", 180);
  brush.beginShape(0.5); brush.vertex(270,350); brush.vertex(320,352); brush.vertex(340,410); brush.vertex(290,430); brush.endShape(true);
  // moraine
  brush.fill("#1a1020", 240);
  brush.beginShape(0.5); brush.vertex(0,500); brush.vertex(200,490); brush.vertex(420,505); brush.vertex(600,490); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#e8c050", 170);
  for (let i = 0; i < 20; i++) brush.circle(20 + (i*89)%560, 20 + (i*43)%160, 2.5, 0.3);
}
