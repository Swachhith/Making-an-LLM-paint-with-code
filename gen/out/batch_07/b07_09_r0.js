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

  // six recurved petals, many small strokes each
  for (let p = 0; p < 6; p++) {
    const a = p * 60 - 75;
    for (let s = 0; s < 7; s++) {
      const r0 = 30 + s * 36;
      const bend = s * s * 0.9;
      const x = 300 + cos(a + bend * 0.5) * r0;
      const y = 300 + sin(a + bend * 0.5) * r0;
      const w = 42 - abs(s - 3) * 7;
      brush.fill(s < 3 ? "#c9793a" : "#b8622e", 150 + s * 10);
      brush.fillBleed(0.35, "out");
      brush.fillTexture(0.5, 0.6);
      brush.circle(x, y, w, true);
    }
  }

  // freckles
  brush.fill("#4a2a1c", 215);
  brush.fillBleed(0.05, "in");
  for (let p = 0; p < 6; p++) {
    const a = p * 60 - 75;
    for (let k = 0; k < 7; k++) {
      const r = 50 + random(120);
      brush.circle(300 + cos(a + random(-12, 12)) * r, 300 + sin(a + random(-12, 12)) * r, random(3, 6), true);
    }
  }

  // green throat
  brush.fill("#8a8a4a", 200);
  brush.fillBleed(0.3, "out");
  brush.circle(300, 300, 34, true);

  // stamens: thin filaments with rust anthers
  for (let k = 0; k < 6; k++) {
    const a = k * 60 - 45;
    const ex = 300 + cos(a) * 150, ey = 300 + sin(a) * 150;
    brush.fill("#9a8a5a", 200);
    brush.beginShape(0.3);
    brush.vertex(299, 299);
    brush.vertex(ex, ey);
    brush.vertex(ex + 3, ey + 3);
    brush.vertex(302, 302);
    brush.endShape(true);
    brush.fill("#6e2e1a", 230);
    brush.circle(ex, ey, 9, true);
  }
}
