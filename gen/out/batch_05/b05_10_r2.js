async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdfdf9");
  brush.noStroke();
  // one pale sage leaf behind, loose
  brush.fill("#c7dab0", 175);
  brush.fillBleed(0.35);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(300, 470); brush.vertex(360, 420); brush.vertex(450, 520); brush.vertex(380, 540);
  brush.endShape(true);
  // bloom one: facing us, upper left, five ruffled lemon petals
  let ax = 215, ay = 225;
  for (let i = 0; i < 5; i++) {
    let a = i * 72 - 60;
    brush.fill("#f8df72", 195);
    brush.fillBleed(0.32);
    brush.fillTexture(0.4, 0.45);
    brush.beginShape(0.9);
    brush.vertex(ax, ay);
    brush.vertex(ax + 110 * cos(a - 34), ay + 110 * sin(a - 34));
    brush.vertex(ax + 150 * cos(a - 16), ay + 150 * sin(a - 16));
    brush.vertex(ax + 136 * cos(a - 2), ay + 136 * sin(a - 2));
    brush.vertex(ax + 152 * cos(a + 14), ay + 152 * sin(a + 14));
    brush.vertex(ax + 90 * cos(a + 36), ay + 90 * sin(a + 36));
    brush.endShape(true);
    brush.fill("#f0c440", 175);
    brush.fillBleed(0.15);
    brush.beginShape(0.9);
    brush.vertex(ax, ay);
    brush.vertex(ax + 80 * cos(a + 10), ay + 80 * sin(a + 10));
    brush.vertex(ax + 120 * cos(a + 24), ay + 120 * sin(a + 24));
    brush.vertex(ax + 60 * cos(a + 34), ay + 60 * sin(a + 34));
    brush.endShape(true);
    // faint coral veins radiating from the eye
    brush.fill("#f0a58c", 160);
    brush.fillBleed(0.1);
    brush.beginShape(0.6);
    brush.vertex(ax, ay);
    brush.vertex(ax + 70 * cos(a - 4), ay + 70 * sin(a - 4));
    brush.vertex(ax + 70 * cos(a + 2), ay + 70 * sin(a + 2));
    brush.endShape(true);
  }
  brush.fill("#ee9a80", 200);
  brush.fillBleed(0.35);
  brush.circle(ax, ay, 28, true);
  // column
  brush.fill("#e6b545", 220);
  brush.fillBleed(0.05);
  brush.beginShape(0.4);
  brush.vertex(ax, ay); brush.vertex(ax + 6, ay + 2); brush.vertex(ax + 62, ay - 70); brush.vertex(ax + 56, ay - 74);
  brush.endShape(true);
  brush.fill("#df7152", 220);
  brush.circle(ax + 60, ay - 74, 6, true);
  // bloom two: turned away, a trumpet in profile, lower right
  let bx = 410, by = 410;
  brush.fill("#f7d862", 195);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.45);
  brush.beginShape(0.85);
  brush.vertex(bx - 20, by + 60); brush.vertex(bx - 115, by - 30); brush.vertex(bx - 95, by - 95);
  brush.vertex(bx - 20, by - 55); brush.vertex(bx + 20, by - 105); brush.vertex(bx + 85, by - 72);
  brush.vertex(bx + 62, by);
  brush.endShape(true);
  brush.fill("#eebf3e", 190);
  brush.fillBleed(0.2);
  brush.beginShape(0.85);
  brush.vertex(bx - 15, by + 55); brush.vertex(bx - 45, by - 20); brush.vertex(bx + 15, by - 48);
  brush.vertex(bx + 38, by + 5);
  brush.endShape(true);
  brush.fill("#ee9a80", 185);
  brush.fillBleed(0.25);
  brush.circle(bx - 5, by + 32, 15, true);
  // column peeking from the second bloom
  brush.fill("#e6b545", 215);
  brush.fillBleed(0.05);
  brush.beginShape(0.4);
  brush.vertex(bx - 5, by - 10); brush.vertex(bx + 1, by - 8); brush.vertex(bx - 20, by - 85); brush.vertex(bx - 26, by - 84);
  brush.endShape(true);
  brush.fill("#df7152", 215);
  brush.circle(bx - 24, by - 88, 5, true);
  // calyces and stems
  brush.fill("#a3c27f", 205);
  brush.fillBleed(0.15);
  brush.beginShape(0.7);
  brush.vertex(bx - 30, by + 55); brush.vertex(bx, by + 92); brush.vertex(bx + 22, by + 60);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(bx - 2, by + 85); brush.vertex(bx + 6, by + 85); brush.vertex(bx - 40, by + 175); brush.vertex(bx - 48, by + 172);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(ax + 40, ay + 130); brush.vertex(ax + 48, ay + 130); brush.vertex(bx - 42, by + 172); brush.vertex(bx - 50, by + 170);
  brush.endShape(true);
}
