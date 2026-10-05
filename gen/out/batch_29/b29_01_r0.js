async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3f0e6");
  brush.noStroke();
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.fill("#2a8fd8", 190);
  brush.beginShape(0.6);
  brush.vertex(10, 10); brush.vertex(590, 10); brush.vertex(590, 590); brush.vertex(10, 590);
  brush.endShape(true);
  brush.fill("#18b0a0", 150);
  brush.beginShape(0.6);
  brush.vertex(10, 300); brush.vertex(590, 260); brush.vertex(590, 590); brush.vertex(10, 590);
  brush.endShape(true);
  // trunk
  brush.fill("#8a4a1c", 200);
  brush.beginShape(0.5);
  brush.vertex(240, 590); brush.vertex(262, 330); brush.vertex(270, 150); brush.vertex(330, 150); brush.vertex(345, 330); brush.vertex(380, 590);
  brush.endShape(true);
  brush.fill("#c8541a", 190);
  brush.beginShape(0.5);
  brush.vertex(262, 590); brush.vertex(278, 330); brush.vertex(285, 160); brush.vertex(318, 160); brush.vertex(330, 330); brush.vertex(355, 590);
  brush.endShape(true);
  // peeling patches (olive and cream-ish)
  for (let i = 0; i < 9; i++) {
    const y = 190 + i * 45, x = 275 + (i % 3) * 22;
    brush.fill(i % 2 ? "#6a8a1c" : "#e8c84a", 200);
    brush.beginShape(0.6);
    brush.vertex(x, y); brush.vertex(x + 32, y - 6); brush.vertex(x + 38, y + 30); brush.vertex(x + 6, y + 36);
    brush.endShape(true);
  }
  // branches
  brush.fill("#8a4a1c", 190);
  brush.beginShape(0.5);
  brush.vertex(275, 220); brush.vertex(190, 120); brush.vertex(215, 100); brush.vertex(300, 190);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(320, 200); brush.vertex(410, 100); brush.vertex(435, 125); brush.vertex(345, 230);
  brush.endShape(true);
  // crown
  const cols = ["#10902a", "#7ac020", "#0c7a50", "#d8b020"];
  for (let i = 0; i < 14; i++) {
    const a = i * 47, cx = 300 + Math.cos(a) * 95, cy = 95 + Math.sin(a * 1.3) * 55;
    brush.fill(cols[i % 4], 170 + (i % 3) * 25);
    brush.fillBleed(0.25);
    brush.circle(cx, cy, 55 + (i % 4) * 8, 1.2);
  }
  brush.fill("#0a5a2a", 180);
  brush.circle(300, 70, 50, 1.5);
}
