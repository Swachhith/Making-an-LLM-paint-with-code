async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#12141c");
  brush.noStroke();
  // night sky washes
  brush.fill("#2a3a6a", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 420); brush.vertex(-10, 420);
  brush.endShape(true);
  brush.fill("#4a4a8a", 170);
  brush.beginShape(0.6);
  brush.vertex(-10, 200); brush.vertex(610, 180); brush.vertex(610, 420); brush.vertex(-10, 420);
  brush.endShape(true);
  brush.fill("#8a5a5a", 150);
  brush.beginShape(0.6);
  brush.vertex(-10, 340); brush.vertex(610, 330); brush.vertex(610, 430); brush.vertex(-10, 430);
  brush.endShape(true);
  // sea
  brush.fill("#1c2a4a", 215); brush.fillBleed(0.25);
  brush.beginShape(0.4);
  brush.vertex(-10, 430); brush.vertex(610, 430); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#3a4a7a", 150);
  brush.beginShape(0.5);
  brush.vertex(-10, 460); brush.vertex(300, 450); brush.vertex(310, 480); brush.vertex(-10, 495);
  brush.endShape(true);
  // rocky island
  brush.fill("#080a10", 235); brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(100, 440); brush.vertex(190, 385); brush.vertex(260, 350); brush.vertex(380, 345); brush.vertex(470, 380); brush.vertex(520, 440); brush.vertex(540, 470); brush.vertex(70, 475);
  brush.endShape(true);
  // castle off-centre right
  brush.beginShape(0.1);
  brush.vertex(300, 360); brush.vertex(300, 270); brush.vertex(325, 270); brush.vertex(325, 255); brush.vertex(345, 255); brush.vertex(345, 270);
  brush.vertex(370, 270); brush.vertex(370, 190); brush.vertex(360, 190); brush.vertex(385, 150); brush.vertex(410, 190); brush.vertex(400, 190);
  brush.vertex(400, 270); brush.vertex(440, 270); brush.vertex(440, 360);
  brush.endShape(true);
  brush.beginShape(0.1);
  brush.vertex(250, 365); brush.vertex(250, 300); brush.vertex(265, 300); brush.vertex(275, 280); brush.vertex(290, 300); brush.vertex(300, 300); brush.vertex(300, 365);
  brush.endShape(true);
  // warm lights
  brush.fill("#f8b040", 240); brush.fillBleed(0.15);
  brush.circle(385, 230, 5, 0.2);
  brush.circle(335, 310, 4, 0.2);
  brush.circle(410, 310, 4, 0.2);
  brush.circle(275, 325, 3, 0.2);
  brush.fill("#e8802a", 150);
  brush.circle(385, 230, 12, 0.3);
  // reflections of lights
  brush.fill("#f8b040", 170);
  brush.beginShape(0.5);
  brush.vertex(380, 485); brush.vertex(405, 485); brush.vertex(410, 540); brush.vertex(375, 540);
  brush.endShape(true);
  // moon pale
  brush.fill("#f0e8d0", 220);
  brush.circle(120, 120, 18, 0.3);
}
