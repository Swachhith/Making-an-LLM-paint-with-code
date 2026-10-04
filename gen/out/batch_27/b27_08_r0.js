async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2f5f6");
  randomSeed(808);
  brush.noStroke();
  // cool pale wash, light blue-green, soft
  brush.fill("#a9c7cf", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 250);
  brush.vertex(300, 220);
  brush.vertex(620, 280);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#c7d8e3", 140);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(160, 140, 140, 0.8);
  let cx = 420, cy = 390;
  // stem going down
  brush.fill("#5f8a6a", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(cx - 8, cy + 20);
  brush.vertex(cx + 8, cy + 20);
  brush.vertex(cx + 18, 620);
  brush.vertex(cx + 2, 620);
  brush.endShape(true);
  // a slim leaf
  brush.fill("#5f8a6a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.6);
  brush.vertex(cx + 10, 540);
  brush.vertex(cx - 40, 490);
  brush.vertex(cx - 90, 480);
  brush.vertex(cx - 50, 520);
  brush.endShape(true);
  // petals: 13 long slightly drooping golden rays, two passes
  let n = 13;
  for (let pass = 0; pass < 2; pass++) {
    for (let i = 0; i < n; i++) {
      let a = i * 360 / n + (pass ? 6 : 0);
      let L = pass ? 70 : 88;
      let w = pass ? 10 : 14;
      brush.fill(pass ? "#d99a0c" : "#f2c230", pass ? 200 : 180);
      brush.fillBleed(0.25);
      brush.fillTexture(0.4, 0.4);
      brush.beginShape(0.6);
      brush.vertex(cx + cos(a - 90) * w, cy + sin(a - 90) * w);
      brush.vertex(cx + cos(a) * L * 0.6 + cos(a - 90) * w, cy + sin(a) * L * 0.6 + sin(a - 90) * w + 4);
      brush.vertex(cx + cos(a) * L, cy + sin(a) * L + 8);
      brush.vertex(cx + cos(a) * L * 0.6 + cos(a + 90) * w, cy + sin(a) * L * 0.6 + sin(a + 90) * w + 4);
      brush.vertex(cx + cos(a + 90) * w, cy + sin(a + 90) * w);
      brush.endShape(true);
    }
  }
  // dark cone
  brush.fill("#3a2a1e", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.circle(cx, cy, 22, 0.5);
  brush.fill("#1f1812", 220);
  brush.circle(cx - 3, cy - 3, 12, 0.5);
  // cool shadow under petals
  brush.fill("#6f8fa6", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.circle(cx + 15, cy + 40, 30, 0.7);
}
