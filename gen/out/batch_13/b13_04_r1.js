async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf5e6");
  brush.noStroke();
  // ultramarine sky, graded from deep at the top, with paper cloud gaps
  brush.fill("#1f5fd0", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(1);
  brush.vertex(-10, -10);
  brush.vertex(610, -10);
  brush.vertex(610, 110);
  brush.vertex(420, 150);
  brush.vertex(200, 120);
  brush.vertex(-10, 160);
  brush.endShape(true);
  brush.fill("#3c86e0", 180);
  brush.fillBleed(0.3);
  brush.beginShape(1);
  brush.vertex(-10, 200);
  brush.vertex(150, 210);
  brush.vertex(330, 180);
  brush.vertex(610, 200);
  brush.vertex(610, 400);
  brush.vertex(-10, 420);
  brush.endShape(true);
  // cloud underside shadows
  brush.fill("#9aaed8", 170);
  brush.fillBleed(0.3);
  brush.circle(430, 175, 40, 0.6);
  brush.circle(160, 175, 32, 0.6);
  // hot cadmium field
  brush.fill("#b8d01a", 215);
  brush.fillBleed(0.3);
  brush.beginShape(1);
  brush.vertex(-10, 420);
  brush.vertex(250, 400);
  brush.vertex(610, 396);
  brush.vertex(610, 610);
  brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#6aa214", 195);
  brush.fillBleed(0.25);
  brush.beginShape(1);
  brush.vertex(-10, 490);
  brush.vertex(260, 460);
  brush.vertex(610, 500);
  brush.vertex(610, 610);
  brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#e0a818", 170);
  brush.fillBleed(0.3);
  brush.circle(480, 560, 60, 0.7);
  // the lone oak, small, at left third: trunk and forked limbs
  let tx = 150, ty = 412;
  brush.fill("#3c2414", 225);
  brush.fillBleed(0.2);
  brush.beginShape(1);
  brush.vertex(tx - 10, ty);
  brush.vertex(tx - 6, ty - 40);
  brush.vertex(tx - 26, ty - 64);
  brush.vertex(tx - 12, ty - 66);
  brush.vertex(tx + 2, ty - 50);
  brush.vertex(tx + 20, ty - 70);
  brush.vertex(tx + 30, ty - 64);
  brush.vertex(tx + 8, ty - 38);
  brush.vertex(tx + 12, ty);
  brush.endShape(true);
  // broad spreading crown: wide, flattish, oak-like lobes
  let lobes = [[-62, -78, 30], [-30, -98, 36], [8, -110, 38], [46, -96, 34], [74, -76, 28], [-10, -80, 34], [30, -76, 30]];
  for (let l of lobes) {
    brush.fill("#2e8a1a", 205);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.circle(tx + l[0], ty + l[1], l[2], 0.7);
  }
  for (let l of lobes) {
    brush.fill("#15521a", 195);
    brush.fillBleed(0.22);
    brush.circle(tx + l[0] + 6, ty + l[1] + 10, l[2] * 0.55, 0.7);
  }
  brush.fill("#0b3010", 200);
  brush.fillBleed(0.2);
  brush.circle(tx + 4, ty - 70, 22, 0.6);
  // cast shadow pool to the right
  brush.fill("#2c5a10", 210);
  brush.fillBleed(0.25);
  brush.beginShape(1);
  brush.vertex(tx - 40, ty + 2);
  brush.vertex(tx + 110, ty + 4);
  brush.vertex(tx + 90, ty + 16);
  brush.vertex(tx - 30, ty + 14);
  brush.endShape(true);
}
