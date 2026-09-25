async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ede3d2");
  randomSeed(3);
  brush.noStroke();
  // earthy ground wash, umber to olive, lower left
  brush.fill("#c9b48f", 150);
  brush.fillBleed(0.45);
  brush.fillTexture(0.6, 0.4);
  brush.beginShape(0.9);
  brush.vertex(20, 330); brush.vertex(300, 420); brush.vertex(590, 380);
  brush.vertex(580, 590); brush.vertex(20, 590);
  brush.endShape(true);
  // olive leaves
  let lv = [[230, 380, 200, 150], [260, 390, 150, 120], [420, 400, 330, 110]];
  for (let l of lv) {
    brush.fill("#7d7a4a", 185);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.7);
    brush.vertex(l[0], l[1]);
    brush.vertex(l[0] + l[3] * 0.5 * cos(l[2] - 20), l[1] + l[3] * 0.5 * sin(l[2] - 20));
    brush.vertex(l[0] + l[3] * cos(l[2]), l[1] + l[3] * sin(l[2]));
    brush.vertex(l[0] + l[3] * 0.5 * cos(l[2] + 20), l[1] + l[3] * 0.5 * sin(l[2] + 20));
    brush.endShape(true);
  }
  // stems
  brush.fill("#6b5a3a", 200);
  brush.fillBleed(0.08);
  brush.beginShape(0.5);
  brush.vertex(245, 360); brush.vertex(255, 360); brush.vertex(280, 590); brush.vertex(268, 590);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(448, 250); brush.vertex(456, 252); brush.vertex(300, 590); brush.vertex(290, 588);
  brush.endShape(true);
  // open bloom: rings of ruffled petals from outside in, darker toward the heart
  let cx = 240, cy = 270;
  let rings = [[150, 11, "#9a4a4f", 175], [115, 9, "#86303c", 190], [80, 8, "#732433", 205], [48, 6, "#5e1a2a", 220]];
  for (let R of rings) {
    for (let i = 0; i < R[1]; i++) {
      let a = i * 360 / R[1] + random(-10, 10);
      let w = 360 / R[1] * 0.75;
      let rr = R[0] * random(0.85, 1.05);
      brush.fill(R[2], R[3] + random(-15, 10));
      brush.fillBleed(random(0.15, 0.3));
      brush.fillTexture(0.55, 0.5);
      brush.beginShape(0.8);
      brush.vertex(cx + rr * 0.25 * cos(a), cy + rr * 0.22 * sin(a));
      brush.vertex(cx + rr * 0.9 * cos(a - w), cy + rr * 0.8 * sin(a - w));
      brush.vertex(cx + rr * cos(a - w * 0.3), cy + rr * 0.88 * sin(a - w * 0.3));
      brush.vertex(cx + rr * 0.95 * cos(a + w * 0.2), cy + rr * 0.84 * sin(a + w * 0.2));
      brush.vertex(cx + rr * 0.88 * cos(a + w), cy + rr * 0.78 * sin(a + w));
      brush.endShape(true);
    }
  }
  brush.fill("#c29a5a", 190);
  brush.fillBleed(0.1);
  brush.circle(cx + 5, cy - 3, 14, true);
  // closed bud, upper right
  brush.fill("#8a3441", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.circle(455, 215, 42, true);
  brush.fill("#6a1f2e", 200);
  brush.fillBleed(0.15);
  brush.beginShape(0.8);
  brush.vertex(430, 200); brush.vertex(455, 176); brush.vertex(485, 205);
  brush.vertex(470, 240); brush.vertex(440, 238);
  brush.endShape(true);
  // sepals cupping the bud
  brush.fill("#6f6d3d", 205);
  brush.fillBleed(0.12);
  brush.beginShape(0.7);
  brush.vertex(418, 225); brush.vertex(455, 262); brush.vertex(492, 228);
  brush.vertex(470, 250); brush.vertex(455, 240); brush.vertex(438, 250);
  brush.endShape(true);
}
