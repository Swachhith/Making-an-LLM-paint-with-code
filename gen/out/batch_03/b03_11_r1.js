async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#faefdc");
  brush.noStroke();

  // warm glow behind
  brush.fill("#f5cf95", 165);
  brush.fillBleed(0.5);
  brush.fillTexture(0.55, 0.5);
  brush.circle(250, 320, 230, true);

  // thin meandering vine
  brush.fill("#7c6a30", 215);
  brush.fillBleed(0.08);
  brush.fillTexture(0.6, 0.4);
  brush.beginShape(0.9);
  brush.vertex(0, 150); brush.vertex(140, 120); brush.vertex(260, 200); brush.vertex(380, 330); brush.vertex(470, 380); brush.vertex(600, 380);
  brush.vertex(600, 386); brush.vertex(468, 388); brush.vertex(374, 338); brush.vertex(254, 208); brush.vertex(138, 128); brush.vertex(0, 157);
  brush.endShape(true);
  let lf = [[90, 128, -60], [230, 180, 60], [340, 290, -40], [540, 382, 80], [160, 125, 120]];
  for (let q of lf) {
    brush.fill("#9a9544", 205);
    brush.fillBleed(0.3);
    brush.beginShape(0.7);
    brush.vertex(q[0], q[1]);
    brush.vertex(q[0] + cos(q[2] - 30) * 50, q[1] + sin(q[2] - 30) * 50);
    brush.vertex(q[0] + cos(q[2]) * 90, q[1] + sin(q[2]) * 90);
    brush.vertex(q[0] + cos(q[2] + 30) * 50, q[1] + sin(q[2] + 30) * 50);
    brush.endShape(true);
  }

  // bloom one: face-on, four broad sepals, big and loose
  let x1 = 200, y1 = 340;
  for (let k = 0; k < 4; k++) {
    let a = k * 90 + 40;
    brush.fill("#a574c8", 200);
    brush.fillBleed(0.45);
    brush.fillTexture(0.45, 0.6);
    brush.beginShape(0.9);
    brush.vertex(x1, y1);
    brush.vertex(x1 + cos(a - 32) * 120, y1 + sin(a - 32) * 120);
    brush.vertex(x1 + cos(a) * 175, y1 + sin(a) * 175);
    brush.vertex(x1 + cos(a + 32) * 120, y1 + sin(a + 32) * 120);
    brush.endShape(true);
    brush.fill("#7a45a8", 215);
    brush.fillBleed(0.3);
    brush.beginShape(0.8);
    brush.vertex(x1, y1);
    brush.vertex(x1 + cos(a - 9) * 115, y1 + sin(a - 9) * 115);
    brush.vertex(x1 + cos(a) * 150, y1 + sin(a) * 150);
    brush.vertex(x1 + cos(a + 9) * 115, y1 + sin(a + 9) * 115);
    brush.endShape(true);
    brush.fill("#e2a0b8", 165);
    brush.fillBleed(0.15);
    brush.beginShape(0.9);
    brush.vertex(x1 + cos(a - 20) * 110, y1 + sin(a - 20) * 110);
    brush.vertex(x1 + cos(a) * 165, y1 + sin(a) * 165);
    brush.vertex(x1 + cos(a - 5) * 120, y1 + sin(a - 5) * 120);
    brush.endShape(true);
  }
  brush.fill("#f0c860", 230);
  brush.fillBleed(0.2);
  brush.circle(x1, y1, 26, true);
  brush.fill("#b8702a", 215);
  brush.circle(x1, y1, 11, true);

  // bloom two: from the side, a nodding bell hanging from the vine
  let x2 = 450, y2 = 480;
  brush.fill("#7c6a30", 215);
  brush.beginShape(0.6);
  brush.vertex(446, 384); brush.vertex(450, 420); brush.vertex(458, 420); brush.vertex(454, 384);
  brush.endShape(true);
  let sides = [[-55, "#b58ad0", 200], [-20, "#8e5cbc", 215], [20, "#9a68c2", 215], [55, "#b58ad0", 200]];
  for (let s of sides) {
    brush.fill(s[1], s[2]);
    brush.fillBleed(0.35);
    brush.fillTexture(0.5, 0.55);
    brush.beginShape(0.85);
    brush.vertex(x2, y2 - 65);
    brush.vertex(x2 + s[0] * 0.6 - 24, y2);
    brush.vertex(x2 + s[0] * 1.7, y2 + 90);
    brush.vertex(x2 + s[0] * 0.6 + 24, y2 + 8);
    brush.endShape(true);
  }
  brush.fill("#f0c860", 220);
  brush.circle(x2, y2 + 40, 9, true);
}
