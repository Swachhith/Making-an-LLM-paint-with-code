async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7f1e6");
  brush.noStroke();
  // teal background wash for contrast
  brush.fill("#127f8f", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  // deeper teal pooling in the corners
  brush.fill("#0b5a6e", 170);
  brush.fillBleed(0.3);
  brush.circle(560, 80, 130, 0.6);
  brush.circle(60, 560, 120, 0.6);
  // stems
  brush.fill("#2f6b1f", 220);
  brush.fillBleed(0.2);
  brush.beginShape(0.6);
  brush.vertex(222, 260);
  brush.vertex(240, 260);
  brush.vertex(275, 620);
  brush.vertex(257, 620);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(452, 350);
  brush.vertex(468, 350);
  brush.vertex(410, 620);
  brush.vertex(392, 620);
  brush.endShape(true);
  // open bloom: flat ring of long petals, two layers
  let cx = 230, cy = 250;
  for (let layer = 0; layer < 2; layer++) {
    let n = 22, R = layer == 0 ? 150 : 115;
    for (let i = 0; i < n; i++) {
      let a = i * 360 / n + layer * 8;
      let tx = cx + cos(a) * R, ty = cy + sin(a) * R;
      let px = cos(a + 90) * 12, py = sin(a + 90) * 12;
      brush.fill(layer == 0 ? "#ff6a00" : "#ff8a10", layer == 0 ? 210 : 230);
      brush.fillBleed(0.2);
      brush.fillTexture(0.4, 0.4);
      brush.beginShape(0.6);
      brush.vertex(cx + px * 0.4, cy + py * 0.4);
      brush.vertex(cx + cos(a) * R * 0.6 + px, cy + sin(a) * R * 0.6 + py);
      brush.vertex(tx, ty);
      brush.vertex(cx + cos(a) * R * 0.6 - px, cy + sin(a) * R * 0.6 - py);
      brush.vertex(cx - px * 0.4, cy - py * 0.4);
      brush.endShape(true);
    }
  }
  // shadow pass on the lower petals
  for (let i = 0; i < 9; i++) {
    let a = 30 + i * 14;
    brush.fill("#d23a00", 170);
    brush.fillBleed(0.25);
    brush.beginShape(0.6);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 4) * 120, cy + sin(a - 4) * 120);
    brush.vertex(cx + cos(a + 4) * 120, cy + sin(a + 4) * 120);
    brush.endShape(true);
  }
  // centre
  brush.fill("#c23a00", 230);
  brush.fillBleed(0.2);
  brush.circle(cx, cy, 40, 0.3);
  brush.fill("#3a1a05", 230);
  brush.circle(cx, cy, 22, 0.3);
  // closed bud with sepals
  brush.fill("#ff6a00", 220);
  brush.fillBleed(0.2);
  brush.beginShape(0.7);
  brush.vertex(460, 355);
  brush.vertex(425, 320);
  brush.vertex(440, 270);
  brush.vertex(460, 250);
  brush.vertex(480, 270);
  brush.vertex(495, 320);
  brush.endShape(true);
  brush.fill("#e04a00", 220);
  brush.beginShape(0.7);
  brush.vertex(460, 355);
  brush.vertex(448, 300);
  brush.vertex(460, 255);
  brush.vertex(472, 300);
  brush.endShape(true);
  brush.fill("#2f6b1f", 230);
  brush.beginShape(0.6);
  brush.vertex(460, 360);
  brush.vertex(420, 330);
  brush.vertex(445, 335);
  brush.vertex(460, 320);
  brush.vertex(475, 335);
  brush.vertex(500, 330);
  brush.endShape(true);
  // leaf
  brush.fill("#2f6b1f", 210);
  brush.beginShape(0.8);
  brush.vertex(265, 520);
  brush.vertex(180, 470);
  brush.vertex(120, 500);
  brush.vertex(200, 540);
  brush.endShape(true);
}
