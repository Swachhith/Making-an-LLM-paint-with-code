async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2f4f0");
  brush.noStroke();
  brush.fill("#c8e0f0", 150); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5); brush.vertex(40, 60); brush.vertex(560, 40); brush.vertex(570, 540); brush.vertex(30, 560); brush.endShape(true);
  // arcing stem, built from overlapping dabs
  brush.fill("#1a7a30", 220); brush.fillBleed(0.2);
  const pts = [];
  for (let t = 0; t <= 1.001; t += 0.08) {
    const x = 40 + t * 520, y = 470 - 300 * Math.sin(t * 3.14);
    pts.push([x, y]);
    brush.circle(x, y, 10, 0.4);
  }
  brush.fill("#2a9a40", 190);
  for (let i = 1; i < pts.length - 1; i += 3) {
    const p = pts[i];
    brush.beginShape(0.6);
    brush.vertex(p[0], p[1]); brush.vertex(p[0] + 20, p[1] + 40); brush.vertex(p[0] + 32, p[1] + 30); brush.vertex(p[0] + 18, p[1] + 5);
    brush.endShape(true);
  }
  // blossoms
  const cols = ["#1a50d8", "#2a6af0", "#4a8aff"];
  for (let i = 2; i < pts.length - 1; i += 2) {
    const p = pts[i], c = cols[i % 3];
    brush.fill(c, 200); brush.fillBleed(0.3);
    for (let k = 0; k < 5; k++) {
      const a = k * 72;
      brush.circle(p[0] + 12 * Math.cos(a), p[1] - 14 + 12 * Math.sin(a), 9, 0.5);
    }
    brush.fill("#ffd020", 230); brush.circle(p[0], p[1] - 14, 4, 0.3);
  }
}
