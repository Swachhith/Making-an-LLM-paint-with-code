async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef2f4");
  randomSeed(1111);
  brush.noStroke();

  // teal sky, top and bottom halves
  brush.fill("#1f8a8a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 220); brush.vertex(-20, 240);
  brush.endShape(true);
  brush.fill("#5a9fb8", 180);
  brush.beginShape(0.3);
  brush.vertex(-20, 260); brush.vertex(620, 240); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // indigo pine band along the bottom
  brush.fill("#2a3f8a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 430); brush.vertex(200, 400); brush.vertex(420, 440); brush.vertex(620, 400); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#121a5a", 200);
  brush.beginShape(0.6);
  brush.vertex(-20, 460); brush.vertex(300, 430); brush.vertex(620, 470); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // tall pines
  brush.fill("#1e2a6a", 215);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(90, 450); brush.vertex(150, 300); brush.vertex(170, 150); brush.vertex(190, 300); brush.vertex(250, 450);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(320, 450); brush.vertex(360, 350); brush.vertex(380, 250); brush.vertex(400, 360); brush.vertex(440, 450);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(470, 450); brush.vertex(510, 380); brush.vertex(530, 310); brush.vertex(550, 390); brush.vertex(590, 450);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(200, 460); brush.vertex(260, 460); brush.vertex(260, 480); brush.vertex(200, 480);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(440, 460); brush.vertex(500, 460); brush.vertex(500, 480); brush.vertex(440, 480);
  brush.endShape(true);

  // crescent moon, upper right
  brush.fill("#b8c9d8", 225);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.circle(500, 130, 115, 0.2);
  brush.fill("#4a5a8a", 200);
  brush.fillBleed(0.1);
  brush.circle(500, 130, 80, 0.2);
  brush.fill("#d9e4f0", 250);
  brush.fillBleed(0.1);
  brush.circle(500, 130, 50, 0.2);
  // a few stars
  brush.fill("#f0f4f8", 240);
  brush.circle(100, 90, 3, 0.3);
  brush.circle(260, 200, 3, 0.3);
  brush.circle(450, 30, 3, 0.3);
  brush.circle(300, 50, 3, 0.3);
}
