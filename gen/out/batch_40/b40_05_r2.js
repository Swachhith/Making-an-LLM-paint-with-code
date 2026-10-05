async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4eddc");
  brush.noStroke();
  // saturated sky
  brush.fill("#1058d8", 225); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 340); brush.vertex(-10, 340);
  brush.endShape(true);
  brush.fill("#f88a18", 170);
  brush.beginShape(0.5);
  brush.vertex(-10, 280); brush.vertex(610, 260); brush.vertex(610, 380); brush.vertex(-10, 390);
  brush.endShape(true);
  // grass
  brush.fill("#0e9030", 225); brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(-10, 450); brush.vertex(610, 430); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#08601e", 210);
  brush.beginShape(0.5);
  brush.vertex(-10, 530); brush.vertex(300, 510); brush.vertex(610, 530); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#08601e", 200);
  brush.beginShape(0.5);
  brush.vertex(-10, 530); brush.vertex(300, 510); brush.vertex(610, 530); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  // big abbey wall, close up, tall towards left; two passes
  brush.fill("#c85a18", 230); brush.fillBleed(0.2); brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.15);
  brush.vertex(30, 530); brush.vertex(30, 130); brush.vertex(80, 90); brush.vertex(120, 150); brush.vertex(170, 60); brush.vertex(230, 140);
  brush.vertex(290, 110); brush.vertex(340, 190); brush.vertex(420, 150); brush.vertex(480, 230); brush.vertex(570, 205); brush.vertex(570, 530);
  brush.endShape(true);
  brush.fill("#a03a10", 215);
  brush.beginShape(0.15);
  brush.vertex(30, 530); brush.vertex(30, 340); brush.vertex(200, 365); brush.vertex(300, 330); brush.vertex(570, 370); brush.vertex(570, 530);
  brush.endShape(true);
  brush.fill("#e8801c", 190);
  brush.beginShape(0.15);
  brush.vertex(40, 140); brush.vertex(80, 110); brush.vertex(160, 90); brush.vertex(230, 160); brush.vertex(110, 250);
  brush.endShape(true);
  // lancet windows with blue sky
  brush.fill("#1058d8", 245);
  brush.beginShape(0.5);
  brush.vertex(70, 330); brush.vertex(70, 200); brush.vertex(100, 150); brush.vertex(130, 200); brush.vertex(130, 330);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(200, 330); brush.vertex(200, 210); brush.vertex(235, 160); brush.vertex(270, 210); brush.vertex(270, 330);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(350, 340); brush.vertex(350, 260); brush.vertex(385, 220); brush.vertex(420, 260); brush.vertex(420, 340);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(470, 340); brush.vertex(470, 290); brush.vertex(500, 260); brush.vertex(530, 290); brush.vertex(530, 340);
  brush.endShape(true);
  // doorway
  brush.fill("#2a0a60", 240);
  brush.beginShape(0.5);
  brush.vertex(290, 530); brush.vertex(290, 440); brush.vertex(330, 395); brush.vertex(370, 440); brush.vertex(370, 530);
  brush.endShape(true);
  brush.fill("#2a0a60", 230);
  brush.beginShape(0.5);
  brush.vertex(290, 530); brush.vertex(290, 440); brush.vertex(330, 395); brush.vertex(370, 440); brush.vertex(370, 530);
  brush.endShape(true);
  // ivy
  brush.fill("#0a6a20", 225);
  brush.beginShape(0.5);
  brush.vertex(480, 230); brush.vertex(570, 205); brush.vertex(570, 440); brush.vertex(500, 380); brush.vertex(470, 300);
  brush.endShape(true);
  brush.fill("#0a6a20", 215);
  brush.beginShape(0.5);
  brush.vertex(480, 230); brush.vertex(570, 205); brush.vertex(570, 440); brush.vertex(500, 380); brush.vertex(470, 300);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(30, 400); brush.vertex(80, 380); brush.vertex(100, 530); brush.vertex(30, 530);
  brush.endShape(true);
  brush.fill("#0a6a20", 215);
  brush.beginShape(0.5);
  brush.vertex(30, 400); brush.vertex(80, 380); brush.vertex(100, 530); brush.vertex(30, 530);
  brush.endShape(true);
  // purple shadow at base
  brush.fill("#5a1a9a", 190);
  brush.beginShape(0.5);
  brush.vertex(30, 530); brush.vertex(570, 530); brush.vertex(600, 575); brush.vertex(60, 590);
  brush.endShape(true);
}
