async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4e8d6");
  brush.noStroke();
  // sky wash
  brush.fill("#f09a3a", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 330); brush.vertex(-10, 330);
  brush.endShape(true);
  brush.fill("#d8402e", 170); brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 170); brush.vertex(300, 210); brush.vertex(-10, 150);
  brush.endShape(true);
  // sun glow left unpainted: paper circle area, painted around
  brush.fill("#e8602a", 150); brush.fillBleed(0.3);
  brush.circle(400, 290, 70, 0.5);
  // lake
  brush.fill("#e0502e", 180); brush.fillBleed(0.3); brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-10, 335); brush.vertex(610, 335); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#f09a3a", 170);
  brush.beginShape(0.5);
  brush.vertex(330, 340); brush.vertex(470, 340); brush.vertex(500, 520); brush.vertex(300, 520);
  brush.endShape(true);
  // ice cracks as soft pale-dark shapes
  brush.fill("#2a2230", 150); brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(40, 420); brush.vertex(240, 400); brush.vertex(250, 420); brush.vertex(60, 445);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(380, 480); brush.vertex(580, 450); brush.vertex(585, 472); brush.vertex(400, 505);
  brush.endShape(true);
  // far shore dark band
  brush.fill("#2a2230", 210); brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(-10, 335); brush.vertex(80, 315); brush.vertex(180, 322); brush.vertex(290, 332); brush.vertex(520, 330);
  brush.vertex(610, 312); brush.vertex(610, 345); brush.vertex(-10, 350);
  brush.endShape(true);
  brush.fill("#2a2230", 220);
  // pine silhouettes on shore
  brush.beginShape(0.2);
  brush.vertex(70, 325); brush.vertex(95, 250); brush.vertex(120, 325);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(110, 328); brush.vertex(128, 275); brush.vertex(150, 328);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(540, 322); brush.vertex(565, 255); brush.vertex(590, 322);
  brush.endShape(true);
  // foreground dark reeds in ice
  brush.fill("#2a2230", 190);
  brush.beginShape(0.3);
  brush.vertex(-10, 610); brush.vertex(-10, 520); brush.vertex(80, 560); brush.vertex(160, 610);
  brush.endShape(true);
}
