async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e9e3d4");
  randomSeed(26022);
  brush.noStroke();

  // dark earthy surround so the muted plum glows
  brush.fill("#6e6a44", 185);
  brush.fillBleed(0.3);
  brush.fillTexture(0.55, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#4a3e2a", 175);
  brush.beginShape(0.7);
  brush.vertex(-20, 360); brush.vertex(160, 430); brush.vertex(260, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(620, -20); brush.vertex(400, -20); brush.vertex(520, 150); brush.vertex(620, 200);
  brush.endShape(true);
  // a dark leaf poking in at the lower right
  brush.fill("#3a4a2a", 205);
  brush.beginShape(0.6);
  brush.vertex(620, 420); brush.vertex(470, 520); brush.vertex(400, 620); brush.vertex(620, 620);
  brush.endShape(true);

  // five sepals, three washes each: dusty rose, mauve-plum, deep plum at the base
  let cx = 300, cy = 300;
  let order = [1, 3, 0, 2, 4];
  for (let j of order) {
    let a = -90 + j * 72 + random(-4, 4);
    let r = 265 + random(-10, 10);
    for (let pass = 0; pass < 3; pass++) {
      let k = 1 - pass * 0.25;
      let spread = 38 - pass * 8;
      brush.fill(["#a87888", "#7e4460", "#4e1c34"][pass], [200, 195, 205][pass]);
      brush.fillBleed(0.28);
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(0.9);
      brush.vertex(cx + cos(a) * 18, cy + sin(a) * 18);
      brush.vertex(cx + cos(a - spread) * r * 0.55 * k, cy + sin(a - spread) * r * 0.55 * k);
      brush.vertex(cx + cos(a - spread * 0.6) * r * 0.9 * k, cy + sin(a - spread * 0.6) * r * 0.9 * k);
      brush.vertex(cx + cos(a) * r * k, cy + sin(a) * r * k);
      brush.vertex(cx + cos(a + spread * 0.6) * r * 0.9 * k, cy + sin(a + spread * 0.6) * r * 0.9 * k);
      brush.vertex(cx + cos(a + spread) * r * 0.55 * k, cy + sin(a + spread) * r * 0.55 * k);
      brush.endShape(true);
    }
    brush.fill("#2e0e1e", 210);
    for (let k = 0; k < 10; k++) {
      let rr = random(60, r * 0.7), aa = a + random(-22, 22);
      brush.circle(cx + cos(aa) * rr, cy + sin(aa) * rr, random(2, 4), true);
    }
  }

  brush.fill("#5e6a2a", 220);
  brush.fillBleed(0.25);
  brush.circle(cx, cy, 58, true);
  brush.fill("#a09a48", 225);
  brush.circle(cx, cy, 36, true);
  brush.fill("#e0cf8a", 240);
  for (let k = 0; k < 32; k++) {
    let a = random(360), rr = random(20, 56);
    brush.circle(cx + cos(a) * rr, cy + sin(a) * rr, 4, true);
  }
}
