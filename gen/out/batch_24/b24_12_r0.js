async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0f1440");
  randomSeed(2412);

  brush.noStroke();
  for (let i = 0; i < 16; i++) {
    let t = i / 15;
    let x = -20 + t * 640 + random(-20, 20);
    let y = 360 - t * 330 + random(-20, 20);
    brush.fill(random() < 0.5 ? "#7a3cc8" : "#c24aa0", 170);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.circle(x, y, random(40, 70), 0.9);
  }
  for (let i = 0; i < 10; i++) {
    let t = random();
    brush.fill("#e8c8f0", 170);
    brush.fillBleed(0.3);
    brush.circle(-20 + t * 640, 360 - t * 330 + random(-10, 10), random(15, 30), 0.8);
  }
  for (let i = 0; i < 220; i++) {
    let t = random();
    let x, y;
    if (random() < 0.6) {
      x = -20 + t * 640 + random(-60, 60);
      y = 360 - t * 330 + random(-60, 60);
    } else {
      x = random(600);
      y = random(420);
    }
    brush.fill(random() < 0.8 ? "#fff6d8" : "#a8e0ff", 230);
    brush.fillBleed(0.05);
    brush.circle(x, y, random(0.8, 2.6), 0.1);
  }

  brush.fill("#fff3c0", 220);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.circle(160, 150, 80, 0.2);
  brush.fill("#fffbe6", 230);
  brush.circle(160, 150, 70, 0.15);
  brush.fill("#e0d4a0", 160);
  brush.circle(140, 135, 16, 0.4);
  brush.circle(185, 170, 11, 0.4);
  brush.circle(170, 125, 8, 0.4);

  brush.fill("#2a2f8a", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.45, 0.4);
  brush.beginShape(0.1);
  brush.vertex(-20, 450);
  brush.vertex(80, 360);
  brush.vertex(150, 400);
  brush.vertex(260, 300);
  brush.vertex(360, 390);
  brush.vertex(460, 330);
  brush.vertex(620, 420);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);

  brush.fill("#4a58c8", 170);
  brush.fillBleed(0.2);
  brush.beginShape(0.1);
  brush.vertex(260, 302);
  brush.vertex(300, 338);
  brush.vertex(270, 370);
  brush.vertex(250, 330);
  brush.endShape(true);

  brush.fill("#060820", 235);
  brush.fillBleed(0.2);
  brush.beginShape(0.2);
  brush.vertex(-20, 520);
  brush.vertex(120, 470);
  brush.vertex(240, 500);
  brush.vertex(400, 455);
  brush.vertex(620, 510);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
}
