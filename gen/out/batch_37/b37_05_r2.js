async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8e2c8");
  brush.noStroke();
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.5);
  brush.fill("#0e3a22", 190);
  brush.beginShape(0.9);
  brush.vertex(-40, -40); brush.vertex(640, -40); brush.vertex(640, 120); brush.vertex(300, 90); brush.vertex(-40, 140);
  brush.endShape(true);
  brush.fill("#c9a02a", 130);
  brush.beginShape(0.9);
  brush.vertex(-40, 130); brush.vertex(640, 100); brush.vertex(640, 650); brush.vertex(-40, 650);
  brush.endShape(true);
  brush.fill("#08301a", 235);
  brush.beginShape(0.4);
  brush.vertex(280, 380); brush.vertex(322, 380); brush.vertex(345, 650); brush.vertex(270, 650);
  brush.endShape(true);
  brush.fill("#146a3a", 225);
  brush.beginShape(0.6);
  brush.vertex(290, 500); brush.vertex(160, 420); brush.vertex(40, 440); brush.vertex(30, 520); brush.vertex(170, 570);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(325, 540); brush.vertex(450, 470); brush.vertex(580, 490); brush.vertex(580, 570); brush.vertex(440, 610);
  brush.endShape(true);
  for (let i = 0; i < 10; i++) {
    const a = (i * 36 + 18) * Math.PI / 180;
    const ex = 300 + 190 * Math.cos(a), ey = 230 + 190 * Math.sin(a);
    const mx = 300 + 110 * Math.cos(a), my = 230 + 110 * Math.sin(a);
    const px = -Math.sin(a) * 40, py = Math.cos(a) * 40;
    brush.fill(i % 2 ? "#f0dc90" : "#d8a820", 190);
    brush.beginShape(0.5);
    brush.vertex(300, 230); brush.vertex(mx + px, my + py); brush.vertex(ex, ey); brush.vertex(mx - px, my - py);
    brush.endShape(true);
    brush.fill("#b88410", 150);
    brush.beginShape(0.5);
    brush.vertex(300, 230); brush.vertex(mx + px * 0.4, my + py * 0.4); brush.vertex(300 + 150 * Math.cos(a), 230 + 150 * Math.sin(a)); brush.vertex(mx - px * 0.4, my - py * 0.4);
    brush.endShape(true);
  }
  brush.fill("#4a2a80", 200);
  brush.circle(300, 230, 100, 0.6);
  brush.fill("#8a5ab8", 200);
  brush.circle(300, 230, 80, 0.6);
  brush.fill("#2a1050", 220);
  brush.circle(300, 230, 55, 0.6);
  brush.fill("#0e3a1e", 240);
  brush.circle(300, 230, 30, 0.6);
  for (let j = 0; j < 5; j++) {
    brush.fill("#e0a810", 245);
    brush.circle(300 + 50 * Math.cos(j * 72 * Math.PI / 180 - 1), 230 + 50 * Math.sin(j * 72 * Math.PI / 180 - 1), 11, 0.5);
  }
}
