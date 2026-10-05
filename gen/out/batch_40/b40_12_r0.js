async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6ecd8");
  brush.noStroke();
  // big sky, low horizon at 440
  brush.fill("#f09020", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 450); brush.vertex(-10, 450);
  brush.endShape(true);
  brush.fill("#d02a30", 190);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 250); brush.vertex(300, 300); brush.vertex(-10, 230);
  brush.endShape(true);
  brush.fill("#4a1a5a", 190);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 90); brush.vertex(-10, 120);
  brush.endShape(true);
  // cloud bars deep
  brush.fill("#5a1a4a", 190);
  brush.beginShape(0.7);
  brush.vertex(20, 280); brush.vertex(200, 255); brush.vertex(330, 280); brush.vertex(180, 305);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(380, 330); brush.vertex(520, 310); brush.vertex(600, 335); brush.vertex(480, 355);
  brush.endShape(true);
  // sun glow
  brush.fill("#ffd060", 220);
  brush.circle(180, 400, 34, 0.3);
  // sea
  brush.fill("#6a1a40", 215); brush.fillBleed(0.25);
  brush.beginShape(0.4);
  brush.vertex(-10, 450); brush.vertex(610, 450); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#f08020", 190);
  brush.beginShape(0.5);
  brush.vertex(130, 455); brush.vertex(230, 455); brush.vertex(250, 600); brush.vertex(110, 600);
  brush.endShape(true);
  // rocks and lighthouse silhouette right
  brush.fill("#14081a", 235); brush.fillBleed(0.15);
  brush.beginShape(0.3);
  brush.vertex(400, 460); brush.vertex(430, 440); brush.vertex(470, 445); brush.vertex(520, 430); brush.vertex(610, 450); brush.vertex(610, 530); brush.vertex(400, 520);
  brush.endShape(true);
  brush.beginShape(0.1);
  brush.vertex(455, 445); brush.vertex(470, 250); brush.vertex(500, 250); brush.vertex(515, 445);
  brush.endShape(true);
  brush.beginShape(0.1);
  brush.vertex(462, 250); brush.vertex(462, 215); brush.vertex(508, 215); brush.vertex(508, 250);
  brush.endShape(true);
  brush.beginShape(0.1);
  brush.vertex(460, 215); brush.vertex(485, 180); brush.vertex(510, 215);
  brush.endShape(true);
  // lantern room lit
  brush.fill("#ffd060", 240);
  brush.beginShape(0.2);
  brush.vertex(472, 245); brush.vertex(472, 222); brush.vertex(498, 222); brush.vertex(498, 245);
  brush.endShape(true);
  // stripe light band on tower
  brush.fill("#d02a30", 190);
  brush.beginShape(0.1);
  brush.vertex(460, 380); brush.vertex(508, 380); brush.vertex(512, 410); brush.vertex(457, 410);
  brush.endShape(true);
  // birds
  brush.fill("#14081a", 220);
  brush.beginShape(0.4);
  brush.vertex(300, 180); brush.vertex(320, 168); brush.vertex(340, 182); brush.vertex(320, 178);
  brush.endShape(true);
}
