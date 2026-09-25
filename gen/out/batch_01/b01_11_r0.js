async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6efe1");
  randomSeed(1111);
  brush.noStroke();

  // warm light: a gold wash pooled on the left half
  brush.fill("#f5cf7a", 50);
  brush.fillBleed(0.7, "out");
  brush.fillTexture(0.7, 0.3);
  brush.beginShape(1);
  brush.vertex(0, 60); brush.vertex(380, 20); brush.vertex(330, 560); brush.vertex(0, 600);
  brush.endShape(true);

  // two thin wiry stems
  brush.fill("#8a9a5a", 150);
  brush.fillBleed(0.05, "out");
  brush.fillTexture(0.3, 0.5);
  brush.beginShape(0.9);
  brush.vertex(180, 600); brush.vertex(200, 420); brush.vertex(215, 300); brush.vertex(222, 301); brush.vertex(208, 421); brush.vertex(189, 600);
  brush.endShape(true);
  // bud stem with a hooked neck
  brush.beginShape(0.9);
  brush.vertex(330, 600); brush.vertex(380, 400); brush.vertex(430, 250); brush.vertex(470, 240); brush.vertex(490, 280);
  brush.vertex(483, 283); brush.vertex(466, 250); brush.vertex(437, 256); brush.vertex(388, 402); brush.vertex(340, 600);
  brush.endShape(true);

  // open poppy, facing, many small tissue strokes
  let cx = 215, cy = 250;
  for (let i = 0; i < 40; i++) {
    let a = random(360);
    let r = random(60, 140);
    let w = random(18, 34);
    brush.fill(random(["#f7a24a", "#f08a2c", "#e9731f", "#fbb867"]), random(40, 90));
    brush.fillBleed(random(0.15, 0.4), "out");
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.9);
    brush.vertex(cx + cos(a) * 20, cy + sin(a) * 20);
    brush.vertex(cx + cos(a - w) * r * 0.8, cy + sin(a - w) * r * 0.8);
    brush.vertex(cx + cos(a) * r, cy + sin(a) * r);
    brush.vertex(cx + cos(a + w) * r * 0.8, cy + sin(a + w) * r * 0.8);
    brush.endShape(true);
  }
  brush.fill("#d4a02a", 140);
  brush.fillBleed(0.3, "out");
  brush.circle(cx, cy, 50, true);
  brush.fill("#6f7a3a", 170);
  brush.fillBleed(0.05, "out");
  brush.circle(cx, cy, 24, true);
  brush.fill("#3a3020", 170);
  for (let i = 0; i < 20; i++) {
    let a = random(360);
    brush.circle(cx + cos(a) * random(16, 28), cy + sin(a) * random(16, 28), 4, true);
  }

  // nodding hairy bud hanging from the hook
  for (let pass = 0; pass < 3; pass++) {
    let s = [1, 0.78, 0.5][pass];
    brush.fill(["#a7b27a", "#8c9a5c", "#e9731f"][pass], [80, 110, 120][pass]);
    brush.fillBleed([0.35, 0.2, 0.1][pass], "out");
    brush.fillTexture(0.5, 0.6);
    brush.beginShape(1);
    brush.vertex(487, 282); brush.vertex(487 - 26 * s, 310); brush.vertex(485, 282 + 72 * s); brush.vertex(487 + 26 * s, 310);
    brush.endShape(true);
  }
}
