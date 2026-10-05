async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4f0e4");
  brush.noStroke();
  brush.fill("#7ab8f0", 170); brush.fillBleed(0.3); brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6); brush.vertex(20, 80); brush.vertex(300, 30); brush.vertex(585, 90); brush.vertex(575, 540); brush.vertex(290, 580); brush.vertex(25, 530); brush.endShape(true);
  brush.fill("#f0a8c8", 120);
  brush.circle(100, 130, 70, 0.8); brush.circle(510, 480, 80, 0.8);
  // stem: chain of wide overlapping washes
  const P = [];
  for (let t = 0; t <= 1.001; t += 0.03) P.push([30 + t * 540, 500 - 360 * Math.sin(t * Math.PI) - 20 * Math.sin(t * 9)]);
  brush.fill("#0a7a2a", 215); brush.fillBleed(0.2);
  for (const p of P) brush.circle(p[0], p[1], 24, 0.3);
  brush.fill("#18a040", 190);
  for (let i = 2; i < P.length - 2; i += 3) {
    const p = P[i], s = i % 2 ? 1 : -1;
    brush.beginShape(0.6);
    brush.vertex(p[0], p[1]); brush.vertex(p[0] + 28, p[1] + s * 40); brush.vertex(p[0] + 48, p[1] + s * 34); brush.vertex(p[0] + 30, p[1] + s * 8);
    brush.endShape(true);
  }
  // clustered blossoms
  const cols = ["#1038d0", "#1f5cf0", "#3a7aff"];
  for (let i = 3; i < P.length - 2; i += 2) {
    const p = P[i];
    for (let j = 0; j < 3; j++) {
      const cx = p[0] + (j - 1) * 24, cy = p[1] - 24 - (j % 2) * 18;
      brush.fill(cols[(i + j) % 3], 205); brush.fillBleed(0.3);
      for (let k = 0; k < 5; k++) brush.circle(cx + 14 * Math.cos(k * 72), cy + 14 * Math.sin(k * 72), 12, 0.5);
      brush.fill("#ffd010", 235); brush.circle(cx, cy, 5, 0.3);
    }
  }
}
