async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7f1e6");
  randomSeed(33);
  brush.noStroke();
  brush.fill("#f89a28", 220); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 390); brush.vertex(0, 390); brush.endShape(true);
  brush.fill("#e0402a", 205);
  brush.beginShape(0.5); brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 170); brush.vertex(0, 210); brush.endShape(true);
  brush.fill("#a8284a", 170);
  brush.beginShape(0.5); brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 60); brush.vertex(0, 90); brush.endShape(true);
  brush.fill("#fff0b8", 235);
  brush.circle(110, 320, 50, 0.3);
  // water
  brush.fill("#1e4a6a", 225); brush.fillBleed(0.3);
  brush.beginShape(0.4); brush.vertex(0, 385); brush.vertex(600, 385); brush.vertex(600, 600); brush.vertex(0, 600); brush.endShape(true);
  brush.fill("#f09040", 180);
  brush.beginShape(0.5); brush.vertex(60, 390); brush.vertex(170, 390); brush.vertex(190, 560); brush.vertex(70, 560); brush.endShape(true);
  // reflection
  brush.fill("#0e0e16", 190);
  brush.beginShape(0.4); brush.vertex(345, 400); brush.vertex(525, 400); brush.vertex(520, 490); brush.vertex(350, 490); brush.endShape(true);
  for (var pass = 0; pass < 3; pass++) {
brush.fill("#0e0e16", 245);
  [350, 390, 435, 475, 505].forEach(function (x) {
    brush.beginShape(0.2); brush.vertex(x, 335); brush.vertex(x + 16, 335); brush.vertex(x + 16, 420); brush.vertex(x, 420); brush.endShape(true);
  });
  brush.beginShape(0.3); brush.vertex(320, 318); brush.vertex(540, 318); brush.vertex(540, 342); brush.vertex(320, 342); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(350, 245); brush.vertex(510, 245); brush.vertex(510, 322); brush.vertex(350, 322); brush.endShape(true);
  brush.beginShape(0.2); brush.vertex(325, 255); brush.vertex(430, 185); brush.vertex(535, 255); brush.vertex(510, 265); brush.vertex(350, 265); brush.endShape(true);
  brush.beginShape(0.2); brush.vertex(420, 150); brush.vertex(440, 150); brush.vertex(440, 195); brush.vertex(420, 195); brush.endShape(true);
  }
  brush.fill("#fcd470", 240);
  brush.beginShape(0.2); brush.vertex(380, 272); brush.vertex(412, 272); brush.vertex(412, 306); brush.vertex(380, 306); brush.endShape(true);
  brush.beginShape(0.2); brush.vertex(452, 272); brush.vertex(480, 272); brush.vertex(480, 300); brush.vertex(452, 300); brush.endShape(true);
  // birds
  brush.fill("#2a1a28", 220);
  brush.circle(190, 110, 6, 0.4); brush.circle(225, 95, 5, 0.4); brush.circle(262, 118, 5, 0.4);
  // far reeds and ripples
  brush.fill("#0e0e16", 220);
  brush.beginShape(0.5); brush.vertex(0, 380); brush.vertex(90, 366); brush.vertex(180, 384); brush.vertex(180, 400); brush.vertex(0, 400); brush.endShape(true);
  brush.fill("#0e0e16", 170);
  brush.beginShape(0.3); brush.vertex(0, 530); brush.vertex(300, 518); brush.vertex(300, 540); brush.vertex(0, 552); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(300, 570); brush.vertex(600, 560); brush.vertex(600, 585); brush.vertex(300, 592); brush.endShape(true);
}
