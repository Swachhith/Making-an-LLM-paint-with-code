async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf6f0");
  randomSeed(111);
  brush.noStroke();
  // pastel ground: lilac above, mint below, blushing into each other
  brush.fill("#d4c4ea", 175);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 330); brush.vertex(-20, 430);
  brush.endShape(true);
  brush.fill("#bfe2ce", 175);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(-20, 400); brush.vertex(620, 310); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  for (let b of [[520, 80, "#f4b8c8"], [80, 520, "#f6c8a8"], [560, 540, "#c8b4e4"], [60, 60, "#f8d0b8"]]) {
    brush.fill(b[2], 185);
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.5);
    brush.circle(b[0], b[1], 70, 1);
  }
  // stems, smooth and slightly curved
  brush.fill("#7fae84", 215);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.8);
  brush.vertex(222, 330); brush.vertex(244, 330); brush.vertex(262, 470); brush.vertex(258, 620); brush.vertex(236, 620); brush.vertex(240, 470);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(448, 245); brush.vertex(464, 245); brush.vertex(440, 420); brush.vertex(410, 620); brush.vertex(390, 620); brush.vertex(420, 420);
  brush.endShape(true);
  // leaves
  brush.fill("#95c79a", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.8);
  brush.vertex(255, 480); brush.vertex(320, 425); brush.vertex(380, 420); brush.vertex(320, 480);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(425, 440); brush.vertex(500, 420); brush.vertex(540, 440); brush.vertex(470, 465);
  brush.endShape(true);
  // open dahlia: four rings, shadows at petal bases
  let cx = 230, cy = 270;
  let rings = [[200, 18, "#f8c09a", 185], [155, 16, "#f6a47a", 200], [108, 14, "#f38c62", 210], [62, 10, "#ee7a52", 220]];
  for (let k = 0; k < rings.length; k++) {
    let R = rings[k][0], n = rings[k][1];
    for (let i = 0; i < n; i++) {
      let a = i * 360 / n + k * 9 + random(-3, 3);
      let w = 170 / n;
      brush.fill(rings[k][2], rings[k][3] - random(25));
      brush.fillBleed(0.25);
      brush.fillTexture(0.4, 0.4);
      brush.beginShape(0.5);
      brush.vertex(cx + cos(a - w) * R * 0.3, cy + sin(a - w) * R * 0.3);
      brush.vertex(cx + cos(a - w * 0.75) * R * 0.82, cy + sin(a - w * 0.75) * R * 0.82);
      brush.vertex(cx + cos(a) * R, cy + sin(a) * R);
      brush.vertex(cx + cos(a + w * 0.75) * R * 0.82, cy + sin(a + w * 0.75) * R * 0.82);
      brush.vertex(cx + cos(a + w) * R * 0.3, cy + sin(a + w) * R * 0.3);
      brush.endShape(true);
    }
    brush.fill("#d890a0", 130);
    brush.fillBleed(0.3);
    brush.circle(cx, cy, R * 0.45, 0.8);
  }
  brush.fill("#e87050", 220);
  brush.fillBleed(0.2);
  brush.circle(cx, cy, 24, 0.6);
  brush.fill("#e8c870", 210);
  brush.circle(cx - 3, cy - 3, 11, 0.4);
  // bud, tight and tall
  let bx = 455, by = 205;
  brush.fill("#f7b08a", 205);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(bx - 34, by + 10); brush.vertex(bx - 22, by - 40); brush.vertex(bx, by - 62); brush.vertex(bx + 22, by - 40); brush.vertex(bx + 34, by + 10); brush.vertex(bx, by + 38);
  brush.endShape(true);
  brush.fill("#ef8a60", 205);
  brush.beginShape(0.7);
  brush.vertex(bx - 16, by + 10); brush.vertex(bx - 4, by - 48); brush.vertex(bx + 18, by + 4); brush.vertex(bx, by + 32);
  brush.endShape(true);
  brush.fill("#7fae84", 215);
  brush.beginShape(0.5);
  brush.vertex(bx - 38, by + 2); brush.vertex(bx - 16, by + 42); brush.vertex(bx + 16, by + 42); brush.vertex(bx + 38, by + 2); brush.vertex(bx, by + 24);
  brush.endShape(true);
}
