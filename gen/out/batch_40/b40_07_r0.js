async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8f0ee");
  brush.noStroke();
  // big sky, low horizon
  brush.fill("#1a9a9a", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 440); brush.vertex(-10, 440);
  brush.endShape(true);
  brush.fill("#2a2a8a", 190);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 190); brush.vertex(300, 230); brush.vertex(-10, 170);
  brush.endShape(true);
  brush.fill("#5ac0c0", 160);
  brush.beginShape(0.5);
  brush.vertex(-10, 330); brush.vertex(610, 320); brush.vertex(610, 450); brush.vertex(-10, 450);
  brush.endShape(true);
  // clouds indigo
  brush.fill("#3a3aa0", 160);
  brush.beginShape(0.7);
  brush.vertex(60, 240); brush.vertex(180, 215); brush.vertex(300, 240); brush.vertex(200, 270); brush.vertex(90, 268);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(380, 280); brush.vertex(490, 255); brush.vertex(580, 285); brush.vertex(480, 305);
  brush.endShape(true);
  // marsh water
  brush.fill("#0a5a6a", 205); brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(-10, 450); brush.vertex(610, 445); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#3ab0b0", 150);
  brush.beginShape(0.5);
  brush.vertex(150, 460); brush.vertex(400, 460); brush.vertex(430, 520); brush.vertex(120, 520);
  brush.endShape(true);
  // reed banks
  brush.fill("#14284a", 220);
  brush.beginShape(0.5);
  brush.vertex(-10, 450); brush.vertex(100, 435); brush.vertex(240, 448); brush.vertex(330, 452); brush.vertex(330, 480); brush.vertex(-10, 500);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(400, 455); brush.vertex(520, 430); brush.vertex(610, 440); brush.vertex(610, 520); brush.vertex(430, 485);
  brush.endShape(true);
  // reed clumps
  brush.fill("#0e1c3a", 200);
  brush.beginShape(0.2);
  brush.vertex(40, 440); brush.vertex(50, 380); brush.vertex(70, 440);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(540, 435); brush.vertex(555, 370); brush.vertex(575, 435);
  brush.endShape(true);
  // birds
  brush.fill("#14284a", 230);
  brush.beginShape(0.4);
  brush.vertex(240, 150); brush.vertex(262, 138); brush.vertex(280, 152); brush.vertex(262, 148);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(320, 190); brush.vertex(340, 178); brush.vertex(358, 192); brush.vertex(340, 188);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(190, 200); brush.vertex(205, 192); brush.vertex(218, 202); brush.vertex(205, 200);
  brush.endShape(true);
  // pale sun low
  brush.fill("#d8f0e0", 190);
  brush.circle(300, 395, 24, 0.4);
}
