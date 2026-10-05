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
  // sky gradient bands
  brush.fill("#3a1c8a", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 330); brush.vertex(0, 330); brush.endShape(true);
  brush.fill("#8a2a9a", 190);
  brush.beginShape(0.5); brush.vertex(0, 220); brush.vertex(600, 220); brush.vertex(600, 440); brush.vertex(0, 440); brush.endShape(true);
  brush.fill("#e8602a", 190);
  brush.beginShape(0.5); brush.vertex(0, 400); brush.vertex(600, 400); brush.vertex(600, 480); brush.vertex(0, 480); brush.endShape(true);
  // meteor streaks
  var ms = [[110,40,230,200],[380,20,470,150],[250,120,350,260],[500,200,570,300],[60,230,130,330]];
  ms.forEach(function (m) {
    brush.fill("#fff2c0", 230); brush.fillBleed(0.2);
    brush.beginShape(0.2);
    brush.vertex(m[0], m[1]); brush.vertex(m[0] + 18, m[1] + 4); brush.vertex(m[2], m[3]); brush.vertex(m[2] - 8, m[3] - 10);
    brush.endShape(true);
    brush.circle(m[2], m[3], 6, 0.3);
  });
  // stars
  for (var i = 0; i < 40; i++) { brush.fill("#fff6d8", 220); brush.circle(random(600), random(330), random(1.5, 3), 0.2); }
  // desert dunes
  brush.fill("#5a1c3a", 230); brush.fillBleed(0.25);
  brush.beginShape(0.6); brush.vertex(0, 470); brush.vertex(150, 440); brush.vertex(330, 470); brush.vertex(600, 430); brush.vertex(600, 600); brush.vertex(0, 600); brush.endShape(true);
  brush.fill("#2a0e28", 230);
  brush.beginShape(0.6); brush.vertex(0, 540); brush.vertex(200, 505); brush.vertex(430, 545); brush.vertex(600, 520); brush.vertex(600, 600); brush.vertex(0, 600); brush.endShape(true);
  // saguaro
  brush.fill("#120818", 240);
  brush.beginShape(0.3); brush.vertex(450, 560); brush.vertex(450, 440); brush.vertex(472, 440); brush.vertex(472, 560); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(410, 500); brush.vertex(410, 470); brush.vertex(430, 470); brush.vertex(430, 510); brush.vertex(455, 515); brush.vertex(455, 530); brush.vertex(410, 520); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(472, 480); brush.vertex(500, 470); brush.vertex(500, 420); brush.vertex(520, 420); brush.vertex(520, 490); brush.vertex(472, 505); brush.endShape(true);
}
