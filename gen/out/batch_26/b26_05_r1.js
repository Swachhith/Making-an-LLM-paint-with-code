async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4f1ea");
  randomSeed(2655);
  brush.noStroke();

  // backdrop: teal flooded into deep green, uneven
  brush.fill("#24806a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.55, 0.55);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#0f4a3c", 180);
  brush.beginShape(0.7);
  brush.vertex(620, -20); brush.vertex(620, 260); brush.vertex(480, 140); brush.vertex(380, -20);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(-20, 360); brush.vertex(140, 470); brush.vertex(300, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // three rings of ray petals: dark back, bright middle, pale-tipped front
  let cx = 300, cy = 290;
  let rings = [["#5a1aa0", 36, 265, 12, 210], ["#9a30e0", 32, 220, 11, 210], ["#c060f0", 26, 160, 10, 200]];
  for (let g = 0; g < rings.length; g++) {
    let [col, n, R, w, al] = rings[g];
    for (let i = 0; i < n; i++) {
      let a = (360 / n) * i + g * 4 + random(-4, 4);
      let r = R + random(-25, 15);
      let px = cos(a + 90) * w, py = sin(a + 90) * w;
      brush.fill(col, al);
      brush.fillBleed(0.22);
      brush.fillTexture(0.4, 0.45);
      brush.beginShape(0.7);
      brush.vertex(cx + cos(a) * 35, cy + sin(a) * 35);
      brush.vertex(cx + cos(a) * r * 0.55 - px, cy + sin(a) * r * 0.55 - py);
      brush.vertex(cx + cos(a) * r, cy + sin(a) * r);
      brush.vertex(cx + cos(a) * r * 0.55 + px, cy + sin(a) * r * 0.55 + py);
      brush.endShape(true);
    }
  }

  // raised golden disc, shadowed on the lower right
  brush.fill("#c86a0a", 230);
  brush.fillBleed(0.25);
  brush.circle(cx + 5, cy + 5, 58, true);
  brush.fill("#f5c21e", 235);
  brush.circle(cx - 6, cy - 6, 40, true);
  brush.fill("#fae070", 220);
  brush.circle(cx - 12, cy - 12, 18, true);
  brush.fill("#8a3a06", 220);
  for (let k = 0; k < 26; k++) {
    let a = random(0, 180) - 20, rr = random(28, 54);
    brush.circle(cx + cos(a) * rr, cy + sin(a) * rr, 4, true);
  }
}
