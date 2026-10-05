async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8e4f2");
  brush.noStroke();
  // tall sky: deep blue to violet, two passes
  brush.fill("#14197a", 220); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 330); brush.vertex(-10, 330);
  brush.endShape(true);
  brush.fill("#3a1a8c", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, 120); brush.vertex(610, 100); brush.vertex(610, 400); brush.vertex(-10, 400);
  brush.endShape(true);
  brush.fill("#8a4fd0", 180); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, 290); brush.vertex(610, 270); brush.vertex(610, 430); brush.vertex(-10, 430);
  brush.endShape(true);
  // crescent moon left as paper, small stars
  brush.fill("#f7f0d8", 235); brush.fillBleed(0.15); brush.fillTexture(0.2, 0.2);
  brush.circle(470, 90, 20, 0.1);
  for (let i = 0; i < 12; i++) { brush.fill("#f7f0d8", 220); brush.circle(40 + (i * 131) % 500, 30 + (i * 47) % 160, 2.4, 0.2); }
  // far dunes
  brush.fill("#5a2fa8", 210); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(-10, 420); brush.vertex(150, 370); brush.vertex(330, 410); brush.vertex(610, 350); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#3b1f88", 220); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(-10, 470); brush.vertex(180, 440); brush.vertex(400, 490); brush.vertex(610, 450); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  // pool, two layers, plus a pale reflection
  brush.fill("#0f3fb0", 230); brush.fillBleed(0.3); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.9);
  brush.vertex(150, 520); brush.vertex(300, 490); brush.vertex(460, 520); brush.vertex(390, 570); brush.vertex(220, 575);
  brush.endShape(true);
  brush.fill("#4aa0f0", 200); brush.fillBleed(0.3); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.9);
  brush.vertex(210, 525); brush.vertex(310, 508); brush.vertex(400, 530); brush.vertex(320, 553);
  brush.endShape(true);
  // reeds / bushes on the shore
  for (let i = 0; i < 6; i++) {
    brush.fill("#0e1450", 220); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
    brush.circle(140 + i * 55, 520 + (i % 2) * 30, 22, 0.7);
  }
  // palm trunks, curved
  brush.fill("#150f46", 235); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(185, 520); brush.vertex(210, 520); brush.vertex(222, 400); brush.vertex(232, 310); brush.vertex(207, 312); brush.vertex(198, 400);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(385, 530); brush.vertex(410, 530); brush.vertex(385, 400); brush.vertex(375, 250); brush.vertex(350, 255); brush.vertex(365, 400);
  brush.endShape(true);
  // fronds, two passes each
  const palms = [[220, 312], [362, 254]];
  for (const p of palms) {
    for (let i = 0; i < 8; i++) {
      const a = -170 + i * 45 + p[0] % 9;
      const dx = cos(a), dy = sin(a);
      brush.fill(i % 2 ? "#0c2a78" : "#143a96", 220); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
      brush.beginShape(0.8);
      brush.vertex(p[0], p[1]);
      brush.vertex(p[0] + dx * 55 - dy * 16, p[1] + dy * 55 + dx * 16 - 12);
      brush.vertex(p[0] + dx * 105, p[1] + dy * 105 + 28);
      brush.vertex(p[0] + dx * 55 + dy * 16, p[1] + dy * 55 - dx * 16 + 8);
      brush.endShape(true);
    }
  }
  // glaze: deeper shadow under dunes and warm glow on pool edge
  brush.fill("#1a0f60", 150); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.9);
  brush.vertex(-10, 560); brush.vertex(250, 545); brush.vertex(610, 570); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#f0a060", 170); brush.fillBleed(0.3); brush.fillTexture(0.3, 0.3);
  brush.circle(450, 440, 30, 0.8);
}
