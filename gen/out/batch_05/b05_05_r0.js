async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3efe6");
  brush.noStroke();
  // bold ground: ultramarine top bleeding into magenta
  brush.fill("#2b3fa0", 215);
  brush.fillBleed(0.5);
  brush.fillTexture(0.6, 0.3);
  brush.beginShape(0.9);
  brush.vertex(15, 15); brush.vertex(585, 20); brush.vertex(580, 330); brush.vertex(20, 360);
  brush.endShape(true);
  brush.fill("#c2187a", 190);
  brush.fillBleed(0.45);
  brush.beginShape(0.9);
  brush.vertex(20, 300); brush.vertex(580, 260); brush.vertex(585, 585); brush.vertex(15, 585);
  brush.endShape(true);
  // two broad fleshy leaves at the base
  brush.fill("#1f7a3a", 230);
  brush.fillBleed(0.15);
  brush.fillTexture(0.4, 0.6);
  brush.beginShape(0.75);
  brush.vertex(300, 560); brush.vertex(200, 500); brush.vertex(60, 490);
  brush.vertex(40, 520); brush.vertex(150, 570); brush.vertex(290, 585);
  brush.endShape(true);
  brush.beginShape(0.75);
  brush.vertex(300, 565); brush.vertex(410, 480); brush.vertex(540, 450);
  brush.vertex(570, 480); brush.vertex(450, 540); brush.vertex(320, 588);
  brush.endShape(true);
  // arching stem
  brush.fill("#3c5a1e", 225);
  brush.fillBleed(0.05);
  brush.beginShape(0.6);
  brush.vertex(296, 560); brush.vertex(306, 560); brush.vertex(330, 380);
  brush.vertex(360, 280); brush.vertex(350, 280); brush.vertex(318, 380);
  brush.endShape(true);
  let cx = 330, cy = 240;
  // three sepals, narrow
  let sep = [[-90, 150], [150, 135], [30, 135]];
  for (let s of sep) {
    brush.fill("#ffffff", 240);
    brush.fillBleed(0.12);
    brush.fillTexture(0.3, 0.5);
    brush.beginShape(0.8);
    brush.vertex(cx, cy);
    brush.vertex(cx + s[1] * 0.55 * cos(s[0] - 18), cy + s[1] * 0.55 * sin(s[0] - 18));
    brush.vertex(cx + s[1] * cos(s[0]), cy + s[1] * sin(s[0]));
    brush.vertex(cx + s[1] * 0.55 * cos(s[0] + 18), cy + s[1] * 0.55 * sin(s[0] + 18));
    brush.endShape(true);
  }
  // two broad side petals
  for (let side of [-1, 1]) {
    brush.fill("#fffdf8", 245);
    brush.fillBleed(0.12);
    brush.fillTexture(0.3, 0.5);
    brush.beginShape(0.9);
    brush.vertex(cx, cy);
    brush.vertex(cx + side * 60, cy - 95);
    brush.vertex(cx + side * 150, cy - 75);
    brush.vertex(cx + side * 165, cy + 10);
    brush.vertex(cx + side * 90, cy + 40);
    brush.endShape(true);
    brush.fill("#e3d9f0", 170);
    brush.fillBleed(0.2);
    brush.beginShape(0.9);
    brush.vertex(cx, cy);
    brush.vertex(cx + side * 50, cy - 30);
    brush.vertex(cx + side * 90, cy + 10);
    brush.vertex(cx + side * 40, cy + 20);
    brush.endShape(true);
  }
  // lip: magenta with a yellow throat
  brush.fill("#d4147a", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.6);
  brush.beginShape(0.8);
  brush.vertex(cx - 25, cy + 10); brush.vertex(cx + 25, cy + 10); brush.vertex(cx + 30, cy + 45);
  brush.vertex(cx, cy + 75); brush.vertex(cx - 30, cy + 45);
  brush.endShape(true);
  brush.fill("#ffd21f", 235);
  brush.fillBleed(0.1);
  brush.circle(cx, cy + 12, 12, true);
  brush.fill("#e85a1a", 220);
  brush.circle(cx, cy + 4, 5, true);
  // a second bud on the arch
  brush.fill("#f4ecf6", 230);
  brush.fillBleed(0.1);
  brush.circle(410, 330, 18, true);
}
