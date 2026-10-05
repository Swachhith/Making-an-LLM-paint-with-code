async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f0e8dc");
  brush.noStroke();
  brush.fillBleed(0.28);
  brush.fillTexture(0.4, 0.4);
  brush.fill("#e8884a", 190);
  brush.beginShape(0.6);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 380); brush.vertex(0, 380);
  brush.endShape(true);
  brush.fill("#f8d078", 190);
  brush.beginShape(0.6);
  brush.vertex(0, 230); brush.vertex(600, 230); brush.vertex(600, 380); brush.vertex(0, 380);
  brush.endShape(true);
  brush.fill("#7a3a5a", 170);
  brush.beginShape(0.6);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 120); brush.vertex(0, 110);
  brush.endShape(true);
  // wide dark plain
  brush.fill("#2a1a2a", 215);
  brush.beginShape(0.5);
  brush.vertex(0, 600); brush.vertex(0, 400); brush.vertex(200, 385); brush.vertex(600, 395); brush.vertex(600, 600);
  brush.endShape(true);
  brush.fill("#4a2a3a", 180);
  brush.beginShape(0.5);
  brush.vertex(0, 450); brush.vertex(600, 440); brush.vertex(600, 520); brush.vertex(0, 540);
  brush.endShape(true);
  // small alley cluster centre-left
  brush.fill("#120a14", 235);
  brush.beginShape(0.2);
  brush.vertex(235, 400); brush.vertex(235, 345); brush.vertex(260, 322); brush.vertex(285, 345); brush.vertex(285, 400);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(325, 400); brush.vertex(325, 335); brush.vertex(350, 315); brush.vertex(378, 340); brush.vertex(378, 400);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(285, 400); brush.vertex(292, 360); brush.vertex(318, 360); brush.vertex(325, 400);
  brush.endShape(true);
  brush.fill("#f8d078", 220);
  brush.circle(260, 360, 5, 0.3);
  brush.circle(350, 355, 5, 0.3);
  // path leading to alley
  brush.fill("#7a4a4a", 170);
  brush.beginShape(0.4);
  brush.vertex(295, 402); brush.vertex(315, 402); brush.vertex(420, 600); brush.vertex(150, 600);
  brush.endShape(true);
}
