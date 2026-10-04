async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2f5f6");
  randomSeed(808);
  brush.noStroke();

  // lots of sky: a big airy cerulean wash with soft cloud gaps
  brush.fill("#8fb7d6", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 420); brush.vertex(-10, 440);
  brush.endShape(true);
  brush.fill("#6f9cc4", 160);
  brush.beginShape(1);
  brush.vertex(-10, -10); brush.vertex(400, -10); brush.vertex(260, 90); brush.vertex(-10, 140);
  brush.endShape(true);
  // grey undersides of clouds
  for (let i = 0; i < 3; i++) {
    brush.fill("#a9b3c2", 170);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.circle(120 + i * 150, 220 + random(-30, 30), random(30, 50), 0.7);
  }

  // sea strip at the bottom right
  brush.fill("#5f8fae", 190);
  brush.fillBleed(0.25);
  brush.beginShape(0.3);
  brush.vertex(-10, 460); brush.vertex(610, 450); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);

  // cliff on the right third
  brush.fill("#8c8f86", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.55, 0.5);
  brush.beginShape(0.3);
  brush.vertex(340, 610); brush.vertex(360, 500); brush.vertex(390, 470);
  brush.vertex(420, 440); brush.vertex(610, 430); brush.vertex(610, 610);
  brush.endShape(true);
  brush.fill("#5e6560", 200);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(345, 610); brush.vertex(368, 505); brush.vertex(400, 480); brush.vertex(420, 610);
  brush.endShape(true);
  brush.fill("#8aa48a", 200);
  brush.beginShape(0.6);
  brush.vertex(410, 445); brush.vertex(610, 432); brush.vertex(610, 455); brush.vertex(420, 460);
  brush.endShape(true);

  // lighthouse tower, off-centre right; white left as paper, with a shadow side
  let lx = 490;
  brush.fill("#aeb9c6", 200);
  brush.fillBleed(0.12);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0);
  brush.vertex(lx + 2, 440); brush.vertex(lx + 20, 440); brush.vertex(lx + 14, 330); brush.vertex(lx + 2, 330);
  brush.endShape(true);
  // red bands
  for (let b = 0; b < 2; b++) {
    let y = 355 + b * 45;
    brush.fill("#b8414a", 210);
    brush.fillBleed(0.12);
    brush.beginShape(0);
    brush.vertex(lx - 17 + b * -2, y); brush.vertex(lx + 17 + b * 2, y);
    brush.vertex(lx + 18 + b * 2, y + 18); brush.vertex(lx - 18 + b * -2, y + 18);
    brush.endShape(true);
  }
  // lamp housing and cap
  brush.fill("#3b4452", 220);
  brush.beginShape(0);
  brush.vertex(lx - 18, 330); brush.vertex(lx + 18, 330); brush.vertex(lx + 16, 318); brush.vertex(lx - 16, 318);
  brush.endShape(true);
  brush.fill("#b8414a", 220);
  brush.beginShape(0);
  brush.vertex(lx - 16, 305); brush.vertex(lx, 288); brush.vertex(lx + 16, 305);
  brush.endShape(true);
  brush.fill("#f4d27a", 220);
  brush.circle(lx, 311, 6, 0.1);
}
