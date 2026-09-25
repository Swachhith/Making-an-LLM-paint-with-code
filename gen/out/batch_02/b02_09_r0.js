async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8e4dc");
  randomSeed(9);

  // a single vertical stem, bloom high on the right third
  brush.noStroke();
  brush.fill("#5d6147", 220);
  brush.fillBleed(0.05, "out");
  brush.fillTexture(0.4, 0.6);
  brush.beginShape(0.6);
  brush.vertex(385, 200);
  brush.vertex(372, 400);
  brush.vertex(360, 600);
  brush.vertex(370, 600);
  brush.vertex(382, 400);
  brush.vertex(395, 200);
  brush.endShape(true);

  // two deeply cut leaves drawn with many narrow fingers
  let leafBase = [[375, 380, -1], [370, 470, 1]];
  for (let L of leafBase) {
    for (let f = 0; f < 5; f++) {
      let a = (L[2] < 0 ? 200 : -20) + L[2] * (f * 18 - 20);
      let len = 70 + random(-15, 25);
      brush.fill(f % 2 ? "#707552" : "#5b6445", 200);
      brush.fillBleed(0.12, "out");
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(0.7);
      brush.vertex(L[0], L[1]);
      brush.vertex(L[0] + cos(a - 6) * len * 0.6, L[1] + sin(a - 6) * len * 0.6);
      brush.vertex(L[0] + cos(a) * len, L[1] + sin(a) * len);
      brush.vertex(L[0] + cos(a + 6) * len * 0.6, L[1] + sin(a + 6) * len * 0.6);
      brush.endShape(true);
    }
  }

  // six slate blue petals, rounded, overlapping
  let cx = 390, cy = 190;
  for (let i = 0; i < 6; i++) {
    let a = i * 60 + 10;
    let px = cx + cos(a) * 55, py = cy + sin(a) * 55;
    brush.fill("#6f82a3", 175);
    brush.fillBleed(0.3, "out");
    brush.fillTexture(0.6, 0.5);
    brush.circle(px, py, 58, true);
    brush.fill("#50618a", 190);
    brush.fillBleed(0.1, "out");
    brush.circle(cx + cos(a) * 40, cy + sin(a) * 40, 30, true);
  }
  // pooled violet-grey between petals
  for (let i = 0; i < 6; i++) {
    let a = i * 60 + 40;
    brush.fill("#48405e", 170);
    brush.fillBleed(0.2, "out");
    brush.circle(cx + cos(a) * 60, cy + sin(a) * 60, 10, true);
  }

  // pale ring then black boss with stamen dots
  brush.fill("#d9dbe2", 190);
  brush.fillBleed(0.15, "out");
  brush.circle(cx, cy, 34, true);
  for (let i = 0; i < 36; i++) {
    let a = random(360), r = random(18, 34);
    brush.fill("#1f1d26", 215);
    brush.fillBleed(0.02, "out");
    brush.circle(cx + cos(a) * r, cy + sin(a) * r, random(2, 3.5), true);
  }
  brush.fill("#1a1822", 230);
  brush.fillBleed(0.1, "out");
  brush.circle(cx, cy, 15, true);
}
