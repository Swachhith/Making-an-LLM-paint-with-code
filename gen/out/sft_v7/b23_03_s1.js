async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef3f4");
  brush.noStroke();

  // pale blue-grey sky with soft clouds, high horizon
  brush.fill("#a7b8c8", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 190); brush.vertex(-20, 200);
  brush.endShape(true);
  brush.fill("#b6c8d6", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, 80); brush.vertex(620, 60); brush.vertex(620, 150); brush.vertex(-20, 160);
  brush.endShape(true);
  brush.fill("#9aa8b8", 160);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(-20, 140); brush.vertex(200, 130); brush.vertex(420, 145); brush.vertex(620, 135); brush.vertex(620, 180); brush.vertex(-20, 180);
  brush.endShape(true);

  // rolling green hills, cool light: two passes, lighter on the far side
  brush.fill("#8fb07a", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.9);
  brush.vertex(-20, 190); brush.vertex(120, 170); brush.vertex(240, 185); brush.vertex(360, 165); brush.vertex(480, 180); brush.vertex(620, 165); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#6a8a62", 190);
  brush.fillBleed(0.25);
  brush.beginShape(0.9);
  brush.vertex(-20, 200); brush.vertex(180, 190); brush.vertex(320, 205); brush.vertex(460, 195); brush.vertex(620, 205); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#4a6a52", 180);
  brush.fillBleed(0.2);
  brush.beginShape(0.9);
  brush.vertex(-20, 215); brush.vertex(260, 205); brush.vertex(420, 220); brush.vertex(620, 210); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#5a7a62", 180);
  brush.fillBleed(0.2);
  brush.beginShape(0.9);
  brush.vertex(150, 210); brush.vertex(300, 200); brush.vertex(450, 215); brush.vertex(620, 205); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
}
