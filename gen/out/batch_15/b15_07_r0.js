async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7f4f0");
  randomSeed(707);
  brush.noStroke();

  // splashy loose background blooms
  let splash = [[120, 140, "#b9a2e0"], [470, 110, "#f3d36a"], [520, 460, "#a9c6e8"], [90, 480, "#c7b0e8"]];
  for (let s of splash) {
    brush.fill(s[2], 150);
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.6);
    brush.circle(s[0], s[1], random(80, 120), 0.8);
  }

  let blooms = [[230, 250, 1.0], [400, 300, 0.85], [290, 430, 0.8]];
  for (let b of blooms) {
    let x = b[0], y = b[1], k = b[2];
    // upper purple petals
    brush.fill("#5a2a9a", 210);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.circle(x - 38 * k, y - 45 * k, 55 * k, 0.5);
    brush.circle(x + 38 * k, y - 45 * k, 55 * k, 0.5);
    brush.fill("#3a1470", 190);
    brush.circle(x - 30 * k, y - 50 * k, 30 * k, 0.5);
    // side petals mixed purple/yellow
    brush.fill("#8a4ec8", 190);
    brush.circle(x - 55 * k, y + 5 * k, 42 * k, 0.5);
    brush.circle(x + 55 * k, y + 5 * k, 42 * k, 0.5);
    // lower yellow petal
    brush.fill("#f2c21a", 220);
    brush.fillBleed(0.28);
    brush.circle(x, y + 30 * k, 50 * k, 0.5);
    brush.fill("#e89a10", 170);
    brush.circle(x, y + 18 * k, 26 * k, 0.4);
    // dark whisker face
    brush.fill("#2a0e4a", 230);
    brush.fillBleed(0.18);
    brush.beginShape(0.5);
    brush.vertex(x - 20 * k, y - 8 * k);
    brush.vertex(x + 20 * k, y - 8 * k);
    brush.vertex(x, y + 34 * k);
    brush.endShape(true);
    brush.fill("#f7e080", 220);
    brush.circle(x, y - 6 * k, 6 * k, 0.2);

    // drips running down
    for (let d = 0; d < 2; d++) {
      let dx = x + random(-50, 50) * k;
      let top = y + 50 * k;
      let len = random(60, 140);
      brush.fill(random(["#5a2a9a", "#8a4ec8", "#e8b010"]), 170);
      brush.fillBleed(0.2);
      brush.fillTexture(0.3, 0.4);
      brush.beginShape(0.6);
      brush.vertex(dx - 9, top);
      brush.vertex(dx + 9, top);
      brush.vertex(dx + 8, top + len);
      brush.vertex(dx - 8, top + len);
      brush.endShape(true);
      brush.circle(dx, top + len, 11, 0.3);
    }
  }

  // leaves
  brush.fill("#4f8a3a", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(150, 360);
  brush.vertex(80, 330);
  brush.vertex(60, 380);
  brush.vertex(140, 400);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(470, 380);
  brush.vertex(550, 360);
  brush.vertex(560, 410);
  brush.vertex(480, 420);
  brush.endShape(true);

  // spatter
  for (let i = 0; i < 40; i++) {
    brush.fill(random(["#5a2a9a", "#f2c21a", "#8a4ec8"]), 200);
    brush.fillBleed(0.1);
    brush.circle(random(40, 560), random(60, 560), random(2, 6), 0.3);
  }
}
