async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f8f3e8");
  brush.noStroke();

  // bold cobalt sky
  brush.fill("#1f6fd0", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.4);
  brush.beginShape(0.7);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 250); brush.vertex(0, 260);
  brush.endShape(true);

  // far tree line
  brush.fill("#2e8a3a", 210);
  brush.beginShape(0.9);
  brush.vertex(0, 250); brush.vertex(80, 215); brush.vertex(170, 235); brush.vertex(260, 205);
  brush.vertex(380, 230); brush.vertex(480, 210); brush.vertex(600, 235); brush.vertex(600, 280); brush.vertex(0, 280);
  brush.endShape(true);
  // tow-path banks converging, lime green
  brush.fill("#7cc62a", 210);
  brush.beginShape(0.3);
  brush.vertex(0, 275); brush.vertex(260, 275); brush.vertex(0, 470);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(340, 275); brush.vertex(600, 275); brush.vertex(600, 480);
  brush.endShape(true);

  // canal: deep teal wedge running to the horizon
  brush.fill("#0e8a8a", 220);
  brush.fillBleed(0.25);
  brush.beginShape(0.2);
  brush.vertex(255, 278); brush.vertex(345, 278); brush.vertex(600, 520); brush.vertex(600, 600); brush.vertex(0, 600); brush.vertex(0, 480);
  brush.endShape(true);
  brush.fill("#0a4f6e", 180);
  brush.beginShape(0.6);
  brush.vertex(120, 520); brush.vertex(480, 520); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);

  // houseboat, small, mid-distance on the right bank
  // hull
  brush.fill("#d11f2e", 235);
  brush.fillBleed(0.15);
  brush.beginShape(0.15);
  brush.vertex(330, 345); brush.vertex(430, 355); brush.vertex(425, 372); brush.vertex(335, 364);
  brush.endShape(true);
  // cabin
  brush.fill("#f5c400", 235);
  brush.beginShape(0.1);
  brush.vertex(345, 325); brush.vertex(415, 332); brush.vertex(414, 354); brush.vertex(344, 346);
  brush.endShape(true);
  brush.fill("#1a2a6a", 230);
  brush.beginShape(0.1);
  brush.vertex(340, 318); brush.vertex(420, 326); brush.vertex(418, 334); brush.vertex(340, 326);
  brush.endShape(true);
  brush.circle(362, 338, 3, 0.2);
  brush.circle(382, 340, 3, 0.2);
  brush.circle(402, 342, 3, 0.2);
  // reflection
  brush.fill("#b01a3a", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(335, 370); brush.vertex(425, 377); brush.vertex(420, 400); brush.vertex(340, 395);
  brush.endShape(true);

  // a big willow on the left bank to anchor the wide scene
  brush.fill("#2e8a3a", 210);
  brush.fillBleed(0.3);
  brush.circle(90, 230, 80, 0.7);
  brush.fill("#145a2a", 190);
  brush.circle(110, 260, 50, 0.6);
  brush.fill("#4a2a14", 230);
  brush.beginShape(0.3);
  brush.vertex(96, 270); brush.vertex(114, 270); brush.vertex(118, 340); brush.vertex(94, 340);
  brush.endShape(true);
}
