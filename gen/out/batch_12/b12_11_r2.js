async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0b0c11");
  randomSeed(11011);
  brush.noStroke();
  // slight indigo lift in the sky so black rocks read against it
  brush.fill("#243052", 190);
  brush.fillBleed(0.35);
  brush.fillTexture(0.55, 0.55);
  brush.beginShape(0.6);
  brush.vertex(-20, 250); brush.vertex(620, 230); brush.vertex(620, 520); brush.vertex(-20, 520);
  brush.endShape(true);
  for (let i = 0; i < 160; i++) {
    brush.fill("#f7efd8", random(170, 255));
    brush.fillBleed(0.03);
    brush.circle(random(0, 600), random(0, 500), random(0.6, 2), 0.2);
  }
  // a band of milky way diagonally
  for (let i = 0; i < 60; i++) {
    let t = random();
    brush.fill("#d8d4c8", random(160, 230));
    brush.fillBleed(0.05);
    brush.circle(lerp(0, 600, t) + random(-40, 40), lerp(40, 260, t) + random(-30, 30), random(0.6, 1.4), 0.2);
  }
  // sea: dark ink with a band of slate
  brush.fill("#1a2436", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.1);
  brush.vertex(-20, 470); brush.vertex(620, 470); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // tall slender tower on a high rock, right third
  let x = 420, topY = 110, base = 440;
  for (let p = 0; p < 3; p++) {
    brush.fill("#ece2cc", 250);
    brush.fillBleed(0.05);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.02);
    brush.vertex(x - 14, topY + 40); brush.vertex(x + 14, topY + 40); brush.vertex(x + 24, base); brush.vertex(x - 24, base);
    brush.endShape(true);
  }
  brush.fill("#0b0c11", 220);
  brush.fillBleed(0.08);
  brush.beginShape(0.02);
  brush.vertex(x + 3, topY + 40); brush.vertex(x + 14, topY + 40); brush.vertex(x + 24, base); brush.vertex(x + 8, base);
  brush.endShape(true);
  // lamp glow: soft warm halo then hot core
  brush.fill("#8a5418", 200);
  brush.fillBleed(0.35);
  brush.fillTexture(0.55, 0.55);
  brush.circle(x, topY + 22, 70, 0.4);
  for (let p = 0; p < 2; p++) {
    brush.fill("#ffb238", 255);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.circle(x, topY + 22, 22, 0.25);
  }
  brush.fill("#fff2c0", 255);
  brush.fillBleed(0.05);
  brush.circle(x, topY + 22, 9, 0.2);
  brush.fill("#050507", 250);
  brush.beginShape(0.05);
  brush.vertex(x - 20, topY + 6); brush.vertex(x, topY - 16); brush.vertex(x + 20, topY + 6);
  brush.endShape(true);
  // two thin warm beams, left and right
  for (let s of [-1, 1]) {
    brush.fill("#d99a36", 190);
    brush.fillBleed(0.3);
    brush.fillTexture(0.55, 0.55);
    brush.beginShape(0.2);
    brush.vertex(x + s * 12, topY + 16); brush.vertex(s < 0 ? -20 : 620, topY - 20); brush.vertex(s < 0 ? -20 : 620, topY + 50); brush.vertex(x + s * 12, topY + 28);
    brush.endShape(true);
  }
  // black rock stack
  brush.fill("#020203", 255);
  brush.fillBleed(0.15);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, 560); brush.vertex(200, 540); brush.vertex(330, 470); brush.vertex(380, 430); brush.vertex(470, 432); brush.vertex(520, 480); brush.vertex(620, 520); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // cottage window at base and long warm reflection streaks
  brush.fill("#ffac3a", 255);
  brush.fillBleed(0.05);
  brush.circle(x - 50, 452, 4, 0.1);
  brush.circle(x - 38, 452, 4, 0.1);
  for (let i = 0; i < 8; i++) {
    let yy = 480 + i * 9, xx = 150 + random(-30, 30);
    brush.fill("#c88428", 220);
    brush.fillBleed(0.1);
    brush.beginShape(0.5);
    brush.vertex(xx - 18, yy); brush.vertex(xx + 18, yy); brush.vertex(xx + 14, yy + 3); brush.vertex(xx - 14, yy + 3);
    brush.endShape(true);
  }
}
