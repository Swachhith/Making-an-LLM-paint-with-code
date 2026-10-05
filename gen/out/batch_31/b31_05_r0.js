async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f5ecdc");
  brush.noStroke();
  brush.fill("#ffb020", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 300); brush.vertex(-10, 300); brush.endShape(true);
  brush.fill("#e8205a", 190);
  brush.beginShape(0.5); brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 140); brush.vertex(-10, 190); brush.endShape(true);
  brush.fill("#ff7a10", 220); brush.circle(400, 290, 80, 0.4);
  // sea
  brush.fill("#0a6aa8", 220); brush.fillBleed(0.25);
  brush.beginShape(0.4); brush.vertex(-10, 300); brush.vertex(610, 300); brush.vertex(610, 400); brush.vertex(-10, 400); brush.endShape(true);
  brush.fill("#ffc040", 180);
  brush.beginShape(0.4); brush.vertex(360, 302); brush.vertex(440, 302); brush.vertex(470, 395); brush.vertex(330, 395); brush.endShape(true);
  // sand
  brush.fill("#e8a050", 220);
  brush.beginShape(0.4); brush.vertex(-10, 400); brush.vertex(610, 390); brush.vertex(610, 610); brush.vertex(-10, 610); brush.endShape(true);
  brush.fill("#c06a30", 180);
  brush.beginShape(0.4); brush.vertex(-10, 520); brush.vertex(610, 500); brush.vertex(610, 610); brush.vertex(-10, 610); brush.endShape(true);
  // runner
  brush.fill("#101030", 230); brush.fillBleed(0.1);
  brush.circle(220, 405, 8, 0.3);
  brush.beginShape(0.3); brush.vertex(212, 414); brush.vertex(230, 414); brush.vertex(228, 445); brush.vertex(214, 445); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(214, 444); brush.vertex(228, 444); brush.vertex(240, 468); brush.vertex(222, 468); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(208, 444); brush.vertex(220, 444); brush.vertex(200, 468); brush.vertex(190, 462); brush.endShape(true);
  brush.fill("#e8205a", 160);
  brush.beginShape(0.5); brush.vertex(180, 475); brush.vertex(260, 480); brush.vertex(250, 490); brush.vertex(190, 488); brush.endShape(true);
}
