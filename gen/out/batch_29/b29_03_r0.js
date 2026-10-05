async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4ead8");
  brush.noStroke();
  brush.fillBleed(0.28);
  brush.fillTexture(0.4, 0.4);
  // warm wash behind left
  brush.fill("#e8a838", 170);
  brush.beginShape(0.7);
  brush.vertex(20, 60); brush.vertex(330, 90); brush.vertex(300, 560); brush.vertex(40, 580);
  brush.endShape(true);
  // floor shadow
  brush.fill("#2a1a18", 170);
  brush.beginShape(0.7);
  brush.vertex(60, 540); brush.vertex(330, 535); brush.vertex(350, 575); brush.vertex(80, 585);
  brush.endShape(true);
  // dress skirt, flared
  brush.fill("#b8141c", 210);
  brush.beginShape(0.6);
  brush.vertex(170, 300); brush.vertex(230, 300); brush.vertex(310, 430); brush.vertex(290, 540); brush.vertex(190, 520); brush.vertex(90, 545); brush.vertex(70, 460);
  brush.endShape(true);
  brush.fill("#d82a20", 190);
  brush.beginShape(0.6);
  brush.vertex(185, 330); brush.vertex(225, 330); brush.vertex(285, 450); brush.vertex(250, 520); brush.vertex(150, 500); brush.vertex(100, 470);
  brush.endShape(true);
  brush.fill("#7a0a12", 180);
  brush.beginShape(0.6);
  brush.vertex(190, 400); brush.vertex(230, 420); brush.vertex(200, 520); brush.vertex(160, 500);
  brush.endShape(true);
  // bodice
  brush.fill("#a8101a", 210);
  brush.beginShape(0.5);
  brush.vertex(175, 215); brush.vertex(225, 215); brush.vertex(232, 305); brush.vertex(168, 305);
  brush.endShape(true);
  // arms raised
  brush.fill("#e8a838", 200);
  brush.beginShape(0.5);
  brush.vertex(225, 220); brush.vertex(262, 150); brush.vertex(285, 160); brush.vertex(245, 245);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(172, 222); brush.vertex(130, 180); brush.vertex(145, 160); brush.vertex(190, 205);
  brush.endShape(true);
  // head, hair bun
  brush.fill("#e8a838", 210);
  brush.circle(200, 185, 22, 0.6);
  brush.fill("#1a1210", 230);
  brush.circle(200, 168, 20, 0.8);
  brush.circle(222, 162, 14, 0.8);
  // legs
  brush.fill("#1a1210", 200);
  brush.beginShape(0.3);
  brush.vertex(150, 520); brush.vertex(180, 520); brush.vertex(172, 560); brush.vertex(140, 562);
  brush.endShape(true);
}
