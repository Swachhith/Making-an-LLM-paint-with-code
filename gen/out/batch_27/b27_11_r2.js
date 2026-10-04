async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2ecdf");
  randomSeed(1111);
  brush.noStroke();
  // big muted sky: grey-blue up top, warm raw-sienna glow toward the horizon
  brush.fill("#95a0a6", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 260);
  brush.vertex(-20, 300);
  brush.endShape(true);
  brush.fill("#dcb98a", 175);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 250);
  brush.vertex(620, 220);
  brush.vertex(620, 475);
  brush.vertex(-20, 475);
  brush.endShape(true);
  // long drifting cloud banks, grey-umber undersides, stacked in perspective
  let banks = [[70, 220, 1.0], [170, 160, 0.8], [260, 110, 0.6], [330, 70, 0.45]];
  for (let b of banks) {
    let y = b[0], w = b[1] * 2.2, h = 40 * b[2];
    let x0 = random(-80, 350);
    for (let p = 0; p < 2; p++) {
      brush.fill(p ? "#6f675a" : "#8c8474", 150 + p * 20);
      brush.fillBleed(0.3);
      brush.fillTexture(0.6, 0.5);
      brush.beginShape(0.7);
      brush.vertex(x0, y + h * 0.3 + p * h * 0.3);
      brush.vertex(x0 + w * 0.2, y - h * (p ? 0.1 : 0.6));
      brush.vertex(x0 + w * 0.5, y - h * (p ? 0.2 : 0.9));
      brush.vertex(x0 + w * 0.8, y - h * (p ? 0.1 : 0.5));
      brush.vertex(x0 + w, y + h * 0.3 + p * h * 0.3);
      brush.vertex(x0 + w * 0.5, y + h * 0.5);
      brush.endShape(true);
    }
  }
  // low horizon: field in two passes
  brush.fill("#8d8452", 205);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, 475);
  brush.vertex(300, 470);
  brush.vertex(620, 476);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#6b6236", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 535);
  brush.vertex(300, 522);
  brush.vertex(620, 545);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  // distant hedge line
  brush.fill("#5c5e44", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, 474);
  brush.vertex(100, 464);
  brush.vertex(200, 470);
  brush.vertex(420, 462);
  brush.vertex(620, 466);
  brush.vertex(620, 480);
  brush.vertex(-20, 482);
  brush.endShape(true);
  // oak right of centre: sturdy trunk with a fork, broad domed crown
  let ox = 390;
  for (let p = 0; p < 2; p++) {
    brush.fill("#3b3121", 230);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.3);
    brush.vertex(ox - 14, 480);
    brush.vertex(ox - 10, 410);
    brush.vertex(ox - 40, 385);
    brush.vertex(ox - 22, 380);
    brush.vertex(ox + 2, 400);
    brush.vertex(ox + 26, 378);
    brush.vertex(ox + 42, 386);
    brush.vertex(ox + 12, 412);
    brush.vertex(ox + 16, 480);
    brush.endShape(true);
  }
  let crown = ["#5e5a33", "#4b4a2a", "#6f6a3d", "#3b3a22"];
  brush.fill("#6f6a3d", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(ox - 110, 395);
  brush.vertex(ox - 95, 330);
  brush.vertex(ox - 40, 295);
  brush.vertex(ox + 30, 290);
  brush.vertex(ox + 95, 320);
  brush.vertex(ox + 115, 390);
  brush.vertex(ox, 400);
  brush.endShape(true);
  for (let pass = 0; pass < 2; pass++) {
    for (let i = 0; i < 10; i++) {
      brush.fill(random(crown), 185 + pass * 25);
      brush.fillBleed(0.3);
      brush.fillTexture(0.5, 0.5);
      brush.circle(ox + random(-85, 85) * (1 - pass * 0.25), 350 + random(-40, 30) + pass * 12, random(22, 34) - pass * 6, 0.8);
    }
  }
  for (let i = 0; i < 6; i++) {
    {
      brush.fill("#2f2e1a", 200);
      brush.fillBleed(0.3);
      brush.fillTexture(0.5, 0.5);
      brush.circle(ox + random(-60, 60), 375 + random(-10, 20), random(14, 22), 0.8);
    }
  }
  // tree shadow
  brush.fill("#444022", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.6);
  brush.vertex(ox - 60, 482);
  brush.vertex(ox + 90, 478);
  brush.vertex(ox + 60, 492);
  brush.vertex(ox - 50, 492);
  brush.endShape(true);
}
