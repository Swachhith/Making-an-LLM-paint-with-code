async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf1dc");
  brush.noStroke();

  // warm sky
  brush.fill("#f2c784", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-40, -40); brush.vertex(640, -40); brush.vertex(640, 290); brush.vertex(-40, 300);
  brush.endShape(true);

  // golden field
  brush.fill("#e0a23c", 200);
  brush.fillBleed(0.28);
  brush.beginShape(0.8);
  brush.vertex(-40, 300); brush.vertex(640, 285); brush.vertex(640, 640); brush.vertex(-40, 640);
  brush.endShape(true);
  brush.fill("#c8792a", 180);
  brush.beginShape(0.9);
  brush.vertex(-40, 450); brush.vertex(300, 420); brush.vertex(640, 460); brush.vertex(640, 640); brush.vertex(-40, 640);
  brush.endShape(true);

  // distant grove across the field: canopy masses, trunks left as paper strips
  brush.fillBleed(0.28);
  brush.fillTexture(0.4, 0.5);
  brush.fill("#d9b24a", 190);
  brush.circle(250, 190, 55, 0.7);
  brush.circle(330, 165, 70, 0.7);
  brush.circle(420, 175, 65, 0.7);
  brush.circle(490, 200, 45, 0.7);
  brush.fill("#a8862a", 190);
  brush.circle(300, 200, 40, 0.6);
  brush.circle(400, 205, 45, 0.6);
  brush.circle(460, 215, 30, 0.6);
  // dark gaps between trunks (the trunks are whatever is left between them)
  const gaps = [205, 238, 262, 300, 330, 358, 392, 425, 452, 486, 515];
  for (let i = 0; i < gaps.length; i++) {
    const g = gaps[i];
    const w = 16 + (i % 3) * 3;
    brush.fill(i % 2 ? "#6b5a28" : "#86702e", 215);
    brush.fillBleed(0.15);
    brush.beginShape(0.2);
    brush.vertex(g, 215 + (i % 4) * 6); brush.vertex(g + w, 212 + (i % 3) * 6);
    brush.vertex(g + w + 2, 300); brush.vertex(g - 2, 300);
    brush.endShape(true);
  }
  // shadow band beneath the grove
  brush.fill("#8a5a24", 190);
  brush.fillBleed(0.25);
  brush.beginShape(0.7);
  brush.vertex(190, 294); brush.vertex(545, 292); brush.vertex(550, 314); brush.vertex(185, 316);
  brush.endShape(true);
  // black marks on the paper trunks
  const trunks = [223, 256, 280, 318, 349, 377, 411, 444, 472, 505];
  for (const x of trunks) {
    for (let y = 228; y < 292; y += 16) {
      brush.fill("#2e241a", 220);
      brush.circle(x + 3 + ((x + y) % 5) * 0.6, y + (x % 7), 2.5, 0.3);
    }
  }

  // grasses in foreground
  for (let i = 0; i < 20; i++) {
    const x = random(600), y = 500 + random(90);
    brush.fill("#9c5a1c", 190);
    brush.circle(x, y, 6 + random(6), 0.6);
  }

  // warm foreground grass tufts, bigger and nearer
  for (let i = 0; i < 9; i++) {
    const x = 20 + i * 70 + random(20);
    brush.fill("#b0601a", 200);
    brush.fillBleed(0.25);
    brush.beginShape(0.5);
    brush.vertex(x, 610); brush.vertex(x + 8, 520 + random(30)); brush.vertex(x + 22, 560); brush.vertex(x + 34, 530 + random(30)); brush.vertex(x + 40, 610);
    brush.endShape(true);
    brush.fill("#e0562a", 210);
    brush.circle(x + 10, 520 + random(20), 6, 0.5);
  }
}
