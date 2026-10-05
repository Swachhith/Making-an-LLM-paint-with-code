async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2e3c8");
  brush.noStroke();
  // glowing sky
  brush.fill("#f0a028", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 400); brush.vertex(-10, 400);
  brush.endShape(true);
  brush.fill("#d8302a", 170);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 140); brush.vertex(-10, 190);
  brush.endShape(true);
  brush.fill("#7a1a4a", 160);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 40); brush.vertex(-10, 70);
  brush.endShape(true);
  // dark ground
  brush.fill("#1a1a28", 220); brush.fillBleed(0.2);
  brush.beginShape(0.5);
  brush.vertex(-10, 400); brush.vertex(150, 385); brush.vertex(350, 395); brush.vertex(610, 380); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#101018", 200);
  brush.beginShape(0.5);
  brush.vertex(-10, 450); brush.vertex(200, 430); brush.vertex(330, 470); brush.vertex(610, 440); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  // path pale
  brush.fill("#8a5a30", 150);
  brush.beginShape(0.5);
  brush.vertex(290, 395); brush.vertex(330, 395); brush.vertex(480, 610); brush.vertex(250, 610);
  brush.endShape(true);
  // figure silhouette: skirt, torso, head
  brush.fill("#14121c", 235); brush.fillBleed(0.15);
  brush.beginShape(0.2);
  brush.vertex(300, 250); brush.vertex(325, 250); brush.vertex(350, 405); brush.vertex(272, 405);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(298, 215); brush.vertex(328, 215); brush.vertex(330, 265); brush.vertex(296, 265);
  brush.endShape(true);
  brush.circle(313, 200, 14, 0.2);
  // arm holding lantern
  brush.beginShape(0.2);
  brush.vertex(325, 225); brush.vertex(355, 250); brush.vertex(352, 270); brush.vertex(322, 250);
  brush.endShape(true);
  // lantern glow
  brush.fill("#ffe27a", 240); brush.fillBleed(0.2);
  brush.circle(360, 285, 14, 0.3);
  brush.fill("#f0a028", 150);
  brush.circle(360, 285, 26, 0.4);
  // trees side
  brush.fill("#14121c", 215);
  brush.beginShape(0.3);
  brush.vertex(-10, 400); brush.vertex(30, 220); brush.vertex(70, 160); brush.vertex(110, 260); brush.vertex(120, 400);
  brush.endShape(true);
}
