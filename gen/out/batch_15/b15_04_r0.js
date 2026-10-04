async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function petal(cx, cy, ang, len, wid, col, op) {
  let tx = cx + cos(ang) * len;
  let ty = cy + sin(ang) * len;
  let px = cos(ang + 90) * wid;
  let py = sin(ang + 90) * wid;
  brush.fill(col, op);
  brush.beginShape(0.8);
  brush.vertex(cx + px * 0.4, cy + py * 0.4);
  brush.vertex(cx + cos(ang) * len * 0.5 + px, cy + sin(ang) * len * 0.5 + py);
  brush.vertex(tx, ty);
  brush.vertex(cx + cos(ang) * len * 0.5 - px, cy + sin(ang) * len * 0.5 - py);
  brush.vertex(cx - px * 0.4, cy - py * 0.4);
  brush.endShape(true);
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3f0e4");
  randomSeed(404);
  brush.noStroke();

  // soft green-grey backdrop at the lower left
  brush.fill("#7f9468", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.circle(160, 470, 200, 0.6);

  // stems
  brush.fill("#3f6a2a", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.5);
  brush.vertex(262, 300);
  brush.vertex(282, 300);
  brush.vertex(250, 600);
  brush.vertex(228, 600);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(470, 250);
  brush.vertex(486, 255);
  brush.vertex(340, 600);
  brush.vertex(318, 600);
  brush.endShape(true);
  // leaf
  brush.fill("#4f7a30", 190);
  brush.beginShape(0.7);
  brush.vertex(245, 520);
  brush.vertex(150, 470);
  brush.vertex(110, 490);
  brush.vertex(190, 530);
  brush.endShape(true);

  // open bloom
  let cx = 270, cy = 280;
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  for (let i = 0; i < 13; i++) {
    let a = i * (360 / 13) + random(-6, 6);
    petal(cx, cy, a, random(135, 160), random(20, 26), "#f0a818", 190);
  }
  brush.fillBleed(0.2);
  for (let i = 0; i < 13; i++) {
    let a = i * (360 / 13) + 14 + random(-5, 5);
    petal(cx, cy, a, random(90, 120), random(12, 16), "#d9780e", 170);
  }
  // shadow ring near centre
  brush.fill("#b0520c", 190);
  brush.fillBleed(0.25);
  brush.circle(cx, cy, 58, 0.4);
  // dark cone
  brush.fill("#3a1c0c", 240);
  brush.fillBleed(0.15);
  brush.fillTexture(0.5, 0.4);
  brush.circle(cx, cy, 40, 0.3);
  brush.fill("#1a0c06", 230);
  brush.circle(cx + 6, cy + 6, 26, 0.3);

  // closed bud
  let bx = 478, by = 232;
  brush.fill("#e89a14", 200);
  brush.fillBleed(0.22);
  brush.beginShape(0.8);
  brush.vertex(bx - 26, by);
  brush.vertex(bx - 8, by - 62);
  brush.vertex(bx + 4, by - 70);
  brush.vertex(bx + 24, by - 20);
  brush.vertex(bx + 20, by + 6);
  brush.endShape(true);
  brush.fill("#c86a0c", 170);
  brush.beginShape(0.8);
  brush.vertex(bx - 2, by - 60);
  brush.vertex(bx + 22, by - 18);
  brush.vertex(bx + 10, by + 4);
  brush.endShape(true);
  // sepals
  brush.fill("#3f6a2a", 220);
  brush.beginShape(0.6);
  brush.vertex(bx - 34, by - 8);
  brush.vertex(bx + 32, by - 4);
  brush.vertex(bx + 6, by + 28);
  brush.endShape(true);
}
