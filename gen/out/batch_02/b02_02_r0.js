async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcfbf8");

  // slender twining stem, bare paper all around
  brush.noStroke();
  brush.fill("#a8c7a0", 180);
  brush.fillBleed(0.08, "out");
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(1);
  brush.vertex(300, 585);
  brush.vertex(330, 500);
  brush.vertex(290, 420);
  brush.vertex(320, 330);
  brush.vertex(328, 334);
  brush.vertex(300, 422);
  brush.vertex(340, 500);
  brush.vertex(310, 585);
  brush.endShape(true);

  // two heart-shaped leaves, pale
  let hearts = [[305, 440, 160, -1], [330, 520, 110, 1]];
  for (let h of hearts) {
    let x = h[0], y = h[1], s = h[2], d = h[3];
    brush.fill("#bcd8b2", 165);
    brush.fillBleed(0.3, "out");
    brush.fillTexture(0.5, 0.4);
    brush.beginShape(0.8);
    brush.vertex(x, y);
    brush.vertex(x + d * s * 0.35, y - s * 0.3);
    brush.vertex(x + d * s * 0.7, y - s * 0.15);
    brush.vertex(x + d * s * 0.95, y + s * 0.25);
    brush.vertex(x + d * s * 0.6, y + s * 0.2);
    brush.vertex(x + d * s * 0.3, y + s * 0.1);
    brush.endShape(true);
    brush.fill("#95bd8f", 150);
    brush.fillBleed(0.1, "out");
    brush.beginShape(0.8);
    brush.vertex(x + d * s * 0.2, y);
    brush.vertex(x + d * s * 0.5, y - s * 0.12);
    brush.vertex(x + d * s * 0.85, y + s * 0.2);
    brush.vertex(x + d * s * 0.5, y + s * 0.1);
    brush.endShape(true);
  }

  // open trumpet face, a soft round wash
  let cx = 320, cy = 240;
  brush.fill("#b8cdf2", 160);
  brush.fillBleed(0.4, "out");
  brush.fillTexture(0.6, 0.5);
  brush.circle(cx, cy, 125, true);

  // five pleated segments, a touch deeper
  for (let i = 0; i < 5; i++) {
    let a = -90 + i * 72;
    brush.fill("#8eaee9", 170);
    brush.fillBleed(0.2, "out");
    brush.fillTexture(0.5, 0.6);
    brush.beginShape(0.6);
    brush.vertex(cx + cos(a) * 30, cy + sin(a) * 30);
    brush.vertex(cx + cos(a - 26) * 110, cy + sin(a - 26) * 110);
    brush.vertex(cx + cos(a - 10) * 122, cy + sin(a - 10) * 122);
    brush.vertex(cx + cos(a) * 60, cy + sin(a) * 60);
    brush.endShape(true);
  }

  // pale star ribs left as near-white
  for (let i = 0; i < 5; i++) {
    let a = -90 + 36 + i * 72;
    brush.fill("#f4f1fb", 200);
    brush.fillBleed(0.1, "out");
    brush.beginShape(0.5);
    brush.vertex(cx + cos(a - 4) * 28, cy + sin(a - 4) * 28);
    brush.vertex(cx + cos(a) * 118, cy + sin(a) * 118);
    brush.vertex(cx + cos(a + 4) * 28, cy + sin(a + 4) * 28);
    brush.endShape(true);
  }

  // glowing throat
  brush.fill("#fbf2c8", 210);
  brush.fillBleed(0.3, "out");
  brush.circle(cx, cy, 32, true);
  brush.fill("#e9d98a", 170);
  brush.fillBleed(0.15, "out");
  brush.circle(cx, cy, 12, true);

  // calyx joining stem
  brush.fill("#9cc093", 190);
  brush.fillBleed(0.1, "out");
  brush.beginShape(0.6);
  brush.vertex(310, 350);
  brush.vertex(322, 318);
  brush.vertex(338, 350);
  brush.endShape(true);
}
