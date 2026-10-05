async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3f5f7");
  randomSeed(1102);
  brush.noStroke();

  // cool blue-grey ground wash, uneven
  brush.fill("#a8b8d8", 140);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 350); brush.vertex(350, 560); brush.vertex(-20, 560);
  brush.endShape(true);
  brush.fill("#8aa8c8", 130);
  brush.beginShape(0.6);
  brush.vertex(200, 200); brush.vertex(420, 150); brush.vertex(620, 260); brush.vertex(500, 420); brush.vertex(260, 440);
  brush.endShape(true);

  // stem
  brush.fill("#4a6a5a", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.6);
  brush.vertex(290, 520); brush.vertex(305, 520); brush.vertex(318, 560); brush.vertex(302, 560);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(290, 560); brush.vertex(280, 620); brush.vertex(262, 620); brush.vertex(272, 560);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(310, 560); brush.vertex(322, 620); brush.vertex(340, 620); brush.vertex(330, 560);
  brush.endShape(true);

  // dahlia layers, outer to inner, overlapping
  const layers = [
    ["#7a1f3e", 210, 20], ["#6a1a38", 190, 16], ["#5a1632", 170, 12],
    ["#4a122c", 150, 8], ["#380c26", 130, 4]
  ];
  for (const L of layers) {
    const [col, op, n] = L;
    for (let k = 0; k < n; k++) {
      const r = 220 - k * 22;
      const a = k * 14 + random(-8, 8);
      brush.fill(col, op);
      brush.fillBleed(0.25);
      brush.fillTexture(0.45, 0.45);
      brush.beginShape(0.5);
      for (let i = 0; i < 13; i++) {
        const t = i * 270 / 13 + a;
        const x = cos(t) * r * 0.92, y = sin(t) * r * 0.92;
        brush.vertex(x * 0.55 + cos(t - 10) * 30, y * 0.55 + sin(t - 10) * 30);
        brush.vertex(x + cos(t) * 12, y + sin(t) * 12);
      }
      brush.endShape(true);
    }
  }
  // heart of the dahlia
  brush.fill("#2e0a1a", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.circle(300, 300, 48, 0.3);
  brush.fill("#12040a", 230);
  brush.circle(300, 300, 30, 0.3);
}
