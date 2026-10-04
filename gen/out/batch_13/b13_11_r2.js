async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6f3f0");
  brush.noStroke();
  // a pale blue-grey spring sky in two loose washes, darker toward the top
  brush.fill("#b0bccc", 185);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(1);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#8e9cb4", 170);
  brush.fillBleed(0.3);
  brush.beginShape(1);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 160);
  brush.vertex(-20, 240);
  brush.endShape(true);
  // the bough: dark, arching from upper left, across and down to the right edge
  for (let pass = 0; pass < 2; pass++) {
    let w = pass ? 8 : 16;
    brush.fill(pass ? "#2e2220" : "#584038", 225);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.4);
    brush.beginShape(1);
    brush.vertex(-10, 140);
    brush.vertex(160, 220);
    brush.vertex(340, 250);
    brush.vertex(500, 330);
    brush.vertex(610, 470);
    brush.vertex(610, 470 + w * 2);
    brush.vertex(496, 330 + w * 2);
    brush.vertex(336, 250 + w * 2);
    brush.vertex(156, 220 + w * 2);
    brush.vertex(-10, 140 + w * 2);
    brush.endShape(true);
  }
  // flowers sitting upright on the bough: white tepals left as paper,
  // shaped by a pink flush at the base and grey-violet shadow between tepals
  let fl = [[150, 222, 1.1], [360, 256, 1.3], [520, 348, 0.9]];
  for (let f of fl) {
    let x = f[0], y = f[1], s = f[2];
    // shadow shapes between the tepals give the white its form
    brush.fill("#8e84a8", 200);
    brush.fillBleed(0.22);
    brush.beginShape(1);
    brush.vertex(x - 6 * s, y - 20 * s);
    brush.vertex(x - 2 * s, y - 90 * s);
    brush.vertex(x + 6 * s, y - 20 * s);
    brush.endShape(true);
    // outer tepals: pink at the base, fading up
    let tp = [-30, 0, 30];
    for (let t of tp) {
      let a = -90 + t;
      brush.fill("#d86a98", 215);
      brush.fillBleed(0.25);
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(1);
      brush.vertex(x - 12 * s, y);
      brush.vertex(x + cos(a - 16) * 50 * s, y + sin(a - 16) * 50 * s);
      brush.vertex(x + cos(a) * 64 * s, y + sin(a) * 64 * s);
      brush.vertex(x + cos(a + 16) * 50 * s, y + sin(a + 16) * 50 * s);
      brush.vertex(x + 12 * s, y);
      brush.endShape(true);
    }
    brush.fill("#a8246a", 210);
    brush.fillBleed(0.2);
    brush.beginShape(1);
    brush.vertex(x - 16 * s, y + 2);
    brush.vertex(x - 10 * s, y - 26 * s);
    brush.vertex(x + 10 * s, y - 26 * s);
    brush.vertex(x + 16 * s, y + 2);
    brush.endShape(true);
    brush.fill("#5a5230", 220);
    brush.circle(x, y + 4, 9 * s, 0.4);
  }
  // fallen tepal drifting in the empty lower left
  brush.fill("#e08aac", 200);
  brush.fillBleed(0.25);
  brush.beginShape(1);
  brush.vertex(120, 470);
  brush.vertex(160, 440);
  brush.vertex(200, 450);
  brush.vertex(160, 490);
  brush.endShape(true);
}
