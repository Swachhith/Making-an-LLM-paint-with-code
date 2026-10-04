async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  // pale cool paper: the snow is paper, everything else is painted dark around it
  background("#e8f0f0");
  randomSeed(818);
  brush.noStroke();

  // night sky: indigo layered three times, teal toward the horizon
  for (let pass = 0; pass < 3; pass++) {
    brush.fill("#1a2260", 230);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.6);
    brush.vertex(0, 0);
    brush.vertex(600, 0);
    brush.vertex(600, 250 - pass * 40);
    brush.vertex(0, 270 - pass * 40);
    brush.endShape(true);
  }
  for (let pass = 0; pass < 2; pass++) {
    brush.fill("#1f6a78", 210);
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.6);
    brush.vertex(0, 200);
    brush.vertex(600, 190);
    brush.vertex(600, 400);
    brush.vertex(0, 410);
    brush.endShape(true);
  }

  // distant hill line, indigo
  brush.fill("#1a2a58", 220);
  brush.fillBleed(0.2);
  brush.beginShape(0.6);
  brush.vertex(0, 380);
  brush.vertex(180, 340);
  brush.vertex(380, 370);
  brush.vertex(600, 330);
  brush.vertex(600, 405);
  brush.vertex(0, 420);
  brush.endShape(true);

  // pine silhouettes, triple passes
  let pines = [[40, 440, 230], [100, 450, 160], [505, 420, 250], [565, 430, 190], [455, 425, 140]];
  for (let p of pines) {
    let x = p[0], base = p[1], h = p[2];
    for (let pass = 0; pass < 3; pass++) {
      brush.fill("#0c1230", 235);
      brush.fillBleed(0.12);
      brush.fillTexture(0.3, 0.3);
      brush.beginShape(0.15);
      brush.vertex(x, base - h);
      for (let t = 1; t <= 5; t++) {
        let yy = base - h + (h * t) / 5;
        let ww = (h * 0.3 * t) / 5 + 10;
        brush.vertex(x + ww, yy);
        brush.vertex(x + ww * 0.45, yy - 4);
      }
      for (let t = 5; t >= 1; t--) {
        let yy = base - h + (h * t) / 5;
        let ww = (h * 0.3 * t) / 5 + 10;
        brush.vertex(x - ww * 0.45, yy - 4);
        brush.vertex(x - ww, yy);
      }
      brush.endShape(true);
    }
  }

  // cabin silhouette: walls and chimney dark; roof snow left as paper above it
  for (let pass = 0; pass < 3; pass++) {
    brush.fill("#0c1230", 240);
    brush.fillBleed(0.1);
    brush.beginShape(0);
    brush.vertex(225, 450);
    brush.vertex(225, 372);
    brush.vertex(355, 372);
    brush.vertex(355, 452);
    brush.endShape(true);
    brush.beginShape(0);
    brush.vertex(318, 330);
    brush.vertex(318, 290);
    brush.vertex(336, 290);
    brush.vertex(336, 345);
    brush.endShape(true);
  }
  // sky wash around the roof is already dark; the roof triangle stays paper-white

  // warm windows, glow spilling onto snow
  brush.fill("#f0a040", 200);
  brush.fillBleed(0.1);
  brush.beginShape(0);
  brush.vertex(245, 392);
  brush.vertex(270, 392);
  brush.vertex(270, 420);
  brush.vertex(245, 420);
  brush.endShape(true);
  brush.beginShape(0);
  brush.vertex(305, 392);
  brush.vertex(332, 392);
  brush.vertex(332, 420);
  brush.vertex(305, 420);
  brush.endShape(true);
  brush.fill("#f6c070", 160);
  brush.fillBleed(0.3);
  brush.circle(290, 480, 55, 0.6);

  // cool teal shadows across the snow
  brush.fill("#6aa0b0", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(0, 470);
  brush.vertex(200, 455);
  brush.vertex(150, 510);
  brush.vertex(0, 530);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(380, 470);
  brush.vertex(600, 450);
  brush.vertex(600, 560);
  brush.vertex(420, 520);
  brush.endShape(true);
  brush.fill("#3a6a88", 150);
  brush.beginShape(0.8);
  brush.vertex(60, 580);
  brush.vertex(300, 545);
  brush.vertex(560, 590);
  brush.vertex(300, 600);
  brush.endShape(true);

  // stars left tiny and pale inside the dark sky
  for (let i = 0; i < 40; i++) {
    brush.fill("#e8f4ff", 220);
    brush.fillBleed(0.05);
    brush.circle(random(600), random(0, 200), random(1, 2.5), 0.1);
  }
}
