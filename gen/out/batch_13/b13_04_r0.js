async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f8f2e4");
  randomSeed(4);
  brush.noStroke();
  // wide cobalt sky
  brush.fill("#2a6fd0", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(1);
  brush.vertex(-10, -10);
  brush.vertex(610, -10);
  brush.vertex(610, 380);
  brush.vertex(-10, 400);
  brush.endShape(true);
  brush.fill("#1a4fb0", 170);
  brush.fillBleed(0.25);
  brush.beginShape(1);
  brush.vertex(-10, -10);
  brush.vertex(610, -10);
  brush.vertex(610, 140);
  brush.vertex(-10, 180);
  brush.endShape(true);
  // a couple of paper-white cloud gaps left: nothing painted there
  // field: bold yellow-green
  brush.fill("#9cc21e", 210);
  brush.fillBleed(0.3);
  brush.beginShape(1);
  brush.vertex(-10, 400);
  brush.vertex(300, 385);
  brush.vertex(610, 376);
  brush.vertex(610, 610);
  brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#5f9a12", 180);
  brush.fillBleed(0.25);
  brush.beginShape(1);
  brush.vertex(-10, 470);
  brush.vertex(300, 450);
  brush.vertex(610, 480);
  brush.vertex(610, 610);
  brush.vertex(-10, 610);
  brush.endShape(true);
  // the small oak, right of centre-left, at about x=170
  let tx = 170, ty = 392;
  brush.fill("#3a2a18", 220);
  brush.fillBleed(0.2);
  brush.beginShape(1);
  brush.vertex(tx - 9, ty);
  brush.vertex(tx - 5, ty - 45);
  brush.vertex(tx + 6, ty - 45);
  brush.vertex(tx + 10, ty);
  brush.endShape(true);
  // crown in three passes
  let blobs = [[tx, ty - 80, 50], [tx - 38, ty - 62, 34], [tx + 40, ty - 64, 34], [tx - 10, ty - 110, 32]];
  for (let b of blobs) {
    brush.fill("#2f7a18", 200);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.circle(b[0], b[1], b[2], 0.6);
  }
  for (let b of blobs) {
    brush.fill("#1c5210", 200);
    brush.fillBleed(0.2);
    brush.circle(b[0] + 6, b[1] + 8, b[2] * 0.6, 0.6);
  }
  brush.fill("#0f3208", 190);
  brush.circle(tx + 10, ty - 58, 22, 0.5);
  // shadow pool under it
  brush.fill("#2e5a0c", 200);
  brush.fillBleed(0.25);
  brush.beginShape(1);
  brush.vertex(tx - 50, ty + 2);
  brush.vertex(tx + 90, ty - 2);
  brush.vertex(tx + 70, ty + 12);
  brush.vertex(tx - 40, ty + 12);
  brush.endShape(true);
}
