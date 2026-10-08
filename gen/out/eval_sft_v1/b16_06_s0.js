async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#1a1412");
  randomSeed(1101);
  brush.noStroke();

  // pale warm glow along the horizon, low
  brush.fill("#e8c28a", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, 520); brush.vertex(200, 510); brush.vertex(420, 525); brush.vertex(620, 512); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // a few warm stars
  for (let i = 0; i < 30; i++) {
    let x = random(-20, 620), y = random(-20, 500);
    brush.fill("#f2d28a", random(180, 250));
    brush.fillBleed(0.15);
    brush.fillTexture(0.2, 0.2);
    brush.circle(x, y, random(1.2, 2.5), 0.3);
  }
  // moon: paper left, painted as a dark crescent
  brush.fill("#0a0608", 230);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(420, 260); brush.vertex(440, 238); brush.vertex(458, 252); brush.vertex(446, 272);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(420, 260); brush.vertex(402, 242); brush.vertex(384, 256); brush.vertex(396, 276);
  brush.endShape(true);
  // pine trees: tall, dark, with a few lit windows
  let trees = [[150, 522, 32], [240, 524, 28], [320, 520, 36], [410, 526, 26], [500, 522, 34]];
  for (let t of trees) {
    let [x, h, w] = t;
    brush.fill("#0a0608", 240);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.5);
    brush.vertex(x - w, 522); brush.vertex(x - w * 0.3, h); brush.vertex(x + w * 0.3, h); brush.vertex(x + w, 522);
    brush.endShape(true);
    // two passes of darker shadow inside the crown
    brush.fill("#020204", 220);
    brush.beginShape(0.5);
    brush.vertex(x - w * 0.6, 522); brush.vertex(x - w * 0.65, h - 12); brush.vertex(x + w * 0.6, h - 10); brush.vertex(x + w * 0.6, 522);
    brush.endShape(true);
    // a couple warm windows
    brush.fill("#f2c06a", 220);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.circle(x - w * 0.45, h - w * 0.6, 3.2, 0.3);
    brush.circle(x + w * 0.45, h - w * 0.6, 3.2, 0.3);
  }
  // a lone tall pine near the moon
  brush.fill("#0a0608", 240);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(470, 522); brush.vertex(450, 340); brush.vertex(472, 340); brush.vertex(492, 522);
  brush.endShape(true);
  brush.fill("#020204", 220);
  brush.beginShape(0.5);
  brush.vertex(468, 522); brush.vertex(448, 340); brush.vertex(470, 340); brush.vertex(492, 522);
  brush.endShape(true);
  // faint reflection on a dark strip of ground
  brush.fill("#3a2a22", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, 522); brush.vertex(620, 522); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
}
