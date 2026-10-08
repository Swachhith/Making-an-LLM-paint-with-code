async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf7f2");
  brush.noStroke();
  // soft sky wash
  brush.fill("#e8d4f0", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 220); brush.vertex(400, 260); brush.vertex(200, 230); brush.vertex(-20, 220);
  brush.endShape(true);
  // stem
  brush.fill("#8aa67a", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(300, 230); brush.vertex(315, 230); brush.vertex(315, 620); brush.vertex(300, 620);
  brush.endShape(true);
  // leaves
  brush.fill("#6f9a6a", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(300, 300); brush.vertex(260, 360); brush.vertex(220, 400); brush.vertex(240, 390); brush.vertex(280, 340);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(300, 310); brush.vertex(340, 350); brush.vertex(380, 390); brush.vertex(360, 395); brush.vertex(320, 355);
  brush.endShape(true);
  // cup: six broad petals, pale pink, paper left at the heart
  for (let i = 0; i < 6; i++) {
    const a = i * 60;
    const w = 155;
    brush.fill("#f8c9d4", 215);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.7);
    brush.vertex(300, 300);
    brush.vertex(300 + w * cos(a - 20), 300 - w * sin(a - 20));
    brush.vertex(300 + w * cos(a - 5), 300 - w * 0.9 * sin(a - 5));
    brush.vertex(300 + w * 0.9 * cos(a + 5), 300 + w * 0.9 * sin(a + 5));
    brush.vertex(300 + w * cos(a + 5), 300 + w * sin(a + 5));
    brush.endShape(true);
  }
  // darker pass inside each petal
  for (let i = 0; i < 6; i++) {
    const a = i * 60;
    brush.fill("#e89fa8", 185);
    brush.fillBleed(0.25);
    brush.beginShape(0.7);
    brush.vertex(300, 300);
    brush.vertex(300 + w * 0.6 * cos(a - 20), 300 - w * 0.6 * sin(a - 20));
    brush.vertex(300 + w * 0.5 * cos(a - 5), 300 - w * 0.5 * 0.9 * sin(a - 5));
    brush.vertex(300 + w * 0.5 * 0.9 * cos(a + 5), 300 + w * 0.5 * 0.9 * sin(a + 5));
    brush.vertex(300 + w * 0.6 * cos(a + 5), 300 + w * 0.6 * sin(a + 5));
    brush.endShape(true);
  }
  // two deeper veins radiating from the heart
  brush.fill("#d98a9a", 200);
  brush.fillBleed(0.2);
  brush.beginShape(0.5);
  brush.vertex(300, 300); brush.vertex(220, 200); brush.vertex(260, 220); brush.vertex(300, 230); brush.vertex(340, 220); brush.vertex(380, 200);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(300, 300); brush.vertex(380, 400); brush.vertex(340, 420); brush.vertex(300, 410); brush.vertex(260, 400);
  brush.endShape(true);
  // a couple of darker dots on the paper
  brush.fill("#b88a98", 210);
  brush.fillBleed(0.15);
  brush.circle(120, 150, 4, 0.4);
  brush.circle(480, 470, 3, 0.4);
}
