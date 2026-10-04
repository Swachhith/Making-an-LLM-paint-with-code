async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7f4ea");
  brush.noStroke();
  // bloom sits low-left this time; the empty paper is the upper right
  let cx = 190, cy = 380;
  // faint grey-green shadow wash under the flower
  brush.fill("#d8d8c4", 175);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.circle(cx + 30, cy + 40, 170, 0.6);
  // stem dropping off the bottom edge
  brush.fill("#2f6420", 220);
  brush.fillBleed(0.2);
  brush.beginShape(1);
  brush.vertex(cx - 8, cy + 40);
  brush.vertex(cx + 14, cy + 140);
  brush.vertex(cx + 40, cy + 230);
  brush.vertex(cx + 60, cy + 230);
  brush.vertex(cx + 32, cy + 140);
  brush.vertex(cx + 12, cy + 40);
  brush.endShape(true);
  // frilly leaf collar, drawn as fat lobed shapes
  let lf = [[-1, 110], [1, 116]];
  for (let l of lf) {
    brush.fill("#4f8a26", 210);
    brush.fillBleed(0.26);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(1);
    brush.vertex(cx + 10, cy + 100);
    brush.vertex(cx + l[0] * 50, cy + 80);
    brush.vertex(cx + l[0] * 100, cy + 100);
    brush.vertex(cx + l[0] * 80, cy + 120);
    brush.vertex(cx + l[0] * 110, cy + 140);
    brush.vertex(cx + l[0] * 50, cy + 140);
    brush.vertex(cx + 10, cy + l[1] + 16);
    brush.endShape(true);
  }
  // petals in pure scarlet: orange-red first, crimson glaze, dark pooling
  let cols = [["#ff2a10", 225], ["#e0101a", 215], ["#b0001a", 200]];
  for (let pass = 0; pass < 3; pass++) {
    for (let k = 0; k < 6; k++) {
      let a = k * 60 - 20 + pass * 5;
      let r = 128 - pass * 28;
      brush.fill(cols[pass][0], cols[pass][1]);
      brush.fillBleed(0.28);
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(1);
      brush.vertex(cx, cy);
      brush.vertex(cx + cos(a - 28) * r * 0.9, cy + sin(a - 28) * r * 0.9);
      brush.vertex(cx + cos(a - 10) * r * 1.05, cy + sin(a - 10) * r * 1.05);
      brush.vertex(cx + cos(a + 12) * r * 1.02, cy + sin(a + 12) * r * 1.02);
      brush.vertex(cx + cos(a + 28) * r * 0.86, cy + sin(a + 28) * r * 0.86);
      brush.endShape(true);
    }
  }
  brush.fill("#5a000e", 190);
  brush.fillBleed(0.25);
  for (let k = 0; k < 6; k++) {
    let a = k * 60 + 10;
    brush.circle(cx + cos(a) * 40, cy + sin(a) * 40, 16, 0.7);
  }
  // near-black centre with a crown of dotted stamens
  brush.fill("#0e0816", 250);
  brush.fillBleed(0.15);
  brush.fillTexture(0.4, 0.4);
  brush.circle(cx, cy, 28, 0.25);
  brush.fill("#050208", 250);
  brush.circle(cx, cy, 18, 0.2);
  for (let k = 0; k < 22; k++) {
    let a = k * 16.4;
    brush.fill("#0a0410", 240);
    brush.fillBleed(0.08);
    brush.circle(cx + cos(a) * 38, cy + sin(a) * 38, 3.5, 0.3);
  }
  // one closed bud upper right to balance, small
  brush.fill("#d0101a", 215);
  brush.fillBleed(0.25);
  brush.circle(440, 150, 18, 0.4);
  brush.fill("#8a0012", 190);
  brush.circle(444, 154, 10, 0.4);
  brush.fill("#3c6a24", 205);
  brush.beginShape(1);
  brush.vertex(434, 166);
  brush.vertex(448, 166);
  brush.vertex(330, 610);
  brush.vertex(312, 610);
  brush.endShape(true);
}
