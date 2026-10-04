async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function trunkPiece(x1, y1, x2, y2, w1, w2) {
  let a = atan2(y2 - y1, x2 - x1) + 90;
  brush.beginShape(0.35);
  brush.vertex(x1 + cos(a) * w1 / 2, y1 + sin(a) * w1 / 2);
  brush.vertex(x2 + cos(a) * w2 / 2, y2 + sin(a) * w2 / 2);
  brush.vertex(x2 - cos(a) * w2 / 2, y2 - sin(a) * w2 / 2);
  brush.vertex(x1 - cos(a) * w1 / 2, y1 - sin(a) * w1 / 2);
  brush.endShape(true);
}

// fine twigs as trails of tiny dots, which stay crisp where thin polygons smear
function twig(x, y, ang, len, d) {
  let steps = floor(len / 6);
  let cx = x, cy = y;
  for (let s = 0; s < steps; s++) {
    ang += random(-6, 6);
    cx += cos(ang) * 6;
    cy += sin(ang) * 6;
    brush.fill("#5a534e", 200);
    brush.fillBleed(0.05);
    brush.circle(cx, cy, map(s, 0, steps, 3.2, 1.6) + d * 0.4, 0.05);
  }
  if (d > 0) {
    twig(cx, cy, ang - random(20, 35), len * 0.7, d - 1);
    twig(cx, cy, ang + random(20, 35), len * 0.7, d - 1);
  }
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eceeed");
  randomSeed(2002);
  brush.noStroke();
  brush.fill("#aab8c2", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 480);
  brush.vertex(-20, 480);
  brush.endShape(true);
  brush.fill("#dcc6b8", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(-20, 330);
  brush.vertex(620, 350);
  brush.vertex(620, 485);
  brush.vertex(-20, 485);
  brush.endShape(true);
  // misty distant treeline
  brush.fill("#98a1a8", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.9);
  brush.vertex(-20, 482);
  brush.vertex(70, 464);
  brush.vertex(170, 472);
  brush.vertex(300, 460);
  brush.vertex(450, 470);
  brush.vertex(620, 462);
  brush.vertex(620, 498);
  brush.vertex(-20, 498);
  brush.endShape(true);
  brush.fill("#c3cbd3", 150);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(-20, 495);
  brush.vertex(620, 490);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  // soft crown haze
  brush.fill("#a19891", 120);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.5);
  brush.beginShape(0.9);
  brush.vertex(90, 360);
  brush.vertex(120, 200);
  brush.vertex(250, 120);
  brush.vertex(390, 160);
  brush.vertex(450, 330);
  brush.vertex(320, 390);
  brush.vertex(180, 400);
  brush.endShape(true);
  // trunk and main limbs, tapering
  brush.fill("#6a635d", 200);
  brush.fillBleed(0.18);
  brush.fillTexture(0.4, 0.4);
  trunkPiece(268, 505, 270, 400, 40, 30);
  trunkPiece(270, 405, 215, 300, 28, 18);
  trunkPiece(270, 405, 335, 290, 26, 17);
  trunkPiece(270, 405, 276, 300, 20, 15);
  brush.fill("#4d4843", 200);
  trunkPiece(268, 505, 270, 410, 22, 16);
  // twigs from each limb end
  let ends = [[215, 300, -120], [335, 290, -60], [276, 300, -88], [245, 360, -150], [300, 350, -30]];
  for (let e of ends) {
    twig(e[0], e[1], e[2] - 15, 60, 2);
    twig(e[0], e[1], e[2] + 15, 60, 2);
  }
  // blue shadow on snow
  brush.fill("#8b98a8", 160);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(250, 505);
  brush.vertex(430, 525);
  brush.vertex(500, 542);
  brush.vertex(290, 518);
  brush.endShape(true);
}
