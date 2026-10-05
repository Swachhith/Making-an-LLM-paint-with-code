async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf2e4");
  randomSeed(1301);
  brush.noStroke();

  // warm light washes behind the flower
  brush.fill("#f7d48a", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#f2b46a", 120);
  brush.fillBleed(0.3);
  brush.circle(260, 220, 180, 0.6);
  brush.fill("#e98a4a", 120);
  brush.fillBleed(0.3);
  brush.circle(500, 500, 150, 0.6);

  // stem, broad, warm
  brush.fill("#5f7a3a", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(280, 540); brush.vertex(290, 540); brush.vertex(296, 320); brush.vertex(288, 320);
  brush.endShape(true);
  brush.fill("#3a5a2a", 190);
  brush.beginShape(0.5);
  brush.vertex(288, 540); brush.vertex(296, 540); brush.vertex(292, 320); brush.vertex(284, 320);
  brush.endShape(true);

  // sepals: three warm yellow-green ones, curved back
  for (let i = 0; i < 3; i++) {
    let a = i * 120 + 60;
    let w = 120;
    brush.fill("#c7a530", 200);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.6);
    brush.vertex(290, 290); brush.vertex(290 + w * cos(a - 20), 290 + w * sin(a - 20));
    brush.vertex(300 + w * cos(a - 10), 260 + w * sin(a - 10));
    brush.vertex(300 + w * cos(a + 10), 260 + w * sin(a + 10));
    brush.vertex(300, 290);
    brush.endShape(true);
  }

  // golden star: three broad golden rays
  for (let i = 0; i < 3; i++) {
    let a = i * 120 + 30;
    brush.fill("#ffd020", 220);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.6);
    brush.vertex(290, 290); brush.vertex(290 + 110 * cos(a - 20), 290 + 110 * sin(a - 20));
    brush.vertex(290 + 150 * cos(a - 8), 290 + 150 * sin(a - 8));
    brush.vertex(290 + 110 * cos(a + 8), 290 + 110 * sin(a + 8));
    brush.vertex(290, 290);
    brush.endShape(true);
  }

  // violet-blue throat
  brush.fill("#4a5fa8", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(290, 290); brush.vertex(306, 240); brush.vertex(340, 270); brush.vertex(320, 320);
  brush.vertex(280, 320); brush.vertex(260, 270); brush.vertex(220, 240);
  brush.endShape(true);
  brush.fill("#2a3a8a", 180);
  brush.fillBleed(0.2);
  brush.beginShape(0.7);
  brush.vertex(290, 290); brush.vertex(312, 260); brush.vertex(332, 290); brush.vertex(312, 315);
  brush.endShape(true);

  // blue-yellow stripes on the blue throat
  for (let i = 0; i < 6; i++) {
    let a = i * 60 + 30;
    brush.fill("#ffd020", 200);
    brush.fillBleed(0.15);
    brush.beginShape(0.4);
    brush.vertex(290 + 30 * cos(a - 15), 290 + 30 * sin(a - 15));
    brush.vertex(290 + 100 * cos(a - 10), 290 + 100 * sin(a - 10));
    brush.vertex(290 + 110 * cos(a + 10), 290 + 110 * sin(a + 10));
    brush.vertex(290 + 30 * cos(a + 15), 290 + 30 * sin(a + 15));
    brush.endShape(true);
  }
}
