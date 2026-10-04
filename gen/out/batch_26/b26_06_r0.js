async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf3e2");
  randomSeed(2606);
  brush.noStroke();

  // big warm sky: apricot low, gold high, paper left for a glow near the horizon
  brush.fill("#e8b46a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 240); brush.vertex(420, 300);
  brush.vertex(200, 280); brush.vertex(-20, 320);
  brush.endShape(true);
  brush.fill("#f0a070", 170);
  brush.beginShape(0.6);
  brush.vertex(-20, 280); brush.vertex(150, 330); brush.vertex(330, 380); brush.vertex(620, 300);
  brush.vertex(620, 440); brush.vertex(-20, 440);
  brush.endShape(true);

  // soft rosy clouds
  for (let k = 0; k < 6; k++) {
    let x = random(-40, 560), y = random(60, 280), w = random(120, 220);
    brush.fill("#d98068", 180);
    brush.fillBleed(0.3);
    brush.beginShape(0.9);
    brush.vertex(x, y); brush.vertex(x + w * 0.3, y - 22); brush.vertex(x + w * 0.7, y - 16);
    brush.vertex(x + w, y + 4); brush.vertex(x + w * 0.5, y + 18);
    brush.endShape(true);
  }

  // distant blue-violet hills on the low horizon
  brush.fill("#a08aa0", 190);
  brush.beginShape(0.7);
  brush.vertex(-20, 440); brush.vertex(120, 418); brush.vertex(260, 432); brush.vertex(400, 412);
  brush.vertex(620, 430); brush.vertex(620, 470); brush.vertex(-20, 470);
  brush.endShape(true);

  // warm ochre meadows
  brush.fill("#c08a3a", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 460); brush.vertex(620, 455); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#8e5a2a", 200);
  brush.beginShape(0.5);
  brush.vertex(-20, 540); brush.vertex(160, 520); brush.vertex(240, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(420, 620); brush.vertex(480, 515); brush.vertex(620, 530); brush.vertex(620, 620);
  brush.endShape(true);

  // river catching the sky: pale gold path through the fields
  brush.fill("#f2c878", 220);
  brush.fillBleed(0.2);
  brush.beginShape(0.8);
  brush.vertex(300, 462); brush.vertex(330, 462); brush.vertex(380, 500); brush.vertex(300, 545);
  brush.vertex(420, 620); brush.vertex(250, 620); brush.vertex(230, 545); brush.vertex(330, 500);
  brush.endShape(true);

  // a few dark trees along the bank
  brush.fill("#5a3a2a", 210);
  for (let k = 0; k < 8; k++) {
    let x = 180 + k * 40 + random(-10, 10);
    brush.circle(x, 458 + random(-3, 3), random(7, 12), true);
  }
}
