async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef3f7");
  randomSeed(21);
  brush.noStroke();

  // cool sky wash top half
  brush.fill("#bcd3e6", 160);
  brush.fillBleed(0.5);
  brush.fillTexture(0.6, 0.5);
  brush.beginShape(1);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 260); brush.vertex(300, 320); brush.vertex(0, 280);
  brush.endShape(true);

  // thick stem
  brush.fill("#4e7a52", 220);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.6);
  brush.vertex(292, 330); brush.vertex(310, 330); brush.vertex(318, 600); brush.vertex(298, 600);
  brush.endShape(true);
  // two heart-shaped leaves, cool blue-green
  brush.fill("#5f8a6e", 200);
  brush.fillBleed(0.3);
  brush.beginShape(1);
  brush.vertex(305, 470); brush.vertex(390, 400); brush.vertex(480, 430); brush.vertex(440, 500); brush.vertex(360, 500);
  brush.endShape(true);
  brush.beginShape(1);
  brush.vertex(300, 520); brush.vertex(220, 470); brush.vertex(130, 500); brush.vertex(170, 560); brush.vertex(250, 555);
  brush.endShape(true);
  brush.fill("#3c6650", 180);
  brush.fillBleed(0.15);
  brush.beginShape(0.8);
  brush.vertex(310, 470); brush.vertex(390, 430); brush.vertex(460, 440);
  brush.endShape(true);

  // sunflower: ~26 golden rays in two passes, then a dark disk
  const cx = 300, cy = 220;
  for (let pass = 0; pass < 2; pass++) {
    for (let i = 0; i < 26; i++) {
      const a = i * 360 / 26 + pass * 7 + random(-3, 3);
      const l = pass ? random(135, 150) : random(155, 175);
      brush.fill(pass ? "#eaa90a" : "#f7d451", pass ? 215 : 185);
      brush.fillBleed(pass ? 0.12 : 0.3);
      brush.fillTexture(0.35, 0.5);
      brush.beginShape(0.8);
      brush.vertex(cx + cos(a - 7) * 60, cy + sin(a - 7) * 60);
      brush.vertex(cx + cos(a - 4) * l * 0.8, cy + sin(a - 4) * l * 0.8);
      brush.vertex(cx + cos(a) * l, cy + sin(a) * l);
      brush.vertex(cx + cos(a + 4) * l * 0.8, cy + sin(a + 4) * l * 0.8);
      brush.vertex(cx + cos(a + 7) * 60, cy + sin(a + 7) * 60);
      brush.endShape(true);
    }
  }
  brush.fill("#c9781a", 185);
  brush.fillBleed(0.3);
  brush.circle(cx, cy, 92, 0.4);
  brush.fill("#5a3b1c", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.6, 0.6);
  brush.circle(cx, cy, 72, 0.3);
  brush.fill("#2e1d10", 225);
  brush.fillBleed(0.1);
  brush.circle(cx + 6, cy + 6, 42, 0.4);
  for (let i = 0; i < 30; i++) {
    const r = 55 * sqrt(random()), t = random(360);
    brush.fill("#8a6a2e", 190);
    brush.circle(cx + cos(t) * r, cy + sin(t) * r, 3, 0.3);
  }
}
