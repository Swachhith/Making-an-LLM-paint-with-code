async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8e4d6");
  randomSeed(31337);
  brush.noStroke();

  // far fields, low hills
  brush.fill("#b8b29a", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, 420); brush.vertex(150, 400); brush.vertex(350, 430); brush.vertex(620, 410); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#9aa38a", 160);
  brush.beginShape(0.8);
  brush.vertex(-20, 520); brush.vertex(200, 480); brush.vertex(450, 520); brush.vertex(620, 500); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // meadow
  brush.fill("#8a846a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 470); brush.vertex(620, 450); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // path
  brush.fill("#5e5a4a", 220);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(100, 500); brush.vertex(250, 500); brush.vertex(250, 620); brush.vertex(100, 620);
  brush.endShape(true);

  // windmill
  let x = 250, y = 330;
  brush.fill("#6f644a", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(x - 14, y); brush.vertex(x + 14, y); brush.vertex(x + 14, y + 140); brush.vertex(x - 14, y + 140);
  brush.endShape(true);
  brush.fill("#5a4e3a", 200);
  brush.beginShape(0.3);
  brush.vertex(x - 14, y + 140); brush.vertex(x - 14, y + 160); brush.vertex(x + 14, y + 160); brush.vertex(x + 14, y + 140);
  brush.endShape(true);
  brush.fill("#3a3224", 180);
  brush.beginShape(0.3);
  brush.vertex(x - 14, y + 140); brush.vertex(x - 14, y + 160); brush.vertex(x, y + 175); brush.vertex(x + 14, y + 160); brush.vertex(x + 14, y + 140);
  brush.endShape(true);
  brush.fill("#7a745a", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(x - 10, y - 10); brush.vertex(x + 10, y - 10); brush.vertex(x + 10, y + 10); brush.vertex(x - 10, y + 10);
  brush.endShape(true);
  // sails
  for (let i = 0; i < 4; i++) {
    let a = i * 90;
    brush.fill("#5a5240", 210);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.5);
    brush.vertex(x, y);
    brush.vertex(x + cos(a - 45) * 120, y + sin(a - 45) * 120);
    brush.vertex(x + cos(a + 15) * 120, y + sin(a + 15) * 120);
    brush.vertex(x + cos(a + 15) * 70, y + sin(a + 15) * 70);
    brush.vertex(x + cos(a - 45) * 70, y + sin(a - 45) * 70);
    brush.endShape(true);
  }
  // cap
  brush.fill("#4a4230", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(x - 12, y - 12); brush.vertex(x + 12, y - 12); brush.vertex(x + 12, y + 12); brush.vertex(x - 12, y + 12);
  brush.endShape(true);
  brush.fill("#c8b8a8", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.4);
  brush.vertex(x - 8, y - 8); brush.vertex(x + 8, y - 8); brush.vertex(x + 8, y + 8); brush.vertex(x - 8, y + 8);
  brush.endShape(true);
  // shadow
  brush.fill("#3a3224", 160);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(x - 16, y + 150); brush.vertex(x + 16, y + 150); brush.vertex(x + 20, y + 200); brush.vertex(x - 20, y + 200);
  brush.endShape(true);
}
