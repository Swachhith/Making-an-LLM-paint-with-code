async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function bough(x1, y1, x2, y2, w1, w2) {
  let a = atan2(y2 - y1, x2 - x1) + 90;
  brush.beginShape(0.35);
  brush.vertex(x1 + cos(a) * w1 / 2, y1 + sin(a) * w1 / 2);
  brush.vertex(x2 + cos(a) * w2 / 2, y2 + sin(a) * w2 / 2);
  brush.vertex(x2 - cos(a) * w2 / 2, y2 - sin(a) * w2 / 2);
  brush.vertex(x1 - cos(a) * w1 / 2, y1 - sin(a) * w1 / 2);
  brush.endShape(true);
}

function spread(x, y, ang, len, w, d) {
  let x2 = x + cos(ang) * len, y2 = y + sin(ang) * len;
  bough(x, y, x2, y2, max(w, 15), max(w * 0.7, 15));
  if (d == 0) return;
  let n = d > 2 ? 2 : 3;
  for (let k = 0; k < n; k++) {
    let na = ang + map(k, 0, n - 1, -38, 38) + random(-10, 10);
    spread(x2, y2, na, len * random(0.62, 0.78), w * 0.68, d - 1);
  }
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#edeeec");
  randomSeed(22);
  brush.noStroke();
  // big sky, faintly warm near horizon
  brush.fill("#aebbc4", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 480);
  brush.vertex(-20, 480);
  brush.endShape(true);
  brush.fill("#dcc9bb", 160);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(-20, 320);
  brush.vertex(620, 340);
  brush.vertex(620, 485);
  brush.vertex(-20, 485);
  brush.endShape(true);
  // distant soft treeline
  brush.fill("#9aa3a8", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.9);
  brush.vertex(-20, 482);
  brush.vertex(60, 462);
  brush.vertex(150, 470);
  brush.vertex(260, 458);
  brush.vertex(420, 468);
  brush.vertex(620, 460);
  brush.vertex(620, 498);
  brush.vertex(-20, 498);
  brush.endShape(true);
  // snowfield with shadow
  brush.fill("#c4ccd4", 150);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(-20, 495);
  brush.vertex(620, 490);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  // twiggy haze of the crown behind the boughs
  brush.fill("#9a928c", 120);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.5);
  brush.beginShape(0.9);
  brush.vertex(120, 330);
  brush.vertex(150, 190);
  brush.vertex(260, 130);
  brush.vertex(380, 170);
  brush.vertex(430, 300);
  brush.vertex(330, 360);
  brush.vertex(200, 370);
  brush.endShape(true);
  // tree
  brush.fill("#6f6862", 190);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  bough(270, 505, 272, 380, 44, 30);
  spread(272, 385, -120, 90, 30, 3);
  spread(272, 385, -62, 95, 30, 3);
  spread(272, 385, -90, 70, 26, 2);
  brush.fill("#4d4843", 200);
  bough(270, 505, 272, 390, 26, 18);
  // tree shadow on snow
  brush.fill("#8e9aa8", 150);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(250, 505);
  brush.vertex(420, 525);
  brush.vertex(480, 540);
  brush.vertex(290, 515);
  brush.endShape(true);
}
