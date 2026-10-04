async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4f3f6");
  randomSeed(4);
  brush.noStroke();
  const V = "#5a2d91", Y = "#e3b52a", G = "#4d7a3a";
  // pale violet wash behind
  brush.fill(V, 90);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(60, 40); brush.vertex(560, 80); brush.vertex(540, 470); brush.vertex(80, 500);
  brush.endShape(true);
  // leaves: long blades
  let blades = [[220, 590, 180, 300], [300, 590, 330, 260], [380, 590, 450, 330], [260, 590, 230, 380], [420, 590, 520, 420]];
  for (let b of blades) {
    brush.fill(G, 200);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5);
    brush.vertex(b[0] - 14, b[1]);
    brush.vertex((b[0] + b[2]) / 2 - 10, (b[1] + b[3]) / 2);
    brush.vertex(b[2], b[3]);
    brush.vertex((b[0] + b[2]) / 2 + 10, (b[1] + b[3]) / 2);
    brush.vertex(b[0] + 14, b[1]);
    brush.endShape(true);
  }
  let blooms = [[200, 230, 1.0], [360, 170, 1.15], [440, 320, 0.9]];
  for (let bl of blooms) {
    let x = bl[0], y = bl[1], s = bl[2];
    // stem
    brush.fill(G, 210);
    brush.fillBleed(0.2);
    brush.beginShape(0.3);
    brush.vertex(x - 8, y + 40 * s); brush.vertex(x + 8, y + 40 * s); brush.vertex(x + 10, 600); brush.vertex(x - 8, 600);
    brush.endShape(true);
    // falls (drooping lower petals)
    for (let a of [-40, 40, 180]) {
      let dx = a == 180 ? 0 : (a < 0 ? -1 : 1);
      brush.fill(V, 210);
      brush.fillBleed(0.3);
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(0.8);
      brush.vertex(x, y);
      brush.vertex(x + dx * 60 * s - 25 * s, y + 35 * s);
      brush.vertex(x + dx * 70 * s, y + 85 * s);
      brush.vertex(x + dx * 60 * s + 25 * s, y + 35 * s);
      brush.endShape(true);
    }
    // standards (upright petals)
    for (let dx of [-1, 1]) {
      brush.fill(V, 180);
      brush.fillBleed(0.3);
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(0.8);
      brush.vertex(x, y + 5);
      brush.vertex(x + dx * 35 * s, y - 40 * s);
      brush.vertex(x + dx * 8 * s, y - 80 * s);
      brush.vertex(x - dx * 10 * s, y - 30 * s);
      brush.endShape(true);
    }
    // darker veins pass
    brush.fill("#3a1566", 170);
    brush.fillBleed(0.2);
    brush.circle(x - 35 * s, y + 45 * s, 16 * s, 0.6);
    brush.circle(x + 35 * s, y + 45 * s, 16 * s, 0.6);
    // yellow beard
    brush.fill(Y, 230);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.circle(x - 22 * s, y + 22 * s, 7 * s, 0.4);
    brush.circle(x + 22 * s, y + 22 * s, 7 * s, 0.4);
  }
}
