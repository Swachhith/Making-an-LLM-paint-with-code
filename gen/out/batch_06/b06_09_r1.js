async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e9e1d0");
  randomSeed(910);
  brush.noStroke();
  // umber and sage backdrop, darker behind the white petals so they stand out
  brush.fill("#9c8a6a", 210);
  brush.fillBleed(0.45, "out");
  brush.fillTexture(0.65, 0.35);
  brush.circle(230, 250, 230, true);
  brush.fill("#8b9272", 200);
  brush.circle(470, 170, 120, true);
  // stems
  brush.fill("#56603c", 230);
  brush.fillBleed(0.08, "out");
  brush.beginShape(0.5);
  brush.vertex(228, 330); brush.vertex(245, 600); brush.vertex(259, 600); brush.vertex(242, 330);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(460, 240); brush.vertex(400, 600); brush.vertex(413, 600); brush.vertex(472, 240);
  brush.endShape(true);
  // feathery ruff
  brush.fill("#5f6a43", 220);
  brush.fillBleed(0.2, "out");
  for (let s of [-1, 1]) {
    brush.beginShape(0.6);
    brush.vertex(240, 420); brush.vertex(240 + s * 70, 395); brush.vertex(240 + s * 125, 410); brush.vertex(240 + s * 55, 430);
    brush.endShape(true);
  }
  // six broad petals of warm off-white, cool grey shadow on one side
  let cx = 235, cy = 250;
  for (let i = 0; i < 6; i++) {
    let a = i * 60 + 12;
    let px = cx + cos(a) * 90, py = cy + sin(a) * 82;
    brush.fill("#f6f1e6", 235);
    brush.fillBleed(0.12, "out");
    brush.fillTexture(0.4, 0.55);
    brush.circle(px, py, 88, true);
  }
  for (let i = 0; i < 6; i++) {
    let a = i * 60 + 12;
    brush.fill("#b3adb5", 190);
    brush.fillBleed(0.25, "out");
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.8);
    brush.vertex(cx + cos(a - 25) * 40, cy + sin(a - 25) * 40);
    brush.vertex(cx + cos(a - 28) * 120, cy + sin(a - 28) * 110);
    brush.vertex(cx + cos(a - 15) * 150, cy + sin(a - 15) * 140);
    brush.vertex(cx + cos(a - 10) * 60, cy + sin(a - 10) * 60);
    brush.endShape(true);
  }
  // dark centre
  brush.fill("#6f6878", 200);
  brush.fillBleed(0.3, "out");
  brush.circle(cx, cy, 54, true);
  brush.fill("#211b25", 240);
  brush.fillBleed(0.08, "out");
  brush.fillTexture(0.7, 0.7);
  brush.circle(cx, cy, 30, true);
  brush.fill("#2e2533", 230);
  for (let i = 0; i < 36; i++) {
    let a = random(360), r = random(34, 58);
    brush.circle(cx + cos(a) * r, cy + sin(a) * r, 4, true);
  }
  // closed bud, cupped, with a sliver of the dark centre visible
  brush.fill("#efe8d9", 235);
  brush.fillBleed(0.15, "out");
  brush.beginShape(0.9);
  brush.vertex(438, 245); brush.vertex(420, 190); brush.vertex(450, 130); brush.vertex(490, 185); brush.vertex(480, 245);
  brush.endShape(true);
  brush.fill("#aaa2ac", 200);
  brush.fillBleed(0.2, "out");
  brush.beginShape(0.9);
  brush.vertex(458, 243); brush.vertex(452, 190); brush.vertex(460, 140); brush.vertex(478, 195); brush.vertex(476, 243);
  brush.endShape(true);
  brush.fill("#2e2533", 220);
  brush.circle(452, 140, 7, true);
  brush.fill("#56603c", 230);
  brush.beginShape(0.6);
  brush.vertex(425, 255); brush.vertex(462, 236); brush.vertex(500, 258); brush.vertex(462, 270);
  brush.endShape(true);
}
