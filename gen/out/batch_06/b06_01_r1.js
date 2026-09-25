async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf9f7");
  randomSeed(12);
  brush.noStroke();
  let cx = 300, cy = 305;
  // broad cupped outer petals, overlapping, paper left between the edges
  let rings = [
    { n: 6, rOut: 280, rIn: 70, c1: "#f3bccb", c2: "#e8889f", o: 200 },
    { n: 7, rOut: 215, rIn: 50, c1: "#ec9fb3", c2: "#d65c7c", o: 205 },
    { n: 7, rOut: 150, rIn: 30, c1: "#e27592", c2: "#b92a4f", o: 215 },
    { n: 6, rOut: 90, rIn: 10, c1: "#c83a5c", c2: "#8e0f2e", o: 230 }
  ];
  for (let R = 0; R < rings.length; R++) {
    let g = rings[R];
    for (let i = 0; i < g.n; i++) {
      let a = i * 360 / g.n + R * 23 + random(-10, 10);
      let span = 360 / g.n * 0.62;
      // loose first wash
      brush.fill(g.c1, g.o);
      brush.fillBleed(0.28, "out");
      brush.fillTexture(0.5, 0.55);
      brush.beginShape(0.8);
      brush.vertex(cx + cos(a - span * 0.3) * g.rIn, cy + sin(a - span * 0.3) * g.rIn);
      for (let k = 0; k <= 6; k++) {
        let aa = a - span + k * span / 3;
        let rr = g.rOut * (0.84 + random(0.18)) * (k % 2 ? 0.93 : 1);
        brush.vertex(cx + cos(aa) * rr, cy + sin(aa) * rr);
      }
      brush.vertex(cx + cos(a + span * 0.3) * g.rIn, cy + sin(a + span * 0.3) * g.rIn);
      brush.endShape(true);
      // pooled shadow where the petal cups toward the centre
      brush.fill(g.c2, g.o);
      brush.fillBleed(0.15, "out");
      brush.fillTexture(0.6, 0.6);
      brush.beginShape(0.7);
      let r2 = (g.rIn + g.rOut) * 0.45;
      brush.vertex(cx + cos(a - span * 0.5) * g.rIn * 1.1, cy + sin(a - span * 0.5) * g.rIn * 1.1);
      brush.vertex(cx + cos(a - span * 0.45) * r2, cy + sin(a - span * 0.45) * r2);
      brush.vertex(cx + cos(a) * r2 * 0.8, cy + sin(a) * r2 * 0.8);
      brush.vertex(cx + cos(a + span * 0.45) * r2, cy + sin(a + span * 0.45) * r2);
      brush.vertex(cx + cos(a + span * 0.5) * g.rIn * 1.1, cy + sin(a + span * 0.5) * g.rIn * 1.1);
      brush.endShape(true);
    }
  }
  brush.fill("#6e0a22", 235);
  brush.fillBleed(0.12, "out");
  brush.fillTexture(0.7, 0.7);
  brush.circle(cx, cy, 30, true);
  brush.fill("#efc257", 230);
  brush.fillBleed(0.03, "out");
  for (let i = 0; i < 12; i++) {
    let a = random(360), r = random(20, 45);
    brush.circle(cx + cos(a) * r, cy + sin(a) * r, 5, true);
  }
}
