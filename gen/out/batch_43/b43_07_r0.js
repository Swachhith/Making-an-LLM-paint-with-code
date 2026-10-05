async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0d1224");
  brush.noStroke();
  // glowing sky bands
  brush.fill("#2a4a9a", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 470); brush.vertex(-10, 470);
  brush.endShape(true);
  brush.fill("#4f7ad0", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, 120); brush.vertex(610, 100); brush.vertex(610, 470); brush.vertex(-10, 470);
  brush.endShape(true);
  brush.fill("#8fb4ee", 170); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.circle(400, 190, 150, 0.2);
  // moon glow (moon stays pale)
  brush.fill("#f4e9b8", 220); brush.fillBleed(0.2); brush.fillTexture(0.3, 0.3);
  brush.circle(400, 190, 42, 0.1);
  // far range
  brush.fill("#1e2c66", 220); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-10, 460); brush.vertex(60, 400); brush.vertex(130, 440); brush.vertex(230, 370); brush.vertex(320, 430);
  brush.vertex(420, 380); brush.vertex(520, 430); brush.vertex(610, 390); brush.vertex(610, 520); brush.vertex(-10, 520);
  brush.endShape(true);
  // near range
  brush.fill("#0a0f2a", 240); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-10, 520); brush.vertex(90, 465); brush.vertex(190, 505); brush.vertex(300, 450); brush.vertex(400, 510);
  brush.vertex(500, 470); brush.vertex(610, 515); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  // snow lit edges
  brush.fill("#9cb4e0", 190); brush.fillBleed(0.3); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(215, 390); brush.vertex(230, 370); brush.vertex(250, 395);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(405, 395); brush.vertex(420, 380); brush.vertex(442, 400);
  brush.endShape(true);
}
