async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f0f2f6");
  randomSeed(44);
  brush.noStroke();
  // big cool dusk sky, cerulean top to lavender and a pale rose afterglow
  brush.fill("#6f86c0", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 230);
  brush.vertex(-20, 260);
  brush.endShape(true);
  brush.fill("#aa9fd0", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 190);
  brush.vertex(620, 170);
  brush.vertex(620, 460);
  brush.vertex(-20, 460);
  brush.endShape(true);
  brush.fill("#e2bccb", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 380);
  brush.vertex(620, 360);
  brush.vertex(620, 490);
  brush.vertex(-20, 490);
  brush.endShape(true);
  // long thin clouds lit from beneath: lilac bodies with violet undersides
  for (let i = 0; i < 4; i++) {
    let y = 80 + i * 70;
    let x0 = random(-80, 260);
    brush.fill("#7a78b2", 160);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.4);
    brush.beginShape(0.7);
    brush.vertex(x0, y);
    brush.vertex(x0 + 120, y - 12);
    brush.vertex(x0 + 330, y);
    brush.vertex(x0 + 260, y + 14);
    brush.vertex(x0 + 60, y + 16);
    brush.endShape(true);
  }
  // low horizon savanna, two tones
  brush.fill("#56628a", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, 485);
  brush.vertex(620, 478);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#353d60", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-20, 545);
  brush.vertex(300, 532);
  brush.vertex(620, 548);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  // distant flat-topped acacias for scale
  for (let x of [70, 540]) {
    brush.fill("#3a4468", 210);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5);
    brush.vertex(x - 25, 470);
    brush.vertex(x, 462);
    brush.vertex(x + 25, 470);
    brush.vertex(x, 476);
    brush.endShape(true);
    brush.circle(x, 480, 4, 0.2);
  }
  // baobab: swollen trunk, crooked stubby limbs like roots in the air
  let cx = 380;
  for (let p = 0; p < 3; p++) {
    brush.fill("#262c48", 205 + p * 15);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.3);
    brush.beginShape(0.5);
    brush.vertex(cx - 44, 490);
    brush.vertex(cx - 40, 440);
    brush.vertex(cx - 30, 390);
    brush.vertex(cx - 20, 355);
    brush.vertex(cx + 20, 355);
    brush.vertex(cx + 30, 390);
    brush.vertex(cx + 42, 440);
    brush.vertex(cx + 48, 490);
    brush.endShape(true);
  }
  let limbs = [[-90, 300, -60, 320], [-55, 280, -30, 330], [-10, 270, 0, 330], [30, 285, 20, 330], [70, 295, 50, 325], [100, 320, 70, 340]];
  for (let L of limbs) {
    for (let p = 0; p < 2; p++) {
      brush.fill("#262c48", 220);
      brush.fillBleed(0.2);
      brush.fillTexture(0.3, 0.3);
      brush.beginShape(0.4);
      brush.vertex(cx - 16 + L[0] * 0.1, 365);
      brush.vertex(cx + L[2] - 8, L[3]);
      brush.vertex(cx + L[0] - 6, L[1]);
      brush.vertex(cx + L[0] + 10, L[1] + 2);
      brush.vertex(cx + L[2] + 10, L[3] + 4);
      brush.vertex(cx + 16 + L[0] * 0.1, 370);
      brush.endShape(true);
    }
    brush.fill("#343c62", 190);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.4);
    brush.circle(cx + L[0] + 2, L[1] - 6, 11, 0.7);
  }
}
