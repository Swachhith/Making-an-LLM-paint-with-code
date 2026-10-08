async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6efe2");
  randomSeed(2025);
  brush.noStroke();

  // bold sky: violet near the sun, orange elsewhere
  brush.fill("#7a2fd0", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.4);
  brush.vertex(0, 150); brush.vertex(300, 130); brush.vertex(600, 170); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  brush.fill("#e06a1c", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5);
  brush.vertex(0, 200); brush.vertex(300, 170); brush.vertex(600, 220); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  // sun: pale paper left, gold halo
  brush.fill("#ffd23a", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.circle(310, 170, 55, 0.6);
  brush.fill("#ffd23a", 250);
  brush.fillBleed(0.3);
  brush.fillTexture(0.3, 0.4);
  brush.circle(310, 170, 35, 0.3);
  // orange lower sky
  brush.fill("#f26a1c", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(0, 400); brush.vertex(300, 380); brush.vertex(600, 420); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);

  // hot ground
  brush.fill("#e04a10", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(0, 600); brush.vertex(600, 600); brush.vertex(600, 530); brush.vertex(0, 560);
  brush.endShape(true);
  // distant ridges
  brush.fill("#b02a0e", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(0, 500); brush.vertex(150, 470); brush.vertex(300, 490); brush.vertex(450, 460); brush.vertex(600, 480); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);

  // cactus: three arms, dark green, silhouetted against the sun
  brush.fill("#0a3a1a", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(320, 380); brush.vertex(360, 350); brush.vertex(400, 380); brush.vertex(380, 410); brush.vertex(320, 400);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(320, 380); brush.vertex(260, 350); brush.vertex(220, 380); brush.vertex(240, 410); brush.vertex(320, 400);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(320, 380); brush.vertex(380, 350); brush.vertex(420, 380); brush.vertex(400, 410); brush.vertex(320, 400);
  brush.endShape(true);
  // a few spines
  brush.fill("#0a3a1a", 220);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.circle(340, 360, 2, 0.2); brush.circle(350, 370, 2, 0.2); brush.circle(330, 380, 2, 0.2);
  brush.circle(280, 360, 2, 0.2); brush.circle(300, 370, 2, 0.2); brush.circle(320, 380, 2, 0.2);
  brush.circle(400, 360, 2, 0.2); brush.circle(420, 370, 2, 0.2); brush.circle(390, 380, 2, 0.2);
  // a small shadow on the ground
  brush.fill("#1a2a10", 150);
  brush.fillBleed(0.2);
  brush.beginShape(0.6);
  brush.vertex(300, 410); brush.vertex(340, 410); brush.vertex(350, 430); brush.vertex(290, 430);
  brush.endShape(true);
}
