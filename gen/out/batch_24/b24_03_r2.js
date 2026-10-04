async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function limb(x0, y0, x1, y1, w0, w1, col, op) {
  let dx = x1 - x0, dy = y1 - y0;
  let len = sqrt(dx * dx + dy * dy);
  let nx = -dy / len, ny = dx / len;
  brush.fill(col, op);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(x0 + nx * w0 / 2, y0 + ny * w0 / 2);
  brush.vertex(x1 + nx * w1 / 2, y1 + ny * w1 / 2);
  brush.vertex(x1 - nx * w1 / 2, y1 - ny * w1 / 2);
  brush.vertex(x0 - nx * w0 / 2, y0 - ny * w0 / 2);
  brush.endShape(true);
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe3cf");

  brush.noStroke();
  brush.fill("#8c7a95", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 250);
  brush.vertex(-20, 270);
  brush.endShape(true);

  brush.fill("#c98d5a", 200);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 220);
  brush.vertex(620, 200);
  brush.vertex(620, 470);
  brush.vertex(-20, 470);
  brush.endShape(true);
  brush.fill("#e8b36a", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 360);
  brush.vertex(620, 340);
  brush.vertex(620, 450);
  brush.vertex(-20, 455);
  brush.endShape(true);

  brush.fill("#5f5040", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.35, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, 440);
  brush.vertex(140, 432);
  brush.vertex(360, 445);
  brush.vertex(620, 430);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#3e3026", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(-20, 530);
  brush.vertex(300, 505);
  brush.vertex(620, 530);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);

  let cols = ["#806453", "#5e4538", "#3f2d24"];
  for (let pass = 0; pass < 3; pass++) {
    let k = pass * 14;
    brush.fill(cols[pass], 215);
    brush.fillBleed(0.25);
    brush.fillTexture(0.45, 0.4);
    brush.beginShape(0.5);
    brush.vertex(200 + k + pass * 20, 510);
    brush.vertex(196 + k + pass * 18, 430);
    brush.vertex(212 + k + pass * 16, 330);
    brush.vertex(236 + k + pass * 12, 230);
    brush.vertex(250 + k, 185);
    brush.vertex(350 - k, 185);
    brush.vertex(368 - k, 230);
    brush.vertex(388 - k, 330);
    brush.vertex(402 - k, 430);
    brush.vertex(408 - k, 510);
    brush.endShape(true);
  }

  let br = [
    [262, 195, 170, 115, 34, 18], [285, 190, 240, 70, 30, 16], [312, 188, 322, 55, 30, 16],
    [335, 192, 425, 100, 34, 18], [345, 205, 485, 165, 26, 15], [255, 205, 120, 160, 26, 15]
  ];
  for (let b of br) limb(b[0], b[1], b[2], b[3], b[4], b[5], "#4e3a2e", 225);
  let tw = [
    [170, 115, 130, 70], [170, 115, 195, 70], [240, 70, 215, 35], [240, 70, 270, 30],
    [322, 55, 300, 20], [322, 55, 355, 25], [425, 100, 470, 60], [425, 100, 420, 55],
    [485, 165, 540, 135], [120, 160, 70, 130]
  ];
  for (let t of tw) limb(t[0], t[1], t[2], t[3], 16, 15, "#5a4638", 205);

  for (let i = 0; i < 5; i++) {
    let x = 250 + i * 22;
    brush.fill("#2e2019", 170);
    brush.fillBleed(0.25);
    brush.beginShape(0.6);
    brush.vertex(x - 8, 230 + i * 12);
    brush.vertex(x + 8, 230 + i * 12);
    brush.vertex(x + 10 + i * 3, 500);
    brush.vertex(x - 6 + i * 3, 500);
    brush.endShape(true);
  }
  brush.fill("#f2c98a", 150);
  brush.fillBleed(0.3);
  brush.circle(520, 390, 30, 0.3);
  randomSeed(2403);
  for (let t of tw) {
    for (let j = 0; j < 3; j++) {
      brush.fill("#6d7148", 190);
      brush.fillBleed(0.3);
      brush.fillTexture(0.5, 0.5);
      brush.circle(t[2] + random(-18, 18), t[3] + random(-14, 10), random(8, 14), 0.7);
    }
  }
  brush.fill("#3a2a20", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(150, 505);
  brush.vertex(460, 500);
  brush.vertex(520, 525);
  brush.vertex(120, 530);
  brush.endShape(true);
}
