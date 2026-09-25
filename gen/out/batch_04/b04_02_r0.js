async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ece3d2");
  randomSeed(7);
  brush.noStroke();

  // umber ground wash, lower left only
  brush.fill("#b59a78", 140);
  brush.fillBleed(0.4);
  brush.fillTexture(0.6, 0.5);
  brush.beginShape(1);
  brush.vertex(0, 360); brush.vertex(260, 420); brush.vertex(330, 600); brush.vertex(0, 600);
  brush.endShape(true);

  // stem, olive
  brush.fill("#5d6338", 215);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.5);
  brush.vertex(262, 300); brush.vertex(274, 300); brush.vertex(300, 590); brush.vertex(286, 592);
  brush.endShape(true);

  // two leaves
  brush.fill("#6f7545", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.9);
  brush.vertex(284, 470); brush.vertex(360, 420); brush.vertex(450, 430); brush.vertex(380, 480);
  brush.endShape(true);
  brush.fill("#4a5030", 180);
  brush.beginShape(0.9);
  brush.vertex(290, 470); brush.vertex(370, 440); brush.vertex(420, 440);
  brush.endShape(true);
  brush.fill("#737b4a", 195);
  brush.fillBleed(0.3);
  brush.beginShape(0.9);
  brush.vertex(280, 520); brush.vertex(210, 470); brush.vertex(130, 480); brush.vertex(200, 530);
  brush.endShape(true);

  // dahlia: rings of pointed petals, outer loose and pale, inner tight and dark
  const cx = 270, cy = 240;
  const rings = [
    [150, 16, "#8a3a4a", 170, 0.35],
    [118, 14, "#742738", 200, 0.25],
    [86, 12, "#5e1a2b", 215, 0.18],
    [56, 10, "#4a1220", 225, 0.12],
  ];
  for (let r = 0; r < rings.length; r++) {
    const [len, n, col, op, bl] = rings[r];
    const off = r * 11;
    for (let i = 0; i < n; i++) {
      const a = off + i * 360 / n + random(-5, 5);
      const w = 180 / n + 4;
      const l = len * random(0.9, 1.05);
      brush.fill(col, op + random(-15, 10));
      brush.fillBleed(bl);
      brush.fillTexture(0.4, 0.5);
      brush.beginShape(0.6);
      brush.vertex(cx + cos(a - w) * l * 0.25, cy + sin(a - w) * l * 0.25);
      brush.vertex(cx + cos(a - w * 0.6) * l * 0.8, cy + sin(a - w * 0.6) * l * 0.8);
      brush.vertex(cx + cos(a) * l, cy + sin(a) * l);
      brush.vertex(cx + cos(a + w * 0.6) * l * 0.8, cy + sin(a + w * 0.6) * l * 0.8);
      brush.vertex(cx + cos(a + w) * l * 0.25, cy + sin(a + w) * l * 0.25);
      brush.endShape(true);
    }
  }
  // cupped centre
  brush.fill("#2e0a14", 225);
  brush.fillBleed(0.15);
  brush.circle(cx, cy, 26, 0.5);
  brush.fill("#a8733a", 190);
  brush.fillBleed(0.05);
  brush.circle(cx - 4, cy - 3, 9, 0.6);
}
