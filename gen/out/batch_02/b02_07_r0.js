async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf3f0");

  // bold turquoise sky swept across the top left
  brush.noStroke();
  brush.fill("#3aa6c4", 190);
  brush.fillBleed(0.4, "out");
  brush.fillTexture(0.6, 0.5);
  brush.beginShape(0.6);
  brush.vertex(0, 0);
  brush.vertex(420, 0);
  brush.vertex(330, 150);
  brush.vertex(120, 260);
  brush.vertex(0, 300);
  brush.endShape(true);

  // dark twig coming from lower right
  brush.fill("#4a2a1f", 225);
  brush.fillBleed(0.08, "out");
  brush.fillTexture(0.4, 0.7);
  brush.beginShape(0.4);
  brush.vertex(600, 520);
  brush.vertex(460, 440);
  brush.vertex(360, 360);
  brush.vertex(350, 372);
  brush.vertex(452, 455);
  brush.vertex(600, 545);
  brush.endShape(true);

  // two vivid young leaves
  let leafs = [[470, 455, 60, 150], [430, 430, -80, 130]];
  for (let L of leafs) {
    let x = L[0], y = L[1], a = L[2], len = L[3];
    brush.fill("#2f9a3c", 215);
    brush.fillBleed(0.2, "out");
    brush.fillTexture(0.5, 0.6);
    brush.beginShape(0.9);
    brush.vertex(x, y);
    brush.vertex(x + cos(a - 20) * len * 0.55, y + sin(a - 20) * len * 0.55);
    brush.vertex(x + cos(a) * len, y + sin(a) * len);
    brush.vertex(x + cos(a + 20) * len * 0.55, y + sin(a + 20) * len * 0.55);
    brush.endShape(true);
    brush.fill("#1d6b2a", 200);
    brush.fillBleed(0.05, "out");
    brush.beginShape(0.5);
    brush.vertex(x, y);
    brush.vertex(x + cos(a + 2) * len * 0.9, y + sin(a + 2) * len * 0.9);
    brush.vertex(x + cos(a + 6) * len * 0.5, y + sin(a + 6) * len * 0.5);
    brush.endShape(true);
  }

  // five notched petals, saturated pink
  let cx = 310, cy = 300;
  for (let i = 0; i < 5; i++) {
    let a = -80 + i * 72;
    brush.fill("#f47aa8", 200);
    brush.fillBleed(0.3, "out");
    brush.fillTexture(0.55, 0.5);
    brush.beginShape(0.8);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 32) * 110, cy + sin(a - 32) * 110);
    brush.vertex(cx + cos(a - 8) * 140, cy + sin(a - 8) * 140);
    brush.vertex(cx + cos(a) * 118, cy + sin(a) * 118);
    brush.vertex(cx + cos(a + 8) * 140, cy + sin(a + 8) * 140);
    brush.vertex(cx + cos(a + 32) * 110, cy + sin(a + 32) * 110);
    brush.endShape(true);
    brush.fill("#e8488a", 210);
    brush.fillBleed(0.15, "out");
    brush.beginShape(0.8);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 18) * 70, cy + sin(a - 18) * 70);
    brush.vertex(cx + cos(a) * 60, cy + sin(a) * 60);
    brush.vertex(cx + cos(a + 18) * 70, cy + sin(a + 18) * 70);
    brush.endShape(true);
  }

  // crimson heart and starburst stamens
  brush.fill("#b0123f", 230);
  brush.fillBleed(0.25, "out");
  brush.circle(cx, cy, 26, true);
  for (let i = 0; i < 16; i++) {
    let a = i * 22.5 + 5;
    let r = 50 + (i % 3) * 10;
    brush.fill("#8e0d33", 220);
    brush.fillBleed(0.02, "out");
    brush.beginShape(0.2);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a) * r, cy + sin(a) * r);
    brush.vertex(cx + cos(a + 3) * r, cy + sin(a + 3) * r);
    brush.endShape(true);
    brush.fill("#f6c019", 235);
    brush.fillBleed(0.05, "out");
    brush.circle(cx + cos(a) * r, cy + sin(a) * r, 4.5, true);
  }
}
