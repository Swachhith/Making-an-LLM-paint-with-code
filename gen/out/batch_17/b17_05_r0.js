async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1f4f7");
  brush.noStroke();
  // cool pale sky with gradient
  brush.fill("#8fb4d8", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 260);
  brush.vertex(-20, 280);
  brush.endShape(true);
  brush.fill("#c7d9ea", 150);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 200);
  brush.vertex(620, 180);
  brush.vertex(620, 440);
  brush.vertex(-20, 440);
  brush.endShape(true);
  // far mesas, lilac
  brush.fill("#a79ec2", 190);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.1);
  brush.vertex(-20, 440);
  brush.vertex(-20, 395);
  brush.vertex(40, 392);
  brush.vertex(55, 370);
  brush.vertex(150, 368);
  brush.vertex(165, 395);
  brush.vertex(330, 400);
  brush.vertex(345, 382);
  brush.vertex(380, 380);
  brush.vertex(392, 402);
  brush.vertex(620, 405);
  brush.vertex(620, 440);
  brush.endShape(true);
  // near jagged mesa, rose-sand with cool shadow
  brush.fill("#c99a8e", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.05);
  brush.vertex(300, 450);
  brush.vertex(330, 395);
  brush.vertex(345, 330);
  brush.vertex(372, 322);
  brush.vertex(390, 300);
  brush.vertex(470, 298);
  brush.vertex(480, 318);
  brush.vertex(510, 320);
  brush.vertex(525, 360);
  brush.vertex(560, 380);
  brush.vertex(580, 450);
  brush.endShape(true);
  brush.fill("#7f7aa8", 190);
  brush.beginShape(0.05);
  brush.vertex(470, 298);
  brush.vertex(480, 318);
  brush.vertex(510, 320);
  brush.vertex(525, 360);
  brush.vertex(560, 380);
  brush.vertex(580, 450);
  brush.vertex(500, 450);
  brush.vertex(490, 360);
  brush.endShape(true);
  // butte on left
  brush.fill("#bb8f86", 200);
  brush.beginShape(0.05);
  brush.vertex(60, 450);
  brush.vertex(85, 405);
  brush.vertex(95, 360);
  brush.vertex(135, 355);
  brush.vertex(145, 405);
  brush.vertex(175, 450);
  brush.endShape(true);
  // desert floor, low horizon
  brush.fill("#d8c7b8", 190);
  brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(-20, 445);
  brush.vertex(620, 445);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#98a8c0", 160);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(-20, 520);
  brush.vertex(250, 500);
  brush.vertex(620, 530);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
}
