async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f0e4cc");
  brush.noStroke();
  brush.fill("#e8a860", 150); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5); brush.vertex(-10, 420); brush.vertex(610, 400); brush.vertex(610, 610); brush.vertex(-10, 610); brush.endShape(true);
  brush.fill("#d86a2a", 110);
  brush.circle(480, 180, 150, 0.7);
  // figure seated, dark
  brush.fill("#1c1210", 220); brush.fillBleed(0.15);
  brush.circle(215, 235, 24, 0.4);
  brush.beginShape(0.4); brush.vertex(190, 262); brush.vertex(245, 262); brush.vertex(262, 360); brush.vertex(180, 360); brush.endShape(true);
  brush.beginShape(0.4); brush.vertex(190, 340); brush.vertex(300, 360); brush.vertex(310, 400); brush.vertex(180, 400); brush.endShape(true);
  brush.beginShape(0.4); brush.vertex(190, 400); brush.vertex(220, 400); brush.vertex(215, 470); brush.vertex(185, 470); brush.endShape(true);
  // cello
  brush.fill("#b8501c", 230);
  brush.circle(290, 340, 52, 0.3); brush.circle(290, 400, 64, 0.3);
  brush.fill("#6a2a10", 200);
  brush.beginShape(0.2); brush.vertex(282, 300); brush.vertex(300, 300); brush.vertex(298, 190); brush.vertex(286, 190); brush.endShape(true);
  // bow arm
  brush.fill("#1c1210", 200);
  brush.beginShape(0.3); brush.vertex(235, 290); brush.vertex(260, 300); brush.vertex(330, 360); brush.vertex(325, 340); brush.endShape(true);
  // shadow
  brush.fill("#8a4a20", 140);
  brush.beginShape(0.5); brush.vertex(170, 475); brush.vertex(380, 470); brush.vertex(400, 495); brush.vertex(160, 498); brush.endShape(true);
}
