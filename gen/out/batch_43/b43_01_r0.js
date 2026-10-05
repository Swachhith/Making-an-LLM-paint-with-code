async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ece8f4");
  brush.noStroke();
  // night-blue sky wash, whole canvas
  brush.fill("#2a2f8a", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 420); brush.vertex(-10, 420);
  brush.endShape(true);
  brush.fill("#5a2d9c", 160); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, 200); brush.vertex(610, 170); brush.vertex(610, 440); brush.vertex(-10, 440);
  brush.endShape(true);
  brush.fill("#7b4fc0", 150); brush.fillBleed(0.25); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.5);
  brush.vertex(-10, 330); brush.vertex(610, 300); brush.vertex(610, 470); brush.vertex(-10, 470);
  brush.endShape(true);
  // moon
  brush.circle(450, 110, 28, 0.1);
  // dunes
  brush.fill("#4a2a86", 200); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(-10, 430); brush.vertex(150, 380); brush.vertex(330, 420); brush.vertex(610, 360); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#2b1d6e", 210); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(-10, 500); brush.vertex(200, 460); brush.vertex(420, 520); brush.vertex(610, 480); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  // pool
  brush.fill("#1c5fc4", 200); brush.fillBleed(0.3); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.9);
  brush.vertex(170, 520); brush.vertex(300, 495); brush.vertex(440, 520); brush.vertex(380, 560); brush.vertex(230, 565);
  brush.endShape(true);
  brush.fill("#2e86e6", 150); brush.fillBleed(0.3); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.9);
  brush.vertex(220, 525); brush.vertex(310, 510); brush.vertex(390, 530); brush.vertex(320, 550);
  brush.endShape(true);
  // palm trunks
  brush.fill("#1a1450", 230); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(190, 510); brush.vertex(212, 510); brush.vertex(228, 330); brush.vertex(205, 335);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(380, 520); brush.vertex(402, 520); brush.vertex(372, 270); brush.vertex(350, 275);
  brush.endShape(true);
  // fronds
  const palms = [[216, 330], [361, 272]];
  for (const p of palms) {
    for (let i = 0; i < 7; i++) {
      const a = -160 + i * 50 + (p[0] % 7);
      const dx = cos(a), dy = sin(a);
      brush.fill("#1b2f7a", 200); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
      brush.beginShape(0.8);
      brush.vertex(p[0], p[1]);
      brush.vertex(p[0] + dx * 50 - dy * 14, p[1] + dy * 50 + dx * 14 - 10);
      brush.vertex(p[0] + dx * 95, p[1] + dy * 95 + 22);
      brush.vertex(p[0] + dx * 50 + dy * 14, p[1] + dy * 50 - dx * 14 + 6);
      brush.endShape(true);
    }
  }
}
