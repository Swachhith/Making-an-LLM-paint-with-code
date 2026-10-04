async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcecef");
  brush.noStroke();
  // sky: magenta high, hot pink, peach at the horizon
  brush.fill("#8e2c8a", 210);
  brush.fillBleed(0.26);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 160); brush.vertex(-20, 190);
  brush.endShape(true);
  brush.fill("#ff3d8b", 215);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 140); brush.vertex(620, 120); brush.vertex(620, 330); brush.vertex(-20, 340);
  brush.endShape(true);
  brush.fill("#ff9a7a", 200);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 300); brush.vertex(620, 290); brush.vertex(620, 430); brush.vertex(-20, 430);
  brush.endShape(true);
  // streaky clouds
  brush.fill("#b2297a", 190);
  brush.fillBleed(0.25);
  brush.beginShape(0.7);
  brush.vertex(40, 220); brush.vertex(250, 200); brush.vertex(330, 215); brush.vertex(240, 236); brush.vertex(60, 240);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(330, 270); brush.vertex(560, 256); brush.vertex(590, 270); brush.vertex(520, 285); brush.vertex(360, 288);
  brush.endShape(true);
  // fields in silhouette, layered
  brush.fill("#3a1238", 230);
  brush.fillBleed(0.18);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 420); brush.vertex(300, 408); brush.vertex(620, 418); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#1c0a1f", 230);
  brush.beginShape(0.5);
  brush.vertex(-20, 470); brush.vertex(620, 450); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // hedgerow trees along the horizon
  brush.fill("#2a0d2a", 235);
  brush.fillBleed(0.2);
  const tx = [70, 105, 150, 400, 430, 470, 520];
  for (let i = 0; i < tx.length; i++) {
    brush.circle(tx[i], 405 - (i % 2) * 8, 18 + (i % 3) * 6, 0.6);
  }
  // one tall tree
  brush.beginShape(0.3);
  brush.vertex(252, 420); brush.vertex(268, 420); brush.vertex(266, 340); brush.vertex(254, 340);
  brush.endShape(true);
  brush.circle(260, 320, 40, 0.6);
  brush.circle(240, 340, 26, 0.6);
  brush.circle(282, 336, 28, 0.6);
  // fence posts in the near field
  brush.fill("#120612", 235);
  for (let k = 0; k < 14; k++) {
    const i = k % 7;
    const x = 30 + i * 90;
    brush.beginShape(0);
    brush.vertex(x, 540 - i * 3); brush.vertex(x + 18, 540 - i * 3); brush.vertex(x + 18, 600); brush.vertex(x, 600);
    brush.endShape(true);
  }
  brush.beginShape(0.2);
  brush.vertex(-20, 552); brush.vertex(620, 534); brush.vertex(620, 551); brush.vertex(-20, 569);
  brush.endShape(true);
  // birds
  brush.fill("#2a0d2a", 220);
  brush.circle(420, 180, 4, 0.3);
  brush.circle(440, 170, 3, 0.3);
  brush.circle(455, 186, 3, 0.3);
}
