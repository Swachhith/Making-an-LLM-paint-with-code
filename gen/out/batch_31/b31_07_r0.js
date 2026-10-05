async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1ede6");
  brush.noStroke();
  brush.fill("#6a9ad0", 180); brush.fillBleed(0.3); brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5); brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 380); brush.vertex(-10, 380); brush.endShape(true);
  brush.fill("#e07a90", 150);
  brush.circle(120, 90, 80, 0.8); brush.circle(500, 160, 60, 0.8);
  brush.fill("#2a5aa0", 170);
  brush.circle(300, 40, 70, 0.8);
  // sea & rock
  brush.fill("#1a6a90", 200);
  brush.beginShape(0.4); brush.vertex(-10, 380); brush.vertex(610, 380); brush.vertex(610, 610); brush.vertex(-10, 610); brush.endShape(true);
  brush.fill("#6a8a50", 220);
  brush.beginShape(0.5); brush.vertex(130, 480); brush.vertex(170, 400); brush.vertex(330, 390); brush.vertex(470, 440); brush.vertex(480, 500); brush.endShape(true);
  // cottage
  brush.fill("#f4f0e0", 230);
  brush.beginShape(0.1); brush.vertex(200, 400); brush.vertex(330, 400); brush.vertex(330, 335); brush.vertex(200, 335); brush.endShape(true);
  brush.fill("#c8402a", 230);
  brush.beginShape(0.1); brush.vertex(190, 340); brush.vertex(265, 295); brush.vertex(342, 340); brush.endShape(true);
  brush.fill("#3a3050", 220);
  brush.beginShape(0.1); brush.vertex(255, 400); brush.vertex(280, 400); brush.vertex(280, 360); brush.vertex(255, 360); brush.endShape(true);
  // lighthouse
  brush.fill("#e8e0d0", 230);
  brush.beginShape(0.1); brush.vertex(350, 400); brush.vertex(400, 400); brush.vertex(388, 250); brush.vertex(362, 250); brush.endShape(true);
  brush.fill("#c8402a", 220);
  brush.beginShape(0.1); brush.vertex(356, 340); brush.vertex(394, 340); brush.vertex(390, 300); brush.vertex(360, 300); brush.endShape(true);
  brush.fill("#2a2a40", 220);
  brush.beginShape(0.1); brush.vertex(358, 255); brush.vertex(392, 255); brush.vertex(384, 225); brush.vertex(366, 225); brush.endShape(true);
  // drips
  brush.fill("#1a6a90", 180);
  for (let i = 0; i < 6; i++) brush.circle(60 + i * 90, 420 + (i % 3) * 40, 6, 0.8);
  brush.fill("#e07a90", 170);
  brush.circle(90, 300, 14, 0.9); brush.circle(540, 330, 10, 0.9);
}
