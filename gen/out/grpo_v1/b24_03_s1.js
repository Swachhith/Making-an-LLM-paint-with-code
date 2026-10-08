async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8e2d4");
  brush.noStroke();
  // dusky sky: warm violet fading to orange near the horizon
  brush.fill("#b88fb8", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 300); brush.vertex(400, 320); brush.vertex(0, 300);
  brush.endShape(true);
  brush.fill("#f2a86a", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(0, 300); brush.vertex(600, 300); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  // silhouettes of distant hills
  brush.fill("#8a6a5a", 170);
  brush.fillBleed(0.2);
  brush.beginShape(0.6);
  brush.vertex(0, 520); brush.vertex(150, 470); brush.vertex(300, 500); brush.vertex(450, 460); brush.vertex(600, 520); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  // the baobab: huge bulbous trunk, then a crown of wide drooping branches
  let x = 300, y = 470;
  brush.fill("#7a6a50", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(x - 30, y); brush.vertex(x + 30, y); brush.vertex(x + 28, y + 220); brush.vertex(x + 12, y + 220); brush.vertex(x - 20, y + 220);
  brush.endShape(true);
  // crown: wide soft mass, two passes
  brush.fill("#5a4a38", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(x - 150, y - 40); brush.vertex(x - 100, y - 140); brush.vertex(x - 60, y - 170); brush.vertex(x - 30, y - 140); brush.vertex(x + 10, y - 170); brush.vertex(x + 40, y - 140); brush.vertex(x + 70, y - 170); brush.vertex(x + 100, y - 140); brush.vertex(x + 130, y - 170); brush.vertex(x + 160, y - 140); brush.vertex(x + 150, y);
  brush.endShape(true);
  brush.fill("#4a3a28", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(x - 130, y - 30); brush.vertex(x - 80, y - 110); brush.vertex(x - 40, y - 150); brush.vertex(x - 10, y - 120); brush.vertex(x + 20, y - 150); brush.vertex(x + 50, y - 110); brush.vertex(x + 100, y - 30); brush.vertex(x + 80, y - 60); brush.vertex(x + 40, y - 100); brush.vertex(x + 10, y - 70); brush.vertex(x - 30, y - 100); brush.vertex(x - 60, y - 60);
  brush.endShape(true);
  // a few branches reaching toward the sky
  brush.fill("#4a3a28", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(x - 20, y - 60); brush.vertex(x - 80, y - 120); brush.vertex(x - 120, y - 150); brush.vertex(x - 130, y - 120); brush.vertex(x - 20, y - 80);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(x + 20, y - 60); brush.vertex(x + 90, y - 120); brush.vertex(x + 140, y - 150); brush.vertex(x + 130, y - 120); brush.vertex(x + 20, y - 80);
  brush.endShape(true);
  // ground: warm ochre, soft
  brush.fill("#c9a87a", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(0, 600); brush.vertex(600, 600); brush.vertex(600, 520); brush.vertex(0, 520);
  brush.endShape(true);
  // a couple of small shrubs at the base
  brush.fill("#5a4a38", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(120, 580); brush.vertex(160, 530); brush.vertex(200, 580); brush.vertex(200, 600); brush.vertex(120, 600);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(420, 590); brush.vertex(460, 540); brush.vertex(500, 590); brush.vertex(500, 600); brush.vertex(420, 600);
  brush.endShape(true);
  // a few warm stars
  brush.fill("#f2c07a", 240);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.3);
  brush.circle(120, 100, 2, 0.3);
  brush.circle(260, 130, 2, 0.3);
  brush.circle(380, 90, 2, 0.3);
  brush.circle(500, 110, 2, 0.3);
}
