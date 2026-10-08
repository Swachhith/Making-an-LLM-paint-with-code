async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef4f6");
  randomSeed(31337);
  brush.noStroke();

  // sky: two soft cloud bands, light grey-blue
  brush.fill("#a9b8c4", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, 140); brush.vertex(200, 120); brush.vertex(350, 150); brush.vertex(520, 130); brush.vertex(620, 155); brush.vertex(620, 200); brush.vertex(-20, 200);
  brush.endShape(true);
  brush.fill("#8fa3b8", 150);
  brush.beginShape(0.8);
  brush.vertex(-20, 220); brush.vertex(150, 200); brush.vertex(300, 230); brush.vertex(450, 210); brush.vertex(620, 235); brush.vertex(620, 270); brush.vertex(-20, 270);
  brush.endShape(true);

  // hill 1: pale green, far left
  brush.fill("#8cc4a8", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 340); brush.vertex(150, 310); brush.vertex(300, 340); brush.vertex(300, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // hill 2: deeper green, middle
  brush.fill("#5fa38a", 215);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 400); brush.vertex(250, 360); brush.vertex(520, 410); brush.vertex(520, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // hill 3: teal, right
  brush.fill("#4a8fa8", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 470); brush.vertex(200, 440); brush.vertex(400, 480); brush.vertex(400, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // a dark shadow strip at the foot of the hills
  brush.fill("#2e6a60", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, 600); brush.vertex(200, 590); brush.vertex(400, 605); brush.vertex(620, 595); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
}
