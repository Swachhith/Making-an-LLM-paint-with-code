async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcfaf8");
  randomSeed(707);
  brush.noStroke();
  let cx = 310, cy = 300;
  // many small overlapping rounded strokes, spiralling inward
  for (let k = 0; k < 70; k++) {
    let t = k / 70;
    let a = k * 137.5;
    let r = 260 * (1 - t) + 25;
    let sz = 70 * (1 - t) + 18;
    let x = cx + cos(a) * r * 0.85;
    let y = cy + sin(a) * r * 0.85;
    let col = t < 0.5 ? "#f5b3b0" : (t < 0.8 ? "#ec8a88" : "#d9525a");
    brush.fill(col, 140 + t * 70);
    brush.fillBleed(0.35 - t * 0.2, "out");
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(1);
    let dx = cos(a), dy = sin(a), px = -dy, py = dx;
    brush.vertex(x - dx * sz * 0.4 - px * sz, y - dy * sz * 0.4 - py * sz);
    brush.vertex(x + dx * sz * 0.5 - px * sz * 0.8, y + dy * sz * 0.5 - py * sz * 0.8);
    brush.vertex(x + dx * sz * 0.7, y + dy * sz * 0.7);
    brush.vertex(x + dx * sz * 0.5 + px * sz * 0.8, y + dy * sz * 0.5 + py * sz * 0.8);
    brush.vertex(x - dx * sz * 0.4 + px * sz, y - dy * sz * 0.4 + py * sz);
    brush.endShape(true);
  }
  brush.fill("#f0c95c", 220);
  brush.fillBleed(0.1, "out");
  for (let i = 0; i < 18; i++) {
    let a = random(360), r = random(0, 22);
    brush.circle(cx + cos(a) * r, cy + sin(a) * r, 6, true);
  }
}
