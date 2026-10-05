async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0a0f24");
  brush.noStroke();
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.fill("#2a3a8a", 200);
  brush.beginShape(0.6);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 450); brush.vertex(0, 450);
  brush.endShape(true);
  brush.fill("#5a4ab0", 170);
  brush.beginShape(0.8);
  brush.vertex(0, 250); brush.vertex(600, 220); brush.vertex(600, 460); brush.vertex(0, 460);
  brush.endShape(true);
  brush.fill("#e8a860", 160);
  brush.beginShape(0.8);
  brush.vertex(0, 390); brush.vertex(600, 380); brush.vertex(600, 462); brush.vertex(0, 462);
  brush.endShape(true);
  brush.fill("#f0e0a0", 150);
  brush.beginShape(0.8);
  brush.vertex(400, 190); brush.vertex(600, 120); brush.vertex(600, 260); brush.vertex(400, 215);
  brush.endShape(true);
  brush.fill("#fff0b0", 140);
  brush.beginShape(0.8);
  brush.vertex(400, 195); brush.vertex(600, 160); brush.vertex(600, 220); brush.vertex(400, 210);
  brush.endShape(true);
  brush.fill("#05070f", 240);
  brush.beginShape(0.9);
  brush.vertex(0, 480); brush.vertex(150, 455); brush.vertex(350, 470); brush.vertex(500, 440); brush.vertex(600, 460); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  brush.fill("#1a1a30", 235);
  brush.beginShape(0.6);
  brush.vertex(375, 455); brush.vertex(395, 230); brush.vertex(415, 230); brush.vertex(435, 455);
  brush.endShape(true);
  brush.fill("#e8c870", 255);
  brush.beginShape(0.5);
  brush.vertex(385, 200); brush.vertex(425, 200); brush.vertex(425, 232); brush.vertex(385, 232);
  brush.endShape(true);
  for (let i = 0; i < 25; i++) {
    brush.fill("#f4f0d0", 220);
    brush.circle((i * 83) % 600, 20 + (i * 47) % 200, 2 + (i % 3), 0.5);
  }
}
