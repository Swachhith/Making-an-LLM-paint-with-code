async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2e6d2");
  brush.noStroke();
  // sky: two warm passes
  brush.fill("#f08418", 230); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 340); brush.vertex(-10, 340);
  brush.endShape(true);
  brush.fill("#c8201e", 215); brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 150); brush.vertex(420, 200); brush.vertex(150, 175); brush.vertex(-10, 220);
  brush.endShape(true);
  brush.fill("#a81818", 200);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 60); brush.vertex(300, 100); brush.vertex(-10, 80);
  brush.endShape(true);
  // sun halo (paper kept inside by painting ring-ish washes around)
  brush.fill("#f8a020", 200); brush.fillBleed(0.3);
  brush.circle(420, 292, 62, 0.5);
  brush.fill("#f2e6d2", 255);
  brush.circle(420, 296, 26, 0.3);
  // frozen lake, warm reflection
  brush.fill("#d83a1e", 215); brush.fillBleed(0.3); brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-10, 340); brush.vertex(610, 340); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#f08418", 225);
  brush.beginShape(0.5);
  brush.vertex(370, 345); brush.vertex(480, 345); brush.vertex(540, 470); brush.vertex(500, 610); brush.vertex(280, 610); brush.vertex(310, 470);
  brush.endShape(true);
  brush.fill("#f8b040", 210);
  brush.beginShape(0.5);
  brush.vertex(400, 350); brush.vertex(450, 350); brush.vertex(480, 450); brush.vertex(380, 450);
  brush.endShape(true);
  // ice cracks, dark
  brush.fill("#2a1428", 215); brush.fillBleed(0.15);
  brush.beginShape(0.3);
  brush.vertex(20, 410); brush.vertex(250, 385); brush.vertex(260, 410); brush.vertex(40, 440);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(300, 520); brush.vertex(520, 470); brush.vertex(580, 480); brush.vertex(330, 550);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(120, 520); brush.vertex(220, 490); brush.vertex(230, 515); brush.vertex(140, 550);
  brush.endShape(true);
  // far shore with pines, two passes
  brush.fill("#2a1428", 230); brush.fillBleed(0.2);
  brush.beginShape(0.6);
  brush.vertex(-10, 340); brush.vertex(60, 312); brush.vertex(190, 322); brush.vertex(300, 336); brush.vertex(520, 332); brush.vertex(610, 310); brush.vertex(610, 352); brush.vertex(-10, 356);
  brush.endShape(true);
  brush.fill("#1a0c1c", 235);
  brush.beginShape(0.2);
  brush.vertex(60, 330); brush.vertex(95, 240); brush.vertex(130, 330);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(120, 332); brush.vertex(148, 268); brush.vertex(176, 332);
  brush.endShape(true);
  brush.beginShape(0.2);
  brush.vertex(530, 325); brush.vertex(565, 245); brush.vertex(600, 325);
  brush.endShape(true);
  // foreground snowy shadow bank
  brush.fill("#2a1428", 210);
  brush.beginShape(0.5);
  brush.vertex(-10, 610); brush.vertex(-10, 530); brush.vertex(80, 565); brush.vertex(170, 610);
  brush.endShape(true);
}
