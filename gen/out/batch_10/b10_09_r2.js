async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  // paper tinted the colour of the night sky; the sea is painted darker over it
  background("#2d2a7a");
  brush.noStroke();
  const mx = 190, my = 190;
  // deep blue washes in the upper corners, kept clear of the moon
  brush.fill("#15175a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(330, -20); brush.vertex(620, -20); brush.vertex(620, 260); brush.vertex(480, 200); brush.vertex(380, 90);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(-20, -20); brush.vertex(90, -20); brush.vertex(40, 80); brush.vertex(-20, 120);
  brush.endShape(true);
  // violet glow gathering above the horizon
  brush.fill("#6a3ea8", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(-20, 390); brush.vertex(200, 350); brush.vertex(620, 380); brush.vertex(620, 470); brush.vertex(-20, 470);
  brush.endShape(true);
  brush.fill("#8a4ab0", 150);
  brush.beginShape(0.8);
  brush.vertex(60, 420); brush.vertex(400, 405); brush.vertex(560, 440); brush.vertex(300, 460);
  brush.endShape(true);
  // thin cloud bars under the moon
  brush.fill("#1c1c66", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.7);
  brush.vertex(40, 300); brush.vertex(250, 288); brush.vertex(320, 300); brush.vertex(230, 318); brush.vertex(60, 318);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(330, 250); brush.vertex(520, 240); brush.vertex(560, 252); brush.vertex(480, 266); brush.vertex(350, 266);
  brush.endShape(true);
  // moon, pale on the tinted paper, with a halo
  brush.fill("#8a86d0", 150);
  brush.fillBleed(0.3);
  brush.circle(mx, my, 80, 0.4);
  brush.fill("#fff5d6", 245);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.3);
  brush.circle(mx, my, 52, 0.12);
  brush.fill("#fff5d6", 235);
  brush.circle(mx, my, 48, 0.08);
  brush.fill("#cfc6e6", 150);
  brush.fillBleed(0.3);
  brush.circle(mx + 12, my - 8, 14, 0.6);
  brush.circle(mx - 14, my + 14, 9, 0.6);
  // stars
  const st = [[40, 160], [120, 60], [300, 40], [420, 150], [540, 80], [580, 320], [360, 190], [470, 330], [80, 360], [260, 120]];
  brush.fill("#fbf8ff", 245);
  brush.fillBleed(0.05);
  for (const s of st) brush.circle(s[0], s[1], 2.2, 0.2);
  // dark sea below a low horizon, leaving the moon's path open
  for (let pass = 0; pass < 3; pass++) {
    brush.fill("#0a0a30", 225);
    brush.fillBleed(0.15);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.1);
    brush.vertex(-20, 472); brush.vertex(mx - 12, 472); brush.vertex(mx - 55, 620); brush.vertex(-20, 620);
    brush.endShape(true);
    brush.beginShape(0.1);
    brush.vertex(mx + 12, 472); brush.vertex(620, 470); brush.vertex(620, 620); brush.vertex(mx + 55, 620);
    brush.endShape(true);
  }
  // moonlight on the water, pale broken dashes in the gap
  for (let i = 0; i < 12; i++) {
    const y = 478 + i * 11;
    const w = 7 + i * 3.5;
    const x = mx + Math.sin(i * 1.9) * (2 + i);
    brush.fill("#efe6ff", 230);
    brush.fillBleed(0.12);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.5);
    brush.vertex(x - w, y); brush.vertex(x + w, y + 1); brush.vertex(x + w - 3, y + 5); brush.vertex(x - w + 3, y + 5);
    brush.endShape(true);
  }
  // violet swell on the sea
  for (let i = 0; i < 5; i++) {
    const y = 500 + i * 22;
    const x = (i % 2) ? 330 : 380;
    brush.fill("#3a3490", 200);
    brush.fillBleed(0.2);
    brush.beginShape(0.6);
    brush.vertex(x, y); brush.vertex(x + 180, y - 2); brush.vertex(x + 160, y + 8); brush.vertex(x + 10, y + 9);
    brush.endShape(true);
  }
}
