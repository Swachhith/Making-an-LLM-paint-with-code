async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f8eed6");
  randomSeed(101);
  brush.noStroke();
  brush.fill("#f8c050", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.9); brush.vertex(0, 330); brush.vertex(300, 300); brush.vertex(600, 340); brush.vertex(600, 600); brush.vertex(0, 600); brush.endShape(true);
  brush.fill("#e08830", 190);
  brush.beginShape(0.9); brush.vertex(0, 450); brush.vertex(300, 430); brush.vertex(600, 455); brush.vertex(600, 600); brush.vertex(0, 600); brush.endShape(true);
  brush.fill("#6a3018", 190);
  brush.beginShape(0.9); brush.vertex(350, 520); brush.vertex(540, 512); brush.vertex(565, 550); brush.vertex(330, 553); brush.endShape(true);
  // pot, larger
  brush.fill("#e0501a", 235); brush.fillBleed(0.25);
  brush.beginShape(0.3); brush.vertex(385, 440); brush.vertex(505, 440); brush.vertex(488, 525); brush.vertex(402, 525); brush.endShape(true);
  brush.fill("#a02a10", 225);
  brush.beginShape(0.3); brush.vertex(450, 440); brush.vertex(505, 440); brush.vertex(488, 525); brush.vertex(450, 525); brush.endShape(true);
  brush.fill("#f08040", 235);
  brush.beginShape(0.3); brush.vertex(378, 422); brush.vertex(512, 422); brush.vertex(512, 448); brush.vertex(378, 448); brush.endShape(true);
  brush.fill("#2a1608", 240);
  brush.beginShape(0.3); brush.vertex(436, 428); brush.vertex(456, 428); brush.vertex(462, 350); brush.vertex(444, 345); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(448, 370); brush.vertex(405, 330); brush.vertex(420, 315); brush.vertex(458, 355); brush.endShape(true);
  brush.beginShape(0.3); brush.vertex(452, 365); brush.vertex(500, 320); brush.vertex(512, 335); brush.vertex(462, 380); brush.endShape(true);
  // crown: dark layered
  brush.fill("#3a2a0e", 215); brush.fillBleed(0.3);
  brush.circle(450, 300, 62, 0.7); brush.circle(405, 325, 38, 0.7); brush.circle(500, 322, 38, 0.7);
  brush.fill("#6a5412", 215);
  brush.circle(440, 295, 40, 0.7); brush.circle(475, 310, 32, 0.7); brush.circle(410, 320, 28, 0.7);
  brush.fill("#f0a808", 250); brush.fillBleed(0.2);
  [[425,295],[470,320],[452,265],[420,335],[492,288],[505,330],[400,310]].forEach(function (l) { brush.circle(l[0], l[1], 10, 0.3); });
  brush.fill("#2a1608", 215);
  brush.beginShape(0.5); brush.vertex(30, 556); brush.vertex(300, 550); brush.vertex(580, 556); brush.vertex(580, 572); brush.vertex(30, 574); brush.endShape(true);
}
