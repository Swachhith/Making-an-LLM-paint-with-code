async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef2f6");
  randomSeed(6);
  brush.noStroke(); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  // big sky
  brush.fill("#1a78d8", 200);
  brush.beginShape(0.4); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,380); brush.vertex(0,380); brush.endShape(true);
  brush.fill("#f09a5a", 170);
  brush.beginShape(0.5); brush.vertex(0,290); brush.vertex(600,280); brush.vertex(600,400); brush.vertex(0,400); brush.endShape(true);
  brush.fill("#e8f0f8", 200);
  brush.beginShape(0.6); brush.vertex(60,90); brush.vertex(260,70); brush.vertex(300,130); brush.vertex(120,150); brush.endShape(true);
  // dark cliffs
  brush.fill("#2a2a4a", 220);
  brush.beginShape(0.3); brush.vertex(0,600); brush.vertex(0,330); brush.vertex(170,320); brush.vertex(200,420); brush.vertex(190,600); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(600,600); brush.vertex(600,320); brush.vertex(400,330); brush.vertex(390,430); brush.vertex(410,600); brush.endShape(true);
  // frozen fall: icy
  brush.fill("#40c8e0", 210);
  brush.beginShape(0.5); brush.vertex(200,360); brush.vertex(390,360); brush.vertex(380,560); brush.vertex(210,560); brush.endShape(true);
  brush.fill("#b8f0f8", 200);
  for (let i = 0; i < 5; i++) { let x = 220 + i * 36; brush.beginShape(0.4); brush.vertex(x,370); brush.vertex(x+22,370); brush.vertex(x+18,540); brush.vertex(x+2,540); brush.endShape(true); }
  brush.fill("#1a60b0", 190);
  brush.beginShape(0.5); brush.vertex(190,540); brush.vertex(420,540); brush.vertex(480,600); brush.vertex(140,600); brush.endShape(true);
}
