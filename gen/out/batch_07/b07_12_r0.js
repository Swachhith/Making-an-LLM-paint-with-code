async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f8efe2");
  brush.noStroke();

  // stems
  brush.fill("#7c8a4a", 200);
  brush.fillBleed(0.15, "out");
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.6);
  brush.vertex(250, 330);
  brush.vertex(262, 330);
  brush.vertex(290, 600);
  brush.vertex(276, 600);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(448, 230);
  brush.vertex(458, 232);
  brush.vertex(330, 600);
  brush.vertex(318, 600);
  brush.endShape(true);

  // ruff of cut leaves under bloom
  brush.fill("#95a25a", 190);
  brush.fillBleed(0.3, "out");
  for (let i = 0; i < 5; i++) {
    const x = 200 + i * 28;
    brush.beginShape(0.3);
    brush.vertex(x, 420);
    brush.vertex(x + 12, 380);
    brush.vertex(x + 24, 420);
    brush.endShape(true);
  }

  // open bloom: white petals rendered with warm grey shadows
  const cx = 250, cy = 290;
  for (let i = 0; i < 6; i++) {
    const a = i * 60 + 20;
    brush.fill("#e3d2bb", 180);
    brush.fillBleed(0.45, "out");
    brush.fillTexture(0.5, 0.8);
    brush.circle(cx + cos(a) * 85, cy + sin(a) * 80, 85, true);
  }
  for (let i = 0; i < 6; i++) {
    const a = i * 60 + 20;
    brush.fill("#fffdf8", 235);
    brush.fillBleed(0.2, "in");
    brush.circle(cx + cos(a) * 88, cy + sin(a) * 82, 66, true);
  }
  // dark centre
  brush.fill("#2a2438", 235);
  brush.fillBleed(0.3, "out");
  brush.circle(cx, cy, 38, true);
  brush.fill("#1a1624", 230);
  for (let k = 0; k < 16; k++) brush.circle(cx + cos(k * 22.5) * 46, cy + sin(k * 22.5) * 46, 5, true);
  brush.fill("#4a5a7a", 190);
  brush.circle(cx - 8, cy - 8, 12, true);

  // closed bud, drooping
  brush.fill("#eadcc6", 200);
  brush.fillBleed(0.35, "out");
  brush.beginShape(0.9);
  brush.vertex(452, 232);
  brush.vertex(420, 180);
  brush.vertex(450, 120);
  brush.vertex(490, 170);
  brush.endShape(true);
  brush.fill("#c9a7a0", 190);
  brush.fillBleed(0.2, "in");
  brush.beginShape(0.9);
  brush.vertex(455, 228);
  brush.vertex(446, 170);
  brush.vertex(460, 130);
  brush.vertex(478, 180);
  brush.endShape(true);
}
