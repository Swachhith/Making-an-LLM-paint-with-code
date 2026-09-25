async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7eef0");
  brush.noStroke();
  randomSeed(410);

  // leaves at bottom right, bold green
  brush.fill("#2e7d4f", 210);
  brush.fillBleed(0.35, "out");
  brush.fillTexture(0.5, 0.6);
  brush.beginShape(0.7);
  brush.vertex(330, 420);
  brush.vertex(470, 470);
  brush.vertex(540, 560);
  brush.vertex(420, 520);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(290, 430);
  brush.vertex(180, 500);
  brush.vertex(120, 580);
  brush.vertex(230, 530);
  brush.endShape(true);
  brush.fill("#3c6b2a", 220);
  brush.beginShape(0.4);
  brush.vertex(296, 420);
  brush.vertex(308, 420);
  brush.vertex(312, 600);
  brush.vertex(298, 600);
  brush.endShape(true);

  // a round bud on a side stem, left
  brush.fill("#3c6b2a", 210);
  brush.beginShape(0.5);
  brush.vertex(300, 470);
  brush.vertex(120, 250);
  brush.vertex(128, 246);
  brush.vertex(310, 460);
  brush.endShape(true);
  brush.fill("#e8487e", 215);
  brush.fillBleed(0.3, "out");
  brush.circle(118, 232, 34, true);
  brush.fill("#2e7d4f", 215);
  brush.circle(128, 258, 16, true);

  // big ruffled dome built from many overlapping blobs
  for (let i = 0; i < 40; i++) {
    const a = random(180, 360);
    const r = random(40, 150);
    const x = 300 + cos(a) * r * 1.3;
    const y = 320 + sin(a) * r;
    brush.fill(random() < 0.5 ? "#f25c8a" : "#ff85a8", 170 + random(50));
    brush.fillBleed(0.4, "out");
    brush.fillTexture(0.5, 0.7);
    brush.circle(x, y, random(35, 60), true);
  }
  // lower cup of guard petals
  brush.fill("#e0306a", 215);
  brush.fillBleed(0.3, "out");
  brush.beginShape(0.9);
  brush.vertex(120, 320);
  brush.vertex(300, 350);
  brush.vertex(480, 320);
  brush.vertex(430, 410);
  brush.vertex(300, 440);
  brush.vertex(170, 410);
  brush.endShape(true);
  brush.fill("#c41c58", 220);
  brush.fillBleed(0.15, "in");
  brush.beginShape(0.9);
  brush.vertex(180, 370);
  brush.vertex(300, 385);
  brush.vertex(420, 370);
  brush.vertex(300, 430);
  brush.endShape(true);

  // petal rims catching light: pale pink crescents on top of the dome
  brush.fill("#ffc2d3", 200);
  brush.fillBleed(0.1, "in");
  for (let k = 0; k < 7; k++) {
    const x = 180 + k * 40;
    const y = 230 + abs(k - 3) * 14;
    brush.beginShape(0.9);
    brush.vertex(x - 22, y + 6);
    brush.vertex(x, y - 8);
    brush.vertex(x + 22, y + 6);
    brush.vertex(x, y);
    brush.endShape(true);
  }

  // deep shadows where ruffles meet
  brush.fill("#a8124a", 200);
  for (let k = 0; k < 8; k++) brush.circle(200 + k * 28, 300 + random(-30, 20), random(6, 12), true);
}
