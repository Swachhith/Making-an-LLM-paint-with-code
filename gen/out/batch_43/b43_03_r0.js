async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e7efee");
  brush.noStroke();
  // teal backdrop
  brush.fill("#0e5c61", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#1f8a8a", 150); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(60, 80); brush.vertex(520, 50); brush.vertex(560, 480); brush.vertex(120, 540);
  brush.endShape(true);
  // outer bracts: long rays all around
  const cx = 300, cy = 300;
  for (let ring = 0; ring < 2; ring++) {
    const n = 16;
    for (let i = 0; i < n; i++) {
      const a = (360 / n) * i + ring * 11;
      const r1 = ring ? 215 : 255, w = 24;
      const px = -sin(a), py = cos(a);
      brush.fill(ring ? "#9c1230" : "#c71f3c", 200 - ring * 10); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.5);
      brush.beginShape(0.7);
      brush.vertex(cx + cos(a) * 40 + px * w, cy + sin(a) * 40 + py * w);
      brush.vertex(cx + cos(a) * r1 + px * 6, cy + sin(a) * r1 + py * 6);
      brush.vertex(cx + cos(a) * (r1 + 20), cy + sin(a) * (r1 + 20));
      brush.vertex(cx + cos(a) * r1 - px * 6, cy + sin(a) * r1 - py * 6);
      brush.vertex(cx + cos(a) * 40 - px * w, cy + sin(a) * 40 - py * w);
      brush.endShape(true);
    }
  }
  // inner cone
  brush.fill("#e8651a", 210); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.circle(cx, cy, 90, 0.4);
  brush.fill("#f4a23a", 200); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.circle(cx, cy, 55, 0.4);
  brush.fill("#5a1020", 200); brush.fillBleed(0.2); brush.fillTexture(0.3, 0.3);
  brush.circle(cx + 6, cy + 4, 24, 0.5);
}
