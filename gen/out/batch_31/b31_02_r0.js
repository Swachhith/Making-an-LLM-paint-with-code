async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe3d3");
  brush.noStroke();
  // sky glow
  brush.fill("#e8892a", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 300); brush.vertex(-10, 300);
  brush.endShape(true);
  brush.fill("#d4552a", 180);
  brush.circle(300, 120, 120, 0.5);
  // volcano
  brush.fill("#2a1b1a", 220); brush.fillBleed(0.2);
  brush.beginShape(0.2);
  brush.vertex(60, 300); brush.vertex(240, 140); brush.vertex(275, 130); brush.vertex(330, 128); brush.vertex(365, 140); brush.vertex(540, 300);
  brush.endShape(true);
  brush.fill("#14100f", 200);
  brush.beginShape(0.2);
  brush.vertex(200, 300); brush.vertex(280, 150); brush.vertex(340, 140); brush.vertex(480, 300);
  brush.endShape(true);
  // lava
  brush.fill("#e0402a", 230); brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(285, 132); brush.vertex(320, 130); brush.vertex(335, 200); brush.vertex(350, 300); brush.vertex(310, 300); brush.vertex(300, 210);
  brush.endShape(true);
  brush.fill("#ffb030", 210);
  brush.circle(305, 128, 22, 0.4);
  // water
  brush.fill("#2a1b1a", 180); brush.fillBleed(0.3);
  brush.beginShape(0.4);
  brush.vertex(-10, 300); brush.vertex(610, 300); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  // reflection
  brush.fill("#14100f", 200);
  brush.beginShape(0.4);
  brush.vertex(60, 305); brush.vertex(240, 460); brush.vertex(300, 480); brush.vertex(365, 462); brush.vertex(540, 305); brush.vertex(450, 305); brush.vertex(300, 430); brush.vertex(150, 305);
  brush.endShape(true);
  brush.fill("#e0402a", 200);
  brush.beginShape(0.5);
  brush.vertex(300, 305); brush.vertex(345, 305); brush.vertex(330, 400); brush.vertex(345, 470); brush.vertex(300, 470); brush.vertex(310, 400);
  brush.endShape(true);
  brush.fill("#e8892a", 160);
  brush.beginShape(0.4);
  brush.vertex(-10, 520); brush.vertex(610, 530); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
}
