async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fff8e0");
  brush.noStroke();

  // sky: bands of bold colour, lower ones darker
  brush.fill("#ff8a00", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, 220); brush.vertex(620, 220); brush.vertex(620, 400); brush.vertex(-20, 400);
  brush.endShape(true);
  brush.fill("#ff3d00", 220);
  brush.beginShape(0.4);
  brush.vertex(-20, 330); brush.vertex(620, 330); brush.vertex(620, 470); brush.vertex(-20, 470);
  brush.endShape(true);
  brush.fill("#e81e2a", 225);
  brush.beginShape(0.4);
  brush.vertex(-20, 450); brush.vertex(620, 450); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // sun as a glowing disc
  brush.fill("#ffd23a", 235);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.circle(420, 200, 55, 0.4);
  brush.fill("#ffe06a", 220);
  brush.circle(420, 200, 38, 0.5);

  // distant silhouette of a headland
  brush.fill("#b8221a", 180);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(-20, 470); brush.vertex(200, 440); brush.vertex(400, 460); brush.vertex(620, 440); brush.vertex(620, 470);
  brush.endShape(true);

  // palms: trunks and fronds
  const palms = [[100, 470, 26], [230, 470, 24], [360, 470, 25], [490, 470, 26], [540, 470, 22]];
  for (const p of palms) {
    const [x, base, w] = p;
    // trunk
    brush.fill("#3d2a1a", 215);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.1);
    brush.vertex(x - w, base - 20); brush.vertex(x, base - 20); brush.vertex(x, base + 20); brush.vertex(x + w, base + 20); brush.vertex(x + w, base - 20);
    brush.endShape(true);
    // fronds, each a fan of soft strokes
    for (let i = 0; i < 11; i++) {
      const a = i * 18 + 2;
      const r = 110 - i * 6;
      brush.fill("#2a6a2a", 200);
      brush.fillBleed(0.25);
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(0.5);
      brush.vertex(x, base - 20);
      brush.vertex(x + cos(a - 15) * r, base - 20 + sin(a - 15) * r);
      brush.vertex(x + cos(a) * r * 1.1, base - 20 + sin(a) * r * 1.1);
      brush.vertex(x + cos(a + 15) * r, base - 20 + sin(a + 15) * r);
      brush.endShape(true);
    }
  }

  // sea
  brush.fill("#0e5a8a", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, 470); brush.vertex(620, 470); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // a few whitecaps
  for (let i = 0; i < 12; i++) {
    brush.fill("#fff8d8", 235);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.2);
    brush.vertex(150 + i * 50, 482); brush.vertex(155 + i * 50, 472); brush.vertex(165 + i * 50, 482); brush.vertex(160 + i * 50, 488);
    brush.endShape(true);
  }
}
