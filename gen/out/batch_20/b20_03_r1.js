async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1ecef");
  brush.noStroke();

  brush.fill("#c7d6a8", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(-20, 380); brush.vertex(200, 300); brush.vertex(460, 380); brush.vertex(620, 330); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#b8a0c8", 150);
  brush.beginShape(0.7);
  brush.vertex(300, -20); brush.vertex(620, -20); brush.vertex(620, 300); brush.vertex(420, 200);
  brush.endShape(true);

  // arcing stem, two passes, wide
  for (let p = 0; p < 2; p++) {
    brush.fill("#2a6a3a", 225);
    brush.fillBleed(0.2);
    brush.fillTexture(0.35, 0.4);
    brush.beginShape(0.8);
    brush.vertex(20, 600); brush.vertex(100, 420); brush.vertex(230, 290); brush.vertex(380, 230); brush.vertex(390, 256); brush.vertex(248, 318); brush.vertex(124, 440); brush.vertex(50, 610);
    brush.endShape(true);
  }
  // serrated palmate leaves
  brush.fill("#1c5530", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  const lv = [[140, 420, 60], [140, 420, 100], [140, 420, 20], [70, 520, 200], [70, 520, 160]];
  for (const l of lv) {
    brush.beginShape(0.6);
    brush.vertex(l[0], l[1]);
    brush.vertex(l[0] + cos(l[2] - 12) * 70, l[1] + sin(l[2] - 12) * 70);
    brush.vertex(l[0] + cos(l[2]) * 120, l[1] + sin(l[2]) * 120);
    brush.vertex(l[0] + cos(l[2] + 12) * 70, l[1] + sin(l[2] + 12) * 70);
    brush.endShape(true);
  }

  // nodding hellebore, big, face tilted downward-right
  const cx = 430, cy = 310;
  for (let pass = 0; pass < 2; pass++) {
    for (let i = 0; i < 5; i++) {
      const a = i * 72 + 35;
      brush.fill(pass === 0 ? "#5a1040" : "#7a1650", pass === 0 ? 215 : 230);
      brush.fillBleed(0.26);
      brush.fillTexture(0.5, 0.45);
      const r = pass === 0 ? 140 : 100;
      brush.beginShape(0.75);
      brush.vertex(cx + cos(a) * 15, cy + sin(a) * 15);
      brush.vertex(cx + cos(a - 30) * r * 0.75, cy + sin(a - 30) * r * 0.75);
      brush.vertex(cx + cos(a) * r, cy + sin(a) * r);
      brush.vertex(cx + cos(a + 30) * r * 0.75, cy + sin(a + 30) * r * 0.75);
      brush.endShape(true);
    }
  }
  // dark veins pooling near centre
  brush.fill("#3a0626", 230);
  brush.fillBleed(0.22);
  brush.circle(cx, cy, 42, 0.5);
  brush.fill("#c9d43a", 245);
  brush.fillBleed(0.18);
  brush.circle(cx, cy, 20, 0.7);
  brush.fill("#e8c030", 240);
  for (let k = 0; k < 8; k++) brush.circle(cx + cos(k * 45) * 22, cy + sin(k * 45) * 22, 4, 0.4);

  // bud on side stem
  brush.fill("#2a6a3a", 220);
  brush.beginShape(0.6);
  brush.vertex(240, 305); brush.vertex(210, 220); brush.vertex(226, 214); brush.vertex(258, 300);
  brush.endShape(true);
  brush.fill("#6a1244", 230);
  brush.fillBleed(0.25);
  brush.circle(214, 200, 32, 0.4);
  brush.fill("#3a0626", 210);
  brush.circle(220, 208, 18, 0.4);
}
