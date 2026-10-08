async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#121422");
  randomSeed(2333);
  brush.noStroke();

  // a dark ground
  brush.fill("#0a0c12", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // stem
  brush.fill("#0f3a1e", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(300, 500); brush.vertex(325, 500); brush.vertex(325, 620); brush.vertex(300, 620);
  brush.endShape(true);
  // a few leaves
  for (let i = 0; i < 4; i++) {
    let a = i * 90 + 10;
    brush.fill("#0e381c", 190);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.6);
    brush.vertex(300, 480);
    brush.vertex(300 + 60 * cos(a - 15), 480 + 60 * sin(a - 15));
    brush.vertex(300 + 110 * cos(a - 10), 300 + 110 * sin(a - 10));
    brush.vertex(300 + 90 * cos(a + 10), 300 + 90 * sin(a + 10));
    brush.vertex(300 + 40 * cos(a + 15), 480 + 40 * sin(a + 15));
    brush.endShape(true);
  }

  // the bloom, seen from the side: a big cup of overlapping petals, pink on the outside, paler on the inside
  let cx = 300, cy = 200;
  let layers = 5;
  for (let l = 0; l < layers; l++) {
    let R = 150 - l * 16;
    let n = 7;
    for (let k = 0; k < n; k++) {
      let a = k * 360 / n + l * 22 + random(-4, 4);
      let w = 32 + l * 2;
      // two passes: a big loose pass, then a smaller more opaque pass inside
      brush.fill("#e84a8a", 225);
      brush.fillBleed(0.25);
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(0.7);
      brush.vertex(cx + cos(a - 18) * R * 0.3, cy + sin(a - 18) * R * 0.3);
      brush.vertex(cx + cos(a - 10) * R, cy + sin(a - 10) * R);
      brush.vertex(cx + cos(a - 2) * R * 1.1, cy + sin(a - 2) * R * 1.1);
      brush.vertex(cx + cos(a + 2) * R * 1.1, cy + sin(a + 2) * R * 1.1);
      brush.vertex(cx + cos(a + 10) * R, cy + sin(a + 10) * R);
      brush.vertex(cx + cos(a + 18) * R * 0.3, cy + sin(a + 18) * R * 0.3);
      brush.endShape(true);
      brush.fill("#c82a6a", 230);
      brush.fillBleed(0.22);
      brush.fillTexture(0.45, 0.5);
      brush.beginShape(0.7);
      brush.vertex(cx + cos(a - 20) * R * 0.6, cy + sin(a - 20) * R * 0.6);
      brush.vertex(cx + cos(a - 4) * R * 0.9, cy + sin(a - 4) * R * 0.9);
      brush.vertex(cx + cos(a + 4) * R * 0.9, cy + sin(a + 4) * R * 0.9);
      brush.vertex(cx + cos(a + 20) * R * 0.6, cy + sin(a + 20) * R * 0.6);
      brush.endShape(true);
    }
  }
  // the heart: a pale throat left as paper, with a darker shadow on its side
  brush.fill("#8a1a4a", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(cx - 10, cy + 10); brush.vertex(cx + 10, cy + 10); brush.vertex(cx + 12, cy + 40); brush.vertex(cx - 12, cy + 40);
  brush.endShape(true);
  brush.fill("#f2a8c8", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(cx - 10, cy + 10); brush.vertex(cx + 10, cy + 10); brush.vertex(cx + 20, cy + 20); brush.vertex(cx - 20, cy + 20);
  brush.endShape(true);
}
