async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4efe4");
  brush.noStroke();

  // bold teal-green background wash, top-left corner
  brush.fill("#2f7a70", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(0, 0);
  brush.vertex(600, 0);
  brush.vertex(600, 250);
  brush.vertex(300, 300);
  brush.vertex(0, 320);
  brush.endShape(true);

  // stem
  brush.fill("#1f5a3a", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(230, 330);
  brush.vertex(260, 330);
  brush.vertex(260, 600);
  brush.vertex(230, 600);
  brush.endShape(true);
  brush.fill("#1f5a3a", 190);
  brush.beginShape(0.3);
  brush.vertex(220, 470);
  brush.vertex(250, 470);
  brush.vertex(250, 600);
  brush.vertex(220, 600);
  brush.endShape(true);

  // broad leaves
  brush.fill("#3f8a5a", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(170, 470);
  brush.vertex(120, 410);
  brush.vertex(60, 460);
  brush.vertex(110, 520);
  brush.vertex(170, 470);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(260, 470);
  brush.vertex(330, 380);
  brush.vertex(400, 430);
  brush.vertex(330, 520);
  brush.vertex(260, 470);
  brush.endShape(true);

  // lily, off-centre, right
  let cx = 440, cy = 330;
  // sepals
  let sepals = [[-10, -10, 120, 170], [90, -10, 120, 170], [180, 60, 120, 170], [60, 120, 120, 170], [-60, 120, 120, 170], [-180, 60, 120, 170]];
  for (let s of sepals) {
    brush.fill("#e84a1c", 210);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5);
    brush.vertex(cx + s[0], cy + s[1]);
    brush.vertex(cx + s[0] + s[2] * cos(s[3] - 18), cy + s[1] + s[2] * sin(s[3] - 18));
    brush.vertex(cx + s[0] + s[2] * cos(s[3]), cy + s[1] + s[2] * sin(s[3]));
    brush.vertex(cx + s[0] + s[2] * cos(s[3] + 18), cy + s[1] + s[2] * sin(s[3] + 18));
    brush.endShape(true);
  }
  // petals, six, overlapping
  let petals = [[-20, 140, 200, 180], [40, 120, 200, 180], [100, 60, 200, 180], [160, 0, 200, 180], [220, -60, 200, 180], [160, -120, 200, 180], [100, -180, 200, 180], [40, -120, 200, 180], [-20, -60, 200, 180]];
  for (let p of petals) {
    brush.fill("#f78a1e", 220);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.6);
    brush.vertex(cx + p[0], cy + p[1]);
    brush.vertex(cx + p[0] + p[2] * cos(p[3] - 18), cy + p[1] + p[2] * sin(p[3] - 18));
    brush.vertex(cx + p[0] + p[2] * cos(p[3]), cy + p[1] + p[2] * sin(p[3]));
    brush.vertex(cx + p[0] + p[2] * cos(p[3] + 18), cy + p[1] + p[2] * sin(p[3] + 18));
    brush.endShape(true);
  }
  // dark throat
  brush.fill("#c02a0a", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(cx - 12, cy - 12);
  brush.vertex(cx + 12, cy - 12);
  brush.vertex(cx + 18, cy + 12);
  brush.vertex(cx - 18, cy + 12);
  brush.endShape(true);
  brush.fill("#8a1a0a", 200);
  brush.beginShape(0.5);
  brush.vertex(cx - 8, cy + 6);
  brush.vertex(cx + 8, cy + 6);
  brush.vertex(cx + 6, cy + 22);
  brush.vertex(cx - 6, cy + 22);
  brush.endShape(true);
  brush.fill("#f0e08a", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.circle(cx, cy, 24, 0.4);
}
