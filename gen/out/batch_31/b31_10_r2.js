async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f0e8d4");
  brush.noStroke();
  brush.fill("#20b0f0", 215); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(160, 140); brush.vertex(300, 90); brush.vertex(440, 140); brush.vertex(460, 440); brush.vertex(140, 440); brush.endShape(true);
  brush.fill("#ffc820", 225);
  brush.beginShape(0.5); brush.vertex(185, 160); brush.vertex(415, 160); brush.vertex(420, 258); brush.vertex(180, 258); brush.endShape(true);
  brush.fill("#ff6a2a", 190); brush.circle(340, 215, 36, 0.5);
  brush.fill("#0a48c8", 215);
  brush.beginShape(0.4); brush.vertex(170, 258); brush.vertex(430, 258); brush.vertex(455, 440); brush.vertex(145, 440); brush.endShape(true);
  brush.fill("#0aa8b8", 200);
  brush.beginShape(0.4); brush.vertex(200, 300); brush.vertex(400, 300); brush.vertex(420, 340); brush.vertex(180, 340); brush.endShape(true);
  brush.fill("#fff6e0", 190);
  for (let i = 0; i < 7; i++) brush.circle(190 + i * 36, 330 + (i % 3) * 18, 8, 0.7);
  // cave walls with layered rock
  brush.fill("#6a2a80", 230); brush.fillBleed(0.2);
  brush.beginShape(0.4);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 610); brush.vertex(480, 610); brush.vertex(470, 400); brush.vertex(440, 150); brush.vertex(300, 88); brush.vertex(160, 150); brush.vertex(130, 400); brush.vertex(120, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#3a1450", 200);
  brush.beginShape(0.4); brush.vertex(-10, -10); brush.vertex(300, 30); brush.vertex(610, -10); brush.vertex(610, 150); brush.vertex(300, 60); brush.vertex(-10, 160); brush.endShape(true);
  brush.fill("#c0488a", 160);
  brush.beginShape(0.4); brush.vertex(-10, 300); brush.vertex(90, 280); brush.vertex(110, 560); brush.vertex(-10, 580); brush.endShape(true);
  brush.beginShape(0.4); brush.vertex(610, 300); brush.vertex(510, 280); brush.vertex(490, 560); brush.vertex(610, 580); brush.endShape(true);
  // floor and river leading toward the sea
  brush.fill("#e0a050", 200);
  brush.beginShape(0.4); brush.vertex(140, 440); brush.vertex(460, 440); brush.vertex(500, 610); brush.vertex(100, 610); brush.endShape(true);
  brush.fill("#10c8b0", 225);
  brush.beginShape(0.5); brush.vertex(270, 440); brush.vertex(335, 440); brush.vertex(450, 610); brush.vertex(150, 610); brush.endShape(true);
  brush.fill("#e8408a", 170);
  brush.beginShape(0.5); brush.vertex(292, 470); brush.vertex(318, 470); brush.vertex(350, 560); brush.vertex(268, 560); brush.endShape(true);
}
