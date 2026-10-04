async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef3f6");
  randomSeed(12012);
  brush.noStroke();
  // cool sky, lighter toward horizon, soft grey clouds
  brush.fill("#98bcd8", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 180); brush.vertex(-20, 220);
  brush.endShape(true);
  for (let c of [[150, 80, 70], [460, 130, 90]]) {
    brush.fill("#b8c6d2", 170);
    brush.fillBleed(0.35);
    brush.fillTexture(0.6, 0.6);
    brush.circle(c[0], c[1], c[2], 0.9);
  }
  // hills and hedge line at mid-height
  brush.fill("#90a8bc", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(-20, 280); brush.vertex(160, 245); brush.vertex(340, 270); brush.vertex(500, 240); brush.vertex(620, 262); brush.vertex(620, 300); brush.vertex(-20, 300);
  brush.endShape(true);
  // wide field, three cool greens, with a pale path winding toward the tree
  brush.fill("#a6c8b0", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, 290); brush.vertex(620, 285); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#7ea896", 180);
  brush.fillBleed(0.35);
  brush.beginShape(0.6);
  brush.vertex(-20, 420); brush.vertex(300, 400); brush.vertex(620, 430); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#e6ecea", 230);
  brush.fillBleed(0.2);
  brush.beginShape(0.7);
  brush.vertex(390, 330); brush.vertex(405, 330); brush.vertex(380, 420); brush.vertex(460, 620); brush.vertex(380, 620); brush.vertex(345, 420);
  brush.endShape(true);
  // the apple tree across the field: broad low crown, clearly shaped
  let tx = 400, ty = 328;
  brush.fill("#56545c", 235);
  brush.fillBleed(0.12);
  brush.beginShape(0.4);
  brush.vertex(tx - 8, ty); brush.vertex(tx + 8, ty); brush.vertex(tx + 6, ty - 22); brush.vertex(tx + 26, ty - 40); brush.vertex(tx - 24, ty - 42); brush.vertex(tx - 6, ty - 22);
  brush.endShape(true);
  // crown: loose big pass, then tighter darker clumps
  brush.fill("#8cb4a0", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.55, 0.55);
  brush.beginShape(0.9);
  brush.vertex(tx - 70, ty - 40); brush.vertex(tx - 50, ty - 82); brush.vertex(tx, ty - 98); brush.vertex(tx + 55, ty - 84); brush.vertex(tx + 75, ty - 44); brush.vertex(tx, ty - 32);
  brush.endShape(true);
  for (let j = 0; j < 5; j++) {
    brush.fill("#467868", 190);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.circle(tx - 44 + j * 22, ty - 56 + random(-10, 8), random(14, 20), 0.7);
  }
  // red apples, bright and visible
  for (let i = 0; i < 22; i++) {
    let a = random(0, 360), r = random(0, 1);
    brush.fill("#d8283c", 250);
    brush.fillBleed(0.04);
    brush.circle(tx + cos(a) * 62 * r, ty - 64 + sin(a) * 28 * r, random(3.5, 5), 0.2);
  }
  brush.fill("#5e8494", 180);
  brush.fillBleed(0.2);
  brush.beginShape(0.8);
  brush.vertex(tx - 60, ty); brush.vertex(tx + 70, ty - 3); brush.vertex(tx + 64, ty + 12); brush.vertex(tx - 54, ty + 12);
  brush.endShape(true);
  for (let i = 0; i < 5; i++) {
    brush.fill("#c42a3c", 240);
    brush.fillBleed(0.04);
    brush.circle(tx + random(-50, 50), ty + random(3, 10), 3, 0.2);
  }
}
