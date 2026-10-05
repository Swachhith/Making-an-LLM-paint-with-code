async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2eee6");
  brush.noStroke();
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.fill("#1e7ab0", 190);
  brush.beginShape(0.4);
  brush.vertex(30, 120); brush.vertex(570, 120); brush.vertex(570, 440); brush.vertex(30, 440);
  brush.endShape(true);
  brush.fill("#c8281c", 235);
  brush.beginShape(0.5);
  brush.vertex(0, 400); brush.vertex(600, 400); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  brush.fill("#e8a820", 230);
  brush.beginShape(0.5);
  brush.vertex(0, 60); brush.vertex(600, 60); brush.vertex(600, 120); brush.vertex(0, 120);
  brush.endShape(true);
  brush.fill("#f5e090", 200);
  brush.beginShape(0.5);
  brush.vertex(60, 160); brush.vertex(200, 160); brush.vertex(200, 330); brush.vertex(60, 330);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(400, 160); brush.vertex(540, 160); brush.vertex(540, 330); brush.vertex(400, 330);
  brush.endShape(true);
  brush.fill("#6a2a80", 240);
  brush.beginShape(0.7);
  brush.vertex(270, 440); brush.vertex(380, 440); brush.vertex(390, 520); brush.vertex(260, 520);
  brush.endShape(true);
  brush.fill("#2a2a50", 240);
  brush.beginShape(0.7);
  brush.vertex(285, 300); brush.vertex(345, 300); brush.vertex(360, 440); brush.vertex(275, 440);
  brush.endShape(true);
  brush.fill("#3a1a10", 240);
  brush.circle(315, 275, 20, 0.6);
  brush.fill("#fff8e8", 255);
  brush.beginShape(0.3);
  brush.vertex(300, 370); brush.vertex(340, 365); brush.vertex(345, 395); brush.vertex(305, 398);
  brush.endShape(true);
  brush.fill("#1a5a30", 230);
  brush.beginShape(0.6);
  brush.vertex(30, 440); brush.vertex(230, 440); brush.vertex(230, 500); brush.vertex(30, 500);
  brush.endShape(true);
}
