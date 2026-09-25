async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e6dcc8");
  randomSeed(911);
  brush.noStroke();
  // earthy umber field over most of the sheet
  brush.fill("#8a7555", 235);
  brush.fillBleed(0.35, "out");
  brush.fillTexture(0.7, 0.4);
  brush.beginShape(0.9);
  brush.vertex(20, 30); brush.vertex(580, 20); brush.vertex(590, 420); brush.vertex(330, 470); brush.vertex(10, 430);
  brush.endShape(true);
  brush.fill("#6b7250", 215);
  brush.fillBleed(0.4, "out");
  brush.circle(480, 330, 110, true);
  // stems (two passes, thin and firm)
  brush.fill("#4a5232", 245);
  brush.fillBleed(0.02, "out");
  brush.fillTexture(0.3, 0.5);
  brush.beginShape(0.5);
  brush.vertex(226, 340); brush.vertex(240, 470); brush.vertex(250, 600); brush.vertex(262, 600); brush.vertex(252, 470); brush.vertex(238, 340);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(455, 260); brush.vertex(430, 420); brush.vertex(410, 600); brush.vertex(421, 600); brush.vertex(441, 420); brush.vertex(466, 260);
  brush.endShape(true);
  // ruff
  brush.fill("#5a6440", 235);
  brush.fillBleed(0.1, "out");
  for (let s of [-1, 1]) {
    brush.beginShape(0.6);
    brush.vertex(242, 440); brush.vertex(242 + s * 70, 415); brush.vertex(242 + s * 120, 430); brush.vertex(242 + s * 55, 452);
    brush.endShape(true);
  }
  // open anemone: pale opaque petals over the dark ground
  let cx = 232, cy = 245;
  for (let i = 0; i < 6; i++) {
    let a = i * 60 + 12;
    let dx = cos(a), dy = sin(a), px = -dy, py = dx;
    brush.fill("#f7f2e6", 250);
    brush.fillBleed(0.06, "out");
    brush.fillTexture(0.35, 0.75);
    brush.beginShape(0.9);
    brush.vertex(cx + dx * 20 - px * 25, cy + dy * 20 - py * 25);
    brush.vertex(cx + dx * 110 - px * 75, cy + dy * 110 - py * 75);
    brush.vertex(cx + dx * 175 - px * 35, cy + dy * 175 - py * 35);
    brush.vertex(cx + dx * 180 + px * 30, cy + dy * 180 + py * 30);
    brush.vertex(cx + dx * 110 + px * 75, cy + dy * 110 + py * 75);
    brush.vertex(cx + dx * 20 + px * 25, cy + dy * 20 + py * 25);
    brush.endShape(true);
    // cool grey shadow on one flank
    brush.fill("#bdb5b8", 215);
    brush.fillBleed(0.12, "out");
    brush.beginShape(0.8);
    brush.vertex(cx + dx * 40 - px * 25, cy + dy * 40 - py * 25);
    brush.vertex(cx + dx * 110 - px * 70, cy + dy * 110 - py * 70);
    brush.vertex(cx + dx * 160 - px * 35, cy + dy * 160 - py * 35);
    brush.vertex(cx + dx * 100 - px * 30, cy + dy * 100 - py * 30);
    brush.endShape(true);
  }
  brush.fill("#8d8490", 220);
  brush.fillBleed(0.2, "out");
  brush.circle(cx, cy, 50, true);
  brush.fill("#1e1822", 250);
  brush.fillBleed(0.05, "out");
  brush.fillTexture(0.7, 0.8);
  brush.circle(cx, cy, 32, true);
  brush.fill("#2b2230", 240);
  for (let i = 0; i < 40; i++) {
    let a = random(360), r = random(34, 60);
    brush.circle(cx + cos(a) * r, cy + sin(a) * r, 4, true);
  }
  // closed bud
  brush.fill("#f2ecdf", 250);
  brush.fillBleed(0.06, "out");
  brush.beginShape(0.9);
  brush.vertex(435, 265); brush.vertex(418, 205); brush.vertex(452, 140); brush.vertex(492, 200); brush.vertex(480, 265);
  brush.endShape(true);
  brush.fill("#aca3aa", 225);
  brush.fillBleed(0.1, "out");
  brush.beginShape(0.9);
  brush.vertex(456, 262); brush.vertex(450, 205); brush.vertex(458, 152); brush.vertex(476, 205); brush.vertex(474, 262);
  brush.endShape(true);
  brush.fill("#2b2230", 240);
  brush.circle(453, 148, 7, true);
  brush.fill("#4a5232", 245);
  brush.beginShape(0.6);
  brush.vertex(422, 272); brush.vertex(460, 252); brush.vertex(500, 274); brush.vertex(460, 288);
  brush.endShape(true);
}
