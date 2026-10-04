async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef3f6");
  brush.noStroke();

  // cool sky
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.fill("#7aaad8", 190);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 300); brush.vertex(-20, 320);
  brush.endShape(true);

  // meadow, blue-green, two passes
  brush.fill("#5aa890", 210);
  brush.beginShape(0.4);
  brush.vertex(-20, 300); brush.vertex(200, 285); brush.vertex(420, 305); brush.vertex(620, 290);
  brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#2e7a70", 190);
  brush.beginShape(0.5);
  brush.vertex(-20, 430); brush.vertex(300, 410); brush.vertex(620, 440); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // second child in the distance, running
  brush.fillBleed(0.2);
  brush.fill("#c8607a", 225);
  brush.beginShape(0.3);
  brush.vertex(62, 320); brush.vertex(100, 320); brush.vertex(106, 380); brush.vertex(58, 380);
  brush.endShape(true);
  brush.fill("#e8a890", 225);
  brush.circle(82, 306, 15, 0.2);
  brush.fill("#4a2a1a", 215);
  brush.circle(80, 298, 13, 0.4);
  brush.fill("#c8607a", 215);
  brush.beginShape(0.4);
  brush.vertex(100, 325); brush.vertex(135, 300); brush.vertex(142, 312); brush.vertex(104, 342);
  brush.endShape(true);

  // meadow flowers
  let fl = [[30, 520], [140, 470], [530, 500], [560, 410], [480, 560], [90, 580], [510, 340], [40, 400]];
  for (let f of fl) {
    brush.fill("#8a6ac8", 210);
    brush.circle(f[0], f[1], 10, 0.5);
  }

  // big child, waist up, arms flung upward
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.fill("#2e62b0", 230);
  brush.beginShape(0.4);
  brush.vertex(215, 360); brush.vertex(300, 340); brush.vertex(395, 360); brush.vertex(430, 470);
  brush.vertex(445, 620); brush.vertex(175, 620); brush.vertex(185, 470);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(225, 375); brush.vertex(180, 290); brush.vertex(150, 190); brush.vertex(195, 175); brush.vertex(225, 275); brush.vertex(275, 355);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(345, 355); brush.vertex(395, 275); brush.vertex(420, 175); brush.vertex(465, 190); brush.vertex(438, 290); brush.vertex(390, 380);
  brush.endShape(true);
  // stripes on shirt
  brush.fill("#1a3a80", 190);
  brush.beginShape(0.3);
  brush.vertex(345, 370); brush.vertex(400, 370); brush.vertex(430, 470); brush.vertex(445, 620); brush.vertex(360, 620);
  brush.endShape(true);
  brush.fill("#6a9ad8", 170);
  brush.beginShape(0.3);
  brush.vertex(190, 450); brush.vertex(420, 450); brush.vertex(425, 480); brush.vertex(188, 482);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(182, 530); brush.vertex(432, 530); brush.vertex(436, 560); brush.vertex(180, 562);
  brush.endShape(true);
  // hands
  brush.fill("#e09a80", 235);
  brush.circle(170, 170, 22, 0.3);
  brush.circle(445, 170, 22, 0.3);
  // neck, face, shading
  brush.fill("#eaa890", 235);
  brush.beginShape(0.3);
  brush.vertex(285, 320); brush.vertex(325, 320); brush.vertex(328, 360); brush.vertex(282, 360);
  brush.endShape(true);
  brush.circle(305, 265, 68, 0.12);
  brush.fill("#c07868", 170);
  brush.circle(330, 280, 38, 0.3);
  // hair, dark and tousled
  brush.fill("#4a2a1a", 235);
  brush.beginShape(0.5);
  brush.vertex(236, 270); brush.vertex(240, 215); brush.vertex(300, 188); brush.vertex(360, 205);
  brush.vertex(376, 262); brush.vertex(352, 232); brush.vertex(300, 228); brush.vertex(256, 245);
  brush.endShape(true);
  brush.fill("#2a1810", 200);
  brush.circle(300, 205, 28, 0.5);
  // features
  brush.fill("#e0707a", 190);
  brush.circle(272, 290, 11, 0.3);
  brush.circle(340, 290, 11, 0.3);
  brush.fill("#1a1a30", 230);
  brush.circle(282, 265, 5, 0.1);
  brush.circle(328, 265, 5, 0.1);
  brush.fill("#a03a4a", 220);
  brush.circle(305, 300, 9, 0.3);
}
