async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcf6ef");
  randomSeed(1234);
  brush.noStroke();

  // stems
  brush.fill("#8a7a4a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(300, 600); brush.vertex(306, 600); brush.vertex(302, 420); brush.vertex(296, 340); brush.vertex(290, 260); brush.vertex(298, 200); brush.vertex(306, 200); brush.vertex(314, 260); brush.vertex(310, 340); brush.vertex(316, 420); brush.vertex(322, 600);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(470, 600); brush.vertex(464, 600); brush.vertex(468, 480); brush.vertex(474, 400); brush.vertex(480, 320); brush.vertex(486, 240); brush.vertex(492, 240); brush.vertex(498, 320); brush.vertex(492, 400); brush.vertex(486, 480); brush.vertex(480, 600);
  brush.endShape(true);

  // two blooms: one upright, one tilted
  const blooms = [[290, 200, 0, 1], [400, 260, 170, 1]];
  for (const b of blooms) {
    const [cx, cy, ang, n] = b;
    brush.fill("#f28a9a", 215);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.5);
    for (let i = 0; i < n; i++) {
      const a = i * 360 / n + ang;
      const r = 120;
      brush.vertex(cx + cos(a) * r, cy + sin(a) * r);
      brush.vertex(cx + cos(a - 22) * 85, cy + sin(a - 22) * 85);
    }
    brush.endShape(true);
    brush.fill("#e0607a", 225);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.5);
    for (let i = 0; i < n; i++) {
      const a = i * 360 / n + ang + 10;
      const r = 100;
      brush.vertex(cx + cos(a) * r, cy + sin(a) * r);
      brush.vertex(cx + cos(a - 20) * 70, cy + sin(a - 20) * 70);
    }
    brush.endShape(true);
    brush.fill("#d04060", 200);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5);
    for (let i = 0; i < n; i++) {
      const a = i * 360 / n + ang + 20;
      const r = 80;
      brush.vertex(cx + cos(a) * r, cy + sin(a) * r);
      brush.vertex(cx + cos(a - 18) * 55, cy + sin(a - 18) * 55);
    }
    brush.endShape(true);
    // a few dark centres
    brush.fill("#8a1a3a", 225);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.circle(cx, cy, 18, 0.3);
    brush.circle(cx + 6, cy - 6, 12, 0.3);
    brush.circle(cx - 6, cy + 6, 10, 0.3);
  }
}
