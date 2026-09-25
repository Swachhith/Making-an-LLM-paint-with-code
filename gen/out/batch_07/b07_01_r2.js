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
  brush.vertex(295, 291);
  brush.vertex(308, 291);
  brush.vertex(316, 629);
  brush.vertex(300, 629);
  brush.endShape(true);

  // two sword leaves
  brush.fill("#a8c49a", 170);
  brush.fillBleed(0.25, "out");
  brush.beginShape(0.5);
  brush.vertex(300, 636);
  brush.vertex(235, 447);
  brush.vertex(206, 330);
  brush.vertex(251, 447);
  brush.vertex(321, 636);
  brush.endShape(true);
  brush.fill("#9bbd92", 160);
  brush.beginShape(0.5);
  brush.vertex(306, 636);
  brush.vertex(372, 492);
  brush.vertex(420, 395);
  brush.vertex(388, 502);
  brush.vertex(329, 636);
  brush.endShape(true);

  // one pale wet halo so the petals read as one bloom
  brush.fill("#dbe4f5", 150);
  brush.fillBleed(0.6, "out");
  brush.fillTexture(0.5, 0.3);
  brush.circle(300, 230, 120, true);

  // standards (upright petals), pale blue
  brush.fill("#a2b8e8", 190);
  brush.fillBleed(0.35, "out");
  brush.fillTexture(0.5, 0.6);
  brush.beginShape(0.8);
  brush.vertex(300, 226);
  brush.vertex(251, 135);
  brush.vertex(279, 44);
  brush.vertex(316, 38);
  brush.vertex(344, 128);
  brush.endShape(true);
  brush.fill("#98b0e0", 150);
  brush.beginShape(0.8);
  brush.vertex(290, 220);
  brush.vertex(217, 161);
  brush.vertex(222, 83);
  brush.vertex(261, 109);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(313, 220);
  brush.vertex(381, 161);
  brush.vertex(378, 83);
  brush.vertex(339, 109);
  brush.endShape(true);

  // falls, drooping
  brush.fill("#7394da", 205);
  brush.fillBleed(0.4, "out");
  brush.beginShape(0.8);
  brush.vertex(287, 226);
  brush.vertex(200, 232);
  brush.vertex(140, 300);
  brush.vertex(150, 370);
  brush.vertex(205, 360);
  brush.vertex(262, 285);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(316, 226);
  brush.vertex(402, 234);
  brush.vertex(462, 302);
  brush.vertex(452, 372);
  brush.vertex(397, 362);
  brush.vertex(340, 286);
  brush.endShape(true);
  brush.fill("#6f8dd4", 200);
  brush.beginShape(0.8);
  brush.vertex(287, 242);
  brush.vertex(316, 242);
  brush.vertex(329, 330);
  brush.vertex(300, 369);
  brush.vertex(274, 330);
  brush.endShape(true);

  // gold beards
  brush.fill("#e7a93a", 235);
  brush.fillBleed(0.2, "in");
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.7);
  brush.vertex(277, 242);
  brush.vertex(222, 265);
  brush.vertex(212, 286);
  brush.vertex(251, 270);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(326, 242);
  brush.vertex(381, 268);
  brush.vertex(391, 288);
  brush.vertex(352, 272);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(295, 249);
  brush.vertex(308, 249);
  brush.vertex(305, 314);
  brush.vertex(297, 314);
  brush.endShape(true);

  // darker veining pools
  brush.fill("#4f6fc0", 170);
  brush.fillBleed(0.1, "in");
  brush.circle(188, 314, 18, true);
  brush.circle(414, 317, 18, true);
  brush.circle(300, 343, 13, true);
}
