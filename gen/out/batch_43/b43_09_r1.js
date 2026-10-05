async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#060912");
  brush.noStroke();
  // night sky body
  brush.fill("#0f1e4a", 230); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 400); brush.vertex(-10, 400);
  brush.endShape(true);
  // aurora: vertical rippling curtains, several tall ribbons
  const rib = [["#18b878", 120, 330], ["#28d8a0", 210, 300], ["#1a9ac8", 300, 340], ["#6a3cd0", 390, 310], ["#22c890", 480, 330], ["#8a4ae0", 560, 300]];
  for (let i = 0; i < rib.length; i++) {
    const x = rib[i][1], b = rib[i][2];
    brush.fill(rib[i][0], 205); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.9);
    brush.vertex(x - 40, b); brush.vertex(x - 28, b - 130); brush.vertex(x - 5, b - 250); brush.vertex(x + 25, b - 300);
    brush.vertex(x + 50, b - 180); brush.vertex(x + 38, b - 60); brush.vertex(x + 25, b);
    brush.endShape(true);
    brush.fill("#a8ffd8", 160); brush.fillBleed(0.3); brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.9);
    brush.vertex(x - 15, b - 20); brush.vertex(x - 8, b - 150); brush.vertex(x + 15, b - 230); brush.vertex(x + 24, b - 120); brush.vertex(x + 14, b - 20);
    brush.endShape(true);
  }
  for (let i = 0; i < 30; i++) {
    brush.fill("#fff4dc", 235); brush.circle(10 + (i * 89) % 590, 12 + (i * 61) % 110, 1.8 + (i % 3) * 0.6, 0.2);
  }
  // lake with soft reflected glow
  brush.fill("#0a3a54", 235); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-10, 390); brush.vertex(610, 390); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  for (let i = 0; i < rib.length; i++) {
    brush.fill(rib[i][0], 160); brush.fillBleed(0.35); brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.9);
    brush.vertex(rib[i][1] - 30, 410); brush.vertex(rib[i][1] + 30, 410); brush.vertex(rib[i][1] + 20, 520); brush.vertex(rib[i][1] - 25, 530);
    brush.endShape(true);
  }
  // shoreline silhouette
  brush.fill("#020306", 252); brush.fillBleed(0.15); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.5);
  brush.vertex(-10, 400); brush.vertex(100, 375); brush.vertex(300, 392); brush.vertex(480, 370); brush.vertex(610, 385); brush.vertex(610, 415); brush.vertex(-10, 420);
  brush.endShape(true);
  const pines = [[40, 120], [90, 90], [140, 135], [470, 105], [520, 140], [570, 100]];
  for (const p of pines) {
    for (let t = 0; t < 3; t++) {
      brush.beginShape(0.1);
      brush.vertex(p[0] - 30 + t * 6, 405 - p[1] * 0.3 * t * 0.9 + 0); brush.vertex(p[0], 400 - p[1] + t * 30); brush.vertex(p[0] + 30 - t * 6, 405 - p[1] * 0.3 * t * 0.9);
      brush.endShape(true);
    }
  }
  // cabin and its warm light
  brush.beginShape(0.1);
  brush.vertex(290, 408); brush.vertex(290, 365); brush.vertex(325, 345); brush.vertex(360, 365); brush.vertex(360, 408);
  brush.endShape(true);
  brush.fill("#ffb040", 250); brush.fillBleed(0.2); brush.fillTexture(0.2, 0.2);
  brush.circle(318, 380, 8, 0.2);
  brush.fill("#ff9a2a", 190); brush.fillBleed(0.3); brush.fillTexture(0.2, 0.2);
  brush.beginShape(0.8);
  brush.vertex(305, 430); brush.vertex(335, 430); brush.vertex(332, 480); brush.vertex(308, 480);
  brush.endShape(true);
}
