async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef2f5");
  brush.noStroke();

  // big cool sky: cerulean fading down
  brush.fill("#7ea7cc", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 180); brush.vertex(-20, 220);
  brush.endShape(true);
  brush.fill("#b8cfe0", 170);
  brush.beginShape(0.3);
  brush.vertex(-20, 160); brush.vertex(620, 140); brush.vertex(620, 360); brush.vertex(-20, 380);
  brush.endShape(true);

  // far peaks, pale lilac-grey
  brush.fill("#a6a9c4", 180);
  brush.fillBleed(0.28);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.15);
  brush.vertex(-20, 440); brush.vertex(60, 330); brush.vertex(110, 350); brush.vertex(190, 280); brush.vertex(240, 330); brush.vertex(300, 300); brush.vertex(620, 440);
  brush.endShape(true);
  // main peak right of centre, shadow side in blue-slate
  brush.fill("#8795b0", 205);
  brush.fillBleed(0.22);
  brush.beginShape(0.1);
  brush.vertex(250, 440); brush.vertex(370, 260); brush.vertex(410, 230); brush.vertex(440, 262); brush.vertex(540, 360); brush.vertex(620, 400); brush.vertex(620, 440);
  brush.endShape(true);
  brush.fill("#5c6d8e", 200);
  brush.fillBleed(0.2);
  brush.beginShape(0.1);
  brush.vertex(410, 230); brush.vertex(440, 262); brush.vertex(540, 360); brush.vertex(620, 400); brush.vertex(620, 440); brush.vertex(470, 440); brush.vertex(430, 330);
  brush.endShape(true);
  // snow on the lit face is paper; a hint of the ridge
  brush.fill("#6f7fa0", 170);
  brush.beginShape(0.2);
  brush.vertex(370, 262); brush.vertex(392, 250); brush.vertex(380, 320); brush.vertex(340, 380); brush.vertex(355, 310);
  brush.endShape(true);

  // cloud sea below the peaks: white paper billows, shaded undersides
  brush.fill("#c3cedc", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-20, 470); brush.vertex(620, 460); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  let billows = [[40, 470, 50], [140, 455, 60], [260, 470, 55], [370, 450, 65], [490, 465, 58], [590, 450, 55]];
  for (let b of billows) {
    brush.fill("#9aabc2", 170);
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.5);
    brush.circle(b[0] + 10, b[1] + 40, b[2] * 0.8, 0.6);
  }
  brush.fill("#8698b4", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 560); brush.vertex(200, 540); brush.vertex(420, 560); brush.vertex(620, 545); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
}
