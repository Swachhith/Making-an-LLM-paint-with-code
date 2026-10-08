async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6efe1");
  brush.noStroke();
  // bold sky: cerulean upper, cobalt lower
  brush.fill("#2f8fd8", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 200); brush.vertex(400, 260); brush.vertex(200, 240); brush.vertex(-20, 230);
  brush.endShape(true);
  brush.fill("#1a4f8a", 225);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 200); brush.vertex(620, 200); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // snow-capped mountains: three peaks, one big and off-centre
  let peaks = [
    [150, 520, 120, 40, 260, 30, 130, 120],
    [330, 460, 160, 40, 490, 28, 350, 110],
    [520, 360, 150, 40, 660, 32, 520, 110]
  ];
  for (let p of peaks) {
    let [x, base, w, s1, s2, s3, s4, s5] = p;
    brush.fill("#3a8fd8", 220);
    brush.fillBleed(0.25);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(0.5);
    brush.vertex(x - w * 0.5, base);
    brush.vertex(x - w * 0.3, base - s1);
    brush.vertex(x - w * 0.1, base - s2);
    brush.vertex(x, base - s3);
    brush.vertex(x + w * 0.1, base - s4);
    brush.vertex(x + w * 0.3, base - s5);
    brush.vertex(x + w * 0.5, base);
    brush.endShape(true);
    brush.fill("#8fb8e8", 180);
    brush.fillBleed(0.3);
    brush.beginShape(0.5);
    brush.vertex(x - w * 0.5, base - s1);
    brush.vertex(x - w * 0.3, base - s1 - s1 * 0.3);
    brush.vertex(x - w * 0.1, base - s2 - s2 * 0.3);
    brush.vertex(x, base - s3 - s3 * 0.3);
    brush.vertex(x + w * 0.1, base - s4 - s4 * 0.3);
    brush.vertex(x + w * 0.3, base - s5 - s5 * 0.3);
    brush.vertex(x + w * 0.5, base - s1);
    brush.endShape(true);
    brush.fill("#eef2f8", 225);
    brush.fillBleed(0.2);
    brush.beginShape(0.5);
    brush.vertex(x - w * 0.5, base - s1);
    brush.vertex(x, base - s3 - s3 * 0.3);
    brush.vertex(x + w * 0.5, base - s1);
    brush.endShape(true);
  }
  // foreground: dark pine line
  brush.fill("#123a22", 235);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 560); brush.vertex(200, 555); brush.vertex(400, 565); brush.vertex(620, 550); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // a few pines
  let trees = [[200, 520, 18], [320, 500, 16], [460, 520, 20], [580, 500, 14]];
  for (let t of trees) {
    let [x, y, w] = t;
    brush.fill("#0a2a1a", 235);
    brush.fillBleed(0.2);
    brush.beginShape(0.6);
    brush.vertex(x - w, y); brush.vertex(x - w * 0.3, y - 140); brush.vertex(x, y - 120); brush.vertex(x + w * 0.3, y - 140); brush.vertex(x + w, y);
    brush.endShape(true);
  }
  // sun: a pale halo on the paper, not painted over the sky
  brush.fill("#fff8e8", 250);
  brush.fillBleed(0.25);
  brush.circle(520, 150, 30, 0.4);
}
