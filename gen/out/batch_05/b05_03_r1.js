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
  // earthy ground wash
  brush.fill("#c4ad85", 165);
  brush.fillBleed(0.45);
  brush.fillTexture(0.6, 0.4);
  brush.beginShape(0.9);
  brush.vertex(20, 360); brush.vertex(300, 430); brush.vertex(590, 390);
  brush.vertex(580, 590); brush.vertex(20, 590);
  brush.endShape(true);
  // stems
  brush.fill("#5f4f31", 215);
  brush.fillBleed(0.08);
  brush.beginShape(0.5);
  brush.vertex(245, 380); brush.vertex(256, 380); brush.vertex(282, 590); brush.vertex(269, 590);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(455, 260); brush.vertex(463, 262); brush.vertex(300, 590); brush.vertex(290, 588);
  brush.endShape(true);
  // olive peony leaves, deeply lobed
  let lv = [[255, 420, 200, 140], [265, 440, 150, 125], [390, 400, 320, 115], [270, 500, 20, 110]];
  for (let l of lv) {
    brush.fill("#6f6c3e", 205);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.7);
    brush.vertex(l[0], l[1]);
    brush.vertex(l[0] + l[3] * 0.5 * cos(l[2] - 22), l[1] + l[3] * 0.5 * sin(l[2] - 22));
    brush.vertex(l[0] + l[3] * cos(l[2]), l[1] + l[3] * sin(l[2]));
    brush.vertex(l[0] + l[3] * 0.5 * cos(l[2] + 22), l[1] + l[3] * 0.5 * sin(l[2] + 22));
    brush.endShape(true);
  }
  // open bloom: a loose outer skirt then ruffled rings, deepening inward
  let cx = 240, cy = 260;
  brush.fill("#a5585a", 170);
  brush.fillBleed(0.4);
  brush.fillTexture(0.6, 0.4);
  brush.circle(cx, cy + 10, 150, true);
  let rings = [[150, 11, "#8e3a42", 200], [118, 9, "#7a2634", 210], [84, 8, "#651b2b", 220], [52, 6, "#4f1322", 230]];
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
  brush.fill("#b8904e", 205);
  brush.fillBleed(0.1);
  brush.circle(cx + 5, cy - 3, 14, true);
  // closed bud: a sphere with a darker overlapping fold
  brush.fill("#843040", 215);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.circle(460, 215, 46, true);
  brush.fill("#5a1626", 215);
  brush.fillBleed(0.15);
  brush.beginShape(0.8);
  brush.vertex(432, 200); brush.vertex(460, 172); brush.vertex(492, 205);
  brush.vertex(475, 245); brush.vertex(445, 242);
  brush.endShape(true);
  brush.fill("#b56a6a", 170);
  brush.fillBleed(0.1);
  brush.circle(448, 192, 10, true);
  // sepals cupping the bud
  brush.fill("#5e5c33", 220);
  brush.fillBleed(0.12);
  brush.beginShape(0.7);
  brush.vertex(418, 228); brush.vertex(460, 270); brush.vertex(500, 230);
  brush.vertex(475, 252); brush.vertex(460, 242); brush.vertex(440, 254);
  brush.endShape(true);
}
