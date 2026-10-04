async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e6ebee");
  randomSeed(26102);
  brush.noStroke();

  // mist
  brush.fill("#b2c0cc", 165);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  let shoreY = 350;
  // low far hill on the left
  brush.fill("#a0aebb", 175);
  brush.beginShape(0.6);
  brush.vertex(-20, shoreY); brush.vertex(-20, 270); brush.vertex(80, 250); brush.vertex(190, 290); brush.vertex(260, shoreY);
  brush.endShape(true);

  // the peak, apex at x=410, big and steep; snow cap left pale above the rock
  brush.fill("#8494a8", 190);
  brush.fillBleed(0.28);
  brush.beginShape(0.2);
  brush.vertex(120, shoreY); brush.vertex(250, 240); brush.vertex(330, 170); brush.vertex(410, 50);
  brush.vertex(480, 130); brush.vertex(560, 200); brush.vertex(620, 230); brush.vertex(620, shoreY);
  brush.endShape(true);
  // rock under the snow line: a jagged darker wash
  brush.fill("#6a7a90", 180);
  brush.beginShape(0.3);
  brush.vertex(200, shoreY); brush.vertex(300, 230); brush.vertex(350, 210); brush.vertex(380, 180);
  brush.vertex(400, 200); brush.vertex(430, 150); brush.vertex(460, 190); brush.vertex(520, 210);
  brush.vertex(620, 260); brush.vertex(620, shoreY);
  brush.endShape(true);
  // shadow side
  brush.fill("#566880", 175);
  brush.beginShape(0.3);
  brush.vertex(430, 150); brush.vertex(480, 190); brush.vertex(620, 260); brush.vertex(620, shoreY); brush.vertex(470, shoreY);
  brush.endShape(true);

  // mist band sitting on the lake, then the dark shore
  brush.fill("#6a7c74", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.7);
  brush.vertex(-20, 342); brush.vertex(120, 330); brush.vertex(260, 340); brush.vertex(400, 328);
  brush.vertex(520, 338); brush.vertex(620, 330); brush.vertex(620, 362); brush.vertex(-20, 362);
  brush.endShape(true);

  // reflection mirrored about the shore, softer
  let m = 2 * 362;
  brush.fill("#90a0b0", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.3);
  brush.vertex(120, 362); brush.vertex(250, m - 240); brush.vertex(330, m - 170); brush.vertex(410, m - 50);
  brush.vertex(480, m - 130); brush.vertex(560, m - 200); brush.vertex(620, m - 230); brush.vertex(620, 362);
  brush.endShape(true);
  brush.fill("#788aa0", 160);
  brush.beginShape(0.3);
  brush.vertex(200, 362); brush.vertex(300, m - 230); brush.vertex(380, m - 180); brush.vertex(430, m - 150);
  brush.vertex(520, m - 210); brush.vertex(620, m - 260); brush.vertex(620, 362);
  brush.endShape(true);
  brush.fill("#6e8078", 170);
  brush.beginShape(0.6);
  brush.vertex(-20, 362); brush.vertex(620, 362); brush.vertex(620, 380); brush.vertex(300, 386); brush.vertex(-20, 378);
  brush.endShape(true);

  // a boat-shaped dark spit of land at the lower left for scale
  brush.fill("#5a6a60", 190);
  brush.beginShape(0.7);
  brush.vertex(-20, 540); brush.vertex(120, 530); brush.vertex(200, 548); brush.vertex(-20, 570);
  brush.endShape(true);
}
