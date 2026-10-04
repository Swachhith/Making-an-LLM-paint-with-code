async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf4e8");
  brush.noStroke();

  // splashy sky blooms
  brush.fill("#f6b24a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.6);
  brush.circle(420, 200, 220, 0.9);
  brush.fill("#e86a6a", 170);
  brush.circle(150, 140, 170, 0.9);
  brush.fill("#8fb0e0", 160);
  brush.circle(80, 330, 120, 0.9);
  brush.fill("#f6b24a", 150);
  brush.beginShape(0.4);
  brush.vertex(470, 380); brush.vertex(490, 380); brush.vertex(486, 450); brush.vertex(480, 458); brush.vertex(474, 450);
  brush.endShape(true);

  // low hill / road horizon
  brush.fill("#5a7a3a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 450); brush.vertex(200, 430); brush.vertex(420, 445); brush.vertex(620, 425); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // road
  brush.fill("#c8a878", 200);
  brush.beginShape(0.4);
  brush.vertex(-20, 470); brush.vertex(620, 455); brush.vertex(620, 495); brush.vertex(-20, 510);
  brush.endShape(true);

  const D = "#2a1f2e";
  // cyclist silhouette on the road, centred slightly left
  brush.fill(D, 235);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.4);
  // wheels as rings: dark circle with pale centre not possible; use dark discs with sky-coloured inner
  brush.circle(230, 440, 36, 0.2);
  brush.circle(340, 440, 36, 0.2);
  brush.fill("#f6b24a", 230);
  brush.circle(230, 440, 26, 0.15);
  brush.circle(340, 440, 26, 0.15);
  // frame
  brush.fill(D, 235);
  brush.beginShape(0.1);
  brush.vertex(230, 440); brush.vertex(270, 385); brush.vertex(330, 385); brush.vertex(345, 440); brush.vertex(330, 440); brush.vertex(320, 400); brush.vertex(278, 400); brush.vertex(245, 442);
  brush.endShape(true);
  // rider body
  brush.beginShape(0.4);
  brush.vertex(268, 390); brush.vertex(290, 330); brush.vertex(320, 315); brush.vertex(335, 330); brush.vertex(325, 345); brush.vertex(302, 350); brush.vertex(288, 395);
  brush.endShape(true);
  // arm
  brush.beginShape(0.4);
  brush.vertex(318, 322); brush.vertex(345, 360); brush.vertex(338, 372); brush.vertex(310, 340);
  brush.endShape(true);
  // leg
  brush.beginShape(0.4);
  brush.vertex(275, 385); brush.vertex(310, 400); brush.vertex(300, 440); brush.vertex(285, 438); brush.vertex(292, 408); brush.vertex(270, 398);
  brush.endShape(true);
  // head
  brush.circle(330, 302, 15, 0.2);

  // splatters
  brush.fill("#e86a6a", 200);
  const sp = [[500,90],[540,130],[60,60],[380,90],[560,300],[110,420]];
  for (const s of sp) brush.circle(s[0], s[1], 6, 0.8);
}
