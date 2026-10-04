async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#faf0e0");
  brush.noStroke();

  // warm sky wash, leaving paper on the peak's snow
  brush.fill("#f4c490", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(0, 0);
  brush.vertex(600, 0);
  brush.vertex(600, 300);
  brush.vertex(420, 280);
  brush.vertex(0, 320);
  brush.endShape(true);

  // big peak, off-centre left
  brush.fill("#c8845a", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.2);
  brush.vertex(-40, 430);
  brush.vertex(120, 170);
  brush.vertex(210, 60);
  brush.vertex(290, 150);
  brush.vertex(360, 210);
  brush.vertex(470, 330);
  brush.vertex(600, 380);
  brush.vertex(600, 440);
  brush.endShape(true);
  // shaded right face
  brush.fill("#8a4e46", 190);
  brush.fillBleed(0.22);
  brush.beginShape(0.2);
  brush.vertex(210, 60);
  brush.vertex(290, 150);
  brush.vertex(360, 210);
  brush.vertex(470, 330);
  brush.vertex(330, 400);
  brush.vertex(240, 250);
  brush.endShape(true);
  // snow cap: left as warm paper, add pale rose shadow only
  brush.fill("#e6b0a0", 150);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(210, 70);
  brush.vertex(260, 120);
  brush.vertex(235, 160);
  brush.vertex(220, 120);
  brush.endShape(true);
  // distant ridge right
  brush.fill("#d8a07a", 160);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(380, 300);
  brush.vertex(500, 240);
  brush.vertex(600, 260);
  brush.vertex(600, 380);
  brush.endShape(true);

  // meadow
  brush.fill("#c8b04a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.5);
  brush.vertex(0, 420);
  brush.vertex(300, 400);
  brush.vertex(600, 420);
  brush.vertex(600, 600);
  brush.vertex(0, 600);
  brush.endShape(true);
  brush.fill("#8a9a3a", 170);
  brush.beginShape(0.6);
  brush.vertex(0, 500);
  brush.vertex(260, 480);
  brush.vertex(600, 520);
  brush.vertex(600, 600);
  brush.vertex(0, 600);
  brush.endShape(true);

  // hut, small, lower right
  brush.fill("#8a6a50", 220);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0);
  brush.vertex(420, 455);
  brush.vertex(420, 425);
  brush.vertex(480, 425);
  brush.vertex(480, 458);
  brush.endShape(true);
  brush.fill("#c42a1c", 235);
  brush.beginShape(0);
  brush.vertex(410, 428);
  brush.vertex(438, 398);
  brush.vertex(474, 398);
  brush.vertex(492, 428);
  brush.endShape(true);
  brush.fill("#3a2418", 220);
  brush.circle(440, 445, 5, 0.1);

  // path to hut
  brush.fill("#b08a5a", 170);
  brush.fillBleed(0.25);
  brush.beginShape(0.8);
  brush.vertex(440, 460);
  brush.vertex(460, 460);
  brush.vertex(360, 600);
  brush.vertex(300, 600);
  brush.endShape(true);
}
