async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#1a1440");
  randomSeed(1806);
  brush.noStroke();

  // violet haze around moon
  brush.fill("#5a3f9e", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(420, 170, 190, 0.5);
  brush.fill("#8a73c8", 170);
  brush.circle(420, 170, 130, 0.4);
  // the moon, large, off-centre
  brush.fill("#f2eedc", 250);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.circle(420, 170, 96, 0.15);
  brush.fill("#d8d2c0", 170);
  brush.circle(395, 150, 20, 0.4);
  brush.circle(450, 200, 14, 0.4);

  // meadow, deep blue
  brush.fill("#0e1a4a", 240);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(0, 400); brush.vertex(200, 380); brush.vertex(420, 410); brush.vertex(600, 390);
  brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  // grass tufts
  for (let i = 0; i < 26; i++) {
    let x = random(0, 600), y = random(430, 600);
    brush.fill("#050a28", 220);
    brush.fillBleed(0.2);
    brush.beginShape(0.3);
    brush.vertex(x - 12, y); brush.vertex(x - 4, y - random(40, 80)); brush.vertex(x + 3, y - 8);
    brush.vertex(x + 10, y - random(30, 60)); brush.vertex(x + 14, y);
    brush.endShape(true);
  }
  // fireflies: glow halo then bright core
  for (let i = 0; i < 34; i++) {
    let x = random(20, 580), y = random(260, 560);
    brush.fill("#c8e04a", 150);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.circle(x, y, random(8, 13), 0.3);
    brush.fill("#fbffb0", 240);
    brush.fillBleed(0.1);
    brush.circle(x, y, random(2, 3.5), 0.2);
  }
}
