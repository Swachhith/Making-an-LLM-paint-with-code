async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6ecd8");
  randomSeed(24);
  brush.noStroke(); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  // deep cobalt sky, low angle so lots of sky above
  brush.fill("#0a3fa8", 235);
  brush.beginShape(0.4); brush.vertex(-60,-60); brush.vertex(660,-60); brush.vertex(660,400); brush.vertex(-60,400); brush.endShape(true);
  brush.fill("#2a7ae0", 200);
  brush.beginShape(0.5); brush.vertex(-60,120); brush.vertex(660,100); brush.vertex(660,400); brush.vertex(-60,400); brush.endShape(true);
  brush.fill("#f4f0ec", 235);
  brush.beginShape(0.6); brush.vertex(380,60); brush.vertex(540,50); brush.vertex(560,100); brush.vertex(400,120); brush.endShape(true);
  // great cliff seen from below, converging
  brush.fill("#8a3a1a", 225);
  brush.beginShape(0.3); brush.vertex(-60,660); brush.vertex(-60,260); brush.vertex(150,330); brush.vertex(150,430); brush.vertex(100,660); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(660,660); brush.vertex(660,230); brush.vertex(470,330); brush.vertex(470,430); brush.vertex(520,660); brush.endShape(true);
  brush.fill("#5a2210", 200);
  brush.beginShape(0.3); brush.vertex(-60,660); brush.vertex(-60,400); brush.vertex(120,470); brush.vertex(60,660); brush.endShape(true);
  // monastery terraces
  brush.fill("#f0b028", 235);
  brush.beginShape(0.15); brush.vertex(150,430); brush.vertex(470,430); brush.vertex(470,330); brush.vertex(150,330); brush.endShape(true);
  brush.fill("#d82a1c", 235);
  brush.beginShape(0.15); brush.vertex(185,330); brush.vertex(290,330); brush.vertex(290,270); brush.vertex(185,270); brush.endShape(true);
  brush.beginShape(0.15); brush.vertex(300,330); brush.vertex(400,330); brush.vertex(400,250); brush.vertex(300,250); brush.endShape(true);
  // roofs
  brush.fill("#8a0a20", 235);
  brush.beginShape(0.15); brush.vertex(170,272); brush.vertex(305,272); brush.vertex(245,215); brush.endShape(true);
  brush.beginShape(0.15); brush.vertex(285,252); brush.vertex(420,252); brush.vertex(355,150); brush.endShape(true);
  brush.fill("#e8a020", 240); brush.circle(355, 128, 8, 0.3);
  // windows
  brush.fill("#1a0818", 235);
  for (let i = 0; i < 6; i++) brush.circle(190 + i * 52, 385, 9, 0.3);
  // base steep shadow
  brush.fill("#18281a", 225);
  brush.beginShape(0.4); brush.vertex(-60,660); brush.vertex(-60,520); brush.vertex(300,560); brush.vertex(660,520); brush.vertex(660,660); brush.endShape(true);
}
