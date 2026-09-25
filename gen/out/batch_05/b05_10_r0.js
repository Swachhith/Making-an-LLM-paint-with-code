async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdfcf8");
  brush.noStroke();
  // bloom one: facing us, upper left, five pale lemon petals
  let ax = 215, ay = 225;
  for (let i = 0; i < 5; i++) {
    let a = i * 72 - 60;
    brush.fill("#f9e690", 175);
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.45);
    brush.beginShape(0.9);
    brush.vertex(ax, ay);
    brush.vertex(ax + 110 * cos(a - 34), ay + 110 * sin(a - 34));
    brush.vertex(ax + 150 * cos(a - 8), ay + 150 * sin(a - 8));
    brush.vertex(ax + 140 * cos(a + 20), ay + 140 * sin(a + 20));
    brush.vertex(ax + 90 * cos(a + 36), ay + 90 * sin(a + 36));
    brush.endShape(true);
  }
  // soft coral eye
  brush.fill("#f4b3a0", 180);
  brush.fillBleed(0.35);
  brush.circle(ax, ay, 32, true);
  // column
  brush.fill("#f0c860", 200);
  brush.fillBleed(0.05);
  brush.beginShape(0.4);
  brush.vertex(ax, ay); brush.vertex(ax + 6, ay + 2); brush.vertex(ax + 62, ay - 70); brush.vertex(ax + 56, ay - 74);
  brush.endShape(true);
  brush.fill("#e98c6a", 200);
  brush.circle(ax + 60, ay - 74, 6, true);
  // bloom two: turned away, lower right, a trumpet in profile
  let bx = 410, by = 410;
  brush.fill("#f7df7a", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.45);
  brush.beginShape(0.85);
  brush.vertex(bx - 20, by + 60); brush.vertex(bx - 110, by - 30); brush.vertex(bx - 90, by - 90);
  brush.vertex(bx - 20, by - 50); brush.vertex(bx + 20, by - 100); brush.vertex(bx + 80, by - 70);
  brush.vertex(bx + 60, by);
  brush.endShape(true);
  brush.fill("#f2cf5c", 170);
  brush.fillBleed(0.2);
  brush.beginShape(0.85);
  brush.vertex(bx - 15, by + 55); brush.vertex(bx - 40, by - 20); brush.vertex(bx + 15, by - 45);
  brush.vertex(bx + 35, by + 5);
  brush.endShape(true);
  brush.fill("#f4b3a0", 165);
  brush.fillBleed(0.25);
  brush.circle(bx - 5, by + 30, 16, true);
  // green calyx and a light stem, barely there
  brush.fill("#b7cf95", 185);
  brush.fillBleed(0.15);
  brush.beginShape(0.7);
  brush.vertex(bx - 30, by + 55); brush.vertex(bx, by + 90); brush.vertex(bx + 20, by + 60);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(bx - 2, by + 85); brush.vertex(bx + 6, by + 85); brush.vertex(bx + 40, by + 170); brush.vertex(bx + 32, by + 172);
  brush.endShape(true);
}
