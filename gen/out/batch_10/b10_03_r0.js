async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ece3d2");
  brush.noStroke();
  // muted evening sky
  brush.fill("#c9a877", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 150); brush.vertex(620, 130); brush.vertex(620, 470); brush.vertex(-20, 470);
  brush.endShape(true);
  brush.fill("#8d8a86", 180);
  brush.fillBleed(0.28);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 180); brush.vertex(300, 210); brush.vertex(-20, 190);
  brush.endShape(true);
  brush.fill("#b77b55", 150);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(-20, 330); brush.vertex(300, 300); brush.vertex(620, 340); brush.vertex(620, 440); brush.vertex(-20, 440);
  brush.endShape(true);
  // ground
  brush.fill("#5e5236", 210);
  brush.fillBleed(0.22);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-20, 460); brush.vertex(300, 452); brush.vertex(620, 462); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#3d3524", 200);
  brush.beginShape(0.5);
  brush.vertex(-20, 520); brush.vertex(350, 505); brush.vertex(620, 530); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // tree on the right
  brush.fill("#3a3226", 220);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(495, 460); brush.vertex(520, 460); brush.vertex(515, 300); brush.vertex(500, 300);
  brush.endShape(true);
  brush.fill("#4b4430", 190);
  brush.fillBleed(0.3);
  brush.circle(505, 250, 80, 0.7);
  brush.fill("#2e2a1f", 190);
  brush.circle(530, 270, 55, 0.7);
  brush.circle(470, 280, 45, 0.7);
  // bench and figures, dark silhouette
  const ink = "#241e18";
  brush.fill(ink, 235);
  brush.fillBleed(0.12);
  brush.fillTexture(0.3, 0.4);
  // seat
  brush.beginShape(0);
  brush.vertex(170, 430); brush.vertex(390, 430); brush.vertex(390, 448); brush.vertex(170, 448);
  brush.endShape(true);
  // backrest
  brush.beginShape(0);
  brush.vertex(175, 385); brush.vertex(385, 385); brush.vertex(385, 402); brush.vertex(175, 402);
  brush.endShape(true);
  // legs
  brush.beginShape(0);
  brush.vertex(185, 440); brush.vertex(202, 440); brush.vertex(202, 485); brush.vertex(185, 485);
  brush.endShape(true);
  brush.beginShape(0);
  brush.vertex(358, 440); brush.vertex(375, 440); brush.vertex(375, 485); brush.vertex(358, 485);
  brush.endShape(true);
  // left figure
  brush.circle(240, 330, 20, 0.2);
  brush.beginShape(0.4);
  brush.vertex(218, 352); brush.vertex(262, 352); brush.vertex(270, 432); brush.vertex(212, 432);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(230, 425); brush.vertex(285, 425); brush.vertex(290, 480); brush.vertex(272, 480); brush.vertex(268, 445); brush.vertex(230, 445);
  brush.endShape(true);
  // right figure, leaning in
  brush.circle(318, 326, 21, 0.2);
  brush.beginShape(0.4);
  brush.vertex(296, 350); brush.vertex(340, 348); brush.vertex(348, 432); brush.vertex(288, 432);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(300, 425); brush.vertex(345, 425); brush.vertex(340, 482); brush.vertex(322, 482); brush.vertex(320, 445); brush.vertex(300, 445);
  brush.endShape(true);
}
