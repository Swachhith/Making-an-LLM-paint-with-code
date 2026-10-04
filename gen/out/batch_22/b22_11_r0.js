async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0f2a3a");
  randomSeed(1111);
  brush.noStroke();
  // a diagonal band of milky light
  brush.fill("#2e7f86", 180);
  brush.fillBleed(0.35);
  brush.fillTexture(0.5, 0.6);
  brush.beginShape(0.9);
  brush.vertex(-30, 380); brush.vertex(-30, 250); brush.vertex(300, 120); brush.vertex(630, -30); brush.vertex(630, 90); brush.vertex(320, 250);
  brush.endShape(true);
  brush.fill("#4aa3a0", 150);
  brush.beginShape(0.9);
  brush.vertex(40, 300); brush.vertex(310, 170); brush.vertex(580, 40); brush.vertex(560, 90); brush.vertex(320, 215); brush.vertex(60, 330);
  brush.endShape(true);
  // indigo pools either side
  brush.fill("#262a6e", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.9);
  brush.vertex(-20, -20); brush.vertex(330, -20); brush.vertex(180, 120); brush.vertex(-20, 190);
  brush.endShape(true);
  brush.beginShape(0.9);
  brush.vertex(620, 180); brush.vertex(460, 260); brush.vertex(420, 380); brush.vertex(620, 400);
  brush.endShape(true);
  // dense stars, thicker in the band
  for (let i = 0; i < 220; i++) {
    let t = random();
    let x = random(0, 600);
    let yBand = 300 - x * 0.5 + randomGaussian(0, 50);
    let y = t < 0.5 ? yBand : random(0, 420);
    if (y < 0 || y > 430) continue;
    brush.fill(random(["#f4fbff", "#fff4d6", "#d8f3f0"]), random(160, 250));
    brush.fillBleed(0.08);
    brush.circle(x, y, random(0.8, 2.6), 0.2);
  }
  for (let i = 0; i < 6; i++) {
    let x = random(30, 570), y = random(30, 360);
    brush.fill("#e9fbff", 130);
    brush.fillBleed(0.3);
    brush.circle(x, y, 9, 0.4);
    brush.fill("#ffffff", 250);
    brush.fillBleed(0.05);
    brush.circle(x, y, 3.5, 0.2);
  }
  // far hills: dark
  brush.fill("#0a1624", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.8);
  brush.vertex(-20, 450); brush.vertex(90, 400); brush.vertex(200, 420); brush.vertex(320, 380); brush.vertex(460, 430); brush.vertex(620, 390); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // near hills: darkest
  brush.fill("#03080f", 250);
  brush.fillBleed(0.15);
  brush.beginShape(0.8);
  brush.vertex(-20, 520); brush.vertex(150, 470); brush.vertex(300, 500); brush.vertex(430, 480); brush.vertex(620, 530); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(-20, 560); brush.vertex(200, 530); brush.vertex(620, 570); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
}
