async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f0dfc0");
  brush.noStroke();
  // glowing sky, bright near lantern height, deepening above
  brush.fill("#f8b020", 235); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 420); brush.vertex(-10, 420);
  brush.endShape(true);
  brush.fill("#f04a22", 215);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 170); brush.vertex(330, 220); brush.vertex(-10, 190);
  brush.endShape(true);
  brush.fill("#8a1450", 210);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 60); brush.vertex(300, 100); brush.vertex(-10, 80);
  brush.endShape(true);
  brush.fill("#f8d048", 200);
  brush.circle(320, 330, 80, 0.5);
  // distant low hills
  brush.fill("#5a1a38", 220); brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(-10, 370); brush.vertex(120, 340); brush.vertex(260, 372); brush.vertex(430, 338); brush.vertex(610, 365); brush.vertex(610, 420); brush.vertex(-10, 420);
  brush.endShape(true);
  brush.fill("#5a1a38", 210);
  brush.beginShape(0.6);
  brush.vertex(-10, 370); brush.vertex(120, 340); brush.vertex(260, 372); brush.vertex(430, 338); brush.vertex(610, 365); brush.vertex(610, 420); brush.vertex(-10, 420);
  brush.endShape(true);
  // dark ground, two passes
  brush.fill("#16121c", 235); brush.fillBleed(0.2);
  brush.beginShape(0.5);
  brush.vertex(-10, 395); brush.vertex(200, 385); brush.vertex(400, 392); brush.vertex(610, 380); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#16121c", 225);
  brush.beginShape(0.5);
  brush.vertex(-10, 395); brush.vertex(200, 385); brush.vertex(400, 392); brush.vertex(610, 380); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#0a0810", 230);
  brush.beginShape(0.5);
  brush.vertex(-10, 460); brush.vertex(200, 435); brush.vertex(350, 480); brush.vertex(610, 450); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#0a0810", 220);
  brush.beginShape(0.5);
  brush.vertex(-10, 460); brush.vertex(200, 435); brush.vertex(350, 480); brush.vertex(610, 450); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  // path
  brush.fill("#b06a2a", 190);
  brush.beginShape(0.5);
  brush.vertex(285, 398); brush.vertex(345, 398); brush.vertex(500, 610); brush.vertex(235, 610);
  brush.endShape(true);
  // figure: skirt, torso, head, shawl, two passes
  brush.fill("#120e18", 245); brush.fillBleed(0.12);
  brush.beginShape(0.2);
  brush.vertex(296, 262); brush.vertex(330, 262); brush.vertex(362, 410); brush.vertex(262, 410);
  brush.endShape(true);
  brush.fill("#120e18", 235);
  brush.beginShape(0.2);
  brush.vertex(296, 262); brush.vertex(330, 262); brush.vertex(362, 410); brush.vertex(262, 410);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(292, 215); brush.vertex(332, 215); brush.vertex(336, 275); brush.vertex(290, 275);
  brush.endShape(true);
  brush.fill("#120e18", 235);
  brush.beginShape(0.2);
  brush.vertex(292, 215); brush.vertex(332, 215); brush.vertex(336, 275); brush.vertex(290, 275);
  brush.endShape(true);
  brush.circle(312, 197, 15, 0.2);
  brush.circle(312, 197, 15, 0.2);
  brush.beginShape(0.2);
  brush.vertex(325, 225); brush.vertex(365, 245); brush.vertex(362, 275); brush.vertex(322, 255);
  brush.endShape(true);
  brush.fill("#120e18", 235);
  brush.beginShape(0.2);
  brush.vertex(325, 225); brush.vertex(365, 245); brush.vertex(362, 275); brush.vertex(322, 255);
  brush.endShape(true);
  brush.fill("#120e18", 240);
  brush.beginShape(0.2);
  brush.vertex(300, 262); brush.vertex(328, 262); brush.vertex(350, 408); brush.vertex(275, 408);
  brush.endShape(true);
  brush.fill("#120e18", 230);
  brush.beginShape(0.2);
  brush.vertex(300, 262); brush.vertex(328, 262); brush.vertex(350, 408); brush.vertex(275, 408);
  brush.endShape(true);
  // lantern
  brush.fill("#fff0a0", 250); brush.fillBleed(0.1);
  brush.circle(372, 292, 13, 0.3);
  brush.fill("#f89020", 190);
  brush.circle(372, 292, 30, 0.4);
  // lit ground spot
  brush.fill("#f89020", 150);
  brush.beginShape(0.5);
  brush.vertex(340, 405); brush.vertex(410, 405); brush.vertex(420, 440); brush.vertex(330, 440);
  brush.endShape(true);
  // tree left
  brush.fill("#120e18", 235);
  brush.beginShape(0.3);
  brush.vertex(-10, 400); brush.vertex(10, 200); brush.vertex(60, 130); brush.vertex(120, 230); brush.vertex(130, 400);
  brush.endShape(true);
  brush.fill("#120e18", 225);
  brush.beginShape(0.3);
  brush.vertex(-10, 400); brush.vertex(10, 200); brush.vertex(60, 130); brush.vertex(120, 230); brush.vertex(130, 400);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(480, 395); brush.vertex(500, 270); brush.vertex(550, 230); brush.vertex(600, 290); brush.vertex(610, 395);
  brush.endShape(true);
  brush.fill("#120e18", 225);
  brush.beginShape(0.3);
  brush.vertex(480, 395); brush.vertex(500, 270); brush.vertex(550, 230); brush.vertex(600, 290); brush.vertex(610, 395);
  brush.endShape(true);
}
