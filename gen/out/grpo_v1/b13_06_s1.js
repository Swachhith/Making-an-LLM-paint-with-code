async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7efe1");
  randomSeed(2107);
  brush.noStroke();
  // warm light: a big yellow wash behind the flower
  brush.fill("#f3d46a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(60, 60); brush.vertex(540, 60); brush.vertex(540, 620); brush.vertex(200, 620); brush.vertex(60, 420);
  brush.endShape(true);
  // stem: a soft arch from lower left to upper right
  brush.fill("#6e8a3a", 215);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.2);
  brush.vertex(120, 570); brush.vertex(260, 470); brush.vertex(420, 320); brush.vertex(560, 200); brush.vertex(580, 200); brush.vertex(580, 580); brush.vertex(400, 580);
  brush.endShape(true);
  // two broad leaves
  brush.fill("#5f7a34", 205);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(300, 420); brush.vertex(200, 340); brush.vertex(130, 420); brush.vertex(210, 480);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(300, 420); brush.vertex(400, 340); brush.vertex(470, 420); brush.vertex(390, 480);
  brush.endShape(true);
  // the head: pale yellow outer ring, then rings of darker petals
  let cx = 420, cy = 260;
  let rings = [[220, "#f2d25a", 160], [170, "#eab03f", 180], [120, "#d98a2c", 200], [70, "#c85a22", 215]];
  for (let r = 0; r < rings.length; r++) {
    let [R, col, op] = rings[r];
    brush.fill(col, op);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.3);
    for (let a = 0; a < 360; a += 6) {
      let px = cx + cos(a) * R, py = cy + sin(a) * R;
      let next = a + 6;
      brush.vertex(cx + cos(a) * 0.4 * R, cy + sin(a) * 0.4 * R);
      brush.vertex(px + cos(a - 10) * 10, py + sin(a - 10) * 10);
      brush.vertex(px, py);
      brush.vertex(px + cos(a + 10) * 10, py + sin(a + 10) * 10);
    }
    brush.endShape(true);
  }
  // centre: dark brown disc
  brush.fill("#7a4a1a", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.circle(cx, cy, 42, 0.5);
  // a few dark seeds in the disc
  for (let i = 0; i < 30; i++) {
    let a = random(360), r = random(20, 42);
    brush.fill("#4a2a12", 220);
    brush.circle(cx + cos(a) * r, cy + sin(a) * r, 2.5, 0.2);
  }
  // a second loose pass of the outer petals, more opaque
  brush.fill("#eab03f", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  for (let a = -30; a < 360; a += 12) {
    brush.beginShape(0.3);
    brush.vertex(cx + cos(a) * 160 * 0.4, cy + sin(a) * 160 * 0.4);
    brush.vertex(cx + cos(a - 14) * 190, cy + sin(a - 14) * 190);
    brush.vertex(cx + cos(a), cy + cos(a) * 190);
    brush.vertex(cx + cos(a + 14) * 190, cy + sin(a + 14) * 190);
    brush.endShape(true);
  }
}
