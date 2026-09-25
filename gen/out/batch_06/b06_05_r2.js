async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdfcfa");
  randomSeed(61);
  brush.noStroke();
  // faint echo of a second cosmos, mostly paper, upper right
  brush.fill("#f6cadb", 185);
  brush.fillBleed(0.4, "out");
  brush.fillTexture(0.4, 0.4);
  for (let i = 0; i < 8; i++) {
    let a = i * 45 + 20;
    brush.beginShape(0.6);
    brush.vertex(500, 110);
    brush.vertex(500 + cos(a - 10) * 70, 110 + sin(a - 10) * 70);
    brush.vertex(500 + cos(a + 10) * 70, 110 + sin(a + 10) * 70);
    brush.endShape(true);
  }
  let cx = 245, cy = 275;
  for (let i = 0; i < 8; i++) {
    let a = i * 45 + 10 + random(-7, 7);
    let len = random(190, 225);
    let hw = 24;
    let dx = cos(a), dy = sin(a), px = -dy, py = dx;
    brush.fill("#efa3c3", 210);
    brush.fillBleed(0.35, "out");
    brush.fillTexture(0.35, 0.55);
    brush.beginShape(0.5);
    brush.vertex(cx + dx * 22 - px * 8, cy + dy * 22 - py * 8);
    brush.vertex(cx + dx * len * 0.6 - px * hw * 1.5, cy + dy * len * 0.6 - py * hw * 1.5);
    brush.vertex(cx + dx * len - px * hw * 1.6, cy + dy * len - py * hw * 1.6);
    brush.vertex(cx + dx * len * 0.92 - px * hw * 0.7, cy + dy * len * 0.92 - py * hw * 0.7);
    brush.vertex(cx + dx * len * 1.01 - px * hw * 0.1, cy + dy * len * 1.01 - py * hw * 0.1);
    brush.vertex(cx + dx * len * 0.92 + px * hw * 0.6, cy + dy * len * 0.92 + py * hw * 0.6);
    brush.vertex(cx + dx * len + px * hw * 1.6, cy + dy * len + py * hw * 1.6);
    brush.vertex(cx + dx * len * 0.6 + px * hw * 1.5, cy + dy * len * 0.6 + py * hw * 1.5);
    brush.vertex(cx + dx * 22 + px * 8, cy + dy * 22 + py * 8);
    brush.endShape(true);
    // two thin magenta veins
    for (let s of [-1, 1]) {
      brush.fill("#d2598d", 190);
      brush.fillBleed(0.1, "out");
      brush.beginShape(0.4);
      brush.vertex(cx + dx * 30, cy + dy * 30);
      brush.vertex(cx + dx * len * 0.55 + px * s * 12, cy + dy * len * 0.55 + py * s * 12);
      brush.vertex(cx + dx * len * 0.55 + px * s * 16, cy + dy * len * 0.55 + py * s * 16);
      brush.endShape(true);
    }
  }
  // small stem & leaf fragment off the lower right, very light
  brush.fill("#a9c48c", 190);
  brush.fillBleed(0.2, "out");
  brush.beginShape(0.6);
  brush.vertex(420, 470); brush.vertex(500, 540); brush.vertex(560, 600); brush.vertex(548, 600); brush.vertex(490, 548); brush.vertex(415, 480);
  brush.endShape(true);
  brush.fill("#f0c850", 225);
  brush.fillBleed(0.12, "out");
  brush.fillTexture(0.6, 0.6);
  brush.circle(cx, cy, 36, true);
  brush.fill("#b77a1c", 220);
  for (let i = 0; i < 18; i++) {
    let a = random(360), r = random(6, 30);
    brush.circle(cx + cos(a) * r, cy + sin(a) * r, 4, true);
  }
}
