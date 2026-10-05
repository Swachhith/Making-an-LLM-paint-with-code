async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf3e6");
  brush.noStroke();

  // wide sky, two passes of warm light
  brush.fill("#f2c27a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 250); brush.vertex(-20, 260);
  brush.endShape(true);
  brush.fill("#f9b47a", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 190); brush.vertex(620, 180); brush.vertex(620, 360); brush.vertex(-20, 370);
  brush.endShape(true);

  // meadow
  brush.fill("#e8a46a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 370); brush.vertex(620, 360); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#c88a5a", 180);
  brush.beginShape(0.6);
  brush.vertex(-20, 470); brush.vertex(620, 460); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // tree line, right side
  brush.fill("#5a7a3a", 215);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(360, 380); brush.vertex(420, 370); brush.vertex(440, 400); brush.vertex(380, 410);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(450, 390); brush.vertex(520, 375); brush.vertex(540, 405); brush.vertex(470, 415);
  brush.endShape(true);

  // cottage
  brush.fill("#d94a2a", 225);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(250, 380); brush.vertex(310, 375); brush.vertex(310, 398); brush.vertex(250, 402);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(250, 402); brush.vertex(310, 398); brush.vertex(310, 422); brush.vertex(250, 426);
  brush.endShape(true);
  brush.fill("#b02a1a", 200);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(250, 380); brush.vertex(310, 375); brush.vertex(310, 398); brush.vertex(250, 402);
  brush.endShape(true);
  brush.fill("#f2c27a", 230);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(250, 380); brush.vertex(310, 375); brush.vertex(310, 398); brush.vertex(250, 402);
  brush.endShape(true);
  brush.fill("#8a3a1a", 210);
  brush.beginShape(0.3);
  brush.vertex(252, 426); brush.vertex(308, 422); brush.vertex(308, 446); brush.vertex(252, 450);
  brush.endShape(true);
  brush.fill("#e8a46a", 220);
  brush.fillBleed(0.2);
  brush.circle(286, 355, 18, 0.2);
  brush.circle(294, 345, 12, 0.2);
  brush.circle(272, 365, 8, 0.2);

  // smoke
  brush.fill("#b08a4a", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(290, 360); brush.vertex(310, 350); brush.vertex(330, 360); brush.vertex(320, 375); brush.vertex(300, 370);
  brush.endShape(true);
}
