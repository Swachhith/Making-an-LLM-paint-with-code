async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6efe1");
  randomSeed(101);
  brush.noStroke();

  // soft lilac haze behind the bloom
  brush.fill("#c9c4d8", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.circle(300, 300, 220, 0.8);

  // cupped petals, three layers, each a pastel red
  const layers = [[210, 18], [160, 14], [110, 10]];
  for (let L = 0; L < 3; L++) {
    const n = layers[L][1];
    const cx = 300, cy = 300;
    for (let i = 0; i < n; i++) {
      const a = i * 360 / n + L * 18 + random(-4, 4);
      const len = layers[L][0] * random(0.9, 1.05);
      const w = 24 * random(0.9, 1.1);
      const px = cos(a + 90) * len * 0.45, py = sin(a + 90) * len * 0.45;
      brush.fill(random(["#f2a8a8", "#f08f9a", "#e87aa8"]), 190);
      brush.fillBleed(0.25);
      brush.fillTexture(0.4, 0.5);
      brush.beginShape(0.8);
      brush.vertex(cx + cos(a) * 10, cy + sin(a) * 10);
      brush.vertex(cx + cos(a - 18) * len * 0.5 + px * 0.6, cy + sin(a - 18) * len * 0.5 + py * 0.6);
      brush.vertex(cx + cos(a - 10) * len, cy + sin(a - 10) * len);
      brush.vertex(cx + cos(a + 10) * len, cy + sin(a + 10) * len);
      brush.vertex(cx + cos(a + 18) * len * 0.5 + px * 0.6, cy + sin(a + 18) * len * 0.5 + py * 0.6);
      brush.endShape(true);
    }
  }
  // deeper crimson heart, visible between the cups
  brush.fill("#c8304a", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.9);
  brush.vertex(300, 300);
  brush.vertex(330, 260);
  brush.vertex(365, 280);
  brush.vertex(340, 315);
  brush.vertex(300, 325);
  brush.vertex(260, 315);
  brush.vertex(235, 290);
  brush.endShape(true);
  brush.fill("#b01f40", 210);
  brush.circle(300, 300, 20, 0.3);
}
