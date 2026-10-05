async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe6c8");
  brush.noStroke();
  // low gold light behind dark green cloud bank
  brush.fill("#e0a820", 215); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 360); brush.vertex(-10, 360);
  brush.endShape(true);
  brush.fill("#0e4a30", 225); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.9);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 110); brush.vertex(450, 150); brush.vertex(300, 100); brush.vertex(120, 160); brush.vertex(-10, 120);
  brush.endShape(true);
  brush.fill("#1c6a44", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.9);
  brush.vertex(-10, 130); brush.vertex(200, 110); brush.vertex(420, 170); brush.vertex(610, 140); brush.vertex(610, 260); brush.vertex(-10, 260);
  brush.endShape(true);
  brush.fill("#f4cf50", 200); brush.circle(470, 290, 90, 0.5);
  // sea, dark green
  brush.fill("#0c3a28", 235); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(-10, 340); brush.vertex(610, 335); brush.vertex(610, 420); brush.vertex(-10, 425);
  brush.endShape(true);
  brush.fill("#e8cc70", 180); brush.beginShape(0.8);
  brush.vertex(400, 345); brush.vertex(560, 345); brush.vertex(520, 400); brush.vertex(430, 398);
  brush.endShape(true);
  // beach: wet gold sand then drier ochre foreground
  brush.fill("#d8a830", 225); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(-10, 420); brush.vertex(300, 405); brush.vertex(610, 425); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#8a6410", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(-10, 540); brush.vertex(300, 515); brush.vertex(610, 545); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  // wet-sand reflection under the horse
  brush.fill("#2a3a18", 150); brush.fillBleed(0.35); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(190, 462); brush.vertex(280, 462); brush.vertex(272, 500); brush.vertex(198, 500);
  brush.endShape(true);
  // horse and rider, small, left of centre, mid-gallop
  brush.fill("#0e2218", 245); brush.fillBleed(0.15); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.5);
  brush.vertex(188, 440); brush.vertex(194, 418); brush.vertex(235, 412); brush.vertex(262, 395); brush.vertex(276, 408);
  brush.vertex(260, 422); brush.vertex(250, 445); brush.vertex(232, 445); brush.vertex(230, 432); brush.vertex(206, 446);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(196, 438); brush.vertex(210, 438); brush.vertex(190, 468); brush.vertex(176, 462);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(236, 438); brush.vertex(250, 438); brush.vertex(268, 468); brush.vertex(254, 470);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(214, 416); brush.vertex(226, 416); brush.vertex(228, 388); brush.vertex(216, 386);
  brush.endShape(true);
  brush.circle(222, 378, 9, 0.3);
  // tail
  brush.beginShape(0.5);
  brush.vertex(190, 424); brush.vertex(160, 430); brush.vertex(152, 456); brush.vertex(176, 440);
  brush.endShape(true);
}
