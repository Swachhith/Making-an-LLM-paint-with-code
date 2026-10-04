async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#18163a");
  randomSeed(55);
  brush.noStroke();

  // band of lighter violet dusk above the treeline
  brush.fill("#6a4fa8", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.7);
  brush.vertex(0, 220);
  brush.vertex(600, 200);
  brush.vertex(600, 330);
  brush.vertex(0, 340);
  brush.endShape(true);
  brush.fill("#3c3a8c", 180);
  brush.beginShape(0.7);
  brush.vertex(0, 60);
  brush.vertex(600, 40);
  brush.vertex(600, 230);
  brush.vertex(0, 250);
  brush.endShape(true);

  // distant trees
  brush.fill("#0e0c24", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.6);
  brush.vertex(0, 330);
  for (let x = 0; x <= 600; x += 40) {
    brush.vertex(x, 300 + random(-25, 20));
  }
  brush.vertex(600, 360);
  brush.vertex(0, 360);
  brush.endShape(true);

  // meadow, tall
  brush.fill("#2a2868", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(0, 350);
  brush.vertex(600, 345);
  brush.vertex(600, 600);
  brush.vertex(0, 600);
  brush.endShape(true);

  // grass tufts as lighter blue-violet wedges
  for (let i = 0; i < 30; i++) {
    let x = random(0, 600);
    let base = random(430, 620);
    let h = random(50, 130);
    brush.fill(random(["#4a4aa0", "#5a3f8e", "#3a5a90"]), random(150, 200));
    brush.fillBleed(0.22);
    brush.beginShape(0.3);
    brush.vertex(x - 12, base);
    brush.vertex(x + random(-20, 20), base - h);
    brush.vertex(x + 12, base);
    brush.endShape(true);
  }

  // stars
  for (let i = 0; i < 30; i++) {
    brush.fill("#e8e4ff", 200);
    brush.fillBleed(0.1);
    brush.circle(random(600), random(0, 180), random(1, 2.2), 0.1);
  }

  // fireflies: glow + core
  for (let i = 0; i < 38; i++) {
    let x = random(20, 580);
    let y = random(240, 580);
    brush.fill("#d8e860", 120);
    brush.fillBleed(0.3);
    brush.fillTexture(0.3, 0.3);
    brush.circle(x, y, random(10, 18), 0.3);
    brush.fill("#fbffb0", 240);
    brush.fillBleed(0.1);
    brush.circle(x, y, random(2.5, 4), 0.1);
  }
}
