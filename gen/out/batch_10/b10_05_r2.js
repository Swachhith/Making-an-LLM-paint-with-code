async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1efe6");
  brush.noStroke();
  // splashy wash of greens and a drop of orange across the paper
  const splash = [[90, 120, 70, "#9dbd6a"], [520, 90, 60, "#c7d38a"], [480, 520, 90, "#6f9a58"], [80, 480, 80, "#88ad62"], [300, 560, 60, "#b6c978"], [560, 330, 50, "#f2a45a"], [60, 300, 40, "#f2a45a"]];
  for (const s of splash) {
    brush.fill(s[3], 165);
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.6);
    brush.circle(s[0], s[1], s[2], 0.95);
  }
  // stems
  brush.fill("#3c6a2e", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(262, 620); brush.vertex(284, 620); brush.vertex(276, 460); brush.vertex(256, 360); brush.vertex(238, 360); brush.vertex(256, 460);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(272, 520); brush.vertex(288, 510); brush.vertex(420, 330); brush.vertex(460, 230); brush.vertex(444, 224); brush.vertex(404, 322);
  brush.endShape(true);
  // long lily leaves
  brush.fill("#4e7d35", 210);
  brush.fillBleed(0.25);
  brush.beginShape(0.8);
  brush.vertex(270, 560); brush.vertex(190, 500); brush.vertex(130, 420); brush.vertex(210, 470); brush.vertex(275, 530);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(282, 470); brush.vertex(360, 440); brush.vertex(420, 400); brush.vertex(350, 460); brush.vertex(284, 490);
  brush.endShape(true);
  // closed bud, upright and long
  brush.fill("#f07a20", 215);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(452, 236); brush.vertex(484, 180); brush.vertex(486, 110); brush.vertex(468, 70); brush.vertex(446, 110); brush.vertex(440, 180);
  brush.endShape(true);
  brush.fill("#c9461a", 200);
  brush.fillBleed(0.2);
  brush.beginShape(0.8);
  brush.vertex(460, 230); brush.vertex(480, 170); brush.vertex(470, 84); brush.vertex(458, 170);
  brush.endShape(true);
  brush.fill("#6e9a40", 200);
  brush.beginShape(0.6);
  brush.vertex(448, 240); brush.vertex(462, 212); brush.vertex(478, 240);
  brush.endShape(true);
  // open bloom: six broad recurved petals
  const cx = 245, cy = 300;
  for (let p = 0; p < 6; p++) {
    const a = p * 60 - 75;
    const L = 160;
    // big loose pass
    brush.fill("#f46a00", 235);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.8);
    brush.vertex(cx, cy);
    brush.vertex(cx + 70 * cos(a - 26), cy + 70 * sin(a - 26));
    brush.vertex(cx + 130 * cos(a - 14), cy + 130 * sin(a - 14));
    brush.vertex(cx + L * cos(a + 6), cy + L * sin(a + 6));
    brush.vertex(cx + 125 * cos(a + 18), cy + 125 * sin(a + 18));
    brush.vertex(cx + 65 * cos(a + 26), cy + 65 * sin(a + 26));
    brush.endShape(true);
    // deeper inner pass, pooling toward the throat
    brush.fill("#d8360a", 220);
    brush.fillBleed(0.22);
    brush.beginShape(0.7);
    brush.vertex(cx, cy);
    brush.vertex(cx + 55 * cos(a - 14), cy + 55 * sin(a - 14));
    brush.vertex(cx + 100 * cos(a + 2), cy + 100 * sin(a + 2));
    brush.vertex(cx + 55 * cos(a + 16), cy + 55 * sin(a + 16));
    brush.endShape(true);
    // third pass along the midrib
    brush.fill("#f46a00", 200);
    brush.fillBleed(0.2);
    brush.beginShape(0.6);
    brush.vertex(cx + 30 * cos(a), cy + 30 * sin(a));
    brush.vertex(cx + 90 * cos(a - 8), cy + 90 * sin(a - 8));
    brush.vertex(cx + 145 * cos(a + 6), cy + 145 * sin(a + 6));
    brush.vertex(cx + 90 * cos(a + 14), cy + 90 * sin(a + 14));
    brush.endShape(true);
    // speckles
    brush.fill("#4a120a", 230);
    brush.fillBleed(0.08);
    for (let s = 0; s < 6; s++) {
      const d = 28 + s * 13;
      const off = (s % 2 ? 9 : -7);
      brush.circle(cx + d * cos(a + off), cy + d * sin(a + off), 3.5, 0.3);
    }
  }
  // stamens, splayed forward
  for (let k = 0; k < 6; k++) {
    const a = 50 + k * 16;
    brush.fill("#8a3a14", 220);
    brush.fillBleed(0.12);
    brush.circle(cx + 110 * cos(a), cy + 110 * sin(a), 9, 0.4);
  }
  brush.fill("#9c3a0c", 230);
  brush.fillBleed(0.2);
  brush.circle(cx, cy, 20, 0.5);
  // drips of orange falling off the bloom
  brush.fill("#ff8416", 180);
  brush.fillBleed(0.3);
  brush.circle(170, 470, 12, 0.8);
  brush.circle(330, 480, 8, 0.8);
  brush.circle(110, 210, 10, 0.8);
  brush.circle(160, 520, 6, 0.8);
}
