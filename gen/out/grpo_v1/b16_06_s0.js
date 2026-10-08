async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#121214");
  randomSeed(1101);
  brush.noStroke();

  // pale blue-grey sky, top to bottom
  brush.fill("#3a4a6a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 350); brush.vertex(-20, 350);
  brush.endShape(true);
  brush.fill("#5a6a8a", 140);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 150); brush.vertex(300, 200); brush.vertex(-20, 150);
  brush.endShape(true);

  // crescent moon, upper right
  brush.fill("#f4e8c8", 255);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.3);
  brush.circle(520, 120, 40, 0.2);
  brush.fill("#fff6d8", 255);
  brush.circle(542, 138, 18, 0.2);

  // pine tree row, low horizon
  let trees = [];
  for (let i = 0; i < 12; i++) {
    let x = i * 53;
    let h = 140 + random(-20, 20);
    trees.push([x, h]);
  }
  for (let t of trees) {
    let x = t[0], h = t[1];
    brush.fill("#0a0a0c", 240);
    brush.fillBleed(0.15);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.2);
    brush.vertex(x, 620);
    brush.vertex(x - 30, 620 - h);
    brush.vertex(x - 20, 620 - h * 0.6);
    brush.vertex(x + 20, 620 - h * 0.6);
    brush.vertex(x + 30, 620 - h);
    brush.vertex(x + 40, 620);
    brush.endShape(true);
    brush.fill("#040406", 220);
    brush.beginShape(0.2);
    brush.vertex(x, 620);
    brush.vertex(x - 36, 620 - h);
    brush.vertex(x - 24, 620 - h * 0.55);
    brush.vertex(x + 24, 620 - h * 0.55);
    brush.vertex(x + 36, 620 - h);
    brush.vertex(x + 44, 620);
    brush.endShape(true);
  }
  // a couple of taller pines on the left
  brush.fill("#040406", 230);
  brush.fillBleed(0.15);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.2);
  brush.vertex(100, 620); brush.vertex(82, 620 - 230); brush.vertex(98, 620 - 210); brush.vertex(114, 620 - 230); brush.vertex(130, 620);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(470, 620); brush.vertex(452, 620 - 260); brush.vertex(468, 620 - 240); brush.vertex(484, 620 - 260); brush.vertex(500, 620);
  brush.endShape(true);

  // warm lights on the dark ground
  let lights = [[200, 560], [320, 550], [450, 570], [520, 540]];
  for (let l of lights) {
    brush.fill("#f0a84a", 255);
    brush.fillBleed(0.15);
    brush.fillTexture(0.4, 0.4);
    brush.circle(l[0], l[1], 10, 0.2);
  }
  // a couple of pale stars
  brush.fill("#e8e8e8", 220);
  for (let i = 0; i < 10; i++) {
    brush.circle(random(0, 600), random(0, 300), 1.5, 0.2);
  }
}
