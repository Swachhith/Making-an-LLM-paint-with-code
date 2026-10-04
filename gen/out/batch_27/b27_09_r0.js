async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf8ec");
  randomSeed(909);
  brush.noStroke();
  // bold ultramarine to cerulean sky with a lot of room
  brush.fill("#1e5bc6", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 200);
  brush.vertex(-20, 240);
  brush.endShape(true);
  brush.fill("#2fa3d9", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 160);
  brush.vertex(620, 140);
  brush.vertex(620, 420);
  brush.vertex(-20, 420);
  brush.endShape(true);
  // white clouds left as paper: paint blue around them by leaving gaps (none painted)
  // far bank: trees in bold green, low
  brush.fill("#1f8a3a", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, 420);
  brush.vertex(60, 385);
  brush.vertex(140, 395);
  brush.vertex(230, 375);
  brush.vertex(330, 395);
  brush.vertex(460, 380);
  brush.vertex(620, 395);
  brush.vertex(620, 440);
  brush.vertex(-20, 440);
  brush.endShape(true);
  // canal water: teal with reflections
  brush.fill("#0e7c86", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, 435);
  brush.vertex(620, 435);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  // houseboat off-centre left: red hull, yellow cabin
  let hx = 90, hy = 440;
  brush.fill("#d62b1f", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.1);
  brush.vertex(hx, hy - 20);
  brush.vertex(hx + 230, hy - 20);
  brush.vertex(hx + 215, hy + 10);
  brush.vertex(hx + 10, hy + 10);
  brush.endShape(true);
  brush.fill("#f5b800", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0);
  brush.vertex(hx + 30, hy - 20);
  brush.vertex(hx + 30, hy - 70);
  brush.vertex(hx + 190, hy - 70);
  brush.vertex(hx + 190, hy - 20);
  brush.endShape(true);
  brush.fill("#0b3b8c", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0);
  brush.vertex(hx + 20, hy - 70);
  brush.vertex(hx + 200, hy - 70);
  brush.vertex(hx + 185, hy - 88);
  brush.vertex(hx + 35, hy - 88);
  brush.endShape(true);
  for (let i = 0; i < 4; i++) {
    brush.fill("#0b3b8c", 220);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0);
    let wx = hx + 45 + i * 37;
    brush.vertex(wx, hy - 58);
    brush.vertex(wx + 20, hy - 58);
    brush.vertex(wx + 20, hy - 38);
    brush.vertex(wx, hy - 38);
    brush.endShape(true);
  }
  // flowerpots on deck
  for (let i = 0; i < 5; i++) {
    brush.fill(random(["#e8177a", "#ff6a00", "#e8177a"]), 230);
    brush.circle(hx + 40 + i * 34, hy - 76 - 12, 8, 0.6);
  }
  // reflections below the boat
  brush.fill("#d62b1f", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(hx + 10, hy + 15);
  brush.vertex(hx + 215, hy + 15);
  brush.vertex(hx + 200, hy + 45);
  brush.vertex(hx + 20, hy + 50);
  brush.endShape(true);
  brush.fill("#f5b800", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(hx + 35, hy + 50);
  brush.vertex(hx + 185, hy + 50);
  brush.vertex(hx + 175, hy + 95);
  brush.vertex(hx + 45, hy + 90);
  brush.endShape(true);
  // ripples
  for (let i = 0; i < 10; i++) {
    let y = random(470, 590), x = random(0, 560);
    brush.fill("#07525a", 200);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.5);
    brush.vertex(x, y);
    brush.vertex(x + 60, y - 3);
    brush.vertex(x + 50, y + 6);
    brush.endShape(true);
  }
}
