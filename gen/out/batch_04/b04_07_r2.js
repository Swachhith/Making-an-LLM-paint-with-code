async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1f4f6");
  brush.noStroke();

  const cx = 240, cy = 300;
  const angs = [-90, -18, 54, 126, 198];

  // dark cool leaves tucked in the gaps between petals, never under them
  for (const a of angs) {
    const m = a + 36;
    brush.fill("#3b5f63", 215);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(1);
    brush.vertex(cx + cos(m - 8) * 175, cy + sin(m - 8) * 175);
    brush.vertex(cx + cos(m - 14) * 270, cy + sin(m - 14) * 270);
    brush.vertex(cx + cos(m) * 330, cy + sin(m) * 330);
    brush.vertex(cx + cos(m + 14) * 270, cy + sin(m + 14) * 270);
    brush.vertex(cx + cos(m + 8) * 175, cy + sin(m + 8) * 175);
    brush.endShape(true);
  }

  // white petals: only their cool shadows are painted
  for (const a of angs) {
    brush.fill("#d5dde6", 195);
    brush.fillBleed(0.2);
    brush.fillTexture(0.25, 0.6);
    brush.beginShape(1);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 36) * 145, cy + sin(a - 36) * 145);
    brush.vertex(cx + cos(a - 12) * 180, cy + sin(a - 12) * 180);
    brush.vertex(cx + cos(a + 18) * 172, cy + sin(a + 18) * 172);
    brush.vertex(cx + cos(a + 34) * 120, cy + sin(a + 34) * 120);
    brush.endShape(true);
    // cast shadow along one side of each petal
    brush.fill("#9fb2c8", 195);
    brush.fillBleed(0.3);
    brush.fillTexture(0.3, 0.6);
    brush.beginShape(1);
    brush.vertex(cx + cos(a) * 50, cy + sin(a) * 50);
    brush.vertex(cx + cos(a + 14) * 170, cy + sin(a + 14) * 170);
    brush.vertex(cx + cos(a + 34) * 125, cy + sin(a + 34) * 125);
    brush.endShape(true);
    // ruffled edge tint
    brush.fill("#c4d1de", 170);
    brush.fillBleed(0.2);
    brush.beginShape(1);
    brush.vertex(cx + cos(a - 30) * 150, cy + sin(a - 30) * 150);
    brush.vertex(cx + cos(a - 10) * 182, cy + sin(a - 10) * 182);
    brush.vertex(cx + cos(a + 18) * 172, cy + sin(a + 18) * 172);
    brush.vertex(cx + cos(a) * 160, cy + sin(a) * 160);
    brush.endShape(true);
    // red veins radiating out of the eye
    brush.fill("#c81d44", 175);
    brush.fillBleed(0.35);
    brush.beginShape(0.9);
    brush.vertex(cx + cos(a - 14) * 40, cy + sin(a - 14) * 40);
    brush.vertex(cx + cos(a) * 85, cy + sin(a) * 85);
    brush.vertex(cx + cos(a + 14) * 40, cy + sin(a + 14) * 40);
    brush.endShape(true);
  }
  // red eye
  brush.fill("#c81d44", 220);
  brush.fillBleed(0.35);
  brush.fillTexture(0.4, 0.6);
  brush.circle(cx, cy, 52, 0.6);
  brush.fill("#7c0827", 230);
  brush.fillBleed(0.12);
  brush.circle(cx, cy, 26, 0.5);
  // staminal column
  brush.fill("#d9c9cf", 230);
  brush.fillBleed(0.05);
  brush.beginShape(0.5);
  brush.vertex(cx - 4, cy); brush.vertex(cx + 70, cy - 90); brush.vertex(cx + 78, cy - 84); brush.vertex(cx + 4, cy + 4);
  brush.endShape(true);
  brush.fill("#e7b92c", 240);
  brush.circle(cx + 72, cy - 92, 9, 0.6);
  brush.fill("#c81d44", 235);
  brush.circle(cx + 82, cy - 102, 6, 0.4);

  // closed bud to the lower right, furled and shadowed
  const bx = 490, by = 470;
  brush.fill("#8ea3bb", 195);
  brush.fillBleed(0.2);
  brush.beginShape(0.9);
  brush.vertex(bx - 4, by - 120); brush.vertex(bx + 8, by - 40); brush.vertex(bx - 14, by - 8); brush.vertex(bx - 22, by - 60);
  brush.endShape(true);
  brush.fill("#c81d44", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.9);
  brush.vertex(bx + 4, by - 70); brush.vertex(bx + 22, by - 40); brush.vertex(bx + 8, by - 10);
  brush.endShape(true);
  brush.fill("#2f5c46", 230);
  brush.fillBleed(0.1);
  brush.beginShape(0.8);
  brush.vertex(bx - 28, by - 22); brush.vertex(bx + 28, by - 28); brush.vertex(bx + 12, by + 20); brush.vertex(bx - 14, by + 20);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(bx - 4, by + 15); brush.vertex(bx + 6, by + 15); brush.vertex(bx + 30, 600); brush.vertex(bx + 18, 600);
  brush.endShape(true);
}
