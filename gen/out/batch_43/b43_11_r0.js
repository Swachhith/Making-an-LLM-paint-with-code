async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1ead2");
  brush.noStroke();
  // dark green sky
  brush.fill("#14543a", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 330); brush.vertex(-10, 330);
  brush.endShape(true);
  brush.fill("#d8a830", 170); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, 230); brush.vertex(610, 210); brush.vertex(610, 340); brush.vertex(-10, 340);
  brush.endShape(true);
  // sea
  brush.fill("#0e3d2e", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(-10, 330); brush.vertex(610, 330); brush.vertex(610, 400); brush.vertex(-10, 410);
  brush.endShape(true);
  // wet sand, gold
  brush.fill("#e0b040", 210); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(-10, 400); brush.vertex(300, 385); brush.vertex(610, 395); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#a8801c", 170); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(-10, 520); brush.vertex(300, 490); brush.vertex(610, 520); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  // horse and rider, small
  brush.fill("#1a2a20", 230); brush.fillBleed(0.2); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.5);
  brush.vertex(340, 440); brush.vertex(345, 415); brush.vertex(385, 410); brush.vertex(405, 395); brush.vertex(420, 405);
  brush.vertex(405, 420); brush.vertex(395, 445); brush.vertex(380, 445); brush.vertex(378, 432); brush.vertex(355, 445);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(350, 440); brush.vertex(362, 440); brush.vertex(360, 465); brush.vertex(348, 465);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(380, 440); brush.vertex(392, 440); brush.vertex(395, 465); brush.vertex(383, 465);
  brush.endShape(true);
  brush.fill("#0e1a14", 235);
  brush.beginShape(0.3);
  brush.vertex(362, 410); brush.vertex(372, 410); brush.vertex(374, 380); brush.vertex(364, 378);
  brush.endShape(true);
  brush.circle(369, 372, 8, 0.3);
  // reflection
  brush.fill("#6a5010", 150); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(340, 470); brush.vertex(420, 470); brush.vertex(410, 505); brush.vertex(350, 505);
  brush.endShape(true);
}
