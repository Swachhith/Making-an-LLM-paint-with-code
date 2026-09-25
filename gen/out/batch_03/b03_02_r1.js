async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbeedb");
  brush.noStroke();

  brush.fill("#f4b784", 185);
  brush.fillBleed(0.45);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(10, 110); brush.vertex(300, 0); brush.vertex(600, 120);
  brush.vertex(600, 470); brush.vertex(320, 600); brush.vertex(0, 480);
  brush.endShape(true);

  let cx = 300, cy = 305;
  let rings = [
    { r: 300, n: 5, col: "#f2a26c", a: 200, off: 10 },
    { r: 235, n: 5, col: "#ec9058", a: 205, off: 46 },
    { r: 175, n: 5, col: "#e37d45", a: 210, off: 82 },
    { r: 120, n: 4, col: "#d56834", a: 218, off: 20 },
    { r: 75, n: 3, col: "#bd4f24", a: 225, off: 65 },
    { r: 40, n: 3, col: "#933515", a: 232, off: 110 }
  ];
  for (let i = 0; i < rings.length; i++) {
    let g = rings[i];
    for (let k = 0; k < g.n; k++) {
      let a = g.off + k * (360 / g.n);
      let w = 360 / g.n * 0.8;
      // shadow at the petal base where it tucks under the next ring
      brush.fill("#b3542a", 170);
      brush.fillBleed(0.3);
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(0.7);
      brush.vertex(cx + cos(a - w * 0.9) * g.r * 0.45, cy + sin(a - w * 0.9) * g.r * 0.45);
      brush.vertex(cx + cos(a) * g.r * 0.72, cy + sin(a) * g.r * 0.72);
      brush.vertex(cx + cos(a + w * 0.9) * g.r * 0.45, cy + sin(a + w * 0.9) * g.r * 0.45);
      brush.endShape(true);
      brush.fill(g.col, g.a);
      brush.fillBleed(0.28 - i * 0.03);
      brush.fillTexture(0.5, 0.6);
      brush.beginShape(0.7);
      brush.vertex(cx + cos(a - w) * g.r * 0.35, cy + sin(a - w) * g.r * 0.35);
      brush.vertex(cx + cos(a - w * 0.7) * g.r * 0.95, cy + sin(a - w * 0.7) * g.r * 0.95);
      brush.vertex(cx + cos(a) * g.r, cy + sin(a) * g.r);
      brush.vertex(cx + cos(a + w * 0.7) * g.r * 0.92, cy + sin(a + w * 0.7) * g.r * 0.92);
      brush.vertex(cx + cos(a + w) * g.r * 0.3, cy + sin(a + w) * g.r * 0.3);
      brush.endShape(true);
      // pale rolled edge
      brush.fill("#fde3c0", 185);
      brush.fillBleed(0.08);
      brush.beginShape(0.85);
      brush.vertex(cx + cos(a - w * 0.55) * g.r * 0.9, cy + sin(a - w * 0.55) * g.r * 0.9);
      brush.vertex(cx + cos(a) * g.r * 0.99, cy + sin(a) * g.r * 0.99);
      brush.vertex(cx + cos(a + w * 0.55) * g.r * 0.88, cy + sin(a + w * 0.55) * g.r * 0.88);
      brush.vertex(cx + cos(a) * g.r * 0.9, cy + sin(a) * g.r * 0.9);
      brush.endShape(true);
    }
  }
  brush.fill("#6e220c", 235);
  brush.fillBleed(0.2);
  brush.beginShape(0.9);
  brush.vertex(cx - 22, cy - 4); brush.vertex(cx - 2, cy - 24);
  brush.vertex(cx + 20, cy - 4); brush.vertex(cx + 2, cy + 10);
  brush.endShape(true);
}
