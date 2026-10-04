async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#161338");
  randomSeed(55);
  brush.noStroke();

  // tall sky: blue at top, violet glow low near trees
  brush.fill("#2e3a8a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.7);
  brush.vertex(0, 0);
  brush.vertex(600, 0);
  brush.vertex(600, 160);
  brush.vertex(0, 190);
  brush.endShape(true);
  brush.fill("#7a58b8", 200);
  brush.beginShape(0.7);
  brush.vertex(0, 150);
  brush.vertex(600, 140);
  brush.vertex(600, 260);
  brush.vertex(0, 270);
  brush.endShape(true);
  brush.fill("#a07ad0", 150);
  brush.circle(420, 230, 90, 0.5);

  // treeline, dark paper colour is already the silhouette: paint the gaps lighter
  // meadow in two layered blues
  brush.fill("#302c78", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(0, 300);
  brush.vertex(600, 290);
  brush.vertex(600, 600);
  brush.vertex(0, 600);
  brush.endShape(true);
  brush.fill("#403a98", 170);
  brush.beginShape(0.6);
  brush.vertex(0, 420);
  brush.vertex(300, 380);
  brush.vertex(600, 410);
  brush.vertex(600, 600);
  brush.vertex(0, 600);
  brush.endShape(true);

  // grass wedges, taller in foreground
  for (let i = 0; i < 44; i++) {
    let x = random(-10, 610);
    let base = random(470, 640);
    let h = map(base, 470, 640, 40, 170);
    brush.fill(random(["#5c52b0", "#6a44a0", "#4a62a8"]), random(160, 210));
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.4);
    brush.beginShape(0.3);
    brush.vertex(x - 10, base);
    brush.vertex(x + random(-25, 25), base - h);
    brush.vertex(x + 10, base);
    brush.endShape(true);
  }

  // stars
  for (let i = 0; i < 40; i++) {
    brush.fill("#f0ecff", 230);
    brush.fillBleed(0.05);
    brush.circle(random(600), random(0, 170), random(1, 2.2), 0.1);
  }

  // fireflies: drifting upward in a loose column, glows layered 3x
  for (let i = 0; i < 46; i++) {
    let y = random(160, 580);
    let x = 300 + random(-280, 280) * map(y, 160, 580, 0.5, 1);
    let r = random(6, 12);
    brush.fill("#c8e040", 170);
    brush.fillBleed(0.3);
    brush.fillTexture(0.3, 0.3);
    brush.circle(x, y, r * 1.6, 0.3);
    brush.fill("#e8f878", 220);
    brush.fillBleed(0.15);
    brush.circle(x, y, r * 0.8, 0.2);
    brush.fill("#ffffd8", 250);
    brush.fillBleed(0.05);
    brush.circle(x, y, r * 0.35, 0.1);
  }
}
