async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf8f2");
  brush.noStroke();
  randomSeed(33);

  // two sage leaves tucked behind, top-left and bottom-right
  brush.fill("#9fb58e", 190);
  brush.fillBleed(0.4, "out");
  brush.fillTexture(0.5, 0.6);
  brush.beginShape(0.8);
  brush.vertex(150, 170);
  brush.vertex(40, 60);
  brush.vertex(20, 150);
  brush.vertex(90, 210);
  brush.endShape(true);
  brush.fill("#8aa67c", 190);
  brush.beginShape(0.8);
  brush.vertex(450, 440);
  brush.vertex(575, 520);
  brush.vertex(585, 580);
  brush.vertex(500, 560);
  brush.endShape(true);

  // outer guard petals: broad, pale, loose
  for (let a = 0; a < 360; a += 60) {
    const cx = 300 + cos(a + 15) * 150;
    const cy = 305 + sin(a + 15) * 140;
    brush.fill("#f6c3a0", 170);
    brush.fillBleed(0.5, "out");
    brush.fillTexture(0.5, 0.7);
    brush.circle(cx, cy, 120, true);
  }

  // middle ring of cupped petals as arcs
  for (let a = 20; a < 380; a += 72) {
    brush.fill("#f2b18a", 180);
    brush.fillBleed(0.35, "out");
    brush.fillTexture(0.4, 0.6);
    brush.beginShape(0.9);
    for (let t = -40; t <= 40; t += 20) {
      brush.vertex(300 + cos(a + t) * 170, 300 + sin(a + t) * 160);
    }
    brush.vertex(300 + cos(a) * 80, 300 + sin(a) * 75);
    brush.endShape(true);
  }

  // inner spiral of tighter petals
  for (let i = 0; i < 9; i++) {
    const a = i * 137;
    const r = 110 - i * 10;
    brush.fill(i % 2 ? "#e99a70" : "#efa982", 190 + i * 4);
    brush.fillBleed(0.25, "in");
    brush.beginShape(0.9);
    brush.vertex(300 + cos(a - 50) * r, 298 + sin(a - 50) * r);
    brush.vertex(300 + cos(a) * (r + 12), 298 + sin(a) * (r + 12));
    brush.vertex(300 + cos(a + 50) * r, 298 + sin(a + 50) * r);
    brush.vertex(300 + cos(a) * r * 0.3, 298 + sin(a) * r * 0.3);
    brush.endShape(true);
  }

  // cool lilac shadows where petals fold
  brush.fill("#c9a3b8", 170);
  brush.fillBleed(0.3, "out");
  brush.circle(240, 360, 28, true);
  brush.circle(365, 250, 24, true);
  brush.circle(330, 380, 20, true);

  // heart
  brush.fill("#d9795a", 220);
  brush.fillBleed(0.2, "out");
  brush.circle(298, 296, 20, true);
  brush.fill("#c96549", 200);
  brush.circle(292, 290, 9, true);
}
