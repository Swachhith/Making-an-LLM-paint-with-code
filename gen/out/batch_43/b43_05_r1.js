async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4eedb");
  brush.noStroke();
  // saturated green canopy light
  brush.fill("#0c8a3a", 230); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 330); brush.vertex(-10, 350);
  brush.endShape(true);
  brush.fill("#f2d020", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.circle(430, 90, 220, 0.6);
  // standing trunks, deep violet and umber
  const xs = [40, 190, 380, 520];
  for (let i = 0; i < 4; i++) {
    brush.fill(i % 2 ? "#6a2808" : "#3a1470", 215); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5);
    brush.vertex(xs[i], -10); brush.vertex(xs[i] + 50, -10); brush.vertex(xs[i] + 40, 400); brush.vertex(xs[i] - 6, 400);
    brush.endShape(true);
  }
  // ground bands
  brush.fill("#e8a010", 220); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(-10, 390); brush.vertex(300, 360); brush.vertex(610, 395); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#c4350e", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(-10, 470); brush.vertex(300, 440); brush.vertex(610, 480); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  // log, tall diagonal with shadow side
  brush.fill("#a0400a", 235); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5);
  brush.vertex(100, 585); brush.vertex(175, 595); brush.vertex(530, 340); brush.vertex(475, 285);
  brush.endShape(true);
  brush.fill("#3a1204", 225); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5);
  brush.vertex(110, 580); brush.vertex(175, 594); brush.vertex(520, 345); brush.vertex(505, 320);
  brush.endShape(true);
  brush.fill("#f4c850", 235); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.circle(503, 313, 38, 0.3);
  brush.fill("#b8601a", 220); brush.fillBleed(0.2); brush.fillTexture(0.3, 0.3);
  brush.circle(503, 313, 22, 0.3);
  brush.fill("#6a2808", 200); brush.circle(503, 313, 8, 0.3);
  // moss and ferns
  const m = [[260, 470, 54], [350, 415, 40], [170, 530, 60], [430, 360, 36]];
  for (const s of m) {
    brush.fill("#0a8a2a", 230); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
    brush.circle(s[0], s[1], s[2], 0.7);
    brush.fill("#6adc3a", 190); brush.fillBleed(0.3); brush.fillTexture(0.3, 0.3);
    brush.circle(s[0] + 6, s[1] - 6, s[2] * 0.5, 0.7);
  }
  for (let i = 0; i < 5; i++) {
    brush.fill("#d4108a", 220); brush.fillBleed(0.2); brush.circle(60 + i * 110, 560 + (i % 2) * 20, 14, 0.5);
  }
}
