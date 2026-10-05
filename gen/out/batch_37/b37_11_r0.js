async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7efdc");
  brush.noStroke();
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.fill("#e8b838", 190);
  brush.beginShape(0.5);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 350); brush.vertex(0, 350);
  brush.endShape(true);
  brush.fill("#d8602c", 230);
  brush.beginShape(0.5);
  brush.vertex(0, 380); brush.vertex(600, 380); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  brush.fill("#4a2a1a", 230);
  brush.beginShape(0.9);
  brush.vertex(240, 600); brush.vertex(270, 400); brush.vertex(200, 270); brush.vertex(260, 340); brush.vertex(300, 250); brush.vertex(340, 340); brush.vertex(410, 260); brush.vertex(340, 410); brush.vertex(380, 600);
  brush.endShape(true);
  brush.fill("#0e6a28", 220);
  brush.beginShape(0.9);
  brush.vertex(40, 280); brush.vertex(100, 100); brush.vertex(300, 30); brush.vertex(500, 90); brush.vertex(570, 260); brush.vertex(420, 340); brush.vertex(300, 300); brush.vertex(150, 350);
  brush.endShape(true);
  brush.fill("#2a9a30", 200);
  brush.beginShape(0.9);
  brush.vertex(100, 230); brush.vertex(150, 120); brush.vertex(300, 80); brush.vertex(450, 130); brush.vertex(500, 230); brush.vertex(300, 270);
  brush.endShape(true);
  brush.fill("#6a1a6a", 230);
  for (let i = 0; i < 9; i++) brush.circle(110 + i * 48, 170 + ((i * 61) % 110), 16, 0.7);
  brush.fill("#1a3a80", 210);
  brush.beginShape(0.6);
  brush.vertex(0, 480); brush.vertex(120, 480); brush.vertex(120, 600); brush.vertex(0, 600);
  brush.endShape(true);
}
