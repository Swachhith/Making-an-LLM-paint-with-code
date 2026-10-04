async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2f5f6");
  randomSeed(141);
  brush.noStroke();

  // cool background washes
  brush.fill("#a9c6d4", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 260);
  brush.vertex(420, 330); brush.vertex(180, 280); brush.vertex(-20, 340);
  brush.endShape(true);
  brush.fill("#b7d3c4", 140);
  brush.beginShape(0.6);
  brush.vertex(-20, 380); brush.vertex(250, 330); brush.vertex(620, 400);
  brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  const blooms = [[190, 230, 1.0], [390, 170, 0.85], [320, 350, 0.9]];

  // stems, as soft wide ribbons
  for (const b of blooms) {
    brush.fill("#5e8a6f", 190);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.5);
    brush.vertex(b[0] - 8, b[1] + 20);
    brush.vertex(b[0] + 8, b[1] + 20);
    brush.vertex(300 + (b[0] - 300) * 0.3 + 10, 620);
    brush.vertex(300 + (b[0] - 300) * 0.3 - 10, 620);
    brush.endShape(true);
  }
  // a couple of lance leaves
  brush.fill("#4f7d66", 170);
  brush.beginShape(0.8);
  brush.vertex(270, 520); brush.vertex(200, 460); brush.vertex(150, 450); brush.vertex(210, 500);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(320, 540); brush.vertex(400, 480); brush.vertex(450, 470); brush.vertex(390, 520);
  brush.endShape(true);

  // drooping petals and domed cones
  for (const b of blooms) {
    const cx = b[0], cy = b[1], s = b[2];
    const n = 13;
    for (let pass = 0; pass < 2; pass++) {
      for (let i = 0; i < n; i++) {
        const a = 180 / n * i + random(-6, 6) - 5;
        const droop = 25 * s;
        const len = (pass === 0 ? 95 : 72) * s * random(0.9, 1.1);
        const w = 13 * s;
        const dx = cos(a), dy = sin(a);
        const tipx = cx + dx * len, tipy = cy + dy * len * 0.55 + droop + len * 0.35;
        brush.fill(pass === 0 ? "#d77fb0" : "#b8488f", pass === 0 ? 170 : 150);
        brush.fillBleed(0.25);
        brush.fillTexture(0.45, 0.4);
        brush.beginShape(0.7);
        brush.vertex(cx - dy * w, cy + dx * w * 0.5);
        brush.vertex((cx + tipx) / 2 - dy * w * 1.1, (cy + tipy) / 2 + dx * w);
        brush.vertex(tipx, tipy);
        brush.vertex((cx + tipx) / 2 + dy * w * 1.1, (cy + tipy) / 2 - dx * w * 0.2);
        brush.vertex(cx + dy * w, cy - dx * w * 0.5);
        brush.endShape(true);
      }
    }
    brush.fill("#c0692c", 210);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.5);
    brush.circle(cx, cy - 6 * s, 30 * s, 0.4);
    brush.fill("#6b3317", 200);
    brush.circle(cx + 4 * s, cy - 12 * s, 17 * s, 0.5);
  }
}
