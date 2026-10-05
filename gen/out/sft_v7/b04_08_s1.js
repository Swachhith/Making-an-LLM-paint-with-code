async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7f1e4");
  brush.noStroke();

  // warm light: warm sky and paper, warm ground
  brush.fill("#f2d6a8", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // stem, curving
  brush.fill("#5e8a3a", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.6);
  brush.vertex(300, 350); brush.vertex(306, 350); brush.vertex(300, 620); brush.vertex(294, 620);
  brush.endShape(true);
  // two leaves
  brush.fill("#6b9a4a", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.7);
  brush.vertex(290, 420); brush.vertex(220, 390); brush.vertex(170, 430); brush.vertex(230, 460);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(300, 470); brush.vertex(370, 440); brush.vertex(420, 480); brush.vertex(360, 510);
  brush.endShape(true);

  // anemone: ring of 16 blue petals, one face-on
  const cx = 270, cy = 270;
  const R = 135;
  for (let k = 0; k < 16; k++) {
    const a = k * 22.5 + (k % 2 ? 0 : 2);
    const px = cx + cos(a) * R, py = cy + sin(a) * R;
    const lx = cx + cos(a + 90) * 28, ly = cy + sin(a + 90) * 28;
    const lx2 = cx + cos(a + 180) * 28, ly2 = cy + sin(a + 180) * 28;
    brush.fill("#1e6ab8", 205);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.7);
    brush.vertex(cx + cos(a) * 10, cy + sin(a) * 10);
    brush.vertex(px - 14 * cos(a + 45), py - 14 * sin(a + 45));
    brush.vertex(lx2 - 14 * cos(a + 135), ly2 - 14 * sin(a + 135));
    brush.vertex(lx - 14 * cos(a + 225), ly - 14 * sin(a + 225));
    brush.vertex(px + 14 * cos(a + 45), py + 14 * sin(a + 45));
    brush.endShape(true);
  }
  // face-on petal, darker
  brush.fill("#124a9a", 215);
  brush.fillBleed(0.22);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(cx - 10, cy - 10); brush.vertex(cx + 10, cy - 10); brush.vertex(cx + 12, cy + 10); brush.vertex(cx - 12, cy + 10);
  brush.endShape(true);

  // centre: dark core with a yellow halo
  brush.fill("#2a1a5a", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.circle(cx, cy, 34, 0.3);
  brush.fill("#f2c83a", 210);
  brush.fillBleed(0.25);
  brush.circle(cx, cy, 20, 0.4);
  brush.fill("#c97a18", 220);
  brush.circle(cx + 2, cy + 2, 10, 0.3);
}
