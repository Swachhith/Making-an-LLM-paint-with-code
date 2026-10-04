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
  brush.fill("#e0608e", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.5);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 210);
  brush.vertex(-20, 190);
  brush.endShape(true);

  brush.fill("#f39a4a", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 170);
  brush.vertex(620, 190);
  brush.vertex(620, 400);
  brush.vertex(-20, 400);
  brush.endShape(true);

  brush.fill("#e0608e", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(40, 110);
  brush.vertex(220, 90);
  brush.vertex(300, 115);
  brush.vertex(120, 135);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(350, 250);
  brush.vertex(520, 235);
  brush.vertex(600, 262);
  brush.vertex(420, 275);
  brush.endShape(true);

  let dark = "#2a1830";
  brush.fill(dark, 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.35, 0.35);
  brush.beginShape(0.4);
  brush.vertex(-20, 395);
  brush.vertex(150, 380);
  brush.vertex(330, 392);
  brush.vertex(620, 376);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill(dark, 210);
  brush.beginShape(0.5);
  brush.vertex(-20, 470);
  brush.vertex(300, 450);
  brush.vertex(620, 480);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);

  brush.fill(dark, 235);
  brush.fillBleed(0.15);
  brush.beginShape(0.5);
  brush.vertex(142, 390);
  brush.vertex(146, 330);
  brush.vertex(160, 330);
  brush.vertex(162, 390);
  brush.endShape(true);
  let crown = [[152, 300, 42], [120, 318, 30], [186, 316, 32], [150, 270, 30], [130, 285, 24], [176, 284, 26]];
  for (let c of crown) {
    brush.fill(dark, 225);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.circle(c[0], c[1], c[2], 0.7);
  }

  brush.fill(dark, 235);
  brush.fillBleed(0.1);
  brush.beginShape(0);
  brush.vertex(420, 385);
  brush.vertex(420, 350);
  brush.vertex(450, 325);
  brush.vertex(480, 350);
  brush.vertex(480, 385);
  brush.endShape(true);
  brush.beginShape(0);
  brush.vertex(478, 385);
  brush.vertex(478, 358);
  brush.vertex(530, 358);
  brush.vertex(530, 385);
  brush.endShape(true);

  for (let i = 0; i < 9; i++) {
    let x = 250 + i * 18;
    brush.beginShape(0.2);
    brush.vertex(x, 400);
    brush.vertex(x + 5, 372);
    brush.vertex(x + 11, 372);
    brush.vertex(x + 14, 400);
    brush.endShape(true);
  }
  randomSeed(2410);
  for (let i = 0; i < 5; i++) {
    let bx = 330 + i * 30 + random(-10, 10), by = 130 + random(-15, 15);
    brush.fill(dark, 210);
    brush.fillBleed(0.1);
    brush.circle(bx, by, 4, 0.3);
    brush.circle(bx - 6, by - 3, 3, 0.3);
    brush.circle(bx + 6, by - 3, 3, 0.3);
  }
}
