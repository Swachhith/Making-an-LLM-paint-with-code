async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0e1838");
  randomSeed(7);
  brush.noStroke();
  // stars in warm yellow
  for (let i = 0; i < 70; i++) {
    brush.fill("#f5c542", random(160, 240));
    brush.fillBleed(0.1);
    brush.circle(random(0, 600), random(0, 380), random(1.5, 4), 0.1);
  }
  // beam of light from lamp sweeping left
  brush.fill("#f5c542", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(400, 205);
  brush.vertex(-20, 120);
  brush.vertex(-20, 250);
  brush.vertex(400, 222);
  brush.endShape(true);
  brush.fill("#f5c542", 210);
  brush.circle(400, 212, 22, 0.2);
  // lighthouse silhouette in dark blue
  brush.fill("#050a1e", 240);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.05);
  brush.vertex(372, 470);
  brush.vertex(385, 240);
  brush.vertex(415, 240);
  brush.vertex(428, 470);
  brush.endShape(true);
  brush.beginShape(0.05);
  brush.vertex(378, 200);
  brush.vertex(422, 200);
  brush.vertex(422, 240);
  brush.vertex(378, 240);
  brush.endShape(true);
  brush.beginShape(0.05);
  brush.vertex(375, 200);
  brush.vertex(400, 175);
  brush.vertex(425, 200);
  brush.endShape(true);
  // cliff
  brush.fill("#050a1e", 240);
  brush.fillBleed(0.2);
  brush.beginShape(0.4);
  brush.vertex(250, 620);
  brush.vertex(290, 480);
  brush.vertex(350, 460);
  brush.vertex(460, 462);
  brush.vertex(560, 500);
  brush.vertex(620, 490);
  brush.vertex(620, 620);
  brush.endShape(true);
  // sea with yellow glints
  brush.fill("#07102a", 220);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(-20, 470);
  brush.vertex(300, 480);
  brush.vertex(280, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  for (let i = 0; i < 14; i++) {
    let y = random(490, 590), x = random(20, 260);
    brush.fill("#f5c542", 180);
    brush.fillBleed(0.1);
    brush.beginShape(0.5);
    brush.vertex(x, y);
    brush.vertex(x + 30, y - 2);
    brush.vertex(x + 32, y + 4);
    brush.vertex(x, y + 5);
    brush.endShape(true);
  }
}
