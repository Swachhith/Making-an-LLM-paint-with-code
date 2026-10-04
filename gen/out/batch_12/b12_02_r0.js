async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#16263a");
  randomSeed(202);
  brush.noStroke();
  // sky: indigo washes, leaving a pale halo region around the moon as bare darker paper-lighter
  brush.fill("#2b4a7a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 460); brush.vertex(-20, 460);
  brush.endShape(true);
  // teal glow around moon
  brush.fill("#3f8c96", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(390, 210, 150, 0.4);
  brush.fill("#6fb8b4", 190);
  brush.fillBleed(0.25);
  brush.circle(390, 210, 95, 0.3);
  // moon: pale layered circles
  brush.fill("#e9f1e6", 240);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.circle(390, 210, 62, 0.1);
  brush.fill("#f7fbf2", 240);
  brush.circle(392, 208, 56, 0.1);
  // soft moon craters
  brush.fill("#c9d8cf", 150);
  brush.fillBleed(0.2);
  brush.circle(378, 196, 14, 0.5);
  brush.circle(405, 225, 10, 0.5);
  // sea: dark indigo band
  brush.fill("#0f1c3a", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.2);
  brush.vertex(-20, 455); brush.vertex(620, 452); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#1d4a5a", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 500); brush.vertex(620, 490); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // moon path on the water
  for (let i = 0; i < 12; i++) {
    let y = 465 + i * 11;
    let w = 12 + i * 5 + random(-5, 5);
    brush.fill("#cfe6dc", 220 - i * 6);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.4);
    brush.beginShape(0.6);
    brush.vertex(390 - w + random(-6, 6), y);
    brush.vertex(390 + w + random(-6, 6), y + 1);
    brush.vertex(390 + w * 0.8, y + 5);
    brush.vertex(390 - w * 0.8, y + 5);
    brush.endShape(true);
  }
  // stars
  for (let i = 0; i < 40; i++) {
    brush.fill("#eaf4ff", random(160, 240));
    brush.fillBleed(0.05);
    brush.circle(random(0, 600), random(0, 400), random(1, 2.5), 0.2);
  }
}
