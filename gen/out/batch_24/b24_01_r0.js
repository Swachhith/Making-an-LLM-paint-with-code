async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7eedb");
  randomSeed(2401);

  brush.noStroke();
  brush.fill("#2f7fd6", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 250);
  brush.vertex(300, 270);
  brush.vertex(-20, 240);
  brush.endShape(true);

  brush.fill("#6fb0f0", 170);
  brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(-20, 180);
  brush.vertex(620, 170);
  brush.vertex(620, 345);
  brush.vertex(-20, 350);
  brush.endShape(true);

  brush.fill("#8aa83a", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.35, 0.3);
  brush.beginShape(0.4);
  brush.vertex(-20, 330);
  brush.vertex(200, 320);
  brush.vertex(420, 326);
  brush.vertex(620, 318);
  brush.vertex(620, 370);
  brush.vertex(-20, 372);
  brush.endShape(true);

  brush.fill("#e7a91a", 225);
  brush.fillBleed(0.25);
  brush.fillTexture(0.45, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, 360);
  brush.vertex(620, 352);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);

  brush.fill("#d4760f", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 470);
  brush.vertex(250, 440);
  brush.vertex(620, 480);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);

  let xs = [138, 176, 210, 250, 283, 322, 358, 396, 431];
  for (let i = 0; i < xs.length; i++) {
    let x = xs[i] + random(-4, 4);
    let h = random(110, 165);
    let base = 338;
    let w = random(18, 24);
    brush.fill("#1f5a2a", 215);
    brush.fillBleed(0.22);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5);
    brush.vertex(x, base - h);
    brush.vertex(x + w * 0.45, base - h * 0.7);
    brush.vertex(x + w * 0.55, base - h * 0.3);
    brush.vertex(x + w * 0.35, base);
    brush.vertex(x - w * 0.35, base);
    brush.vertex(x - w * 0.55, base - h * 0.35);
    brush.vertex(x - w * 0.4, base - h * 0.72);
    brush.endShape(true);

    brush.fill("#0c3319", 200);
    brush.fillBleed(0.2);
    brush.beginShape(0.5);
    brush.vertex(x + 1, base - h * 0.85);
    brush.vertex(x + w * 0.4, base - h * 0.4);
    brush.vertex(x + w * 0.3, base - 2);
    brush.vertex(x - w * 0.05, base - 2);
    brush.vertex(x - w * 0.1, base - h * 0.5);
    brush.endShape(true);
  }

  brush.fill("#3c2a10", 170);
  brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(120, 334);
  brush.vertex(450, 332);
  brush.vertex(452, 350);
  brush.vertex(118, 352);
  brush.endShape(true);

  for (let i = 0; i < 28; i++) {
    let x = random(0, 600);
    let y = random(470, 590);
    brush.fill("#d9261c", 230);
    brush.fillBleed(0.25);
    brush.fillTexture(0.3, 0.3);
    brush.circle(x, y, random(5, 10), 0.4);
  }
}
