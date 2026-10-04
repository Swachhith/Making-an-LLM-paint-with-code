async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f9f2e4");

  brush.noStroke();
  brush.fill("#3b8fe0", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 200);
  brush.vertex(-20, 190);
  brush.endShape(true);

  brush.fill("#5a6fc8", 200);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 225);
  brush.vertex(90, 180);
  brush.vertex(200, 205);
  brush.vertex(330, 170);
  brush.vertex(470, 200);
  brush.vertex(620, 180);
  brush.vertex(620, 245);
  brush.vertex(-20, 245);
  brush.endShape(true);

  brush.fill("#2e8c4a", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.45, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, 250);
  brush.vertex(150, 228);
  brush.vertex(330, 240);
  brush.vertex(470, 225);
  brush.vertex(620, 238);
  brush.vertex(620, 300);
  brush.vertex(-20, 300);
  brush.endShape(true);

  brush.fill("#f0b21a", 220);
  brush.fillBleed(0.25);
  brush.beginShape(0.3);
  brush.vertex(-20, 290);
  brush.vertex(300, 282);
  brush.vertex(-20, 420);
  brush.endShape(true);

  brush.fill("#6fb02c", 220);
  brush.beginShape(0.3);
  brush.vertex(310, 282);
  brush.vertex(620, 290);
  brush.vertex(620, 400);
  brush.endShape(true);

  brush.fill("#d9471f", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.3);
  brush.vertex(-20, 410);
  brush.vertex(295, 288);
  brush.vertex(230, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);

  brush.fill("#1f7a3a", 215);
  brush.beginShape(0.3);
  brush.vertex(620, 390);
  brush.vertex(318, 288);
  brush.vertex(400, 620);
  brush.vertex(620, 620);
  brush.endShape(true);

  brush.fill("#c9a27a", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.1);
  brush.vertex(298, 284);
  brush.vertex(314, 284);
  brush.vertex(420, 620);
  brush.vertex(200, 620);
  brush.endShape(true);

  brush.fill("#8a6444", 150);
  brush.beginShape(0.3);
  brush.vertex(304, 300);
  brush.vertex(312, 300);
  brush.vertex(330, 620);
  brush.vertex(290, 620);
  brush.endShape(true);

  brush.fill("#1c5fb0", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(80, 40, 70, 0.9);
  brush.circle(500, 70, 60, 0.9);
  brush.fill("#0a5a24", 190);
  brush.fillBleed(0.25);
  brush.beginShape(0.3);
  brush.vertex(620, 460);
  brush.vertex(420, 360);
  brush.vertex(470, 620);
  brush.vertex(620, 620);
  brush.endShape(true);
  brush.fill("#a8300e", 180);
  brush.beginShape(0.3);
  brush.vertex(-20, 500);
  brush.vertex(200, 380);
  brush.vertex(150, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  randomSeed(2409);
  let trees = [[250, 270, 10], [360, 268, 12], [420, 250, 14], [120, 262, 16], [520, 250, 18]];
  for (let t of trees) {
    brush.fill("#0f4a22", 220);
    brush.fillBleed(0.25);
    brush.circle(t[0], t[1] - t[2], t[2], 0.5);
  }
  for (let i = 0; i < 20; i++) {
    let y = random(430, 600);
    brush.fill("#8a1a0e", 180);
    brush.fillBleed(0.2);
    brush.circle(random(0, 200 - (600 - y) * 0.2), y, random(4, 9), 0.4);
  }
}
