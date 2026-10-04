async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf8f2");
  brush.noStroke();
  let cx = 400, cy = 210;
  // a faint shadow wash on the paper under the bloom
  brush.fill("#e8dccb", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.circle(cx + 20, cy + 30, 150, 0.5);
  // stem, curving down-left
  brush.fill("#3f6b2a", 210);
  brush.fillBleed(0.2);
  brush.beginShape(1);
  brush.vertex(cx - 8, cy + 40);
  brush.vertex(cx - 30, cy + 170);
  brush.vertex(cx - 80, cy + 360);
  brush.vertex(cx - 62, cy + 362);
  brush.vertex(cx - 12, cy + 170);
  brush.vertex(cx + 10, cy + 40);
  brush.endShape(true);
  // feathery leaf ruff
  brush.fill("#2f5a24", 190);
  brush.beginShape(1);
  brush.vertex(cx - 30, cy + 150);
  brush.vertex(cx - 110, cy + 120);
  brush.vertex(cx - 60, cy + 160);
  brush.vertex(cx - 20, cy + 175);
  brush.vertex(cx + 40, cy + 150);
  brush.vertex(cx + 90, cy + 130);
  brush.vertex(cx + 20, cy + 165);
  brush.endShape(true);
  // six broad scarlet petals, two passes each
  for (let k = 0; k < 6; k++) {
    let a = k * 60 + 15;
    let r = 105;
    let px = cx + cos(a) * r * 0.55, py = cy + sin(a) * r * 0.55;
    brush.fill("#d4102c", 210);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(1);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 30) * r, cy + sin(a - 30) * r);
    brush.vertex(cx + cos(a) * r * 1.1, cy + sin(a) * r * 1.1);
    brush.vertex(cx + cos(a + 30) * r, cy + sin(a + 30) * r);
    brush.endShape(true);
    brush.fill("#a8001e", 190);
    brush.fillBleed(0.2);
    brush.circle(px, py, 30, 0.6);
  }
  // white ring then black centre
  brush.fill("#f4e9ea", 220);
  brush.fillBleed(0.15);
  brush.circle(cx, cy, 30, 0.3);
  brush.fill("#1a1024", 240);
  brush.fillBleed(0.2);
  brush.circle(cx, cy, 20, 0.3);
  brush.fill("#2a1a3a", 220);
  brush.circle(cx, cy, 13, 0.2);
  for (let k = 0; k < 14; k++) {
    brush.fill("#150b1c", 220);
    brush.fillBleed(0.1);
    brush.circle(cx + cos(k * 26) * 28, cy + sin(k * 26) * 28, 3, 0.3);
  }
}
