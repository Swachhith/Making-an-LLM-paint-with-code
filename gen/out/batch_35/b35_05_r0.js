async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f0e8f0");
  randomSeed(5);
  brush.noStroke(); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  // dusk sky
  brush.fill("#5a2a9a", 210);
  brush.beginShape(0.4); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,300); brush.vertex(0,300); brush.endShape(true);
  brush.fill("#e8503a", 190);
  brush.beginShape(0.5); brush.vertex(0,200); brush.vertex(600,180); brush.vertex(600,320); brush.vertex(0,330); brush.endShape(true);
  brush.fill("#f0a040", 180);
  brush.beginShape(0.5); brush.vertex(100,260); brush.vertex(500,250); brush.vertex(480,320); brush.vertex(120,330); brush.endShape(true);
  // big peak off-centre left
  brush.fill("#2a2a8a", 215);
  brush.beginShape(0.2); brush.vertex(-20,600); brush.vertex(120,260); brush.vertex(210,60); brush.vertex(300,250); brush.vertex(470,600); brush.endShape(true);
  // snow slope lit pink
  brush.fill("#f0b0c0", 200);
  brush.beginShape(0.3); brush.vertex(210,60); brush.vertex(300,250); brush.vertex(340,420); brush.vertex(240,300); brush.vertex(190,140); brush.endShape(true);
  // far ridge right
  brush.fill("#4a3a9a", 200);
  brush.beginShape(0.3); brush.vertex(380,420); brush.vertex(480,330); brush.vertex(600,380); brush.vertex(600,600); brush.vertex(380,600); brush.endShape(true);
  // ski run white band & trees
  brush.fill("#c8d8f0", 200);
  brush.beginShape(0.5); brush.vertex(120,600); brush.vertex(190,380); brush.vertex(260,380); brush.vertex(330,600); brush.endShape(true);
  brush.fill("#0e2a2a", 225);
  for (let i = 0; i < 12; i++) { let x = i < 6 ? 50 + i * 20 : 400 + (i - 6) * 25; let y = 450 + random(0, 100); brush.beginShape(0.3); brush.vertex(x,y); brush.vertex(x+20,y); brush.vertex(x+10,y-50); brush.endShape(true); }
  // lift lights
  brush.fill("#ffb030", 235); brush.circle(300, 400, 5, 0.3); brush.circle(420, 380, 4, 0.3);
}
