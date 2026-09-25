async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef2f4");
  brush.noStroke();

  // pale blue-grey wash behind, leaving the top clean
  brush.fill("#c9d8e2", 150);
  brush.fillBleed(0.45);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(1);
  brush.vertex(60, 200); brush.vertex(520, 170); brush.vertex(560, 520); brush.vertex(90, 560);
  brush.endShape(true);

  // stem leaning right, bloom sits upper left
  brush.fill("#3f5f55", 215);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.7);
  brush.vertex(228, 300); brush.vertex(240, 300); brush.vertex(350, 585); brush.vertex(336, 590);
  brush.endShape(true);
  // glossy teal leaves
  brush.fill("#2f5c5a", 205);
  brush.fillBleed(0.2);
  brush.beginShape(0.9);
  brush.vertex(300, 440); brush.vertex(390, 360); brush.vertex(480, 370); brush.vertex(410, 450);
  brush.endShape(true);
  brush.fill("#8fb3b4", 160);
  brush.fillBleed(0.1);
  brush.beginShape(0.9);
  brush.vertex(330, 420); brush.vertex(400, 380); brush.vertex(450, 385);
  brush.endShape(true);
  brush.fill("#355f63", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.9);
  brush.vertex(290, 480); brush.vertex(200, 450); brush.vertex(140, 490); brush.vertex(230, 515);
  brush.endShape(true);

  // camellia: rounded overlapping petals, cool crimson
  const cx = 230, cy = 230;
  const outer = [0, 60, 120, 180, 240, 300];
  for (const a of outer) {
    brush.fill("#d8304c", 205);
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.5);
    brush.circle(cx + cos(a) * 82, cy + sin(a) * 76, 66, 0.35);
    brush.fill("#8f0c2a", 170);
    brush.fillBleed(0.15);
    brush.beginShape(1);
    brush.vertex(cx + cos(a - 20) * 40, cy + sin(a - 20) * 40);
    brush.vertex(cx + cos(a) * 95, cy + sin(a) * 90);
    brush.vertex(cx + cos(a + 20) * 40, cy + sin(a + 20) * 40);
    brush.endShape(true);
  }
  for (const a of outer) {
    brush.fill("#b0122f", 220);
    brush.fillBleed(0.15);
    brush.circle(cx + cos(a + 30) * 45, cy + sin(a + 30) * 42, 42, 0.3);
  }
  // highlight gaps: cool pinkish-white lights on petal tops
  brush.fill("#f2d2dc", 170);
  brush.fillBleed(0.1);
  brush.circle(cx - 60, cy - 60, 16, 0.5);
  brush.circle(cx + 70, cy - 35, 12, 0.5);
  // dark heart and gold stamen boss
  brush.fill("#6d0a22", 225);
  brush.fillBleed(0.2);
  brush.circle(cx, cy, 34, 0.4);
  brush.fill("#f2c230", 235);
  brush.fillBleed(0.05);
  brush.circle(cx, cy - 4, 18, 0.6);
  brush.fill("#d99a16", 200);
  brush.circle(cx + 3, cy, 8, 0.5);
}
