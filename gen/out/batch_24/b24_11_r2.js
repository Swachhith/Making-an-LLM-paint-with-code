async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function dahlia(cx, cy, R, seed) {
  randomSeed(seed);
  let layers = [
    [1.0, 18, "#e2520e", 200],
    [0.78, 15, "#f07412", 215],
    [0.55, 12, "#c7380a", 220],
    [0.32, 9, "#9a2408", 225]
  ];
  for (let l of layers) {
    let r = R * l[0];
    let n = l[1];
    let off = random(360);
    for (let i = 0; i < n; i++) {
      let a = off + i * 360 / n;
      let hw = 180 / n;
      brush.fill(l[2], l[3]);
      brush.fillBleed(0.22);
      brush.fillTexture(0.35, 0.4);
      brush.beginShape(0.3);
      brush.vertex(cx + cos(a - hw) * r * 0.25, cy + sin(a - hw) * r * 0.25);
      brush.vertex(cx + cos(a - hw * 0.9) * r * 0.8, cy + sin(a - hw * 0.9) * r * 0.8);
      brush.vertex(cx + cos(a) * r, cy + sin(a) * r);
      brush.vertex(cx + cos(a + hw * 0.9) * r * 0.8, cy + sin(a + hw * 0.9) * r * 0.8);
      brush.vertex(cx + cos(a + hw) * r * 0.25, cy + sin(a + hw) * r * 0.25);
      brush.endShape(true);
    }
  }
  brush.fill("#5a1204", 220);
  brush.fillBleed(0.2);
  brush.circle(cx, cy, R * 0.12, 0.4);
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4ecd8");

  brush.noStroke();
  brush.fill("#e9d7b0", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(300, 280, 250, 0.8);

  let stems = [[210, 300, 250, 600], [410, 340, 330, 600], [330, 160, 290, 600]];
  for (let st of stems) {
    brush.fill("#3c6a2a", 215);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.4);
    brush.vertex(st[0] - 8, st[1]);
    brush.vertex(st[0] + 8, st[1]);
    brush.vertex(st[2] + 9, st[3]);
    brush.vertex(st[2] - 9, st[3]);
    brush.endShape(true);
  }
  let leaves = [[262, 470, 170, 420, 1], [300, 500, 400, 460, 1], [270, 540, 190, 560, 1]];
  for (let lf of leaves) {
    brush.fill("#2f6e3a", 210);
    brush.fillBleed(0.25);
    brush.fillTexture(0.45, 0.4);
    let mx = (lf[0] + lf[2]) / 2, my = (lf[1] + lf[3]) / 2;
    brush.beginShape(0.8);
    brush.vertex(lf[0], lf[1]);
    brush.vertex(mx, my - 22);
    brush.vertex(lf[2], lf[3]);
    brush.vertex(mx, my + 22);
    brush.endShape(true);
    brush.fill("#1c4a24", 190);
    brush.beginShape(0.8);
    brush.vertex(lf[0], lf[1]);
    brush.vertex(mx, my - 6);
    brush.vertex(lf[2], lf[3]);
    brush.vertex(mx, my + 12);
    brush.endShape(true);
  }

  brush.fill("#c7a878", 170);
  brush.fillBleed(0.3);
  brush.circle(330, 330, 150, 0.8);
  dahlia(210, 260, 125, 11);
  dahlia(410, 320, 105, 22);
  dahlia(330, 140, 80, 33);
  randomSeed(99);
  for (let i = 0; i < 4; i++) {
    let x = random(80, 520), y = random(520, 580);
    brush.fill("#e2520e", 210);
    brush.fillBleed(0.2);
    brush.beginShape(0.5);
    brush.vertex(x, y);
    brush.vertex(x + 22, y - 8);
    brush.vertex(x + 30, y + 6);
    brush.vertex(x + 8, y + 12);
    brush.endShape(true);
  }
}
