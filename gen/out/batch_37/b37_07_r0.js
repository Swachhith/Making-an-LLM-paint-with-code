async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8f0f0");
  brush.noStroke();
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.fill("#2a8a9a", 150);
  brush.beginShape(0.5);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 380); brush.vertex(0, 380);
  brush.endShape(true);
  brush.fill("#3a4a9a", 120);
  brush.beginShape(0.8);
  brush.vertex(0, 100); brush.vertex(600, 40); brush.vertex(600, 300); brush.vertex(0, 360);
  brush.endShape(true);
  brush.fill("#2a4a8a", 190);
  brush.beginShape(0.9);
  brush.vertex(0, 400); brush.vertex(200, 380); brush.vertex(600, 410); brush.vertex(600, 470); brush.vertex(0, 480);
  brush.endShape(true);
  brush.fill("#14284e", 220);
  brush.beginShape(0.6);
  brush.vertex(410, 200); brush.vertex(470, 340); brush.vertex(520, 410); brush.vertex(330, 410); brush.vertex(380, 340);
  brush.endShape(true);
  brush.fill("#1a6a7a", 210);
  brush.beginShape(0.6);
  brush.vertex(425, 290); brush.vertex(490, 390); brush.vertex(350, 395);
  brush.endShape(true);
  brush.fill("#e8f4f4", 255);
  brush.beginShape(0.6);
  brush.vertex(410, 215); brush.vertex(440, 300); brush.vertex(395, 290);
  brush.endShape(true);
  brush.fill("#14284e", 230);
  brush.beginShape(0.5);
  brush.vertex(410, 400); brush.vertex(440, 400); brush.vertex(440, 440); brush.vertex(410, 440);
  brush.endShape(true);
  brush.fill("#1a3a6a", 150);
  brush.beginShape(0.7);
  brush.vertex(300, 430); brush.vertex(560, 430); brush.vertex(520, 460); brush.vertex(330, 460);
  brush.endShape(true);
}
