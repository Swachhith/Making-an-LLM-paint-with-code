async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8e2d2");
  brush.noStroke();
  // soft sky: teal-blue with a warm yellow glow near the horizon
  brush.fill("#6f8fa8", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 220); brush.vertex(420, 230); brush.vertex(200, 225); brush.vertex(-20, 230);
  brush.endShape(true);
  brush.fill("#f2d08a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, 230); brush.vertex(620, 230); brush.vertex(620, 420); brush.vertex(420, 430); brush.vertex(200, 425); brush.vertex(-20, 430);
  brush.endShape(true);
  // distant trees
  brush.fill("#4a5a6a", 190);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(30, 380); brush.vertex(80, 330); brush.vertex(120, 370); brush.vertex(160, 340); brush.vertex(200, 390); brush.vertex(250, 360); brush.vertex(300, 400); brush.vertex(350, 370); brush.vertex(390, 410); brush.vertex(440, 380); brush.vertex(480, 420); brush.vertex(530, 390); brush.vertex(570, 430); brush.vertex(620, 400); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // ground
  brush.fill("#8c7a6a", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, 430); brush.vertex(620, 430); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // bench: dark wood, low silhouette
  brush.fill("#5a4a40", 230);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.1);
  brush.vertex(260, 432); brush.vertex(340, 432); brush.vertex(340, 470); brush.vertex(260, 470);
  brush.endShape(true);
  brush.beginShape(0.1);
  brush.vertex(200, 470); brush.vertex(220, 470); brush.vertex(220, 432); brush.vertex(200, 432);
  brush.endShape(true);
  brush.beginShape(0.1);
  brush.vertex(420, 470); brush.vertex(440, 470); brush.vertex(440, 432); brush.vertex(420, 432);
  brush.endShape(true);
  // two people: back to the viewer, sitting
  // person 1, left
  brush.fill("#382a24", 235);
  brush.fillBleed(0.15);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(235, 435); brush.vertex(270, 435); brush.vertex(275, 470); brush.vertex(240, 470);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(240, 470); brush.vertex(240, 435); brush.vertex(220, 435); brush.vertex(220, 470);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(260, 470); brush.vertex(260, 435); brush.vertex(280, 435); brush.vertex(280, 470);
  brush.endShape(true);
  // person 2, right
  brush.fill("#382a24", 235);
  brush.fillBleed(0.15);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(330, 435); brush.vertex(365, 435); brush.vertex(370, 470); brush.vertex(335, 470);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(335, 470); brush.vertex(335, 435); brush.vertex(315, 435); brush.vertex(315, 470);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(350, 470); brush.vertex(350, 435); brush.vertex(370, 435); brush.vertex(370, 470);
  brush.endShape(true);
  // heads
  brush.fill("#241a18", 240);
  brush.circle(245, 415, 14, 0.4);
  brush.circle(345, 415, 14, 0.4);
  // a few fallen leaves
  brush.fill("#a87a5a", 180);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.circle(470, 520, 10, 0.6);
  brush.circle(180, 560, 8, 0.6);
  brush.circle(520, 480, 9, 0.6);
  brush.circle(290, 540, 7, 0.6);
}
