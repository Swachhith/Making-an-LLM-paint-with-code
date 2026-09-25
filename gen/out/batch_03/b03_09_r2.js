async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ede3d2");
  brush.noStroke();

  brush.fill("#bba98a", 175);
  brush.fillBleed(0.5);
  brush.fillTexture(0.7, 0.6);
  brush.beginShape(0.9);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 260); brush.vertex(320, 340); brush.vertex(0, 220);
  brush.endShape(true);

  // leaves, serrated look via many vertices
  let lv = [[200, 380, 150, 190], [300, 410, 60, 170], [460, 480, 120, 130]];
  for (let L of lv) {
    brush.fill("#66703f", 210);
    brush.fillBleed(0.25);
    brush.fillTexture(0.6, 0.5);
    brush.beginShape(0.4);
    brush.vertex(L[0], L[1]);
    for (let t = -30; t <= 30; t += 10) {
      let rr = L[3] * (t == 0 ? 1 : 0.55 + (30 - abs(t)) / 70) * (abs(t) % 20 == 10 ? 0.92 : 1);
      brush.vertex(L[0] + cos(L[2] + t) * rr, L[1] + sin(L[2] + t) * rr);
    }
    brush.endShape(true);
    brush.fill("#48512b", 190);
    brush.fillBleed(0.1);
    brush.beginShape(0.5);
    brush.vertex(L[0], L[1]);
    brush.vertex(L[0] + cos(L[2] + 3) * L[3] * 0.9, L[1] + sin(L[2] + 3) * L[3] * 0.9);
    brush.vertex(L[0] + cos(L[2] + 14) * L[3] * 0.5, L[1] + sin(L[2] + 14) * L[3] * 0.5);
    brush.endShape(true);
  }

  // bud stem
  brush.fill("#56613a", 220);
  brush.fillBleed(0.1);
  brush.beginShape(0.5);
  brush.vertex(455, 360); brush.vertex(472, 470); brush.vertex(462, 600); brush.vertex(474, 600); brush.vertex(485, 470); brush.vertex(466, 358);
  brush.endShape(true);

  // open hibiscus: five broad overlapping petals, dusty magenta
  let cx = 235, cy = 250;
  for (let k = 0; k < 5; k++) {
    let a = k * 72 - 60;
    brush.fill("#a13c64", 215);
    brush.fillBleed(0.35);
    brush.fillTexture(0.55, 0.6);
    brush.beginShape(0.75);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 40) * 155, cy + sin(a - 40) * 155);
    brush.vertex(cx + cos(a - 14) * 210, cy + sin(a - 14) * 210);
    brush.vertex(cx + cos(a + 2) * 198, cy + sin(a + 2) * 198);
    brush.vertex(cx + cos(a + 16) * 212, cy + sin(a + 16) * 212);
    brush.vertex(cx + cos(a + 40) * 150, cy + sin(a + 40) * 150);
    brush.endShape(true);
    brush.fill("#c77a92", 175);
    brush.fillBleed(0.15);
    brush.beginShape(0.8);
    brush.vertex(cx + cos(a - 16) * 150, cy + sin(a - 16) * 150);
    brush.vertex(cx + cos(a - 10) * 200, cy + sin(a - 10) * 200);
    brush.vertex(cx + cos(a + 12) * 200, cy + sin(a + 12) * 200);
    brush.vertex(cx + cos(a + 18) * 150, cy + sin(a + 18) * 150);
    brush.endShape(true);
    brush.fill("#4a1028", 235);
    brush.fillBleed(0.35);
    brush.beginShape(0.8);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 22) * 70, cy + sin(a - 22) * 70);
    brush.vertex(cx + cos(a) * 85, cy + sin(a) * 85);
    brush.vertex(cx + cos(a + 22) * 70, cy + sin(a + 22) * 70);
    brush.endShape(true);
  }
  brush.fill("#7c2442", 230);
  brush.fillBleed(0.05);
  brush.beginShape(0.3);
  brush.vertex(cx - 4, cy); brush.vertex(cx + 80, cy - 100); brush.vertex(cx + 88, cy - 94); brush.vertex(cx + 4, cy + 4);
  brush.endShape(true);
  brush.fill("#d19a3a", 230);
  for (let k = 0; k < 6; k++) {
    brush.circle(cx + 50 + k * 7, cy - 60 - k * 8, 6, true);
  }
  brush.fill("#8a2240", 230);
  brush.circle(cx + 86, cy - 100, 8, true);

  // closed bud, spiral-furled
  brush.fill("#9a4a68", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.55, 0.5);
  brush.beginShape(0.8);
  brush.vertex(448, 360); brush.vertex(428, 290); brush.vertex(452, 200); brush.vertex(482, 290); brush.vertex(472, 360);
  brush.endShape(true);
  brush.fill("#6a2440", 215);
  brush.beginShape(0.8);
  brush.vertex(458, 355); brush.vertex(448, 270); brush.vertex(453, 205); brush.vertex(475, 300);
  brush.endShape(true);
  // calyx
  brush.fill("#56613a", 225);
  brush.fillBleed(0.15);
  for (let s = -1; s <= 1; s++) {
    brush.beginShape(0.6);
    brush.vertex(446 + s * 6, 372);
    brush.vertex(452 + s * 22, 312);
    brush.vertex(470 + s * 6, 370);
    brush.endShape(true);
  }
}
