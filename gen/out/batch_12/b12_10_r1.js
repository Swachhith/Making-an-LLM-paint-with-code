async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcf5f6");
  randomSeed(1001);
  brush.noStroke();
  // pastel background blooms
  brush.fill("#c6e6d8", 160);
  brush.fillBleed(0.35);
  brush.fillTexture(0.55, 0.55);
  brush.circle(460, 470, 230, 0.8);
  brush.fill("#dcd0f2", 160);
  brush.circle(120, 120, 220, 0.8);
  brush.fill("#fbe0c4", 140);
  brush.circle(500, 90, 140, 0.8);
  let cx = 300, cy = 210;
  // stem, soft 16px wide
  brush.fill("#86b88e", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(cx - 9, cy + 20); brush.vertex(cx + 9, cy + 20); brush.vertex(cx + 24, 400); brush.vertex(cx + 20, 620); brush.vertex(cx + 2, 620); brush.vertex(cx + 6, 400);
  brush.endShape(true);
  // two lanceolate leaves, each two passes
  let leaves = [[cx + 10, 430, -1], [cx + 18, 510, 1]];
  for (let L of leaves) {
    for (let p = 0; p < 2; p++) {
      let k = p ? 0.7 : 1;
      brush.fill(p ? "#6ea67c" : "#a6d6ac", p ? 180 : 200);
      brush.fillBleed(0.25);
      brush.fillTexture(0.45, 0.5);
      brush.beginShape(0.8);
      brush.vertex(L[0], L[1]);
      brush.vertex(L[0] + L[2] * 70 * k, L[1] - 40 * k);
      brush.vertex(L[0] + L[2] * 160 * k, L[1] - 50 * k);
      brush.vertex(L[0] + L[2] * 80 * k, L[1] - 5);
      brush.endShape(true);
    }
  }
  // reflexed petals: full ring, lower ones longer (drooping)
  for (let pass = 0; pass < 2; pass++) {
    for (let i = 0; i < 15; i++) {
      let a = i * 24 + random(-4, 4);
      let droop = map(sin(a), -1, 1, 0.7, 1.15);
      let l = random(120, 145) * droop * (pass ? 0.75 : 1);
      brush.fill(pass ? "#e37aa8" : "#f7afcb", pass ? 190 : 210);
      brush.fillBleed(0.3);
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(0.7);
      brush.vertex(cx + cos(a - 8) * 28, cy + sin(a - 8) * 28);
      brush.vertex(cx + cos(a - 6) * l * 0.8, cy + sin(a - 6) * l * 0.8 + 18);
      brush.vertex(cx + cos(a) * l, cy + sin(a) * l + 28);
      brush.vertex(cx + cos(a + 6) * l * 0.8, cy + sin(a + 6) * l * 0.8 + 18);
      brush.vertex(cx + cos(a + 8) * 28, cy + sin(a + 8) * 28);
      brush.endShape(true);
    }
  }
  // domed cone, peach to rust, layered
  brush.fill("#f2b27a", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.circle(cx, cy - 6, 50, 0.3);
  brush.fill("#d9864e", 200);
  brush.circle(cx + 6, cy, 36, 0.5);
  brush.fill("#a8582e", 160);
  brush.circle(cx + 10, cy + 6, 20, 0.6);
  for (let i = 0; i < 40; i++) {
    let r = random(0, 44), t = random(0, 360);
    brush.fill("#8a4424", 200);
    brush.fillBleed(0.05);
    brush.circle(cx + cos(t) * r, cy - 6 + sin(t) * r, random(1.5, 3), 0.3);
  }
}
