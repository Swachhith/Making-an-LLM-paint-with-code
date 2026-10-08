async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf8f2");
  randomSeed(2113);
  brush.noStroke();

  // loose sky washes, splashed
  brush.fill("#b8c4e0", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 220); brush.vertex(460, 260); brush.vertex(300, 220); brush.vertex(-20, 200);
  brush.endShape(true);
  brush.fill("#f2e8d8", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(-20, 350); brush.vertex(250, 330); brush.vertex(470, 370); brush.vertex(620, 340); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#e0a0b0", 140);
  brush.fillBleed(0.3);
  brush.circle(400, 120, 110, 0.7);
  brush.fill("#8a3a6a", 140);
  brush.fillBleed(0.3);
  brush.circle(150, 480, 80, 0.7);

  // stem: two passes, big arc then smaller pass inside
  brush.fill("#3f7a3f", 235);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(300, 620); brush.vertex(240, 480); brush.vertex(320, 320); brush.vertex(400, 200); brush.vertex(460, 120); brush.vertex(540, 180); brush.vertex(620, 320); brush.vertex(620, 620);
  brush.endShape(true);
  brush.fill("#2a5a2a", 210);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(300, 620); brush.vertex(250, 450); brush.vertex(330, 290); brush.vertex(410, 170); brush.vertex(470, 130); brush.vertex(530, 190); brush.vertex(620, 320); brush.vertex(620, 620);
  brush.endShape(true);
  brush.fill("#1a3a1a", 180);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(300, 620); brush.vertex(300, 480); brush.vertex(320, 320); brush.vertex(340, 200); brush.vertex(360, 130); brush.vertex(340, 70); brush.vertex(300, 620);
  brush.endShape(true);

  // cherry blossoms: clusters, irregular, drips
  const clusters = [[140, 100, 20, 240, 60], [190, 140, 30, 220, 40], [230, 180, 22, 180, 30], [280, 220, 35, 150, 50], [330, 260, 26, 120, 40], [380, 230, 20, 90, 30], [430, 200, 28, 60, 35], [470, 160, 22, 30, 20], [520, 90, 20, 10, 15], [560, 120, 24, 50, 30], [500, 300, 30, 250, 70], [450, 360, 26, 300, 60], [400, 420, 24, 360, 50], [350, 470, 22, 420, 40], [300, 510, 20, 460, 35], [250, 460, 24, 380, 40], [200, 400, 26, 320, 50], [150, 340, 24, 260, 45], [100, 280, 22, 200, 40]];
  for (let c of clusters) {
    const [cx, cy, n, r, off] = c;
    for (let i = 0; i < n; i++) {
      const a = i * 360 / n + off + random(-12, 12);
      const rr = random(0.6, 1.0) * r;
      const x = cx + cos(a) * rr * 28, y = cy + sin(a) * rr * 28;
      brush.fill("#ffb3c4", 210);
      brush.fillBleed(0.3);
      brush.fillTexture(0.5, 0.5);
      brush.circle(x, y, 16, 0.5);
      brush.fill("#ff9aa8", 190);
      brush.fillBleed(0.3);
      brush.circle(x, y, 10, 0.5);
    }
    // splash drips
    for (let k = 0; k < 3; k++) {
      const dx = random(-12, 12), dy = random(20, 40);
      brush.fill("#ffb3c4", 160);
      brush.fillBleed(0.3);
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(0.7);
      brush.vertex(cx + dx, cy + dy); brush.vertex(cx + dx + 6, cy + dy + 12); brush.vertex(cx + dx - 6, cy + dy + 12);
      brush.endShape(true);
    }
  }

  // cool shadow pass under the blooms
  brush.fill("#c890b0", 150);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(120, 100); brush.vertex(620, 120); brush.vertex(620, 300); brush.vertex(300, 320); brush.vertex(120, 300);
  brush.endShape(true);
}
