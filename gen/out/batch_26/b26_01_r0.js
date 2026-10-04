async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7f0de");
  randomSeed(2601);
  brush.noStroke();

  // warm yellow-green ground wash behind the bloom
  brush.fill("#c9d27a", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 260);
  brush.vertex(500, 200); brush.vertex(420, 330); brush.vertex(200, 300);
  brush.vertex(80, 200); brush.vertex(-20, 280);
  brush.endShape(true);
  brush.fill("#8fb04a", 170);
  brush.beginShape(0.5);
  brush.vertex(-20, 420); brush.vertex(120, 380); brush.vertex(170, 520);
  brush.vertex(420, 540); brush.vertex(520, 400); brush.vertex(620, 430);
  brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // stem and sword leaf
  brush.fill("#3f7a2c", 210);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(286, 380); brush.vertex(312, 380); brush.vertex(318, 620); brush.vertex(282, 620);
  brush.endShape(true);
  brush.fill("#4f8f33", 200);
  brush.beginShape(0.4);
  brush.vertex(330, 620); brush.vertex(372, 470); brush.vertex(440, 360);
  brush.vertex(395, 480); brush.vertex(362, 620);
  brush.endShape(true);

  // three upright standards
  let standards = [[300, 60, 0], [210, 110, -1], [390, 110, 1]];
  for (let s of standards) {
    let [x, y, d] = s;
    brush.fill("#7a3fd0", 200);
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.7);
    brush.vertex(300 + d * 10, 250);
    brush.vertex(x - 70 + d * 20, y + 90);
    brush.vertex(x - 30, y);
    brush.vertex(x + 30, y - 10);
    brush.vertex(x + 70 + d * 20, y + 90);
    brush.endShape(true);
    brush.fill("#4b1c95", 190);
    brush.beginShape(0.7);
    brush.vertex(300 + d * 10, 245);
    brush.vertex(x - 35 + d * 15, y + 90);
    brush.vertex(x, y + 30);
    brush.vertex(x + 35 + d * 15, y + 95);
    brush.endShape(true);
  }

  // three drooping falls
  let falls = [[130, 330], [470, 330], [300, 440]];
  for (let f of falls) {
    let [fx, fy] = f;
    brush.fill("#6a2bc4", 215);
    brush.fillBleed(0.28);
    brush.fillTexture(0.5, 0.4);
    brush.beginShape(0.8);
    brush.vertex(300, 250);
    brush.vertex((300 + fx) / 2 - 60, (250 + fy) / 2 - 10);
    brush.vertex(fx - 55, fy + 20);
    brush.vertex(fx, fy + 70);
    brush.vertex(fx + 55, fy + 20);
    brush.vertex((300 + fx) / 2 + 60, (250 + fy) / 2 + 10);
    brush.endShape(true);
    brush.fill("#3a1275", 200);
    brush.beginShape(0.8);
    brush.vertex(300, 260);
    brush.vertex(fx - 30, fy + 10);
    brush.vertex(fx, fy + 55);
    brush.vertex(fx + 30, fy + 15);
    brush.endShape(true);
    // yellow beard
    brush.fill("#f2a81c", 230);
    brush.fillBleed(0.2);
    brush.beginShape(0.6);
    brush.vertex(300, 262);
    brush.vertex((300 * 2 + fx) / 3 - 10, (262 * 2 + fy) / 3);
    brush.vertex((300 + fx * 2) / 3, (262 + fy * 2) / 3 + 5);
    brush.vertex((300 * 2 + fx) / 3 + 10, (262 * 2 + fy) / 3 + 10);
    brush.endShape(true);
  }

  // dark heart where petals meet
  brush.fill("#2a0a55", 220);
  brush.circle(300, 260, 26, true);
}
