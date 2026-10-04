async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcf4ef");
  randomSeed(121);
  brush.noStroke();
  // wet-in-wet sky bands, deeper at top, glowing near horizon
  let bands = [["#9c6fc0", -20, 120, 190], ["#e8578a", 70, 250, 200], ["#f48aa6", 190, 360, 190], ["#ffb07a", 300, 470, 200]];
  for (let b of bands) {
    brush.fill(b[0], b[3]);
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.6);
    brush.beginShape(0.5);
    brush.vertex(-30, b[1] + random(-15, 15));
    brush.vertex(200, b[1] + random(-25, 25));
    brush.vertex(420, b[1] + random(-25, 25));
    brush.vertex(630, b[1] + random(-15, 15));
    brush.vertex(630, b[2]);
    brush.vertex(-30, b[2]);
    brush.endShape(true);
  }
  // splashes: irregular horizontal cloud blooms
  for (let i = 0; i < 9; i++) {
    let x = random(0, 600), y = random(40, 330), w = random(60, 150);
    brush.fill(random(["#c2407a", "#7a4a9e", "#f06b8a"]), random(160, 210));
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.6);
    brush.beginShape(0.8);
    brush.vertex(x - w, y + random(-5, 5));
    brush.vertex(x - w * 0.3, y - random(15, 30));
    brush.vertex(x + w * 0.5, y - random(10, 25));
    brush.vertex(x + w, y + random(-5, 5));
    brush.vertex(x + w * 0.2, y + random(12, 22));
    brush.endShape(true);
    // a drip falling from its underside
    if (random() < 0.7) {
      let dx = x + random(-w * 0.5, w * 0.5), dl = random(50, 130);
      brush.fill("#c2407a", 180);
      brush.fillBleed(0.2);
      brush.fillTexture(0.4, 0.4);
      brush.beginShape(0.5);
      brush.vertex(dx - 8, y + 10);
      brush.vertex(dx + 8, y + 10);
      brush.vertex(dx + 5, y + dl);
      brush.vertex(dx - 5, y + dl);
      brush.endShape(true);
      brush.fill("#a8306a", 200);
      brush.fillBleed(0.15);
      brush.circle(dx, y + dl + 4, 7, 0.4);
    }
  }
  // flecks / spatter
  for (let i = 0; i < 30; i++) {
    brush.fill(random(["#e8578a", "#9c6fc0", "#ff9a5a"]), 220);
    brush.fillBleed(0.1);
    brush.circle(random(0, 600), random(0, 480), random(2, 6), 0.5);
  }
  // fields, low horizon at 480
  brush.fill("#5f7a3a", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-30, 482); brush.vertex(300, 476); brush.vertex(630, 484); brush.vertex(630, 630); brush.vertex(-30, 630);
  brush.endShape(true);
  brush.fill("#b0703a", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.4);
  brush.vertex(-30, 525); brush.vertex(630, 505); brush.vertex(630, 560); brush.vertex(-30, 580);
  brush.endShape(true);
  brush.fill("#33461f", 210);
  brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(-30, 580); brush.vertex(630, 560); brush.vertex(630, 630); brush.vertex(-30, 630);
  brush.endShape(true);
  // distant trees on horizon
  for (let x = 10; x < 600; x += random(25, 70)) {
    brush.fill("#2e3a24", 220);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.circle(x, 476, random(6, 14), 0.6);
  }
}
