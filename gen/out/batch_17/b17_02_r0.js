async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function limb(x1, y1, x2, y2, w) {
  let a = atan2(y2 - y1, x2 - x1) + 90;
  let dx = cos(a) * w / 2, dy = sin(a) * w / 2;
  brush.beginShape(0.3);
  brush.vertex(x1 + dx, y1 + dy);
  brush.vertex(x2 + dx * 0.4, y2 + dy * 0.4);
  brush.vertex(x2 - dx * 0.4, y2 - dy * 0.4);
  brush.vertex(x1 - dx, y1 - dy);
  brush.endShape(true);
}

function grow(x, y, ang, len, w, depth) {
  if (depth == 0 || w < 15) return;
  let x2 = x + cos(ang) * len, y2 = y + sin(ang) * len;
  limb(x, y, x2, y2, w);
  grow(x2, y2, ang - random(18, 34), len * 0.72, w * 0.7, depth - 1);
  grow(x2, y2, ang + random(18, 34), len * 0.72, w * 0.7, depth - 1);
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef0f0");
  randomSeed(2);
  brush.noStroke();
  // big soft sky
  brush.fill("#b8c4cc", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 470);
  brush.vertex(-20, 470);
  brush.endShape(true);
  brush.fill("#d9cfc6", 150);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(-20, 300);
  brush.vertex(620, 330);
  brush.vertex(620, 480);
  brush.vertex(-20, 480);
  brush.endShape(true);
  // distant treeline
  brush.fill("#9ea8ae", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.9);
  brush.vertex(-20, 470);
  brush.vertex(80, 455);
  brush.vertex(200, 462);
  brush.vertex(340, 450);
  brush.vertex(620, 465);
  brush.vertex(620, 490);
  brush.vertex(-20, 490);
  brush.endShape(true);
  // snowy ground
  brush.fill("#c9d0d6", 140);
  brush.fillBleed(0.2);
  brush.beginShape(0.6);
  brush.vertex(-20, 485);
  brush.vertex(620, 480);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  // tree, soft grey-brown
  brush.fill("#7d766f", 170);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  grow(230, 495, -90, 150, 40, 5);
  brush.fill("#5f5a55", 200);
  brush.fillBleed(0.15);
  limb(230, 500, 232, 360, 30);
  // haze of twigs
  brush.fill("#8d8680", 90);
  brush.fillBleed(0.3);
  brush.circle(230, 250, 130, 0.5);
}
