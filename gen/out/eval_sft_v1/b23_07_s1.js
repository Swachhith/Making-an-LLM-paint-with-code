async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fff8e6");
  brush.noStroke();

  // sky: bands of bold colour, lower ones warmer
  brush.fill("#ff8a3a", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 220); brush.vertex(620, 220); brush.vertex(620, 400); brush.vertex(-20, 400);
  brush.endShape(true);
  brush.fill("#ff5a22", 225);
  brush.beginShape(0.5);
  brush.vertex(-20, 330); brush.vertex(620, 330); brush.vertex(620, 470); brush.vertex(-20, 470);
  brush.endShape(true);
  brush.fill("#e81e6a", 235);
  brush.beginShape(0.5);
  brush.vertex(-20, 450); brush.vertex(620, 450); brush.vertex(620, 560); brush.vertex(-20, 560);
  brush.endShape(true);

  // sun disc
  brush.fill("#ffd63a", 250);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.circle(360, 260, 55, 0.3);

  // palm silhouettes, tall and bold, fronds wide
  const palms = [
    [120, 470, 30, 120],
    [210, 420, 34, 140],
    [300, 430, 32, 130],
    [410, 460, 36, 150],
    [520, 450, 34, 145],
  ];
  for (const p of palms) {
    const [x, y, w, h] = p;
    brush.fill("#1a1024", 240);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.3);
    brush.vertex(x, y);
    brush.vertex(x + w / 2, y - h);
    brush.vertex(x + w, y);
    brush.endShape(true);
    // two fronds per palm
    for (let k = 0; k < 2; k++) {
      const a = k == 0 ? -22 : 22;
      brush.beginShape(0.8);
      brush.vertex(x + w / 2, y - h + 8);
      brush.vertex(x + w / 2 + cos(a - 20) * 150, y - h + 120 + sin(a - 20) * 150);
      brush.vertex(x + w / 2 + cos(a) * 140, y - h + 110 + sin(a) * 140);
      brush.vertex(x + w / 2 + cos(a + 20) * 150, y - h + 120 + sin(a + 20) * 150);
      brush.vertex(x + w / 2, y - h + 8);
      brush.endShape(true);
    }
  }

  // sea
  brush.fill("#0f5a8a", 240);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 480); brush.vertex(620, 480); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // glint bands
  for (let i = 0; i < 3; i++) {
    brush.fill("#b8e8ff", 210);
    brush.fillBleed(0.25);
    brush.beginShape(0.6);
    brush.vertex(-20, 500 + i * 22); brush.vertex(620, 490 + i * 22); brush.vertex(620, 520 + i * 22); brush.vertex(-20, 530 + i * 22);
    brush.endShape(true);
  }
}
