async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8edef");
  randomSeed(2610);
  brush.noStroke();

  // haze over the whole sheet, warmer at the horizon
  brush.fill("#b0bfca", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#d0c8c4", 150);
  brush.beginShape(0.8);
  brush.vertex(-20, 250); brush.vertex(620, 230); brush.vertex(620, 420); brush.vertex(-20, 430);
  brush.endShape(true);

  let shoreY = 370;
  // small far hills on the left
  brush.fill("#a8b4c0", 170);
  brush.beginShape(0.6);
  brush.vertex(-20, shoreY); brush.vertex(-20, 280); brush.vertex(70, 250); brush.vertex(160, 290); brush.vertex(240, 330); brush.vertex(260, shoreY);
  brush.endShape(true);

  // the big peak, off to the right, summit left pale
  brush.fill("#8898aa", 185);
  brush.fillBleed(0.3);
  brush.beginShape(0.25);
  brush.vertex(150, shoreY); brush.vertex(270, 250); brush.vertex(360, 150); brush.vertex(430, 60);
  brush.vertex(500, 140); brush.vertex(580, 220); brush.vertex(620, 250); brush.vertex(620, shoreY);
  brush.endShape(true);
  brush.fill("#66768c", 185);
  brush.beginShape(0.25);
  brush.vertex(430, 110); brush.vertex(500, 170); brush.vertex(580, 240); brush.vertex(620, 262);
  brush.vertex(620, shoreY); brush.vertex(470, shoreY); brush.vertex(450, 230);
  brush.endShape(true);
  // snow edge: shadows beneath the paper-white cap
  brush.fill("#7888a0", 170);
  brush.beginShape(0.4);
  brush.vertex(330, 185); brush.vertex(370, 170); brush.vertex(395, 190); brush.vertex(425, 160); brush.vertex(455, 180);
  brush.vertex(440, 240); brush.vertex(340, 250);
  brush.endShape(true);

  // treeline and shore
  brush.fill("#667a70", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.7);
  brush.vertex(-20, 360); brush.vertex(80, 346); brush.vertex(200, 355); brush.vertex(340, 342);
  brush.vertex(480, 352); brush.vertex(620, 344); brush.vertex(620, 378); brush.vertex(-20, 378);
  brush.endShape(true);

  // mirrored peak in the water, softer and lighter
  brush.fill("#9aaab8", 165);
  brush.fillBleed(0.3);
  brush.beginShape(0.3);
  brush.vertex(150, 378); brush.vertex(270, 498); brush.vertex(360, 598); brush.vertex(430, 680);
  brush.vertex(500, 600); brush.vertex(580, 520); brush.vertex(620, 490); brush.vertex(620, 378);
  brush.endShape(true);
  brush.fill("#8090a2", 150);
  brush.beginShape(0.3);
  brush.vertex(470, 378); brush.vertex(620, 378); brush.vertex(620, 480); brush.vertex(580, 500); brush.vertex(500, 570); brush.vertex(460, 510);
  brush.endShape(true);
  brush.fill("#738a80", 170);
  brush.beginShape(0.6);
  brush.vertex(-20, 378); brush.vertex(620, 378); brush.vertex(620, 396); brush.vertex(340, 402); brush.vertex(-20, 394);
  brush.endShape(true);

  // pale ripple gaps, painted as slightly darker water around light streaks
  for (let k = 0; k < 5; k++) {
    let y = 440 + k * 34;
    brush.fill("#90a0ae", 150);
    brush.beginShape(0.5);
    brush.vertex(-20, y); brush.vertex(random(100, 200), y - 3); brush.vertex(random(100, 200), y + 10); brush.vertex(-20, y + 12);
    brush.endShape(true);
  }
}
