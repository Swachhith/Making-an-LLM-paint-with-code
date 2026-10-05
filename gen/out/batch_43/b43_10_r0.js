async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6f0e0");
  brush.noStroke();
  // sky
  brush.fill("#ff7a3a", 160); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 300); brush.vertex(-10, 300);
  brush.endShape(true);
  // pond
  brush.fill("#1a8a9a", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-10, 320); brush.vertex(610, 320); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  // pagoda tiers, building tall and centred
  const tiers = [[300, 30, 100], [300, 110, 150], [300, 190, 200], [300, 270, 250]];
  for (let i = 0; i < 4; i++) {
    const t = tiers[i], y = t[1], w = t[2];
    brush.fill("#c4161c", 215); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.3);
    brush.vertex(300 - w / 2 + 14, y + 80); brush.vertex(300 - w / 2 + 14, y + 25); brush.vertex(300 + w / 2 - 14, y + 25); brush.vertex(300 + w / 2 - 14, y + 80);
    brush.endShape(true);
    // curved roof
    brush.fill("#1a1a4a", 225); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.6);
    brush.vertex(300 - w / 2 - 25, y + 30); brush.vertex(300 - w / 4, y + 5); brush.vertex(300, y - 20); brush.vertex(300 + w / 4, y + 5);
    brush.vertex(300 + w / 2 + 25, y + 30); brush.vertex(300 + w / 2 - 15, y + 40); brush.vertex(300 - w / 2 + 15, y + 40);
    brush.endShape(true);
    brush.fill("#ffc02a", 220); brush.fillBleed(0.2); brush.fillTexture(0.3, 0.3);
    brush.circle(300, y + 58, 10, 0.3);
  }
  // spire
  brush.fill("#e0a010", 230); brush.fillBleed(0.2); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(290, 30); brush.vertex(300, -20); brush.vertex(310, 30);
  brush.endShape(true);
  // reflection, loose and mirrored below
  brush.fill("#c4161c", 160); brush.fillBleed(0.35); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.9);
  brush.vertex(190, 345); brush.vertex(410, 345); brush.vertex(440, 470); brush.vertex(470, 560); brush.vertex(130, 560); brush.vertex(160, 470);
  brush.endShape(true);
  brush.fill("#1a1a4a", 150); brush.fillBleed(0.35); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.9);
  brush.vertex(150, 430); brush.vertex(450, 430); brush.vertex(500, 470); brush.vertex(100, 470);
  brush.endShape(true);
  // lily pads
  brush.fill("#2aa040", 210); brush.fillBleed(0.3); brush.fillTexture(0.3, 0.3);
  brush.circle(80, 540, 28, 0.6); brush.circle(520, 520, 32, 0.6); brush.circle(60, 400, 20, 0.6);
}
