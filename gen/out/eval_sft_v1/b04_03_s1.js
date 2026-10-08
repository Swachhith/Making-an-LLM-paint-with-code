async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf6ec");
  brush.noStroke();

  // soft blue-grey wash in the corner
  brush.fill("#b8c4d8", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.9);
  brush.vertex(600, 600); brush.vertex(600, 420); brush.vertex(470, 380); brush.vertex(350, 420); brush.vertex(230, 470); brush.vertex(600, 600);
  brush.endShape(true);

  // stem
  brush.fill("#8aa39e", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(300, 470); brush.vertex(320, 470); brush.vertex(322, 600); brush.vertex(302, 600);
  brush.endShape(true);

  // leaf
  brush.fill("#6f9a8a", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(270, 520); brush.vertex(230, 490); brush.vertex(180, 520); brush.vertex(210, 560); brush.vertex(260, 540);
  brush.endShape(true);

  // cup: three broad petals, overlapping, pale pink with a deeper pass inside
  const cx = 300, cy = 300;
  for (let p = 0; p < 3; p++) {
    const a = p * 120 + 20;
    const w = 135;
    brush.fill("#f6c8d4", 190);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.7);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 22) * w, cy + sin(a - 22) * w * 0.75);
    brush.vertex(cx + cos(a - 10) * w * 1.15, cy + sin(a - 10) * w * 0.95);
    brush.vertex(cx + cos(a + 10) * w * 1.15, cy + sin(a + 10) * w * 0.95);
    brush.vertex(cx + cos(a + 22) * w, cy + sin(a + 22) * w * 0.75);
    brush.endShape(true);
    // deeper pass
    brush.fill("#e8a8b8", 210);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.7);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 12) * w * 0.6, cy + sin(a - 12) * w * 0.6);
    brush.vertex(cx + cos(a - 2) * w * 0.85, cy + sin(a - 2) * w * 0.85);
    brush.vertex(cx + cos(a + 2) * w * 0.85, cy + sin(a + 2) * w * 0.85);
    brush.vertex(cx + cos(a + 12) * w * 0.6, cy + sin(a + 12) * w * 0.6);
    brush.endShape(true);
  }

  // cupped shadow inside
  brush.fill("#d49fa8", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(cx - 10, cy - 10); brush.vertex(cx + 10, cy - 10); brush.vertex(cx + 12, cy + 12); brush.vertex(cx - 12, cy + 12);
  brush.endShape(true);

  // centre: six small pale petals
  for (let i = 0; i < 6; i++) {
    const a = i * 60;
    brush.fill("#f2d8e8", 200);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 25) * 30, cy + sin(a - 25) * 30);
    brush.vertex(cx + cos(a - 8) * 48, cy + sin(a - 8) * 48);
    brush.vertex(cx + cos(a + 8) * 48, cy + sin(a + 8) * 48);
    brush.vertex(cx + cos(a + 25) * 30, cy + sin(a + 25) * 30);
    brush.endShape(true);
  }
  brush.fill("#c86a8a", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.circle(cx, cy, 14, 0.4);
  brush.fill("#8a3a6a", 220);
  brush.circle(cx, cy, 7, 0.4);
}
