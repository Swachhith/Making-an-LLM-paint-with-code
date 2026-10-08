async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6efe2");
  randomSeed(1234);
  brush.noStroke();
  // a bold teal ground
  brush.fill("#0f8a8a", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(0, 600); brush.vertex(600, 600); brush.vertex(600, 300); brush.vertex(300, 150); brush.vertex(0, 300);
  brush.endShape(true);
  // stems
  brush.fill("#1f7a3a", 210);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(290, 470); brush.vertex(298, 600); brush.vertex(302, 600); brush.vertex(306, 470);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(400, 470); brush.vertex(408, 600); brush.vertex(412, 600); brush.vertex(416, 470);
  brush.endShape(true);
  // broad leaves
  brush.fill("#1f7a3a", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(260, 500); brush.vertex(330, 480); brush.vertex(380, 540); brush.vertex(310, 560);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(330, 520); brush.vertex(420, 500); brush.vertex(470, 550); brush.vertex(390, 570);
  brush.endShape(true);
  // peony: five broad overlapping petals, side view, ruffled edges
  let cx = 300, cy = 250;
  for (let k = 0; k < 5; k++) {
    let a = k * 72 + 12;
    let R = 160 - k * 12;
    brush.fill("#e03060", 230);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.5);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 25) * R * 0.75, cy + sin(a - 25) * R * 0.75);
    brush.vertex(cx + cos(a - 15) * R, cy + sin(a - 15) * R);
    brush.vertex(cx + cos(a + 15) * R, cy + sin(a + 15) * R);
    brush.vertex(cx + cos(a + 25) * R * 0.75, cy + sin(a + 25) * R * 0.75);
    brush.endShape(true);
    // a darker inner pass
    brush.fill("#b81244", 215);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.5);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 20) * R * 0.5, cy + sin(a - 20) * R * 0.5);
    brush.vertex(cx + cos(a) * R * 0.7, cy + sin(a) * R * 0.7);
    brush.vertex(cx + cos(a + 20) * R * 0.5, cy + sin(a + 20) * R * 0.5);
    brush.endShape(true);
  }
  // a ring of tiny stamens at the heart
  for (let k = 0; k < 36; k++) {
    let a = k * 10;
    brush.fill("#f0a800", 245);
    brush.fillBleed(0.1);
    brush.fillTexture(0.3, 0.3);
    brush.circle(cx + cos(a) * 45, cy + sin(a) * 45, 5, 0.3);
  }
  // a few stray petals on the ground
  brush.fill("#d02050", 225);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(470, 520); brush.vertex(530, 470); brush.vertex(570, 500); brush.vertex(520, 530);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(100, 480); brush.vertex(150, 430); brush.vertex(190, 450); brush.vertex(140, 480);
  brush.endShape(true);
}
