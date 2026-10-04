async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4f6f8");
  randomSeed(5105);

  brush.noStroke();
  brush.fill("#6fa8e0", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.6);
  brush.beginShape(0.8);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 160);
  brush.vertex(420, 200);
  brush.vertex(200, 150);
  brush.vertex(-20, 210);
  brush.endShape(true);
  brush.fill("#e9b86a", 190);
  brush.beginShape(0.8);
  brush.vertex(-20, 150);
  brush.vertex(260, 180);
  brush.vertex(620, 150);
  brush.vertex(620, 300);
  brush.vertex(-20, 330);
  brush.endShape(true);
  for (let i = 0; i < 5; i++) {
    brush.fill("#b79ad8", 170);
    brush.fillBleed(0.3);
    brush.circle(random(0, 600), random(120, 220), random(25, 45), 1);
  }

  brush.fill("#7aa65a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.55, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 370);
  brush.vertex(200, 330);
  brush.vertex(420, 280);
  brush.vertex(620, 260);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  for (let r = 0; r < 5; r++) {
    brush.fill(r % 2 ? "#8a5fc8" : "#a47ad8", 190);
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.5);
    brush.beginShape(0.7);
    brush.vertex(-20, 420 + r * 45);
    brush.vertex(620, 350 + r * 60);
    brush.vertex(620, 375 + r * 62);
    brush.vertex(-20, 445 + r * 48);
    brush.endShape(true);
  }
  for (let i = 0; i < 7; i++) {
    let x = random(0, 600), y = random(470, 590);
    brush.fill("#6a3aa8", 200);
    brush.fillBleed(0.3);
    brush.circle(x, y, random(12, 30), 1);
    brush.beginShape(0.5);
    brush.vertex(x - 5, y);
    brush.vertex(x + 5, y);
    brush.vertex(x + 4, y + 50);
    brush.vertex(x - 4, y + 50);
    brush.endShape(true);
  }

  for (let i = 0; i < 7; i++) {
    let x = 300 + i * 38;
    let base = 318 - i * 8.5;
    let h = 110 + random(-10, 25);
    let w = 26;
    brush.fill("#2a7a3a", 200);
    brush.fillBleed(0.3);
    brush.fillTexture(0.55, 0.5);
    brush.beginShape(0.7);
    brush.vertex(x, base - h);
    brush.vertex(x + w * 0.55, base - h * 0.5);
    brush.vertex(x + w * 0.4, base + 4);
    brush.vertex(x - w * 0.4, base + 4);
    brush.vertex(x - w * 0.55, base - h * 0.5);
    brush.endShape(true);
    brush.fill("#0e3a20", 205);
    brush.beginShape(0.8);
    brush.vertex(x + 2, base - h * 0.8);
    brush.vertex(x + w * 0.45, base - h * 0.4);
    brush.vertex(x + w * 0.3, base);
    brush.vertex(x - 2, base);
    brush.endShape(true);
    brush.fill("#2a6e3a", 180);
    brush.beginShape(0.5);
    brush.vertex(x - 7, base);
    brush.vertex(x + 7, base);
    brush.vertex(x + 6, base + random(30, 55));
    brush.vertex(x - 6, base + random(30, 55));
    brush.endShape(true);
  }
  for (let i = 0; i < 6; i++) {
    let x = random(80, 560), y = random(20, 120);
    brush.fill("#3a78c8", 190);
    brush.fillBleed(0.3);
    brush.beginShape(0.5);
    brush.vertex(x - 6, y);
    brush.vertex(x + 6, y);
    brush.vertex(x + 4, y + random(40, 90));
    brush.vertex(x - 4, y + random(40, 90));
    brush.endShape(true);
  }
  for (let i = 0; i < 25; i++) {
    brush.fill(random(["#2a6e3a", "#6a3aa8", "#e0a040"]), 200);
    brush.fillBleed(0.3);
    brush.circle(random(0, 600), random(0, 600), random(2, 6), 0.5);
  }
}
