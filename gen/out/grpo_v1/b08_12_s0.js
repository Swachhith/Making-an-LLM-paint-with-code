async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e9e2d4");
  brush.noStroke();
  // sky: pale lavender, soft wash, left big open
  brush.fill("#b8a8c8", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 220); brush.vertex(420, 260); brush.vertex(260, 230); brush.vertex(-20, 240);
  brush.endShape(true);
  // distant ridge
  brush.fill("#8a7a9a", 190);
  brush.fillBleed(0.25);
  brush.beginShape(0.3);
  brush.vertex(-20, 220); brush.vertex(150, 210); brush.vertex(300, 225); brush.vertex(470, 215); brush.vertex(620, 225); brush.vertex(620, 320); brush.vertex(-20, 320);
  brush.endShape(true);
  // foreground meadow
  brush.fill("#7a6a4a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 320); brush.vertex(620, 320); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // a few wildflowers
  brush.fill("#d87a4a", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.circle(120, 470, 5, 0.3); brush.circle(160, 485, 4, 0.3); brush.circle(200, 460, 5, 0.3);
  brush.fill("#9a7a7a", 220);
  brush.circle(470, 530, 5, 0.3); brush.circle(500, 550, 4, 0.3); brush.circle(530, 520, 5, 0.3);
  // the hiker, off-centre, silhouetted against the sky
  brush.fill("#5a4a3a", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(420, 370); brush.vertex(455, 370); brush.vertex(460, 440); brush.vertex(445, 440);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(420, 395); brush.vertex(455, 395); brush.vertex(455, 440); brush.vertex(445, 440); brush.vertex(440, 395); brush.vertex(425, 395);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(430, 440); brush.vertex(450, 440); brush.vertex(450, 460); brush.vertex(430, 460);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(420, 440); brush.vertex(420, 460); brush.vertex(400, 460); brush.vertex(400, 440);
  brush.endShape(true);
  // a tiny flag on a rock
  brush.fill("#c85a3a", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(460, 440); brush.vertex(490, 440); brush.vertex(490, 460); brush.vertex(460, 460);
  brush.endShape(true);
  // rock ledge
  brush.fill("#6a5a4a", 230);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(360, 350); brush.vertex(420, 340); brush.vertex(480, 350); brush.vertex(470, 370); brush.vertex(420, 370); brush.vertex(370, 360);
  brush.endShape(true);
}
