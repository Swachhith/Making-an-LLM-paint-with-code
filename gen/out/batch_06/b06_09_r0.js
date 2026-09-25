async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ece5d6");
  randomSeed(909);
  brush.noStroke();
  // earthy ground wash
  brush.fill("#c9b99a", 150);
  brush.fillBleed(0.45, "out");
  brush.fillTexture(0.6, 0.3);
  brush.beginShape(0.8);
  brush.vertex(-10, 420); brush.vertex(300, 380); brush.vertex(610, 440); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  // stems
  brush.fill("#6d7550", 200);
  brush.fillBleed(0.1, "out");
  brush.beginShape(0.5);
  brush.vertex(235, 330); brush.vertex(250, 600); brush.vertex(262, 600); brush.vertex(247, 330);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(460, 250); brush.vertex(410, 600); brush.vertex(421, 600); brush.vertex(470, 250);
  brush.endShape(true);
  // ruff leaves under bloom
  brush.fill("#7c8561", 190);
  brush.fillBleed(0.25, "out");
  for (let s of [-1, 1]) {
    brush.beginShape(0.6);
    brush.vertex(240, 400); brush.vertex(240 + s * 60, 380); brush.vertex(240 + s * 110, 395); brush.vertex(240 + s * 50, 410);
    brush.endShape(true);
  }
  // open anemone: six rounded petals, off-white with grey-violet shadows
  let cx = 240, cy = 260;
  for (let i = 0; i < 6; i++) {
    let a = i * 60 + 15;
    let px = cx + cos(a) * 85, py = cy + sin(a) * 75;
    brush.fill("#d8d3cc", 190);
    brush.fillBleed(0.3, "out");
    brush.fillTexture(0.5, 0.5);
    brush.circle(px, py, 82, true);
    brush.fill("#f7f3ea", 200);
    brush.fillBleed(0.15, "out");
    brush.circle(px + cos(a) * 8, py + sin(a) * 8, 62, true);
  }
  brush.fill("#9a8f9e", 160);
  brush.fillBleed(0.3, "out");
  brush.circle(cx, cy, 70, true);
  // dark centre with stamen halo
  brush.fill("#2b2530", 230);
  brush.fillBleed(0.1, "out");
  brush.fillTexture(0.7, 0.6);
  brush.circle(cx, cy, 32, true);
  brush.fill("#3e3544", 200);
  for (let i = 0; i < 30; i++) {
    let a = random(360), r = random(34, 50);
    brush.circle(cx + cos(a) * r, cy + sin(a) * r, 3.5, true);
  }
  // closed bud
  brush.fill("#d9d2c4", 200);
  brush.fillBleed(0.25, "out");
  brush.beginShape(0.9);
  brush.vertex(440, 250); brush.vertex(425, 200); brush.vertex(448, 150); brush.vertex(480, 195); brush.vertex(472, 250);
  brush.endShape(true);
  brush.fill("#a79ea8", 170);
  brush.beginShape(0.9);
  brush.vertex(452, 245); brush.vertex(446, 195); brush.vertex(455, 160); brush.vertex(466, 200);
  brush.endShape(true);
  brush.fill("#6d7550", 200);
  brush.beginShape(0.6);
  brush.vertex(430, 255); brush.vertex(465, 238); brush.vertex(490, 258); brush.vertex(460, 268);
  brush.endShape(true);
}
