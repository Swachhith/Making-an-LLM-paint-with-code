async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6ead6");
  randomSeed(77);
  brush.noStroke();
  // sky: orange + rose
  brush.fill("#e87810", 225); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 360); brush.vertex(0, 360); brush.endShape(true);
  brush.fill("#c0204a", 215);
  brush.beginShape(0.7); brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 170); brush.vertex(300, 230); brush.vertex(0, 150); brush.endShape(true);
  brush.fill("#fbe6a8", 200);
  brush.circle(390, 330, 45, 0.3);
  // dark clouds
  brush.fill("#3a2030", 170);
  brush.beginShape(0.8); brush.vertex(30, 90); brush.vertex(200, 60); brush.vertex(260, 100); brush.vertex(120, 130); brush.endShape(true);
  // distant dark line + wet road
  brush.fill("#2a1a26", 225);
  brush.beginShape(0.5); brush.vertex(0, 355); brush.vertex(150, 345); brush.vertex(300, 360); brush.vertex(450, 348); brush.vertex(600, 358); brush.vertex(600, 380); brush.vertex(0, 380); brush.endShape(true);
  brush.fill("#e06a20", 225);
  brush.beginShape(0.5); brush.vertex(0, 380); brush.vertex(600, 380); brush.vertex(600, 600); brush.vertex(0, 600); brush.endShape(true);
  brush.fill("#c0204a", 190);
  brush.beginShape(0.5); brush.vertex(300, 380); brush.vertex(480, 380); brush.vertex(520, 600); brush.vertex(240, 600); brush.endShape(true);
  // puddles reflecting
  [[110,450,60,14],[400,480,90,18],[230,540,70,14],[520,560,60,12]].forEach(function (p) {
    brush.fill("#ffe8a8", 255); brush.fillBleed(0.3);
    brush.beginShape(0.8); brush.vertex(p[0] - p[2], p[1]); brush.vertex(p[0], p[1] - p[3]); brush.vertex(p[0] + p[2], p[1]); brush.vertex(p[0], p[1] + p[3]); brush.endShape(true);
  });
  // dark shoulders
  brush.fill("#2a1a26", 220);
  brush.beginShape(0.5); brush.vertex(0, 420); brush.vertex(120, 400); brush.vertex(200, 600); brush.vertex(0, 600); brush.endShape(true);
  brush.beginShape(0.5); brush.vertex(600, 420); brush.vertex(560, 600); brush.vertex(600, 600); brush.endShape(true);
}
