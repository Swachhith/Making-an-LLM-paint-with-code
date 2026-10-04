async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf1dc");
  randomSeed(2002);
  brush.noStroke();

  // bold teal corner wash behind the flower
  brush.fill("#1f8a8a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.5);
  brush.vertex(600, 0); brush.vertex(600, 330); brush.vertex(470, 260);
  brush.vertex(330, 120); brush.vertex(260, 0);
  brush.endShape(true);
  brush.fill("#2a6fa8", 170);
  brush.beginShape(0.5);
  brush.vertex(0, 600); brush.vertex(0, 430); brush.vertex(120, 520); brush.vertex(240, 600);
  brush.endShape(true);

  // stem, curving down to the lower left
  brush.fill("#3f8f2a", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.7);
  brush.vertex(318, 260); brush.vertex(338, 262);
  brush.vertex(300, 420); brush.vertex(250, 610);
  brush.vertex(226, 610); brush.vertex(282, 420);
  brush.endShape(true);

  brush.fill("#1f6a18", 170);
  brush.beginShape(0.7);
  brush.vertex(330, 262); brush.vertex(338, 262); brush.vertex(295, 430); brush.vertex(245, 610); brush.vertex(236, 610); brush.vertex(290, 420);
  brush.endShape(true);

  // two leaves
  brush.fill("#2e7d1f", 210);
  brush.beginShape(0.9);
  brush.vertex(285, 470); brush.vertex(200, 420); brush.vertex(120, 430);
  brush.vertex(170, 470); brush.vertex(260, 490);
  brush.endShape(true);
  brush.fill("#57a832", 190);
  brush.beginShape(0.9);
  brush.vertex(275, 520); brush.vertex(360, 470); brush.vertex(440, 480);
  brush.vertex(380, 530); brush.vertex(270, 545);
  brush.endShape(true);

  const cx = 320, cy = 230;
  // two rings of ray petals, back ring deeper
  for (let ring = 0; ring < 3; ring++) {
    const n = [22, 18, 16][ring];
    for (let i = 0; i < n; i++) {
      const a = 360 / n * i + (ring ? 9 : 0) + random(-4, 4);
      const L = [165, 130, 95][ring] * random(0.92, 1.05);
      const w = [17, 15, 15][ring];
      const ux = cos(a), uy = sin(a) * 0.82;
      brush.fill(["#e8520e", "#ff7a12", "#d23a06"][ring], [210, 190, 170][ring]);
      brush.fillBleed(0.22);
      brush.fillTexture(0.4, 0.45);
      brush.beginShape(0.6);
      brush.vertex(cx + ux * 30 - uy * w * 0.6, cy + uy * 30 + ux * w * 0.6);
      brush.vertex(cx + ux * L * 0.6 - uy * w, cy + uy * L * 0.6 + ux * w);
      brush.vertex(cx + ux * L, cy + uy * L);
      brush.vertex(cx + ux * L * 0.6 + uy * w, cy + uy * L * 0.6 - ux * w);
      brush.vertex(cx + ux * 30 + uy * w * 0.6, cy + uy * 30 - ux * w * 0.6);
      brush.endShape(true);
    }
  }
  // centre: yellow ring, dark disc
  brush.fill("#ffc21a", 230);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.circle(cx, cy, 52, 0.3);
  brush.fill("#5a2a08", 230);
  brush.circle(cx, cy, 30, 0.35);
  brush.fill("#2a1204", 200);
  brush.circle(cx + 3, cy - 2, 17, 0.4);
}
