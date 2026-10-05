async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fffaf4");
  randomSeed(2301);
  brush.noStroke();

  // soft lilac haze in the corner
  brush.fill("#c8b8e8", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(600, 600); brush.vertex(600, 300); brush.vertex(450, 200); brush.vertex(300, 320);
  brush.endShape(true);

  // stem
  brush.fill("#8aa89a", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.5);
  brush.vertex(290, 320); brush.vertex(302, 320); brush.vertex(302, 600); brush.vertex(290, 600);
  brush.endShape(true);
  brush.fill("#6a8a7a", 180);
  brush.beginShape(0.5);
  brush.vertex(288, 330); brush.vertex(298, 330); brush.vertex(298, 580); brush.vertex(288, 580);
  brush.endShape(true);

  // cup: five rounded lobes, seen from above
  const cx = 300, cy = 300;
  const lobes = [
    [-45, -120], [60, -60], [120, 0], [60, 60], [-45, 120]
  ];
  for (const L of lobes) {
    const a = L[0], r = L[1];
    brush.fill("#f7c9d4", 190);
    brush.fillBleed(0.28);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(0.6);
    brush.vertex(cx + cos(a - 16) * 40, cy + sin(a - 16) * 40);
    brush.vertex(cx + cos(a - 8) * 160, cy + sin(a - 8) * 160);
    brush.vertex(cx + cos(a + 8) * 160, cy + sin(a + 8) * 160);
    brush.vertex(cx + cos(a + 16) * 40, cy + sin(a + 16) * 40);
    brush.endShape(true);
    brush.fill("#e8a8c8", 160);
    brush.fillBleed(0.3);
    brush.beginShape(0.6);
    brush.vertex(cx + cos(a - 10) * 80, cy + sin(a - 10) * 80);
    brush.vertex(cx + cos(a) * 110, cy + sin(a) * 110);
    brush.vertex(cx + cos(a + 10) * 80, cy + sin(a + 10) * 80);
    brush.endShape(true);
  }
  // darker heart at the centre
  brush.fill("#d490b8", 210);
  brush.fillBleed(0.2);
  brush.circle(cx, cy, 38, 0.4);
  // pale veins
  for (let i = 0; i < 3; i++) {
    const a = i * 120 + 60;
    brush.fill("#f2d8e8", 220);
    brush.fillBleed(0.2);
    brush.beginShape(0.6);
    brush.vertex(cx + cos(a - 10) * 30, cy + sin(a - 10) * 30);
    brush.vertex(cx + cos(a) * 120, cy + sin(a) * 120);
    brush.vertex(cx + cos(a + 10) * 30, cy + sin(a + 10) * 30);
    brush.endShape(true);
  }
}
