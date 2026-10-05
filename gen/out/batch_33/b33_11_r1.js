async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe3d2");
  randomSeed(111);
  brush.noStroke();
  var wash = ["#1a5ac8", "#e0206a", "#f09010", "#7a2ab8"];
  for (var i = 0; i < 12; i++) {
    brush.fill(random(wash), random(190, 235)); brush.fillBleed(0.3); brush.fillTexture(0.5, 0.5);
    brush.circle(random(-20, 400), random(20, 600), random(45, 100), 1.2);
  }
  brush.fill("#8a78a0", 190);
  brush.beginShape(1); brush.vertex(0, 300); brush.vertex(200, 230); brush.vertex(330, 90); brush.vertex(300, 300); brush.vertex(100, 420); brush.endShape(true);
  // body: dark suit, off-centre right
  brush.fill("#14102a", 245); brush.fillBleed(0.25);
  brush.beginShape(0.4); brush.vertex(405, 250); brush.vertex(500, 245); brush.vertex(530, 420); brush.vertex(545, 600); brush.vertex(400, 600); brush.vertex(395, 420); brush.endShape(true);
  brush.fill("#14102a", 240);
  brush.beginShape(0.3); brush.vertex(410, 255); brush.vertex(380, 380); brush.vertex(350, 300); brush.vertex(390, 235); brush.endShape(true);
  brush.fill("#d8c8b0", 235);
  brush.beginShape(0.2); brush.vertex(440, 260); brush.vertex(470, 260); brush.vertex(460, 360); brush.vertex(450, 360); brush.endShape(true);
  brush.fill("#b8602a", 245);
  brush.circle(455, 200, 34, 0.4);
  brush.fill("#14102a", 245);
  brush.beginShape(0.3); brush.vertex(420, 190); brush.vertex(440, 160); brush.vertex(485, 165); brush.vertex(490, 190); brush.vertex(430, 190); brush.endShape(true);
  // arm + trumpet
  brush.fill("#241a40", 245);
  brush.beginShape(0.3); brush.vertex(420, 280); brush.vertex(370, 250); brush.vertex(355, 215); brush.vertex(385, 205); brush.vertex(400, 240); brush.vertex(440, 262); brush.endShape(true);
  brush.fill("#f4b010", 255);
  brush.beginShape(0.2); brush.vertex(430, 192); brush.vertex(340, 185); brush.vertex(340, 207); brush.vertex(430, 212); brush.endShape(true);
  brush.beginShape(0.2); brush.vertex(345, 172); brush.vertex(285, 135); brush.vertex(278, 255); brush.vertex(345, 220); brush.endShape(true);
  brush.fill("#e0206a", 210);
  brush.beginShape(0.4); brush.vertex(100, 470); brush.vertex(124, 470); brush.vertex(120, 590); brush.vertex(104, 590); brush.endShape(true);
  brush.fill("#1a5ac8", 210);
  brush.beginShape(0.4); brush.vertex(240, 440); brush.vertex(262, 440); brush.vertex(258, 570); brush.vertex(244, 570); brush.endShape(true);
  brush.fill("#f09010", 210);
  brush.beginShape(0.4); brush.vertex(300, 500); brush.vertex(320, 500); brush.vertex(316, 590); brush.vertex(304, 590); brush.endShape(true);
}
