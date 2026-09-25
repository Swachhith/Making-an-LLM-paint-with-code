async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e9eef1");
  brush.noStroke();

  // cool slate-green foliage mass on the right, so the white petals read
  brush.fill("#7f9c98", 175);
  brush.fillBleed(0.4);
  brush.fillTexture(0.6, 0.5);
  brush.beginShape(1);
  brush.vertex(330, 60); brush.vertex(600, 40); brush.vertex(600, 600); brush.vertex(250, 600); brush.vertex(380, 330);
  brush.endShape(true);
  brush.fill("#4d6e6c", 170);
  brush.fillBleed(0.3);
  brush.beginShape(1);
  brush.vertex(450, 120); brush.vertex(600, 160); brush.vertex(600, 420); brush.vertex(470, 330);
  brush.endShape(true);

  // five white petals, broad and overlapping, shadowed in cool grey
  const cx = 250, cy = 320;
  const angs = [-90, -18, 54, 126, 198];
  for (const a of angs) {
    brush.fill("#ffffff", 240);
    brush.fillBleed(0.15);
    brush.fillTexture(0.2, 0.5);
    brush.beginShape(1);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 38) * 150, cy + sin(a - 38) * 150);
    brush.vertex(cx + cos(a - 10) * 185, cy + sin(a - 10) * 185);
    brush.vertex(cx + cos(a + 20) * 175, cy + sin(a + 20) * 175);
    brush.vertex(cx + cos(a + 34) * 120, cy + sin(a + 34) * 120);
    brush.endShape(true);
    brush.fill("#b7c3d0", 150);
    brush.fillBleed(0.3);
    brush.beginShape(1);
    brush.vertex(cx + cos(a + 20) * 60, cy + sin(a + 20) * 60);
    brush.vertex(cx + cos(a + 25) * 150, cy + sin(a + 25) * 150);
    brush.vertex(cx + cos(a + 34) * 115, cy + sin(a + 34) * 115);
    brush.endShape(true);
  }
  // red eye bleeding outward
  brush.fill("#c4163c", 200);
  brush.fillBleed(0.4);
  brush.fillTexture(0.4, 0.6);
  brush.circle(cx, cy, 55, 0.6);
  brush.fill("#8a0a2c", 225);
  brush.fillBleed(0.15);
  brush.circle(cx, cy, 28, 0.5);
  // staminal column
  brush.fill("#e8dfe2", 230);
  brush.fillBleed(0.05);
  brush.beginShape(0.5);
  brush.vertex(cx - 4, cy); brush.vertex(cx + 70, cy - 90); brush.vertex(cx + 78, cy - 84); brush.vertex(cx + 4, cy + 4);
  brush.endShape(true);
  brush.fill("#e7b92c", 235);
  brush.circle(cx + 70, cy - 92, 8, 0.6);
  brush.fill("#c4163c", 230);
  brush.circle(cx + 80, cy - 100, 5, 0.4);

  // closed bud: furled spindle with a green calyx
  const bx = 470, by = 470;
  brush.fill("#ffffff", 240);
  brush.fillBleed(0.15);
  brush.beginShape(0.9);
  brush.vertex(bx - 5, by - 120); brush.vertex(bx + 25, by - 40); brush.vertex(bx + 10, by); brush.vertex(bx - 20, by - 10); brush.vertex(bx - 22, by - 60);
  brush.endShape(true);
  brush.fill("#aebccb", 160);
  brush.fillBleed(0.2);
  brush.beginShape(0.9);
  brush.vertex(bx - 5, by - 115); brush.vertex(bx + 8, by - 30); brush.vertex(bx - 12, by - 10);
  brush.endShape(true);
  brush.fill("#3e6b4a", 225);
  brush.fillBleed(0.1);
  brush.beginShape(0.8);
  brush.vertex(bx - 26, by - 25); brush.vertex(bx + 28, by - 30); brush.vertex(bx + 12, by + 20); brush.vertex(bx - 14, by + 20);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(bx - 4, by + 15); brush.vertex(bx + 6, by + 15); brush.vertex(bx + 20, by + 120); brush.vertex(bx + 10, by + 120);
  brush.endShape(true);
}
