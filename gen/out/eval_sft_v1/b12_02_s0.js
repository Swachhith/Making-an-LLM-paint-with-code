async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#1a2a44");
  randomSeed(1111);

  // indigo sky, deeper at the zenith
  brush.noStroke();
  brush.fill("#1a2a44", 230);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 420); brush.vertex(-20, 420);
  brush.endShape(true);
  brush.fill("#2e3a6a", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 180); brush.vertex(300, 220); brush.vertex(-20, 160);
  brush.endShape(true);
  // faint stars
  for (let i = 0; i < 130; i++) {
    let x = random(0, 600), y = random(0, 420);
    brush.fill("#cfe6f2", random(150, 230));
    brush.fillBleed(0.15);
    brush.fillTexture(0.2, 0.2);
    brush.circle(x, y, random(1, 2.2), 0.3);
  }

  // full moon, huge and pale, near the horizon
  brush.fill("#f6f4e8", 245);
  brush.fillBleed(0.25);
  brush.fillTexture(0.3, 0.3);
  brush.circle(300, 390, 100, 0.4);
  brush.fill("#fffdf0", 255);
  brush.fillBleed(0.15);
  brush.fillTexture(0.2, 0.2);
  brush.circle(300, 390, 72, 0.2);

  // sea, teal with a darker indigo band at the bottom
  brush.fill("#1f7a8a", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 420); brush.vertex(620, 420); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#0f4a5a", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 530); brush.vertex(620, 530); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // moonlit reflections as faint teal streaks
  for (let i = 0; i < 6; i++) {
    let y = 440 + i * 22;
    brush.fill("#4aa8b0", 160);
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.8);
    brush.vertex(300 - 20 - i * 12, y); brush.vertex(300 + 20 + i * 12, y);
    brush.vertex(300 + 45, y + 22); brush.vertex(300 - 45, y + 22);
    brush.endShape(true);
  }
}
