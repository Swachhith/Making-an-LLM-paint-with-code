async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2efe6");
  brush.noStroke();
  // hot sky bands
  brush.fill("#f28a1c", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 250); brush.vertex(-20, 250);
  brush.endShape(true);
  brush.fill("#e0335a", 190);
  brush.fillBleed(0.28);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 90); brush.vertex(300, 120); brush.vertex(-20, 80);
  brush.endShape(true);
  // distant headland
  brush.fill("#6a2a7a", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(380, 245); brush.vertex(450, 205); brush.vertex(540, 215); brush.vertex(620, 190);
  brush.vertex(620, 260); brush.vertex(380, 262);
  brush.endShape(true);
  // sea
  brush.fill("#0f6fb0", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.2);
  brush.vertex(-20, 250); brush.vertex(620, 250); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#0a3f86", 210);
  brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(-20, 420); brush.vertex(300, 400); brush.vertex(620, 430); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // sun reflection strokes
  for (let i = 0; i < 6; i++) {
    brush.fill("#ffb028", 200);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    let y = 275 + i * 22, w = 90 - i * 10;
    brush.beginShape(0.5);
    brush.vertex(170 - w, y); brush.vertex(170 + w, y - 3); brush.vertex(170 + w - 10, y + 12); brush.vertex(170 - w + 10, y + 14);
    brush.endShape(true);
  }
  // tiny boat
  brush.fill("#d11f1f", 235);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.2);
  brush.vertex(390, 345); brush.vertex(470, 345); brush.vertex(458, 365); brush.vertex(400, 365);
  brush.endShape(true);
  brush.fill("#1a1a2a", 230);
  brush.fillBleed(0.1);
  brush.circle(425, 318, 8, 0.3);
  brush.beginShape(0.3);
  brush.vertex(417, 346); brush.vertex(418, 326); brush.vertex(434, 326); brush.vertex(435, 346);
  brush.endShape(true);
  // rod as thin soft wedge
  brush.fill("#1a1a2a", 200);
  brush.beginShape(0.2);
  brush.vertex(430, 330); brush.vertex(355, 290); brush.vertex(360, 285); brush.vertex(436, 322);
  brush.endShape(true);
  brush.fill("#063060", 200);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(385, 368); brush.vertex(475, 368); brush.vertex(460, 385); brush.vertex(400, 385);
  brush.endShape(true);
}
