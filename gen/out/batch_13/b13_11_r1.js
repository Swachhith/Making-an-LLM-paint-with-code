async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f5f2f5");
  brush.noStroke();
  // soft grey-lilac sky wash so the white tepals show as paper
  brush.fill("#bfb4cf", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(1);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#d8c8d4", 160);
  brush.circle(160, 460, 180, 0.7);
  // one bough arcing from the lower left, up over the top, down to the right
  brush.fill("#5a4038", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(1);
  brush.vertex(-10, 560);
  brush.vertex(120, 330);
  brush.vertex(300, 200);
  brush.vertex(480, 230);
  brush.vertex(580, 380);
  brush.vertex(566, 388);
  brush.vertex(470, 250);
  brush.vertex(300, 222);
  brush.vertex(136, 344);
  brush.vertex(10, 580);
  brush.endShape(true);
  // three magnolia cups: tulip-shaped, tepals pointing up, rose base fading to paper
  let fl = [[140, 300, 1.0], [320, 180, 1.25], [520, 290, 0.9]];
  for (let f of fl) {
    let x = f[0], y = f[1], s = f[2];
    // soft shadow halo behind so white edges read
    brush.fill("#a894b8", 190);
    brush.fillBleed(0.3);
    brush.circle(x, y - 40 * s, 62 * s, 0.6);
    // outer tepals, deep pink at the base
    let tp = [-36, -12, 12, 36];
    for (let t of tp) {
      let a = -90 + t;
      brush.fill("#e080a8", 205);
      brush.fillBleed(0.25);
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(1);
      brush.vertex(x - 16 * s, y);
      brush.vertex(x + cos(a - 10) * 70 * s, y + sin(a - 10) * 70 * s);
      brush.vertex(x + cos(a) * 92 * s, y + sin(a) * 92 * s);
      brush.vertex(x + cos(a + 10) * 70 * s, y + sin(a + 10) * 70 * s);
      brush.vertex(x + 16 * s, y);
      brush.endShape(true);
    }
    // inner blush pooling at the base
    brush.fill("#b8387a", 205);
    brush.fillBleed(0.22);
    brush.beginShape(1);
    brush.vertex(x - 20 * s, y + 4);
    brush.vertex(x - 14 * s, y - 30 * s);
    brush.vertex(x + 14 * s, y - 30 * s);
    brush.vertex(x + 20 * s, y + 4);
    brush.endShape(true);
    // furry green-brown calyx
    brush.fill("#6a6a3a", 210);
    brush.circle(x, y + 8, 12 * s, 0.4);
  }
  // one bud
  brush.fill("#d06c98", 210);
  brush.fillBleed(0.25);
  brush.beginShape(1);
  brush.vertex(56, 430);
  brush.vertex(40, 390);
  brush.vertex(56, 360);
  brush.vertex(72, 390);
  brush.endShape(true);
}
