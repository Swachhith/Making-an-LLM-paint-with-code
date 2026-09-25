async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e9e0d2");
  brush.noStroke();
  // muted grey-green ground, heavier at the corners, lighter behind the cup
  let corners = [[0, 0], [600, 0], [0, 600], [600, 600]];
  for (let c of corners) {
    brush.fill("#8f8a6c", 195);
    brush.fillBleed(0.45);
    brush.fillTexture(0.6, 0.3);
    brush.circle(c[0], c[1], 230, true);
  }
  brush.fill("#b7ab90", 165);
  brush.fillBleed(0.45);
  brush.circle(300, 300, 280, true);
  // stem
  brush.fill("#5e6a40", 230);
  brush.fillBleed(0.08);
  brush.beginShape(0.5);
  brush.vertex(283, 530); brush.vertex(317, 530); brush.vertex(324, 600); brush.vertex(278, 600);
  brush.endShape(true);
  // back petals: deep mauve inside the cup
  brush.fill("#9a6a68", 215);
  brush.fillBleed(0.22);
  brush.fillTexture(0.6, 0.5);
  brush.beginShape(0.85);
  brush.vertex(300, 520); brush.vertex(120, 400); brush.vertex(90, 190);
  brush.vertex(150, 45); brush.vertex(300, 120); brush.vertex(450, 40);
  brush.vertex(515, 190); brush.vertex(480, 400);
  brush.endShape(true);
  // left front petal
  brush.fill("#dca39a", 225);
  brush.fillBleed(0.18);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.85);
  brush.vertex(300, 545); brush.vertex(150, 460); brush.vertex(100, 300);
  brush.vertex(125, 130); brush.vertex(190, 80); brush.vertex(250, 210); brush.vertex(285, 400);
  brush.endShape(true);
  // right front petal
  brush.fill("#d39990", 225);
  brush.beginShape(0.85);
  brush.vertex(300, 545); brush.vertex(450, 460); brush.vertex(505, 300);
  brush.vertex(478, 130); brush.vertex(410, 80); brush.vertex(350, 210); brush.vertex(315, 400);
  brush.endShape(true);
  // centre front petal, palest
  brush.fill("#ebbfb4", 225);
  brush.fillBleed(0.15);
  brush.beginShape(0.9);
  brush.vertex(300, 550); brush.vertex(205, 450); brush.vertex(185, 280);
  brush.vertex(230, 138); brush.vertex(300, 88); brush.vertex(370, 138);
  brush.vertex(415, 280); brush.vertex(395, 450);
  brush.endShape(true);
  // darker overlaps along each petal edge, pooling at the bottom
  brush.fill("#7f5652", 205);
  brush.fillBleed(0.2);
  brush.beginShape(0.8);
  brush.vertex(210, 440); brush.vertex(186, 290); brush.vertex(222, 380); brush.vertex(262, 525);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(390, 440); brush.vertex(414, 290); brush.vertex(378, 380); brush.vertex(338, 525);
  brush.endShape(true);
  brush.fill("#b77f78", 190);
  brush.fillBleed(0.15);
  brush.beginShape(0.85);
  brush.vertex(110, 300); brush.vertex(128, 140); brush.vertex(150, 180); brush.vertex(135, 380);
  brush.endShape(true);
  brush.beginShape(0.85);
  brush.vertex(495, 300); brush.vertex(476, 140); brush.vertex(455, 180); brush.vertex(470, 380);
  brush.endShape(true);
  // soft veining
  brush.fill("#cc8c84", 185);
  brush.fillBleed(0.12);
  brush.beginShape(0.9);
  brush.vertex(300, 520); brush.vertex(272, 360); brush.vertex(286, 200); brush.vertex(292, 360);
  brush.endShape(true);
  brush.beginShape(0.9);
  brush.vertex(305, 520); brush.vertex(333, 360); brush.vertex(318, 220); brush.vertex(314, 360);
  brush.endShape(true);
  // ochre base
  brush.fill("#b08650", 205);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(240, 505); brush.vertex(300, 465); brush.vertex(360, 505); brush.vertex(300, 555);
  brush.endShape(true);
}
