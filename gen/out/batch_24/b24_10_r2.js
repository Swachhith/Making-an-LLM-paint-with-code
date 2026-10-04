async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbeee8");

  brush.noStroke();
  brush.fill("#d84a82", 215);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.5);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 220);
  brush.vertex(-20, 200);
  brush.endShape(true);
  brush.fill("#d84a82", 190);
  brush.beginShape(0.5);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 100);
  brush.vertex(-20, 90);
  brush.endShape(true);

  brush.fill("#f39a4a", 200);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 175);
  brush.vertex(620, 195);
  brush.vertex(620, 400);
  brush.vertex(-20, 400);
  brush.endShape(true);

  brush.fill("#d84a82", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(40, 250);
  brush.vertex(220, 236);
  brush.vertex(300, 258);
  brush.vertex(120, 272);
  brush.endShape(true);

  brush.fill("#f39a4a", 210);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 320);
  brush.vertex(620, 330);
  brush.vertex(620, 400);
  brush.vertex(-20, 400);
  brush.endShape(true);
  let dark = "#24122a";
  for (let p = 0; p < 3; p++) {
    brush.fill(dark, 230);
    brush.fillBleed(0.2);
    brush.fillTexture(0.35, 0.35);
    brush.beginShape(0.4);
    brush.vertex(-20, 395 + p * 6);
    brush.vertex(150, 380 + p * 6);
    brush.vertex(330, 392 + p * 6);
    brush.vertex(620, 376 + p * 6);
    brush.vertex(620, 620);
    brush.vertex(-20, 620);
    brush.endShape(true);
  }

  for (let p = 0; p < 3; p++) {
    brush.fill(dark, 235);
    brush.fillBleed(0.15);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.3);
    brush.vertex(470, 392);
    brush.vertex(476, 300);
    brush.vertex(492, 300);
    brush.vertex(498, 392);
    brush.endShape(true);
    let crown = [[484, 250, 62], [440, 270, 42], [530, 268, 44], [480, 205, 40], [455, 225, 30], [512, 222, 34]];
    for (let c of crown) {
      brush.fill(dark, 225);
      brush.fillBleed(0.25);
      brush.fillTexture(0.5, 0.5);
      brush.circle(c[0], c[1], c[2] - p * 6, 0.7);
    }
  }

  for (let p = 0; p < 3; p++) {
    brush.fill(dark, 235);
    brush.fillBleed(0.1);
    brush.fillTexture(0.35, 0.3);
    brush.beginShape(0);
    brush.vertex(110, 392);
    brush.vertex(110, 340);
    brush.vertex(150, 305);
    brush.vertex(190, 340);
    brush.vertex(190, 392);
    brush.endShape(true);
    brush.beginShape(0);
    brush.vertex(186, 392);
    brush.vertex(186, 352);
    brush.vertex(250, 352);
    brush.vertex(250, 392);
    brush.endShape(true);
    brush.beginShape(0);
    brush.vertex(60, 392);
    brush.vertex(62, 290);
    brush.vertex(84, 290);
    brush.vertex(86, 392);
    brush.endShape(true);
    brush.circle(73, 290, 16, 0.2);
  }

  for (let i = 0; i < 8; i++) {
    let x = 280 + i * 22;
    brush.fill(dark, 230);
    brush.beginShape(0.2);
    brush.vertex(x, 396);
    brush.vertex(x + 4, 368);
    brush.vertex(x + 12, 368);
    brush.vertex(x + 16, 396);
    brush.endShape(true);
  }
  randomSeed(2410);
  for (let i = 0; i < 5; i++) {
    let bx = 250 + i * 34 + random(-10, 10), by = 110 + random(-15, 15);
    brush.fill(dark, 220);
    brush.fillBleed(0.1);
    brush.circle(bx, by, 4, 0.3);
    brush.circle(bx - 6, by - 3, 3, 0.3);
    brush.circle(bx + 6, by - 3, 3, 0.3);
  }
}
