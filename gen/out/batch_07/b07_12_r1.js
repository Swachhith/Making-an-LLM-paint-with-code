async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f9f1e3");
  brush.noStroke();

  const cx = 245, cy = 280;
  // warm rose-ochre background that stops at the petal outline
  const ring = [];
  for (let a = 0; a < 360; a += 20) {
    const r = 175 + (a % 60 === 0 ? 18 : -6);
    ring.push([cx + cos(a) * r, cy + sin(a) * r]);
  }
  for (let i = 0; i < ring.length; i++) {
    const p = ring[i], q = ring[(i + 1) % ring.length];
    brush.fill(i % 3 ? "#e8c7a2" : "#dfb691", 185);
    brush.fillBleed(0.3, "out");
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.3);
    brush.vertex(p[0], p[1]);
    brush.vertex(cx + (p[0] - cx) * 2.4, cy + (p[1] - cy) * 2.4);
    brush.vertex(cx + (q[0] - cx) * 2.4, cy + (q[1] - cy) * 2.4);
    brush.vertex(q[0], q[1]);
    brush.endShape(true);
  }

  // stems over the wash
  brush.fill("#6e7c3e", 215);
  brush.fillBleed(0.15, "out");
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.6);
  brush.vertex(255, 450);
  brush.vertex(268, 450);
  brush.vertex(292, 600);
  brush.vertex(278, 600);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(470, 250);
  brush.vertex(480, 252);
  brush.vertex(345, 600);
  brush.vertex(333, 600);
  brush.endShape(true);

  // petal shadows: soft grey-lilac, laid only near the centre and the folds
  for (let i = 0; i < 6; i++) {
    const a = i * 60 + 30;
    brush.fill("#cfc3c8", 170);
    brush.fillBleed(0.35, "in");
    brush.fillTexture(0.4, 0.6);
    brush.beginShape(0.8);
    brush.vertex(cx + cos(a - 8) * 40, cy + sin(a - 8) * 40);
    brush.vertex(cx + cos(a - 4) * 150, cy + sin(a - 4) * 150);
    brush.vertex(cx + cos(a + 4) * 150, cy + sin(a + 4) * 150);
    brush.vertex(cx + cos(a + 8) * 40, cy + sin(a + 8) * 40);
    brush.endShape(true);
  }

  // dark centre with ring of stamens
  brush.fill("#2b2540", 230);
  brush.fillBleed(0.35, "out");
  brush.circle(cx, cy, 40, true);
  brush.fill("#1c1828", 235);
  brush.fillBleed(0.05, "in");
  for (let k = 0; k < 22; k++) {
    const r = 48 + (k % 3) * 6;
    brush.circle(cx + cos(k * 16.4) * r, cy + sin(k * 16.4) * r, 4, true);
  }
  brush.fill("#56627e", 200);
  brush.circle(cx - 6, cy - 8, 12, true);

  // closed bud at the top of the second stem, white petals folded, blushed
  brush.fill("#d9c2b6", 210);
  brush.fillBleed(0.35, "out");
  brush.fillTexture(0.5, 0.6);
  brush.beginShape(0.9);
  brush.vertex(474, 255);
  brush.vertex(438, 200);
  brush.vertex(462, 128);
  brush.vertex(508, 190);
  brush.endShape(true);
  brush.fill("#c28c8c", 200);
  brush.fillBleed(0.2, "in");
  brush.beginShape(0.9);
  brush.vertex(476, 250);
  brush.vertex(470, 180);
  brush.vertex(466, 136);
  brush.vertex(498, 196);
  brush.endShape(true);
  brush.fill("#7c8a46", 215);
  brush.beginShape(0.5);
  brush.vertex(446, 240);
  brush.vertex(476, 262);
  brush.vertex(502, 236);
  brush.vertex(476, 250);
  brush.endShape(true);
}
