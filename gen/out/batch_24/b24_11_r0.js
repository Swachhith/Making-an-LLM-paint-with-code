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
  brush.fill("#2f6e3a", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.45, 0.4);
  let leaves = [[180, 430, 250, 520, 120, 520], [390, 420, 480, 470, 430, 540], [300, 350, 330, 480, 250, 460]];
  for (let lf of leaves) {
    brush.beginShape(0.7);
    brush.vertex(lf[0], lf[1]);
    brush.vertex(lf[2], lf[3]);
    brush.vertex(lf[4], lf[5]);
    brush.endShape(true);
  }
  brush.fill("#3c5a28", 210);
  brush.beginShape(0.4);
  brush.vertex(280, 380);
  brush.vertex(298, 380);
  brush.vertex(300, 600);
  brush.vertex(282, 600);
  brush.endShape(true);

  dahlia(210, 260, 125, 11);
  dahlia(410, 320, 105, 22);
  dahlia(330, 140, 80, 33);
}
