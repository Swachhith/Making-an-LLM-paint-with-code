async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6f3ee");
  randomSeed(717);
  brush.noStroke();

  // wet-in-wet backdrop: violet and gold blooms colliding
  let wash = [[150, 170, "#a88ad8", 140], [460, 140, "#f0c850", 110], [480, 430, "#8ab0e0", 120], [120, 460, "#b89ae0", 120], [300, 320, "#d8c8f0", 170]];
  for (let s of wash) {
    brush.fill(s[2], 160);
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.6);
    brush.circle(s[0], s[1], s[3], 0.9);
  }

  let blooms = [[225, 245, 1.15], [410, 290, 0.95], [300, 440, 0.9]];
  for (let b of blooms) {
    let x = b[0], y = b[1], k = b[2];
    // back petals: deep purple, two passes
    for (let pass = 0; pass < 2; pass++) {
      brush.fill(pass ? "#3a0e78" : "#6a30b0", pass ? 190 : 220);
      brush.fillBleed(0.3);
      brush.fillTexture(0.55, 0.5);
      let r = pass ? 34 : 56;
      brush.circle(x - 36 * k, y - 44 * k, r * k, 0.6);
      brush.circle(x + 38 * k, y - 42 * k, r * k, 0.6);
    }
    // wing petals
    brush.fill("#9458d0", 210);
    brush.circle(x - 58 * k, y + 8 * k, 44 * k, 0.6);
    brush.circle(x + 58 * k, y + 8 * k, 44 * k, 0.6);
    brush.fill("#f4c820", 170);
    brush.circle(x - 50 * k, y + 16 * k, 22 * k, 0.5);
    brush.circle(x + 50 * k, y + 16 * k, 22 * k, 0.5);
    // lower lip, gold with orange throat
    brush.fill("#f7c80e", 230);
    brush.fillBleed(0.28);
    brush.circle(x, y + 34 * k, 54 * k, 0.55);
    brush.fill("#e88a08", 190);
    brush.circle(x, y + 16 * k, 26 * k, 0.4);
    // dark face blotch
    for (let pass = 0; pass < 2; pass++) {
      brush.fill("#220840", 230);
      brush.fillBleed(0.18);
      brush.beginShape(0.5);
      brush.vertex(x - 24 * k, y - 10 * k);
      brush.vertex(x + 24 * k, y - 10 * k);
      brush.vertex(x + 6 * k, y + 38 * k);
      brush.vertex(x - 6 * k, y + 38 * k);
      brush.endShape(true);
    }
    brush.fill("#fff0a0", 230);
    brush.fillBleed(0.05);
    brush.circle(x, y - 6 * k, 6 * k, 0.2);

    // drips falling from the lower edge
    for (let d = 0; d < 3; d++) {
      let dx = x + random(-60, 60) * k;
      let y0 = y + random(40, 70) * k;
      let len = random(50, 160);
      brush.fill(random(["#6a30b0", "#9458d0", "#f0b010"]), 180);
      brush.fillBleed(0.15);
      brush.fillTexture(0.3, 0.4);
      brush.beginShape(0.5);
      brush.vertex(dx - 9, y0);
      brush.vertex(dx + 9, y0);
      brush.vertex(dx + 7, y0 + len);
      brush.vertex(dx - 7, y0 + len);
      brush.endShape(true);
      brush.circle(dx, y0 + len + 2, 10, 0.3);
    }
  }

  // loose leaves
  brush.fill("#3e8a3a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(110, 360, 45, 0.8);
  brush.circle(520, 360, 40, 0.8);
  brush.fill("#2a6a2a", 170);
  brush.circle(125, 370, 22, 0.6);

  // flicked spatter in all three colours
  for (let i = 0; i < 70; i++) {
    brush.fill(random(["#5a20a0", "#f2c21a", "#9458d0", "#3e8a3a"]), 220);
    brush.fillBleed(0.08);
    brush.circle(random(20, 580), random(30, 580), random(1.5, 7), 0.4);
  }
}
