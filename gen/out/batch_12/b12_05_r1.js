async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcf3e4");
  randomSeed(505);
  brush.noStroke();
  const H = 330;
  // warm light sky, glowing yellow toward horizon
  brush.fill("#f7d8a0", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, H); brush.vertex(-20, H);
  brush.endShape(true);
  brush.fill("#f2b97e", 150);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 90); brush.vertex(-20, 130);
  brush.endShape(true);
  // tall jagged buttes: separate silhouettes with sheer cliffs and broken caprock
  let buttes = [
    { c: "#e0a070", a: 180, p: [[-20, H], [-20, 190], [30, 186], [40, 170], [110, 168], [118, 182], [150, 230], [170, H]] },
    { c: "#d4834e", a: 200, p: [[130, H], [175, 250], [190, 150], [205, 138], [300, 136], [308, 150], [322, 210], [350, 260], [380, H]] },
    { c: "#e0a070", a: 170, p: [[340, H], [370, 240], [400, 228], [410, 200], [470, 198], [480, 214], [520, 240], [540, H]] },
    { c: "#c8683a", a: 200, p: [[500, H], [530, 220], [545, 110], [560, 100], [620, 98], [620, H]] }
  ];
  function draw1(b, mirror, alpha) {
    brush.fill(b.c, alpha);
    brush.fillBleed(mirror ? 0.3 : 0.18);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.05);
    for (let q of b.p) brush.vertex(q[0] + (mirror ? random(-4, 4) : 0), mirror ? 2 * H - q[1] : q[1]);
    brush.endShape(true);
  }
  for (let b of buttes) draw1(b, false, b.a);
  // shadowed right faces for depth
  let shades = [[[118, 182], [150, 230], [170, H], [140, H]], [[308, 150], [322, 210], [350, 260], [380, H], [330, H]], [[480, 214], [520, 240], [540, H], [500, H]]];
  for (let s of shades) {
    brush.fill("#8e3f24", 190);
    brush.fillBleed(0.2);
    brush.beginShape(0.1);
    for (let q of s) brush.vertex(q[0], q[1]);
    brush.endShape(true);
  }
  // desert floor strip
  brush.fill("#c78450", 200);
  brush.fillBleed(0.2);
  brush.beginShape(0.2);
  brush.vertex(-20, H - 14); brush.vertex(620, H - 12); brush.vertex(620, H + 4); brush.vertex(-20, H + 4);
  brush.endShape(true);
  // still water: pale sky colour, then softer reflections
  brush.fill("#f5dcb0", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, H + 4); brush.vertex(620, H + 4); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  for (let b of buttes) draw1(b, true, b.a - 40);
  // darker water toward bottom
  brush.fill("#d99a66", 150);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 540); brush.vertex(620, 530); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
}
