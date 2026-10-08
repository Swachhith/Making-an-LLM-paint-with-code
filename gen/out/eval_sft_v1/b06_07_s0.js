async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcf6ef");
  randomSeed(1111);
  brush.noStroke();
  // soft pale green ground wash
  brush.fill("#bfe3c8", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(1);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // stem
  brush.fill("#6fa87a", 190);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(300, 350); brush.vertex(315, 350); brush.vertex(320, 620); brush.vertex(305, 620);
  brush.endShape(true);
  // sepals: broad, cupped, overlapping
  for (let i = 0; i < 10; i++) {
    const a = i * 36 / 10;
    const r = 220 + random(-15, 15);
    brush.fill(random(["#e8a09a", "#d68a84", "#c2787a"]), 210);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.8);
    brush.vertex(300, 300);
    brush.vertex(300 + cos(a - 10) * r * 0.6, 300 + sin(a - 10) * r * 0.6);
    brush.vertex(300 + cos(a) * r, 300 + sin(a) * r);
    brush.vertex(300 + cos(a + 10) * r * 0.6, 300 + sin(a + 10) * r * 0.6);
    brush.endShape(true);
  }
  // pale pink upper petals, wide
  for (let i = 0; i < 6; i++) {
    const a = i * 60 / 6;
    brush.fill("#f2c8d0", 215);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.9);
    brush.vertex(300, 300);
    brush.vertex(300 + cos(a - 20) * 160, 300 + sin(a - 20) * 160);
    brush.vertex(300 + cos(a - 8) * 220, 300 + sin(a - 8) * 220);
    brush.vertex(300 + cos(a + 8) * 220, 300 + sin(a + 8) * 220);
    brush.vertex(300 + cos(a + 20) * 160, 300 + sin(a + 20) * 160);
    brush.endShape(true);
  }
  // deeper rose mid-petals
  for (let i = 0; i < 6; i++) {
    const a = i * 60 / 6;
    brush.fill("#e88a9a", 225);
    brush.fillBleed(0.25);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(0.9);
    brush.vertex(300, 300);
    brush.vertex(300 + cos(a - 15) * 120, 300 + sin(a - 15) * 120);
    brush.vertex(300 + cos(a) * 180, 300 + sin(a) * 180);
    brush.vertex(300 + cos(a + 15) * 120, 300 + sin(a + 15) * 120);
    brush.endShape(true);
  }
  // deepest cupped petals at the base
  for (let i = 0; i < 6; i++) {
    const a = i * 60 / 6;
    brush.fill("#c85a6a", 225);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.9);
    brush.vertex(300, 300);
    brush.vertex(300 + cos(a - 20) * 80, 300 + sin(a - 20) * 80);
    brush.vertex(300 + cos(a) * 130, 300 + sin(a) * 130);
    brush.vertex(300 + cos(a + 20) * 80, 300 + sin(a + 20) * 80);
    brush.endShape(true);
  }
  // shadow side of the bloom
  brush.fill("#9a4a5a", 160);
  brush.fillBleed(0.25);
  brush.beginShape(0.8);
  brush.vertex(300, 300); brush.vertex(310, 300); brush.vertex(320, 320); brush.vertex(300, 340); brush.vertex(280, 320);
  brush.endShape(true);
  // stamens
  for (let i = 0; i < 20; i++) {
    const a = random(360);
    const r = random(110, 150);
    brush.fill("#f0a030", 235);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.4);
    brush.vertex(300, 300);
    brush.vertex(300 + cos(a) * r * 0.6, 300 + sin(a) * r * 0.6);
    brush.vertex(300 + cos(a) * r, 300 + sin(a) * r);
    brush.vertex(300 + cos(a) * r * 0.6, 300 + sin(a) * r * 0.6);
    brush.endShape(true);
  }
  // centre
  brush.fill("#d86a40", 220);
  brush.fillBleed(0.25);
  brush.circle(300, 300, 35, 0.4);
  brush.fill("#e89a50", 230);
  brush.fillBleed(0.2);
  brush.circle(300, 300, 20, 0.3);
}
