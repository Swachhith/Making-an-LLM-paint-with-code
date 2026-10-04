async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0d1650");
  randomSeed(1717);
  brush.noStroke();
  // deep violet and magenta bands near the hills
  brush.fill("#7a22c8", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.6);
  brush.vertex(-20, 230);
  brush.vertex(300, 200);
  brush.vertex(620, 250);
  brush.vertex(620, 470);
  brush.vertex(-20, 470);
  brush.endShape(true);
  brush.fill("#ff2f7e", 170);
  brush.fillBleed(0.28);
  brush.beginShape(0.7);
  brush.vertex(-20, 350);
  brush.vertex(220, 320);
  brush.vertex(620, 345);
  brush.vertex(620, 470);
  brush.vertex(-20, 470);
  brush.endShape(true);
  brush.fill("#ff2f9a", 160);
  brush.fillBleed(0.25);
  brush.beginShape(0.7);
  brush.vertex(-20, 405);
  brush.vertex(300, 395);
  brush.vertex(620, 410);
  brush.vertex(620, 470);
  brush.vertex(-20, 470);
  brush.endShape(true);
  // moon, large and off-centre: layered pale passes
  brush.fill("#ffe9a0", 110);
  brush.fillBleed(0.3);
  brush.circle(435, 150, 140, 0.35);
  for (let k = 0; k < 3; k++) {
    brush.fill("#fff8dc", 240);
    brush.fillBleed(0.12);
    brush.fillTexture(0.3, 0.3);
    brush.circle(435, 150, 95 - k * 6, 0.12);
  }
  brush.fill("#f4d27a", 140);
  brush.circle(415, 135, 26, 0.4);
  brush.circle(460, 175, 18, 0.4);
  // stars: many, some bigger with halo
  for (let i = 0; i < 130; i++) {
    let x = random(0, 600), y = random(0, 360);
    if (dist(x, y, 435, 150) < 150) continue;
    let big = random() < 0.12;
    if (big) {
      brush.fill("#9fdcff", 120);
      brush.fillBleed(0.2);
      brush.circle(x, y, 9, 0.2);
    }
    brush.fill(random() < 0.6 ? "#fff8d0" : "#bfeaff", 250);
    brush.fillBleed(0.05);
    brush.circle(x, y, big ? 4.5 : random(1.5, 3.2), 0.05);
  }
  // hills in three layers, darkening forward
  brush.fill("#1d44c8", 230);
  brush.fillBleed(0.25);
  brush.fillTexture(0.45, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, 430);
  brush.vertex(110, 365);
  brush.vertex(250, 405);
  brush.vertex(390, 355);
  brush.vertex(620, 415);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#10165a", 240);
  brush.fillBleed(0.2);
  brush.beginShape(0.8);
  brush.vertex(-20, 485);
  brush.vertex(170, 440);
  brush.vertex(330, 495);
  brush.vertex(520, 445);
  brush.vertex(620, 475);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#04051c", 250);
  brush.beginShape(0.7);
  brush.vertex(-20, 545);
  brush.vertex(290, 520);
  brush.vertex(620, 565);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
}
