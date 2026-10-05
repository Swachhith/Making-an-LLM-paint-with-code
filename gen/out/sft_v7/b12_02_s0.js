async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#1a2a4a");
  brush.noStroke();

  // teal indigo sky, two passes, wide and low
  brush.fill("#1f3a5a", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 330); brush.vertex(-20, 340);
  brush.endShape(true);
  brush.fill("#122642", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 150); brush.vertex(300, 170); brush.vertex(-20, 150);
  brush.endShape(true);
  // teal glow around the moon
  brush.fill("#3a6a6a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(300, 120, 90, 0.8);

  // full moon, paper left, ring of teal shadow
  brush.fill("#0e1a2a", 220);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.circle(300, 120, 58, 0.2);
  brush.fill("#1a2a4a", 230);
  brush.fillBleed(0.15);
  brush.circle(300, 120, 52, 0.2);

  // sea, dark teal with indigo ripples
  brush.fill("#0a141e", 230);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 340); brush.vertex(620, 340); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#1a2a4a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, 440); brush.vertex(620, 430); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#2a3a5a", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(-20, 500); brush.vertex(300, 490); brush.vertex(620, 505); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // moon reflection
  brush.fill("#3a6a6a", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(-20, 470); brush.vertex(620, 460); brush.vertex(620, 500); brush.vertex(-20, 510);
  brush.endShape(true);
  // stars
  for (let i = 0; i < 30; i++) {
    let x = random(0, 600), y = random(0, 300);
    brush.fill("#cfe0f0", 230);
    brush.fillBleed(0.05);
    brush.fillTexture(0.2, 0.2);
    brush.circle(x, y, random(1.5, 3), 0.1);
  }
}
