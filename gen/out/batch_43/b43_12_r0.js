async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eeeaf6");
  brush.noStroke();
  // dawn sky, blue to violet
  brush.fill("#3a3fa8", 180); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 380); brush.vertex(-10, 380);
  brush.endShape(true);
  brush.fill("#8a4fc0", 160); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, 220); brush.vertex(610, 200); brush.vertex(610, 390); brush.vertex(-10, 390);
  brush.endShape(true);
  brush.fill("#e8a8c8", 150); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.circle(120, 340, 120, 0.3);
  // water
  brush.fill("#2a2a80", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-10, 380); brush.vertex(610, 380); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#6a60c0", 150); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(40, 400); brush.vertex(300, 395); brush.vertex(280, 470); brush.vertex(60, 480);
  brush.endShape(true);
  // fisherman, right of centre, standing in the shallows
  brush.fill("#14124a", 235); brush.fillBleed(0.2); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.4);
  brush.vertex(430, 450); brush.vertex(440, 380); brush.vertex(445, 330); brush.vertex(475, 330); brush.vertex(480, 380); brush.vertex(490, 450);
  brush.endShape(true);
  brush.circle(460, 308, 14, 0.3);
  // arm and net arc
  brush.beginShape(0.4);
  brush.vertex(440, 345); brush.vertex(420, 330); brush.vertex(380, 335); brush.vertex(390, 355); brush.vertex(430, 365);
  brush.endShape(true);
  brush.fill("#5a2a98", 140); brush.fillBleed(0.3); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.8);
  brush.vertex(380, 335); brush.vertex(300, 320); brush.vertex(250, 360); brush.vertex(310, 385); brush.vertex(390, 360);
  brush.endShape(true);
  // reflection
  brush.fill("#14124a", 150); brush.fillBleed(0.35); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(435, 455); brush.vertex(490, 455); brush.vertex(480, 540); brush.vertex(445, 540);
  brush.endShape(true);
  // sun
  brush.fill("#ffd9a0", 200); brush.fillBleed(0.2); brush.fillTexture(0.3, 0.3);
  brush.circle(120, 345, 26, 0.2);
}
