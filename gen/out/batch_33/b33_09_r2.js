async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#14161c");
  randomSeed(99);
  brush.noStroke();
  // fog
  brush.fill("#3a4a5a", 225); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6); brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 600); brush.vertex(0, 600); brush.endShape(true);
  brush.fill("#7a8a98", 190);
  brush.beginShape(0.8); brush.vertex(0, 300); brush.vertex(600, 250); brush.vertex(600, 520); brush.vertex(0, 560); brush.endShape(true);
  // tower body
  for (var pass = 0; pass < 3; pass++) {
brush.fill("#1c1a24", 245); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.2); brush.vertex(170, 600); brush.vertex(185, 170); brush.vertex(420, 170); brush.vertex(440, 600); brush.endShape(true);
  brush.fill("#14121a", 225);
  brush.beginShape(0.2); brush.vertex(320, 600); brush.vertex(325, 170); brush.vertex(420, 170); brush.vertex(440, 600); brush.endShape(true);
  // roof
  brush.fill("#1a1620", 235);
  brush.beginShape(0.2); brush.vertex(150, 190); brush.vertex(300, 20); brush.vertex(455, 190); brush.endShape(true);
  // ledges
  brush.fill("#0e0c12", 225);
  [300, 430].forEach(function (y) { brush.beginShape(0.2); brush.vertex(160, y); brush.vertex(450, y); brush.vertex(450, y + 18); brush.vertex(160, y + 18); brush.endShape(true); });
  }
  // windows (warm)
  [[230,230],[330,230],[230,350],[345,350],[260,480],[360,480]].forEach(function (w) {
    brush.fill("#ffc050", 255); brush.fillBleed(0.2);
    brush.beginShape(0.2); brush.vertex(w[0], w[1]); brush.vertex(w[0] + 30, w[1]); brush.vertex(w[0] + 30, w[1] + 50); brush.vertex(w[0], w[1] + 50); brush.endShape(true);
    brush.fill("#e87a20", 120);
    brush.circle(w[0] + 15, w[1] + 25, 38, 0.6);
  });
  // fog drift across base
  brush.fill("#9aa8b4", 170);
  brush.beginShape(0.9); brush.vertex(0, 480); brush.vertex(300, 440); brush.vertex(600, 490); brush.vertex(600, 600); brush.vertex(0, 600); brush.endShape(true);
}
