async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7f5ef");
  randomSeed(4404);
  brush.noStroke();
  const V = "#50208e", Y = "#eeaa10", G = "#3a6a38";
  // pale glaze of the violet and yellow behind, loose
  brush.fill(Y, 90);
  brush.fillBleed(0.35);
  brush.fillTexture(0.6, 0.6);
  brush.circle(460, 120, 180, 0.9);
  brush.fill(V, 80);
  brush.circle(140, 480, 200, 0.9);
  // leaves
  for (let b of [[120, 620, 90, 300], [210, 620, 250, 360], [340, 620, 300, 380], [480, 620, 540, 320], [540, 620, 600, 440]]) {
    brush.fill(G, 200);
    brush.fillBleed(0.25);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(0.5);
    brush.vertex(b[0] - 20, b[1]);
    brush.vertex(lerp(b[0], b[2], 0.5) - 13, lerp(b[1], b[3], 0.5));
    brush.vertex(b[2], b[3]);
    brush.vertex(lerp(b[0], b[2], 0.5) + 13, lerp(b[1], b[3], 0.5));
    brush.vertex(b[0] + 20, b[1]);
    brush.endShape(true);
  }
  let blooms = [[180, 270, 1.4, -8], [390, 200, 1.6, 6], [460, 420, 1.15, 12]];
  for (let bl of blooms) {
    let x = bl[0], y = bl[1], s = bl[2], tilt = bl[3];
    brush.fill(G, 215);
    brush.fillBleed(0.2);
    brush.beginShape(0.3);
    brush.vertex(x - 9, y + 50 * s); brush.vertex(x + 9, y + 50 * s); brush.vertex(x + 14 + tilt, 620); brush.vertex(x - 4 + tilt, 620);
    brush.endShape(true);
    // standards: wide ruffled upright pair, two passes
    for (let p = 0; p < 2; p++) {
      let k = p ? 0.7 : 1;
      for (let dx of [-1, 1]) {
        brush.fill(p ? "#6e3ab8" : V, p ? 170 : 200);
        brush.fillBleed(0.3);
        brush.fillTexture(0.55, 0.5);
        brush.beginShape(0.9);
        brush.vertex(x + tilt * 0.3, y + 10);
        brush.vertex(x + dx * 40 * s * k + tilt, y - 30 * s);
        brush.vertex(x + dx * 12 * s * k + tilt, y - 85 * s * k);
        brush.vertex(x - dx * 14 * s * k + tilt, y - 35 * s);
        brush.endShape(true);
      }
    }
    // falls: three drooping tongues, big pale pass then deep inner pass
    for (let p = 0; p < 2; p++) {
      let k = p ? 0.7 : 1;
      for (let dx of [-1, 1]) {
        brush.fill(p ? "#2e0a60" : V, p ? 210 : 190);
        brush.fillBleed(0.3);
        brush.fillTexture(0.55, 0.5);
        brush.beginShape(0.9);
        brush.vertex(x, y + 6 * s);
        brush.vertex(x + dx * 62 * s * k, y + 12 * s);
        brush.vertex(x + dx * 78 * s * k, y + 75 * s * k);
        brush.vertex(x + dx * 40 * s * k, y + 70 * s * k);
        brush.endShape(true);
      }
    }
    // yellow signal patches
    for (let dx of [-1, 1]) {
      brush.fill(Y, 245);
      brush.fillBleed(0.12);
      brush.fillTexture(0.3, 0.3);
      brush.circle(x + dx * 30 * s, y + 22 * s, 8 * s, 0.5);
    }
  }
}
