async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2f4f7");
  brush.noStroke();

  // thin cool sky at the very top
  brush.fill("#b9cde3", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.2);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 120); brush.vertex(-20, 125);
  brush.endShape(true);
  // distant blue hills
  brush.fill("#8ea6c6", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, 125); brush.vertex(150, 95); brush.vertex(330, 115); brush.vertex(480, 90); brush.vertex(620, 110);
  brush.vertex(620, 140); brush.vertex(-20, 140);
  brush.endShape(true);

  // pale green ground between rows
  brush.fill("#b7c9b4", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.2);
  brush.vertex(-20, 135); brush.vertex(620, 135); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // rows converging toward a vanishing point high and centre
  const vx = 300, vy = 130;
  const n = 9;
  for (let i = 0; i < n; i++) {
    const b0 = -500 + i * 200;          // row centre at bottom
    const w = 110;                       // row width at bottom
    const topFrac = 0.97;
    for (let p = 0; p < 2; p++) {
      brush.fill(p === 0 ? "#8b7fc4" : "#5f4fa3", p === 0 ? 200 : 190);
      brush.fillBleed(0.22);
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(0.3);
      const wl = w * (p === 0 ? 1 : 0.55);
      brush.vertex(b0 - wl / 2, 640);
      brush.vertex(vx + (b0 - wl / 2 - vx) * (1 - topFrac), vy + 4);
      brush.vertex(vx + (b0 + wl / 2 - vx) * (1 - topFrac), vy + 4);
      brush.vertex(b0 + wl / 2, 640);
      brush.endShape(true);
    }
  }
  // bushy dabs on nearest rows
  for (let y = 430; y < 610; y += 34) {
    for (let i = 3; i < 6; i++) {
      const b0 = -500 + i * 200;
      const t = (y - vy) / (640 - vy);
      const x = vx + (b0 - vx) * t;
      brush.fill("#4a3a8c", 190);
      brush.fillBleed(0.2);
      brush.fillTexture(0.4, 0.4);
      brush.circle(x, y, 14 * t + 4, true);
    }
  }
  // a tall cypress on the left edge to anchor the vertical
  for (let p = 0; p < 2; p++) {
    brush.fill(p === 0 ? "#3f6b6a" : "#244848", 210);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.6);
    brush.vertex(70 + p * 6, 20 + p * 30); brush.vertex(100 - p * 4, 150); brush.vertex(105 - p * 6, 330);
    brush.vertex(80, 360); brush.vertex(55 + p * 6, 330); brush.vertex(48 + p * 5, 150);
    brush.endShape(true);
  }
}
