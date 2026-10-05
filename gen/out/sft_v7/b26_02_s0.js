async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8e3d8");
  randomSeed(23);
  brush.noStroke();

  // earthy washes of ground and sky
  brush.fill("#b8b098", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 420); brush.vertex(420, 520); brush.vertex(-20, 520);
  brush.endShape(true);
  brush.fill("#9aa8b0", 150);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 120); brush.vertex(300, 80); brush.vertex(-20, 140);
  brush.endShape(true);

  // stem, two leaves, and a couple of buds
  brush.fill("#5a6a3a", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(300, 580); brush.vertex(310, 580); brush.vertex(314, 200); brush.vertex(300, 190); brush.vertex(296, 200); brush.vertex(286, 200);
  brush.endShape(true);
  brush.fill("#3f4c2e", 200);
  brush.beginShape(0.4);
  brush.vertex(300, 580); brush.vertex(310, 580); brush.vertex(316, 460); brush.vertex(306, 460);
  brush.endShape(true);
  brush.fill("#5a6a3a", 210);
  brush.beginShape(0.8);
  brush.vertex(280, 420); brush.vertex(330, 400); brush.vertex(370, 470); brush.vertex(310, 490); brush.vertex(260, 440);
  brush.endShape(true);
  brush.fill("#8a7a5a", 190);
  brush.beginShape(0.8);
  brush.vertex(280, 420); brush.vertex(340, 420); brush.vertex(390, 480); brush.vertex(330, 490); brush.vertex(270, 430);
  brush.endShape(true);
  brush.fill("#5a6a3a", 210);
  brush.beginShape(0.6);
  brush.vertex(300, 220); brush.vertex(330, 200); brush.vertex(350, 220); brush.vertex(330, 238);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(300, 220); brush.vertex(330, 200); brush.vertex(350, 220); brush.vertex(330, 238);
  brush.endShape(true);

  // sepals: five broad, recurved leaves, olive
  for (let i = 0; i < 5; i++) {
    const a = i * 72 + 12;
    const r = 320;
    brush.fill("#6f7244", 200);
    brush.fillBleed(0.25);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(0.8);
    brush.vertex(300, 220); brush.vertex(300 + r * cos(a - 20), 220 - r * sin(a - 20));
    brush.vertex(300 + r * cos(a + 10), 220 - r * sin(a + 10));
    brush.vertex(300 + r * cos(a + 20), 220 - r * sin(a + 20));
    brush.vertex(300 + r * cos(a), 220 - r * sin(a));
    brush.endShape(true);
  }

  // petals: three broad, recurved, violet
  for (let i = 0; i < 3; i++) {
    const a = i * 120 + 10;
    brush.fill("#8a5a78", 210);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.9);
    brush.vertex(300, 220); brush.vertex(300 + 260 * cos(a - 20), 220 - 260 * sin(a - 20));
    brush.vertex(300 + 260 * cos(a - 5), 220 - 260 * sin(a - 5));
    brush.vertex(300 + 260 * cos(a + 5), 220 - 260 * sin(a + 5));
    brush.vertex(300 + 260 * cos(a + 20), 220 - 260 * sin(a + 20));
    brush.endShape(true);
    brush.fill("#5a3a58", 180);
    brush.fillBleed(0.2);
    brush.beginShape(0.9);
    brush.vertex(300, 220); brush.vertex(300 + 210 * cos(a - 10), 220 - 210 * sin(a - 10));
    brush.vertex(300 + 210 * cos(a + 10), 220 - 210 * sin(a + 10));
    brush.endShape(true);
  }

  // dark throat, veining, and a few stamens
  brush.fill("#2a2030", 230);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.circle(300, 220, 50, 0.3);
  brush.fill("#2a2030", 230);
  brush.beginShape(0.5);
  brush.vertex(300, 220); brush.vertex(300 + 150 * cos(100), 220 - 150 * sin(100)); brush.vertex(300 + 150 * cos(100 + 10), 220 - 150 * sin(100 + 10));
  brush.vertex(300 + 150 * cos(100 + 100), 220 - 150 * sin(100 + 100)); brush.vertex(300 + 150 * cos(100 + 90), 220 - 150 * sin(100 + 90));
  brush.endShape(true);
  for (let i = 0; i < 6; i++) {
    const a = random(0, 360);
    brush.fill("#2a2030", 230);
    brush.circle(300 + random(-20, 20), 220 + random(-20, 20), random(3, 6), 0.3);
  }
}
