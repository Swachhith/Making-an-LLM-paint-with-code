async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e9e0cf");
  brush.noStroke();
  randomSeed(9);

  // a muted olive leaf wash in the lower corner
  brush.fill("#8a8a5c", 180);
  brush.fillBleed(0.5, "out");
  brush.fillTexture(0.6, 0.4);
  brush.beginShape(0.6);
  brush.vertex(380, 600);
  brush.vertex(600, 380);
  brush.vertex(600, 600);
  brush.endShape(true);

  const cx = 290, cy = 310;
  // six long pointed petals that curl back at the tips
  for (let p = 0; p < 6; p++) {
    const a = p * 60 - 80 + (p % 2) * 12;
    const L = p % 2 ? 250 : 280;
    const tipA = a + 22;
    // wide loose pass
    brush.fill("#c8753a", 190);
    brush.fillBleed(0.4, "out");
    brush.fillTexture(0.55, 0.7);
    brush.beginShape(0.8);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 12) * L * 0.55, cy + sin(a - 12) * L * 0.55);
    brush.vertex(cx + cos(a - 4) * L * 0.9, cy + sin(a - 4) * L * 0.9);
    brush.vertex(cx + cos(tipA) * L, cy + sin(tipA) * L);
    brush.vertex(cx + cos(a + 8) * L * 0.75, cy + sin(a + 8) * L * 0.75);
    brush.vertex(cx + cos(a + 14) * L * 0.4, cy + sin(a + 14) * L * 0.4);
    brush.endShape(true);
    // darker midrib pass
    brush.fill("#a8502a", 200);
    brush.fillBleed(0.15, "in");
    brush.beginShape(0.7);
    brush.vertex(cx + cos(a) * 30, cy + sin(a) * 30);
    brush.vertex(cx + cos(a - 3) * L * 0.6, cy + sin(a - 3) * L * 0.6);
    brush.vertex(cx + cos(a + 6) * L * 0.8, cy + sin(a + 6) * L * 0.8);
    brush.vertex(cx + cos(a + 5) * L * 0.5, cy + sin(a + 5) * L * 0.5);
    brush.endShape(true);
    // freckles near the throat
    brush.fill("#3e2418", 225);
    brush.fillBleed(0.05, "in");
    for (let k = 0; k < 9; k++) {
      const r = 40 + random(L * 0.45);
      const aa = a + random(-8, 10);
      brush.circle(cx + cos(aa) * r, cy + sin(aa) * r, random(2.5, 5), true);
    }
  }

  // green-gold throat
  brush.fill("#9a9450", 210);
  brush.fillBleed(0.35, "out");
  brush.circle(cx, cy, 30, true);

  // stamens arching out, rust anthers
  for (let k = 0; k < 6; k++) {
    const a = k * 60 - 50;
    const ex = cx + cos(a) * 175, ey = cy + sin(a) * 175 + 20;
    brush.fill("#8c8354", 210);
    brush.fillBleed(0.02, "in");
    brush.beginShape(0.6);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 6) * 100, cy + sin(a - 6) * 100);
    brush.vertex(ex, ey);
    brush.vertex(ex + 3, ey + 3);
    brush.vertex(cx + cos(a - 6) * 100 + 3, cy + sin(a - 6) * 100 + 3);
    brush.vertex(cx + 3, cy + 3);
    brush.endShape(true);
    brush.fill("#5e2616", 235);
    brush.beginShape(0.9);
    brush.vertex(ex - 12, ey - 3);
    brush.vertex(ex + 12, ey - 3);
    brush.vertex(ex + 10, ey + 5);
    brush.vertex(ex - 10, ey + 5);
    brush.endShape(true);
  }
}
