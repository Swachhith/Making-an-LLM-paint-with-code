async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdfbf4");
  brush.noStroke();

  // splashy turquoise sky blooms, uneven
  let blooms = [[80, 80, 110, "#46b8d0"], [300, 40, 130, "#5ac2dc"], [520, 110, 120, "#3aa0c8"], [180, 220, 90, "#7fd0d8"]];
  for (let b of blooms) {
    brush.fill(b[3], 170);
    brush.fillBleed(0.4);
    brush.fillTexture(0.6, 0.6);
    brush.circle(b[0], b[1], b[2], 0.9);
  }

  // sea strip
  brush.fill("#1a8aa8", 200);
  brush.fillBleed(0.4);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, 380);
  brush.vertex(620, 370);
  brush.vertex(620, 440);
  brush.vertex(-20, 450);
  brush.endShape(true);

  // sand
  brush.fill("#f0c878", 190);
  brush.fillBleed(0.4);
  brush.fillTexture(0.6, 0.5);
  brush.beginShape(0.7);
  brush.vertex(-20, 440);
  brush.vertex(300, 425);
  brush.vertex(620, 435);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#e0a050", 170);
  brush.fillBleed(0.4);
  brush.fillTexture(0.6, 0.5);
  brush.circle(420, 560, 80, 0.9);

  // leaning trunk: wide soft band, tall vertical
  brush.fill("#9a6a3a", 210);
  brush.fillBleed(0.35);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(380, 590);
  brush.vertex(412, 590);
  brush.vertex(370, 420);
  brush.vertex(320, 260);
  brush.vertex(290, 140);
  brush.vertex(270, 140);
  brush.vertex(300, 265);
  brush.vertex(345, 425);
  brush.endShape(true);

  // fronds: broad drooping wedges radiating from crown
  let cx = 280, cy = 135;
  let fr = [[-175, 190], [-145, 200], [-115, 150], [-70, 140], [-30, 190], [5, 200], [40, 170], [160, 150], [120, 120]];
  for (let f of fr) {
    let a = f[0], L = f[1];
    let droop = 60;
    brush.fill("#2e8a3a", 200);
    brush.fillBleed(0.4);
    brush.fillTexture(0.6, 0.5);
    brush.beginShape(0.8);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 16) * L * 0.55, cy + sin(a - 10) * L * 0.5 - 10);
    brush.vertex(cx + cos(a) * L, cy + sin(a) * L + droop);
    brush.vertex(cx + cos(a + 16) * L * 0.55, cy + sin(a + 10) * L * 0.5 + 12);
    brush.endShape(true);
  }
  // darker second pass on some fronds
  for (let f of [[-150, 130], [-40, 130], [30, 150]]) {
    brush.fill("#145a28", 200);
    brush.fillBleed(0.4);
    brush.fillTexture(0.6, 0.5);
    brush.beginShape(0.8);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(f[0] - 6) * f[1] * 0.5, cy + sin(f[0] - 6) * f[1] * 0.5);
    brush.vertex(cx + cos(f[0]) * f[1], cy + sin(f[0]) * f[1] + 30);
    brush.vertex(cx + cos(f[0] + 6) * f[1] * 0.5, cy + sin(f[0] + 6) * f[1] * 0.5 + 10);
    brush.endShape(true);
  }
  // coconuts
  brush.fill("#5a3a1a", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.circle(275, 150, 9, 0.4);
  brush.circle(292, 148, 8, 0.4);

  // splatter drips of colour
  for (let i = 0; i < 40; i++) {
    let x = (i * 131) % 600;
    let y = (i * 89) % 600;
    brush.fill(i % 2 ? "#2e8a3a" : "#1a8aa8", 200);
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.4);
    brush.circle(x, y, 2 + (i % 4) * 2, 0.6);
  }
}
