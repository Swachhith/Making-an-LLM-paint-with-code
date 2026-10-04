async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2f5f8");
  randomSeed(244);
  brush.noStroke();

  // sky: cerulean, with a clear gap of paper for a cloud bank
  brush.fill("#82b2da", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.9);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 90); brush.vertex(420, 120);
  brush.vertex(220, 85); brush.vertex(-10, 125);
  brush.endShape(true);
  brush.fill("#b0cfe8", 170);
  brush.beginShape(0.9);
  brush.vertex(-10, 175); brush.vertex(230, 150); brush.vertex(610, 165); brush.vertex(610, 460); brush.vertex(-10, 460);
  brush.endShape(true);
  brush.fill("#a8b4c8", 150);
  brush.fillBleed(0.3);
  brush.beginShape(1);
  brush.vertex(60, 150); brush.vertex(250, 140); brush.vertex(420, 150); brush.vertex(300, 168); brush.vertex(120, 170);
  brush.endShape(true);

  // mountain: snow above ~y 300 is paper; rock below, plus a blue shadow in the snow
  let apex = [300, 170];
  // snow shadow first (right face of the cap)
  brush.fill("#a6b8dc", 200);
  brush.fillBleed(0.15);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.1);
  brush.vertex(apex[0], apex[1]); brush.vertex(360, 240); brush.vertex(395, 290); brush.vertex(355, 300); brush.vertex(318, 275);
  brush.endShape(true);
  // rock with a jagged snow line
  brush.fill("#7084b2", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.1);
  brush.vertex(40, 460); brush.vertex(160, 350); brush.vertex(215, 300); brush.vertex(240, 262);
  brush.vertex(252, 290); brush.vertex(275, 262); brush.vertex(292, 300); brush.vertex(318, 278);
  brush.vertex(355, 305); brush.vertex(395, 292); brush.vertex(420, 330); brush.vertex(500, 390); brush.vertex(580, 460);
  brush.endShape(true);
  brush.fill("#4a5c8e", 205);
  brush.fillBleed(0.18);
  brush.beginShape(0.2);
  brush.vertex(292, 305); brush.vertex(318, 285); brush.vertex(355, 310); brush.vertex(395, 298);
  brush.vertex(420, 335); brush.vertex(500, 395); brush.vertex(575, 460); brush.vertex(320, 460);
  brush.endShape(true);
  // snowline left face ridge line of rock
  brush.fill("#8a9cc6", 185);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(240, 262); brush.vertex(252, 250); brush.vertex(275, 262); brush.vertex(255, 300);
  brush.endShape(true);

  // low horizon: a thin band of meadow and a dark treeline
  brush.fill("#90b49c", 205);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.45);
  brush.beginShape(0.5);
  brush.vertex(-10, 455); brush.vertex(610, 450); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#5c8a7a", 200);
  brush.beginShape(0.7);
  brush.vertex(-10, 530); brush.vertex(200, 518); brush.vertex(610, 540); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  for (let i = 0; i < 10; i++) {
    let x = 330 + i * 26 + random(-5, 5), h = random(25, 45);
    brush.fill("#2c4c4a", 215);
    brush.fillBleed(0.15);
    brush.beginShape(0);
    brush.vertex(x - 10, 468); brush.vertex(x, 468 - h); brush.vertex(x + 10, 468);
    brush.endShape(true);
  }

  // the red-roofed hut, alone in the meadow
  let hx = 150, hy = 482;
  brush.fill("#7c8090", 215);
  brush.fillBleed(0.12);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0);
  brush.vertex(hx, hy); brush.vertex(hx + 58, hy); brush.vertex(hx + 58, hy - 30); brush.vertex(hx, hy - 30);
  brush.endShape(true);
  for (let p = 0; p < 3; p++) {
    brush.fill(p == 2 ? "#8a1414" : "#d8302a", 225);
    brush.fillBleed(0.1);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0);
    brush.vertex(hx - 8, hy - 28); brush.vertex(hx + 14, hy - 56); brush.vertex(hx + 52, hy - 56); brush.vertex(hx + 68, hy - 28);
    brush.endShape(true);
  }
  brush.fill("#2a2d3a", 225);
  brush.circle(hx + 18, hy - 12, 5, 0.1);
  brush.circle(hx + 42, hy - 12, 5, 0.1);
  // shadow on the grass
  brush.fill("#5c7a6c", 190);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(hx + 58, hy); brush.vertex(hx + 100, hy + 6); brush.vertex(hx + 60, hy + 12); brush.vertex(hx, hy + 6);
  brush.endShape(true);
}
