async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf3e4");
  brush.noStroke();

  // warm light: soft yellow-green wash behind the flower
  brush.fill("#f6e88a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 400); brush.vertex(300, 600); brush.vertex(0, 600);
  brush.endShape(true);
  brush.fill("#e8d47a", 150);
  brush.beginShape(0.6);
  brush.vertex(0, 350); brush.vertex(300, 600); brush.vertex(600, 470); brush.vertex(600, 0);
  brush.endShape(true);

  // arcing stem, two passes, from top right to lower left
  let cx = 470, cy = 100;
  brush.fill("#8a7a3a", 220);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.2);
  brush.vertex(cx - 20, cy - 20); brush.vertex(cx + 20, cy - 20);
  brush.vertex(560, 260); brush.vertex(560, 420); brush.vertex(450, 540); brush.vertex(320, 590);
  brush.vertex(300, 590); brush.vertex(420, 540); brush.vertex(530, 420); brush.vertex(530, 260);
  brush.vertex(cx + 20, cy + 20); brush.vertex(cx - 20, cy + 20);
  brush.endShape(true);
  brush.fill("#3d301c", 200);
  brush.beginShape(0.2);
  brush.vertex(cx - 10, cy - 10); brush.vertex(cx + 10, cy - 10); brush.vertex(550, 300); brush.vertex(550, 460); brush.vertex(430, 580); brush.vertex(310, 580); brush.vertex(430, 460); brush.vertex(550, 300);
  brush.endShape(true);

  // broad leaves, two passes each
  brush.fill("#6f7a3a", 215);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(470, 260); brush.vertex(550, 230); brush.vertex(620, 270); brush.vertex(560, 320); brush.vertex(480, 310);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(470, 330); brush.vertex(560, 300); brush.vertex(630, 340); brush.vertex(570, 400); brush.vertex(480, 390);
  brush.endShape(true);
  brush.fill("#4a5a2a", 200);
  brush.beginShape(0.6);
  brush.vertex(470, 420); brush.vertex(550, 400); brush.vertex(620, 440); brush.vertex(570, 500); brush.vertex(480, 490);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(330, 580); brush.vertex(220, 540); brush.vertex(160, 500); brush.vertex(200, 470); brush.vertex(330, 510);
  brush.endShape(true);

  // head: ring of petals, then the disc
  let R = 150;
  for (let k = 0; k < 24; k++) {
    let a = k * 15 + 7;
    let w = 22 + (k % 5) * 4;
    brush.fill("#f7c41e", 235);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.6);
    brush.vertex(cx + cos(a - 10) * R * 0.55, cy + sin(a - 10) * R * 0.55);
    brush.vertex(cx + cos(a - 2) * R, cy + sin(a - 2) * R);
    brush.vertex(cx + cos(a + 2) * R, cy + sin(a + 2) * R);
    brush.vertex(cx + cos(a + 10) * R * 0.55, cy + sin(a + 10) * R * 0.55);
    brush.endShape(true);
  }
  brush.fill("#e8a00a", 220);
  brush.fillBleed(0.2);
  brush.circle(cx, cy, R * 0.9, 0.4);
  brush.fill("#d97a0a", 220);
  brush.fillBleed(0.15);
  brush.circle(cx, cy, R * 0.65, 0.3);
  brush.fill("#8a5a0a", 220);
  brush.fillBleed(0.1);
  brush.circle(cx, cy, R * 0.4, 0.3);
  brush.fill("#3a2a0a", 220);
  brush.fillBleed(0.05);
  brush.circle(cx, cy, R * 0.18, 0.2);
}
