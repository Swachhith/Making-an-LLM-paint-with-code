async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#1a2c44");
  randomSeed(222);
  brush.noStroke();
  // stars first, on paper
  for (let i = 0; i < 55; i++) {
    brush.fill("#e8f4f2", random(170, 250));
    brush.fillBleed(0.05);
    brush.circle(random(0, 600), random(0, 420), random(0.8, 2.2), 0.2);
  }
  // indigo sky, heavier at top, leaving area near moon lighter
  brush.fill("#1e2f6a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 90); brush.vertex(-20, 150);
  brush.endShape(true);
  // teal halo
  brush.fill("#2f7f8a", 170);
  brush.fillBleed(0.35);
  brush.fillTexture(0.6, 0.6);
  brush.circle(230, 240, 175, 0.5);
  brush.fill("#5fb0ad", 190);
  brush.fillBleed(0.3);
  brush.circle(230, 240, 105, 0.3);
  // huge moon, off-centre left
  brush.fill("#eef4e8", 250);
  brush.fillBleed(0.12);
  brush.fillTexture(0.3, 0.3);
  brush.circle(230, 240, 78, 0.08);
  brush.fill("#fbfdf6", 250);
  brush.circle(232, 238, 72, 0.08);
  brush.fill("#cfdcd2", 150);
  brush.fillBleed(0.25);
  brush.circle(210, 222, 20, 0.6);
  brush.circle(255, 262, 14, 0.6);
  brush.circle(248, 212, 9, 0.6);
  // sea: very dark indigo, low horizon
  brush.fill("#0a1230", 240);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.1);
  brush.vertex(-20, 470); brush.vertex(620, 468); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#10404e", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 530); brush.vertex(620, 515); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // broken moon glitter, irregular dashes widening toward viewer
  for (let i = 0; i < 26; i++) {
    let t = i / 25;
    let y = 474 + t * 125 + random(-3, 3);
    let spread = 12 + t * 80;
    let x = 230 + random(-spread, spread);
    let w = random(8, 18) + t * 18;
    brush.fill("#d6ece2", random(190, 240));
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.4);
    brush.beginShape(0.6);
    brush.vertex(x - w, y); brush.vertex(x + w, y - 1); brush.vertex(x + w * 0.7, y + 4); brush.vertex(x - w * 0.7, y + 4);
    brush.endShape(true);
  }
}
