async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6efe1");
  randomSeed(88);
  brush.noStroke();

  // bold teal backdrop wash, uneven
  brush.fill("#1f7a7a", 110);
  brush.fillBleed(0.6, "out");
  brush.fillTexture(0.7, 0.4);
  brush.beginShape(0.9);
  brush.vertex(20, 40); brush.vertex(580, 20); brush.vertex(590, 580); brush.vertex(30, 560);
  brush.endShape(true);

  // leaves, strong green
  let lv = [[170, 420, 200], [330, 430, 330], [470, 270, 20]];
  for (let L of lv) {
    brush.fill("#1d5e2c", 235);
    brush.fillBleed(0.25, "out");
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.9);
    let a = L[2];
    brush.vertex(L[0], L[1]);
    brush.vertex(L[0] + cos(a - 25) * 60, L[1] + sin(a - 25) * 60);
    brush.vertex(L[0] + cos(a) * 110, L[1] + sin(a) * 110);
    brush.vertex(L[0] + cos(a + 25) * 60, L[1] + sin(a + 25) * 60);
    brush.endShape(true);
  }
  // bud stem
  brush.fill("#2a6b34", 235);
  brush.fillBleed(0.1, "out");
  brush.beginShape(0.8);
  brush.vertex(300, 420); brush.vertex(390, 330); brush.vertex(455, 220); brush.vertex(463, 225); brush.vertex(398, 336); brush.vertex(308, 428);
  brush.endShape(true);

  // open rose: spiral of cupped petals, outer to inner at (250, 320)
  let cx = 250, cy = 320;
  let n = 16;
  for (let i = 0; i < n; i++) {
    let f = 1 - i / n;
    let r = 30 + 120 * f;
    let a = i * 137.5;
    let c = i < 5 ? "#e27a98" : i < 11 ? "#cf4f78" : "#a82857";
    brush.fill(c, 140 + (1 - f) * 140);
    brush.fillBleed(0.15 + f * 0.35, "out");
    brush.fillTexture(0.55, 0.55);
    brush.beginShape(1);
    brush.vertex(cx + cos(a - 70) * r * 0.5, cy + sin(a - 70) * r * 0.45);
    brush.vertex(cx + cos(a - 30) * r, cy + sin(a - 30) * r * 0.85);
    brush.vertex(cx + cos(a + 30) * r, cy + sin(a + 30) * r * 0.85);
    brush.vertex(cx + cos(a + 70) * r * 0.5, cy + sin(a + 70) * r * 0.45);
    brush.vertex(cx + cos(a) * r * 0.2, cy + sin(a) * r * 0.2);
    brush.endShape(true);
  }
  brush.fill("#7a1540", 235);
  brush.fillBleed(0.1, "out");
  brush.circle(cx + 4, cy - 2, 13, true);

  // closed bud with sepals, at (460, 190)
  for (let pass = 0; pass < 3; pass++) {
    let s = [1, 0.8, 0.5][pass];
    brush.fill(["#e27a98", "#c73a6a", "#9c1f4d"][pass], [180, 220, 235][pass]);
    brush.fillBleed([0.4, 0.2, 0.1][pass], "out");
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(1);
    brush.vertex(460, 222); brush.vertex(460 - 30 * s, 190); brush.vertex(470, 190 - 70 * s); brush.vertex(460 + 32 * s, 185);
    brush.endShape(true);
  }
  brush.fill("#2a6b34", 235);
  brush.fillBleed(0.1, "out");
  for (let k of [-1, 1]) {
    brush.beginShape(0.7);
    brush.vertex(460, 225); brush.vertex(460 + k * 38, 180); brush.vertex(460 + k * 12, 205);
    brush.endShape(true);
  }
}
