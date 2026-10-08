async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2e8d0");
  brush.noStroke();
  // sky: deep violet fading to orange at the horizon
  brush.fill("#1a0a2e", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 400); brush.vertex(400, 420); brush.vertex(200, 400); brush.vertex(-20, 420);
  brush.endShape(true);
  brush.fill("#d86a2a", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, 420); brush.vertex(620, 420); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // sun: a warm glow
  brush.fill("#ff9a3a", 230);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.circle(340, 330, 55, 0.5);
  // palms: dark silhouettes
  brush.fill("#0e0a14", 250);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  for (let p of [[100, 480, 220], [220, 450, 180], [360, 470, 200], [470, 440, 160], [580, 460, 190]]) {
    let [x, base, w] = p;
    brush.beginShape(0.3);
    brush.vertex(x, base); brush.vertex(x + w * 0.4, base - 60); brush.vertex(x + w, base - 120); brush.vertex(x + w * 0.6, base - 90); brush.vertex(x + w * 0.2, base - 150);
    brush.endShape(true);
    brush.beginShape(0.3);
    brush.vertex(x - w * 0.4, base); brush.vertex(x - w, base - 60); brush.vertex(x - w * 0.6, base - 120); brush.vertex(x - w * 0.8, base - 90); brush.vertex(x - w * 0.2, base - 150);
    brush.endShape(true);
    // crown
    brush.beginShape(0.7);
    brush.vertex(x, base - 120); brush.vertex(x + w * 0.3, base - 150); brush.vertex(x + w, base - 130); brush.vertex(x + w * 0.7, base - 160); brush.vertex(x, base - 140); brush.vertex(x - w * 0.7, base - 160); brush.vertex(x - w, base - 130); brush.vertex(x - w * 0.3, base - 150);
    brush.endShape(true);
  }
  // ground
  brush.fill("#120c16", 240);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, 620); brush.vertex(620, 620); brush.vertex(620, 590); brush.vertex(-20, 590);
  brush.endShape(true);
}
