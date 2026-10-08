async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e9e4d6");
  brush.noStroke();
  // sky: a wide wash of slate-grey, left heavy, leaving right as paper
  brush.fill("#7a8492", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 250); brush.vertex(300, 300); brush.vertex(-20, 320);
  brush.endShape(true);
  brush.fill("#8c98a8", 150);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 120); brush.vertex(620, 100); brush.vertex(620, 350); brush.vertex(450, 370); brush.vertex(200, 340); brush.vertex(-20, 360);
  brush.endShape(true);
  // distant ridge
  brush.fill("#8a8f9a", 170);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(-20, 320); brush.vertex(150, 290); brush.vertex(300, 320); brush.vertex(450, 280); brush.vertex(620, 310); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // near mountain, left of centre
  brush.fill("#6f746a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 360); brush.vertex(200, 350); brush.vertex(220, 250); brush.vertex(150, 220); brush.vertex(110, 260); brush.vertex(60, 350); brush.vertex(-20, 360);
  brush.endShape(true);
  // the peak, left of the figure
  brush.fill("#54584a", 220);
  brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(150, 220); brush.vertex(170, 160); brush.vertex(210, 200); brush.vertex(190, 240);
  brush.endShape(true);
  // the hiker, right of centre
  brush.fill("#4a3a2e", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(400, 420); brush.vertex(430, 420); brush.vertex(435, 380); brush.vertex(405, 380);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(400, 380); brush.vertex(420, 360); brush.vertex(435, 360); brush.vertex(422, 380);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(400, 420); brush.vertex(418, 440); brush.vertex(405, 440); brush.vertex(400, 420);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(400, 380); brush.vertex(410, 370); brush.vertex(415, 380); brush.vertex(400, 380);
  brush.endShape(true);
  // head
  brush.beginShape(0.3);
  brush.vertex(400, 360); brush.vertex(418, 350); brush.vertex(425, 360); brush.vertex(415, 365);
  brush.endShape(true);
  // scarf
  brush.fill("#a88868", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.3);
  brush.vertex(400, 370); brush.vertex(420, 370); brush.vertex(430, 390); brush.vertex(405, 395);
  brush.endShape(true);
  // shadow cast on the paper
  brush.fill("#c9c6b8", 170);
  brush.fillBleed(0.2);
  brush.beginShape(0.6);
  brush.vertex(410, 440); brush.vertex(500, 430); brush.vertex(520, 460); brush.vertex(425, 470);
  brush.endShape(true);
  // a few wildflowers, small
  brush.fill("#d96a3a", 210);
  brush.fillBleed(0.2);
  brush.circle(260, 500, 4, 0.5);
  brush.circle(275, 505, 4, 0.5);
  brush.fill("#8a5a9a", 210);
  brush.circle(320, 520, 4, 0.5);
  brush.circle(335, 525, 4, 0.5);
}
