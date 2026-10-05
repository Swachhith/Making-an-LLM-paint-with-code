async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef2f0");
  brush.noStroke();
  // sky
  brush.fill("#1070d8", 225); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 250); brush.vertex(-10, 250);
  brush.endShape(true);
  brush.fill("#f4a020", 170);
  brush.beginShape(0.5);
  brush.vertex(150, 160); brush.vertex(460, 150); brush.vertex(470, 260); brush.vertex(140, 260);
  brush.endShape(true);
  // distant peaks
  brush.fill("#5a3ac0", 215);
  brush.beginShape(0.3);
  brush.vertex(210, 262); brush.vertex(270, 190); brush.vertex(310, 215); brush.vertex(350, 175); brush.vertex(410, 262);
  brush.endShape(true);
  // fjord water, perspective narrowing
  brush.fill("#0a6a8a", 230); brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(275, 255); brush.vertex(330, 255); brush.vertex(560, 610); brush.vertex(40, 610);
  brush.endShape(true);
  brush.fill("#10b0c0", 200);
  brush.beginShape(0.5);
  brush.vertex(290, 270); brush.vertex(320, 270); brush.vertex(430, 610); brush.vertex(190, 610);
  brush.endShape(true);
  brush.fill("#f8d048", 190);
  brush.beginShape(0.5);
  brush.vertex(298, 300); brush.vertex(314, 300); brush.vertex(350, 420); brush.vertex(268, 420);
  brush.endShape(true);
  // left cliff, three passes
  brush.fill("#7a1a9a", 230); brush.fillBleed(0.25);
  brush.beginShape(0.3);
  brush.vertex(-10, 20); brush.vertex(130, 80); brush.vertex(240, 220); brush.vertex(280, 256); brush.vertex(60, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#1a2aa8", 215);
  brush.beginShape(0.3);
  brush.vertex(-10, 140); brush.vertex(100, 160); brush.vertex(220, 258); brush.vertex(140, 470); brush.vertex(-10, 540);
  brush.endShape(true);
  brush.fill("#e82a50", 190);
  brush.beginShape(0.4);
  brush.vertex(-10, 290); brush.vertex(80, 280); brush.vertex(110, 420); brush.vertex(-10, 480);
  brush.endShape(true);
  brush.fill("#0e1450", 190);
  brush.beginShape(0.4);
  brush.vertex(110, 420); brush.vertex(200, 300); brush.vertex(220, 258); brush.vertex(150, 500); brush.vertex(70, 610); brush.vertex(40, 610);
  brush.endShape(true);
  // right cliff
  brush.fill("#d85010", 230); brush.fillBleed(0.25);
  brush.beginShape(0.3);
  brush.vertex(610, -10); brush.vertex(480, 100); brush.vertex(380, 225); brush.vertex(330, 256); brush.vertex(540, 610); brush.vertex(610, 610);
  brush.endShape(true);
  brush.fill("#a01848", 215);
  brush.beginShape(0.3);
  brush.vertex(610, 130); brush.vertex(500, 185); brush.vertex(400, 262); brush.vertex(470, 450); brush.vertex(610, 520);
  brush.endShape(true);
  brush.fill("#4a0e38", 190);
  brush.beginShape(0.4);
  brush.vertex(470, 450); brush.vertex(420, 300); brush.vertex(400, 262); brush.vertex(520, 520); brush.vertex(560, 610); brush.vertex(500, 610);
  brush.endShape(true);
}
