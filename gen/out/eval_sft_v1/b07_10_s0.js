async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6efe1");
  brush.noStroke();
  // deep green stem curving upward from the lower left
  brush.fill("#1f5a2a", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(160, 540);
  brush.vertex(230, 440);
  brush.vertex(300, 320);
  brush.vertex(370, 210);
  brush.vertex(450, 130);
  brush.vertex(450, 130);
  brush.endShape(true);
  // broad leaf at the base, leaning right
  brush.fill("#1f5a2a", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.6);
  brush.vertex(230, 440);
  brush.vertex(100, 470);
  brush.vertex(150, 530);
  brush.vertex(290, 480);
  brush.vertex(240, 430);
  brush.endShape(true);
  // another leaf curling up behind the bloom
  brush.fill("#2a6a3a", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.6);
  brush.vertex(300, 320);
  brush.vertex(340, 290);
  brush.vertex(380, 330);
  brush.vertex(330, 360);
  brush.vertex(300, 320);
  brush.endShape(true);
  // the peony: a cascade of cupped petals leaning right, three layers
  let cx = 420, cy = 230;
  let petals = [
    [0, -120, 110], [0, -100, 130], [0, -80, 150], [0, -60, 160],
    [0, -40, 165], [0, -20, 160], [0, 0, 155], [0, 20, 155],
    [0, 40, 150], [0, 60, 145], [0, 80, 140], [0, 100, 135]
  ];
  for (let pass = 0; pass < 2; pass++) {
    for (let p of petals) {
      let [a, len, wid] = p;
      let L = len * (pass === 0 ? 1 : 0.9);
      let x1 = cx + cos(a) * L * 0.3, y1 = cy + sin(a) * L * 0.3;
      let x2 = cx + cos(a - 12) * L * 0.7, y2 = cy + sin(a - 12) * L * 0.7;
      let x3 = cx + cos(a - 24) * L * 0.95, y3 = cy + sin(a - 24) * L * 0.95;
      let x4 = cx + cos(a) * L, y4 = cy + sin(a) * L;
      let x5 = cx + cos(a + 24) * L * 0.95, y5 = cy + sin(a + 24) * L * 0.95;
      let x6 = cx + cos(a + 12) * L * 0.7, y6 = cy + sin(a + 12) * L * 0.7;
      let x7 = cx + cos(a + 12) * L * 0.3, y7 = cy + sin(a + 12) * L * 0.3;
      let col = pass === 0 ? "#e06a94" : "#c03a74";
      brush.fill(col, 230);
      brush.fillBleed(0.28);
      brush.fillTexture(0.45, 0.45);
      brush.beginShape(0.85);
      brush.vertex(x1, y1);
      brush.vertex(x2, y2);
      brush.vertex(x3, y3);
      brush.vertex(x4, y4);
      brush.vertex(x5, y5);
      brush.vertex(x6, y6);
      brush.vertex(x7, y7);
      brush.vertex(x1, y1);
      brush.endShape(true);
    }
  }
  // deeper shadowed underside of the petals
  for (let p of petals) {
    let [a, len, wid] = p;
    let L = len * 0.9;
    let x1 = cx + cos(a) * L * 0.3, y1 = cy + sin(a) * L * 0.3;
    let x2 = cx + cos(a - 12) * L * 0.7, y2 = cy + sin(a - 12) * L * 0.7;
    let x3 = cx + cos(a - 24) * L * 0.95, y3 = cy + sin(a - 24) * L * 0.95;
    let x4 = cx + cos(a - 36) * L * 0.95, y4 = cy + sin(a - 36) * L * 0.95;
    let x5 = cx + cos(a - 24) * L * 0.7, y5 = cy + sin(a - 24) * L * 0.7;
    let x6 = cx + cos(a - 12) * L * 0.3, y6 = cy + sin(a - 12) * L * 0.3;
    brush.fill("#8a1a54", 210);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.9);
    brush.vertex(x1, y1);
    brush.vertex(x2, y2);
    brush.vertex(x3, y3);
    brush.vertex(x4, y4);
    brush.vertex(x5, y5);
    brush.vertex(x6, y6);
    brush.vertex(x1, y1);
    brush.endShape(true);
  }
  // a few stray loose petals tumbling to the right
  brush.fill("#d04a80", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.circle(540, 150, 30, 0.6);
  brush.circle(570, 170, 22, 0.5);
  brush.circle(520, 200, 24, 0.5);
  brush.circle(480, 220, 18, 0.5);
  // a couple of bees
  brush.fill("#f2c03a", 240);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.circle(450, 260, 9, 0.2);
  brush.circle(470, 275, 9, 0.2);
  brush.fill("#1f5a2a", 220);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(450, 260);
  brush.vertex(454, 258);
  brush.vertex(458, 262);
  brush.vertex(454, 264);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(470, 275);
  brush.vertex(474, 273);
  brush.vertex(478, 277);
  brush.vertex(474, 279);
  brush.endShape(true);
  brush.fill("#1f5a2a", 220);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(454, 262);
  brush.vertex(460, 264);
  brush.vertex(462, 258);
  brush.vertex(456, 256);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(478, 277);
  brush.vertex(484, 279);
  brush.vertex(486, 273);
  brush.vertex(480, 271);
  brush.endShape(true);
}
