async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f0f4f6");
  randomSeed(818);
  brush.noStroke();
  let lx = 440; // tower centre, off to the right

  // big cool sky, painted in two halves so the white tower stays paper
  let skyL = [[-10, -10], [lx - 20, -10], [lx - 20, 170], [lx - 26, 400], [-10, 400]];
  let skyR = [[lx + 20, -10], [610, -10], [610, 400], [lx + 26, 400], [lx + 20, 170]];
  for (let s of [skyL, skyR]) {
    brush.fill("#9dc0dc", 180);
    brush.fillBleed(0.25);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(0.1);
    for (let p of s) brush.vertex(p[0], p[1]);
    brush.endShape(true);
  }
  // deeper blue at the top, cloud shapes as untouched paper below it
  brush.fill("#6f9ec8", 175);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(1);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 60); brush.vertex(470, 100);
  brush.vertex(300, 70); brush.vertex(150, 130); brush.vertex(-10, 90);
  brush.endShape(true);
  // grey cloud bellies
  let clouds = [[110, 230, 70], [260, 290, 50], [560, 250, 40]];
  for (let c of clouds) {
    brush.fill("#b6bfcc", 170);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(1);
    brush.vertex(c[0] - c[2] * 1.6, c[1]); brush.vertex(c[0], c[1] - c[2] * 0.3);
    brush.vertex(c[0] + c[2] * 1.6, c[1]); brush.vertex(c[0], c[1] + c[2] * 0.35);
    brush.endShape(true);
  }

  // sea
  brush.fill("#6d9ab6", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.45, 0.4);
  brush.beginShape(0.2);
  brush.vertex(-10, 400); brush.vertex(610, 395); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#4f7f9e", 180);
  brush.beginShape(0.6);
  brush.vertex(-10, 500); brush.vertex(610, 480); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);

  // cliff: grey-green headland on the right, sheer face to the sea
  brush.fill("#8e958e", 215);
  brush.fillBleed(0.22);
  brush.fillTexture(0.55, 0.5);
  brush.beginShape(0.2);
  brush.vertex(300, 610); brush.vertex(320, 520); brush.vertex(345, 455); brush.vertex(380, 410);
  brush.vertex(610, 395); brush.vertex(610, 610);
  brush.endShape(true);
  brush.fill("#5a6368", 205);
  brush.fillBleed(0.18);
  brush.beginShape(0.3);
  brush.vertex(305, 610); brush.vertex(328, 520); brush.vertex(355, 460); brush.vertex(390, 430);
  brush.vertex(410, 520); brush.vertex(380, 610);
  brush.endShape(true);
  brush.fill("#8aa68c", 210);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(372, 412); brush.vertex(610, 395); brush.vertex(610, 425); brush.vertex(390, 432);
  brush.endShape(true);
  // surf foam left as paper -- paint only the dark rocks at the foot
  brush.fill("#4a5358", 215);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(390, 432); brush.vertex(470, 425); brush.vertex(520, 520); brush.vertex(470, 610); brush.vertex(390, 610); brush.vertex(410, 520);
  brush.endShape(true);
  brush.fill("#6a7a52", 200);
  brush.beginShape(0.5);
  brush.vertex(372, 410); brush.vertex(610, 392); brush.vertex(610, 440); brush.vertex(500, 430); brush.vertex(380, 440);
  brush.endShape(true);

  // lighthouse: cool shadow on its right half, two red bands
  brush.fill("#a9b6c6", 205);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0);
  brush.vertex(lx, 412); brush.vertex(lx + 26, 412); brush.vertex(lx + 18, 190); brush.vertex(lx, 190);
  brush.endShape(true);
  for (let b = 0; b < 2; b++) {
    let y = 240 + b * 90;
    let w0 = 19 + (y - 190) * 0.03, w1 = 19 + (y + 30 - 190) * 0.03;
    brush.fill("#c23a44", 220);
    brush.fillBleed(0.1);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0);
    brush.vertex(lx - w0, y); brush.vertex(lx + w0, y); brush.vertex(lx + w1, y + 30); brush.vertex(lx - w1, y + 30);
    brush.endShape(true);
  }
  brush.fill("#2e3846", 225);
  brush.beginShape(0);
  brush.vertex(lx - 28, 192); brush.vertex(lx + 28, 192); brush.vertex(lx + 28, 180); brush.vertex(lx - 28, 180);
  brush.endShape(true);
  brush.fill("#f6cf5a", 220);
  brush.fillBleed(0.2);
  brush.circle(lx, 165, 12, 0.2);
  brush.fill("#c23a44", 225);
  brush.fillBleed(0.1);
  brush.beginShape(0);
  brush.vertex(lx - 20, 152); brush.vertex(lx, 128); brush.vertex(lx + 20, 152);
  brush.endShape(true);
  // a small keeper's cottage
  brush.fill("#b0b8c2", 205);
  brush.beginShape(0);
  brush.vertex(480, 412); brush.vertex(540, 408); brush.vertex(540, 385); brush.vertex(480, 388);
  brush.endShape(true);
  brush.fill("#c23a44", 215);
  brush.beginShape(0);
  brush.vertex(475, 390); brush.vertex(495, 370); brush.vertex(530, 368); brush.vertex(546, 387);
  brush.endShape(true);
}
