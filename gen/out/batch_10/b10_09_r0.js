async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#16143a");
  brush.noStroke();
  // violet haze in the huge sky
  brush.fill("#4b2f8a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(-20, 200); brush.vertex(200, 150); brush.vertex(620, 220); brush.vertex(620, 480); brush.vertex(-20, 480);
  brush.endShape(true);
  brush.fill("#2f4aa0", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(-20, -20); brush.vertex(300, -20); brush.vertex(200, 120); brush.vertex(-20, 200);
  brush.endShape(true);
  brush.fill("#6a3fa0", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(80, 360); brush.vertex(350, 320); brush.vertex(600, 380); brush.vertex(520, 440); brush.vertex(120, 450);
  brush.endShape(true);
  // moon on the bare dark paper, upper right
  brush.fill("#fff6d8", 245);
  brush.fillBleed(0.12);
  brush.fillTexture(0.3, 0.3);
  brush.circle(420, 150, 58, 0.15);
  brush.fill("#fff6d8", 220);
  brush.circle(420, 150, 54, 0.1);
  brush.fill("#d9d0e8", 140);
  brush.fillBleed(0.3);
  brush.circle(405, 140, 16, 0.6);
  brush.circle(432, 168, 10, 0.6);
  // stars
  const st = [[60, 60], [150, 40], [240, 90], [520, 60], [560, 250], [100, 280], [300, 220], [470, 300], [30, 150], [350, 60]];
  brush.fill("#f4efff", 240);
  brush.fillBleed(0.05);
  for (const s of st) brush.circle(s[0], s[1], 2, 0.2);
  // low sea
  brush.fill("#0b1340", 235);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.2);
  brush.vertex(-20, 482); brush.vertex(620, 478); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // moonlit path on the water
  brush.fill("#e9e2f5", 220);
  brush.fillBleed(0.15);
  for (let i = 0; i < 16; i++) {
    const y = 490 + i * 7;
    const w = 6 + i * 2.2;
    const x = 420 + Math.sin(i * 2.3) * (4 + i);
    brush.circle(x - w * 0.6, y, 2 + (i % 3), 0.5);
    brush.circle(x + w * 0.5, y + 3, 2 + ((i + 1) % 3), 0.5);
  }
  // wave crests in blue-violet
  brush.fill("#3b3a8c", 200);
  brush.fillBleed(0.2);
  for (let i = 0; i < 5; i++) {
    const y = 510 + i * 20;
    brush.beginShape(0.6);
    brush.vertex(20 + i * 30, y); brush.vertex(220 + i * 20, y - 3); brush.vertex(200 + i * 20, y + 8); brush.vertex(30 + i * 30, y + 9);
    brush.endShape(true);
  }
}
