async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf0df");
  brush.noStroke();

  brush.fill("#f6c79a", 160);
  brush.fillBleed(0.4);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(40, 120);
  brush.vertex(300, 20);
  brush.vertex(570, 150);
  brush.vertex(590, 440);
  brush.vertex(330, 590);
  brush.vertex(20, 470);
  brush.endShape(true);

  let cx = 305, cy = 300;
  let rings = [
    { r: 270, n: 5, col: "#f0a878", a: 175, off: 10 },
    { r: 215, n: 5, col: "#eb9460", a: 190, off: 45 },
    { r: 160, n: 5, col: "#e4844f", a: 200, off: 80 },
    { r: 110, n: 4, col: "#d96e3c", a: 210, off: 20 },
    { r: 65, n: 3, col: "#c4552a", a: 220, off: 60 }
  ];
  for (let i = 0; i < rings.length; i++) {
    let g = rings[i];
    for (let k = 0; k < g.n; k++) {
      let a = g.off + k * (360 / g.n);
      let w = 360 / g.n * 0.75;
      brush.fill(g.col, g.a);
      brush.fillBleed(0.3 - i * 0.04);
      brush.fillTexture(0.5, 0.55);
      brush.beginShape(0.7);
      brush.vertex(cx + cos(a - w) * g.r * 0.35, cy + sin(a - w) * g.r * 0.35);
      brush.vertex(cx + cos(a - w * 0.7) * g.r * 0.95, cy + sin(a - w * 0.7) * g.r * 0.95);
      brush.vertex(cx + cos(a) * g.r, cy + sin(a) * g.r);
      brush.vertex(cx + cos(a + w * 0.7) * g.r * 0.92, cy + sin(a + w * 0.7) * g.r * 0.92);
      brush.vertex(cx + cos(a + w) * g.r * 0.3, cy + sin(a + w) * g.r * 0.3);
      brush.endShape(true);
      brush.fill("#fde0b8", 150);
      brush.fillBleed(0.1);
      brush.beginShape(0.8);
      brush.vertex(cx + cos(a - w * 0.5) * g.r * 0.85, cy + sin(a - w * 0.5) * g.r * 0.85);
      brush.vertex(cx + cos(a) * g.r * 0.97, cy + sin(a) * g.r * 0.97);
      brush.vertex(cx + cos(a + w * 0.5) * g.r * 0.85, cy + sin(a + w * 0.5) * g.r * 0.85);
      brush.vertex(cx + cos(a) * g.r * 0.8, cy + sin(a) * g.r * 0.8);
      brush.endShape(true);
    }
  }
  brush.fill("#9e3a1c", 225);
  brush.fillBleed(0.2);
  brush.beginShape(0.9);
  brush.vertex(cx - 25, cy - 5);
  brush.vertex(cx, cy - 28);
  brush.vertex(cx + 22, cy - 2);
  brush.vertex(cx + 2, cy + 12);
  brush.endShape(true);
}
