async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf6ee");
  brush.noStroke();

  // soft mint background wash, loose
  brush.fill("#bfdccf", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);

  let cx = 290, cy = 310;
  // petals: 13 long rays, each two passes
  for (let i = 0; i < 13; i++) {
    let a = i * (360 / 13) + 8;
    let len = 250 + (i % 3) * 18;
    let w = 16;
    let tx = cx + cos(a) * len, ty = cy + sin(a) * len;
    let lx = cx + cos(a - w) * 90, ly = cy + sin(a - w) * 90;
    let rx = cx + cos(a + w) * 90, ry = cy + sin(a + w) * 90;
    let mlx = cx + cos(a - 8) * (len * 0.8), mly = cy + sin(a - 8) * (len * 0.8);
    let mrx = cx + cos(a + 8) * (len * 0.8), mry = cy + sin(a + 8) * (len * 0.8);
    brush.fill("#f5cf6a", 190);
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.6);
    brush.vertex(cx, cy);
    brush.vertex(lx, ly);
    brush.vertex(mlx, mly);
    brush.vertex(tx, ty);
    brush.vertex(mrx, mry);
    brush.vertex(rx, ry);
    brush.endShape(true);
  }
  // inner deeper pass near the base of the petals
  for (let i = 0; i < 13; i++) {
    let a = i * (360 / 13) + 8;
    let len = 150;
    brush.fill("#eeaa4a", 170);
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.6);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 10) * 90, cy + sin(a - 10) * 90);
    brush.vertex(cx + cos(a) * len, cy + sin(a) * len);
    brush.vertex(cx + cos(a + 10) * 90, cy + sin(a + 10) * 90);
    brush.endShape(true);
  }

  // dark eye, soft brown not black for pastel palette
  brush.fill("#8a6a5a", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.circle(cx, cy, 70, 0.3);
  brush.fill("#5e4438", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.circle(cx - 8, cy - 6, 48, 0.4);
  // highlight dots on the cone
  for (let i = 0; i < 8; i++) {
    brush.fill("#b58f6d", 180);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.circle(cx + cos(i * 45) * 32, cy + sin(i * 45) * 32, 6, 0.5);
  }
}
