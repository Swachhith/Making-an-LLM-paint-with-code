async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf6ea");
  randomSeed(222);
  brush.noStroke();
  // hot yellow ground to set off the blue
  brush.fill("#e8c42a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#8fb82a", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(-20, 380); brush.vertex(620, 460); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // stem
  brush.fill("#3d6a1e", 220);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(300, 330); brush.vertex(325, 330); brush.vertex(370, 620); brush.vertex(335, 620);
  brush.endShape(true);
  let cx = 290, cy = 270;
  // florets as trumpets with toothed rims, two passes
  let n = 12;
  for (let pass = 0; pass < 3; pass++) {
    for (let i = 0; i < n; i++) {
      let a = i * 360 / n + pass * 15 + random(-6, 6);
      let r2 = [270, 235, 190][pass] + random(-15, 15);
      let r1 = 60;
      let col = ["#3a6fe8", "#2248c9", "#132f9e"][pass];
      brush.fill(col, [200, 215, 225][pass]);
      brush.fillBleed([0.3, 0.25, 0.2][pass]);
      brush.fillTexture(0.5, 0.4);
      brush.beginShape(0.1);
      brush.vertex(cx + cos(a - 5) * r1, cy + sin(a - 5) * r1);
      brush.vertex(cx + cos(a - 14) * r2 * 0.92, cy + sin(a - 14) * r2 * 0.92);
      for (let k = -2; k <= 2; k++) {
        let rr = r2 * (k % 2 == 0 ? 1.0 : 0.9);
        brush.vertex(cx + cos(a + k * 6) * rr, cy + sin(a + k * 6) * rr);
      }
      brush.vertex(cx + cos(a + 14) * r2 * 0.92, cy + sin(a + 14) * r2 * 0.92);
      brush.vertex(cx + cos(a + 5) * r1, cy + sin(a + 5) * r1);
      brush.endShape(true);
    }
  }
  // magenta-violet centre
  brush.fill("#7a2ab8", 225);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(cx, cy, 80, 0.6);
  brush.fill("#3a0f7e", 235);
  brush.fillBleed(0.2);
  brush.circle(cx, cy, 45, 0.5);
  for (let i = 0; i < 22; i++) {
    let a = random(360), r = random(15, 75);
    brush.fill(random(["#12053a", "#c8204a"]), 230);
    brush.fillBleed(0.1);
    brush.circle(cx + cos(a) * r, cy + sin(a) * r, 4 + random(5), 0.3);
  }
}
