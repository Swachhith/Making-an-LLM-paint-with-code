async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e2ecee");
  brush.noStroke();
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.fill("#1a7a8a", 190);
  brush.beginShape(0.4);
  brush.vertex(-40, -40); brush.vertex(640, -40); brush.vertex(640, 450); brush.vertex(-40, 450);
  brush.endShape(true);
  brush.fill("#2a3a98", 190);
  brush.beginShape(0.8);
  brush.vertex(-40, -40); brush.vertex(640, -40); brush.vertex(640, 140); brush.vertex(300, 260); brush.vertex(-40, 100);
  brush.endShape(true);
  brush.fill("#5ab0c0", 150);
  brush.beginShape(0.8);
  brush.vertex(-40, 330); brush.vertex(640, 290); brush.vertex(640, 450); brush.vertex(-40, 450);
  brush.endShape(true);
  brush.fill("#e2ecee", 255);
  brush.beginShape(0.8);
  brush.vertex(-40, 440); brush.vertex(200, 410); brush.vertex(640, 430); brush.vertex(640, 650); brush.vertex(-40, 650);
  brush.endShape(true);
  brush.fill("#2a4a8a", 215);
  brush.beginShape(0.8);
  brush.vertex(-40, 480); brush.vertex(300, 450); brush.vertex(640, 490); brush.vertex(640, 540); brush.vertex(-40, 560);
  brush.endShape(true);
  brush.fill("#0e2046", 230);
  brush.beginShape(0.3);
  brush.vertex(410, 150); brush.vertex(460, 270); brush.vertex(435, 270); brush.vertex(520, 360); brush.vertex(480, 360); brush.vertex(570, 470); brush.vertex(250, 470); brush.vertex(340, 360); brush.vertex(300, 360); brush.vertex(380, 270); brush.vertex(360, 270);
  brush.endShape(true);
  brush.fill("#1a6878", 190);
  brush.beginShape(0.5);
  brush.vertex(410, 260); brush.vertex(560, 470); brush.vertex(400, 470);
  brush.endShape(true);
  brush.fill("#e6f2f2", 255);
  brush.beginShape(0.3);
  brush.vertex(410, 160); brush.vertex(440, 250); brush.vertex(415, 245); brush.vertex(395, 260); brush.vertex(380, 258);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(370, 290); brush.vertex(455, 290); brush.vertex(480, 345); brush.vertex(430, 330); brush.vertex(380, 345); brush.vertex(330, 350);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(330, 385); brush.vertex(480, 385); brush.vertex(520, 440); brush.vertex(430, 425); brush.vertex(300, 440);
  brush.endShape(true);
  brush.fill("#0a1830", 235);
  brush.beginShape(0.3);
  brush.vertex(395, 470); brush.vertex(425, 470); brush.vertex(425, 520); brush.vertex(395, 520);
  brush.endShape(true);
}
