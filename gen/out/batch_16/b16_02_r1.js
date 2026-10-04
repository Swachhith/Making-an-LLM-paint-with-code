async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2f4f6");
  brush.noStroke();

  // thin band of sky
  brush.fill("#a9c3dc", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 120);
  brush.vertex(-20, 130);
  brush.endShape(true);

  // far tree line
  brush.fill("#7f98a8", 180);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 115);
  brush.vertex(80, 100);
  brush.vertex(160, 110);
  brush.vertex(260, 95);
  brush.vertex(400, 108);
  brush.vertex(520, 96);
  brush.vertex(620, 105);
  brush.vertex(620, 140);
  brush.vertex(-20, 140);
  brush.endShape(true);

  // pale field base
  brush.fill("#c9c3e0", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, 130);
  brush.vertex(620, 130);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);

  // rows converge to vanishing point at (300, 120)
  let vx = 300, vy = 120;
  let n = 9;
  for (let i = 0; i < n; i++) {
    let b0 = -300 + i * 150;
    let b1 = b0 + 90;
    let t0 = vx + (b0 - vx) * 0.04;
    let t1 = vx + (b1 - vx) * 0.04;
    brush.fill(i % 2 ? "#7d6fc0" : "#8a78c9", 200);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.2);
    brush.vertex(t0, 135);
    brush.vertex(t1, 135);
    brush.vertex(b1, 620);
    brush.vertex(b0, 620);
    brush.endShape(true);
  }

  // second deeper pass in the foreground part of each row
  for (let i = 0; i < n; i++) {
    let b0 = -300 + i * 150 + 10;
    let b1 = b0 + 70;
    let m0 = vx + (b0 - vx) * 0.55;
    let m1 = vx + (b1 - vx) * 0.55;
    brush.fill("#4a3796", 215);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.3);
    brush.vertex(m0, 380);
    brush.vertex(m1, 380);
    brush.vertex(b1, 620);
    brush.vertex(b0, 620);
    brush.endShape(true);
  }

  // green soil gaps between rows, foreground only
  for (let i = 0; i < n; i++) {
    let g = -300 + i * 150 + 100;
    let m = vx + (g - vx) * 0.5;
    brush.fill("#8fb0a2", 170);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.3);
    brush.vertex(m - 6, 360);
    brush.vertex(m + 10, 360);
    brush.vertex(g + 40, 620);
    brush.vertex(g - 10, 620);
    brush.endShape(true);
  }

  // dabs of flower heads in front
  for (let i = 0; i < 70; i++) {
    let x = (i * 73) % 600;
    let y = 440 + ((i * 37) % 160);
    brush.fill("#6a52b8", 210);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.circle(x, y, 6 + (i % 4), 0.6);
  }

  // lone tree on the horizon
  brush.fill("#5f7486", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.circle(460, 98, 18, 0.5);
}
