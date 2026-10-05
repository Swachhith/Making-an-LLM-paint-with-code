async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ece6d4");
  brush.noStroke();
  brush.fill("#a8b080", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5); brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 610); brush.vertex(-10, 610); brush.endShape(true);
  brush.fill("#6a8a48", 190);
  brush.beginShape(0.5); brush.vertex(-10, 200); brush.vertex(300, 140); brush.vertex(610, 220); brush.vertex(610, 610); brush.vertex(-10, 610); brush.endShape(true);
  brush.fill("#4a6a34", 170);
  for (let i = 0; i < 6; i++) {
    brush.beginShape(0.6); brush.vertex(-10, 220 + i * 55); brush.vertex(300, 200 + i * 55); brush.vertex(610, 230 + i * 55); brush.vertex(610, 250 + i * 55); brush.vertex(-10, 250 + i * 55); brush.endShape(true);
  }
  // figure
  brush.fill("#8a5a38", 230); brush.fillBleed(0.15);
  brush.circle(300, 250, 55, 0.3);
  brush.fill("#c8883a", 230);
  brush.beginShape(0.5); brush.vertex(190, 215); brush.vertex(300, 160); brush.vertex(410, 215); brush.vertex(360, 235); brush.vertex(240, 235); brush.endShape(true);
  brush.fill("#a04a3a", 220);
  brush.beginShape(0.4); brush.vertex(190, 610); brush.vertex(205, 360); brush.vertex(260, 310); brush.vertex(340, 310); brush.vertex(400, 360); brush.vertex(420, 610); brush.endShape(true);
  brush.fill("#6a8a48", 160);
  brush.beginShape(0.4); brush.vertex(230, 420); brush.vertex(380, 420); brush.vertex(400, 480); brush.vertex(210, 480); brush.endShape(true);
  brush.fill("#2a2018", 200);
  brush.circle(285, 245, 4, 0.3); brush.circle(318, 245, 4, 0.3);
}
