async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbfaf6");
  brush.noStroke();

  // stem
  brush.fill("#8fb28a", 190);
  brush.fillBleed(0.15, "out");
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.6);
  brush.vertex(296, 300);
  brush.vertex(306, 300);
  brush.vertex(312, 560);
  brush.vertex(300, 560);
  brush.endShape(true);

  // two sword leaves
  brush.fill("#a8c49a", 170);
  brush.fillBleed(0.25, "out");
  brush.beginShape(0.5);
  brush.vertex(300, 565);
  brush.vertex(250, 420);
  brush.vertex(228, 330);
  brush.vertex(262, 420);
  brush.vertex(316, 565);
  brush.endShape(true);
  brush.fill("#9bbd92", 160);
  brush.beginShape(0.5);
  brush.vertex(305, 565);
  brush.vertex(355, 455);
  brush.vertex(392, 380);
  brush.vertex(368, 462);
  brush.vertex(322, 565);
  brush.endShape(true);

  // standards (upright petals), pale blue
  brush.fill("#a9bfe6", 170);
  brush.fillBleed(0.35, "out");
  brush.fillTexture(0.5, 0.6);
  brush.beginShape(0.8);
  brush.vertex(300, 250);
  brush.vertex(262, 180);
  brush.vertex(284, 110);
  brush.vertex(312, 105);
  brush.vertex(334, 175);
  brush.endShape(true);
  brush.fill("#98b0e0", 150);
  brush.beginShape(0.8);
  brush.vertex(292, 245);
  brush.vertex(236, 200);
  brush.vertex(240, 140);
  brush.vertex(270, 160);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(310, 245);
  brush.vertex(362, 200);
  brush.vertex(360, 140);
  brush.vertex(330, 160);
  brush.endShape(true);

  // falls, drooping
  brush.fill("#7f9cdc", 190);
  brush.fillBleed(0.4, "out");
  brush.beginShape(0.8);
  brush.vertex(290, 250);
  brush.vertex(220, 260);
  brush.vertex(185, 320);
  brush.vertex(215, 345);
  brush.vertex(262, 300);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(312, 250);
  brush.vertex(382, 262);
  brush.vertex(415, 322);
  brush.vertex(386, 346);
  brush.vertex(340, 300);
  brush.endShape(true);
  brush.fill("#6f8dd4", 200);
  brush.beginShape(0.8);
  brush.vertex(290, 262);
  brush.vertex(312, 262);
  brush.vertex(322, 330);
  brush.vertex(300, 360);
  brush.vertex(280, 330);
  brush.endShape(true);

  // gold beards
  brush.fill("#e8b64a", 220);
  brush.fillBleed(0.2, "in");
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.7);
  brush.vertex(282, 262);
  brush.vertex(240, 280);
  brush.vertex(232, 296);
  brush.vertex(262, 284);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(320, 262);
  brush.vertex(362, 282);
  brush.vertex(370, 298);
  brush.vertex(340, 285);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(296, 268);
  brush.vertex(306, 268);
  brush.vertex(304, 318);
  brush.vertex(298, 318);
  brush.endShape(true);

  // darker veining pools
  brush.fill("#4f6fc0", 170);
  brush.fillBleed(0.1, "in");
  brush.circle(214, 318, 14, true);
  brush.circle(388, 320, 14, true);
  brush.circle(300, 340, 10, true);
}
