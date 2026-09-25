async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eee6d6");
  randomSeed(1221);
  brush.noStroke();
  brush.fill("#7f7b50", 200);
  brush.fillBleed(0.5, "out");
  brush.fillTexture(0.65, 0.3);
  brush.circle(30, 570, 190, true);
  brush.circle(590, 30, 160, true);
  let cx = 290, cy = 315;
  for (let i = 0; i < 5; i++) {
    let a = -100 + i * 72;
    let d = cos(a), e = sin(a), p = -e, q = d;
    brush.fill("#d4a943", 215);
    brush.fillBleed(0.3, "out");
    brush.fillTexture(0.55, 0.55);
    brush.beginShape(0.9);
    brush.vertex(cx, cy);
    brush.vertex(cx + d * 120 - p * 135, cy + e * 120 - q * 135);
    brush.vertex(cx + d * 265 - p * 70, cy + e * 265 - q * 70);
    brush.vertex(cx + d * 290 + p * 10, cy + e * 290 + q * 10);
    brush.vertex(cx + d * 210 + p * 120, cy + e * 210 + q * 120);
    brush.vertex(cx + d * 60 + p * 60, cy + e * 60 + q * 60);
    brush.endShape(true);
    brush.fill("#b98530", 200);
    brush.fillBleed(0.2, "out");
    brush.beginShape(0.8);
    brush.vertex(cx, cy);
    brush.vertex(cx + d * 90 - p * 75, cy + e * 90 - q * 75);
    brush.vertex(cx + d * 200 - p * 20, cy + e * 200 - q * 20);
    brush.vertex(cx + d * 120 + p * 60, cy + e * 120 + q * 60);
    brush.endShape(true);
    // radiating vein strokes
    for (let v = -1; v <= 1; v++) {
      brush.fill("#a3743a", 165);
      brush.fillBleed(0.18, "out");
      brush.beginShape(0.4);
      brush.vertex(cx + d * 50, cy + e * 50);
      brush.vertex(cx + d * 180 + p * v * 50, cy + e * 180 + q * v * 50);
      brush.vertex(cx + d * 180 + p * (v * 50 + 9), cy + e * 180 + q * (v * 50 + 9));
      brush.endShape(true);
    }
  }
  brush.fill("#6b2419", 235);
  brush.fillBleed(0.22, "out");
  brush.fillTexture(0.65, 0.65);
  brush.circle(cx, cy, 62, true);
  brush.fill("#a8873a", 230);
  brush.fillBleed(0.04, "out");
  brush.beginShape(0.3);
  brush.vertex(cx - 5, cy); brush.vertex(cx + 95, cy - 140); brush.vertex(cx + 104, cy - 134); brush.vertex(cx + 6, cy + 5);
  brush.endShape(true);
  brush.fill("#d09b30", 235);
  for (let i = 0; i < 18; i++) {
    let t = random(0.55, 1);
    brush.circle(cx + 95 * t + random(-12, 12), cy - 140 * t + random(-12, 12), 5, true);
  }
  brush.fill("#7a2418", 235);
  brush.circle(cx + 106, cy - 150, 9, true);
}
