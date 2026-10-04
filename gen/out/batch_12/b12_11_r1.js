async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0e1016");
  randomSeed(1101);
  brush.noStroke();
  // a denser field of stars, some bigger
  for (let i = 0; i < 140; i++) {
    brush.fill("#f6eed8", random(180, 255));
    brush.fillBleed(0.03);
    brush.circle(random(0, 600), random(0, 470), random(0.6, 2.2), 0.2);
  }
  for (let i = 0; i < 6; i++) {
    brush.fill("#fff4d0", 250);
    brush.fillBleed(0.1);
    brush.circle(random(0, 600), random(0, 300), random(3, 4.5), 0.2);
  }
  let x = 330;
  // warm beam: layered amber fan toward left
  for (let p = 0; p < 2; p++) {
    brush.fill(p ? "#ffcf6a" : "#e89a2a", p ? 220 : 200);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.3);
    brush.vertex(x - 10, 128); brush.vertex(-20, 60 + p * 30); brush.vertex(-20, 200 - p * 30); brush.vertex(x - 10, 142);
    brush.endShape(true);
  }
  // tower painted three times so it reads on dark paper
  for (let p = 0; p < 3; p++) {
    brush.fill("#efe6d2", 250);
    brush.fillBleed(0.06);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.02);
    brush.vertex(x - 17, 160); brush.vertex(x + 17, 160); brush.vertex(x + 30, 500); brush.vertex(x - 30, 500);
    brush.endShape(true);
  }
  // shaded right side of tower
  brush.fill("#1a1a22", 200);
  brush.fillBleed(0.1);
  brush.beginShape(0.02);
  brush.vertex(x + 4, 160); brush.vertex(x + 17, 160); brush.vertex(x + 30, 500); brush.vertex(x + 10, 500);
  brush.endShape(true);
  // gallery + lantern
  for (let p = 0; p < 2; p++) {
    brush.fill("#ffa62a", 255);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.circle(x, 135, 32, 0.3);
  }
  brush.fill("#fff0b0", 255);
  brush.fillBleed(0.1);
  brush.circle(x, 136, 13, 0.2);
  brush.fill("#050508", 250);
  brush.beginShape(0.05);
  brush.vertex(x - 24, 112); brush.vertex(x, 86); brush.vertex(x + 24, 112);
  brush.endShape(true);
  brush.beginShape(0.05);
  brush.vertex(x - 26, 156); brush.vertex(x + 26, 156); brush.vertex(x + 26, 166); brush.vertex(x - 26, 166);
  brush.endShape(true);
  // black rocks at base
  brush.fill("#030304", 250);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 540); brush.vertex(150, 520); brush.vertex(260, 480); brush.vertex(420, 490); brush.vertex(560, 530); brush.vertex(620, 540); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // keeper's window and warm reflections on the sea strip
  brush.fill("#ffb040", 255);
  brush.fillBleed(0.1);
  brush.circle(x - 8, 350, 5, 0.1);
  brush.circle(420, 500, 6, 0.1);
  for (let i = 0; i < 10; i++) {
    brush.fill("#d89030", 220);
    brush.fillBleed(0.1);
    brush.beginShape(0.5);
    let yy = 555 + i * 6, xx = random(40, 560);
    brush.vertex(xx - 16, yy); brush.vertex(xx + 16, yy); brush.vertex(xx + 12, yy + 3); brush.vertex(xx - 12, yy + 3);
    brush.endShape(true);
  }
}
