async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e6ded0");
  randomSeed(90);
  brush.noStroke();

  // stem from bottom-left edge to a bloom low and right
  brush.fill("#5e5638", 225);
  brush.fillBleed(0.12);
  brush.fillTexture(0.4, 0.3);
  brush.beginShape(0.8);
  brush.vertex(0, 555); brush.vertex(200, 470); brush.vertex(360, 380); brush.vertex(368, 394); brush.vertex(206, 486); brush.vertex(0, 578);
  brush.endShape(true);
  // leaves with a darker midrib stroke
  for (const L of [[[140, 505], [70, 420], [140, 350], [200, 455]], [[240, 460], [260, 560], [350, 580], [320, 480]]]) {
    brush.fill("#737a4e", 215);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(1);
    for (const [x, y] of L) brush.vertex(x, y);
    brush.endShape(true);
    brush.fill("#4a4f31", 200);
    brush.fillBleed(0.1);
    brush.beginShape(0.6);
    brush.vertex(L[0][0], L[0][1]); brush.vertex(L[2][0], L[2][1]); brush.vertex(L[2][0] + 4, L[2][1] + 6);
    brush.endShape(true);
  }

  // camellia: concentric rings of fat shell petals, dusty rose deepening inward
  const cx = 390, cy = 320;
  const rings = [[140, 7, "#c7938f", 200], [108, 7, "#b8747a", 210], [76, 6, "#a45a66", 220], [46, 5, "#8a4454", 225], [22, 4, "#6d3040", 230]];
  let k = 0;
  for (const [r, n, col, op] of rings) {
    for (let i = 0; i < n; i++) {
      const a = i * 360 / n + k * 25 + random(-6, 6);
      const w = 200 / n;
      brush.fill(col, op + random(-12, 8));
      brush.fillBleed(0.22);
      brush.fillTexture(0.45, 0.5);
      brush.beginShape(1);
      brush.vertex(cx + cos(a - w) * r * 0.45, cy + sin(a - w) * r * 0.42);
      brush.vertex(cx + cos(a - w * 0.8) * r, cy + sin(a - w * 0.8) * r * 0.9);
      brush.vertex(cx + cos(a) * r * 1.08, cy + sin(a) * r);
      brush.vertex(cx + cos(a + w * 0.8) * r, cy + sin(a + w * 0.8) * r * 0.9);
      brush.vertex(cx + cos(a + w) * r * 0.45, cy + sin(a + w) * r * 0.42);
      brush.endShape(true);
    }
    // a pale lit rim on the upper edge of each ring
    brush.fill("#eed7cc", 175);
    brush.fillBleed(0.1);
    brush.beginShape(0.8);
    brush.vertex(cx - r * 0.7, cy - r * 0.55); brush.vertex(cx, cy - r * 0.9); brush.vertex(cx + r * 0.5, cy - r * 0.7); brush.vertex(cx, cy - r * 0.78);
    brush.endShape(true);
    k++;
  }
  brush.fill("#c9a35a", 220);
  brush.fillBleed(0.08);
  brush.circle(cx + 4, cy + 2, 9, 0.5);
}
