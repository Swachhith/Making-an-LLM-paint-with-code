async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#16213e");
  randomSeed(808);
  brush.noStroke();

  // teal glow in sky near horizon
  brush.fill("#2d7a86", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.7);
  brush.vertex(0, 220);
  brush.vertex(600, 200);
  brush.vertex(600, 380);
  brush.vertex(0, 390);
  brush.endShape(true);
  brush.fill("#3c9aa0", 150);
  brush.circle(380, 330, 120, 0.5);

  // snow ground as pale light shape on dark paper
  brush.fill("#c8e2ea", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(0, 420);
  brush.vertex(200, 395);
  brush.vertex(420, 410);
  brush.vertex(600, 385);
  brush.vertex(600, 600);
  brush.vertex(0, 600);
  brush.endShape(true);
  brush.fill("#e6f4f6", 200);
  brush.beginShape(0.6);
  brush.vertex(0, 470);
  brush.vertex(300, 440);
  brush.vertex(600, 460);
  brush.vertex(600, 600);
  brush.vertex(0, 600);
  brush.endShape(true);
  // snow shadows
  brush.fill("#4d7d9a", 150);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(120, 520);
  brush.vertex(420, 500);
  brush.vertex(500, 540);
  brush.vertex(200, 560);
  brush.endShape(true);

  // pine silhouettes
  let pines = [[40, 430, 190], [95, 440, 140], [500, 400, 210], [560, 410, 160], [455, 410, 120]];
  for (let p of pines) {
    let x = p[0], base = p[1], h = p[2];
    brush.fill("#0a1022", 235);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.2);
    brush.vertex(x, base - h);
    for (let t = 1; t <= 4; t++) {
      let yy = base - h + (h * t) / 4;
      let ww = (h * 0.28 * t) / 4 + 8;
      brush.vertex(x + ww, yy);
      brush.vertex(x + ww * 0.5, yy - 6);
    }
    brush.vertex(x - h * 0.14, base);
    for (let t = 4; t >= 1; t--) {
      let yy = base - h + (h * t) / 4;
      let ww = (h * 0.28 * t) / 4 + 8;
      brush.vertex(x - ww * 0.5, yy - 6);
      brush.vertex(x - ww, yy);
    }
    brush.endShape(true);
  }

  // cabin silhouette
  brush.fill("#0a1022", 240);
  brush.fillBleed(0.12);
  brush.beginShape(0);
  brush.vertex(220, 440);
  brush.vertex(220, 360);
  brush.vertex(280, 310);
  brush.vertex(345, 360);
  brush.vertex(345, 440);
  brush.endShape(true);
  // snow on roof: pale shape
  brush.fill("#dcecf2", 230);
  brush.beginShape(0);
  brush.vertex(210, 362);
  brush.vertex(280, 302);
  brush.vertex(355, 362);
  brush.vertex(340, 364);
  brush.vertex(280, 318);
  brush.vertex(222, 366);
  brush.endShape(true);
  // chimney
  brush.fill("#0a1022", 240);
  brush.beginShape(0);
  brush.vertex(310, 330);
  brush.vertex(310, 300);
  brush.vertex(328, 300);
  brush.vertex(328, 345);
  brush.endShape(true);

  // glowing windows
  brush.fill("#f2b04a", 150);
  brush.fillBleed(0.3);
  brush.circle(282, 400, 45, 0.4);
  brush.fill("#ffd27a", 240);
  brush.fillBleed(0.1);
  brush.beginShape(0);
  brush.vertex(240, 385);
  brush.vertex(262, 385);
  brush.vertex(262, 410);
  brush.vertex(240, 410);
  brush.endShape(true);
  brush.beginShape(0);
  brush.vertex(300, 385);
  brush.vertex(325, 385);
  brush.vertex(325, 410);
  brush.vertex(300, 410);
  brush.endShape(true);
  // light on snow
  brush.fill("#f2c27a", 120);
  brush.fillBleed(0.3);
  brush.circle(282, 470, 50, 0.6);

  // falling snow
  for (let i = 0; i < 90; i++) {
    brush.fill("#f0f8ff", 230);
    brush.fillBleed(0.1);
    brush.circle(random(600), random(0, 420), random(1.2, 3), 0.2);
  }
}
