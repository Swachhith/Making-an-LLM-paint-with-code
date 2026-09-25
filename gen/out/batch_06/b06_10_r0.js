async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4ede4");
  randomSeed(1010);
  brush.noStroke();
  // saturated teal backdrop, lower left
  brush.fill("#0f7c7a", 180);
  brush.fillBleed(0.4, "out");
  brush.fillTexture(0.6, 0.4);
  brush.circle(170, 430, 220, true);
  // stem
  brush.fill("#2f6b2a", 220);
  brush.fillBleed(0.1, "out");
  brush.beginShape(0.4);
  brush.vertex(345, 330); brush.vertex(360, 450); brush.vertex(390, 600); brush.vertex(404, 600); brush.vertex(374, 450); brush.vertex(360, 330);
  brush.endShape(true);
  // side view: dome of petals, rows from back (top) to front (bottom)
  let cx = 340, cy = 250;
  let rows = 7;
  for (let r = 0; r < rows; r++) {
    let y = cy - 90 + r * 22;
    let halfW = 70 + sin(r * 180 / (rows - 1) * 0.9 + 20) * 140;
    let count = 7 + r;
    let col = r < 2 ? "#f6a01a" : (r < 5 ? "#ef7a12" : "#d9480f");
    for (let i = 0; i < count; i++) {
      let t = (i + 0.5) / count;
      let x = cx - halfW + t * halfW * 2 + random(-6, 6);
      let lean = (t - 0.5) * 60;
      let len = 55 + r * 6;
      brush.fill(col, 190 + r * 6);
      brush.fillBleed(0.15, "out");
      brush.fillTexture(0.5, 0.6);
      brush.beginShape(0.4);
      brush.vertex(x - 13, y);
      brush.vertex(x + lean * 0.5 - 10, y - len * 0.2 + r * 4);
      brush.vertex(x + lean, y + len * 0.6);
      brush.vertex(x + lean * 0.5 + 10, y - len * 0.2 + r * 4);
      brush.vertex(x + 13, y);
      brush.endShape(true);
    }
  }
  // green bracts under the head
  brush.fill("#3e7d2c", 210);
  brush.beginShape(0.6);
  brush.vertex(290, 335); brush.vertex(350, 360); brush.vertex(410, 335); brush.vertex(350, 345);
  brush.endShape(true);
}
