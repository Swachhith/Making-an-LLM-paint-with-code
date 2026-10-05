async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#10121a");
  brush.noStroke();
  // sky washes, lighter near horizon so silhouette reads
  brush.fill("#3a5aa8", 235); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 430); brush.vertex(-10, 430);
  brush.endShape(true);
  brush.fill("#8070d0", 215);
  brush.beginShape(0.6);
  brush.vertex(-10, 200); brush.vertex(610, 180); brush.vertex(610, 430); brush.vertex(-10, 430);
  brush.endShape(true);
  brush.fill("#f0a078", 210);
  brush.beginShape(0.6);
  brush.vertex(-10, 320); brush.vertex(610, 305); brush.vertex(610, 435); brush.vertex(-10, 435);
  brush.endShape(true);
  brush.fill("#f0b078", 190);
  brush.beginShape(0.6);
  brush.vertex(100, 360); brush.vertex(550, 350); brush.vertex(550, 435); brush.vertex(100, 435);
  brush.endShape(true);
  // cloud streaks
  brush.fill("#22286a", 200);
  brush.beginShape(0.7);
  brush.vertex(30, 100); brush.vertex(220, 80); brush.vertex(330, 110); brush.vertex(150, 140);
  brush.endShape(true);
  brush.fill("#22286a", 190);
  brush.beginShape(0.7);
  brush.vertex(30, 100); brush.vertex(220, 80); brush.vertex(330, 110); brush.vertex(150, 140);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(380, 190); brush.vertex(520, 170); brush.vertex(600, 200); brush.vertex(460, 225);
  brush.endShape(true);
  brush.fill("#22286a", 190);
  brush.beginShape(0.7);
  brush.vertex(380, 190); brush.vertex(520, 170); brush.vertex(600, 200); brush.vertex(460, 225);
  brush.endShape(true);
  // sea
  brush.fill("#1c2c5c", 240); brush.fillBleed(0.25);
  brush.beginShape(0.4);
  brush.vertex(-10, 430); brush.vertex(610, 430); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#1c2c5c", 230);
  brush.beginShape(0.4);
  brush.vertex(-10, 430); brush.vertex(610, 430); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#f0a078", 170);
  brush.beginShape(0.5);
  brush.vertex(150, 440); brush.vertex(500, 440); brush.vertex(520, 480); brush.vertex(130, 480);
  brush.endShape(true);
  brush.fill("#101a3c", 215);
  brush.beginShape(0.5);
  brush.vertex(-10, 500); brush.vertex(300, 490); brush.vertex(310, 520); brush.vertex(-10, 540);
  brush.endShape(true);
  brush.fill("#101a3c", 205);
  brush.beginShape(0.5);
  brush.vertex(-10, 500); brush.vertex(300, 490); brush.vertex(310, 520); brush.vertex(-10, 540);
  brush.endShape(true);
  // rocky island
  brush.fill("#06080e", 250); brush.fillBleed(0.15);
  brush.beginShape(0.3);
  brush.vertex(80, 445); brush.vertex(180, 390); brush.vertex(250, 350); brush.vertex(380, 345); brush.vertex(480, 385); brush.vertex(540, 445); brush.vertex(560, 480); brush.vertex(60, 485);
  brush.endShape(true);
  brush.fill("#06080e", 240);
  brush.beginShape(0.3);
  brush.vertex(80, 445); brush.vertex(180, 390); brush.vertex(250, 350); brush.vertex(380, 345); brush.vertex(480, 385); brush.vertex(540, 445); brush.vertex(560, 480); brush.vertex(60, 485);
  brush.endShape(true);
  // castle, off-centre right, two passes
  brush.fill("#06080e", 250);
  brush.beginShape(0.1);
  brush.vertex(300, 365); brush.vertex(300, 265); brush.vertex(325, 265); brush.vertex(325, 248); brush.vertex(345, 248); brush.vertex(345, 265);
  brush.vertex(368, 265); brush.vertex(368, 185); brush.vertex(356, 185); brush.vertex(385, 140); brush.vertex(414, 185); brush.vertex(402, 185);
  brush.vertex(402, 265); brush.vertex(445, 265); brush.vertex(445, 365);
  brush.endShape(true);
  brush.fill("#06080e", 240);
  brush.beginShape(0.1);
  brush.vertex(300, 365); brush.vertex(300, 265); brush.vertex(325, 265); brush.vertex(325, 248); brush.vertex(345, 248); brush.vertex(345, 265);
  brush.vertex(368, 265); brush.vertex(368, 185); brush.vertex(356, 185); brush.vertex(385, 140); brush.vertex(414, 185); brush.vertex(402, 185);
  brush.vertex(402, 265); brush.vertex(445, 265); brush.vertex(445, 365);
  brush.endShape(true);
  brush.beginShape(0.1);
  brush.vertex(245, 368); brush.vertex(245, 295); brush.vertex(262, 295); brush.vertex(275, 270); brush.vertex(290, 295); brush.vertex(305, 295); brush.vertex(305, 368);
  brush.endShape(true);
  brush.fill("#06080e", 240);
  brush.beginShape(0.1);
  brush.vertex(245, 368); brush.vertex(245, 295); brush.vertex(262, 295); brush.vertex(275, 270); brush.vertex(290, 295); brush.vertex(305, 295); brush.vertex(305, 368);
  brush.endShape(true);
  brush.beginShape(0.1);
  brush.vertex(300, 365); brush.vertex(300, 268); brush.vertex(445, 268); brush.vertex(445, 365);
  brush.endShape(true);
  brush.fill("#06080e", 240);
  brush.beginShape(0.1);
  brush.vertex(300, 365); brush.vertex(300, 268); brush.vertex(445, 268); brush.vertex(445, 365);
  brush.endShape(true);
  // warm lights
  brush.fill("#f8b830", 250); brush.fillBleed(0.1);
  brush.circle(385, 225, 6, 0.2);
  brush.circle(335, 308, 5, 0.2);
  brush.circle(415, 308, 5, 0.2);
  brush.circle(275, 325, 4, 0.2);
  brush.circle(360, 330, 4, 0.2);
  brush.fill("#f08818", 200);
  brush.circle(385, 225, 16, 0.3);
  brush.fill("#f8b830", 195);
  brush.beginShape(0.5);
  brush.vertex(375, 495); brush.vertex(410, 495); brush.vertex(418, 560); brush.vertex(368, 560);
  brush.endShape(true);
  // moon
  brush.fill("#fff0d0", 245);
  brush.circle(110, 120, 20, 0.3);
}
