async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4ece8");
  brush.noStroke();
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.fill("#d8dcc8", 190);
  brush.beginShape(0.8);
  brush.vertex(-40, 380); brush.vertex(640, 340); brush.vertex(640, 650); brush.vertex(-40, 650);
  brush.endShape(true);
  brush.fill("#f4c0cc", 170);
  brush.circle(250, 230, 300, 0.9);
  brush.fill("#6c9a68", 235);
  brush.beginShape(0.4);
  brush.vertex(300, 300); brush.vertex(345, 300); brush.vertex(360, 650); brush.vertex(285, 650);
  brush.endShape(true);
  brush.fill("#8ab482", 200);
  brush.beginShape(0.6);
  brush.vertex(350, 520); brush.vertex(500, 440); brush.vertex(560, 470); brush.vertex(440, 580); brush.vertex(350, 600);
  brush.endShape(true);
  brush.fill("#d8506c", 205);
  brush.beginShape(0.6);
  brush.vertex(300, 250); brush.vertex(150, 120); brush.vertex(60, 160); brush.vertex(70, 250); brush.vertex(180, 330); brush.vertex(300, 300);
  brush.endShape(true);
  brush.fill("#c42848", 185);
  brush.beginShape(0.6);
  brush.vertex(300, 255); brush.vertex(170, 150); brush.vertex(110, 190); brush.vertex(120, 250); brush.vertex(200, 295);
  brush.endShape(true);
  brush.fill("#e87890", 200);
  brush.beginShape(0.6);
  brush.vertex(330, 260); brush.vertex(450, 130); brush.vertex(550, 170); brush.vertex(560, 260); brush.vertex(460, 330); brush.vertex(340, 310);
  brush.endShape(true);
  brush.fill("#b82040", 190);
  brush.beginShape(0.6);
  brush.vertex(335, 270); brush.vertex(440, 170); brush.vertex(500, 200); brush.vertex(500, 260); brush.vertex(430, 305);
  brush.endShape(true);
  brush.fill("#cc3a58", 210);
  brush.beginShape(0.6);
  brush.vertex(300, 240); brush.vertex(250, 90); brush.vertex(320, 70); brush.vertex(360, 170);
  brush.endShape(true);
  brush.fill("#f2c850", 220);
  brush.beginShape(0.6);
  brush.vertex(310, 270); brush.vertex(340, 255); brush.vertex(345, 310); brush.vertex(315, 320);
  brush.endShape(true);
  brush.fill("#a89030", 220);
  brush.circle(342, 252, 9, 0.5);
}
