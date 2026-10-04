async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e9eef0");
  randomSeed(2610);
  brush.noStroke();

  // soft grey-blue haze over the whole sheet
  brush.fill("#b4c2cc", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // the peak, large and to the right; snow left pale at the summit
  let shoreY = 360;
  brush.fill("#8a9aac", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.3);
  brush.vertex(-20, shoreY); brush.vertex(120, 300); brush.vertex(250, 220); brush.vertex(330, 150);
  brush.vertex(400, 70); brush.vertex(470, 160); brush.vertex(560, 240); brush.vertex(620, 270); brush.vertex(620, shoreY);
  brush.endShape(true);
  // shadow flank
  brush.fill("#6e7e94", 180);
  brush.beginShape(0.3);
  brush.vertex(400, 110); brush.vertex(470, 170); brush.vertex(560, 250); brush.vertex(620, 280);
  brush.vertex(620, shoreY); brush.vertex(430, shoreY); brush.vertex(420, 220);
  brush.endShape(true);

  // misty treeline at the shore
  brush.fill("#72827a", 190);
  brush.beginShape(0.7);
  brush.vertex(-20, 350); brush.vertex(100, 335); brush.vertex(220, 345); brush.vertex(360, 332);
  brush.vertex(500, 344); brush.vertex(620, 336); brush.vertex(620, 368); brush.vertex(-20, 368);
  brush.endShape(true);

  // reflection: mirrored peak, softer
  brush.fill("#98a8b8", 160);
  brush.fillBleed(0.3);
  brush.beginShape(0.4);
  brush.vertex(-20, 368); brush.vertex(120, 420); brush.vertex(250, 500); brush.vertex(330, 570);
  brush.vertex(400, 640); brush.vertex(470, 560); brush.vertex(560, 480); brush.vertex(620, 450); brush.vertex(620, 368);
  brush.endShape(true);
  brush.fill("#7e8e9e", 150);
  brush.beginShape(0.4);
  brush.vertex(420, 380); brush.vertex(430, 368); brush.vertex(620, 368); brush.vertex(620, 440);
  brush.vertex(560, 470); brush.vertex(470, 550);
  brush.endShape(true);
  brush.fill("#7a8a84", 160);
  brush.beginShape(0.6);
  brush.vertex(-20, 368); brush.vertex(620, 368); brush.vertex(620, 386); brush.vertex(360, 392); brush.vertex(-20, 384);
  brush.endShape(true);

  // faint ripples
  for (let k = 0; k < 6; k++) {
    let y = 420 + k * 30, x = random(40, 440);
    brush.fill("#dfe6ea", 200);
    brush.beginShape(0.5);
    brush.vertex(x, y); brush.vertex(x + 120, y - 2); brush.vertex(x + 110, y + 12); brush.vertex(x + 8, y + 14);
    brush.endShape(true);
  }
}
