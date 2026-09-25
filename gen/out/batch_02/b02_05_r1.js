async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f5e9d4");

  // warm amber shadow ground so the white petals stand out
  brush.noStroke();
  brush.fill("#d9a86a", 190);
  brush.fillBleed(0.5, "out");
  brush.fillTexture(0.6, 0.3);
  brush.beginShape(0.9);
  brush.vertex(0, 0);
  brush.vertex(600, 0);
  brush.vertex(600, 600);
  brush.vertex(0, 600);
  brush.endShape(true);

  // six huge petals crossing the edges, close up
  let cx = 290, cy = 320;
  let angs = [-95, -35, 25, 85, 145, 205];
  for (let i = 0; i < 6; i++) {
    let a = angs[i];
    let r = i % 2 == 0 ? 330 : 290;
    // warm grey-peach shadow body
    brush.fill("#e9cfb2", 225);
    brush.fillBleed(0.2, "out");
    brush.fillTexture(0.45, 0.7);
    brush.beginShape(0.9);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 20) * r * 0.5, cy + sin(a - 20) * r * 0.5);
    brush.vertex(cx + cos(a - 8) * r * 0.9, cy + sin(a - 8) * r * 0.9);
    brush.vertex(cx + cos(a + 2) * r, cy + sin(a + 2) * r);
    brush.vertex(cx + cos(a + 14) * r * 0.65, cy + sin(a + 14) * r * 0.65);
    brush.endShape(true);
    // lit half: cream, nearly opaque
    brush.fill("#fcf5e8", 235);
    brush.fillBleed(0.08, "out");
    brush.fillTexture(0.2, 0.4);
    brush.beginShape(0.9);
    brush.vertex(cx + cos(a) * 30, cy + sin(a) * 30);
    brush.vertex(cx + cos(a - 14) * r * 0.5, cy + sin(a - 14) * r * 0.5);
    brush.vertex(cx + cos(a - 5) * r * 0.85, cy + sin(a - 5) * r * 0.85);
    brush.vertex(cx + cos(a + 1) * r * 0.55, cy + sin(a + 1) * r * 0.55);
    brush.endShape(true);
    // ochre shadow on the far edge
    brush.fill("#d7ad82", 185);
    brush.fillBleed(0.12, "out");
    brush.beginShape(0.8);
    brush.vertex(cx + cos(a + 6) * 50, cy + sin(a + 6) * 50);
    brush.vertex(cx + cos(a + 12) * r * 0.6, cy + sin(a + 12) * r * 0.6);
    brush.vertex(cx + cos(a + 4) * r * 0.85, cy + sin(a + 4) * r * 0.85);
    brush.endShape(true);
    // raised papillae dots near the throat
    for (let k = 0; k < 4; k++) {
      let t = 0.15 + k * 0.06;
      brush.fill("#c7784a", 200);
      brush.fillBleed(0.04, "out");
      brush.circle(cx + cos(a - 4 + k * 3) * r * t, cy + sin(a - 4 + k * 3) * r * t, 3, true);
    }
  }

  // green-gold throat pooling
  brush.fill("#b9be6a", 215);
  brush.fillBleed(0.35, "out");
  brush.circle(cx, cy, 60, true);
  brush.fill("#7f8f45", 205);
  brush.fillBleed(0.12, "out");
  brush.circle(cx, cy, 24, true);

  // stamens and pistil arcing forward
  for (let i = 0; i < 7; i++) {
    let a = -80 + i * 22;
    let len = i == 3 ? 190 : 150 + (i % 3) * 14;
    let ex = cx + cos(a) * len, ey = cy + sin(a) * len;
    brush.fill("#c9c07e", 225);
    brush.fillBleed(0.02, "out");
    brush.beginShape(0.4);
    brush.vertex(cx - 2, cy);
    brush.vertex(ex, ey);
    brush.vertex(ex + 4, ey + 2);
    brush.vertex(cx + 2, cy);
    brush.endShape(true);
    brush.fill(i == 3 ? "#8a9a4c" : "#9a3d15", 235);
    brush.fillBleed(0.1, "out");
    brush.beginShape(0.8);
    brush.vertex(ex - 12, ey - 3);
    brush.vertex(ex + 12, ey - 3);
    brush.vertex(ex + 12, ey + 5);
    brush.vertex(ex - 12, ey + 5);
    brush.endShape(true);
  }
}
