async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4f6f8");
  randomSeed(5005);

  brush.noStroke();
  let skyDabs = ["#7fb2e5", "#b9a2d8", "#f0c27a", "#8fc4e0"];
  for (let i = 0; i < 12; i++) {
    brush.fill(random(skyDabs), 170);
    brush.fillBleed(0.3);
    brush.fillTexture(0.55, 0.55);
    brush.circle(random(-20, 620), random(20, 250), random(60, 120), 0.9);
  }

  brush.fill("#8cb06a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 360);
  brush.vertex(200, 320);
  brush.vertex(420, 270);
  brush.vertex(620, 250);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);

  for (let i = 0; i < 10; i++) {
    let x = random(-20, 620);
    let y = random(420, 600);
    brush.fill(random() < 0.6 ? "#9b6fd0" : "#d9a33a", 190);
    brush.fillBleed(0.3);
    brush.fillTexture(0.55, 0.5);
    brush.circle(x, y, random(30, 70), 0.9);
  }

  let n = 7;
  for (let i = 0; i < n; i++) {
    let x = 300 + i * 38;
    let base = 318 - i * 8.5;
    let h = 95 + random(-10, 20);
    let w = 26;
    brush.fill("#2f7a3c", 190);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.7);
    brush.vertex(x, base - h);
    brush.vertex(x + w * 0.55, base - h * 0.5);
    brush.vertex(x + w * 0.4, base + 4);
    brush.vertex(x - w * 0.4, base + 4);
    brush.vertex(x - w * 0.55, base - h * 0.5);
    brush.endShape(true);
    brush.fill("#124a2a", 190);
    brush.fillBleed(0.3);
    brush.circle(x + 3, base - h * 0.35, 9, 0.8);
    brush.circle(x - 2, base - h * 0.7, 7, 0.8);
  }

  for (let i = 0; i < 18; i++) {
    let x = random(300, 560);
    let y = random(200, 330);
    brush.fill("#1f5a38", 180);
    brush.fillBleed(0.3);
    brush.circle(x, y + 30, random(2, 5), 0.3);
  }
  for (let i = 0; i < 5; i++) {
    let x = 330 + i * 48 + random(-6, 6);
    let y = 320 - i * 10;
    brush.fill("#2b6e3a", 170);
    brush.fillBleed(0.25);
    brush.beginShape(0.5);
    brush.vertex(x - 8, y);
    brush.vertex(x + 8, y);
    brush.vertex(x + 7, y + random(25, 45));
    brush.vertex(x - 7, y + random(25, 45));
    brush.endShape(true);
  }
}
