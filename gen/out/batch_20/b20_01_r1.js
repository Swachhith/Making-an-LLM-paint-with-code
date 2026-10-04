async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7e6cc");
  brush.noStroke();

  brush.fill("#f2a33a", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 470); brush.vertex(-20, 470);
  brush.endShape(true);

  brush.fill("#d9482b", 210);
  brush.fillBleed(0.28);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 170); brush.vertex(420, 200); brush.vertex(200, 175); brush.vertex(-20, 215);
  brush.endShape(true);
  brush.fill("#d9482b", 190);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 80); brush.vertex(-20, 110);
  brush.endShape(true);

  brush.fill("#d9482b", 180);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(20, 270); brush.vertex(260, 245); brush.vertex(540, 275); brush.vertex(380, 300); brush.vertex(100, 292);
  brush.endShape(true);

  brush.fill("#f2a33a", 250);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.circle(390, 395, 80, 0.3);
  brush.circle(390, 395, 55, 0.2);

  // distant mesas
  brush.fill("#3a1c2e", 170);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.2);
  brush.vertex(-20, 420); brush.vertex(40, 420); brush.vertex(60, 370); brush.vertex(150, 368); brush.vertex(170, 410); brush.vertex(470, 405); brush.vertex(490, 380); brush.vertex(560, 378); brush.vertex(575, 405); brush.vertex(620, 410); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  for (let p = 0; p < 2; p++) {
    brush.fill("#3a1c2e", 235);
    brush.fillBleed(0.22);
    brush.beginShape(0.4);
    brush.vertex(-20, 460); brush.vertex(200, 445); brush.vertex(420, 470); brush.vertex(620, 452); brush.vertex(620, 620); brush.vertex(-20, 620);
    brush.endShape(true);
  }

  // cactus: three passes
  for (let p = 0; p < 3; p++) {
    brush.fill("#3a1c2e", 245);
    brush.fillBleed(0.18);
    brush.fillTexture(0.3, 0.4);
    brush.beginShape(0.3);
    brush.vertex(160, 470); brush.vertex(158, 220); brush.vertex(170, 195); brush.vertex(188, 188); brush.vertex(204, 198); brush.vertex(210, 225); brush.vertex(208, 470);
    brush.endShape(true);
    brush.beginShape(0.35);
    brush.vertex(162, 355); brush.vertex(118, 350); brush.vertex(102, 335); brush.vertex(100, 265); brush.vertex(112, 252); brush.vertex(130, 256); brush.vertex(134, 320); brush.vertex(162, 322);
    brush.endShape(true);
    brush.beginShape(0.35);
    brush.vertex(206, 315); brush.vertex(242, 313); brush.vertex(246, 240); brush.vertex(258, 228); brush.vertex(274, 236); brush.vertex(272, 330); brush.vertex(256, 348); brush.vertex(206, 350);
    brush.endShape(true);
  }

  // small shrubs
  brush.fill("#3a1c2e", 235);
  brush.circle(470, 452, 24, 0.6);
  brush.circle(500, 458, 17, 0.6);
  brush.circle(60, 455, 18, 0.6);
  // birds
  brush.fill("#3a1c2e", 220);
  brush.beginShape(0.5);
  brush.vertex(470, 170); brush.vertex(485, 160); brush.vertex(495, 168); brush.vertex(505, 158); brush.vertex(520, 170); brush.vertex(495, 176);
  brush.endShape(true);
}
