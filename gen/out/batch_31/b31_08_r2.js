async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2e6cf");
  brush.noStroke();
  brush.fill("#e8b068", 150); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5); brush.vertex(-10, 440); brush.vertex(610, 420); brush.vertex(610, 610); brush.vertex(-10, 610); brush.endShape(true);
  brush.fill("#d8702a", 170); brush.circle(470, 170, 170, 0.8);
  brush.fill("#e8a050", 150); brush.circle(500, 200, 100, 0.8);
  // chair
  brush.fill("#4a2410", 190);
  brush.beginShape(0.2); brush.vertex(140, 440); brush.vertex(160, 440); brush.vertex(162, 330); brush.vertex(142, 330); brush.endShape(true);
  // seated figure
  brush.fill("#1c1210", 225); brush.fillBleed(0.15);
  brush.circle(230, 230, 26, 0.4);
  brush.beginShape(0.4); brush.vertex(200, 258); brush.vertex(258, 258); brush.vertex(268, 340); brush.vertex(188, 340); brush.endShape(true);
  brush.beginShape(0.4); brush.vertex(188, 330); brush.vertex(290, 345); brush.vertex(300, 385); brush.vertex(185, 385); brush.endShape(true);
  brush.beginShape(0.4); brush.vertex(196, 380); brush.vertex(226, 380); brush.vertex(224, 465); brush.vertex(194, 465); brush.endShape(true);
  brush.beginShape(0.4); brush.vertex(268, 380); brush.vertex(298, 380); brush.vertex(300, 465); brush.vertex(270, 465); brush.endShape(true);
  // cello body: two lobes
  brush.fill("#c0501a", 230); brush.fillBleed(0.2);
  brush.circle(320, 345, 40, 0.3); brush.circle(322, 410, 52, 0.3);
  brush.fill("#8a3010", 190);
  brush.circle(324, 412, 30, 0.3);
  brush.fill("#5a2410", 210);
  brush.beginShape(0.2); brush.vertex(312, 320); brush.vertex(330, 320); brush.vertex(330, 150); brush.vertex(316, 150); brush.endShape(true);
  brush.fill("#1c1210", 210);
  brush.beginShape(0.3); brush.vertex(250, 280); brush.vertex(280, 300); brush.vertex(395, 380); brush.vertex(380, 355); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(262, 262); brush.vertex(300, 250); brush.vertex(325, 240); brush.vertex(310, 270); brush.endShape(true);
  brush.fill("#8a4a20", 150);
  brush.beginShape(0.5); brush.vertex(150, 470); brush.vertex(420, 466); brush.vertex(440, 494); brush.vertex(140, 498); brush.endShape(true);
}
