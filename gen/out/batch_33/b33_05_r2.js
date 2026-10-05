async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0c120e");
  randomSeed(55);
  brush.noStroke();
  // night sky
  brush.fill("#1e3a4a", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 400); brush.vertex(0, 400); brush.endShape(true);
  brush.fill("#3a7a6a", 200);
  brush.beginShape(0.6); brush.vertex(0, 250); brush.vertex(600, 230); brush.vertex(600, 420); brush.vertex(0, 420); brush.endShape(true);
  brush.fill("#fbeec0", 220);
  brush.circle(450, 90, 24, 0.2);
  // distant grove
  for (var i = 0; i < 14; i++) {
    var x = 20 + i * 42 + random(-10, 10);
    brush.fill("#2a5a4a", 150); brush.fillBleed(0.3);
    brush.beginShape(0.3); brush.vertex(x, 420); brush.vertex(x + 16, 420); brush.vertex(x + 18, 270 + random(-30, 30)); brush.vertex(x + 2, 270 + random(-30, 30)); brush.endShape(true);
  }
  // ground
  for (var pass = 0; pass < 2; pass++) {
brush.fill("#101a14", 235);
  brush.beginShape(0.5); brush.vertex(0, 430); brush.vertex(300, 415); brush.vertex(600, 435); brush.vertex(600, 600); brush.vertex(0, 600); brush.endShape(true);
  }
  // near stalks
  for (var j = 0; j < 10; j++) {
    var sx = 10 + j * 62 + random(-12, 12);
    var w = random(18, 28);
    var top = random(60, 160);
    brush.fill("#2a5a3a", 235); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.2); brush.vertex(sx, 600); brush.vertex(sx + w, 600); brush.vertex(sx + w - 2, top); brush.vertex(sx + 2, top); brush.endShape(true);
    brush.fill("#0a140e", 220);
    brush.beginShape(0.2); brush.vertex(sx + w * 0.5, 600); brush.vertex(sx + w, 600); brush.vertex(sx + w - 2, top); brush.vertex(sx + w * 0.5, top); brush.endShape(true);
    for (var k = 1; k < 6; k++) { brush.fill("#4a8a50", 220); brush.circle(sx + w * 0.5, top + k * 85, w * 0.9, 0.3); }
  }
  // warm lights
  brush.fill("#ffb050", 230);
  brush.circle(95, 480, 7, 0.3); brush.circle(260, 505, 6, 0.3); brush.circle(410, 470, 8, 0.3); brush.circle(530, 520, 6, 0.3); brush.circle(170, 540, 5, 0.3); brush.circle(340, 560, 5, 0.3);
  brush.fill("#e8802a", 190); brush.circle(95, 480, 24, 0.5); brush.circle(410, 470, 28, 0.5); brush.circle(260, 505, 20, 0.5);
}
