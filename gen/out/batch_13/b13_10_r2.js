async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6f1f4");
  brush.noStroke();
  // lavender-blue sky wash, peach glow behind the head
  brush.fill("#c4c8e8", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(1);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#f6d0b8", 180);
  brush.fillBleed(0.3);
  brush.circle(260, 200, 170, 0.6);
  // stem curving slightly, from lower right up to the head
  brush.fill("#8cb888", 220);
  brush.fillBleed(0.2);
  brush.beginShape(1);
  brush.vertex(252, 240);
  brush.vertex(272, 240);
  brush.vertex(330, 420);
  brush.vertex(370, 610);
  brush.vertex(344, 610);
  brush.vertex(306, 420);
  brush.endShape(true);
  // two generous leaves, each a wide almond
  let lv = [[300, 380, 200, 1], [338, 480, -25, -1]];
  for (let L of lv) {
    let x = L[0], y = L[1], a = L[2];
    let ux = cos(a), uy = sin(a), vx = -uy * L[3], vy = ux * L[3];
    brush.fill("#aad4a0", 215);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(1);
    brush.vertex(x, y);
    brush.vertex(x + ux * 50 + vx * 50, y + uy * 50 + vy * 50);
    brush.vertex(x + ux * 130 + vx * 30, y + uy * 130 + vy * 30);
    brush.vertex(x + ux * 170, y + uy * 170);
    brush.vertex(x + ux * 110 - vx * 30, y + uy * 110 - vy * 30);
    brush.vertex(x + ux * 40 - vx * 30, y + uy * 40 - vy * 30);
    brush.endShape(true);
    brush.fill("#7eac7a", 180);
    brush.fillBleed(0.22);
    brush.beginShape(1);
    brush.vertex(x, y);
    brush.vertex(x + ux * 60 + vx * 36, y + uy * 60 + vy * 36);
    brush.vertex(x + ux * 140 + vx * 14, y + uy * 140 + vy * 14);
    brush.vertex(x + ux * 150, y + uy * 150);
    brush.endShape(true);
  }
  // a looser pastel bloom: 12 broad rounded petals, lemon then apricot glaze
  let hx = 260, hy = 200;
  for (let k = 0; k < 12; k++) {
    let a = k * 30;
    brush.fill("#fae08a", 220);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(1);
    brush.vertex(hx + cos(a - 14) * 46, hy + sin(a - 14) * 46);
    brush.vertex(hx + cos(a - 12) * 110, hy + sin(a - 12) * 110);
    brush.vertex(hx + cos(a) * 138, hy + sin(a) * 138);
    brush.vertex(hx + cos(a + 12) * 110, hy + sin(a + 12) * 110);
    brush.vertex(hx + cos(a + 14) * 46, hy + sin(a + 14) * 46);
    brush.endShape(true);
    brush.fill("#f4b884", 170);
    brush.fillBleed(0.25);
    brush.beginShape(1);
    brush.vertex(hx + cos(a - 8) * 48, hy + sin(a - 8) * 48);
    brush.vertex(hx + cos(a) * 96, hy + sin(a) * 96);
    brush.vertex(hx + cos(a + 8) * 48, hy + sin(a + 8) * 48);
    brush.endShape(true);
  }
  // disc: soft sepia-lilac
  brush.fill("#a88478", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.circle(hx, hy, 56, 0.25);
  brush.fill("#7c5a5e", 200);
  brush.circle(hx + 4, hy + 6, 36, 0.3);
  brush.fill("#d2b09a", 160);
  brush.circle(hx - 16, hy - 16, 12, 0.5);
}
