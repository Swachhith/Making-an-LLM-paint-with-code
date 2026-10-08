async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef3f6");
  brush.noStroke();
  // sky: pale blue with soft white clouds
  brush.fill("#9fb9e8", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 200); brush.vertex(400, 240); brush.vertex(200, 230); brush.vertex(-20, 250);
  brush.endShape(true);
  brush.fill("#cfe3f2", 170);
  brush.beginShape(0.5);
  brush.vertex(-20, 220); brush.vertex(200, 230); brush.vertex(400, 240); brush.vertex(620, 220); brush.vertex(620, 120); brush.vertex(420, 110); brush.vertex(240, 120); brush.vertex(-20, 110);
  brush.endShape(true);
  brush.fill("#f4f7fb", 170);
  brush.beginShape(0.6);
  brush.vertex(300, 130); brush.vertex(360, 110); brush.vertex(420, 125); brush.vertex(350, 145); brush.vertex(290, 135);
  brush.endShape(true);
  brush.fill("#eef3f6", 150);
  brush.beginShape(0.6);
  brush.vertex(480, 150); brush.vertex(530, 130); brush.vertex(580, 150); brush.vertex(550, 170); brush.vertex(500, 160);
  brush.endShape(true);
  // rolling hills: two passes each, cooler tones
  brush.fill("#8fbf9a", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, 250); brush.vertex(150, 230); brush.vertex(320, 245); brush.vertex(470, 225); brush.vertex(620, 240); brush.vertex(620, 320); brush.vertex(-20, 330);
  brush.endShape(true);
  brush.fill("#6fa388", 210);
  brush.fillBleed(0.25);
  brush.beginShape(0.4);
  brush.vertex(-20, 310); brush.vertex(120, 290); brush.vertex(260, 305); brush.vertex(400, 290); brush.vertex(540, 310); brush.vertex(620, 340); brush.vertex(620, 440); brush.vertex(-20, 450);
  brush.endShape(true);
  brush.fill("#4e8a76", 220);
  brush.fillBleed(0.2);
  brush.beginShape(0.4);
  brush.vertex(-20, 400); brush.vertex(180, 380); brush.vertex(350, 395); brush.vertex(520, 385); brush.vertex(620, 410); brush.vertex(620, 470); brush.vertex(-20, 480);
  brush.endShape(true);
  // a meadow at the foot
  brush.fill("#9fd0a0", 215);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 470); brush.vertex(620, 470); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
}
