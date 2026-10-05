async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f5f1ea");
  brush.noStroke();
  // leaf bed
  brush.fill("#1d6b2f", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  for (let k = 0; k < 6; k++) {
    const a = k * 60 + 15;
    brush.circle(300 + 190 * Math.cos(a * Math.PI / 180), 300 + 190 * Math.sin(a * Math.PI / 180), 110, 0.7);
  }
  brush.fill("#0f4a1f", 170);
  for (let k = 0; k < 6; k++) {
    const a = k * 60 + 15;
    brush.circle(300 + 200 * Math.cos(a * Math.PI / 180), 300 + 200 * Math.sin(a * Math.PI / 180), 60, 0.6);
  }
  // scarlet florets from above: ring of five-petalled blossoms
  const fl = [[300,300,95],[205,250,62],[395,250,62],[215,365,60],[390,365,62],[300,185,55],[300,415,55]];
  for (const f of fl) {
    for (let p = 0; p < 5; p++) {
      const a = p * 72 - 90 + f[0] % 30;
      const px = f[0] + f[2] * 0.5 * Math.cos(a * Math.PI / 180), py = f[1] + f[2] * 0.5 * Math.sin(a * Math.PI / 180);
      brush.fill("#d8102a", 200); brush.fillBleed(0.3);
      brush.circle(px, py, f[2] * 0.48, 0.7);
      brush.fill("#a0071e", 170);
      brush.circle(f[0] + (px - f[0]) * 0.55, f[1] + (py - f[1]) * 0.55, f[2] * 0.25, 0.6);
    }
    brush.fill("#f2b8b0", 200); brush.circle(f[0], f[1], f[2] * 0.12, 0.4);
  }
}
