async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7eedc");

  // warm golden light behind the whole bloom
  brush.noStroke();
  brush.fill("#efd3a5", 160);
  brush.fillBleed(0.5, "out");
  brush.fillTexture(0.5, 0.2);
  brush.beginShape(0.9);
  brush.vertex(0, 0);
  brush.vertex(600, 0);
  brush.vertex(600, 220);
  brush.vertex(300, 300);
  brush.vertex(0, 200);
  brush.endShape(true);

  // six huge petals, close up, centre slightly below-left of middle
  let cx = 285, cy = 320;
  let angs = [-100, -40, 20, 80, 140, 200];
  for (let i = 0; i < 6; i++) {
    let a = angs[i] + (i % 2) * 6;
    let r = i % 2 == 0 ? 290 : 250;
    // warm cream shadow body
    brush.fill("#ecd6bd", 200);
    brush.fillBleed(0.25, "out");
    brush.fillTexture(0.45, 0.6);
    brush.beginShape(0.9);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 18) * r * 0.5, cy + sin(a - 18) * r * 0.5);
    brush.vertex(cx + cos(a - 6) * r * 0.9, cy + sin(a - 6) * r * 0.9);
    brush.vertex(cx + cos(a + 2) * r, cy + sin(a + 2) * r);
    brush.vertex(cx + cos(a + 14) * r * 0.6, cy + sin(a + 14) * r * 0.6);
    brush.endShape(true);
    // lit side left almost as paper
    brush.fill("#fdf8ee", 220);
    brush.fillBleed(0.1, "out");
    brush.fillTexture(0.2, 0.3);
    brush.beginShape(0.9);
    brush.vertex(cx + cos(a) * 30, cy + sin(a) * 30);
    brush.vertex(cx + cos(a - 12) * r * 0.5, cy + sin(a - 12) * r * 0.5);
    brush.vertex(cx + cos(a - 3) * r * 0.85, cy + sin(a - 3) * r * 0.85);
    brush.vertex(cx + cos(a + 2) * r * 0.5, cy + sin(a + 2) * r * 0.5);
    brush.endShape(true);
    // peach vein down the middle
    brush.fill("#e7b48c", 170);
    brush.fillBleed(0.1, "out");
    brush.beginShape(0.5);
    brush.vertex(cx + cos(a + 3) * 40, cy + sin(a + 3) * 40);
    brush.vertex(cx + cos(a + 3) * r * 0.75, cy + sin(a + 3) * r * 0.75);
    brush.vertex(cx + cos(a + 5) * r * 0.4, cy + sin(a + 5) * r * 0.4);
    brush.endShape(true);
  }

  // green-gold throat
  brush.fill("#c8c77a", 200);
  brush.fillBleed(0.35, "out");
  brush.circle(cx, cy, 55, true);
  brush.fill("#98a25a", 190);
  brush.fillBleed(0.15, "out");
  brush.circle(cx, cy, 24, true);

  // six long stamens and a pistil, rust anthers
  for (let i = 0; i < 7; i++) {
    let a = -75 + i * 20;
    let len = i == 3 ? 175 : 140 + (i % 3) * 12;
    let ex = cx + cos(a) * len, ey = cy + sin(a) * len;
    brush.fill("#d9d09a", 210);
    brush.fillBleed(0.02, "out");
    brush.beginShape(0.4);
    brush.vertex(cx - 2, cy);
    brush.vertex(ex, ey);
    brush.vertex(ex + 3, ey + 2);
    brush.vertex(cx + 2, cy);
    brush.endShape(true);
    brush.fill(i == 3 ? "#9aa35c" : "#a4481f", 230);
    brush.fillBleed(0.1, "out");
    brush.circle(ex, ey, i == 3 ? 8 : 9, true);
  }
}
