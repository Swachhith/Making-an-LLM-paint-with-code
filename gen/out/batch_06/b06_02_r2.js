async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#edf1f5");
  randomSeed(31);
  brush.noStroke();
  brush.fill("#b9c9da", 190);
  brush.fillBleed(0.45, "out");
  brush.fillTexture(0.5, 0.3);
  brush.circle(300, 300, 300, true);
  let cx = 296, cy = 304;
  let layers = [
    { n: 20, r: 290, w: 8, c: "#c29ab4", c2: "#8c4a70", o: 205 },
    { n: 18, r: 235, w: 9, c: "#9b4a70", c2: "#6e1d44", o: 210 },
    { n: 16, r: 180, w: 10, c: "#7c1f48", c2: "#55092e", o: 220 },
    { n: 13, r: 125, w: 12, c: "#621037", c2: "#3e0520", o: 230 },
    { n: 10, r: 72, w: 15, c: "#4a0a28", c2: "#2a0414", o: 235 }
  ];
  for (let L = 0; L < layers.length; L++) {
    let p = layers[L];
    for (let i = 0; i < p.n; i++) {
      let a = i * 360 / p.n + L * 13 + random(-4, 4);
      let len = p.r * random(0.9, 1.05);
      brush.fill(p.c, p.o);
      brush.fillBleed(0.18, "out");
      brush.fillTexture(0.55, 0.55);
      brush.beginShape(0.35);
      brush.vertex(cx + cos(a - p.w) * len * 0.2, cy + sin(a - p.w) * len * 0.2);
      brush.vertex(cx + cos(a - p.w * 0.75) * len * 0.8, cy + sin(a - p.w * 0.75) * len * 0.8);
      brush.vertex(cx + cos(a) * len, cy + sin(a) * len);
      brush.vertex(cx + cos(a + p.w * 0.75) * len * 0.8, cy + sin(a + p.w * 0.75) * len * 0.8);
      brush.vertex(cx + cos(a + p.w) * len * 0.2, cy + sin(a + p.w) * len * 0.2);
      brush.endShape(true);
      // quilled midline: darker narrow stroke
      brush.fill(p.c2, p.o);
      brush.fillBleed(0.08, "out");
      brush.beginShape(0.3);
      brush.vertex(cx + cos(a - 2) * len * 0.3, cy + sin(a - 2) * len * 0.3);
      brush.vertex(cx + cos(a) * len * 0.82, cy + sin(a) * len * 0.82);
      brush.vertex(cx + cos(a + 2) * len * 0.3, cy + sin(a + 2) * len * 0.3);
      brush.endShape(true);
    }
  }
  brush.fill("#1f030f", 240);
  brush.fillBleed(0.1, "out");
  brush.fillTexture(0.7, 0.7);
  brush.circle(cx, cy, 26, true);
  // flecks of cool light left in the petal tips
  brush.fill("#f4f6fa", 220);
  brush.fillBleed(0.05, "out");
  for (let i = 0; i < 14; i++) {
    let a = random(360), r = random(200, 270);
    brush.circle(cx + cos(a) * r, cy + sin(a) * r, random(4, 9), true);
  }
}
