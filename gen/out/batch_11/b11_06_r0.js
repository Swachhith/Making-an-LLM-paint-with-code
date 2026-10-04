async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf3f3");
  brush.noStroke();

  // soft lavender-mint background wash, uneven
  brush.fill("#cfe6d8", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.9);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#e2d2ee", 150);
  brush.beginShape(0.9);
  brush.vertex(-20, 250); brush.vertex(300, 180); brush.vertex(620, 260); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // thin stems as wide soft ribbons converging at bottom
  brush.fill("#8fbf8a", 190);
  brush.fillBleed(0.25);
  const stems = [[210, 250], [370, 210], [300, 360]];
  for (const s of stems) {
    brush.beginShape(0.8);
    brush.vertex(s[0] - 8, s[1] + 30); brush.vertex((s[0] + 290) / 2 - 6, 460); brush.vertex(284, 620); brush.vertex(304, 620); brush.vertex((s[0] + 290) / 2 + 10, 460); brush.vertex(s[0] + 10, s[1] + 30);
    brush.endShape(true);
  }

  // three cosmos: 8 broad petals each, notched tips
  const blooms = [[210, 250, 95], [370, 210, 80], [300, 360, 70]];
  for (const b of blooms) {
    const [cx, cy, R] = b;
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2 + cx * 0.01;
      const ca = Math.cos(a), sa = Math.sin(a);
      const px = -sa, py = ca;
      for (let pass = 0; pass < 2; pass++) {
        const k = pass ? 0.85 : 1;
        brush.fill(pass ? "#e98fb5" : "#f4b6cf", pass ? 190 : 170);
        brush.fillBleed(0.28);
        brush.fillTexture(0.4, 0.4);
        brush.beginShape(0.6);
        brush.vertex(cx + ca * 10, cy + sa * 10);
        brush.vertex(cx + ca * R * 0.5 * k + px * 20 * k, cy + sa * R * 0.5 * k + py * 20 * k);
        brush.vertex(cx + ca * R * k + px * 18 * k, cy + sa * R * k + py * 18 * k);
        brush.vertex(cx + ca * R * 0.9 * k, cy + sa * R * 0.9 * k);
        brush.vertex(cx + ca * R * k - px * 18 * k, cy + sa * R * k - py * 18 * k);
        brush.vertex(cx + ca * R * 0.5 * k - px * 20 * k, cy + sa * R * 0.5 * k - py * 20 * k);
        brush.endShape(true);
      }
    }
    // yellow centre
    brush.fill("#f2c94c", 220);
    brush.fillBleed(0.2);
    brush.circle(cx, cy, R * 0.16, 0.4);
    brush.fill("#c9962a", 200);
    brush.circle(cx + 3, cy + 3, R * 0.08, 0.4);
  }
}
