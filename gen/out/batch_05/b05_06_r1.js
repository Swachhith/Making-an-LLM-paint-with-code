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
  brush.fill("#f2c393", 170);
  brush.fillBleed(0.5);
  brush.fillTexture(0.5, 0.3);
  brush.circle(270, 290, 240, true);
  // stems in warm olive
  brush.fill("#6f6d30", 220);
  brush.fillBleed(0.08);
  brush.beginShape(0.5);
  brush.vertex(250, 340); brush.vertex(262, 340); brush.vertex(300, 590); brush.vertex(286, 590);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(458, 240); brush.vertex(466, 242); brush.vertex(310, 590); brush.vertex(300, 588);
  brush.endShape(true);
  // serrated rose leaves with a darker vein half
  let lf = [[275, 470, 200], [390, 400, 330], [280, 530, 160], [360, 480, 20]];
  for (let l of lf) {
    brush.fill("#7f8a38", 205);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.8);
    brush.vertex(l[0], l[1]);
    brush.vertex(l[0] + 50 * cos(l[2] - 25), l[1] + 50 * sin(l[2] - 25));
    brush.vertex(l[0] + 95 * cos(l[2]), l[1] + 95 * sin(l[2]));
    brush.vertex(l[0] + 50 * cos(l[2] + 25), l[1] + 50 * sin(l[2] + 25));
    brush.endShape(true);
    brush.fill("#5a6424", 190);
    brush.fillBleed(0.1);
    brush.beginShape(0.8);
    brush.vertex(l[0], l[1]);
    brush.vertex(l[0] + 95 * cos(l[2]), l[1] + 95 * sin(l[2]));
    brush.vertex(l[0] + 50 * cos(l[2] + 22), l[1] + 50 * sin(l[2] + 22));
    brush.endShape(true);
  }
  // open rose: loose outer cup, then spiralling petals tightening inward
  let cx = 250, cy = 270;
  brush.fill("#b52036", 210);
  brush.fillBleed(0.35);
  brush.fillTexture(0.55, 0.5);
  brush.beginShape(0.9);
  brush.vertex(cx - 125, cy - 10); brush.vertex(cx - 95, cy - 100); brush.vertex(cx, cy - 125);
  brush.vertex(cx + 105, cy - 95); brush.vertex(cx + 130, cy + 5); brush.vertex(cx + 85, cy + 95);
  brush.vertex(cx - 10, cy + 115); brush.vertex(cx - 100, cy + 80);
  brush.endShape(true);
  for (let i = 0; i < 16; i++) {
    let a = i * 47;
    let r = 100 - i * 5.6;
    let col = i < 5 ? "#9a1428" : (i < 11 ? "#7c0e20" : "#5c0816");
    brush.fill(col, 205 + i * 2);
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
  // warm light catching the rolled outer rims
  brush.fill("#e2574f", 190);
  brush.fillBleed(0.15);
  brush.beginShape(0.9);
  brush.vertex(cx - 110, cy + 10); brush.vertex(cx - 80, cy - 75); brush.vertex(cx - 60, cy - 60); brush.vertex(cx - 85, cy + 15);
  brush.endShape(true);
  brush.beginShape(0.9);
  brush.vertex(cx + 20, cy - 110); brush.vertex(cx + 95, cy - 80); brush.vertex(cx + 75, cy - 65); brush.vertex(cx + 15, cy - 90);
  brush.endShape(true);
  // bud: tight teardrop
  brush.fill("#a01a2c", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.85);
  brush.vertex(461, 245); brush.vertex(432, 200); brush.vertex(440, 150);
  brush.vertex(465, 120); brush.vertex(488, 150); brush.vertex(490, 205);
  brush.endShape(true);
  brush.fill("#5c0816", 215);
  brush.beginShape(0.85);
  brush.vertex(465, 240); brush.vertex(460, 170); brush.vertex(473, 130); brush.vertex(485, 195);
  brush.endShape(true);
  brush.fill("#6f6d30", 225);
  brush.fillBleed(0.1);
  brush.beginShape(0.6);
  brush.vertex(461, 250); brush.vertex(422, 205); brush.vertex(452, 225);
  brush.vertex(462, 175); brush.vertex(472, 225); brush.vertex(500, 198);
  brush.endShape(true);
}
