async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe8d0");
  brush.noStroke();
  // tall narrow gold sky
  brush.fill("#f0c850", 190); brush.fillBleed(0.3); brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.5); brush.vertex(120, -10); brush.vertex(480, -10); brush.vertex(470, 160); brush.vertex(130, 160); brush.endShape(true);
  brush.fill("#e09a28", 160);
  brush.beginShape(0.5); brush.vertex(160, -10); brush.vertex(440, -10); brush.vertex(430, 60); brush.vertex(170, 60); brush.endShape(true);
  // forested walls
  brush.fill("#14482e", 225); brush.fillBleed(0.2);
  brush.beginShape(0.3); brush.vertex(-10, -10); brush.vertex(130, -10); brush.vertex(150, 150); brush.vertex(190, 340); brush.vertex(150, 610); brush.vertex(-10, 610); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(610, -10); brush.vertex(470, -10); brush.vertex(450, 150); brush.vertex(410, 340); brush.vertex(450, 610); brush.vertex(610, 610); brush.endShape(true);
  brush.fill("#08281a", 200);
  brush.beginShape(0.3); brush.vertex(-10, 200); brush.vertex(100, 280); brush.vertex(80, 610); brush.vertex(-10, 610); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(610, 200); brush.vertex(500, 280); brush.vertex(520, 610); brush.vertex(610, 610); brush.endShape(true);
  // glacier face rising high
  brush.fill("#a0d8d4", 215); brush.fillBleed(0.25);
  brush.beginShape(0.2); brush.vertex(170, 340); brush.vertex(190, 190); brush.vertex(270, 150); brush.vertex(340, 120); brush.vertex(430, 190); brush.vertex(430, 340); brush.endShape(true);
  brush.fill("#5aa8b0", 200);
  brush.beginShape(0.1); brush.vertex(200, 300); brush.vertex(230, 220); brush.vertex(268, 210); brush.vertex(285, 340); brush.vertex(200, 340); brush.endShape(true);
  brush.beginShape(0.1); brush.vertex(330, 280); brush.vertex(360, 200); brush.vertex(405, 210); brush.vertex(415, 340); brush.vertex(335, 340); brush.endShape(true);
  brush.fill("#e0b030", 170);
  brush.beginShape(0.3); brush.vertex(260, 150); brush.vertex(340, 125); brush.vertex(350, 175); brush.vertex(270, 190); brush.endShape(true);
  // sea with ice bits
  brush.fill("#1a6a60", 225);
  brush.beginShape(0.4); brush.vertex(150, 340); brush.vertex(450, 340); brush.vertex(480, 610); brush.vertex(120, 610); brush.endShape(true);
  brush.fill("#0a4a44", 190);
  brush.beginShape(0.4); brush.vertex(140, 470); brush.vertex(460, 460); brush.vertex(480, 610); brush.vertex(120, 610); brush.endShape(true);
  brush.fill("#e8b838", 175);
  brush.beginShape(0.4); brush.vertex(230, 400); brush.vertex(380, 400); brush.vertex(400, 450); brush.vertex(220, 450); brush.endShape(true);
  brush.fill("#d4ecec", 210);
  brush.circle(250, 380, 18, 0.7); brush.circle(340, 410, 14, 0.7); brush.circle(300, 520, 22, 0.7); brush.circle(380, 560, 12, 0.7);
}
