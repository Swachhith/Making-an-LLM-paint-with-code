async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef4f6");
  randomSeed(111);
  brush.noStroke();

  // cool light: pale blue-green wash across the ground
  brush.fill("#a8c8d8", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(0, 500); brush.vertex(600, 470); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  // a few darker teal pools in the lower right
  brush.fill("#7aa3b8", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(400, 520); brush.vertex(520, 500); brush.vertex(560, 550); brush.vertex(440, 570);
  brush.endShape(true);

  // stems
  brush.fill("#3f7a5a", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(310, 530); brush.vertex(310, 250); brush.vertex(330, 250); brush.vertex(330, 530);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(460, 530); brush.vertex(460, 330); brush.vertex(480, 330); brush.vertex(480, 530);
  brush.endShape(true);

  // open white poppy: six broad petals, cool shadow inside
  const cx = 310, cy = 250;
  for (let k = 0; k < 6; k++) {
    const a = k * 60 + random(-6, 6);
    const len = random(120, 140);
    brush.fill("#f4f4f8", 220);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.6);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 25) * len * 0.8, cy + sin(a - 25) * len * 0.8);
    brush.vertex(cx + cos(a - 10) * len, cy + sin(a - 10) * len);
    brush.vertex(cx + cos(a + 10) * len, cy + sin(a + 10) * len);
    brush.vertex(cx + cos(a + 25) * len * 0.8, cy + sin(a + 25) * len * 0.8);
    brush.endShape(true);
  }
  // cool shadow inside the cup
  brush.fill("#c8dce6", 190);
  brush.fillBleed(0.25);
  brush.beginShape(0.7);
  brush.vertex(cx - 10, cy + 10); brush.vertex(cx + 10, cy + 10); brush.vertex(cx + 12, cy + 40); brush.vertex(cx - 12, cy + 40);
  brush.endShape(true);
  // yellow centre
  brush.fill("#f0c84a", 240);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.circle(cx, cy, 24, 0.4);
  brush.fill("#e88a1c", 230);
  brush.circle(cx, cy, 14, 0.3);

  // closed bud: two overlapping bell shapes, cool shadow between them
  const bx = 460, by = 330;
  for (let pass = 0; pass < 2; pass++) {
    brush.fill("#f4f4f8", 225);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.6);
    brush.vertex(bx - 16, by - 16); brush.vertex(bx - 12, by - 46); brush.vertex(bx + 4, by - 38); brush.vertex(bx + 16, by - 16);
    brush.vertex(bx + 12, by + 14); brush.vertex(bx - 4, by + 22);
    brush.endShape(true);
  }
  brush.fill("#c8dce6", 190);
  brush.fillBleed(0.25);
  brush.beginShape(0.7);
  brush.vertex(bx - 6, by - 6); brush.vertex(bx + 6, by - 6); brush.vertex(bx + 8, by + 18); brush.vertex(bx - 8, by + 18);
  brush.endShape(true);
  brush.fill("#f0c84a", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.circle(bx, by - 8, 12, 0.3);
  brush.fill("#e88a1c", 220);
  brush.circle(bx, by - 8, 7, 0.3);
}
