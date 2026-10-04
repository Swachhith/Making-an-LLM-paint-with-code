async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef1f4");
  randomSeed(44);
  brush.noStroke();
  // big cool dusk sky: blue-violet top grading to pale lilac
  brush.fill("#7f93c4", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 260);
  brush.vertex(-20, 280);
  brush.endShape(true);
  brush.fill("#b7aad3", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 200);
  brush.vertex(620, 180);
  brush.vertex(620, 470);
  brush.vertex(-20, 470);
  brush.endShape(true);
  brush.fill("#e6c3cf", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 380);
  brush.vertex(620, 370);
  brush.vertex(620, 480);
  brush.vertex(-20, 480);
  brush.endShape(true);
  // soft cool cloud streaks
  for (let i = 0; i < 4; i++) {
    let y = 90 + i * 60;
    brush.fill("#6a7fb0", 150);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.4);
    brush.beginShape(0.6);
    let x0 = random(-40, 250);
    brush.vertex(x0, y);
    brush.vertex(x0 + 150, y - 8);
    brush.vertex(x0 + 320, y + 4);
    brush.vertex(x0 + 180, y + 20);
    brush.endShape(true);
  }
  // low flat savanna horizon
  brush.fill("#5d6a86", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, 478);
  brush.vertex(620, 472);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#3f4868", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-20, 540);
  brush.vertex(300, 530);
  brush.vertex(620, 545);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  // baobab: fat bottle trunk, off-centre right
  let cx = 390;
  for (let p = 0; p < 2; p++) {
    brush.fill("#2f3550", 200 + p * 30);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.3);
    brush.beginShape(0.5);
    brush.vertex(cx - 38, 485);
    brush.vertex(cx - 30, 430);
    brush.vertex(cx - 18, 385);
    brush.vertex(cx - 14, 365);
    brush.vertex(cx + 14, 365);
    brush.vertex(cx + 20, 385);
    brush.vertex(cx + 32, 430);
    brush.vertex(cx + 40, 485);
    brush.endShape(true);
  }
  // stubby root-like branches
  let br = [[-80, 330], [-50, 318], [-20, 320], [15, 312], [50, 322], [85, 335]];
  for (let b of br) {
    brush.fill("#2f3550", 220);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.4);
    brush.vertex(cx - 10, 372);
    brush.vertex(cx + b[0] * 0.5, b[1] + 20);
    brush.vertex(cx + b[0], b[1]);
    brush.vertex(cx + b[0] + 10, b[1] + 6);
    brush.vertex(cx + b[0] * 0.5 + 10, b[1] + 30);
    brush.vertex(cx + 10, 376);
    brush.endShape(true);
    brush.fill("#3b4466", 170);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.4);
    brush.circle(cx + b[0] + 5, b[1] - 4, 14, 0.6);
  }
  // one pale star/early planet
  brush.fill("#fdfbf6", 230);
  brush.circle(140, 110, 3, 0.2);
}
