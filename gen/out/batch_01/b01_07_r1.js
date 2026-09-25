async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6efe1");
  randomSeed(707);
  brush.noStroke();

  // umber ground wash low on the sheet
  brush.fill("#c7b08a", 80);
  brush.fillBleed(0.6, "out");
  brush.fillTexture(0.7, 0.3);
  brush.beginShape(0.8);
  brush.vertex(0, 380); brush.vertex(600, 330); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);

  // curving hairy stem
  brush.fill("#6f7458", 235);
  brush.fillBleed(0.1, "out");
  brush.fillTexture(0.4, 0.6);
  brush.beginShape(0.9);
  brush.vertex(330, 600); brush.vertex(310, 470); brush.vertex(330, 350); brush.vertex(355, 250); brush.vertex(363, 252); brush.vertex(340, 352); brush.vertex(320, 470); brush.vertex(342, 600);
  brush.endShape(true);

  // two jagged leaves
  let leafs = [[318, 470, -1], [322, 530, 1]];
  for (let L of leafs) {
    let x = L[0], y = L[1], d = L[2];
    brush.fill("#7c805f", 180);
    brush.fillBleed(0.3, "out");
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.3);
    brush.vertex(x, y);
    for (let k = 1; k <= 6; k++) {
      brush.vertex(x + d * k * 28, y - k * 14 - 22);
      brush.vertex(x + d * k * 28 + d * 6, y - k * 14 + 4);
    }
    brush.vertex(x + d * 190, y - 90);
    for (let k = 6; k >= 1; k--) {
      brush.vertex(x + d * k * 28 + d * 10, y - k * 12 + 24);
      brush.vertex(x + d * k * 28 - d * 4, y - k * 12 + 8);
    }
    brush.endShape(true);
  }

  // poppy bloom: four crumpled petals, cup open toward viewer, at (360, 200)
  let cx = 360, cy = 200;
  let pet = [[200, 150], [340, 150], [110, 120], [20, 125]];
  for (let P of pet) {
    let a = P[0], r = P[1];
    for (let pass = 0; pass < 3; pass++) {
      let rr = r * [1, 0.85, 0.6][pass];
      brush.fill(["#c86a52", "#a8432f", "#8a3021"][pass], [120, 190, 220][pass]);
      brush.fillBleed([0.55, 0.3, 0.15][pass], "out");
      brush.fillTexture(0.6, 0.55);
      brush.beginShape(0.85);
      brush.vertex(cx, cy);
      for (let t = -50; t <= 50; t += 20) {
        let w = rr * (0.85 + random(-0.08, 0.08));
        brush.vertex(cx + cos(a + t) * w, cy + sin(a + t) * w * 0.8);
      }
      brush.endShape(true);
    }
  }
  // dark basal blotches and seed head
  brush.fill("#2e2620", 235);
  brush.fillBleed(0.3, "out");
  brush.fillTexture(0.4, 0.6);
  brush.circle(cx, cy, 35, true);
  brush.fill("#7a7a55", 235);
  brush.fillBleed(0.05, "out");
  brush.circle(cx, cy - 3, 15, true);
  brush.fill("#1f1a16", 235);
  for (let i = 0; i < 18; i++) {
    let a = random(360), d = random(20, 34);
    brush.circle(cx + cos(a) * d, cy + sin(a) * d * 0.8, 2.5, true);
  }
}
