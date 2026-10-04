async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4e2c0");
  randomSeed(303);
  brush.noStroke();
  // two warms (cadmium orange, scarlet) and one dark (indigo-black)
  let O = "#f07c1c", R = "#d2282a", D = "#221a2c";
  // orange blaze low in the sky, two passes
  for (let p = 0; p < 2; p++) {
    brush.fill(O, 200);
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.4);
    brush.vertex(-20, 60 + p * 150);
    brush.vertex(620, 40 + p * 150);
    brush.vertex(620, 470);
    brush.vertex(-20, 470);
    brush.endShape(true);
  }
  // scarlet streaks where the sun catches the cloud bases
  for (let i = 0; i < 3; i++) {
    let y = 170 + i * 55;
    brush.fill(R, 190);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.6);
    brush.vertex(-20, y);
    brush.vertex(200, y - 15 + random(-10, 10));
    brush.vertex(450, y + random(-10, 10));
    brush.vertex(620, y - 10);
    brush.vertex(620, y + 25);
    brush.vertex(350, y + 30);
    brush.vertex(-20, y + 25);
    brush.endShape(true);
  }
  // dark storm mass pressing from above, built in layers
  for (let k = 0; k < 4; k++) {
    brush.fill(D, 170 + k * 15);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.7);
    brush.vertex(-20, -20);
    brush.vertex(620, -20);
    let yBase = 170 - k * 30;
    for (let x = 620; x >= -20; x -= 64) {
      brush.vertex(x, yBase + random(-35, 35));
    }
    brush.endShape(true);
  }
  // a torn dark cloud crossing the glow
  for (let p = 0; p < 2; p++) {
    brush.fill(D, 190);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.4);
    brush.beginShape(0.6);
    brush.vertex(260, 300 + p * 4);
    brush.vertex(420, 280);
    brush.vertex(620, 295);
    brush.vertex(620, 330);
    brush.vertex(480, 325);
    brush.vertex(330, 320);
    brush.endShape(true);
  }
  // silhouetted land, three passes for real dark
  for (let p = 0; p < 3; p++) {
    brush.fill(D, 230);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.4);
    brush.vertex(-20, 470 + p * 3);
    brush.vertex(150, 452);
    brush.vertex(350, 468);
    brush.vertex(620, 448);
    brush.vertex(620, 620);
    brush.vertex(-20, 620);
    brush.endShape(true);
  }
  // wind-bent tree, trunk joined to crown
  for (let p = 0; p < 3; p++) {
    brush.fill(D, 235);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.4);
    brush.vertex(150, 465);
    brush.vertex(160, 400);
    brush.vertex(180, 350);
    brush.vertex(200, 352);
    brush.vertex(182, 405);
    brush.vertex(176, 465);
    brush.endShape(true);
    brush.beginShape(0.6);
    brush.vertex(110, 360);
    brush.vertex(150, 320);
    brush.vertex(210, 300);
    brush.vertex(290, 315);
    brush.vertex(320, 340);
    brush.vertex(260, 355);
    brush.vertex(190, 370);
    brush.endShape(true);
  }
  // farmhouse silhouette with chimney
  for (let p = 0; p < 3; p++) {
    brush.fill(D, 235);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0);
    brush.vertex(430, 458);
    brush.vertex(430, 415);
    brush.vertex(465, 385);
    brush.vertex(500, 415);
    brush.vertex(545, 415);
    brush.vertex(545, 400);
    brush.vertex(560, 400);
    brush.vertex(560, 458);
    brush.endShape(true);
  }
  // birds in the glow
  for (let i = 0; i < 5; i++) {
    brush.fill(D, 230);
    brush.circle(360 + i * 24 + random(-6, 6), 225 + random(-18, 18), 3, 0.2);
  }
}
