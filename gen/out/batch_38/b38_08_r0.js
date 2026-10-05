async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f0e6c8");
  brush.noStroke();
  brush.fill("#f0b53a", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0,0); brush.vertex(600,0); brush.vertex(600,320); brush.vertex(0,320); brush.endShape(true);
  brush.fill("#e07a1f", 180);
  brush.beginShape(0.5); brush.vertex(0,180); brush.vertex(600,170); brush.vertex(600,320); brush.vertex(0,320); brush.endShape(true);
  brush.fill("#fbe08a", 220);
  brush.circle(300, 230, 44, 0.5);
  // forest trunks and canopy left/right
  brush.fill("#1f4a2a", 210); brush.fillBleed(0.25);
  brush.beginShape(0.8); brush.vertex(0,0); brush.vertex(190,0); brush.vertex(150,140); brush.vertex(200,300); brush.vertex(0,320); brush.endShape(true);
  brush.beginShape(0.8); brush.vertex(600,0); brush.vertex(410,0); brush.vertex(450,150); brush.vertex(400,300); brush.vertex(600,320); brush.endShape(true);
  brush.fill("#0f2f1c", 220);
  for (const x of [60, 130, 470, 540]) { brush.beginShape(0.2); brush.vertex(x,40); brush.vertex(x+26,40); brush.vertex(x+30,320); brush.vertex(x-6,320); brush.endShape(true); }
  brush.fill("#2f6a3a", 190);
  brush.beginShape(0.8); brush.vertex(0,300); brush.vertex(600,300); brush.vertex(600,340); brush.vertex(0,340); brush.endShape(true);
  // water reflection
  brush.fill("#c88a2a", 180);
  brush.beginShape(0.6); brush.vertex(0,330); brush.vertex(600,330); brush.vertex(600,600); brush.vertex(0,600); brush.endShape(true);
  brush.fill("#e8a830", 190);
  brush.beginShape(0.6); brush.vertex(150,340); brush.vertex(450,340); brush.vertex(430,560); brush.vertex(170,570); brush.endShape(true);
  brush.fill("#143a24", 210);
  brush.beginShape(0.8); brush.vertex(0,340); brush.vertex(170,340); brush.vertex(190,600); brush.vertex(0,600); brush.endShape(true);
  brush.beginShape(0.8); brush.vertex(600,340); brush.vertex(430,340); brush.vertex(410,600); brush.vertex(600,600); brush.endShape(true);
  brush.fill("#fbe08a", 220);
  brush.circle(300, 400, 38, 0.8);
}
