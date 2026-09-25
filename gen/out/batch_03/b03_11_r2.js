async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbefd9");
  brush.noStroke();

  brush.fill("#f3c585", 185);
  brush.fillBleed(0.35);
  brush.fillTexture(0.55, 0.5);
  brush.beginShape(0.9);
  brush.vertex(40, 180); brush.vertex(330, 120); brush.vertex(560, 260); brush.vertex(520, 540); brush.vertex(160, 560);
  brush.endShape(true);

  // vine crossing top-left to right
  brush.fill("#6e5e28", 225);
  brush.fillBleed(0.05);
  brush.fillTexture(0.6, 0.4);
  brush.beginShape(0.9);
  brush.vertex(0, 120); brush.vertex(150, 95); brush.vertex(300, 150); brush.vertex(470, 230); brush.vertex(600, 220);
  brush.vertex(600, 228); brush.vertex(468, 240); brush.vertex(296, 160); brush.vertex(148, 104); brush.vertex(0, 128);
  brush.endShape(true);
  let lf = [[70, 110, -70], [210, 110, 70], [390, 195, -60], [540, 225, 70]];
  for (let q of lf) {
    brush.fill("#8f8a3a", 215);
    brush.fillBleed(0.2);
    brush.beginShape(0.7);
    brush.vertex(q[0], q[1]);
    brush.vertex(q[0] + cos(q[2] - 28) * 55, q[1] + sin(q[2] - 28) * 55);
    brush.vertex(q[0] + cos(q[2]) * 95, q[1] + sin(q[2]) * 95);
    brush.vertex(q[0] + cos(q[2] + 28) * 55, q[1] + sin(q[2] + 28) * 55);
    brush.endShape(true);
  }

  // bloom one: face-on, hanging below the vine, four broad joined sepals
  let x1 = 210, y1 = 330;
  brush.fill("#6e5e28", 220);
  brush.beginShape(0.5);
  brush.vertex(250, 145); brush.vertex(214, 320); brush.vertex(222, 320); brush.vertex(258, 148);
  brush.endShape(true);
  for (let k = 0; k < 4; k++) {
    let a = k * 90 + 40;
    brush.fill("#9a66c4", 215);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.6);
    brush.beginShape(0.85);
    brush.vertex(x1 + cos(a - 45) * 20, y1 + sin(a - 45) * 20);
    brush.vertex(x1 + cos(a - 30) * 115, y1 + sin(a - 30) * 115);
    brush.vertex(x1 + cos(a) * 170, y1 + sin(a) * 170);
    brush.vertex(x1 + cos(a + 30) * 115, y1 + sin(a + 30) * 115);
    brush.vertex(x1 + cos(a + 45) * 20, y1 + sin(a + 45) * 20);
    brush.endShape(true);
    brush.fill("#6a3698", 225);
    brush.fillBleed(0.2);
    brush.beginShape(0.8);
    brush.vertex(x1 + cos(a - 15) * 20, y1 + sin(a - 15) * 20);
    brush.vertex(x1 + cos(a - 7) * 110, y1 + sin(a - 7) * 110);
    brush.vertex(x1 + cos(a) * 150, y1 + sin(a) * 150);
    brush.vertex(x1 + cos(a + 7) * 110, y1 + sin(a + 7) * 110);
    brush.vertex(x1 + cos(a + 15) * 20, y1 + sin(a + 15) * 20);
    brush.endShape(true);
    brush.fill("#e6a8bf", 185);
    brush.fillBleed(0.1);
    brush.beginShape(0.9);
    brush.vertex(x1 + cos(a - 24) * 100, y1 + sin(a - 24) * 100);
    brush.vertex(x1 + cos(a - 4) * 160, y1 + sin(a - 4) * 160);
    brush.vertex(x1 + cos(a - 12) * 110, y1 + sin(a - 12) * 110);
    brush.endShape(true);
  }
  brush.fill("#f0c860", 235);
  brush.fillBleed(0.15);
  brush.circle(x1, y1, 30, true);
  for (let k = 0; k < 10; k++) {
    brush.fill("#f7e8a0", 225);
    brush.circle(x1 + cos(k * 36) * 22, y1 + sin(k * 36) * 22, 5, true);
  }
  brush.fill("#a86424", 220);
  brush.circle(x1, y1, 11, true);

  // bloom two: side view, a nodding bell hanging from the vine at right
  let x2 = 440, y2 = 420;
  brush.fill("#6e5e28", 220);
  brush.beginShape(0.6);
  brush.vertex(466, 236); brush.vertex(446, 350); brush.vertex(454, 352); brush.vertex(474, 238);
  brush.endShape(true);
  let sides = [[-60, "#a47ad0", 210], [-22, "#7c48b0", 225], [22, "#8a56b8", 225], [60, "#a47ad0", 210]];
  for (let s of sides) {
    brush.fill(s[1], s[2]);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.55);
    brush.beginShape(0.85);
    brush.vertex(x2, y2 - 70);
    brush.vertex(x2 + s[0] * 0.55 - 26, y2);
    brush.vertex(x2 + s[0] * 1.6, y2 + 100);
    brush.vertex(x2 + s[0] * 0.55 + 26, y2 + 10);
    brush.endShape(true);
  }
  brush.fill("#f0c860", 225);
  brush.circle(x2, y2 + 55, 10, true);
}
