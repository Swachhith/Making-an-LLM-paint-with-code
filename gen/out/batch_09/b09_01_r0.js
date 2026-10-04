async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbeee0");
  brush.noStroke();

  // hot sky, two passes
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.fill("#f28a2e", 190);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 330); brush.vertex(-20, 350);
  brush.endShape(true);
  brush.fill("#d6245a", 170);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 140); brush.vertex(300, 180); brush.vertex(-20, 130);
  brush.endShape(true);

  // smoke plume: billowing circles drifting right
  let puffs = [[300, 190, 55], [320, 140, 70], [360, 95, 80], [420, 60, 85], [500, 40, 90], [570, 50, 70]];
  for (let p of puffs) {
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.fill("#6b4a6e", 170);
    brush.circle(p[0], p[1], p[2], 0.6);
    brush.fill("#3e2a45", 140);
    brush.circle(p[0] + 12, p[1] + 10, p[2] * 0.6, 0.5);
  }

  // farthest ridge, pale violet
  brush.fillBleed(0.25);
  brush.fillTexture(0.3, 0.4);
  brush.fill("#b06aa8", 170);
  brush.beginShape(0.5);
  brush.vertex(-20, 360); brush.vertex(80, 320); brush.vertex(170, 345); brush.vertex(230, 300);
  brush.vertex(400, 310); brush.vertex(500, 290); brush.vertex(620, 330); brush.vertex(620, 420); brush.vertex(-20, 420);
  brush.endShape(true);

  // volcano cone
  brush.fill("#8a1f2c", 210);
  brush.beginShape(0.2);
  brush.vertex(120, 430); brush.vertex(270, 210); brush.vertex(330, 205); brush.vertex(490, 430);
  brush.endShape(true);
  brush.fill("#4a0f22", 190);
  brush.beginShape(0.3);
  brush.vertex(300, 215); brush.vertex(335, 210); brush.vertex(490, 430); brush.vertex(340, 430);
  brush.endShape(true);
  // lava glow at crater and a flow
  brush.fillBleed(0.3);
  brush.fill("#ff9a1a", 230);
  brush.circle(300, 212, 20, 0.5);
  brush.fill("#ff5a1a", 200);
  brush.beginShape(0.6);
  brush.vertex(290, 215); brush.vertex(312, 215); brush.vertex(300, 290); brush.vertex(285, 360); brush.vertex(268, 360); brush.vertex(282, 280);
  brush.endShape(true);

  // middle ridge, plum
  brush.fillBleed(0.25);
  brush.fill("#5a2466", 200);
  brush.beginShape(0.5);
  brush.vertex(-20, 420); brush.vertex(90, 390); brush.vertex(200, 420); brush.vertex(320, 400);
  brush.vertex(450, 425); brush.vertex(560, 395); brush.vertex(620, 410); brush.vertex(620, 500); brush.vertex(-20, 500);
  brush.endShape(true);

  // near ridge, deep indigo, two passes
  brush.fill("#1f1a4d", 220);
  brush.beginShape(0.4);
  brush.vertex(-20, 480); brush.vertex(120, 455); brush.vertex(260, 490); brush.vertex(400, 470);
  brush.vertex(620, 500); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#120c30", 200);
  brush.beginShape(0.4);
  brush.vertex(-20, 540); brush.vertex(200, 520); brush.vertex(420, 545); brush.vertex(620, 530); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
}
