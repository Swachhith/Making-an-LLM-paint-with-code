async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1ede8");
  brush.noStroke();
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  // sky
  brush.fill("#e8602a", 200);
  brush.beginShape(0.6);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 300); brush.vertex(0, 300);
  brush.endShape(true);
  brush.fill("#f0a040", 190);
  brush.beginShape(0.6);
  brush.vertex(0, 150); brush.vertex(600, 170); brush.vertex(600, 300); brush.vertex(0, 300);
  brush.endShape(true);
  brush.fill("#5a2a6a", 190);
  brush.beginShape(0.6);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 90); brush.vertex(0, 100);
  brush.endShape(true);
  // mirrored sky on flat
  brush.fill("#e8602a", 170);
  brush.beginShape(0.6);
  brush.vertex(0, 300); brush.vertex(600, 300); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  brush.fill("#f0a040", 190);
  brush.beginShape(0.6);
  brush.vertex(0, 305); brush.vertex(600, 305); brush.vertex(600, 420); brush.vertex(0, 440);
  brush.endShape(true);
  brush.fill("#5a2a6a", 190);
  brush.beginShape(0.6);
  brush.vertex(0, 520); brush.vertex(600, 510); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  // river path converging
  brush.fill("#2a1a3a", 200);
  brush.beginShape(0.4);
  brush.vertex(285, 300); brush.vertex(318, 300); brush.vertex(520, 600); brush.vertex(60, 600);
  brush.endShape(true);
  brush.fill("#f0a040", 150);
  brush.beginShape(0.4);
  brush.vertex(295, 305); brush.vertex(312, 305); brush.vertex(420, 600); brush.vertex(190, 600);
  brush.endShape(true);
  // silhouettes: far hills
  brush.fill("#1c1028", 220);
  brush.beginShape(0.5);
  brush.vertex(0, 300); brush.vertex(0, 268); brush.vertex(110, 282); brush.vertex(230, 292); brush.vertex(285, 300);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(320, 300); brush.vertex(400, 285); brush.vertex(500, 270); brush.vertex(600, 262); brush.vertex(600, 300);
  brush.endShape(true);
  // lone figure and post
  brush.fill("#120a1c", 230);
  brush.beginShape(0.3);
  brush.vertex(430, 520); brush.vertex(445, 440); brush.vertex(462, 440); brush.vertex(480, 520);
  brush.endShape(true);
  brush.circle(453, 425, 14, 0.5);
}
