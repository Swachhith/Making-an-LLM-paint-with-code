async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef2f8");
  randomSeed(2123);
  brush.noStroke();
  // cool light: a few soft blue-grey washes behind
  brush.fill("#b8c8e6", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(0, 0); brush.vertex(600, 20); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  // stem
  brush.fill("#4a7a6a", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.4);
  brush.vertex(300, 470); brush.vertex(312, 470); brush.vertex(320, 600); brush.vertex(290, 600);
  brush.endShape(true);
  // open poppy: five broad petals, cool violet
  let cx = 220, cy = 260;
  for (let i = 0; i < 5; i++) {
    let a = i * 72 + 12;
    let len = 130;
    brush.fill("#8a7fb8", 190);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.6);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 30) * len * 0.55, cy + sin(a - 30) * len * 0.55);
    brush.vertex(cx + cos(a - 10) * len, cy + sin(a - 10) * len);
    brush.vertex(cx + cos(a + 10) * len, cy + sin(a + 10) * len);
    brush.vertex(cx + cos(a + 30) * len * 0.55, cy + sin(a + 30) * len * 0.55);
    brush.endShape(true);
  }
  brush.fill("#5a4f8a", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.circle(cx, cy, 30, 0.3);
  // stamen dots
  for (let i = 0; i < 12; i++) {
    let a = i * 30 + 15;
    let r = 26 + random(12);
    brush.fill("#c88a3a", 230);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.circle(cx + cos(a) * r, cy + sin(a) * r, 4, 0.3);
  }
  // closed bud: upright, narrow, pale violet with a darker tip
  let bx = 430, by = 240;
  brush.fill("#9a8cc0", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(bx - 16, by - 20); brush.vertex(bx + 16, by - 20); brush.vertex(bx + 10, by + 10); brush.vertex(bx - 10, by + 10);
  brush.endShape(true);
  brush.fill("#6a5a9a", 220);
  brush.fillBleed(0.2);
  brush.beginShape(0.6);
  brush.vertex(bx - 8, by - 12); brush.vertex(bx + 8, by - 12); brush.vertex(bx + 2, by + 12); brush.vertex(bx - 6, by + 12);
  brush.endShape(true);
  // a few leaves
  brush.fill("#5a7a6a", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.7);
  brush.vertex(250, 500); brush.vertex(330, 420); brush.vertex(360, 450); brush.vertex(270, 530);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(440, 500); brush.vertex(360, 420); brush.vertex(330, 450); brush.vertex(420, 530);
  brush.endShape(true);
}
