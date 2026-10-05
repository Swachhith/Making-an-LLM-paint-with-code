async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf7e6");
  brush.noStroke();
  // splashy sky: violet blooms and drips
  brush.fill("#8a4fc0", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(300, -20); brush.vertex(300, 150); brush.vertex(-20, 150);
  brush.endShape(true);
  brush.fill("#3a2a9a", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(-20, 200); brush.vertex(200, 180); brush.vertex(420, 220); brush.vertex(620, 190); brush.vertex(620, 400); brush.vertex(-20, 400);
  brush.endShape(true);
  brush.fill("#e08fd0", 160);
  brush.fillBleed(0.3);
  brush.circle(470, 130, 70, 0.9);
  brush.fill("#f2c85a", 150);
  brush.fillBleed(0.3);
  brush.circle(130, 250, 60, 0.9);
  // sea: turquoise with blooms
  brush.fill("#1f9a8a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, 400); brush.vertex(620, 400); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#5fb0a8", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(-20, 450); brush.vertex(620, 460); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#3a8a7a", 160);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(-20, 520); brush.vertex(620, 510); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // sand: pale, with wet streaks
  brush.fill("#f0d0a8", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, 420); brush.vertex(620, 420); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#d8c08a", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(-20, 580); brush.vertex(120, 550); brush.vertex(260, 600); brush.vertex(420, 560); brush.vertex(620, 590); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // drips of teal down the sand
  brush.fill("#1f7a6a", 170);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(470, 620); brush.vertex(476, 520); brush.vertex(488, 560); brush.vertex(482, 620);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(230, 620); brush.vertex(238, 550); brush.vertex(246, 570); brush.vertex(234, 620);
  brush.endShape(true);
  // figure, small and off-centre
  brush.fill("#3a2a9a", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(430, 470); brush.vertex(442, 470); brush.vertex(446, 482); brush.vertex(436, 482);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(428, 484); brush.vertex(438, 484); brush.vertex(440, 496); brush.vertex(430, 496);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(422, 496); brush.vertex(426, 510); brush.vertex(434, 514); brush.vertex(430, 502);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(430, 496); brush.vertex(434, 510); brush.vertex(442, 514); brush.vertex(438, 502);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(430, 484); brush.vertex(438, 484); brush.vertex(440, 470); brush.vertex(430, 470);
  brush.endShape(true);
  brush.fill("#2a1a7a", 190);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(422, 496); brush.vertex(426, 510); brush.vertex(430, 516); brush.vertex(434, 510); brush.vertex(438, 496);
  brush.endShape(true);
  brush.fill("#e08fd0", 200);
  brush.fillBleed(0.2);
  brush.circle(420, 490, 10, 0.3);
  brush.circle(438, 490, 10, 0.3);
  // splash blooms around the figure
  brush.fill("#8a4fc0", 170);
  brush.fillBleed(0.3);
  brush.circle(410, 480, 18, 0.7);
  brush.circle(450, 470, 16, 0.7);
  brush.fill("#3a2a9a", 160);
  brush.fillBleed(0.3);
  brush.circle(400, 495, 14, 0.7);
  brush.circle(460, 485, 14, 0.7);
  brush.fill("#f2c85a", 170);
  brush.fillBleed(0.3);
  brush.circle(430, 500, 12, 0.7);
}
