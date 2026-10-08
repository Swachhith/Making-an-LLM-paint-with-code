async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8e2d6");
  brush.noStroke();

  // dusky sky: warm violet fading to indigo
  brush.fill("#8a7fb0", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 220); brush.vertex(420, 260); brush.vertex(220, 230); brush.vertex(-20, 260);
  brush.endShape(true);
  brush.fill("#5a4f8e", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(-20, 260); brush.vertex(620, 260); brush.vertex(620, 470); brush.vertex(300, 490); brush.vertex(-20, 470);
  brush.endShape(true);

  // ground: ochre-grey, darker than the paper
  brush.fill("#9a8a6e", 210);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(-20, 470); brush.vertex(620, 470); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // baobab: wide crown first, then the massive trunk
  brush.fill("#a98a5a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(300, 220); brush.vertex(420, 170); brush.vertex(520, 220); brush.vertex(520, 300); brush.vertex(460, 360); brush.vertex(300, 350); brush.vertex(140, 360); brush.vertex(80, 300); brush.vertex(80, 220);
  brush.endShape(true);
  brush.fill("#8a6a4a", 210);
  brush.fillBleed(0.25);
  brush.beginShape(0.7);
  brush.vertex(300, 220); brush.vertex(420, 170); brush.vertex(520, 220); brush.vertex(520, 300); brush.vertex(460, 360); brush.vertex(300, 350); brush.vertex(140, 360); brush.vertex(80, 300); brush.vertex(80, 220);
  brush.endShape(true);
  // second pass, more opaque, smaller
  brush.fill("#7a5a3a", 220);
  brush.fillBleed(0.25);
  brush.beginShape(0.7);
  brush.vertex(300, 240); brush.vertex(410, 190); brush.vertex(500, 240); brush.vertex(500, 320); brush.vertex(440, 380); brush.vertex(300, 370); brush.vertex(160, 380); brush.vertex(100, 320); brush.vertex(100, 240);
  brush.endShape(true);

  // trunk: squat and wide, two passes
  brush.fill("#6a4a3a", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(295, 370); brush.vertex(305, 370); brush.vertex(315, 620); brush.vertex(305, 620); brush.vertex(295, 620);
  brush.endShape(true);
  brush.fill("#50382e", 210);
  brush.beginShape(0.3);
  brush.vertex(300, 370); brush.vertex(302, 370); brush.vertex(304, 620); brush.vertex(302, 620); brush.vertex(300, 620);
  brush.endShape(true);

  // roots spreading at the base
  brush.fill("#5a3a2e", 210);
  brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(220, 570); brush.vertex(160, 550); brush.vertex(120, 580); brush.vertex(180, 600);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(320, 570); brush.vertex(380, 550); brush.vertex(420, 580); brush.vertex(360, 600);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(400, 570); brush.vertex(460, 550); brush.vertex(500, 580); brush.vertex(440, 600);
  brush.endShape(true);
}
