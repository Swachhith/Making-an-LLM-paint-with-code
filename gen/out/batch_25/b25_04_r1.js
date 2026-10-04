async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1f4f7");
  randomSeed(144);
  brush.noStroke();

  // sky: a clear cool gradient, clouds left as paper gaps
  brush.fill("#8cb8dc", 185);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.45);
  brush.beginShape(0.8);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 110); brush.vertex(380, 130);
  brush.vertex(200, 95); brush.vertex(-10, 140);
  brush.endShape(true);
  brush.fill("#b5d1e8", 165);
  brush.beginShape(0.8);
  brush.vertex(-10, 170); brush.vertex(250, 140); brush.vertex(610, 160); brush.vertex(610, 450); brush.vertex(-10, 450);
  brush.endShape(true);

  // distant range behind, pale
  brush.fill("#a8b4d0", 180);
  brush.fillBleed(0.28);
  brush.fillTexture(0.45, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-10, 450); brush.vertex(-10, 360); brush.vertex(80, 320); brush.vertex(160, 350);
  brush.vertex(480, 330); brush.vertex(560, 300); brush.vertex(610, 320); brush.vertex(610, 450);
  brush.endShape(true);

  // main peak, snow cap left as paper: paint the rock below the snow line
  let rock = [[70, 455], [180, 340], [230, 300], [262, 270], [285, 285], [300, 262], [322, 290], [345, 280], [380, 318], [450, 360], [560, 455]];
  brush.fill("#6f82b0", 205);
  brush.fillBleed(0.22);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.15);
  for (let p of rock) brush.vertex(p[0], p[1]);
  brush.endShape(true);
  // snow shadow, pale blue, on the upper right face
  brush.fill("#9fb4d6", 190);
  brush.fillBleed(0.15);
  brush.beginShape(0.1);
  brush.vertex(300, 190); brush.vertex(345, 245); brush.vertex(345, 280); brush.vertex(322, 290); brush.vertex(300, 262);
  brush.endShape(true);
  brush.fill("#4d5f8f", 200);
  brush.fillBleed(0.2);
  brush.beginShape(0.2);
  brush.vertex(300, 265); brush.vertex(322, 292); brush.vertex(380, 322); brush.vertex(450, 365);
  brush.vertex(560, 455); brush.vertex(320, 455);
  brush.endShape(true);
  // gullies on the lit side
  for (let i = 0; i < 3; i++) {
    let x = 200 + i * 30;
    brush.fill("#5a6d9c", 185);
    brush.fillBleed(0.2);
    brush.beginShape(0.3);
    brush.vertex(x + 50, 300 - i * 10); brush.vertex(x + 62, 305 - i * 10); brush.vertex(x + 20, 440); brush.vertex(x + 4, 440);
    brush.endShape(true);
  }

  // low horizon: meadow band
  brush.fill("#8faf98", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.45);
  brush.beginShape(0.5);
  brush.vertex(-10, 450); brush.vertex(610, 445); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#5f8a78", 190);
  brush.beginShape(0.7);
  brush.vertex(-10, 530); brush.vertex(200, 515); brush.vertex(610, 535); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  // dark fir cluster beside the hut
  for (let i = 0; i < 4; i++) {
    let x = 250 + i * 16;
    brush.fill("#2f4f4a", 215);
    brush.fillBleed(0.15);
    brush.beginShape(0);
    brush.vertex(x - 9, 472); brush.vertex(x, 438 - i * 3); brush.vertex(x + 9, 472);
    brush.endShape(true);
  }

  // red-roofed hut
  let hx = 180, hy = 476;
  brush.fill("#7a7e8f", 215);
  brush.fillBleed(0.12);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0);
  brush.vertex(hx, hy); brush.vertex(hx + 55, hy); brush.vertex(hx + 55, hy - 28); brush.vertex(hx, hy - 28);
  brush.endShape(true);
  for (let p = 0; p < 3; p++) {
    brush.fill(p == 2 ? "#8e1a1a" : "#d0302a", 225);
    brush.fillBleed(0.12);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0);
    brush.vertex(hx - 8, hy - 26); brush.vertex(hx + 12, hy - 52); brush.vertex(hx + 50, hy - 52); brush.vertex(hx + 64, hy - 26);
    brush.endShape(true);
  }
  brush.fill("#2c2f3c", 225);
  brush.circle(hx + 16, hy - 12, 5, 0.1);
  brush.circle(hx + 40, hy - 12, 5, 0.1);
}
