async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3e4cc");
  randomSeed(88);
  brush.noStroke();
  // glowing sky
  brush.fill("#f8b030", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 400); brush.vertex(0, 400); brush.endShape(true);
  brush.fill("#e0502a", 190);
  brush.beginShape(0.7); brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 220); brush.vertex(0, 260); brush.endShape(true);
  brush.fill("#9a2a5a", 170);
  brush.beginShape(0.7); brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 80); brush.vertex(0, 110); brush.endShape(true);
  brush.fill("#fde8a0", 200);
  brush.circle(300, 330, 50, 0.3);
  // water
  brush.fill("#d86a30", 190); brush.fillBleed(0.3);
  brush.beginShape(0.4); brush.vertex(0, 400); brush.vertex(600, 400); brush.vertex(600, 600); brush.vertex(0, 600); brush.endShape(true);
  brush.fill("#fbc050", 180);
  brush.beginShape(0.6); brush.vertex(250, 405); brush.vertex(350, 405); brush.vertex(380, 590); brush.vertex(220, 590); brush.endShape(true);
  // far shore
  brush.fill("#3a2236", 220);
  brush.beginShape(0.5); brush.vertex(0, 395); brush.vertex(100, 385); brush.vertex(200, 398); brush.vertex(200, 410); brush.vertex(0, 410); brush.endShape(true);
  // boats: hulls and masts
  [[110,440,1],[430,455,1.3],[520,420,0.8]].forEach(function (b) {
    var x = b[0], y = b[1], s = b[2];
    brush.fill("#1a1220", 235);
    brush.beginShape(0.3); brush.vertex(x - 50 * s, y); brush.vertex(x + 50 * s, y); brush.vertex(x + 32 * s, y + 20 * s); brush.vertex(x - 32 * s, y + 20 * s); brush.endShape(true);
    brush.beginShape(0.2); brush.vertex(x - 2 * s, y - 100 * s); brush.vertex(x + 14 * s, y - 100 * s); brush.vertex(x + 14 * s, y); brush.vertex(x - 2 * s, y); brush.endShape(true);
    brush.beginShape(0.2); brush.vertex(x + 16 * s, y - 90 * s); brush.vertex(x + 55 * s, y - 5 * s); brush.vertex(x + 16 * s, y - 5 * s); brush.endShape(true);
    brush.fill("#2a1a28", 130);
    brush.beginShape(0.5); brush.vertex(x - 40 * s, y + 24 * s); brush.vertex(x + 40 * s, y + 24 * s); brush.vertex(x + 30 * s, y + 55 * s); brush.vertex(x - 30 * s, y + 55 * s); brush.endShape(true);
  });
  // dark foreground quay
  brush.fill("#1a1220", 240);
  brush.beginShape(0.4); brush.vertex(0, 540); brush.vertex(180, 525); brush.vertex(300, 545); brush.vertex(300, 600); brush.vertex(0, 600); brush.endShape(true);
  brush.beginShape(0.2); brush.vertex(40, 440); brush.vertex(56, 440); brush.vertex(56, 540); brush.vertex(40, 540); brush.endShape(true);
}
