async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1e6cc");
  brush.noStroke();
  // crimson sky, three passes
  brush.fill("#9a0e28", 225); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#5c0818", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(-10, -10); brush.vertex(330, -10); brush.vertex(200, 150); brush.vertex(-10, 260);
  brush.endShape(true);
  brush.fill("#d4203c", 170); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.circle(480, 340, 220, 0.6);
  // black ground
  brush.fill("#120608", 240); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(-10, 495); brush.vertex(200, 480); brush.vertex(420, 505); brush.vertex(610, 480); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  // stone walls: black base with lighter crimson-grey stones
  brush.fill("#240c12", 230); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.3);
  brush.vertex(60, 510); brush.vertex(60, 300); brush.vertex(540, 300); brush.vertex(540, 510);
  brush.endShape(true);
  for (let r = 0; r < 5; r++) for (let c = 0; c < 8; c++) {
    brush.fill((r + c) % 3 ? "#6a2030" : "#8a3040", 190); brush.fillBleed(0.2); brush.fillTexture(0.5, 0.5);
    brush.circle(90 + c * 58 + (r % 2) * 26, 328 + r * 42, 24 + (c * r) % 7, 0.8);
  }
  // roof, black with a crimson ridge
  brush.fill("#0a0406", 245); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(30, 315); brush.vertex(300, 120); brush.vertex(570, 315); brush.vertex(540, 320); brush.vertex(300, 160); brush.vertex(60, 320);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(60, 320); brush.vertex(300, 140); brush.vertex(540, 320);
  brush.endShape(true);
  // chimney
  brush.fill("#1c0a10", 240); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(400, 230); brush.vertex(400, 100); brush.vertex(455, 100); brush.vertex(455, 260);
  brush.endShape(true);
  // smoke: pale and drifting
  brush.fill("#f0cfc0", 190); brush.fillBleed(0.3); brush.fillTexture(0.3, 0.3);
  brush.circle(430, 72, 24, 0.7); brush.circle(455, 38, 30, 0.7); brush.circle(500, 14, 34, 0.7);
  // lit windows: cream and door
  brush.fill("#fbeec8", 245); brush.fillBleed(0.15); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(120, 360); brush.vertex(120, 430); brush.vertex(195, 430); brush.vertex(195, 360);
  brush.endShape(true);
  brush.fill("#0a0406", 235); brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(320, 505); brush.vertex(320, 395); brush.vertex(395, 395); brush.vertex(395, 505);
  brush.endShape(true);
  brush.fill("#0a0406", 245);
  brush.beginShape(0.3);
  brush.vertex(150, 360); brush.vertex(150, 430); brush.vertex(165, 430); brush.vertex(165, 360);
  brush.endShape(true);
}
