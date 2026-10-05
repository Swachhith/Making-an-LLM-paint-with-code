async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0a0e20");
  brush.noStroke();
  // glowing sky down to the horizon at y~450
  brush.fill("#18327e", 235); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 460); brush.vertex(-10, 460);
  brush.endShape(true);
  brush.fill("#2e62c8", 215); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-10, 160); brush.vertex(610, 140); brush.vertex(610, 460); brush.vertex(-10, 460);
  brush.endShape(true);
  brush.fill("#7ab0ee", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.circle(420, 190, 300, 0.4);
  brush.fill("#c8e0f8", 200); brush.fillBleed(0.25); brush.fillTexture(0.3, 0.3);
  brush.circle(420, 190, 150, 0.3);
  brush.fill("#fff4cc", 245); brush.fillBleed(0.1); brush.fillTexture(0.2, 0.2);
  brush.circle(420, 190, 50, 0.1);
  for (let i = 0; i < 16; i++) { brush.fill("#e8eefc", 230); brush.circle(20 + (i * 197) % 570, 15 + (i * 71) % 130, 2, 0.2); }
  // pale far range lit from behind, low horizon
  brush.fill("#3c58a8", 235); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.15);
  brush.vertex(-10, 470); brush.vertex(50, 420); brush.vertex(120, 445); brush.vertex(200, 385); brush.vertex(280, 440);
  brush.vertex(350, 410); brush.vertex(430, 360); brush.vertex(510, 425); brush.vertex(570, 400); brush.vertex(610, 430); brush.vertex(610, 500); brush.vertex(-10, 500);
  brush.endShape(true);
  // darker middle range
  brush.fill("#18235e", 245); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.15);
  brush.vertex(-10, 500); brush.vertex(80, 455); brush.vertex(150, 490); brush.vertex(260, 440); brush.vertex(340, 495);
  brush.vertex(460, 445); brush.vertex(540, 490); brush.vertex(610, 460); brush.vertex(610, 560); brush.vertex(-10, 560);
  brush.endShape(true);
  // moonlit snow caps
  brush.fill("#dcecfa", 220); brush.fillBleed(0.25); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.15);
  brush.vertex(405, 380); brush.vertex(430, 362); brush.vertex(455, 395); brush.vertex(430, 383);
  brush.endShape(true);
  brush.beginShape(0.15);
  brush.vertex(185, 405); brush.vertex(200, 388); brush.vertex(222, 412); brush.vertex(200, 402);
  brush.endShape(true);
  // black foreground
  brush.fill("#04060f", 252); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, 560); brush.vertex(150, 530); brush.vertex(350, 555); brush.vertex(610, 525); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  // moon glitter on a tarn
  brush.fill("#a8c8f0", 190); brush.fillBleed(0.3); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.8);
  brush.vertex(380, 505); brush.vertex(470, 505); brush.vertex(455, 535); brush.vertex(395, 535);
  brush.endShape(true);
}
