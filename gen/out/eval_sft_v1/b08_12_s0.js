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
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 150); brush.vertex(420, 200); brush.vertex(260, 150); brush.vertex(-20, 150);
  brush.endShape(true);
  brush.fill("#8f80a0", 130);
  brush.beginShape(0.6);
  brush.vertex(350, 100); brush.vertex(500, 130); brush.vertex(470, 250); brush.vertex(320, 230);
  brush.endShape(true);
  // distant ridge
  brush.fill("#8a7a70", 180);
  brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(-20, 230); brush.vertex(150, 200); brush.vertex(350, 235); brush.vertex(620, 210); brush.vertex(620, 300); brush.vertex(-20, 300);
  brush.endShape(true);
  // mountain: right half, layered passes
  brush.fill("#6f5f4a", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(-20, 230); brush.vertex(120, 200); brush.vertex(260, 260); brush.vertex(380, 230); brush.vertex(520, 280); brush.vertex(620, 250); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#544438", 190);
  brush.beginShape(0.5);
  brush.vertex(320, 235); brush.vertex(400, 220); brush.vertex(460, 250); brush.vertex(500, 290); brush.vertex(520, 310); brush.vertex(620, 250); brush.vertex(620, 620); brush.vertex(-20, 620); brush.vertex(-20, 230);
  brush.endShape(true);
  // meadow: low, warm ochre, left side
  brush.fill("#c9a878", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 300); brush.vertex(620, 300); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // hiker, upper right, small
  brush.fill("#2a1e16", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.2);
  brush.vertex(470, 300); brush.vertex(490, 290); brush.vertex(500, 300); brush.vertex(485, 310);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(472, 300); brush.vertex(480, 300); brush.vertex(480, 310); brush.vertex(472, 310);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(470, 300); brush.vertex(470, 330); brush.vertex(450, 330); brush.vertex(450, 310);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(465, 300); brush.vertex(465, 310); brush.vertex(455, 310); brush.vertex(455, 300);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(470, 330); brush.vertex(470, 360); brush.vertex(450, 360); brush.vertex(450, 330);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(450, 330); brush.vertex(450, 360); brush.vertex(440, 360); brush.vertex(440, 330);
  brush.endShape(true);
  brush.fill("#5a4a2a", 215);
  brush.fillBleed(0.2);
  brush.beginShape(0.2);
  brush.vertex(460, 330); brush.vertex(460, 340); brush.vertex(455, 340); brush.vertex(455, 330);
  brush.endShape(true);
  brush.fill("#1a100a", 230);
  brush.beginShape(0.2);
  brush.vertex(460, 360); brush.vertex(460, 370); brush.vertex(455, 370); brush.vertex(455, 360);
  brush.endShape(true);
  // a lone tree on the ridge
  brush.fill("#3a2a22", 225);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(300, 235); brush.vertex(300, 270); brush.vertex(320, 270); brush.vertex(320, 235);
  brush.endShape(true);
  brush.fill("#2a1c18", 210);
  brush.beginShape(0.3);
  brush.vertex(312, 235); brush.vertex(312, 255); brush.vertex(328, 255); brush.vertex(328, 235);
  brush.endShape(true);
  brush.fill("#5a4438", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(330, 270); brush.vertex(360, 250); brush.vertex(400, 265); brush.vertex(420, 240); brush.vertex(450, 255); brush.vertex(470, 235); brush.vertex(420, 250); brush.vertex(390, 270);
  brush.endShape(true);
}
