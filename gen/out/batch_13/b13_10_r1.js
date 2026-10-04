async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f8f2ee");
  brush.noStroke();
  // split background: rose above, mint below, meeting softly
  brush.fill("#f2c2c8", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(1);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 330);
  brush.vertex(-20, 380);
  brush.endShape(true);
  brush.fill("#c6e0cc", 175);
  brush.beginShape(1);
  brush.vertex(-20, 360);
  brush.vertex(620, 310);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  // stem, slight lean
  brush.fill("#88b284", 215);
  brush.fillBleed(0.2);
  brush.beginShape(1);
  brush.vertex(300, 250);
  brush.vertex(318, 250);
  brush.vertex(334, 610);
  brush.vertex(310, 610);
  brush.endShape(true);
  // two broad soft leaves, heart-shaped, two passes each
  let leaves = [[308, 420, 200], [322, 500, -20]];
  for (let L of leaves) {
    let x = L[0], y = L[1], a = L[2];
    brush.fill("#a6cc9c", 210);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(1);
    brush.vertex(x, y);
    brush.vertex(x + cos(a - 40) * 80, y + sin(a - 40) * 80);
    brush.vertex(x + cos(a - 12) * 150, y + sin(a - 12) * 150);
    brush.vertex(x + cos(a + 20) * 90, y + sin(a + 20) * 90);
    brush.endShape(true);
    brush.fill("#78a476", 180);
    brush.fillBleed(0.22);
    brush.beginShape(1);
    brush.vertex(x, y);
    brush.vertex(x + cos(a - 22) * 70, y + sin(a - 22) * 70);
    brush.vertex(x + cos(a - 12) * 120, y + sin(a - 12) * 120);
    brush.endShape(true);
  }
  // back ring of petals, butter-yellow and apricot
  let hx = 305, hy = 205;
  for (let k = 0; k < 16; k++) {
    let a = k * 22.5 + 11;
    brush.fill("#f4c070", 190);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.4);
    brush.beginShape(1);
    brush.vertex(hx + cos(a - 10) * 50, hy + sin(a - 10) * 50);
    brush.vertex(hx + cos(a) * 128, hy + sin(a) * 128);
    brush.vertex(hx + cos(a + 10) * 50, hy + sin(a + 10) * 50);
    brush.endShape(true);
  }
  // front ring, pointed petals
  for (let k = 0; k < 16; k++) {
    let a = k * 22.5;
    brush.fill("#f8da78", 215);
    brush.fillBleed(0.26);
    brush.beginShape(1);
    brush.vertex(hx + cos(a - 9) * 48, hy + sin(a - 9) * 48);
    brush.vertex(hx + cos(a - 3) * 118, hy + sin(a - 3) * 118);
    brush.vertex(hx + cos(a) * 140, hy + sin(a) * 140);
    brush.vertex(hx + cos(a + 4) * 116, hy + sin(a + 4) * 116);
    brush.vertex(hx + cos(a + 9) * 48, hy + sin(a + 9) * 48);
    brush.endShape(true);
  }
  // disc: dusty plum, with a paler rim of florets
  brush.fill("#c29c8e", 215);
  brush.fillBleed(0.25);
  brush.circle(hx, hy, 60, 0.25);
  brush.fill("#946c70", 200);
  brush.circle(hx + 4, hy + 5, 42, 0.3);
  brush.fill("#7a5460", 170);
  brush.circle(hx + 8, hy + 10, 20, 0.4);
}
