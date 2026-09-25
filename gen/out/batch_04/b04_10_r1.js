async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2f5ef");
  brush.noStroke();

  // deep teal pond band across the bottom
  brush.fill("#0d6e6e", 190);
  brush.fillBleed(0.4);
  brush.fillTexture(0.6, 0.5);
  brush.beginShape(1);
  brush.vertex(0, 400); brush.vertex(600, 380); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  // a pad
  brush.fill("#2f8a3a", 210);
  brush.fillBleed(0.2);
  brush.beginShape(1);
  brush.vertex(330, 470); brush.vertex(470, 440); brush.vertex(580, 480); brush.vertex(480, 530); brush.vertex(350, 520);
  brush.endShape(true);

  brush.fill("#0a4f55", 190);
  brush.fillBleed(0.2);
  brush.beginShape(1);
  brush.vertex(0, 520); brush.vertex(300, 560); brush.vertex(600, 540); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  brush.fill("#1f6b2a", 215);
  brush.beginShape(1);
  brush.vertex(20, 470); brush.vertex(130, 440); brush.vertex(230, 470); brush.vertex(140, 510);
  brush.endShape(true);

  // bloom A: open, seen three-quarter from above, left
  let cx = 190, cy = 300;
  const back = [-150, -120, -90, -60, -30];
  for (const a of back) {
    brush.fill("#f0438a", 185);
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.6);
    brush.beginShape(0.9);
    brush.vertex(cx - 18, cy); brush.vertex(cx + cos(a - 14) * 110, cy + sin(a - 14) * 90);
    brush.vertex(cx + cos(a) * 140, cy + sin(a) * 120); brush.vertex(cx + cos(a + 14) * 110, cy + sin(a + 14) * 90);
    brush.vertex(cx + 18, cy);
    brush.endShape(true);
  }
  for (const a of [-160, -20, 200, 20]) {
    brush.fill("#d91a6e", 205);
    brush.fillBleed(0.2);
    brush.beginShape(0.9);
    brush.vertex(cx - 14, cy + 10); brush.vertex(cx + cos(a - 16) * 95, cy + sin(a - 16) * 55);
    brush.vertex(cx + cos(a) * 120, cy + sin(a) * 60); brush.vertex(cx + cos(a + 16) * 95, cy + sin(a + 16) * 55);
    brush.vertex(cx + 14, cy + 10);
    brush.endShape(true);
  }
  brush.fill("#ffd21f", 235);
  brush.fillBleed(0.1);
  brush.beginShape(0.8);
  brush.vertex(cx - 30, cy - 5); brush.vertex(cx + 30, cy - 5); brush.vertex(cx + 24, cy + 18); brush.vertex(cx - 24, cy + 18);
  brush.endShape(true);
  brush.fill("#8fa020", 220);
  brush.circle(cx, cy - 2, 10, 0.3);
  brush.fill("#d91a6e", 215);
  brush.beginShape(0.9);
  brush.vertex(cx - 50, cy + 20); brush.vertex(cx, cy + 80); brush.vertex(cx + 50, cy + 20); brush.vertex(cx, cy + 45);
  brush.endShape(true);

  // bloom B: half-open, side view, right, tilted
  cx = 430; cy = 220;
  for (const [dx, h, c, o] of [[-40, 150, "#f26aa5", 175], [40, 150, "#f26aa5", 175], [-18, 170, "#e02d7d", 200], [18, 170, "#e02d7d", 200], [0, 180, "#c40f62", 215]]) {
    brush.fill(c, o);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.9);
    brush.vertex(cx + dx * 0.4, cy + 80);
    brush.vertex(cx + dx * 1.6, cy + 20);
    brush.vertex(cx + dx * 1.1, cy + 80 - h);
    brush.vertex(cx + dx * 0.3, cy + 40);
    brush.endShape(true);
  }
  // stems into the water
  brush.fill("#2f7a3a", 225);
  brush.fillBleed(0.05);
  brush.beginShape(0.6);
  brush.vertex(cx - 4, cy + 80); brush.vertex(cx + 4, cy + 80); brush.vertex(cx + 20, 440); brush.vertex(cx + 10, 440);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(186, 360); brush.vertex(196, 360); brush.vertex(210, 440); brush.vertex(200, 440);
  brush.endShape(true);
}
