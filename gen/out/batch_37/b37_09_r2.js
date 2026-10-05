async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f8f2ea");
  brush.noStroke();
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.fill("#98c4ec", 200);
  brush.beginShape(0.4);
  brush.vertex(-40, -40); brush.vertex(640, -40); brush.vertex(640, 170); brush.vertex(-40, 170);
  brush.endShape(true);
  brush.fill("#f8d8c0", 170);
  brush.beginShape(0.8);
  brush.vertex(-40, 110); brush.vertex(640, 120); brush.vertex(640, 200); brush.vertex(-40, 190);
  brush.endShape(true);
  brush.fill("#b8a0d8", 210);
  brush.beginShape(0.9);
  brush.vertex(-40, 215); brush.vertex(150, 175); brush.vertex(330, 200); brush.vertex(500, 160); brush.vertex(640, 195); brush.vertex(640, 250); brush.vertex(-40, 250);
  brush.endShape(true);
  const cols = ["#e47aa4", "#f2bc40", "#e68cc0", "#b890e0", "#f08468"];
  const ys = [235, 275, 335, 425, 540];
  for (let r = 0; r < 5; r++) {
    const y0 = ys[r], y1 = r < 4 ? ys[r + 1] - 14 : 640;
    brush.fill(cols[r], 215);
    brush.beginShape(0.3);
    brush.vertex(-40, y0); brush.vertex(300, y0 - 14); brush.vertex(640, y0); brush.vertex(640, y1); brush.vertex(-40, y1);
    brush.endShape(true);
    brush.fill(r % 2 ? "#c84a78" : "#fff0f0", 120);
    for (let s = 0; s < 8; s++) {
      brush.beginShape(0.3);
      brush.vertex(s * 85 - r * 40 + 30, y0); brush.vertex(s * 85 - r * 40 + 50, y0); brush.vertex(s * 85 - r * 40 + 50 + r * 20, y1); brush.vertex(s * 85 - r * 40 + 30 + r * 20, y1);
      brush.endShape(true);
    }
    brush.fill("#5a9a5a", 215);
    brush.beginShape(0.4);
    brush.vertex(-40, y1); brush.vertex(640, y1); brush.vertex(640, y1 + 14); brush.vertex(-40, y1 + 14);
    brush.endShape(true);
  }
  brush.fill("#8a5a48", 200);
  brush.beginShape(0.4);
  brush.vertex(70, 200); brush.vertex(130, 195); brush.vertex(130, 235); brush.vertex(70, 240);
  brush.endShape(true);
  brush.fill("#c85a40", 215);
  brush.beginShape(0.4);
  brush.vertex(60, 195); brush.vertex(100, 175); brush.vertex(140, 195);
  brush.endShape(true);
}
