async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf9f7");
  randomSeed(11);
  brush.noStroke();
  let cx = 300, cy = 310;
  // outer ruffled petals, pale and loose
  for (let ring = 0; ring < 4; ring++) {
    let n = 7 + ring * 2;
    let rOut = 270 - ring * 55;
    let rIn = 40 + ring * 10;
    let cols = ["#f4c6cf", "#eea3b2", "#de6f86", "#b8233f"];
    for (let i = 0; i < n; i++) {
      let a = i * 360 / n + ring * 17 + random(-8, 8);
      let w = 360 / n * 0.75;
      brush.fill(cols[ring], 150 + ring * 20);
      brush.fillBleed(0.3 - ring * 0.05, "out");
      brush.fillTexture(0.5, 0.4);
      brush.beginShape(0.6);
      brush.vertex(cx + cos(a) * rIn, cy + sin(a) * rIn);
      for (let k = -2; k <= 2; k++) {
        let aa = a + k * w / 4;
        let rr = rOut * (0.88 + random(0, 0.14)) * (1 - abs(k) * 0.06);
        brush.vertex(cx + cos(aa) * rr, cy + sin(aa) * rr);
      }
      brush.endShape(true);
    }
  }
  // crimson pooling in the heart
  brush.fill("#9c1230", 210);
  brush.fillBleed(0.15, "out");
  brush.fillTexture(0.6, 0.6);
  brush.circle(cx + 5, cy - 5, 38, true);
  brush.fill("#e9c46a", 190);
  brush.fillBleed(0.05, "out");
  for (let i = 0; i < 9; i++) {
    let a = random(360), r = random(8, 28);
    brush.circle(cx + cos(a) * r, cy + sin(a) * r, 5, true);
  }
}
