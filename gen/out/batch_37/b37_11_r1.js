async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f8f0dc");
  brush.noStroke();
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.5);
  brush.fill("#f0b020", 210);
  brush.beginShape(0.3);
  brush.vertex(-40, -40); brush.vertex(640, -40); brush.vertex(640, 400); brush.vertex(-40, 400);
  brush.endShape(true);
  brush.fill("#d4501c", 235);
  brush.beginShape(0.3);
  brush.vertex(-40, 400); brush.vertex(640, 380); brush.vertex(640, 650); brush.vertex(-40, 650);
  brush.endShape(true);
  brush.fill("#2a5ac0", 220);
  brush.beginShape(0.3);
  brush.vertex(-40, 100); brush.vertex(60, 100); brush.vertex(60, 420); brush.vertex(-40, 420);
  brush.endShape(true);
  brush.fill("#6a3a22", 235);
  brush.beginShape(0.8);
  brush.vertex(230, 650); brush.vertex(260, 460); brush.vertex(190, 340); brush.vertex(130, 300); brush.vertex(190, 290); brush.vertex(280, 400); brush.vertex(300, 250); brush.vertex(340, 250); brush.vertex(350, 410); brush.vertex(440, 300); brush.vertex(500, 320); brush.vertex(400, 380); brush.vertex(360, 470); brush.vertex(400, 650);
  brush.endShape(true);
  brush.fill("#0a6a2a", 225);
  brush.beginShape(0.9);
  brush.vertex(20, 300); brush.vertex(60, 120); brush.vertex(200, 20); brush.vertex(380, 15); brush.vertex(540, 80); brush.vertex(600, 250); brush.vertex(480, 340); brush.vertex(300, 300); brush.vertex(140, 360);
  brush.endShape(true);
  brush.fill("#30a838", 195);
  brush.beginShape(0.9);
  brush.vertex(100, 240); brush.vertex(130, 120); brush.vertex(260, 60); brush.vertex(430, 80); brush.vertex(520, 170); brush.vertex(460, 260); brush.vertex(300, 240);
  brush.endShape(true);
  brush.fill("#0e4a20", 200);
  brush.beginShape(0.9);
  brush.vertex(40, 300); brush.vertex(200, 270); brush.vertex(330, 320); brush.vertex(150, 360);
  brush.endShape(true);
  for (let i = 0; i < 12; i++) {
    brush.fill(i % 2 ? "#7a1a78" : "#4a0e5a", 235);
    brush.circle(90 + (i * 79) % 440, 110 + (i * 61) % 190, 15, 0.7);
  }
  brush.fill("#e8d8b8", 255);
  brush.beginShape(0.3);
  brush.vertex(480, 520); brush.vertex(600, 520); brush.vertex(600, 650); brush.vertex(480, 650);
  brush.endShape(true);
  brush.fill("#20a0a8", 215);
  brush.beginShape(0.5);
  brush.vertex(30, 500); brush.vertex(140, 490); brush.vertex(150, 600); brush.vertex(40, 610);
  brush.endShape(true);
}
