async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#05070f");
  brush.noStroke();
  brush.fill("#0e1c48", 235); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 400); brush.vertex(-10, 400);
  brush.endShape(true);
  // broad sweeping green arc across the sky
  brush.fill("#10a870", 210); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(1);
  brush.vertex(-10, 300); brush.vertex(80, 190); brush.vertex(200, 120); brush.vertex(340, 90); brush.vertex(480, 110); brush.vertex(610, 170);
  brush.vertex(610, 260); brush.vertex(480, 200); brush.vertex(340, 190); brush.vertex(210, 230); brush.vertex(90, 320);
  brush.endShape(true);
  brush.fill("#6af0b8", 190); brush.fillBleed(0.3); brush.fillTexture(0.3, 0.3);
  brush.beginShape(1);
  brush.vertex(60, 260); brush.vertex(200, 160); brush.vertex(340, 125); brush.vertex(470, 150); brush.vertex(400, 175); brush.vertex(300, 168); brush.vertex(180, 215);
  brush.endShape(true);
  // violet and teal curtains hanging in rays from the arc
  for (let i = 0; i < 9; i++) {
    const x = 70 + i * 62, y0 = 140 - Math.abs(i - 4) * -8 + 0;
    const top = 190 - 55 * Math.cos((i - 4) * 0.4);
    brush.fill(i % 3 === 0 ? "#7a40d8" : "#1ab4b4", 180); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.9);
    brush.vertex(x - 18, top); brush.vertex(x + 18, top + 4); brush.vertex(x + 30 + (i % 2) * 8, top + 120); brush.vertex(x - 5, top + 150); brush.vertex(x - 28, top + 100);
    brush.endShape(true);
  }
  for (let i = 0; i < 34; i++) { brush.fill("#fff4dc", 235); brush.circle(8 + (i * 89) % 590, 10 + (i * 61) % 90, 1.8 + (i % 3) * 0.6, 0.2); }
  // lake: dark teal with mirrored green
  brush.fill("#07324a", 240); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-10, 390); brush.vertex(610, 390); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#10a870", 190); brush.fillBleed(0.35); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.9);
  brush.vertex(50, 410); brush.vertex(300, 420); brush.vertex(560, 410); brush.vertex(500, 470); brush.vertex(300, 490); brush.vertex(120, 470);
  brush.endShape(true);
  brush.fill("#6af0b8", 150); brush.fillBleed(0.35); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.9);
  brush.vertex(150, 420); brush.vertex(420, 420); brush.vertex(380, 450); brush.vertex(190, 455);
  brush.endShape(true);
  // black silhouettes: shore, pines both sides, small cabin
  brush.fill("#020306", 255); brush.fillBleed(0.15); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.5);
  brush.vertex(-10, 395); brush.vertex(120, 372); brush.vertex(300, 390); brush.vertex(480, 368); brush.vertex(610, 382); brush.vertex(610, 415); brush.vertex(-10, 420);
  brush.endShape(true);
  const pines = [[35, 190], [95, 140], [150, 105], [490, 120], [545, 175], [592, 120]];
  for (const p of pines) {
    for (let t = 0; t < 3; t++) {
      brush.beginShape(0.1);
      brush.vertex(p[0] - 36 + t * 8, 400 - t * p[1] * 0.28); brush.vertex(p[0], 395 - p[1] + 0 - t * 0 - (t - 1) * 0); brush.vertex(p[0] + 36 - t * 8, 400 - t * p[1] * 0.28);
      brush.endShape(true);
    }
  }
  brush.beginShape(0.1);
  brush.vertex(285, 405); brush.vertex(285, 365); brush.vertex(322, 345); brush.vertex(358, 365); brush.vertex(358, 405);
  brush.endShape(true);
  brush.fill("#ffb040", 250); brush.fillBleed(0.2); brush.fillTexture(0.2, 0.2);
  brush.circle(318, 380, 9, 0.2);
  brush.fill("#ff9a2a", 190); brush.fillBleed(0.3); brush.fillTexture(0.2, 0.2);
  brush.beginShape(0.8);
  brush.vertex(303, 430); brush.vertex(335, 430); brush.vertex(332, 495); brush.vertex(306, 495);
  brush.endShape(true);
}
