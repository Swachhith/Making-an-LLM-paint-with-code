async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2f5f8");
  randomSeed(4);
  brush.noStroke();
  brush.fill("#d7e2ee", 160);
  brush.fillBleed(0.5, "out");
  brush.fillTexture(0.5, 0.2);
  brush.circle(180, 160, 170, true);
  brush.circle(460, 470, 150, true);
  let cx = 305, cy = 295;
  for (let i = 0; i < 5; i++) {
    let a = -90 + i * 72 + random(-5, 5);
    for (let pass = 0; pass < 2; pass++) {
      let s = pass == 0 ? 1 : 0.72;
      brush.fill(pass == 0 ? "#f6d6df" : "#eeb6c6", pass == 0 ? 175 : 150);
      brush.fillBleed(pass == 0 ? 0.35 : 0.2, "out");
      brush.fillTexture(0.45, 0.45);
      brush.beginShape(0.8);
      let pts = [[0, 0], [-40, 60], [-75, 150], [-55, 235], [-15, 250], [0, 228], [15, 250], [55, 235], [75, 150], [40, 60]];
      for (let p of pts) {
        let x = p[0] * s, y = p[1] * s;
        brush.vertex(cx + x * cos(a + 90) - y * sin(a + 90), cy + x * sin(a + 90) + y * cos(a + 90));
      }
      brush.endShape(true);
    }
  }
  brush.fill("#d9819c", 190);
  brush.fillBleed(0.2, "out");
  brush.circle(cx, cy, 38, true);
  // stamens
  for (let i = 0; i < 22; i++) {
    let a = random(360), r = random(45, 90);
    brush.fill("#c9567a", 170);
    brush.fillBleed(0.02, "out");
    brush.beginShape(0.1);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a) * r, cy + sin(a) * r);
    brush.vertex(cx + cos(a + 3) * r, cy + sin(a + 3) * r);
    brush.endShape(true);
    brush.fill("#e0b64d", 220);
    brush.circle(cx + cos(a) * r, cy + sin(a) * r, 5, true);
  }
}
