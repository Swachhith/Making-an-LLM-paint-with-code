async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4efe6");
  brush.noStroke();

  // branch
  brush.fill("#5a3b2a", 220);
  brush.fillBleed(0.1, "out");
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(0, 470);
  brush.vertex(260, 380);
  brush.vertex(265, 392);
  brush.vertex(0, 486);
  brush.endShape(true);

  // glossy dark leaves
  brush.fill("#1f5a3c", 220);
  brush.fillBleed(0.25, "out");
  brush.fillTexture(0.4, 0.7);
  brush.beginShape(0.8);
  brush.vertex(150, 420);
  brush.vertex(90, 330);
  brush.vertex(40, 300);
  brush.vertex(70, 380);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(240, 395);
  brush.vertex(330, 470);
  brush.vertex(400, 480);
  brush.vertex(330, 420);
  brush.endShape(true);
  brush.fill("#2f7a50", 180);
  brush.circle(80, 350, 18, true);

  brush.fill("#184a30", 225);
  brush.beginShape(0.8);
  brush.vertex(210, 400);
  brush.vertex(180, 480);
  brush.vertex(200, 560);
  brush.vertex(235, 470);
  brush.endShape(true);

  // back petals of side-view cup
  brush.fill("#e23a78", 210);
  brush.fillBleed(0.45, "out");
  brush.fillTexture(0.5, 0.7);
  brush.circle(300, 250, 110, true);
  brush.fill("#f05a90", 200);
  brush.circle(240, 280, 80, true);
  brush.circle(360, 280, 80, true);

  // layered front petals, rows of rounded shapes
  const rows = [[340, 5, 70], [370, 4, 64], [395, 3, 58]];
  for (let r = 0; r < rows.length; r++) {
    const y = rows[r][0], n = rows[r][1], w = rows[r][2];
    for (let i = 0; i < n; i++) {
      const x = 300 + (i - (n - 1) / 2) * w * 0.9 + (r % 2) * 12;
      brush.fill(r % 2 ? "#d0206a" : "#ec4a86", 215);
      brush.fillBleed(0.3, "out");
      brush.beginShape(0.9);
      brush.vertex(x - w * 0.6, y - 30);
      brush.vertex(x - w * 0.2, y - 58);
      brush.vertex(x + w * 0.35, y - 52);
      brush.vertex(x + w * 0.6, y - 18);
      brush.vertex(x, y + 18);
      brush.endShape(true);
    }
  }

  // a tight bud on the branch
  brush.fill("#c81c62", 220);
  brush.fillBleed(0.3, "out");
  brush.circle(110, 440, 22, true);
  brush.fill("#3a6a3a", 220);
  brush.circle(118, 455, 12, true);

  // stamens peeking at top
  brush.fill("#f2c230", 235);
  brush.fillBleed(0.1, "in");
  for (let k = 0; k < 8; k++) brush.circle(262 + k * 11, 195 + (k % 3) * 6, 6, true);

  // sepals under the cup
  brush.fill("#6b5a2e", 210);
  brush.circle(290, 420, 18, true);
  brush.circle(315, 425, 15, true);
}
