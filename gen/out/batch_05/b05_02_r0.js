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
  // cool sky wash behind the upper half
  brush.fill("#c7d9e4", 150);
  brush.fillBleed(0.4);
  brush.fillTexture(0.5, 0.3);
  brush.beginShape(0.8);
  brush.vertex(40, 60); brush.vertex(560, 40); brush.vertex(580, 330);
  brush.vertex(300, 380); brush.vertex(30, 300);
  brush.endShape(true);
  // stem
  brush.fill("#6f9c86", 210);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.5);
  brush.vertex(292, 250); brush.vertex(306, 250); brush.vertex(318, 420);
  brush.vertex(322, 575); brush.vertex(306, 575); brush.vertex(302, 420);
  brush.endShape(true);
  // left leaf, long and arching
  brush.fill("#8fb7a2", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.45, 0.5);
  brush.beginShape(0.7);
  brush.vertex(305, 570); brush.vertex(230, 470); brush.vertex(165, 330);
  brush.vertex(150, 250); brush.vertex(215, 360); brush.vertex(300, 470);
  brush.endShape(true);
  brush.fill("#5f8f7b", 170);
  brush.fillBleed(0.15);
  brush.beginShape(0.7);
  brush.vertex(305, 565); brush.vertex(240, 460); brush.vertex(175, 320);
  brush.vertex(215, 390); brush.vertex(290, 500);
  brush.endShape(true);
  // right leaf, shorter, folding outward
  brush.fill("#9cc0ad", 190);
  brush.fillBleed(0.25);
  brush.beginShape(0.7);
  brush.vertex(315, 575); brush.vertex(380, 480); brush.vertex(455, 400);
  brush.vertex(470, 380); brush.vertex(430, 460); brush.vertex(335, 560);
  brush.endShape(true);
  // tulip cup: yellow underlayer
  brush.fill("#f3d45a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(300, 265); brush.vertex(228, 225); brush.vertex(208, 150);
  brush.vertex(235, 95); brush.vertex(300, 120); brush.vertex(365, 92);
  brush.vertex(392, 150); brush.vertex(372, 228);
  brush.endShape(true);
  // red flames on outer petals
  let flames = [
    [[300, 262], [240, 225], [222, 160], [238, 108], [262, 170], [300, 215]],
    [[300, 262], [360, 225], [378, 160], [362, 105], [340, 170], [300, 215]],
    [[300, 250], [270, 190], [278, 130], [300, 115], [322, 130], [330, 190]]
  ];
  for (let f of flames) {
    brush.fill("#d8343f", 195);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.8);
    for (let p of f) brush.vertex(p[0], p[1]);
    brush.endShape(true);
  }
  // deeper red at petal overlap
  brush.fill("#a8202f", 200);
  brush.fillBleed(0.15);
  brush.beginShape(0.8);
  brush.vertex(300, 255); brush.vertex(282, 200); brush.vertex(300, 160);
  brush.vertex(318, 200);
  brush.endShape(true);
  // yellow rims catching light
  brush.fill("#f7e27a", 210);
  brush.fillBleed(0.1);
  brush.circle(236, 112, 9, true);
  brush.circle(364, 110, 9, true);
}
