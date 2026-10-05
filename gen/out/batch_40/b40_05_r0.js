async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f5efe0");
  brush.noStroke();
  // saturated sky
  brush.fill("#2a6ad8", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 330); brush.vertex(-10, 330);
  brush.endShape(true);
  brush.fill("#f09030", 150);
  brush.beginShape(0.5);
  brush.vertex(-10, 250); brush.vertex(610, 230); brush.vertex(610, 360); brush.vertex(-10, 370);
  brush.endShape(true);
  // grass ground
  brush.fill("#1a9a3a", 210); brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(-10, 470); brush.vertex(610, 450); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  // abbey west wall with broken top and arched windows
  brush.fill("#b8703a", 215); brush.fillBleed(0.2); brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.2);
  brush.vertex(70, 520); brush.vertex(70, 150); brush.vertex(120, 120); brush.vertex(150, 180); brush.vertex(190, 90);
  brush.vertex(240, 150); brush.vertex(300, 130); brush.vertex(350, 200); brush.vertex(420, 170); brush.vertex(470, 240);
  brush.vertex(530, 220); brush.vertex(530, 520);
  brush.endShape(true);
  brush.fill("#8a4a28", 190);
  brush.beginShape(0.2);
  brush.vertex(70, 520); brush.vertex(70, 380); brush.vertex(200, 400); brush.vertex(300, 360); brush.vertex(530, 400); brush.vertex(530, 520);
  brush.endShape(true);
  // arched windows (sky shows through: blue)
  brush.fill("#2a6ad8", 215);
  brush.beginShape(0.5);
  brush.vertex(110, 330); brush.vertex(110, 220); brush.vertex(130, 190); brush.vertex(155, 220); brush.vertex(155, 330);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(230, 330); brush.vertex(230, 220); brush.vertex(255, 185); brush.vertex(280, 220); brush.vertex(280, 330);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(360, 330); brush.vertex(360, 260); brush.vertex(385, 230); brush.vertex(410, 260); brush.vertex(410, 330);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(450, 330); brush.vertex(450, 285); brush.vertex(470, 265); brush.vertex(490, 285); brush.vertex(490, 330);
  brush.endShape(true);
  // doorway shadow
  brush.fill("#2a1850", 220);
  brush.beginShape(0.4);
  brush.vertex(300, 520); brush.vertex(300, 430); brush.vertex(330, 400); brush.vertex(360, 430); brush.vertex(360, 520);
  brush.endShape(true);
  // shadow and ivy
  brush.fill("#0f6a2a", 200);
  brush.beginShape(0.5);
  brush.vertex(470, 240); brush.vertex(530, 220); brush.vertex(530, 420); brush.vertex(490, 360);
  brush.endShape(true);
  brush.fill("#6a1a8a", 150);
  brush.beginShape(0.5);
  brush.vertex(70, 520); brush.vertex(530, 520); brush.vertex(560, 560); brush.vertex(100, 570);
  brush.endShape(true);
}
