async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0e1238");
  randomSeed(3412);

  brush.noStroke();
  brush.fill("#5a2aa8", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.6);
  brush.beginShape(0.8);
  brush.vertex(-20, 330);
  brush.vertex(200, 230);
  brush.vertex(420, 110);
  brush.vertex(620, -20);
  brush.vertex(620, 120);
  brush.vertex(430, 230);
  brush.vertex(220, 350);
  brush.vertex(-20, 450);
  brush.endShape(true);
  brush.fill("#b0409a", 170);
  brush.beginShape(0.8);
  brush.vertex(-20, 370);
  brush.vertex(220, 270);
  brush.vertex(430, 150);
  brush.vertex(620, 40);
  brush.vertex(620, 90);
  brush.vertex(430, 200);
  brush.vertex(210, 320);
  brush.vertex(-20, 410);
  brush.endShape(true);
  for (let i = 0; i < 40; i++) {
    let t = random();
    brush.fill(random(["#e0b8f0", "#f0d0e0", "#c0d0ff"]), 150);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.circle(-20 + t * 640 + random(-30, 30), 390 - t * 370 + random(-25, 25), random(4, 12), 0.9);
  }
  for (let i = 0; i < 10; i++) {
    let t = random(0.15, 0.95);
    brush.fill("#1a0e40", 180);
    brush.fillBleed(0.3);
    brush.circle(-20 + t * 640 + random(-10, 10), 390 - t * 370 + random(-8, 8), random(6, 12), 0.9);
  }
  for (let i = 0; i < 300; i++) {
    let t = random();
    let x, y;
    if (random() < 0.55) {
      x = -20 + t * 640 + random(-70, 70);
      y = 390 - t * 370 + random(-50, 50);
    } else {
      x = random(600);
      y = random(440);
    }
    brush.fill(random() < 0.8 ? "#fff6d8" : "#a8e0ff", 240);
    brush.fillBleed(0.05);
    brush.circle(x, y, random(0.8, 2.4), 0.1);
  }

  brush.fill("#fff0b0", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.circle(430, 330, 100, 0.2);
  brush.fill("#fff8dc", 235);
  brush.fillBleed(0.12);
  brush.circle(430, 330, 82, 0.12);
  brush.fill("#fffbee", 230);
  brush.circle(430, 330, 70, 0.1);
  brush.fill("#d8c890", 170);
  brush.fillBleed(0.3);
  brush.circle(405, 310, 18, 0.5);
  brush.circle(458, 350, 13, 0.5);
  brush.circle(440, 300, 9, 0.5);

  for (let p = 0; p < 3; p++) {
    brush.fill(["#1a1e6a", "#0c0f40", "#05061e"][p], 235);
    brush.fillBleed(0.2);
    brush.fillTexture(0.45, 0.4);
    brush.beginShape(0.1);
    brush.vertex(-20, 470 + p * 30);
    brush.vertex(70, 380 + p * 40);
    brush.vertex(140, 420 + p * 35);
    brush.vertex(250, 330 + p * 55);
    brush.vertex(340, 420 + p * 30);
    brush.vertex(440, 380 + p * 40);
    brush.vertex(620, 460 + p * 25);
    brush.vertex(620, 620);
    brush.vertex(-20, 620);
    brush.endShape(true);
  }
  brush.fill("#e8ecff", 200);
  brush.fillBleed(0.2);
  brush.beginShape(0.2);
  brush.vertex(250, 332);
  brush.vertex(278, 356);
  brush.vertex(262, 360);
  brush.vertex(250, 380);
  brush.vertex(236, 358);
  brush.vertex(224, 356);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(70, 382);
  brush.vertex(92, 398);
  brush.vertex(70, 402);
  brush.vertex(54, 398);
  brush.endShape(true);
}
