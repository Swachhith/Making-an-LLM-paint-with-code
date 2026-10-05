async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8e4d8");
  randomSeed(1303);
  brush.noStroke();

  // sky: slate-blue-grey, left and top, leaving right and bottom as paper
  brush.fill("#7a848c", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 200); brush.vertex(400, 180); brush.vertex(200, 230); brush.vertex(-20, 200);
  brush.endShape(true);

  // distant ridge behind the hiker
  brush.fill("#8c8a7a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, 220); brush.vertex(150, 190); brush.vertex(300, 210); brush.vertex(450, 170); brush.vertex(620, 190); brush.vertex(620, 240); brush.vertex(-20, 240);
  brush.endShape(true);

  // meadow at the foot, left side
  brush.fill("#6f7a5e", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 230); brush.vertex(200, 200); brush.vertex(300, 220); brush.vertex(620, 210); brush.vertex(620, 300); brush.vertex(-20, 300);
  brush.endShape(true);

  // hiker, off-centre right, two passes
  brush.fill("#3a342a", 210);
  brush.fillBleed(0.15);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(470, 230); brush.vertex(488, 230); brush.vertex(492, 245); brush.vertex(472, 245);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(466, 245); brush.vertex(472, 250); brush.vertex(488, 250); brush.vertex(492, 245);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(470, 250); brush.vertex(488, 250); brush.vertex(488, 266); brush.vertex(470, 266);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(462, 240); brush.vertex(482, 240); brush.vertex(482, 250); brush.vertex(462, 250);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(470, 248); brush.vertex(488, 248); brush.vertex(488, 262); brush.vertex(470, 262);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(468, 252); brush.vertex(488, 252); brush.vertex(488, 266); brush.vertex(468, 266);
  brush.endShape(true);
  brush.fill("#2e281c", 220);
  brush.fillBleed(0.1);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(464, 244); brush.vertex(486, 244); brush.vertex(486, 252); brush.vertex(464, 252);
  brush.endShape(true);
  brush.fill("#1a1610", 220);
  brush.beginShape(0.3);
  brush.vertex(470, 250); brush.vertex(488, 250); brush.vertex(488, 258); brush.vertex(470, 258);
  brush.endShape(true);
  brush.fill("#2a2218", 210);
  brush.fillBleed(0.15);
  brush.beginShape(0.3);
  brush.vertex(470, 262); brush.vertex(488, 262); brush.vertex(488, 276); brush.vertex(470, 276);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(460, 266); brush.vertex(496, 266); brush.vertex(496, 280); brush.vertex(460, 280);
  brush.endShape(true);
  brush.fill("#c2a878", 220);
  brush.fillBleed(0.1);
  brush.beginShape(0.3);
  brush.vertex(468, 256); brush.vertex(488, 256); brush.vertex(488, 264); brush.vertex(468, 264);
  brush.endShape(true);
  brush.fill("#b8b090", 200);
  brush.beginShape(0.3);
  brush.vertex(470, 266); brush.vertex(488, 266); brush.vertex(488, 274); brush.vertex(470, 274);
  brush.endShape(true);
}
