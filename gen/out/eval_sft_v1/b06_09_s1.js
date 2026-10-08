async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3efe1");
  brush.noStroke();
  // soft green ground wash, left edge darker
  brush.fill("#8c9a6a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 620); brush.vertex(620, 620); brush.vertex(620, 450); brush.vertex(400, 300); brush.vertex(250, 340); brush.vertex(-20, 470);
  brush.endShape(true);
  // two anemones: open bloom right, closed bud left
  let cx = 430, cy = 280;
  let R = 105;
  // six broad petals, each two passes
  for (let p = 0; p < 6; p++) {
    let a = p * 60 + 10;
    let px = cx + cos(a) * R * 0.85, py = cy + sin(a) * R * 0.85;
    brush.fill("#a98a6e", 190);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.5);
    brush.vertex(cx, cy); brush.vertex(px + cos(a - 18) * 40, py + sin(a - 18) * 40); brush.vertex(px + cos(a - 10) * 85, py + sin(a - 10) * 85); brush.vertex(px + cos(a + 10) * 85, py + sin(a + 10) * 85); brush.vertex(px + cos(a + 18) * 40, py + sin(a + 18) * 40);
    brush.endShape(true);
    brush.fill("#8f7052", 215);
    brush.fillBleed(0.25);
    brush.beginShape(0.5);
    brush.vertex(cx, cy); brush.vertex(px + cos(a - 18) * 35, py + sin(a - 18) * 35); brush.vertex(px + cos(a - 2) * 55, py + sin(a - 2) * 55); brush.vertex(px + cos(a + 2) * 55, py + sin(a + 2) * 55); brush.vertex(px + cos(a + 18) * 35, py + sin(a + 18) * 35);
    brush.endShape(true);
  }
  // dark centre
  brush.fill("#5a4232", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.circle(cx, cy, 40, 0.5);
  brush.fill("#36261e", 225);
  brush.fillBleed(0.2);
  brush.circle(cx, cy, 26, 0.5);
  // stem
  brush.fill("#4f6a3e", 225);
  brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(cx, cy); brush.vertex(cx + 10, cy + 60); brush.vertex(cx + 16, cy + 130); brush.vertex(cx + 12, cy + 200); brush.vertex(cx + 8, cy + 270); brush.vertex(cx + 4, cy + 340); brush.vertex(cx, 340);
  brush.endShape(true);
  // closed bud, two passes
  brush.fill("#9f8a6c", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(190, 320, 36, 0.6);
  brush.fill("#7a624a", 220);
  brush.fillBleed(0.25);
  brush.circle(190, 320, 24, 0.5);
  // stem
  brush.fill("#4f6a3e", 225);
  brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(190, 320); brush.vertex(184, 380); brush.vertex(196, 440); brush.vertex(204, 500); brush.vertex(212, 560); brush.vertex(200, 560); brush.vertex(192, 500); brush.vertex(184, 440); brush.vertex(190, 380);
  brush.endShape(true);
  // leaves
  brush.fill("#5f7a44", 215);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(212, 560); brush.vertex(300, 500); brush.vertex(340, 540); brush.vertex(280, 580); brush.vertex(220, 540);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(192, 500); brush.vertex(120, 540); brush.vertex(90, 590); brush.vertex(130, 560); brush.vertex(170, 530);
  brush.endShape(true);
  // stem up the side
  brush.fill("#3a4a2a", 220);
  brush.fillBleed(0.2);
  brush.beginShape(0.5);
  brush.vertex(580, 620); brush.vertex(570, 400); brush.vertex(550, 300); brush.vertex(520, 240); brush.vertex(490, 260); brush.vertex(480, 320); brush.vertex(500, 400); brush.vertex(520, 620);
  brush.endShape(true);
}
