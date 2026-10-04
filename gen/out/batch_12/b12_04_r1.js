async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6f4f0");
  randomSeed(404);
  brush.noStroke();
  const V = "#4e2090", Y = "#f0b418", G = "#3f6e3a";
  // blades behind the blooms
  let blades = [[140, 620, 110, 330], [250, 620, 280, 380], [360, 620, 330, 400], [470, 620, 520, 350]];
  for (let b of blades) {
    brush.fill(G, 190);
    brush.fillBleed(0.25);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(0.5);
    brush.vertex(b[0] - 18, b[1]);
    brush.vertex(lerp(b[0], b[2], 0.5) - 12, lerp(b[1], b[3], 0.5));
    brush.vertex(b[2], b[3]);
    brush.vertex(lerp(b[0], b[2], 0.5) + 12, lerp(b[1], b[3], 0.5));
    brush.vertex(b[0] + 18, b[1]);
    brush.endShape(true);
  }
  let blooms = [[170, 250, 1.35], [380, 175, 1.55], [440, 400, 1.1]];
  for (let bl of blooms) {
    let x = bl[0], y = bl[1], s = bl[2];
    brush.fill(G, 210);
    brush.fillBleed(0.2);
    brush.beginShape(0.3);
    brush.vertex(x - 8, y + 50 * s); brush.vertex(x + 8, y + 50 * s); brush.vertex(x + 12, 620); brush.vertex(x - 6, 620);
    brush.endShape(true);
    // two loose passes per petal: large pale, then smaller deeper
    for (let pass = 0; pass < 2; pass++) {
      let k = pass ? 0.72 : 1;
      let al = pass ? 220 : 170;
      // falls
      for (let dx of [-1, 1, 0]) {
        brush.fill(pass ? "#3a1270" : V, al);
        brush.fillBleed(0.3);
        brush.fillTexture(0.55, 0.5);
        brush.beginShape(0.9);
        brush.vertex(x, y + 8 * s);
        brush.vertex(x + dx * 55 * s * k - 26 * s * k, y + 30 * s);
        brush.vertex(x + dx * 62 * s * k, y + (dx == 0 ? 95 : 80) * s * k);
        brush.vertex(x + dx * 55 * s * k + 26 * s * k, y + 30 * s);
        brush.endShape(true);
      }
      if (pass) continue;
      // standards
      for (let dx of [-1, 1]) {
        brush.fill(V, 190);
        brush.fillBleed(0.3);
        brush.beginShape(0.9);
        brush.vertex(x, y + 10);
        brush.vertex(x + dx * 32 * s, y - 35 * s);
        brush.vertex(x + dx * 6 * s, y - 78 * s);
        brush.vertex(x - dx * 12 * s, y - 30 * s);
        brush.endShape(true);
      }
    }
    // yellow beards on the falls
    for (let dx of [-1, 1]) {
      brush.fill(Y, 240);
      brush.fillBleed(0.15);
      brush.fillTexture(0.3, 0.3);
      brush.beginShape(0.6);
      brush.vertex(x + dx * 8 * s, y + 18 * s);
      brush.vertex(x + dx * 32 * s, y + 38 * s);
      brush.vertex(x + dx * 24 * s, y + 46 * s);
      brush.endShape(true);
    }
  }
}
