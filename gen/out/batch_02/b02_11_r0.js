async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf7ec");

  // stem sweeping from bottom right up to a flower in the upper left
  brush.noStroke();
  brush.fill("#3f8a3a", 220);
  brush.fillBleed(0.06, "out");
  brush.fillTexture(0.35, 0.6);
  brush.beginShape(1);
  brush.vertex(520, 600);
  brush.vertex(420, 430);
  brush.vertex(290, 300);
  brush.vertex(210, 230);
  brush.vertex(220, 222);
  brush.vertex(300, 292);
  brush.vertex(432, 425);
  brush.vertex(535, 600);
  brush.endShape(true);

  // two jagged leaves, bold green
  let lv = [[420, 470, -20, 170], [470, 540, 200, 150]];
  for (let L of lv) {
    let x = L[0], y = L[1], a = L[2], len = L[3];
    brush.fill("#4ea33e", 205);
    brush.fillBleed(0.2, "out");
    brush.fillTexture(0.5, 0.6);
    brush.beginShape(0.3);
    brush.vertex(x, y);
    for (let t = 1; t <= 4; t++) {
      let d = len * t / 4;
      let w = 34 * (1 - t / 5);
      brush.vertex(x + cos(a) * d + cos(a - 90) * w, y + sin(a) * d + sin(a - 90) * w);
    }
    brush.vertex(x + cos(a) * len * 1.1, y + sin(a) * len * 1.1);
    for (let t = 4; t >= 1; t--) {
      let d = len * t / 4 - 15;
      let w = 30 * (1 - t / 5);
      brush.vertex(x + cos(a) * d + cos(a + 90) * w, y + sin(a) * d + sin(a + 90) * w);
    }
    brush.endShape(true);
  }

  // blazing orange petals, crinkled with a darker second pass
  let cx = 200, cy = 210;
  let pet = [[-120, 150], [-40, 160], [40, 150], [120, 145], [190, 140]];
  for (let p of pet) {
    let a = p[0], r = p[1];
    brush.fill("#ff8a1c", 210);
    brush.fillBleed(0.35, "out");
    brush.fillTexture(0.6, 0.6);
    brush.beginShape(0.7);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 40) * r * 0.8, cy + sin(a - 40) * r * 0.8);
    brush.vertex(cx + cos(a - 15) * r, cy + sin(a - 15) * r);
    brush.vertex(cx + cos(a + 10) * r * 0.9, cy + sin(a + 10) * r * 0.9);
    brush.vertex(cx + cos(a + 35) * r * 0.85, cy + sin(a + 35) * r * 0.85);
    brush.endShape(true);
    brush.fill("#ea5a0c", 215);
    brush.fillBleed(0.15, "out");
    brush.beginShape(0.6);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 20) * r * 0.6, cy + sin(a - 20) * r * 0.6);
    brush.vertex(cx + cos(a + 5) * r * 0.75, cy + sin(a + 5) * r * 0.75);
    brush.vertex(cx + cos(a + 20) * r * 0.55, cy + sin(a + 20) * r * 0.55);
    brush.endShape(true);
  }

  // hot yellow flare at centre, then dark crown
  brush.fill("#ffd23a", 220);
  brush.fillBleed(0.3, "out");
  brush.circle(cx, cy, 40, true);
  brush.fill("#2b3a1e", 230);
  brush.fillBleed(0.1, "out");
  brush.circle(cx, cy, 18, true);
  for (let i = 0; i < 12; i++) {
    let a = i * 30;
    brush.fill("#1a1a14", 220);
    brush.fillBleed(0.02, "out");
    brush.circle(cx + cos(a) * 26, cy + sin(a) * 26, 3.5, true);
  }
}
