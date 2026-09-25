async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcfbf8");
  brush.noStroke();

  const cx = 300, cy = 300;

  // pale sage leaf tips peeking from under the cup
  for (const a of [140, 250, 20]) {
    brush.fill("#b9cfa8", 190);
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.6);
    brush.beginShape(0.9);
    brush.vertex(cx + cos(a - 15) * 150, cy + sin(a - 15) * 150);
    brush.vertex(cx + cos(a) * 285, cy + sin(a) * 285);
    brush.vertex(cx + cos(a + 15) * 150, cy + sin(a + 15) * 150);
    brush.endShape(true);
  }

  // outer three petals: wide, rounded ends, laid twice
  for (let k = 0; k < 3; k++) {
    const a = 80 + k * 120;
    for (const [sc, col, op, bl] of [[1, "#f6c3cf", 195, 0.35], [0.82, "#f2aabc", 190, 0.2]]) {
      brush.fill(col, op);
      brush.fillBleed(bl);
      brush.fillTexture(0.3, 0.6);
      brush.beginShape(1);
      brush.vertex(cx + cos(a - 35) * 40 * sc, cy + sin(a - 35) * 40 * sc);
      brush.vertex(cx + cos(a - 32) * 175 * sc, cy + sin(a - 32) * 175 * sc);
      brush.vertex(cx + cos(a - 12) * 215 * sc, cy + sin(a - 12) * 215 * sc);
      brush.vertex(cx + cos(a + 12) * 215 * sc, cy + sin(a + 12) * 215 * sc);
      brush.vertex(cx + cos(a + 32) * 175 * sc, cy + sin(a + 32) * 175 * sc);
      brush.vertex(cx + cos(a + 35) * 40 * sc, cy + sin(a + 35) * 40 * sc);
      brush.endShape(true);
    }
    // a white midrib left unpainted is suggested by a lighter stroke
    brush.fill("#fdf1f3", 190);
    brush.fillBleed(0.1);
    brush.beginShape(0.8);
    brush.vertex(cx + cos(a - 3) * 60, cy + sin(a - 3) * 60);
    brush.vertex(cx + cos(a) * 175, cy + sin(a) * 175);
    brush.vertex(cx + cos(a + 3) * 60, cy + sin(a + 3) * 60);
    brush.endShape(true);
  }
  // inner three, curled over the heart
  for (let k = 0; k < 3; k++) {
    const a = 20 + k * 120;
    brush.fill("#eea0b3", 200);
    brush.fillBleed(0.25);
    brush.fillTexture(0.3, 0.5);
    brush.beginShape(1);
    brush.vertex(cx + cos(a - 40) * 25, cy + sin(a - 40) * 25);
    brush.vertex(cx + cos(a - 28) * 120, cy + sin(a - 28) * 120);
    brush.vertex(cx + cos(a) * 150, cy + sin(a) * 150);
    brush.vertex(cx + cos(a + 28) * 120, cy + sin(a + 28) * 120);
    brush.vertex(cx + cos(a + 40) * 25, cy + sin(a + 40) * 25);
    brush.endShape(true);
    brush.fill("#e28aa1", 185);
    brush.fillBleed(0.3);
    brush.beginShape(1);
    brush.vertex(cx + cos(a + 10) * 30, cy + sin(a + 10) * 30);
    brush.vertex(cx + cos(a + 26) * 110, cy + sin(a + 26) * 110);
    brush.vertex(cx + cos(a + 36) * 40, cy + sin(a + 36) * 40);
    brush.endShape(true);
  }
  brush.fill("#e9e6a6", 215);
  brush.fillBleed(0.2);
  brush.circle(cx, cy, 30, 0.4);
  for (let i = 0; i < 6; i++) {
    const a = i * 60 + 10;
    brush.fill("#4d3d4b", 215);
    brush.fillBleed(0.05);
    brush.circle(cx + cos(a) * 30, cy + sin(a) * 30, 6, 0.5);
  }
  brush.fill("#a8bd78", 215);
  brush.circle(cx, cy, 10, 0.3);
}
