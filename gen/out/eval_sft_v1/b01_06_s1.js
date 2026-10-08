async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf6e6");
  brush.noStroke();

  // warm light washes: warm sky, warm ground
  brush.fill("#f6e9b8", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 400); brush.vertex(420, 420); brush.vertex(300, 400); brush.vertex(180, 420); brush.vertex(-20, 400);
  brush.endShape(true);
  brush.fill("#e8d4a8", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(-20, 400); brush.vertex(620, 400); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // stem
  brush.fill("#4a7a3a", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(300, 470); brush.vertex(316, 470); brush.vertex(322, 620); brush.vertex(304, 620);
  brush.endShape(true);
  brush.fill("#2a5a2a", 200);
  brush.beginShape(0.5);
  brush.vertex(302, 470); brush.vertex(314, 470); brush.vertex(318, 620); brush.vertex(306, 620);
  brush.endShape(true);

  // sepals
  for (let s = 0; s < 3; s++) {
    const a = s * 120 + 150;
    brush.fill("#d96a2a", 210);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.7);
    brush.vertex(300, 330);
    brush.vertex(300 + cos(a - 30) * 160, 330 + sin(a - 30) * 160);
    brush.vertex(300 + cos(a - 10) * 130, 330 + sin(a - 10) * 130);
    brush.vertex(300 + cos(a + 10) * 130, 330 + sin(a + 10) * 130);
    brush.vertex(300 + cos(a + 30) * 160, 330 + sin(a + 30) * 160);
    brush.endShape(true);
  }

  // petals: three upper, three lower
  for (let i = 0; i < 3; i++) {
    const a = i * 120 + 180;
    const px = 300 + cos(a) * 140, py = 330 + sin(a) * 140;
    brush.fill("#f2a82a", 210);
    brush.fillBleed(0.25);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(0.7);
    brush.vertex(300, 330);
    brush.vertex(300 + cos(a - 35) * 120, 330 + sin(a - 35) * 120);
    brush.vertex(px + cos(a - 15) * 180, py + sin(a - 15) * 180);
    brush.vertex(px + cos(a + 15) * 180, py + sin(a + 15) * 180);
    brush.vertex(300 + cos(a + 35) * 120, 330 + sin(a + 35) * 120);
    brush.endShape(true);
  }
  for (let i = 0; i < 3; i++) {
    const a = i * 120 + 60;
    const px = 300 + cos(a) * 140, py = 330 + sin(a) * 140;
    brush.fill("#f2a82a", 210);
    brush.fillBleed(0.25);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(0.7);
    brush.vertex(300, 330);
    brush.vertex(300 + cos(a - 35) * 120, 330 + sin(a - 35) * 120);
    brush.vertex(px + cos(a - 15) * 180, py + sin(a - 15) * 180);
    brush.vertex(px + cos(a + 15) * 180, py + sin(a + 15) * 180);
    brush.vertex(300 + cos(a + 35) * 120, 330 + sin(a + 35) * 120);
    brush.endShape(true);
  }

  // fall colour: gold and violet
  brush.fill("#c98a0a", 225);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(300, 330); brush.vertex(300 + cos(0) * 220, 330 + sin(0) * 220); brush.vertex(300 + cos(15) * 170, 330 + sin(15) * 170); brush.vertex(300 + cos(15) * 120, 330 + sin(15) * 120); brush.vertex(300, 330);
  brush.endShape(true);
  brush.fill("#8a4a9a", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.8);
  brush.vertex(300, 330); brush.vertex(300 + cos(180) * 220, 330 + sin(180) * 220); brush.vertex(300 + cos(165) * 170, 330 + sin(165) * 170); brush.vertex(300 + cos(165) * 120, 330 + sin(165) * 120); brush.vertex(300, 330);
  brush.endShape(true);

  // throat: deep violet, then a crown of gold dots
  brush.fill("#5a2a7a", 225);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(300, 330); brush.vertex(300 + cos(0) * 200, 330 + sin(0) * 200); brush.vertex(300 + cos(60) * 170, 330 + sin(60) * 170); brush.vertex(300 + cos(60) * 130, 330 + sin(60) * 130); brush.vertex(300, 330); brush.vertex(300 + cos(120) * 130, 330 + sin(120) * 130); brush.vertex(300 + cos(120) * 170, 330 + sin(120) * 170); brush.vertex(300 + cos(180) * 200, 330 + sin(180) * 200); brush.vertex(300 + cos(240) * 170, 330 + sin(240) * 170); brush.vertex(300 + cos(240) * 130, 330 + sin(240) * 130); brush.vertex(300 + cos(240) * 180, 330 + sin(240) * 180); brush.vertex(300, 330);
  brush.endShape(true);
  brush.fill("#e8b80a", 235);
  brush.fillBleed(0.15);
  for (let k = 0; k < 22; k++) {
    const a = k * 16 + 30;
    const r = 50 + (k % 3) * 10;
    brush.circle(300 + cos(a) * r, 330 + sin(a) * r, 3, 0.3);
  }
  brush.fill("#f0c80a", 250);
  brush.fillBleed(0.1);
  for (let k = 0; k < 16; k++) {
    const a = k * 22 + 10;
    const r = 28 + (k % 2) * 4;
    brush.circle(300 + cos(a) * r, 330 + sin(a) * r, 2.2, 0.25);
  }
}
