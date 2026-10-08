async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e9e4d6");
  brush.noStroke();
  // sky: pale blue, left heavy, right open
  brush.fill("#b8c4d8", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 250); brush.vertex(450, 350); brush.vertex(300, 380); brush.vertex(-20, 320);
  brush.endShape(true);
  // far ridge, lavender-grey
  brush.fill("#9aa3b8", 180);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, 360); brush.vertex(150, 340); brush.vertex(300, 360); brush.vertex(450, 340); brush.vertex(620, 360); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // near meadow, ochre
  brush.fill("#d9b88a", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-20, 470); brush.vertex(620, 450); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // hiker, small, on the right
  brush.fill("#4a3a30", 220);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.2);
  brush.vertex(470, 460); brush.vertex(486, 460); brush.vertex(486, 420); brush.vertex(470, 420);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(470, 420); brush.vertex(452, 380); brush.vertex(470, 340); brush.vertex(488, 380); brush.vertex(470, 420);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(470, 420); brush.vertex(470, 340); brush.vertex(452, 380); brush.vertex(434, 340); brush.vertex(434, 420); brush.vertex(470, 420);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(470, 420); brush.vertex(456, 450); brush.vertex(484, 450); brush.vertex(470, 420);
  brush.endShape(true);
  // hat brim
  brush.fill("#30241c", 210);
  brush.fillBleed(0.1);
  brush.beginShape(0.2);
  brush.vertex(462, 422); brush.vertex(482, 422); brush.vertex(490, 436); brush.vertex(462, 436);
  brush.endShape(true);
  // rock outcrop behind
  brush.fill("#7a6a54", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(300, 400); brush.vertex(360, 370); brush.vertex(420, 400); brush.vertex(400, 450); brush.vertex(320, 450);
  brush.endShape(true);
  // sun as paper, a pale circle left off-centre
  brush.fill("#f2e8d8", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.circle(150, 150, 50, 0.3);
}
