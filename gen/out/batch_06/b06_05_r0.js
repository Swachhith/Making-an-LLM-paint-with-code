async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdfcfa");
  randomSeed(55);
  brush.noStroke();
  let cx = 250, cy = 270;
  for (let i = 0; i < 8; i++) {
    let a = i * 45 + random(-6, 6);
    let len = random(185, 215);
    let hw = 22;
    brush.fill("#f3b6cf", 165);
    brush.fillBleed(0.4, "out");
    brush.fillTexture(0.35, 0.5);
    brush.beginShape(0.5);
    let px = cos(a + 90), py = sin(a + 90), dx = cos(a), dy = sin(a);
    brush.vertex(cx + dx * 20, cy + dy * 20);
    brush.vertex(cx + dx * len * 0.6 - px * hw * 1.5, cy + dy * len * 0.6 - py * hw * 1.5);
    brush.vertex(cx + dx * len - px * hw * 1.7, cy + dy * len - py * hw * 1.7);
    brush.vertex(cx + dx * len * 0.93 - px * hw * 0.6, cy + dy * len * 0.93 - py * hw * 0.6);
    brush.vertex(cx + dx * len * 1.02, cy + dy * len * 1.02);
    brush.vertex(cx + dx * len * 0.93 + px * hw * 0.6, cy + dy * len * 0.93 + py * hw * 0.6);
    brush.vertex(cx + dx * len + px * hw * 1.7, cy + dy * len + py * hw * 1.7);
    brush.vertex(cx + dx * len * 0.6 + px * hw * 1.5, cy + dy * len * 0.6 + py * hw * 1.5);
    brush.endShape(true);
    // darker vein pooling near base
    brush.fill("#e284ab", 150);
    brush.fillBleed(0.25, "out");
    brush.beginShape(0.6);
    brush.vertex(cx + dx * 25, cy + dy * 25);
    brush.vertex(cx + dx * len * 0.45 - px * 10, cy + dy * len * 0.45 - py * 10);
    brush.vertex(cx + dx * len * 0.5, cy + dy * len * 0.5);
    brush.vertex(cx + dx * len * 0.45 + px * 10, cy + dy * len * 0.45 + py * 10);
    brush.endShape(true);
  }
  brush.fill("#f2d06b", 210);
  brush.fillBleed(0.15, "out");
  brush.fillTexture(0.6, 0.6);
  brush.circle(cx, cy, 34, true);
  brush.fill("#c98f2a", 200);
  for (let i = 0; i < 14; i++) {
    let a = random(360), r = random(5, 26);
    brush.circle(cx + cos(a) * r, cy + sin(a) * r, 4, true);
  }
}
