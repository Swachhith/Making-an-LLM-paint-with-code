async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7e9b8");
  randomSeed(77);
  brush.noStroke();
  // palette: dark blue #14224f, warm yellow #f2b62a
  // warm glow around the lamp
  brush.fill("#f2b62a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.circle(390, 200, 110, 0.4);
  // night sky in dark blue, painted around the beam and the glow
  let starsLeft = [];
  brush.fill("#14224f", 230);
  brush.fillBleed(0.25);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.3);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 480);
  brush.vertex(470, 480);
  brush.vertex(480, 250);
  brush.vertex(460, 140);
  brush.vertex(390, 110);
  brush.vertex(330, 150);
  brush.vertex(-20, 60);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(-20, 280);
  brush.vertex(330, 240);
  brush.vertex(330, 480);
  brush.vertex(-20, 480);
  brush.endShape(true);
  // second pass to deepen the upper sky
  brush.fill("#14224f", 200);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 90);
  brush.vertex(-20, 20);
  brush.endShape(true);
  // stars as yellow dots on the dark
  for (let i = 0; i < 110; i++) {
    let x = random(0, 600), y = random(0, 420);
    if (y > 20 + x * 0.1 && y < 300 && x < 480) continue;
    brush.fill("#f7d56a", 240);
    brush.fillBleed(0.05);
    brush.circle(x, y, random(2, 4.5), 0.05);
  }
  // lighthouse tower silhouette, three passes
  for (let k = 0; k < 3; k++) {
    brush.fill("#0a1233", 240);
    brush.fillBleed(0.12);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.02);
    brush.vertex(362, 480);
    brush.vertex(376, 230);
    brush.vertex(404, 230);
    brush.vertex(418, 480);
    brush.endShape(true);
    brush.beginShape(0.02);
    brush.vertex(368, 232);
    brush.vertex(412, 232);
    brush.vertex(412, 216);
    brush.vertex(368, 216);
    brush.endShape(true);
    brush.beginShape(0.02);
    brush.vertex(372, 186);
    brush.vertex(390, 166);
    brush.vertex(408, 186);
    brush.endShape(true);
  }
  // lamp posts either side of the bright lantern
  brush.fill("#0a1233", 230);
  brush.beginShape(0.02);
  brush.vertex(372, 186);
  brush.vertex(378, 186);
  brush.vertex(378, 216);
  brush.vertex(372, 216);
  brush.endShape(true);
  brush.beginShape(0.02);
  brush.vertex(402, 186);
  brush.vertex(408, 186);
  brush.vertex(408, 216);
  brush.vertex(402, 216);
  brush.endShape(true);
  // headland and rocks
  for (let k = 0; k < 2; k++) {
    brush.fill("#0a1233", 240);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.4);
    brush.vertex(230, 620);
    brush.vertex(270, 500);
    brush.vertex(340, 470);
    brush.vertex(460, 468);
    brush.vertex(560, 500);
    brush.vertex(620, 490);
    brush.vertex(620, 620);
    brush.endShape(true);
  }
  // a lit window halfway up the tower
  brush.fill("#f2b62a", 240);
  brush.fillBleed(0.05);
  brush.circle(390, 330, 5, 0.1);
  // sea, dark with yellow reflections left as paper streaks
  brush.fill("#14224f", 220);
  brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(-20, 478);
  brush.vertex(290, 482);
  brush.vertex(250, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  for (let i = 0; i < 12; i++) {
    let y = random(492, 600), x = random(10, 220);
    brush.fill("#f2b62a", 230);
    brush.fillBleed(0.1);
    brush.beginShape(0.5);
    brush.vertex(x, y);
    brush.vertex(x + 36, y - 2);
    brush.vertex(x + 38, y + 5);
    brush.vertex(x, y + 6);
    brush.endShape(true);
  }
}
