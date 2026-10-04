async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4f6f8");
  brush.noStroke();

  // pale cool wash, faint, upper left only
  brush.fill("#b4c8e2", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.6);
  brush.beginShape(0.9);
  brush.vertex(0, 0); brush.vertex(460, 0); brush.vertex(380, 160); brush.vertex(160, 300); brush.vertex(0, 330);
  brush.endShape(true);

  // branch entering from right edge, twig to bloom
  brush.fill("#4a3a44", 240);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(600, 330); brush.vertex(480, 350); brush.vertex(400, 390); brush.vertex(330, 410);
  brush.vertex(334, 434); brush.vertex(410, 418); brush.vertex(490, 380); brush.vertex(600, 366);
  brush.endShape(true);
  brush.fill("#6d5c66", 190);
  brush.beginShape(0.5);
  brush.vertex(470, 358); brush.vertex(440, 300); brush.vertex(455, 298); brush.vertex(488, 352);
  brush.endShape(true);

  // single bloom at (310, 410), five rounded petals left as paler pink
  let cx = 318, cy = 402;
  for (let i = 0; i < 5; i++) {
    let a = i * 72 - 90;
    let px = cx + cos(a) * 42, py = cy + sin(a) * 42;
    brush.fill("#e7a8bf", 170);
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.5);
    brush.circle(px, py, 36, 0.35);
    brush.fill("#e7a8bf", 150);
    brush.circle(px + 4, py + 4, 26, 0.4);
    brush.fill("#d9819f", 160);
    brush.fillBleed(0.2);
    brush.circle(cx + cos(a) * 20, cy + sin(a) * 20, 14, 0.3);
  }
  brush.fill("#b8446a", 220);
  brush.circle(cx, cy, 9, 0.3);
  for (let i = 0; i < 7; i++) {
    let a = i * 51;
    brush.fill("#a8335a", 220);
    brush.circle(cx + cos(a) * 16, cy + sin(a) * 16, 3, 0.2);
  }
  // one small bud on twig
  brush.fill("#e3a0b8", 190);
  brush.circle(444, 296, 16, 0.3);
  brush.fill("#cfd9ea", 170);
  brush.circle(520, 520, 90, 0.6);
}
