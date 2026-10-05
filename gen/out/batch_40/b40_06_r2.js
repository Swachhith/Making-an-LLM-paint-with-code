async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#14101c");
  brush.noStroke();
  // sky: warm bands, brightest near horizon, two passes
  brush.fill("#ffa020", 240); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, 160); brush.vertex(610, 150); brush.vertex(610, 360); brush.vertex(-10, 360);
  brush.endShape(true);
  brush.fill("#f04a20", 235);
  brush.beginShape(0.5);
  brush.vertex(-10, 30); brush.vertex(610, 20); brush.vertex(610, 250); brush.vertex(300, 290); brush.vertex(-10, 260);
  brush.endShape(true);
  brush.fill("#f8a828", 215);
  brush.beginShape(0.5);
  brush.vertex(-10, 250); brush.vertex(610, 240); brush.vertex(610, 360); brush.vertex(-10, 360);
  brush.endShape(true);
  // moon halo + moon
  brush.fill("#f8c850", 215);
  brush.circle(390, 262, 74, 0.4);
  brush.fill("#fff0c0", 255); brush.fillBleed(0.1);
  brush.circle(390, 262, 36, 0.2);
  // cloud streaks, dark
  brush.fill("#3a1428", 200);
  brush.beginShape(0.7);
  brush.vertex(40, 150); brush.vertex(220, 125); brush.vertex(300, 155); brush.vertex(160, 185);
  brush.endShape(true);
  brush.fill("#3a1428", 190);
  brush.beginShape(0.7);
  brush.vertex(40, 150); brush.vertex(220, 125); brush.vertex(300, 155); brush.vertex(160, 185);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(430, 100); brush.vertex(590, 90); brush.vertex(600, 130); brush.vertex(450, 140);
  brush.endShape(true);
  brush.fill("#3a1428", 190);
  brush.beginShape(0.7);
  brush.vertex(430, 100); brush.vertex(590, 90); brush.vertex(600, 130); brush.vertex(450, 140);
  brush.endShape(true);
  // sea dark, two passes
  brush.fill("#2a1830", 235); brush.fillBleed(0.25);
  brush.beginShape(0.4);
  brush.vertex(-10, 345); brush.vertex(610, 345); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#2a1830", 225);
  brush.beginShape(0.4);
  brush.vertex(-10, 345); brush.vertex(610, 345); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#d8701c", 220);
  brush.beginShape(0.5);
  brush.vertex(350, 350); brush.vertex(430, 350); brush.vertex(470, 450); brush.vertex(310, 450);
  brush.endShape(true);
  brush.fill("#f8b040", 215);
  brush.beginShape(0.5);
  brush.vertex(370, 355); brush.vertex(410, 355); brush.vertex(425, 420); brush.vertex(355, 420);
  brush.endShape(true);
  brush.fill("#d8701c", 200);
  brush.beginShape(0.5);
  brush.vertex(380, 450); brush.vertex(450, 450); brush.vertex(490, 560); brush.vertex(340, 560);
  brush.endShape(true);
  // wave dark strokes across moon path
  brush.fill("#14101c", 220);
  brush.beginShape(0.3);
  brush.vertex(320, 435); brush.vertex(470, 430); brush.vertex(470, 452); brush.vertex(330, 458);
  brush.endShape(true);
  brush.fill("#14101c", 210);
  brush.beginShape(0.3);
  brush.vertex(320, 435); brush.vertex(470, 430); brush.vertex(470, 452); brush.vertex(330, 458);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(340, 500); brush.vertex(480, 495); brush.vertex(480, 518); brush.vertex(350, 524);
  brush.endShape(true);
  brush.fill("#14101c", 210);
  brush.beginShape(0.3);
  brush.vertex(340, 500); brush.vertex(480, 495); brush.vertex(480, 518); brush.vertex(350, 524);
  brush.endShape(true);
  // headland with pines (silhouette)
  brush.fill("#0a0810", 245); brush.fillBleed(0.15);
  brush.beginShape(0.4);
  brush.vertex(-10, 335); brush.vertex(50, 300); brush.vertex(150, 335); brush.vertex(260, 348); brush.vertex(210, 405); brush.vertex(110, 425); brush.vertex(-10, 460);
  brush.endShape(true);
  brush.fill("#0a0810", 235);
  brush.beginShape(0.4);
  brush.vertex(-10, 335); brush.vertex(50, 300); brush.vertex(150, 335); brush.vertex(260, 348); brush.vertex(210, 405); brush.vertex(110, 425); brush.vertex(-10, 460);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(30, 315); brush.vertex(68, 190); brush.vertex(106, 315);
  brush.endShape(true);
  brush.fill("#0a0810", 235);
  brush.beginShape(0.2);
  brush.vertex(30, 315); brush.vertex(68, 190); brush.vertex(106, 315);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(85, 325); brush.vertex(125, 235); brush.vertex(165, 335);
  brush.endShape(true);
  brush.fill("#0a0810", 235);
  brush.beginShape(0.2);
  brush.vertex(85, 325); brush.vertex(125, 235); brush.vertex(165, 335);
  brush.endShape(true);
  // sailboat
  brush.beginShape(0.2);
  brush.vertex(505, 342); brush.vertex(535, 290); brush.vertex(550, 342);
  brush.endShape(true);
  brush.fill("#0a0810", 235);
  brush.beginShape(0.2);
  brush.vertex(505, 342); brush.vertex(535, 290); brush.vertex(550, 342);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(490, 342); brush.vertex(560, 342); brush.vertex(542, 365); brush.vertex(508, 365);
  brush.endShape(true);
  brush.fill("#0a0810", 235);
  brush.beginShape(0.3);
  brush.vertex(490, 342); brush.vertex(560, 342); brush.vertex(542, 365); brush.vertex(508, 365);
  brush.endShape(true);
  // foreground rock
  brush.beginShape(0.4);
  brush.vertex(500, 610); brush.vertex(525, 520); brush.vertex(600, 495); brush.vertex(610, 610);
  brush.endShape(true);
  brush.fill("#0a0810", 235);
  brush.beginShape(0.4);
  brush.vertex(500, 610); brush.vertex(525, 520); brush.vertex(600, 495); brush.vertex(610, 610);
  brush.endShape(true);
}
