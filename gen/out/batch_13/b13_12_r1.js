async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#161338");
  randomSeed(33);
  brush.noStroke();
  // sky: flowing bands of violet and cobalt, laid as long ribbons not blobs
  let bands = [[40, "#3a2a78"], [140, "#28348a"], [240, "#4a2c80"], [330, "#223a8c"]];
  for (let b of bands) {
    let y = b[0];
    brush.fill(b[1], 190);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(1);
    brush.vertex(-20, y + 30);
    brush.vertex(150, y - 20);
    brush.vertex(330, y + 20);
    brush.vertex(620, y - 30);
    brush.vertex(620, y + 40);
    brush.vertex(330, y + 80);
    brush.vertex(150, y + 40);
    brush.vertex(-20, y + 90);
    brush.endShape(true);
  }
  // crescent moon, top right
  brush.fill("#f6e6b0", 240);
  brush.fillBleed(0.15);
  brush.circle(500, 90, 30, 0.1);
  // stars, small and crisp
  for (let i = 0; i < 90; i++) {
    let x = random(0, 600), y = random(0, 420);
    brush.fill(random() < 0.3 ? "#ffe6a0" : "#eef0ff", 230);
    brush.fillBleed(0.05);
    brush.circle(x, y, random(0.8, 2.4), 0.1);
  }
  // hill in slightly lighter blue so the houses can sit darker on it
  brush.fill("#262a5e", 220);
  brush.fillBleed(0.25);
  brush.beginShape(1);
  brush.vertex(-10, 470);
  brush.vertex(180, 440);
  brush.vertex(420, 456);
  brush.vertex(610, 436);
  brush.vertex(610, 610);
  brush.vertex(-10, 610);
  brush.endShape(true);
  // village: pale moonlit walls (light on dark paper), then dark roofs
  let hs = [[120, 460, 44, 34], [172, 452, 38, 44], [218, 458, 50, 36], [276, 450, 36, 46], [320, 456, 46, 38], [376, 462, 40, 32]];
  for (let h of hs) {
    let x = h[0], y = h[1], w = h[2], ht = h[3];
    brush.fill("#7a78b0", 215);
    brush.fillBleed(0.12);
    brush.beginShape(0);
    brush.vertex(x, y);
    brush.vertex(x + w, y);
    brush.vertex(x + w, y + ht);
    brush.vertex(x, y + ht);
    brush.endShape(true);
    brush.fill("#0c0a22", 235);
    brush.beginShape(0);
    brush.vertex(x - 4, y + 2);
    brush.vertex(x + w / 2, y - 22);
    brush.vertex(x + w + 4, y + 2);
    brush.endShape(true);
  }
  // spire
  brush.fill("#7a78b0", 215);
  brush.beginShape(0);
  brush.vertex(428, 494);
  brush.vertex(428, 430);
  brush.vertex(448, 430);
  brush.vertex(448, 494);
  brush.endShape(true);
  brush.fill("#0c0a22", 235);
  brush.beginShape(0);
  brush.vertex(424, 432);
  brush.vertex(438, 372);
  brush.vertex(452, 432);
  brush.endShape(true);
  // lit windows glowing gold
  let w = [[132, 474], [148, 480], [186, 470], [232, 472], [250, 478], [288, 468], [334, 472], [352, 480], [388, 476], [438, 450]];
  for (let p of w) {
    brush.fill("#f0a030", 170);
    brush.fillBleed(0.3);
    brush.circle(p[0], p[1], 9, 0.5);
    brush.fill("#ffd35a", 250);
    brush.fillBleed(0.1);
    brush.circle(p[0], p[1], 4.5, 0.2);
  }
}
