async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#faf6ee");
  brush.noStroke();
  let cx = 410, cy = 200;
  // stem, a gentle S curving down to the lower left
  brush.fill("#3d6a24", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(1);
  brush.vertex(cx - 10, cy + 30);
  brush.vertex(cx - 2, cy + 160);
  brush.vertex(cx - 50, cy + 300);
  brush.vertex(cx - 70, cy + 400);
  brush.vertex(cx - 52, cy + 402);
  brush.vertex(cx - 32, cy + 300);
  brush.vertex(cx + 16, cy + 160);
  brush.vertex(cx + 10, cy + 30);
  brush.endShape(true);
  // ruff of deeply cut leaves just under the flower
  let lf = [[-70, 140], [-30, 175], [30, 170], [80, 138]];
  for (let l of lf) {
    brush.fill("#4d7f24", 205);
    brush.fillBleed(0.25);
    brush.beginShape(1);
    brush.vertex(cx + 2, cy + 150);
    brush.vertex(cx + l[0] * 0.6, cy + l[1] - 22);
    brush.vertex(cx + l[0], cy + l[1] - 12);
    brush.vertex(cx + l[0] * 0.7, cy + l[1] + 8);
    brush.endShape(true);
  }
  // six broad cup-shaped scarlet petals, three glazes
  let cols = ["#e8142a", "#c80a22", "#96001a"];
  for (let pass = 0; pass < 3; pass++) {
    for (let k = 0; k < 6; k++) {
      let a = k * 60 + 10 + pass * 4;
      let r = 118 - pass * 26;
      brush.fill(cols[pass], 215 - pass * 10);
      brush.fillBleed(0.3 - pass * 0.05);
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(1);
      brush.vertex(cx + cos(a - 8) * 18, cy + sin(a - 8) * 18);
      brush.vertex(cx + cos(a - 32) * r * 0.82, cy + sin(a - 32) * r * 0.82);
      brush.vertex(cx + cos(a - 14) * r, cy + sin(a - 14) * r);
      brush.vertex(cx + cos(a + 14) * r, cy + sin(a + 14) * r);
      brush.vertex(cx + cos(a + 32) * r * 0.82, cy + sin(a + 32) * r * 0.82);
      brush.vertex(cx + cos(a + 8) * 18, cy + sin(a + 8) * 18);
      brush.endShape(true);
    }
  }
  // pooled crimson where petals overlap
  for (let k = 0; k < 6; k++) {
    let a = k * 60 + 40;
    brush.fill("#6e0014", 180);
    brush.fillBleed(0.25);
    brush.circle(cx + cos(a) * 62, cy + sin(a) * 62, 14, 0.7);
  }
  // pale halo, then an ink-black centre with a ring of stamens
  brush.fill("#f2e2e6", 225);
  brush.fillBleed(0.15);
  brush.circle(cx, cy, 34, 0.3);
  brush.fill("#120a1e", 250);
  brush.fillBleed(0.15);
  brush.fillTexture(0.4, 0.4);
  brush.circle(cx, cy, 24, 0.25);
  brush.fill("#0a0410", 245);
  brush.circle(cx, cy, 16, 0.2);
  for (let k = 0; k < 18; k++) {
    let a = k * 20;
    brush.fill("#10081a", 235);
    brush.fillBleed(0.1);
    brush.circle(cx + cos(a) * 34, cy + sin(a) * 34, 3.5, 0.3);
  }
}
