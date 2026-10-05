async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf6ec");
  brush.noStroke();
  // soft pastel sky wash, left
  brush.fill("#f4eef6", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 300); brush.vertex(300, 320); brush.vertex(-20, 320);
  brush.endShape(true);
  // stems, curving
  brush.fill("#8aa39a", 210);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(330, 520); brush.vertex(350, 520); brush.vertex(356, 330); brush.vertex(344, 330);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(120, 540); brush.vertex(140, 540); brush.vertex(136, 400); brush.vertex(148, 400);
  brush.endShape(true);
  // bloom 1: open, facing up-right
  let cx = 340, cy = 330;
  for (let i = 0; i < 18; i++) {
    let a = i * 20 + 3;
    let r = 110 + (i % 3) * 10;
    let w = 18 + (i % 2) * 4;
    brush.fill(i % 2 ? "#f2a0a0" : "#f78a8a", 200);
    brush.fillBleed(0.25);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(0.7);
    brush.vertex(cx + cos(a - w) * r * 0.4, cy + sin(a - w) * r * 0.4);
    brush.vertex(cx + cos(a - w * 0.6) * r, cy + sin(a - w * 0.6) * r);
    brush.vertex(cx + cos(a + w * 0.6) * r, cy + sin(a + w * 0.6) * r);
    brush.vertex(cx + cos(a + w) * r * 0.4, cy + sin(a + w) * r * 0.4);
    brush.endShape(true);
  }
  brush.fill("#f2a0a0", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(cx, cy, 80, 0.6);
  brush.fill("#e06060", 220);
  brush.fillBleed(0.2);
  brush.circle(cx - 6, cy - 6, 22, 0.4);
  // bloom 2: closed, lower-left
  cx = 140; cy = 400;
  for (let i = 0; i < 14; i++) {
    let a = i * 25.7 + 3;
    let r = 80 + i * 4;
    brush.fill("#f8b0a0", 200);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.6);
    brush.vertex(cx + cos(a - 12) * r * 0.5, cy + sin(a - 12) * r * 0.5);
    brush.vertex(cx + cos(a - 6) * r, cy + sin(a - 6) * r);
    brush.vertex(cx + cos(a + 6) * r, cy + sin(a + 6) * r);
    brush.vertex(cx + cos(a + 12) * r * 0.5, cy + sin(a + 12) * r * 0.5);
    brush.endShape(true);
  }
  brush.fill("#f8b0a0", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(cx, cy, 60, 0.6);
  brush.fill("#e06060", 220);
  brush.fillBleed(0.2);
  brush.circle(cx - 4, cy - 4, 16, 0.4);
  // loose pastel drips
  brush.fill("#f2a0a0", 150);
  brush.fillBleed(0.3);
  brush.circle(520, 220, 30, 0.6);
  brush.circle(50, 520, 28, 0.6);
  brush.circle(300, 550, 22, 0.6);
}
