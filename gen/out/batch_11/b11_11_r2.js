async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#161232");
  brush.noStroke();

  // deep sky layered washes of violet and blue, huge sky, horizon low at 470
  brush.fill("#2a1f6e", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 480); brush.vertex(-20, 480);
  brush.endShape(true);
  brush.fill("#4a2a8a", 170);
  brush.circle(420, 180, 200, 0.9);
  brush.fill("#1f3a8a", 160);
  brush.circle(120, 350, 170, 0.9);

  // glowing halo around moon (light on dark paper)
  brush.fill("#7a78c8", 170);
  brush.fillBleed(0.35);
  brush.circle(390, 200, 90, 0.4);
  brush.fill("#b8b4e8", 200);
  brush.circle(390, 200, 58, 0.2);
  brush.fill("#f2eed8", 240);
  brush.fillBleed(0.15);
  brush.circle(390, 200, 44, 0.1);
  brush.fill("#fffbe6", 240);
  brush.circle(392, 198, 36, 0.08);

  // thin cloud streaks catching moonlight, crossing below the moon
  brush.fill("#6a64b8", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.9);
  brush.vertex(200, 270); brush.vertex(380, 250); brush.vertex(560, 268); brush.vertex(480, 290); brush.vertex(260, 292);
  brush.endShape(true);
  brush.fill("#8e88d0", 190);
  brush.beginShape(0.9);
  brush.vertex(300, 272); brush.vertex(420, 262); brush.vertex(500, 274); brush.vertex(400, 284);
  brush.endShape(true);
  // stars
  brush.fill("#e8e4ff", 230);
  brush.fillBleed(0.05);
  let s = 7;
  for (let i = 0; i < 40; i++) {
    s = (s * 16807) % 2147483647;
    const x = s % 600;
    s = (s * 16807) % 2147483647;
    const y = s % 440;
    if (Math.hypot(x - 390, y - 200) < 110) continue;
    brush.circle(x, y, 1.5 + (i % 3), 0.2);
  }

  // dark sea
  brush.fill("#0a0a24", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, 470); brush.vertex(620, 468); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // faint wave bands on dark sea
  brush.fill("#2a2466", 200);
  for (let i = 0; i < 5; i++) {
    const y = 500 + i * 22;
    brush.beginShape(0.8);
    brush.vertex(-20, y); brush.vertex(200, y - 4); brush.vertex(620, y + 2); brush.vertex(620, y + 8); brush.vertex(200, y + 4); brush.vertex(-20, y + 7);
    brush.endShape(true);
  }
  // moon path glitter on water
  brush.fill("#d8d2f8", 220);
  brush.fillBleed(0.1);
  for (let i = 0; i < 10; i++) {
    const y = 478 + i * 12;
    const w = 12 + i * 5;
    const x = 390 + ((i * 13) % 11) - 5;
    brush.beginShape(0.5);
    brush.vertex(x - w, y); brush.vertex(x + w, y - 2); brush.vertex(x + w * 0.7, y + 4); brush.vertex(x - w * 0.8, y + 5);
    brush.endShape(true);
  }
}
