async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3ead6");
  brush.noStroke();
  // crimson sky
  brush.fill("#a8142e", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#6e0c20", 170); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(-10, -10); brush.vertex(400, -10); brush.vertex(250, 200); brush.vertex(-10, 300);
  brush.endShape(true);
  // ground black
  brush.fill("#1a0c10", 230); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(-10, 480); brush.vertex(200, 460); brush.vertex(400, 490); brush.vertex(610, 470); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  // cottage walls
  brush.fill("#2a1418", 215); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.3);
  brush.vertex(90, 500); brush.vertex(90, 290); brush.vertex(480, 290); brush.vertex(480, 500);
  brush.endShape(true);
  brush.fill("#4a1f26", 190); brush.fillBleed(0.2); brush.fillTexture(0.5, 0.5);
  for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) {
    brush.circle(115 + c * 62 + (r % 2) * 25, 315 + r * 48, 22, 0.8);
  }
  // roof
  brush.fill("#0e0608", 235); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(60, 300); brush.vertex(285, 130); brush.vertex(510, 300);
  brush.endShape(true);
  // chimney
  brush.fill("#2a1418", 230); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(380, 220); brush.vertex(380, 110); brush.vertex(430, 110); brush.vertex(430, 250);
  brush.endShape(true);
  // smoke, dark curl on crimson
  brush.fill("#3a0812", 150); brush.fillBleed(0.3); brush.fillTexture(0.3, 0.3);
  brush.circle(405, 80, 24, 0.7); brush.circle(425, 45, 32, 0.7); brush.circle(455, 15, 36, 0.7);
  // cream window and door glow
  brush.fill("#f7e6b8", 240); brush.fillBleed(0.2); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(150, 360); brush.vertex(150, 420); brush.vertex(215, 420); brush.vertex(215, 360);
  brush.endShape(true);
  brush.fill("#0e0608", 220); brush.fillBleed(0.2); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(300, 500); brush.vertex(300, 390); brush.vertex(370, 390); brush.vertex(370, 500);
  brush.endShape(true);
}
