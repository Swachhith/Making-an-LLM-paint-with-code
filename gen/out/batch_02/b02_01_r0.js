async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef2f3");
  randomSeed(11);

  // cool sky wash behind, upper right
  brush.noStroke();
  brush.fill("#c9d8e0", 150);
  brush.fillBleed(0.35, "out");
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.6);
  brush.vertex(260, 40);
  brush.vertex(560, 70);
  brush.vertex(580, 330);
  brush.vertex(380, 400);
  brush.vertex(230, 250);
  brush.endShape(true);

  // arching stem from bottom left up to the nodding head
  brush.fill("#5f8a6e", 210);
  brush.fillBleed(0.1, "out");
  brush.fillTexture(0.3, 0.5);
  brush.beginShape(0.8);
  brush.vertex(150, 590);
  brush.vertex(190, 420);
  brush.vertex(250, 290);
  brush.vertex(330, 215);
  brush.vertex(338, 225);
  brush.vertex(262, 298);
  brush.vertex(204, 425);
  brush.vertex(166, 590);
  brush.endShape(true);

  // narrow lance leaves along the stem
  let leaves = [[182, 470, -60], [214, 380, -120], [232, 330, -45], [196, 520, -130]];
  for (let L of leaves) {
    let len = 95;
    let a = L[2];
    brush.fill("#6f9a86", 190);
    brush.fillBleed(0.15, "out");
    brush.beginShape(0.9);
    brush.vertex(L[0], L[1]);
    brush.vertex(L[0] + cos(a - 8) * len * 0.5, L[1] + sin(a - 8) * len * 0.5);
    brush.vertex(L[0] + cos(a) * len, L[1] + sin(a) * len);
    brush.vertex(L[0] + cos(a + 8) * len * 0.5, L[1] + sin(a + 8) * len * 0.5);
    brush.endShape(true);
  }

  // recurved petals: the lily hangs from (340, 225), flaring back upward
  let hx = 350, hy = 250;
  let petals = [-150, -110, -70, -30, 10, 200];
  for (let i = 0; i < petals.length; i++) {
    let a = petals[i];
    let r = 150;
    let tipx = hx + cos(a) * r;
    let tipy = hy + sin(a) * r * 0.75;
    let curl = a + 90;
    // broad loose pass
    brush.fill("#f39a55", 170);
    brush.fillBleed(0.3, "out");
    brush.fillTexture(0.55, 0.5);
    brush.beginShape(0.7);
    brush.vertex(hx, hy + 30);
    brush.vertex(hx + cos(a - 25) * r * 0.55, hy + sin(a - 25) * r * 0.5);
    brush.vertex(tipx, tipy);
    brush.vertex(tipx + cos(curl) * 28, tipy + sin(curl) * 28 + 20);
    brush.vertex(hx + cos(a + 22) * r * 0.5, hy + sin(a + 22) * r * 0.45);
    brush.endShape(true);
    // tighter, stronger pass
    brush.fill("#e2692b", 205);
    brush.fillBleed(0.12, "out");
    brush.fillTexture(0.4, 0.7);
    brush.beginShape(0.7);
    brush.vertex(hx, hy + 25);
    brush.vertex(hx + cos(a - 12) * r * 0.5, hy + sin(a - 12) * r * 0.42);
    brush.vertex(hx + cos(a) * r * 0.85, hy + sin(a) * r * 0.64);
    brush.vertex(hx + cos(a + 12) * r * 0.45, hy + sin(a + 12) * r * 0.4);
    brush.endShape(true);
    // spots near the throat
    for (let k = 0; k < 6; k++) {
      let t = random(0.25, 0.65);
      let px = hx + cos(a + random(-10, 10)) * r * t;
      let py = hy + sin(a + random(-10, 10)) * r * t * 0.75;
      brush.fill("#4a2a36", 220);
      brush.fillBleed(0.05, "out");
      brush.circle(px, py, random(2.5, 5), true);
    }
  }

  // cool shadow where petals meet
  brush.fill("#8a7fa3", 150);
  brush.fillBleed(0.25, "out");
  brush.circle(hx, hy + 20, 22, true);

  // dangling stamens
  for (let s = 0; s < 6; s++) {
    let ex = hx - 50 + s * 22 + random(-6, 6);
    let ey = hy + 150 + random(-20, 25);
    brush.fill("#8fb09a", 200);
    brush.fillBleed(0.02, "out");
    brush.beginShape(0.5);
    brush.vertex(hx - 3, hy + 30);
    brush.vertex(ex, ey);
    brush.vertex(ex + 3, ey);
    brush.vertex(hx + 3, hy + 30);
    brush.endShape(true);
    brush.fill("#7a3322", 230);
    brush.fillBleed(0.08, "out");
    brush.circle(ex + 1, ey + 5, 6, true);
  }
}
