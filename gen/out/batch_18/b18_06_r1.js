async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0b0a26");
  randomSeed(1806);
  brush.noStroke();

  // sky: blue-violet washes, lighter than the paper; meadow left as dark paper
  brush.fill("#3c3a9a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.5);
  brush.beginShape(0.7);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 390); brush.vertex(420, 405); brush.vertex(200, 378); brush.vertex(0, 400);
  brush.endShape(true);
  brush.fill("#6a4aae", 190);
  brush.circle(410, 180, 200, 0.5);
  brush.fill("#9a82d0", 170);
  brush.circle(410, 180, 140, 0.4);
  // moon, large and off-centre
  brush.fill("#f6f0da", 255);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.circle(410, 180, 105, 0.12);
  brush.fill("#f6f0da", 230);
  brush.circle(410, 180, 95, 0.1);
  brush.fill("#c9c2b4", 150);
  brush.circle(385, 158, 20, 0.4);
  brush.circle(440, 210, 15, 0.4);
  brush.circle(430, 140, 10, 0.4);

  // a few trees on the meadow's horizon
  let trees = [[70, 60], [150, 45], [560, 50]];
  for (let T of trees) {
    brush.fill("#07061c", 250);
    brush.fillBleed(0.2);
    brush.circle(T[0], 390 - T[1] * 0.6, T[1] * 0.7, 0.5);
  }
  // grass tufts slightly lighter than paper, violet
  for (let i = 0; i < 22; i++) {
    let x = random(0, 600), y = random(470, 610);
    brush.fill("#2a1f60", 200);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.3);
    brush.vertex(x - 16, y); brush.vertex(x - 6, y - random(40, 80)); brush.vertex(x + 2, y - 10);
    brush.vertex(x + 12, y - random(30, 60)); brush.vertex(x + 18, y);
    brush.endShape(true);
  }
  // fireflies on the dark meadow and low sky
  for (let i = 0; i < 40; i++) {
    let x = random(20, 580), y = random(330, 580);
    brush.fill("#d8f060", 170);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.circle(x, y, random(9, 14), 0.3);
    brush.fill("#ffffc8", 255);
    brush.fillBleed(0.1);
    brush.circle(x, y, random(3, 4.5), 0.15);
  }
}
