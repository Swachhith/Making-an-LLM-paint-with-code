async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2eee6");
  brush.noStroke();
  brush.fill("#7a98c8", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 380); brush.vertex(-10, 380); brush.endShape(true);
  brush.fill("#f0c890", 150);
  brush.circle(500, 90, 80, 0.8);
  brush.fill("#3a4a80", 200);
  brush.beginShape(0.1); brush.vertex(-10, 390); brush.vertex(100, 250); brush.vertex(180, 320); brush.vertex(290, 190); brush.vertex(400, 330); brush.vertex(490, 250); brush.vertex(610, 360); brush.vertex(610, 420); brush.vertex(-10, 420); brush.endShape(true);
  brush.fill("#f4f0ec", 190);
  brush.beginShape(0.1); brush.vertex(262, 235); brush.vertex(290, 192); brush.vertex(318, 238); brush.vertex(290, 226); brush.endShape(true);
  brush.fill("#c8d4e8", 170);
  brush.beginShape(0.5); brush.vertex(-10, 470); brush.vertex(300, 440); brush.vertex(610, 470); brush.vertex(610, 560); brush.vertex(-10, 560); brush.endShape(true);
  // deep slopes
  brush.fill("#0e1230", 235); brush.fillBleed(0.2);
  brush.beginShape(0.2); brush.vertex(-10, 610); brush.vertex(-10, 340); brush.vertex(110, 360); brush.vertex(210, 450); brush.vertex(290, 610); brush.endShape(true);
  brush.beginShape(0.2); brush.vertex(610, 610); brush.vertex(610, 300); brush.vertex(500, 350); brush.vertex(420, 450); brush.vertex(360, 610); brush.endShape(true);
  brush.fill("#2a2c5a", 190);
  brush.beginShape(0.2); brush.vertex(60, 610); brush.vertex(80, 460); brush.vertex(200, 520); brush.vertex(240, 610); brush.endShape(true);
  // towers and cable
  brush.fill("#0a0e24", 235);
  brush.beginShape(0.1); brush.vertex(80, 360); brush.vertex(102, 360); brush.vertex(98, 250); brush.vertex(84, 250); brush.endShape(true);
  brush.beginShape(0.1); brush.vertex(500, 320); brush.vertex(520, 320); brush.vertex(516, 160); brush.vertex(504, 160); brush.endShape(true);
  brush.beginShape(0.5); brush.vertex(86, 256); brush.vertex(504, 164); brush.vertex(504, 182); brush.vertex(88, 276); brush.endShape(true);
  // cabin
  brush.fill("#e03a22", 240);
  brush.beginShape(0.2); brush.vertex(270, 224); brush.vertex(340, 206); brush.vertex(346, 262); brush.vertex(276, 280); brush.endShape(true);
  brush.fill("#fbe080", 215);
  brush.beginShape(0.2); brush.vertex(284, 238); brush.vertex(330, 226); brush.vertex(332, 250); brush.vertex(286, 262); brush.endShape(true);
  brush.fill("#0a0e24", 235);
  brush.beginShape(0.2); brush.vertex(300, 218); brush.vertex(316, 214); brush.vertex(316, 196); brush.vertex(303, 199); brush.endShape(true);
}
