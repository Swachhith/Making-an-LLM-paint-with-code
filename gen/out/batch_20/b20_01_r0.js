async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7e6cc");
  brush.noStroke();

  brush.fill("#f2a33a", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 470); brush.vertex(-20, 470);
  brush.endShape(true);

  brush.fill("#d9482b", 200);
  brush.fillBleed(0.28);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 150); brush.vertex(420, 190); brush.vertex(200, 170); brush.vertex(-20, 210);
  brush.endShape(true);

  brush.fill("#d9482b", 170);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(40, 260); brush.vertex(260, 240); brush.vertex(520, 270); brush.vertex(380, 290); brush.vertex(120, 285);
  brush.endShape(true);

  brush.fill("#f2a33a", 240);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.circle(360, 390, 70, 0.3);
  brush.fill("#f2a33a", 220);
  brush.circle(360, 390, 50, 0.2);

  brush.fill("#3a1c2e", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 420); brush.vertex(90, 380); brush.vertex(170, 395); brush.vertex(250, 370); brush.vertex(330, 410); brush.vertex(470, 395); brush.vertex(620, 420); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  brush.fill("#3a1c2e", 230);
  brush.fillBleed(0.22);
  brush.beginShape(0.4);
  brush.vertex(-20, 470); brush.vertex(200, 450); brush.vertex(420, 480); brush.vertex(620, 460); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  brush.fill("#3a1c2e", 245);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.3);
  brush.vertex(162, 470); brush.vertex(160, 230); brush.vertex(172, 205); brush.vertex(190, 200); brush.vertex(204, 210); brush.vertex(208, 240); brush.vertex(206, 470);
  brush.endShape(true);
  brush.beginShape(0.35);
  brush.vertex(162, 350); brush.vertex(120, 345); brush.vertex(106, 330); brush.vertex(104, 270); brush.vertex(114, 258); brush.vertex(130, 262); brush.vertex(134, 320); brush.vertex(162, 322);
  brush.endShape(true);
  brush.beginShape(0.35);
  brush.vertex(206, 320); brush.vertex(242, 318); brush.vertex(246, 250); brush.vertex(258, 240); brush.vertex(272, 248); brush.vertex(270, 330); brush.vertex(254, 348); brush.vertex(206, 350);
  brush.endShape(true);

  brush.fill("#3a1c2e", 220);
  brush.circle(470, 455, 22, 0.6);
  brush.circle(500, 460, 16, 0.6);
}
