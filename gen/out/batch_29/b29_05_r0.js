async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#14181e");
  brush.noStroke();
  brush.fillBleed(0.28);
  brush.fillTexture(0.4, 0.4);
  brush.fill("#e87a38", 200);
  brush.beginShape(0.6);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 420); brush.vertex(0, 420);
  brush.endShape(true);
  brush.fill("#f8c070", 190);
  brush.beginShape(0.6);
  brush.vertex(0, 180); brush.vertex(600, 220); brush.vertex(600, 420); brush.vertex(0, 420);
  brush.endShape(true);
  brush.fill("#8a4a7a", 170);
  brush.beginShape(0.6);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 100); brush.vertex(0, 80);
  brush.endShape(true);
  // distant ridge
  brush.fill("#4a4a68", 200);
  brush.beginShape(0.5);
  brush.vertex(0, 420); brush.vertex(0, 330); brush.vertex(80, 290); brush.vertex(160, 340); brush.vertex(230, 420);
  brush.endShape(true);
  // big cliff peak, off-centre right
  brush.fill("#23262e", 230);
  brush.beginShape(0.4);
  brush.vertex(260, 600); brush.vertex(300, 380); brush.vertex(380, 190); brush.vertex(430, 60); brush.vertex(500, 100); brush.vertex(600, 160); brush.vertex(600, 600);
  brush.endShape(true);
  brush.fill("#3a3e4a", 200);
  brush.beginShape(0.4);
  brush.vertex(330, 600); brush.vertex(360, 400); brush.vertex(420, 240); brush.vertex(440, 90); brush.vertex(490, 120); brush.vertex(470, 340); brush.vertex(500, 600);
  brush.endShape(true);
  // lit edge
  brush.fill("#c8683a", 170);
  brush.beginShape(0.4);
  brush.vertex(380, 195); brush.vertex(430, 65); brush.vertex(448, 85); brush.vertex(405, 230);
  brush.endShape(true);
  // waterfall (paper-pale on dark: pale blue-white)
  brush.fill("#d8e8f0", 235);
  brush.beginShape(0.3);
  brush.vertex(425, 210); brush.vertex(450, 210); brush.vertex(462, 480); brush.vertex(418, 480);
  brush.endShape(true);
  brush.fill("#f0f6fa", 210);
  brush.beginShape(0.3);
  brush.vertex(432, 220); brush.vertex(444, 220); brush.vertex(450, 470); brush.vertex(430, 470);
  brush.endShape(true);
  // mist pool
  brush.fill("#b8cce0", 190);
  brush.circle(440, 495, 38, 1.4);
  brush.fill("#1a2230", 220);
  brush.beginShape(0.5);
  brush.vertex(0, 520); brush.vertex(300, 500); brush.vertex(600, 530); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
}
