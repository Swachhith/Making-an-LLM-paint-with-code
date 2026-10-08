async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2f4f6");
  brush.noStroke();

  // pale blue sky, very wide
  brush.fill("#a9b8d4", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 170); brush.vertex(300, 200); brush.vertex(-20, 160);
  brush.endShape(true);

  // distant hill
  brush.fill("#8aa2c8", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-20, 170); brush.vertex(200, 150); brush.vertex(420, 165); brush.vertex(620, 150); brush.vertex(620, 190); brush.vertex(-20, 190);
  brush.endShape(true);

  // near hill, softer
  brush.fill("#7aa2b8", 140);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 190); brush.vertex(200, 180); brush.vertex(420, 195); brush.vertex(620, 185); brush.vertex(620, 230); brush.vertex(-20, 230);
  brush.endShape(true);

  // meadow, soft green
  brush.fill("#8fd3a8", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, 230); brush.vertex(620, 230); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // a few bluebells
  for (let i = 0; i < 18; i++) {
    const x = 30 + i * 25;
    const y = 430 + (i % 3) * 12;
    brush.fill("#5fb8d8", 190);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5);
    brush.vertex(x - 6, y); brush.vertex(x + 6, y); brush.vertex(x + 6, y + 28); brush.vertex(x - 6, y + 28);
    brush.endShape(true);
    brush.beginShape(0.5);
    brush.vertex(x - 6, y + 28); brush.vertex(x + 6, y + 28); brush.vertex(x + 6, y + 48); brush.vertex(x - 6, y + 48);
    brush.endShape(true);
  }

  // poppies: stems and cups
  const stems = [[120, 520, 0], [210, 540, 0], [300, 530, 0], [390, 550, 0], [480, 520, 0], [570, 540, 0], [160, 560, 0], [250, 570, 0], [340, 550, 0], [430, 560, 0], [520, 530, 0], [600, 550, 0]];
  for (const [sx, sy, rot] of stems) {
    brush.fill("#2e6a3a", 200);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.3);
    brush.vertex(sx, sy); brush.vertex(sx + 14, sy - 200); brush.vertex(sx + 28, sy - 200); brush.vertex(sx + 14, sy);
    brush.endShape(true);
  }
  for (const [sx, sy, rot] of stems) {
    brush.fill("#2e6a3a", 220);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.3);
    brush.vertex(sx, sy); brush.vertex(sx + 10, sy - 170); brush.vertex(sx + 22, sy - 170); brush.vertex(sx + 10, sy - 140);
    brush.endShape(true);
  }
  for (const [sx, sy, rot] of stems) {
    brush.fill("#2e6a3a", 230);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.4);
    brush.vertex(sx - 3, sy); brush.vertex(sx + 3, sy - 120); brush.vertex(sx + 12, sy - 120); brush.vertex(sx + 6, sy - 90);
    brush.endShape(true);
  }
  for (const [sx, sy, rot] of stems) {
    brush.fill("#2e6a3a", 235);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.4);
    brush.vertex(sx + 3, sy); brush.vertex(sx - 3, sy - 120); brush.vertex(sx - 12, sy - 120); brush.vertex(sx - 6, sy - 90);
    brush.endShape(true);
  }
  for (const [sx, sy, rot] of stems) {
    brush.fill("#d81a2a", 230);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.circle(sx, sy - 135, 30, 0.7);
  }
  for (const [sx, sy, rot] of stems) {
    brush.fill("#d81a2a", 245);
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.6);
    brush.circle(sx, sy - 135, 22, 0.4);
  }
  // a few taller ones
  for (const [sx, sy, rot] of [[360, 470, 0], [520, 450, 0], [180, 480, 0]]) {
    brush.fill("#d81a2a", 240);
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.6);
    brush.circle(sx, sy - 135, 34, 0.6);
  }
}
