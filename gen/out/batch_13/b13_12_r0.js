async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#1a1840");
  randomSeed(12);
  brush.noStroke();
  // violet glow swirls in the sky
  brush.fill("#4a2f7a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(160, 150, 150, 0.6);
  brush.fill("#2e3a8e", 190);
  brush.circle(450, 250, 180, 0.6);
  brush.fill("#5a3a8e", 150);
  brush.circle(300, 60, 90, 0.7);
  // stars: pale dots with haloes
  for (let i = 0; i < 70; i++) {
    let x = random(0, 600), y = random(0, 440);
    let s = random(1, 3);
    brush.fill("#fff4d6", 220);
    brush.fillBleed(0.1);
    brush.circle(x, y, s, 0.2);
  }
  let big = [[90, 90], [240, 200], [520, 110], [400, 340]];
  for (let b of big) {
    brush.fill("#c8b8f0", 170);
    brush.fillBleed(0.3);
    brush.circle(b[0], b[1], 16, 0.4);
    brush.fill("#fff6dc", 240);
    brush.circle(b[0], b[1], 6, 0.2);
  }
  // low hill
  brush.fill("#0e0c26", 230);
  brush.fillBleed(0.2);
  brush.beginShape(1);
  brush.vertex(-10, 480);
  brush.vertex(200, 455);
  brush.vertex(400, 470);
  brush.vertex(610, 450);
  brush.vertex(610, 610);
  brush.vertex(-10, 610);
  brush.endShape(true);
  // village houses
  let hs = [[150, 470, 34, 30], [190, 462, 30, 40], [230, 468, 40, 28], [280, 460, 28, 44], [320, 468, 36, 32]];
  for (let h of hs) {
    let x = h[0], y = h[1], w = h[2], ht = h[3];
    brush.fill("#221c46", 235);
    brush.fillBleed(0.15);
    brush.beginShape(0);
    brush.vertex(x, y);
    brush.vertex(x + w / 2, y - ht * 0.45);
    brush.vertex(x + w, y);
    brush.vertex(x + w, y + 30);
    brush.vertex(x, y + 30);
    brush.endShape(true);
  }
  // church spire
  brush.fill("#221c46", 235);
  brush.beginShape(0);
  brush.vertex(360, 490);
  brush.vertex(360, 440);
  brush.vertex(370, 400);
  brush.vertex(380, 440);
  brush.vertex(380, 490);
  brush.endShape(true);
  // lit windows
  let w = [[160, 480], [200, 476], [244, 480], [262, 482], [288, 474], [332, 480], [368, 452]];
  for (let p of w) {
    brush.fill("#f6c24a", 240);
    brush.fillBleed(0.15);
    brush.circle(p[0], p[1], 4, 0.2);
    brush.fill("#e89a2a", 120);
    brush.fillBleed(0.3);
    brush.circle(p[0], p[1], 9, 0.5);
  }
}
