async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f5f7f8");
  brush.noStroke();
  // bold blue sky
  brush.fill("#1f6fd0", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 220); brush.vertex(-20, 240);
  brush.endShape(true);
  brush.fill("#1f6fd0", 170);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 100); brush.vertex(-20, 130);
  brush.endShape(true);
  // peaks: shadow sides violet, snow as bare paper
  const peaks = [[120, 150, 0, 280], [300, 80, 150, 450], [480, 130, 360, 620]];
  for (const p of peaks) {
    brush.fill("#5a3ab0", 220);
    brush.fillBleed(0.18);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.1);
    brush.vertex(p[2], 290); brush.vertex(p[0], p[1]); brush.vertex(p[0] + 20, p[1] + 60); brush.vertex(p[0] - 5, p[1] + 110); brush.vertex(p[0] + 30, 290);
    brush.endShape(true);
    brush.fill("#2b5ab8", 200);
    brush.beginShape(0.1);
    brush.vertex(p[0] + 30, 290); brush.vertex(p[0] + 25, p[1] + 90); brush.vertex(p[0] + 50, p[1] + 70); brush.vertex(p[3], 290);
    brush.endShape(true);
  }
  // forest shoreline
  brush.fill("#0f6a3a", 230);
  brush.fillBleed(0.2);
  brush.beginShape(0.5);
  brush.vertex(-20, 300); brush.vertex(-20, 270);
  for (let x = 0; x <= 600; x += 30) brush.vertex(x, 262 + ((x / 30) % 2) * 16);
  brush.vertex(620, 270); brush.vertex(620, 300);
  brush.endShape(true);
  // lake: reflection, mirrored and a touch darker
  brush.fill("#1a5fb8", 210);
  brush.fillBleed(0.3);
  brush.beginShape(0.4);
  brush.vertex(-20, 300); brush.vertex(620, 300); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  for (const p of peaks) {
    brush.fill("#4a2c98", 190);
    brush.fillBleed(0.3);
    brush.beginShape(0.2);
    brush.vertex(p[2], 310); brush.vertex(p[0], 600 - p[1]); brush.vertex(p[3], 310);
    brush.endShape(true);
  }
  brush.fill("#0b4f2c", 210);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 300); brush.vertex(620, 300); brush.vertex(620, 336); brush.vertex(300, 344); brush.vertex(-20, 334);
  brush.endShape(true);
  // light ripple gaps with deep blue strokes
  for (let i = 0; i < 6; i++) {
    const y = 380 + i * 36;
    brush.fill("#0d3f8a", 190);
    brush.fillBleed(0.22);
    brush.beginShape(0.6);
    brush.vertex(40 + i * 25, y); brush.vertex(300 + i * 30, y - 3); brush.vertex(280 + i * 30, y + 10); brush.vertex(60 + i * 25, y + 12);
    brush.endShape(true);
  }
}
