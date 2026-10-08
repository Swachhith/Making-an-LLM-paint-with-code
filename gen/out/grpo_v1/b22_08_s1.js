async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6efe2");
  brush.noStroke();

  // bold dark green leaves, big and loose
  brush.fill("#1f6a3a", 215);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(350, 420); brush.vertex(530, 220); brush.vertex(600, 250); brush.vertex(560, 420); brush.vertex(350, 440);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(350, 420); brush.vertex(170, 230); brush.vertex(100, 260); brush.vertex(140, 420); brush.vertex(350, 440);
  brush.endShape(true);
  brush.fill("#0e3a22", 190);
  brush.beginShape(0.5);
  brush.vertex(350, 420); brush.vertex(520, 260); brush.vertex(600, 300); brush.vertex(540, 420); brush.vertex(350, 430);
  brush.endShape(true);

  // a few stray petals on the paper
  brush.fill("#e05a1c", 170);
  brush.fillBleed(0.25);
  brush.circle(100, 150, 30, 0.6);
  brush.circle(400, 500, 22, 0.5);

  // the orange lily: six broad petals, one pass each
  let cx = 410, cy = 330;
  for (let k = 0; k < 6; k++) {
    let a = k * 60 + 12;
    brush.fill("#f87a1a", 225);
    brush.fillBleed(0.28);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(0.5);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 22) * 115, cy + sin(a - 22) * 115);
    brush.vertex(cx + cos(a - 8) * 155, cy + sin(a - 8) * 155);
    brush.vertex(cx + cos(a + 8) * 155, cy + sin(a + 8) * 155);
    brush.vertex(cx + cos(a + 22) * 115, cy + sin(a + 22) * 115);
    brush.endShape(true);
  }
  // a second, more opaque pass inside each petal
  for (let k = 0; k < 6; k++) {
    let a = k * 60 + 12;
    brush.fill("#d03a0c", 220);
    brush.fillBleed(0.22);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.5);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 12) * 75, cy + sin(a - 12) * 75);
    brush.vertex(cx + cos(a + 12) * 75, cy + sin(a + 12) * 75);
    brush.endShape(true);
  }
  // yellow throat
  brush.fill("#ffc21a", 230);
  brush.fillBleed(0.25);
  brush.circle(cx, cy, 32, 0.4);
  // dark centre
  brush.fill("#5a1002", 230);
  brush.circle(cx, cy, 18, 0.3);
}
