async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e9dcb8");
  randomSeed(3033);
  brush.noStroke();

  // warm dusky sky: violet near the horizon, fading to lavender
  brush.fill("#9a7fb8", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 420); brush.vertex(620, 420); brush.vertex(620, 250); brush.vertex(470, 250); brush.vertex(470, 120); brush.vertex(220, 130); brush.vertex(-20, 120);
  brush.endShape(true);
  brush.fill("#a694d8", 150);
  brush.beginShape(0.5);
  brush.vertex(-20, 200); brush.vertex(620, 200); brush.vertex(620, 90); brush.vertex(300, 110); brush.vertex(-20, 150);
  brush.endShape(true);

  // field: olive-green with a violet cast, uneven
  brush.fill("#7f8a5a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, 420); brush.vertex(620, 420); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#5f6a44", 170);
  brush.beginShape(0.4);
  brush.vertex(-20, 500); brush.vertex(620, 500); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // a few violet blooms
  for (let i = 0; i < 18; i++) {
    brush.fill("#8a6aa8", 200);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.circle(random(10, 590), random(420, 620), random(6, 11), 0.5);
  }

  // distant tree line
  brush.fill("#5a5a4a", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, 430); brush.vertex(620, 430); brush.vertex(620, 480); brush.vertex(500, 470); brush.vertex(400, 485); brush.vertex(300, 470); brush.vertex(180, 485); brush.vertex(-20, 480);
  brush.endShape(true);

  // baobab: huge bulbous trunk, flared at the base, a crown of narrow leaves
  let tx = 270, ty = 350;
  // ground shadow under the tree
  brush.fill("#3e4a30", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(tx - 100, 420); brush.vertex(tx + 100, 420); brush.vertex(tx + 110, 620); brush.vertex(tx - 110, 620);
  brush.endShape(true);
  // trunk, two passes
  for (let p = 0; p < 2; p++) {
    brush.fill("#6a5a4a", p ? 220 : 200);
    brush.fillBleed(0.15);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.1);
    brush.vertex(tx - 22, ty - 30); brush.vertex(tx - 16, ty - 30); brush.vertex(tx - 16, ty - 160); brush.vertex(tx - 22, ty - 160);
    brush.vertex(tx + 22, ty - 160); brush.vertex(tx + 16, ty - 160); brush.vertex(tx + 16, ty - 30); brush.vertex(tx + 22, ty - 30);
    brush.endShape(true);
    brush.beginShape(0.1);
    brush.vertex(tx - 10, ty - 30); brush.vertex(tx - 6, ty - 30); brush.vertex(tx - 6, ty - 130); brush.vertex(tx - 10, ty - 130);
    brush.vertex(tx + 10, ty - 130); brush.vertex(tx + 6, ty - 130); brush.vertex(tx + 6, ty - 30); brush.vertex(tx + 10, ty - 30);
    brush.endShape(true);
  }
  // flared base
  brush.fill("#5a4a3a", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(tx - 60, ty - 30); brush.vertex(tx + 60, ty - 30); brush.vertex(tx + 80, 420); brush.vertex(tx - 80, 420);
  brush.endShape(true);
  // crown: a wide ring of narrow leaves
  for (let i = 0; i < 24; i++) {
    let a = i * 15 + random(-3, 3);
    let r = 160 + random(-8, 8);
    brush.fill("#6f6a4a", 210);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.5);
    brush.vertex(tx + cos(a - 10) * r * 0.4, ty + sin(a - 10) * r * 0.4);
    brush.vertex(tx + cos(a - 12) * r, ty + sin(a - 12) * r);
    brush.vertex(tx + cos(a + 12) * r, ty + sin(a + 12) * r);
    brush.vertex(tx + cos(a + 10) * r * 0.4, ty + sin(a + 10) * r * 0.4);
    brush.endShape(true);
  }
  // a couple of smaller trees
  for (let i = 0; i < 3; i++) {
    let x = [120, 480][i], h = [220, 260, 200][i];
    brush.fill("#5a5a44", 210);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.3);
    brush.vertex(x - 20, 420); brush.vertex(x + 20, 420); brush.vertex(x + 20, 420 - h); brush.vertex(x - 20, 420 - h);
    brush.endShape(true);
    brush.fill("#6f6a4a", 210);
    brush.beginShape(0.4);
    brush.vertex(x - 26, 420 - h); brush.vertex(x - 20, 420 - h - 50); brush.vertex(x + 20, 420 - h - 50); brush.vertex(x + 26, 420 - h);
    brush.endShape(true);
  }
  // a few warm lights on the horizon
  for (let i = 0; i < 6; i++) {
    let x = random(50, 550);
    brush.fill("#e88a4a", 220);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.circle(x, 425 + random(-10, 10), 3, 0.4);
  }
}
