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
  // main limbs spread wide and nearly horizontal, each forking into stubby twigs
  let limbs = [[-120, 318], [-70, 300], [-25, 292], [30, 294], [80, 304], [125, 322]];
  for (let L of limbs) {
    let ex = cx + L[0], ey = L[1];
    for (let p = 0; p < 2; p++) {
      brush.fill("#262c48", 225);
      brush.fillBleed(0.2);
      brush.fillTexture(0.3, 0.3);
      brush.beginShape(0.5);
      brush.vertex(cx - 18, 368);
      brush.vertex(cx + L[0] * 0.45 - 8, ey + 38);
      brush.vertex(ex - 6, ey);
      brush.vertex(ex + 10, ey + 4);
      brush.vertex(cx + L[0] * 0.45 + 10, ey + 46);
      brush.vertex(cx + 18, 372);
      brush.endShape(true);
    }
    for (let k = -1; k <= 1; k += 2) {
      brush.fill("#2c3352", 210);
      brush.fillBleed(0.2);
      brush.fillTexture(0.3, 0.3);
      brush.beginShape(0.4);
      brush.vertex(ex - 7, ey + 4);
      brush.vertex(ex + k * 22 - 6, ey - 22);
      brush.vertex(ex + k * 22 + 9, ey - 20);
      brush.vertex(ex + 9, ey + 6);
      brush.endShape(true);
    }
    brush.fill("#3b4466", 170);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.4);
    brush.circle(ex, ey - 16, 16, 0.7);
  }
}
