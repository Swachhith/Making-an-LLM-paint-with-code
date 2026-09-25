async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f8ecd8");
  randomSeed(66);
  brush.noStroke();

  // warm ochre glow behind the head
  brush.fill("#e9c98f", 150);
  brush.fillBleed(0.5);
  brush.fillTexture(0.6, 0.5);
  brush.circle(300, 300, 290, 0.5);

  // big mophead: a dome built from loose blue washes first
  brush.fill("#8fa9d8", 160);
  brush.fillBleed(0.45);
  brush.fillTexture(0.5, 0.6);
  brush.circle(300, 310, 240, 0.35);
  brush.fill("#6d86c9", 150);
  brush.fillBleed(0.4);
  brush.circle(340, 360, 170, 0.4);
  brush.fill("#a9b8e2", 140);
  brush.circle(250, 240, 140, 0.4);

  // then many four-petalled florets scattered over the dome
  for (let i = 0; i < 70; i++) {
    const r = 230 * sqrt(random());
    const t = random(360);
    const x = 300 + cos(t) * r;
    const y = 310 + sin(t) * r * 0.92;
    const s = random(14, 24);
    const rot = random(90);
    const deep = y > 330 ? 1 : 0;
    const col = random() < 0.2 ? "#8c78c4" : (deep ? "#3f5fb0" : "#5f82cf");
    for (let p = 0; p < 4; p++) {
      const a = rot + p * 90;
      brush.fill(col, random(165, 215));
      brush.fillBleed(0.15);
      brush.fillTexture(0.3, 0.4);
      brush.beginShape(0.9);
      brush.vertex(x, y);
      brush.vertex(x + cos(a - 30) * s, y + sin(a - 30) * s);
      brush.vertex(x + cos(a) * s * 1.2, y + sin(a) * s * 1.2);
      brush.vertex(x + cos(a + 30) * s, y + sin(a + 30) * s);
      brush.endShape(true);
    }
    brush.fill("#f0e2b8", 200);
    brush.fillBleed(0.02);
    brush.circle(x, y, 2.5, 0.2);
  }
  // shadow underneath the dome
  brush.fill("#2b3f80", 150);
  brush.fillBleed(0.4);
  brush.beginShape(1);
  brush.vertex(110, 420); brush.vertex(300, 520); brush.vertex(500, 430); brush.vertex(470, 500); brush.vertex(300, 560); brush.vertex(140, 490);
  brush.endShape(true);
}
