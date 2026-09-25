async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8dfd2");
  brush.noStroke();
  // a single tulip cup filling the canvas; three back petals then three front
  // back petals: dusty mauve, darker
  brush.fill("#b98a86", 185);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.5);
  brush.beginShape(0.85);
  brush.vertex(300, 540); brush.vertex(110, 420); brush.vertex(70, 200);
  brush.vertex(150, 50); brush.vertex(300, 110); brush.vertex(450, 45);
  brush.vertex(535, 200); brush.vertex(490, 420);
  brush.endShape(true);
  // left front petal
  brush.fill("#e2b6ad", 205);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.85);
  brush.vertex(300, 560); brush.vertex(140, 470); brush.vertex(90, 300);
  brush.vertex(120, 140); brush.vertex(200, 100); brush.vertex(260, 220); brush.vertex(290, 400);
  brush.endShape(true);
  // right front petal
  brush.fill("#dcaba3", 205);
  brush.beginShape(0.85);
  brush.vertex(300, 560); brush.vertex(460, 470); brush.vertex(515, 300);
  brush.vertex(485, 140); brush.vertex(400, 100); brush.vertex(340, 220); brush.vertex(310, 400);
  brush.endShape(true);
  // centre front petal overlapping both
  brush.fill("#ecc4bb", 215);
  brush.fillBleed(0.2);
  brush.beginShape(0.9);
  brush.vertex(300, 565); brush.vertex(210, 460); brush.vertex(190, 280);
  brush.vertex(235, 140); brush.vertex(300, 95); brush.vertex(365, 140);
  brush.vertex(410, 280); brush.vertex(390, 460);
  brush.endShape(true);
  // earthy shadows pooling where petals overlap
  brush.fill("#9c706a", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(215, 450); brush.vertex(195, 300); brush.vertex(225, 380); brush.vertex(250, 520);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(385, 450); brush.vertex(405, 300); brush.vertex(375, 380); brush.vertex(350, 520);
  brush.endShape(true);
  // ochre warmth at the base
  brush.fill("#c9a066", 170);
  brush.fillBleed(0.35);
  brush.beginShape(0.8);
  brush.vertex(240, 520); brush.vertex(300, 470); brush.vertex(360, 520); brush.vertex(300, 575);
  brush.endShape(true);
  // pale highlight streak on the centre petal, paper nearly
  brush.fill("#f5e4dc", 190);
  brush.fillBleed(0.15);
  brush.beginShape(0.9);
  brush.vertex(280, 180); brush.vertex(300, 130); brush.vertex(318, 200); brush.vertex(300, 330);
  brush.endShape(true);
}
