async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3f4f7");
  randomSeed(101);
  brush.noStroke();

  // cool light: pale blue-green ground washes behind the flower
  brush.fill("#a9b9c9", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 300); brush.vertex(300, 470); brush.vertex(-20, 300);
  brush.endShape(true);
  brush.fill("#b7c8d8", 150);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(300, 300); brush.vertex(620, 200); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // cool shadow on the lower right
  brush.fill("#9aa8b8", 190);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(420, 460); brush.vertex(620, 460); brush.vertex(620, 620); brush.vertex(420, 620);
  brush.endShape(true);

  // dahlia: many overlapping petals, rings of 7-9 each, loose and cupped
  const rings = [[200, 7], [150, 9], [105, 11], [70, 13], [40, 15]];
  const cx = 300, cy = 300;
  for (const [R, n] of rings) {
    for (let i = 0; i < n; i++) {
      const a = i * 360 / n + random(-4, 4);
      const len = random(0.85, 1.05) * R;
      const w = random(14, 24);
      brush.fill(random(["#8a2a50", "#7a2244", "#6a1c3a"]), random(190, 235));
      brush.fillBleed(0.25);
      brush.fillTexture(0.4, 0.4);
      brush.beginShape(0.6);
      brush.vertex(cx + cos(a - 18) * len * 0.45, cy + sin(a - 18) * len * 0.45);
      brush.vertex(cx + cos(a - 100) * len, cy + sin(a - 100) * len);
      brush.vertex(cx + cos(a + 100) * len, cy + sin(a + 100) * len);
      brush.vertex(cx + cos(a + 18) * len * 0.45, cy + sin(a + 18) * len * 0.45);
      brush.endShape(true);
    }
  }
  // darker heart
  brush.fill("#4a122a", 220);
  brush.fillBleed(0.2);
  brush.circle(cx, cy, 42, 0.3);
  brush.fill("#2a0a18", 220);
  brush.circle(cx - 4, cy - 4, 26, 0.3);
}
