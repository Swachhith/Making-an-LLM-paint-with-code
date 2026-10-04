async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf8ef");
  randomSeed(808);
  brush.noStroke();
  const cx = 400, cy = 215;
  // stem down to the bottom edge with narrow leaves
  brush.fill("#3f7a1f", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(392, 240); brush.vertex(378, 420); brush.vertex(372, 620); brush.vertex(392, 620); brush.vertex(398, 420); brush.vertex(410, 240);
  brush.endShape(true);
  brush.fill("#4f8f28", 200);
  brush.beginShape(0.6);
  brush.vertex(384, 380); brush.vertex(320, 350); brush.vertex(290, 360); brush.vertex(340, 380);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(390, 470); brush.vertex(455, 430); brush.vertex(480, 438); brush.vertex(440, 470);
  brush.endShape(true);
  // six recurved petals, each a curled tongue flung outward
  const angles = [200, 250, 300, 350, 40, 140];
  for (let i = 0; i < 6; i++) {
    let a = angles[i];
    let L = 125;
    let curl = a + 30;
    brush.fill("#f26a12", 225);
    brush.fillBleed(0.28);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(0.7);
    brush.vertex(cx, cy);
    brush.vertex(cx + 45 * cos(a - 22), cy + 45 * sin(a - 22));
    brush.vertex(cx + L * 0.85 * cos(a - 8), cy + L * 0.85 * sin(a - 8));
    brush.vertex(cx + L * cos(a) + 25 * cos(curl), cy + L * sin(a) + 25 * sin(curl));
    brush.vertex(cx + L * 0.8 * cos(a + 10), cy + L * 0.8 * sin(a + 10));
    brush.vertex(cx + 45 * cos(a + 22), cy + 45 * sin(a + 22));
    brush.endShape(true);
    brush.fill("#e04a08", 215);
    brush.fillBleed(0.22);
    brush.beginShape(0.6);
    brush.vertex(cx, cy);
    brush.vertex(cx + 40 * cos(a - 12), cy + 40 * sin(a - 12));
    brush.vertex(cx + L * 0.75 * cos(a), cy + L * 0.75 * sin(a));
    brush.vertex(cx + 40 * cos(a + 12), cy + 40 * sin(a + 12));
    brush.endShape(true);
    // freckles
    for (let k = 0; k < 7; k++) {
      let d = random(20, 70);
      let o = random(-9, 9);
      brush.fill("#5a1a08", 230);
      brush.fillBleed(0.1);
      brush.circle(cx + d * cos(a + o), cy + d * sin(a + o), random(2, 4), 0.3);
    }
  }
  // throat
  brush.fill("#f5a020", 200);
  brush.fillBleed(0.25);
  brush.circle(cx, cy, 24, 0.4);
  // stamens: fanned wide shapes ending in dark anthers
  const st = [215, 245, 275, 305, 335];
  for (const a of st) {
    let d = 105;
    brush.fill("#c7a34a", 190);
    brush.fillBleed(0.15);
    brush.beginShape(0.3);
    brush.vertex(cx - 4, cy); brush.vertex(cx + d * cos(a) - 3, cy + d * sin(a)); brush.vertex(cx + d * cos(a) + 3, cy + d * sin(a)); brush.vertex(cx + 4, cy);
    brush.endShape(true);
    brush.fill("#5b2410", 240);
    brush.fillBleed(0.1);
    brush.circle(cx + d * cos(a), cy + d * sin(a), 7, 0.3);
  }
}
