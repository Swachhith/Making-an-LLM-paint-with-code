async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf7f2");
  brush.noStroke();
  // bold sky, upper left
  brush.fill("#2a6fd8", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(0, 0); brush.vertex(300, 0); brush.vertex(320, 150); brush.vertex(0, 170);
  brush.endShape(true);
  brush.fill("#134aa8", 210);
  brush.beginShape(0.6);
  brush.vertex(0, 0); brush.vertex(120, 0); brush.vertex(110, 130); brush.vertex(0, 130);
  brush.endShape(true);
  // a tall stem rising from bottom right
  brush.fill("#1f5a22", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.4);
  brush.vertex(440, 520); brush.vertex(470, 520); brush.vertex(472, 300); brush.vertex(442, 300);
  brush.endShape(true);
  brush.fill("#1a4a1c", 220);
  brush.beginShape(0.4);
  brush.vertex(450, 520); brush.vertex(480, 520); brush.vertex(482, 450); brush.vertex(452, 450);
  brush.endShape(true);
  // three broad leaves
  brush.fill("#227a3a", 215);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.8);
  brush.vertex(460, 470); brush.vertex(580, 390); brush.vertex(570, 350); brush.vertex(460, 420);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(460, 470); brush.vertex(350, 460); brush.vertex(340, 420); brush.vertex(450, 430);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(460, 470); brush.vertex(530, 560); brush.vertex(570, 560); brush.vertex(500, 475);
  brush.endShape(true);
  // the lily: six broad tepals, two rows of three, arranged around a heart
  let cx = 200, cy = 220;
  for (let row = 0; row < 2; row++) {
    for (let i = 0; i < 3; i++) {
      let a = -90 + row * 90 + i * 60 + 12;
      let r = row == 0 ? 115 : 135;
      let x = cx + cos(a) * r, y = cy + sin(a) * r;
      brush.fill("#f25a1a", 225);
      brush.fillBleed(0.3);
      brush.fillTexture(0.45, 0.45);
      brush.beginShape(0.9);
      brush.vertex(cx, cy);
      brush.vertex(cx + cos(a - 30) * r * 0.8, cy + sin(a - 30) * r * 0.8);
      brush.vertex(x + cos(a - 10) * 12, y + sin(a - 10) * 12);
      brush.vertex(x, y);
      brush.vertex(x - cos(a - 10) * 12, y - sin(a - 10) * 12);
      brush.vertex(cx - cos(a + 30) * r * 0.8, cy - sin(a + 30) * r * 0.8);
      brush.endShape(true);
    }
  }
  // dark veins
  for (let row = 0; row < 2; row++) {
    for (let i = 0; i < 3; i++) {
      let a = -90 + row * 90 + i * 60 + 12;
      let r = row == 0 ? 115 : 135;
      brush.fill("#b81f0a", 225);
      brush.fillBleed(0.15);
      brush.fillTexture(0.3, 0.3);
      brush.beginShape(0.7);
      brush.vertex(cx + cos(a) * r * 0.4, cy + sin(a) * r * 0.4);
      brush.vertex(cx + cos(a - 12) * r * 0.9, cy + sin(a - 12) * r * 0.9);
      brush.vertex(cx + cos(a) * r, cy + sin(a) * r);
      brush.vertex(cx + cos(a + 12) * r * 0.9, cy + sin(a + 12) * r * 0.9);
      brush.endShape(true);
    }
  }
  // yellow throat
  brush.fill("#ffd23a", 235);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.circle(cx, cy, 34, 0.4);
  brush.fill("#f7b018", 235);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.circle(cx + 2, cy + 2, 26, 0.4);
  // stamens
  for (let i = 0; i < 6; i++) {
    let a = i * 60 + 15;
    brush.fill("#e83a0a", 230);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.6);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a) * 28, cy + sin(a) * 28);
    brush.vertex(cx + cos(a) * 42, cy + sin(a) * 42);
    brush.vertex(cx + cos(a) * 52, cy + sin(a) * 52);
    brush.endShape(true);
    brush.fill("#ffd03a", 240);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.circle(cx + cos(a) * 50, cy + sin(a) * 50, 4, 0.2);
  }
}
