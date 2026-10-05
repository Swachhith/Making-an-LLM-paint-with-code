async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4ecd9");
  brush.noStroke();
  // faint ground wash
  brush.fill("#d9a040", 150); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-10, 470); brush.vertex(300, 455); brush.vertex(610, 470); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#e08a50", 120);
  brush.circle(120, 120, 70, 0.6);
  // trunk
  brush.fill("#3a2418", 220); brush.fillBleed(0.15);
  brush.beginShape(0.3);
  brush.vertex(398, 470); brush.vertex(420, 470); brush.vertex(418, 380); brush.vertex(408, 340); brush.vertex(396, 380);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(404, 360); brush.vertex(425, 340); brush.vertex(450, 300); brush.vertex(430, 330);
  brush.vertex(414, 376);
  brush.endShape(true);
  // blossom crown, three passes
  const cx = 415, cy = 290;
  brush.fill("#e07a60", 150); brush.fillBleed(0.3);
  brush.circle(cx, cy, 70, 0.7); brush.circle(cx - 40, cy + 20, 45, 0.7); brush.circle(cx + 38, cy + 22, 42, 0.7);
  brush.fill("#d8483c", 170);
  brush.circle(cx - 8, cy - 8, 48, 0.6); brush.circle(cx + 30, cy + 15, 28, 0.6); brush.circle(cx - 35, cy + 22, 26, 0.6);
  brush.fill("#3a2418", 150);
  for (let i = 0; i < 8; i++) brush.circle(cx - 55 + i * 15, cy + 40 - (i % 3) * 22, 4, 0.5);
  // distant tiny trees
  brush.fill("#d8483c", 140);
  for (let i = 0; i < 5; i++) brush.circle(60 + i * 55, 458 + (i % 2) * 6, 14, 0.6);
  brush.fill("#3a2418", 190);
  brush.beginShape(0.3);
  brush.vertex(100, 520); brush.vertex(500, 515); brush.vertex(520, 535); brush.vertex(120, 540);
  brush.endShape(true);
}
