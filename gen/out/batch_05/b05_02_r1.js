async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef2f4");
  brush.noStroke();
  // cool sky wash
  brush.fill("#bcd2e0", 170);
  brush.fillBleed(0.45);
  brush.fillTexture(0.5, 0.3);
  brush.beginShape(0.8);
  brush.vertex(40, 40); brush.vertex(560, 30); brush.vertex(580, 320);
  brush.vertex(320, 360); brush.vertex(30, 300);
  brush.endShape(true);
  // stem
  brush.fill("#5e917a", 225);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.5);
  brush.vertex(292, 300); brush.vertex(308, 300); brush.vertex(318, 440);
  brush.vertex(322, 585); brush.vertex(304, 585); brush.vertex(300, 440);
  brush.endShape(true);
  // left leaf, broad and arching
  brush.fill("#86b39c", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.45, 0.5);
  brush.beginShape(0.7);
  brush.vertex(305, 580); brush.vertex(200, 480); brush.vertex(130, 360);
  brush.vertex(120, 270); brush.vertex(200, 350); brush.vertex(290, 470);
  brush.endShape(true);
  brush.fill("#4f836d", 190);
  brush.fillBleed(0.15);
  brush.beginShape(0.7);
  brush.vertex(305, 575); brush.vertex(215, 470); brush.vertex(140, 330);
  brush.vertex(205, 400); brush.vertex(290, 520);
  brush.endShape(true);
  // right leaf, folding outward
  brush.fill("#94bfaa", 210);
  brush.fillBleed(0.25);
  brush.beginShape(0.7);
  brush.vertex(315, 585); brush.vertex(370, 490); brush.vertex(450, 400);
  brush.vertex(500, 370); brush.vertex(455, 460); brush.vertex(340, 570);
  brush.endShape(true);
  brush.fill("#5a8e77", 180);
  brush.fillBleed(0.1);
  brush.beginShape(0.7);
  brush.vertex(318, 580); brush.vertex(400, 470); brush.vertex(500, 372); brush.vertex(420, 480);
  brush.endShape(true);
  // tulip cup, larger: yellow underlayer
  brush.fill("#f5cf3c", 225);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(300, 320); brush.vertex(200, 270); brush.vertex(175, 170);
  brush.vertex(210, 80); brush.vertex(300, 115); brush.vertex(390, 78);
  brush.vertex(425, 170); brush.vertex(400, 272);
  brush.endShape(true);
  // red flames on outer petals
  let flames = [
    [[300, 318], [215, 270], [192, 180], [215, 95], [248, 180], [300, 250]],
    [[300, 318], [385, 270], [408, 180], [385, 92], [352, 180], [300, 250]],
    [[300, 305], [258, 230], [262, 140], [300, 108], [338, 140], [342, 230]]
  ];
  for (let f of flames) {
    brush.fill("#d62b3a", 215);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.8);
    for (let p of f) brush.vertex(p[0], p[1]);
    brush.endShape(true);
  }
  brush.fill("#9e1a2b", 215);
  brush.fillBleed(0.15);
  brush.beginShape(0.8);
  brush.vertex(300, 305); brush.vertex(275, 240); brush.vertex(300, 180); brush.vertex(325, 240);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(250, 290); brush.vertex(225, 200); brush.vertex(242, 210); brush.vertex(268, 285);
  brush.endShape(true);
  // yellow feathered edges catching light
  brush.fill("#f8dc55", 220);
  brush.fillBleed(0.1);
  brush.circle(214, 98, 12, true);
  brush.circle(386, 96, 12, true);
  brush.circle(300, 118, 9, true);
}
