async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#edf2f5");
  brush.noStroke();
  // cool sky wash, graded: pale blue then a lighter lavender band lower
  brush.fill("#b6cde0", 185);
  brush.fillBleed(0.45);
  brush.fillTexture(0.5, 0.3);
  brush.beginShape(0.8);
  brush.vertex(40, 30); brush.vertex(570, 25); brush.vertex(580, 300);
  brush.vertex(320, 340); brush.vertex(30, 290);
  brush.endShape(true);
  brush.fill("#d3d6ea", 150);
  brush.fillBleed(0.4);
  brush.beginShape(0.8);
  brush.vertex(30, 280); brush.vertex(580, 290); brush.vertex(570, 420); brush.vertex(40, 440);
  brush.endShape(true);
  // stem
  brush.fill("#4f8670", 230);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.5);
  brush.vertex(292, 300); brush.vertex(308, 300); brush.vertex(318, 440);
  brush.vertex(322, 585); brush.vertex(304, 585); brush.vertex(300, 440);
  brush.endShape(true);
  // left leaf
  brush.fill("#7fae98", 215);
  brush.fillBleed(0.25);
  brush.fillTexture(0.45, 0.5);
  brush.beginShape(0.7);
  brush.vertex(305, 580); brush.vertex(200, 480); brush.vertex(130, 360);
  brush.vertex(115, 260); brush.vertex(200, 350); brush.vertex(290, 470);
  brush.endShape(true);
  brush.fill("#3f7760", 200);
  brush.fillBleed(0.15);
  brush.beginShape(0.7);
  brush.vertex(305, 575); brush.vertex(215, 470); brush.vertex(135, 320);
  brush.vertex(205, 400); brush.vertex(290, 520);
  brush.endShape(true);
  // right leaf
  brush.fill("#8dbaa4", 215);
  brush.fillBleed(0.25);
  brush.beginShape(0.7);
  brush.vertex(315, 585); brush.vertex(370, 490); brush.vertex(450, 400);
  brush.vertex(505, 365); brush.vertex(455, 460); brush.vertex(340, 570);
  brush.endShape(true);
  brush.fill("#4d8570", 190);
  brush.fillBleed(0.1);
  brush.beginShape(0.7);
  brush.vertex(318, 580); brush.vertex(400, 470); brush.vertex(505, 367); brush.vertex(420, 480);
  brush.endShape(true);
  // tulip cup: yellow underlayer, a little wider at the lips
  brush.fill("#f6cc30", 230);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(300, 320); brush.vertex(198, 270); brush.vertex(172, 170);
  brush.vertex(200, 72); brush.vertex(300, 112); brush.vertex(400, 70);
  brush.vertex(428, 170); brush.vertex(402, 272);
  brush.endShape(true);
  // red flames, painted twice: loose then tighter and deeper
  let flames = [
    [[300, 318], [215, 270], [192, 180], [210, 88], [248, 180], [300, 250]],
    [[300, 318], [385, 270], [408, 180], [390, 86], [352, 180], [300, 250]],
    [[300, 305], [258, 230], [262, 140], [300, 104], [338, 140], [342, 230]]
  ];
  for (let f of flames) {
    brush.fill("#dc2f3c", 215);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.8);
    for (let p of f) brush.vertex(p[0], p[1]);
    brush.endShape(true);
    brush.fill("#b31b2e", 200);
    brush.fillBleed(0.12);
    brush.beginShape(0.8);
    brush.vertex(f[0][0], f[0][1] - 10);
    brush.vertex((f[1][0] + f[4][0]) / 2, f[2][1] + 30);
    brush.vertex((f[3][0] + f[4][0]) / 2, f[3][1] + 40);
    brush.vertex((f[4][0] + f[5][0]) / 2, f[2][1] + 40);
    brush.endShape(true);
  }
  // shadow where the centre petal overlaps
  brush.fill("#8e1427", 215);
  brush.fillBleed(0.15);
  brush.beginShape(0.8);
  brush.vertex(300, 305); brush.vertex(272, 240); brush.vertex(300, 175); brush.vertex(328, 240);
  brush.endShape(true);
  // yellow feathered lips
  brush.fill("#f7d640", 225);
  brush.fillBleed(0.1);
  brush.circle(210, 92, 13, true);
  brush.circle(390, 90, 13, true);
  brush.circle(300, 112, 10, true);
  brush.fill("#f0b52a", 200);
  brush.circle(200, 250, 12, true);
  brush.circle(400, 250, 12, true);
}
