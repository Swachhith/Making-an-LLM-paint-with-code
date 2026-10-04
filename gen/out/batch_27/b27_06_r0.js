async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3f0f2");
  randomSeed(66);
  brush.noStroke();
  let cx = 200, cy = 220;
  // splashy bloom of pink and violet bleeding outward
  brush.fill("#c86a8a", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.6);
  brush.circle(cx + 20, cy + 10, 150, 1);
  brush.fill("#7c5a9e", 130);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.6);
  brush.circle(cx - 60, cy + 70, 80, 1);
  // dahlia: concentric rings of cupped petals
  let rings = [[120, 16, "#8e1c3a"], [95, 14, "#7a1632"], [70, 12, "#6b0f2a"], [45, 10, "#55091f"], [22, 7, "#3f0616"]];
  for (let rg of rings) {
    let R = rg[0], n = rg[1];
    let off = random(360);
    for (let i = 0; i < n; i++) {
      let a = off + i * 360 / n;
      brush.fill(rg[2], random(185, 230));
      brush.fillBleed(0.3);
      brush.fillTexture(0.5, 0.4);
      brush.beginShape(0.6);
      brush.vertex(cx + cos(a - 12) * R * 0.35, cy + sin(a - 12) * R * 0.35);
      brush.vertex(cx + cos(a - 10) * R * 0.9, cy + sin(a - 10) * R * 0.9);
      brush.vertex(cx + cos(a) * R, cy + sin(a) * R);
      brush.vertex(cx + cos(a + 10) * R * 0.9, cy + sin(a + 10) * R * 0.9);
      brush.vertex(cx + cos(a + 12) * R * 0.35, cy + sin(a + 12) * R * 0.35);
      brush.endShape(true);
    }
  }
  // stem dropping down, with drip continuing
  brush.fill("#4a6a3a", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(cx + 10, cy + 110);
  brush.vertex(cx + 28, cy + 110);
  brush.vertex(cx + 40, 480);
  brush.vertex(cx + 24, 480);
  brush.endShape(true);
  brush.fill("#4a6a3a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(cx + 30, 380);
  brush.vertex(cx + 90, 340);
  brush.vertex(cx + 130, 360);
  brush.vertex(cx + 80, 400);
  brush.endShape(true);
  // drips from the bloom
  for (let i = 0; i < 6; i++) {
    let dx = cx + random(-100, 100);
    let dy = cy + random(80, 120);
    let len = random(60, 200);
    brush.fill(random(["#8e1c3a", "#7c5a9e"]), 180);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.2);
    brush.vertex(dx - 7, dy);
    brush.vertex(dx + 7, dy);
    brush.vertex(dx + 5, dy + len);
    brush.vertex(dx - 5, dy + len);
    brush.endShape(true);
    brush.circle(dx, dy + len + 3, 8, 0.4);
  }
  // splatter
  for (let i = 0; i < 40; i++) {
    brush.fill(random(["#8e1c3a", "#c86a8a", "#7c5a9e"]), 210);
    brush.circle(cx + random(-200, 380), cy + random(-180, 360), random(2, 7), 0.5);
  }
}
