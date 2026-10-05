async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#1a1440");
  randomSeed(22);
  brush.noStroke();
  brush.fill("#4a24a8", 215); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 330); brush.vertex(0, 330); brush.endShape(true);
  brush.fill("#a02ab0", 205);
  brush.beginShape(0.6); brush.vertex(0, 240); brush.vertex(600, 220); brush.vertex(600, 440); brush.vertex(0, 440); brush.endShape(true);
  brush.fill("#ff6a20", 225);
  brush.beginShape(0.6); brush.vertex(0, 380); brush.vertex(600, 370); brush.vertex(600, 500); brush.vertex(0, 500); brush.endShape(true);
  brush.fill("#ffc040", 200);
  brush.beginShape(0.8); brush.vertex(100, 440); brush.vertex(500, 430); brush.vertex(500, 490); brush.vertex(100, 490); brush.endShape(true);
  var ms = [[110,30,235,210],[380,10,490,170],[250,110,350,270],[520,190,585,290],[40,220,120,340]];
  ms.forEach(function (m) {
    brush.fill("#fff2c0", 240); brush.fillBleed(0.2);
    brush.beginShape(0.2);
    brush.vertex(m[0], m[1]); brush.vertex(m[0] + 22, m[1] + 5); brush.vertex(m[2], m[3]); brush.vertex(m[2] - 10, m[3] - 12);
    brush.endShape(true);
    brush.fill("#ffffff", 240); brush.circle(m[2], m[3], 7, 0.3);
    brush.fill("#ffb060", 150); brush.circle(m[2], m[3], 16, 0.5);
  });
  for (var i = 0; i < 50; i++) { brush.fill("#fff6d8", 230); brush.circle(random(600), random(320), random(1.5, 3.5), 0.2); }
  // dunes
  brush.fill("#6a1a40", 235); brush.fillBleed(0.25);
  brush.beginShape(0.6); brush.vertex(0, 490); brush.vertex(150, 455); brush.vertex(330, 490); brush.vertex(600, 450); brush.vertex(600, 600); brush.vertex(0, 600); brush.endShape(true);
  brush.fill("#3a0e30", 240);
  brush.beginShape(0.6); brush.vertex(0, 550); brush.vertex(200, 520); brush.vertex(430, 555); brush.vertex(600, 530); brush.vertex(600, 600); brush.vertex(0, 600); brush.endShape(true);
  // saguaro lower, against the glow
  brush.fill("#100616", 250);
  brush.beginShape(0.3); brush.vertex(300, 540); brush.vertex(300, 380); brush.vertex(330, 380); brush.vertex(330, 540); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(255, 450); brush.vertex(255, 405); brush.vertex(280, 405); brush.vertex(280, 440); brush.vertex(305, 445); brush.vertex(305, 475); brush.vertex(255, 470); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(328, 420); brush.vertex(355, 415); brush.vertex(355, 355); brush.vertex(380, 355); brush.vertex(380, 440); brush.vertex(328, 450); brush.endShape(true);
}
