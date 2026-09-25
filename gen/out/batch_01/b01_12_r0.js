async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6efe1");
  randomSeed(12);
  brush.noStroke();

  // cool morning light: pale aqua wash from top right
  brush.fill("#cfe3ea", 60);
  brush.fillBleed(0.7, "out");
  brush.fillTexture(0.7, 0.3);
  brush.beginShape(1);
  brush.vertex(150, 0); brush.vertex(600, 0); brush.vertex(600, 420); brush.vertex(300, 350);
  brush.endShape(true);

  // twining vine
  brush.fill("#6f9a86", 140);
  brush.fillBleed(0.05, "out");
  brush.fillTexture(0.3, 0.5);
  brush.beginShape(1);
  let pts = [];
  for (let t = 0; t <= 10; t++) pts.push([60 + t * 48, 520 - t * 22 + sin(t * 70) * 40]);
  for (let p of pts) brush.vertex(p[0], p[1]);
  for (let i = pts.length - 1; i >= 0; i--) brush.vertex(pts[i][0], pts[i][1] + 6);
  brush.endShape(true);

  // heart leaves along the vine
  for (let k of [2, 5, 8]) {
    let x = pts[k][0], y = pts[k][1];
    brush.fill("#7fae96", 90);
    brush.fillBleed(0.3, "out");
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.9);
    brush.vertex(x, y); brush.vertex(x - 30, y + 20); brush.vertex(x - 20, y + 55); brush.vertex(x, y + 80); brush.vertex(x + 20, y + 55); brush.vertex(x + 30, y + 20);
    brush.endShape(true);
  }

  // open morning glory face, circular with a funnel throat, at (250, 230)
  let cx = 250, cy = 230;
  brush.fill("#8fb4e8", 70);
  brush.fillBleed(0.5, "out");
  brush.fillTexture(0.6, 0.4);
  brush.circle(cx, cy, 250, true);
  brush.fill("#4f7fd6", 80);
  brush.fillBleed(0.3, "out");
  brush.circle(cx, cy, 200, true);
  // five star ribs
  for (let i = 0; i < 5; i++) {
    let a = i * 72 - 90;
    brush.fill("#3b5fb8", 110);
    brush.fillBleed(0.15, "out");
    brush.beginShape(0.8);
    brush.vertex(cx + cos(a - 8) * 20, cy + sin(a - 8) * 20);
    brush.vertex(cx + cos(a) * 118, cy + sin(a) * 118);
    brush.vertex(cx + cos(a + 8) * 20, cy + sin(a + 8) * 20);
    brush.endShape(true);
  }
  // white-to-yellow throat
  brush.fill("#f4f6f2", 200);
  brush.fillBleed(0.3, "out");
  brush.circle(cx, cy, 70, true);
  brush.fill("#f0dc84", 150);
  brush.fillBleed(0.2, "out");
  brush.circle(cx, cy, 30, true);

  // furled spiral bud, at (470, 170)
  for (let pass = 0; pass < 3; pass++) {
    let s = [1, 0.8, 0.5][pass];
    brush.fill(["#9fbde8", "#6a8fd8", "#3f5fae"][pass], [70, 100, 130][pass]);
    brush.fillBleed([0.35, 0.2, 0.1][pass], "out");
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(1);
    brush.vertex(460, 250); brush.vertex(460 - 16 * s, 200); brush.vertex(470 + 4 * s, 250 - 150 * s); brush.vertex(460 + 18 * s, 205);
    brush.endShape(true);
  }
  brush.fill("#6f9a86", 150);
  brush.fillBleed(0.1, "out");
  brush.beginShape(0.8);
  brush.vertex(446, 262); brush.vertex(460, 225); brush.vertex(476, 262); brush.vertex(460, 272);
  brush.endShape(true);
}
