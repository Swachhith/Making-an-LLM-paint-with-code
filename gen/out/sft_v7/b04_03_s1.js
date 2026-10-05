async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7f5f0");
  brush.noStroke();
  // soft lilac haze, left as a paper shadow behind the flower
  brush.fill("#c9b8d0", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  // stem and leaf, pale green, left as paper
  brush.fill("#9fc3a8", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.6);
  brush.vertex(270, 500);
  brush.vertex(290, 500);
  brush.vertex(300, 620);
  brush.vertex(280, 620);
  brush.endShape(true);
  brush.fill("#6f9a7a", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(272, 520);
  brush.vertex(310, 530);
  brush.vertex(330, 600);
  brush.vertex(290, 600);
  brush.endShape(true);
  // tulip: six broad petals, overlapping in a flat, open view
  const cx = 300, cy = 300;
  const rings = [
    { r: 170, n: 6, c: "#f0c8d4", o: 200, s: 0.5 },
    { r: 120, n: 6, c: "#e8b0c8", o: 210, s: 0.55 },
    { r: 65, n: 6, c: "#d994b8", o: 220, s: 0.6 },
  ];
  for (const r of rings) {
    for (let i = 0; i < r.n; i++) {
      const a = i * 60 + r.s * 12;
      const w = 280 / r.n;
      brush.fill(r.c, r.o);
      brush.fillBleed(0.25);
      brush.fillTexture(0.45, 0.45);
      brush.beginShape(0.7);
      brush.vertex(cx + cos(a - w) * r * 0.55, cy + sin(a - w) * r * 0.55);
      brush.vertex(cx + cos(a - w * 0.7) * r, cy + sin(a - w * 0.7) * r);
      brush.vertex(cx + cos(a) * r * 0.9, cy + sin(a) * r * 0.9);
      brush.vertex(cx + cos(a + w * 0.7) * r, cy + sin(a + w * 0.7) * r);
      brush.vertex(cx + cos(a + w) * r * 0.55, cy + sin(a + w) * r * 0.55);
      brush.endShape(true);
    }
  }
  // darker vein lines in each petal, left as paper
  for (const r of rings) {
    for (let i = 0; i < r.n; i++) {
      const a = i * 60 + r.s * 12;
      brush.fill("#b88aa8", 190);
      brush.fillBleed(0.15);
      brush.fillTexture(0.3, 0.3);
      brush.beginShape(0.6);
      brush.vertex(cx + cos(a - 12) * r * 0.6, cy + sin(a - 12) * r * 0.6);
      brush.vertex(cx + cos(a) * r * 0.95, cy + sin(a) * r * 0.95);
      brush.vertex(cx + cos(a + 12) * r * 0.6, cy + sin(a + 12) * r * 0.6);
      brush.endShape(true);
    }
  }
  // pale yellow centre, left as paper
  brush.fill("#f7e8c4", 220);
  brush.fillBleed(0.2);
  brush.circle(cx, cy, 28, 0.3);
  brush.fill("#e8c48a", 220);
  brush.circle(cx + 4, cy + 4, 14, 0.3);
  brush.fill("#c89a50", 200);
  brush.circle(cx + 8, cy + 8, 6, 0.3);
}
