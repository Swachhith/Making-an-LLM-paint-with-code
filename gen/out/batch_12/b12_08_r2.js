async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcfcfd");
  randomSeed(8808);
  brush.noStroke();
  // peak far right of centre, huge, dominating
  let ridge = [[-20, 340], [60, 300], [130, 330], [200, 280], [280, 200], [340, 120], [420, 40], [470, 90], [520, 120], [580, 190], [620, 220]];
  // saturated sky wrapped around ridge: turquoise low, ultramarine high
  brush.fill("#10b0d0", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.05);
  brush.vertex(-20, -20); brush.vertex(620, -20);
  for (let i = ridge.length - 1; i >= 0; i--) brush.vertex(ridge[i][0], ridge[i][1]);
  brush.endShape(true);
  brush.fill("#1a2ec0", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.55, 0.55);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(400, -20); brush.vertex(300, 90); brush.vertex(-20, 160);
  brush.endShape(true);
  // snow shadows in electric violet, lit snow = paper
  let shadowFaces = [[[420, 40], [470, 90], [520, 120], [480, 180], [440, 130], [430, 90]], [[200, 280], [240, 250], [250, 300]], [[520, 120], [580, 190], [560, 210]]];
  for (let f of shadowFaces) {
    brush.fill("#7a4af0", 210);
    brush.fillBleed(0.15);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.05);
    for (let q of f) brush.vertex(q[0], q[1]);
    brush.endShape(true);
  }
  // rock streaks through the snow (couloirs)
  for (let c of [[380, 150], [330, 210], [460, 200]]) {
    brush.fill("#c0145a", 210);
    brush.fillBleed(0.15);
    brush.beginShape(0.3);
    brush.vertex(c[0] - 9, c[1]); brush.vertex(c[0] + 9, c[1] + 4); brush.vertex(c[0] + 20, c[1] + 90); brush.vertex(c[0] - 4, c[1] + 90);
    brush.endShape(true);
  }
  // magenta/crimson rock below snowline
  brush.fill("#d01e5a", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.1);
  let snow = [[-20, 360], [60, 320], [130, 350], [200, 320], [260, 290], [310, 260], [360, 240], [400, 250], [450, 230], [500, 250], [560, 240], [620, 260]];
  for (let q of snow) brush.vertex(q[0], q[1] + random(-8, 8));
  brush.vertex(620, 480); brush.vertex(-20, 480);
  brush.endShape(true);
  brush.fill("#4a0c80", 210);
  brush.fillBleed(0.2);
  brush.beginShape(0.1);
  brush.vertex(430, 240); brush.vertex(560, 250); brush.vertex(620, 270); brush.vertex(620, 480); brush.vertex(400, 480);
  brush.endShape(true);
  // bold lime and emerald valley, orange foreground
  brush.fill("#18a040", 230);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 440); brush.vertex(200, 420); brush.vertex(620, 450); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#b8d820", 190);
  brush.fillBleed(0.3);
  brush.circle(160, 500, 110, 0.8);
  brush.fill("#ff7a00", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.55, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 560); brush.vertex(250, 540); brush.vertex(620, 570); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  for (let i = 0; i < 16; i++) {
    let x = random(0, 600), h = random(40, 80), y = 450 + random(0, 30);
    brush.fill("#063a24", 235);
    brush.fillBleed(0.12);
    brush.beginShape(0.1);
    brush.vertex(x - 14, y); brush.vertex(x, y - h); brush.vertex(x + 14, y);
    brush.endShape(true);
  }
}
