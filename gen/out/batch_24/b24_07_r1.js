async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1ebe0");

  brush.noStroke();
  brush.fill("#a9a08a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 180);
  brush.vertex(300, 220);
  brush.vertex(-20, 160);
  brush.endShape(true);

  brush.fill("#d6bf90", 175);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 250);
  brush.vertex(620, 230);
  brush.vertex(620, 420);
  brush.vertex(-20, 420);
  brush.endShape(true);

  brush.fill("#9c9a78", 170);
  brush.fillBleed(0.25);
  brush.fillTexture(0.45, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-20, 405);
  brush.vertex(200, 398);
  brush.vertex(430, 404);
  brush.vertex(620, 395);
  brush.vertex(620, 422);
  brush.vertex(-20, 424);
  brush.endShape(true);

  brush.fill("#b39a62", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.5);
  brush.vertex(-20, 418);
  brush.vertex(620, 412);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);

  brush.fill("#8f7a4a", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 520);
  brush.vertex(200, 500);
  brush.vertex(620, 540);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);

  brush.fill("#8a8a78", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(120, 90, 90, 0.9);
  brush.circle(250, 60, 70, 0.9);
  let tx = 432, ty = 410;
  brush.fill("#5d5a3a", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(tx - 45, ty + 2);
  brush.vertex(tx + 60, ty);
  brush.vertex(tx + 50, ty + 14);
  brush.vertex(tx - 40, ty + 14);
  brush.endShape(true);

  brush.fill("#4a3c2a", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(tx - 9, ty + 2);
  brush.vertex(tx - 6, ty - 40);
  brush.vertex(tx - 18, ty - 58);
  brush.vertex(tx + 14, ty - 58);
  brush.vertex(tx + 6, ty - 40);
  brush.vertex(tx + 9, ty + 2);
  brush.endShape(true);

  randomSeed(2407);
  let blobs = [[-30, -80, 32], [5, -95, 36], [35, -78, 30], [-10, -66, 28], [22, -62, 26], [-48, -66, 22], [50, -66, 20]];
  for (let b of blobs) {
    brush.fill("#5f6434", 210);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.circle(tx + b[0], ty + b[1], b[2], 0.7);
  }
  for (let i = 0; i < 6; i++) {
    brush.fill("#2f3a1c", 215);
    brush.fillBleed(0.25);
    brush.circle(tx + random(-40, 40), ty - 70 + random(-10, 18), random(10, 18), 0.6);
  }
}
