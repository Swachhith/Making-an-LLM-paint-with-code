async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef2f4");
  brush.noStroke();

  // sky wash
  brush.fill("#9fc0d8", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.2);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 330); brush.vertex(-20, 360);
  brush.endShape(true);

  // far ridge
  brush.fill("#7fa2c4", 180);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 330); brush.vertex(60, 290); brush.vertex(140, 310); brush.vertex(330, 250);
  brush.vertex(460, 280); brush.vertex(540, 240); brush.vertex(620, 270); brush.vertex(620, 420); brush.vertex(-20, 420);
  brush.endShape(true);

  // the big peak, off-centre right: lit side
  brush.fill("#4d78a8", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.1);
  brush.vertex(150, 470); brush.vertex(300, 230); brush.vertex(390, 80); brush.vertex(430, 140);
  brush.vertex(520, 260); brush.vertex(620, 360); brush.vertex(620, 480);
  brush.endShape(true);

  // shadow side of peak, deep
  for (let i = 0; i < 2; i++) {
    brush.fill(i === 0 ? "#1f3a66" : "#0f2244", 220);
    brush.fillBleed(0.22);
    brush.fillTexture(0.45, 0.5);
    brush.beginShape(0.15);
    brush.vertex(390 + i * 4, 82 + i * 10); brush.vertex(430, 150); brush.vertex(470, 200);
    brush.vertex(520, 262); brush.vertex(620, 360); brush.vertex(620, 480); brush.vertex(410, 480);
    brush.vertex(400 - i * 10, 330); brush.vertex(420, 230); brush.vertex(395, 150);
    brush.endShape(true);
  }

  // mid ridge
  brush.fill("#2e5585", 210);
  brush.fillBleed(0.28);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 420); brush.vertex(80, 360); brush.vertex(190, 400); brush.vertex(280, 380);
  brush.vertex(380, 430); brush.vertex(500, 410); brush.vertex(620, 440); brush.vertex(620, 520); brush.vertex(-20, 520);
  brush.endShape(true);

  // front ridge, darkest
  for (let i = 0; i < 2; i++) {
    brush.fill("#0c1a33", 230 - i * 20);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.4);
    brush.vertex(-20, 490 + i * 15); brush.vertex(120, 460 + i * 10); brush.vertex(240, 500); brush.vertex(360, 480);
    brush.vertex(470, 520); brush.vertex(620, 490); brush.vertex(620, 620); brush.vertex(-20, 620);
    brush.endShape(true);
  }
}
