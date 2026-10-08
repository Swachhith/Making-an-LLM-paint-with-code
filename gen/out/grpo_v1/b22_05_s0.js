async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#14243a");
  brush.noStroke();
  // teal sky wash, top left to right
  brush.fill("#2e8fa8", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 200); brush.vertex(200, 250); brush.vertex(0, 200);
  brush.endShape(true);
  // indigo deeper sky, right side
  brush.fill("#2a3a6e", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(600, 0); brush.vertex(600, 250); brush.vertex(450, 230); brush.vertex(350, 270); brush.vertex(600, 300);
  brush.endShape(true);
  // crescent moon, upper right
  brush.fill("#eef4f6", 240);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.circle(470, 130, 70, 0.2);
  brush.fill("#f2f6f8", 250);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(450, 130); brush.vertex(470, 110); brush.vertex(490, 130); brush.vertex(470, 150); brush.vertex(450, 130);
  brush.endShape(true);
  // pine trees, left and centre
  for (const t of [[30, 460, 28], [130, 470, 32], [240, 440, 26], [360, 480, 34], [470, 460, 30]]) {
    const [x, base, w] = t;
    brush.fill("#1f3a5a", 225);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.6);
    brush.vertex(x, base);
    brush.vertex(x + w / 2, base - 15);
    brush.vertex(x + w, base);
    brush.vertex(x + w * 0.7, base + 30);
    brush.vertex(x + w * 0.3, base + 30);
    brush.endShape(true);
    brush.fill("#101f3a", 225);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.6);
    brush.vertex(x + w * 0.35, base);
    brush.vertex(x + w * 0.55, base - 15);
    brush.vertex(x + w * 0.75, base);
    brush.vertex(x + w * 0.65, base + 30);
    brush.vertex(x + w * 0.45, base + 30);
    brush.endShape(true);
  }
  // a few stars
  const stars = [[120, 150], [320, 80], [520, 170], [40, 220], [540, 200], [170, 300], [500, 320]];
  for (const [x, y] of stars) {
    brush.fill("#fff2e8", 220);
    brush.fillBleed(0.1);
    brush.fillTexture(0.3, 0.3);
    brush.circle(x, y, 2, 0.3);
  }
}
