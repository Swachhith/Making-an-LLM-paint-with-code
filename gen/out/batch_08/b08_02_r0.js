async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf8f2");
  randomSeed(22);
  brush.noStroke();
  // warm yellow-green ground wash so blue sings
  brush.fill("#d9d27a", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // stem out bottom
  brush.fill("#4d7a2a", 210);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(290, 330); brush.vertex(318, 330); brush.vertex(345, 620); brush.vertex(310, 620);
  brush.endShape(true);
  let cx = 300, cy = 280;
  // ragged florets radiating
  let n = 13;
  for (let pass = 0; pass < 2; pass++) {
    for (let i = 0; i < n; i++) {
      let a = i * 360 / n + pass * 12 + random(-5, 5);
      let r1 = 70, r2 = (pass == 0 ? 265 : 215) + random(-20, 15);
      brush.fill(pass == 0 ? "#2f5fd8" : "#1c3fb8", pass == 0 ? 200 : 225);
      brush.fillBleed(pass == 0 ? 0.3 : 0.2);
      brush.fillTexture(0.5, 0.4);
      brush.beginShape(0.15);
      brush.vertex(cx + cos(a - 8) * r1, cy + sin(a - 8) * r1);
      brush.vertex(cx + cos(a - 16) * r2 * 0.9, cy + sin(a - 16) * r2 * 0.9);
      brush.vertex(cx + cos(a - 10) * r2, cy + sin(a - 10) * r2);
      brush.vertex(cx + cos(a - 3) * r2 * 0.88, cy + sin(a - 3) * r2 * 0.88);
      brush.vertex(cx + cos(a + 3) * r2 * 1.02, cy + sin(a + 3) * r2 * 1.02);
      brush.vertex(cx + cos(a + 9) * r2 * 0.9, cy + sin(a + 9) * r2 * 0.9);
      brush.vertex(cx + cos(a + 15) * r2 * 0.95, cy + sin(a + 15) * r2 * 0.95);
      brush.vertex(cx + cos(a + 8) * r1, cy + sin(a + 8) * r1);
      brush.endShape(true);
    }
  }
  // violet centre
  brush.fill("#5b2aa8", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(cx, cy, 85, 0.6);
  brush.fill("#2a0f6e", 230);
  brush.fillBleed(0.2);
  brush.circle(cx, cy, 45, 0.5);
  for (let i = 0; i < 16; i++) {
    let a = random(360), r = random(20, 70);
    brush.fill("#170840", 230);
    brush.fillBleed(0.1);
    brush.circle(cx + cos(a) * r, cy + sin(a) * r, 5 + random(5), 0.3);
  }
}
