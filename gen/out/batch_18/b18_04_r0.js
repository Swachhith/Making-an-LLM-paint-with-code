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
  brush.fill("#c6d6e8", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.6);
  brush.beginShape(0.9);
  brush.vertex(0, 0); brush.vertex(380, 0); brush.vertex(300, 140); brush.vertex(90, 260); brush.vertex(0, 240);
  brush.endShape(true);

  // branch entering from right edge, twig to bloom
  brush.fill("#5a4a52", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(600, 330); brush.vertex(480, 350); brush.vertex(400, 390); brush.vertex(330, 410);
  brush.vertex(332, 428); brush.vertex(410, 410); brush.vertex(490, 372); brush.vertex(600, 356);
  brush.endShape(true);
  brush.fill("#6d5c66", 190);
  brush.beginShape(0.5);
  brush.vertex(470, 358); brush.vertex(440, 300); brush.vertex(455, 298); brush.vertex(488, 352);
  brush.endShape(true);

  // single bloom at (310, 410), five rounded petals left as paler pink
  let cx = 318, cy = 402;
  for (let i = 0; i < 5; i++) {
    let a = i * 72 - 90;
    let px = cx + cos(a) * 34, py = cy + sin(a) * 34;
    brush.fill("#e7a8bf", 170);
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.5);
    brush.circle(px, py, 30, 0.35);
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
  brush.circle(444, 296, 12, 0.3);
}
