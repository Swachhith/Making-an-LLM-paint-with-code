async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ece9ef");
  brush.noStroke();
  // lavender-grey sky wash to every edge
  brush.fill("#b9b3c8", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  // small far peak on left
  brush.fill("#9d9aae", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.3);
  brush.vertex(20, 380);
  brush.vertex(110, 260);
  brush.vertex(140, 275);
  brush.vertex(220, 380);
  brush.endShape(true);
  // big peak right of centre
  brush.fill("#8a8aa0", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.25);
  brush.vertex(170, 420);
  brush.vertex(300, 230);
  brush.vertex(360, 150);
  brush.vertex(390, 90);
  brush.vertex(420, 130);
  brush.vertex(470, 180);
  brush.vertex(520, 260);
  brush.vertex(620, 360);
  brush.vertex(620, 420);
  brush.endShape(true);
  // shadow side
  brush.fill("#6f6f88", 170);
  brush.fillBleed(0.25);
  brush.beginShape(0.3);
  brush.vertex(390, 92);
  brush.vertex(420, 130);
  brush.vertex(470, 180);
  brush.vertex(520, 260);
  brush.vertex(620, 360);
  brush.vertex(620, 420);
  brush.vertex(430, 420);
  brush.vertex(410, 250);
  brush.endShape(true);
  // cloud sea below: soft warm pale billows, overlapping and bleeding
  let billows = [[60, 430, 90], [180, 450, 100], [310, 420, 110], [450, 440, 100], [570, 425, 90], [120, 530, 110], [300, 550, 120], [490, 540, 110]];
  for (let b of billows) {
    brush.fill("#d7cfd8", 190);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.circle(b[0], b[1], b[2], 0.4);
  }
  brush.fill("#c3bccb", 150);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(-20, 560);
  brush.vertex(300, 580);
  brush.vertex(620, 560);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
}
