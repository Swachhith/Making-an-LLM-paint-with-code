async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f8f3e8");
  brush.noStroke();
  // faint lilac shadow pooled under the bloom
  brush.fill("#cdbfe4", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(400, 420, 170, 0.8);
  // arching stem from the top right, broad and soft
  brush.fill("#3f6e22", 225);
  brush.fillBleed(0.18);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.9);
  brush.vertex(620, 60); brush.vertex(540, 110); brush.vertex(470, 200); brush.vertex(420, 300);
  brush.vertex(440, 306); brush.vertex(490, 210); brush.vertex(556, 128); brush.vertex(620, 86);
  brush.endShape(true);
  // buds along the arch
  brush.fill("#8e1fcc", 210);
  brush.fillBleed(0.25);
  brush.circle(560, 98, 16, 0.4);
  brush.circle(505, 150, 22, 0.4);
  brush.fill("#5a0a8a", 190);
  brush.circle(508, 154, 12, 0.4);
  const cx = 400, cy = 400;
  // dorsal sepal up, two lateral sepals down
  for (const a of [-90, 125, 55]) {
    for (let pass = 0; pass < 2; pass++) {
      const L = pass ? 115 : 145;
      brush.fill(pass ? "#8a12c8" : "#b23be0", pass ? 205 : 215);
      brush.fillBleed(pass ? 0.2 : 0.3);
      brush.fillTexture(0.45, 0.5);
      brush.beginShape(0.8);
      brush.vertex(cx, cy);
      brush.vertex(cx + L * 0.4 * cos(a - 22), cy + L * 0.4 * sin(a - 22));
      brush.vertex(cx + L * cos(a), cy + L * sin(a));
      brush.vertex(cx + L * 0.4 * cos(a + 22), cy + L * 0.4 * sin(a + 22));
      brush.endShape(true);
    }
  }
  // two broad side petals, rounded
  for (const a of [-15, 195]) {
    brush.fill("#c040e8", 220);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.9);
    brush.vertex(cx, cy);
    brush.vertex(cx + 80 * cos(a - 45), cy + 80 * sin(a - 45));
    brush.vertex(cx + 150 * cos(a - 14), cy + 150 * sin(a - 14));
    brush.vertex(cx + 140 * cos(a + 18), cy + 140 * sin(a + 18));
    brush.vertex(cx + 70 * cos(a + 45), cy + 70 * sin(a + 45));
    brush.endShape(true);
    brush.fill("#7a0cb4", 200);
    brush.fillBleed(0.22);
    brush.beginShape(0.8);
    brush.vertex(cx, cy);
    brush.vertex(cx + 60 * cos(a - 20), cy + 60 * sin(a - 20));
    brush.vertex(cx + 100 * cos(a), cy + 100 * sin(a));
    brush.vertex(cx + 55 * cos(a + 22), cy + 55 * sin(a + 22));
    brush.endShape(true);
    // veins pooled as small dots
    brush.fill("#4e0578", 210);
    brush.fillBleed(0.1);
    for (let d = 30; d < 110; d += 20) brush.circle(cx + d * cos(a + 3), cy + d * sin(a + 3), 3, 0.3);
  }
  // lip: deep magenta, frilled
  for (let pass = 0; pass < 2; pass++) {
    brush.fill(pass ? "#4a0660" : "#8a0c7a", 230);
    brush.fillBleed(0.22);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.8);
    brush.vertex(cx - 30, cy + 8); brush.vertex(cx + 30, cy + 8); brush.vertex(cx + 44, cy + 60);
    brush.vertex(cx + 20, cy + 95 - pass * 15); brush.vertex(cx, cy + 85 - pass * 15); brush.vertex(cx - 20, cy + 95 - pass * 15); brush.vertex(cx - 44, cy + 60);
    brush.endShape(true);
  }
  // yellow throat
  brush.fill("#ffc61a", 240);
  brush.fillBleed(0.1);
  brush.circle(cx, cy + 6, 11, 0.4);
  brush.fill("#ffffff", 200);
  brush.circle(cx, cy - 8, 7, 0.3);
}
