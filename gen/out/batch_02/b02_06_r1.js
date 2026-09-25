async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4f6f8");
  randomSeed(62);

  // two stems: the open flower on the left, the bud nodding at right
  brush.noStroke();
  brush.fillTexture(0.3, 0.5);
  brush.fill("#8aa39a", 222);
  brush.fillBleed(0.05, "out");
  brush.beginShape(1);
  brush.vertex(190, 300);
  brush.vertex(220, 450);
  brush.vertex(250, 600);
  brush.vertex(260, 600);
  brush.vertex(230, 450);
  brush.vertex(200, 300);
  brush.endShape(true);
  brush.beginShape(1);
  brush.vertex(290, 600);
  brush.vertex(330, 420);
  brush.vertex(410, 300);
  brush.vertex(450, 330);
  brush.vertex(452, 345);
  brush.vertex(414, 312);
  brush.vertex(340, 425);
  brush.vertex(300, 600);
  brush.endShape(true);

  // the closed bud: hairy grey-green ovoid hanging down
  brush.fill("#9fb3a8", 212);
  brush.fillBleed(0.2, "out");
  brush.fillTexture(0.6, 0.6);
  brush.beginShape(0.9);
  brush.vertex(450, 340);
  brush.vertex(490, 360);
  brush.vertex(495, 420);
  brush.vertex(465, 450);
  brush.vertex(435, 420);
  brush.vertex(432, 365);
  brush.endShape(true);
  // white petal peeking from the split
  brush.fill("#ffffff", 232);
  brush.fillBleed(0.1, "out");
  brush.beginShape(0.8);
  brush.vertex(462, 380);
  brush.vertex(478, 420);
  brush.vertex(464, 446);
  brush.vertex(455, 410);
  brush.endShape(true);
  for (let k = 0; k < 10; k++) {
    brush.fill("#6f887d", 205);
    brush.fillBleed(0.02, "out");
    brush.circle(440 + random(0, 50), 355 + random(0, 80), 2, true);
  }

  // the open poppy built from many small overlapping cool strokes
  let cx = 195, cy = 230;
  for (let i = 0; i < 4; i++) {
    let a = 20 + i * 90;
    brush.fill("#c9d2e0", 200);
    brush.fillBleed(0.3, "out");
    brush.fillTexture(0.6, 0.8);
    brush.beginShape(0.8);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 48) * 130, cy + sin(a - 48) * 120);
    brush.vertex(cx + cos(a) * 175, cy + sin(a) * 160);
    brush.vertex(cx + cos(a + 48) * 130, cy + sin(a + 48) * 120);
    brush.endShape(true);
  }
  for (let i = 0; i < 70; i++) {
    let a = random(360);
    let r1 = random(30, 70);
    let r2 = random(110, 160);
    let w = random(10, 22);
    let col = random() < 0.6 ? "#d5dce6" : "#c1c9d9";
    brush.fill(col, random(150, 200));
    brush.fillBleed(random(0.1, 0.3), "out");
    brush.fillTexture(0.5, 0.6);
    brush.beginShape(0.7);
    brush.vertex(cx + cos(a - w * 0.3) * r1, cy + sin(a - w * 0.3) * r1);
    brush.vertex(cx + cos(a - w * 0.5) * r2, cy + sin(a - w * 0.5) * r2 * 0.9);
    brush.vertex(cx + cos(a + w * 0.5) * r2, cy + sin(a + w * 0.5) * r2 * 0.9);
    brush.vertex(cx + cos(a + w * 0.3) * r1, cy + sin(a + w * 0.3) * r1);
    brush.endShape(true);
  }
  // white highlights restored over the strokes
  for (let i = 0; i < 9; i++) {
    let a = random(360);
    let r = random(60, 130);
    brush.fill("#fdfeff", 222);
    brush.fillBleed(0.15, "out");
    brush.circle(cx + cos(a) * r, cy + sin(a) * r * 0.9, random(12, 26), true);
  }

  // centre: pale green pod with a dark stamen ring
  for (let i = 0; i < 40; i++) {
    let a = random(360);
    let r = random(26, 40);
    brush.fill("#2e3148", 212);
    brush.fillBleed(0.03, "out");
    brush.circle(cx + cos(a) * r, cy + sin(a) * r, random(2, 4), true);
  }
  brush.fill("#b7c7a4", 232);
  brush.fillBleed(0.15, "out");
  brush.circle(cx, cy, 20, true);
  brush.fill("#6c7486", 212);
  brush.fillBleed(0.05, "out");
  brush.circle(cx, cy, 6, true);
}
