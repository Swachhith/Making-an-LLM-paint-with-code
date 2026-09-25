async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcfaf8");
  randomSeed(708);
  brush.noStroke();
  let cx = 305, cy = 300;
  // a few pale outer leaves peeking from behind
  brush.fill("#b5c9a4", 200);
  brush.fillBleed(0.3, "out");
  brush.fillTexture(0.5, 0.4);
  for (let a of [200, 330]) {
    brush.beginShape(0.8);
    brush.vertex(cx + cos(a) * 200, cy + sin(a) * 200);
    brush.vertex(cx + cos(a - 12) * 290, cy + sin(a - 12) * 290);
    brush.vertex(cx + cos(a) * 330, cy + sin(a) * 330);
    brush.vertex(cx + cos(a + 12) * 290, cy + sin(a + 12) * 290);
    brush.endShape(true);
  }
  // spiralling rounded petals, softly coral, deepening to red inward
  for (let k = 0; k < 80; k++) {
    let t = k / 80;
    let a = k * 137.5;
    let r = 250 * pow(1 - t, 0.9) + 20;
    let sz = 72 * (1 - t) + 16;
    let x = cx + cos(a) * r * 0.88;
    let y = cy + sin(a) * r * 0.88;
    let col = t < 0.45 ? "#f4aaa8" : (t < 0.75 ? "#e8767a" : "#c9323f");
    brush.fill(col, 185 + t * 50);
    brush.fillBleed(0.3 - t * 0.18, "out");
    brush.fillTexture(0.5, 0.6);
    brush.beginShape(1);
    let dx = cos(a), dy = sin(a), px = -dy, py = dx;
    brush.vertex(x - dx * sz * 0.4 - px * sz, y - dy * sz * 0.4 - py * sz);
    brush.vertex(x + dx * sz * 0.5 - px * sz * 0.8, y + dy * sz * 0.5 - py * sz * 0.8);
    brush.vertex(x + dx * sz * 0.7, y + dy * sz * 0.7);
    brush.vertex(x + dx * sz * 0.5 + px * sz * 0.8, y + dy * sz * 0.5 + py * sz * 0.8);
    brush.vertex(x - dx * sz * 0.4 + px * sz, y - dy * sz * 0.4 + py * sz);
    brush.endShape(true);
  }
  brush.fill("#8f1623", 225);
  brush.fillBleed(0.15, "out");
  brush.circle(cx, cy, 30, true);
  brush.fill("#f0c24a", 235);
  brush.fillBleed(0.05, "out");
  for (let i = 0; i < 22; i++) {
    let a = random(360), r = random(0, 26);
    brush.circle(cx + cos(a) * r, cy + sin(a) * r, 6, true);
  }
}
