async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#172447");
  randomSeed(222);
  brush.noStroke();
  // wide sky: a teal dawn-less glow low, indigo overhead, layered loosely
  brush.fill("#2a7f8a", 210);
  brush.fillBleed(0.32);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-30, 500); brush.vertex(-30, 300); brush.vertex(180, 330); brush.vertex(400, 290); brush.vertex(630, 320); brush.vertex(630, 500);
  brush.endShape(true);
  brush.fill("#3aa0a0", 180);
  brush.beginShape(0.9);
  brush.vertex(-30, 490); brush.vertex(60, 390); brush.vertex(300, 400); brush.vertex(540, 380); brush.vertex(630, 490);
  brush.endShape(true);
  brush.fill("#2f4fa0", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.9);
  brush.vertex(-30, 330); brush.vertex(-30, 160); brush.vertex(240, 200); brush.vertex(630, 150); brush.vertex(630, 330); brush.vertex(300, 300);
  brush.endShape(true);
  brush.fill("#4a4fb0", 160);
  brush.beginShape(0.9);
  brush.vertex(80, 60); brush.vertex(300, 20); brush.vertex(520, 80); brush.vertex(420, 150); brush.vertex(160, 140);
  brush.endShape(true);
  // stars of three sizes
  for (let i = 0; i < 140; i++) {
    brush.fill(random(["#fff6d8", "#dff7ff", "#ffffff"]), random(190, 250));
    brush.fillBleed(0.05);
    brush.circle(random(5, 595), random(5, 450), random(1.2, 3), 0.2);
  }
  for (let i = 0; i < 12; i++) {
    let sx = random(30, 570), sy = random(20, 380);
    brush.fill("#bfeef0", 150);
    brush.fillBleed(0.35);
    brush.circle(sx, sy, random(6, 9), 0.4);
    brush.fill("#fffbe8", 250);
    brush.fillBleed(0.05);
    brush.circle(sx, sy, random(4, 6), 0.2);
  }
  // rolling ground in dark teal-indigo, a shade lighter than night so houses show
  brush.fill("#0d1a30", 240);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 505); brush.vertex(150, 492); brush.vertex(400, 500); brush.vertex(620, 488); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // village: houses in a deep indigo, drawn on the teal glow
  const houses = [[60, 50, 40], [118, 42, 34], [172, 58, 46], [262, 40, 30], [318, 54, 42], [388, 44, 36], [450, 64, 48], [522, 40, 30], [570, 36, 26]];
  for (const [hx, hw, hh] of houses) {
    let base = 512;
    brush.fill("#101a3a", 245);
    brush.fillBleed(0.1);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0);
    brush.vertex(hx - hw / 2, base);
    brush.vertex(hx - hw / 2, base - hh);
    brush.vertex(hx, base - hh - hw * 0.45);
    brush.vertex(hx + hw / 2, base - hh);
    brush.vertex(hx + hw / 2, base);
    brush.endShape(true);
  }
  brush.fill("#101a3a", 245);
  brush.beginShape(0);
  brush.vertex(214, 514); brush.vertex(214, 432); brush.vertex(226, 370); brush.vertex(238, 432); brush.vertex(238, 514);
  brush.endShape(true);
  // warm windows with a spill of light onto the ground
  for (const [hx, hw, hh] of houses) {
    let n = hw > 45 ? 2 : 1;
    for (let k = 0; k < n; k++) {
      let wx = n == 1 ? hx : hx - hw / 4 + k * hw / 2;
      let wy = 512 - hh * 0.5;
      brush.fill("#f0a93a", 170);
      brush.fillBleed(0.3);
      brush.circle(wx, wy, 11, 0.4);
      brush.fill("#ffe08a", 250);
      brush.fillBleed(0.05);
      brush.circle(wx, wy, 5, 0.2);
    }
  }
  brush.fill("#6a5a3a", 150);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(40, 525); brush.vertex(540, 522); brush.vertex(500, 548); brush.vertex(80, 550);
  brush.endShape(true);
}
