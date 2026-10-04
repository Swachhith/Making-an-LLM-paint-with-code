async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e6e1d6");
  randomSeed(28);
  brush.noStroke();
  // grey wet air, graded, with a darker blurred shopfront row behind
  brush.fill("#a49c8c", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(1);
  brush.vertex(-10, -10);
  brush.vertex(610, -10);
  brush.vertex(610, 400);
  brush.vertex(-10, 420);
  brush.endShape(true);
  brush.fill("#7c7466", 180);
  brush.fillBleed(0.3);
  brush.beginShape(1);
  brush.vertex(-10, 200);
  brush.vertex(200, 190);
  brush.vertex(240, 230);
  brush.vertex(420, 220);
  brush.vertex(610, 240);
  brush.vertex(610, 420);
  brush.vertex(-10, 430);
  brush.endShape(true);
  // wet pavement
  brush.fill("#8a8072", 190);
  brush.fillBleed(0.3);
  brush.beginShape(1);
  brush.vertex(-10, 420);
  brush.vertex(610, 410);
  brush.vertex(610, 610);
  brush.vertex(-10, 610);
  brush.endShape(true);
  // the walker, small, left of centre and further back
  let fx = 170, fy = 430;
  // reflection first so the figure sits on it
  brush.fill("#b8483a", 170);
  brush.fillBleed(0.3);
  brush.beginShape(1);
  brush.vertex(fx - 40, fy + 8);
  brush.vertex(fx + 50, fy + 8);
  brush.vertex(fx + 30, fy + 120);
  brush.vertex(fx - 20, fy + 120);
  brush.endShape(true);
  brush.fill("#3a3026", 160);
  brush.beginShape(1);
  brush.vertex(fx - 16, fy + 6);
  brush.vertex(fx + 16, fy + 6);
  brush.vertex(fx + 10, fy + 70);
  brush.vertex(fx - 8, fy + 70);
  brush.endShape(true);
  // coat and legs, mid-stride
  brush.fill("#3c3026", 235);
  brush.fillBleed(0.15);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(1);
  brush.vertex(fx - 14, fy - 120);
  brush.vertex(fx + 14, fy - 120);
  brush.vertex(fx + 28, fy - 34);
  brush.vertex(fx - 26, fy - 34);
  brush.endShape(true);
  brush.fill("#221a14", 230);
  brush.beginShape(1);
  brush.vertex(fx - 16, fy - 36);
  brush.vertex(fx - 2, fy - 36);
  brush.vertex(fx - 18, fy);
  brush.vertex(fx - 32, fy - 2);
  brush.endShape(true);
  brush.beginShape(1);
  brush.vertex(fx + 2, fy - 36);
  brush.vertex(fx + 18, fy - 36);
  brush.vertex(fx + 26, fy);
  brush.vertex(fx + 12, fy);
  brush.endShape(true);
  brush.fill("#a07a5c", 220);
  brush.circle(fx, fy - 132, 11, 0.2);
  // the umbrella dome, tilted into the wind
  let reds = [["#dc3420", 230, 0], ["#b41c12", 215, 1], ["#7c0e08", 190, 2]];
  for (let r of reds) {
    let k = r[2];
    brush.fill(r[0], r[1]);
    brush.fillBleed(0.26);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(1);
    brush.vertex(fx - 76 + k * 30, fy - 132 + k * 2);
    brush.vertex(fx - 50 + k * 22, fy - 180 + k * 10);
    brush.vertex(fx + 10 + k * 8, fy - 198 + k * 12);
    brush.vertex(fx + 70, fy - 176 + k * 6);
    brush.vertex(fx + 90, fy - 136);
    brush.vertex(fx + 10 + k * 10, fy - 146);
    brush.endShape(true);
  }
  // rain as fine dots, sparse, down the whole frame
  for (let i = 0; i < 140; i++) {
    let x = random(0, 600), y = random(0, 600);
    brush.fill("#5a5448", 180);
    brush.fillBleed(0.05);
    brush.circle(x, y, 1.2, 0.2);
    brush.circle(x - 3, y + 7, 1, 0.2);
  }
}
