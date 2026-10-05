async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3f2ea");
  brush.noStroke();
  // splash of cool green behind the flower
  brush.fill("#5f8a3e", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(260, 250, 150, 0.7);
  brush.fill("#8fb050", 170);
  brush.fillBleed(0.3);
  brush.circle(480, 150, 120, 0.7);
  // stem
  brush.fill("#2e6a1e", 220);
  brush.fillBleed(0.15);
  brush.beginShape(0.6);
  brush.vertex(320, 300);
  brush.vertex(300, 580);
  brush.vertex(340, 580);
  brush.vertex(320, 300);
  brush.endShape(true);
  // three broad leaves
  brush.fill("#3f8a2e", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.8);
  brush.vertex(270, 330);
  brush.vertex(190, 370);
  brush.vertex(150, 430);
  brush.vertex(220, 420);
  brush.vertex(260, 380);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(330, 320);
  brush.vertex(420, 300);
  brush.vertex(460, 360);
  brush.vertex(380, 375);
  brush.endShape(true);
  // petals: six broad orange ones, one behind
  let cx = 350, cy = 240;
  let petals = [[-120, 210], [0, 260], [120, 210], [210, 130], [290, 10], [190, -30], [-30, 50]];
  for (let p of petals) {
    let a = p[0], r = p[1];
    brush.fill("#ff6a1a", 225);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.9);
    brush.vertex(cx + cos(a - 18) * 140, cy + sin(a - 18) * 140);
    brush.vertex(cx + cos(a - 8) * r * 1.1, cy + sin(a - 8) * r * 1.1);
    brush.vertex(cx + cos(a) * r, cy + sin(a) * r);
    brush.vertex(cx + cos(a + 8) * r * 1.1, cy + sin(a + 8) * r * 1.1);
    brush.vertex(cx + cos(a + 18) * 140, cy + sin(a + 18) * 140);
    brush.endShape(true);
    brush.fill("#e0380c", 200);
    brush.fillBleed(0.15);
    brush.beginShape(0.9);
    brush.vertex(cx + cos(a - 10) * 90, cy + sin(a - 10) * 90);
    brush.vertex(cx + cos(a - 4) * r * 0.9, cy + sin(a - 4) * r * 0.9);
    brush.vertex(cx + cos(a) * r * 0.9, cy + sin(a) * r * 0.9);
    brush.vertex(cx + cos(a + 4) * r * 0.9, cy + sin(a + 4) * r * 0.9);
    brush.vertex(cx + cos(a + 10) * 90, cy + sin(a + 10) * 90);
    brush.endShape(true);
  }
  brush.fill("#f2c400", 235);
  brush.fillBleed(0.1);
  brush.circle(cx, cy, 32, 0.3);
  brush.fill("#d98a00", 215);
  brush.fillBleed(0.2);
  brush.circle(cx + 4, cy + 4, 22, 0.5);
  brush.fill("#b03a00", 225);
  brush.fillBleed(0.1);
  brush.circle(cx + 8, cy + 8, 12, 0.3);
}
