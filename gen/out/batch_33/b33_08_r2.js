async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#241624");
  randomSeed(88);
  brush.noStroke();
  brush.fill("#ffb020", 235); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 400); brush.vertex(0, 400); brush.endShape(true);
  brush.fill("#f05a20", 215);
  brush.beginShape(0.7); brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 240); brush.vertex(0, 270); brush.endShape(true);
  brush.fill("#a82a5a", 200);
  brush.beginShape(0.7); brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 100); brush.vertex(0, 130); brush.endShape(true);
  brush.fill("#fff0b0", 245);
  brush.circle(300, 340, 52, 0.3);
  // dark water with glow path
  brush.fill("#4a1e34", 225); brush.fillBleed(0.3);
  brush.beginShape(0.4); brush.vertex(0, 400); brush.vertex(600, 400); brush.vertex(600, 600); brush.vertex(0, 600); brush.endShape(true);
  brush.fill("#ffa830", 215);
  brush.beginShape(0.6); brush.vertex(235, 405); brush.vertex(365, 405); brush.vertex(400, 600); brush.vertex(200, 600); brush.endShape(true);
  brush.fill("#2a1228", 235);
  brush.beginShape(0.5); brush.vertex(0, 392); brush.vertex(110, 378); brush.vertex(220, 396); brush.vertex(220, 412); brush.vertex(0, 412); brush.endShape(true);
  brush.beginShape(0.5); brush.vertex(480, 395); brush.vertex(600, 380); brush.vertex(600, 410); brush.vertex(480, 410); brush.endShape(true);
  var bt = [[120,470,1.5],[440,480,1.8],[300,425,0.8]]; bt.concat(bt, bt).forEach(function (b) {
    var x = b[0], y = b[1], s = b[2];
    brush.fill("#120a18", 250);
    brush.beginShape(0.3); brush.vertex(x - 50 * s, y); brush.vertex(x + 50 * s, y); brush.vertex(x + 30 * s, y + 20 * s); brush.vertex(x - 30 * s, y + 20 * s); brush.endShape(true);
    brush.beginShape(0.2); brush.vertex(x - 2 * s, y - 100 * s); brush.vertex(x + 14 * s, y - 100 * s); brush.vertex(x + 14 * s, y); brush.vertex(x - 2 * s, y); brush.endShape(true);
    brush.beginShape(0.2); brush.vertex(x + 16 * s, y - 92 * s); brush.vertex(x + 58 * s, y - 5 * s); brush.vertex(x + 16 * s, y - 5 * s); brush.endShape(true);
    brush.beginShape(0.2); brush.vertex(x - 4 * s, y - 80 * s); brush.vertex(x - 36 * s, y - 8 * s); brush.vertex(x - 4 * s, y - 8 * s); brush.endShape(true);
    brush.fill("#3a1a30", 170);
    brush.beginShape(0.5); brush.vertex(x - 40 * s, y + 24 * s); brush.vertex(x + 40 * s, y + 24 * s); brush.vertex(x + 30 * s, y + 60 * s); brush.vertex(x - 30 * s, y + 60 * s); brush.endShape(true);
  });
  for (var q = 0; q < 3; q++) {
  brush.fill("#120a18", 250);
  brush.beginShape(0.4); brush.vertex(0, 545); brush.vertex(180, 528); brush.vertex(300, 550); brush.vertex(300, 600); brush.vertex(0, 600); brush.endShape(true);
  brush.beginShape(0.2); brush.vertex(30, 430); brush.vertex(50, 430); brush.vertex(50, 545); brush.vertex(30, 545); brush.endShape(true);
  }
}
