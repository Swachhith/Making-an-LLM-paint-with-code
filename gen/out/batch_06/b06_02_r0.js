async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef2f5");
  randomSeed(22);
  brush.noStroke();
  // cool background wash
  brush.fill("#c9d6e3", 150);
  brush.fillBleed(0.4, "out");
  brush.fillTexture(0.4, 0.3);
  brush.circle(300, 300, 290, true);
  let cx = 290, cy = 300;
  let layers = [
    { n: 18, r: 285, w: 9, c: "#b98aa3", o: 170 },
    { n: 16, r: 225, w: 10, c: "#9a4a6c", o: 190 },
    { n: 14, r: 165, w: 11, c: "#7a1f45", o: 205 },
    { n: 12, r: 105, w: 12, c: "#5e0f30", o: 220 },
    { n: 9, r: 55, w: 15, c: "#3f0820", o: 230 }
  ];
  for (let L = 0; L < layers.length; L++) {
    let p = layers[L];
    for (let i = 0; i < p.n; i++) {
      let a = i * 360 / p.n + L * 11 + random(-4, 4);
      let len = p.r * random(0.9, 1.05);
      brush.fill(p.c, p.o);
      brush.fillBleed(0.18, "out");
      brush.fillTexture(0.55, 0.5);
      brush.beginShape(0.3);
      brush.vertex(cx + cos(a - p.w) * len * 0.25, cy + sin(a - p.w) * len * 0.25);
      brush.vertex(cx + cos(a - p.w * 0.7) * len * 0.8, cy + sin(a - p.w * 0.7) * len * 0.8);
      brush.vertex(cx + cos(a) * len, cy + sin(a) * len);
      brush.vertex(cx + cos(a + p.w * 0.7) * len * 0.8, cy + sin(a + p.w * 0.7) * len * 0.8);
      brush.vertex(cx + cos(a + p.w) * len * 0.25, cy + sin(a + p.w) * len * 0.25);
      brush.endShape(true);
    }
  }
  brush.fill("#2a0515", 230);
  brush.fillBleed(0.1, "out");
  brush.circle(cx, cy, 22, true);
}
