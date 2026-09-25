async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f8eedd");
  randomSeed(66);
  brush.noStroke();
  // warm peach glow behind
  brush.fill("#f2c9a0", 155);
  brush.fillBleed(0.5);
  brush.fillTexture(0.5, 0.3);
  brush.circle(270, 290, 230, true);
  // stems in warm olive
  brush.fill("#7c7a3a", 205);
  brush.fillBleed(0.08);
  brush.beginShape(0.5);
  brush.vertex(250, 330); brush.vertex(262, 330); brush.vertex(300, 590); brush.vertex(286, 590);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(455, 230); brush.vertex(463, 232); brush.vertex(310, 590); brush.vertex(300, 588);
  brush.endShape(true);
  // leaves, three leaflets
  let lf = [[275, 470, 200], [380, 420, 330], [275, 520, 160]];
  for (let l of lf) {
    brush.fill("#8a8c42", 190);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.8);
    brush.vertex(l[0], l[1]);
    brush.vertex(l[0] + 45 * cos(l[2] - 25), l[1] + 45 * sin(l[2] - 25));
    brush.vertex(l[0] + 85 * cos(l[2]), l[1] + 85 * sin(l[2]));
    brush.vertex(l[0] + 45 * cos(l[2] + 25), l[1] + 45 * sin(l[2] + 25));
    brush.endShape(true);
  }
  // open rose: loose outer cup, then spiralling petals tightening inward
  let cx = 250, cy = 270;
  brush.fill("#b8283a", 190);
  brush.fillBleed(0.35);
  brush.fillTexture(0.55, 0.5);
  brush.beginShape(0.9);
  brush.vertex(cx - 120, cy - 10); brush.vertex(cx - 90, cy - 95); brush.vertex(cx, cy - 120);
  brush.vertex(cx + 100, cy - 90); brush.vertex(cx + 125, cy + 5); brush.vertex(cx + 80, cy + 90);
  brush.vertex(cx - 10, cy + 110); brush.vertex(cx - 95, cy + 75);
  brush.endShape(true);
  for (let i = 0; i < 14; i++) {
    let a = i * 47;
    let r = 95 - i * 6;
    let col = i < 5 ? "#9e1c2e" : (i < 10 ? "#841526" : "#6b0f1e");
    brush.fill(col, 190 + i * 3);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.55);
    brush.beginShape(0.85);
    brush.vertex(cx + r * 0.3 * cos(a - 70), cy + r * 0.3 * sin(a - 70));
    brush.vertex(cx + r * cos(a - 40), cy + r * sin(a - 40));
    brush.vertex(cx + r * 1.05 * cos(a), cy + r * 1.05 * sin(a));
    brush.vertex(cx + r * cos(a + 40), cy + r * sin(a + 40));
    brush.vertex(cx + r * 0.5 * cos(a + 30), cy + r * 0.5 * sin(a + 30));
    brush.endShape(true);
  }
  // warm light catching petal rims
  brush.fill("#e0605a", 170);
  brush.fillBleed(0.15);
  brush.circle(cx - 60, cy - 70, 16, true);
  brush.circle(cx + 70, cy - 55, 13, true);
  // bud: tight teardrop
  brush.fill("#a01a2c", 215);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.85);
  brush.vertex(458, 235); brush.vertex(432, 195); brush.vertex(440, 150);
  brush.vertex(462, 125); brush.vertex(482, 150); brush.vertex(485, 200);
  brush.endShape(true);
  brush.fill("#6d0f1d", 205);
  brush.beginShape(0.85);
  brush.vertex(462, 230); brush.vertex(458, 170); brush.vertex(470, 135); brush.vertex(480, 190);
  brush.endShape(true);
  brush.fill("#7c7a3a", 215);
  brush.fillBleed(0.1);
  brush.beginShape(0.6);
  brush.vertex(458, 240); brush.vertex(425, 205); brush.vertex(452, 222);
  brush.vertex(462, 180); brush.vertex(470, 222); brush.vertex(495, 200);
  brush.endShape(true);
}
