async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3e9d2");
  brush.noStroke();
  // bold orange sky, deepening to magenta
  brush.fill("#ff8a15", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 300); brush.vertex(450, 400); brush.vertex(300, 350); brush.vertex(0, 450);
  brush.endShape(true);
  brush.fill("#d91f6a", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(0, 350); brush.vertex(200, 300); brush.vertex(600, 320); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  // sun low and off-centre
  brush.fill("#ffcc00", 240);
  brush.fillBleed(0.15);
  brush.circle(520, 470, 65, 0.2);
  brush.fill("#ff6a00", 200);
  brush.fillBleed(0.15);
  brush.circle(520, 470, 45, 0.2);
  // horizon line of warm ground
  brush.fill("#e84a10", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.3);
  brush.vertex(0, 520); brush.vertex(600, 500); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  // dunes behind cactus
  brush.fill("#f26a0a", 210);
  brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(250, 530); brush.vertex(320, 460); brush.vertex(400, 510); brush.vertex(460, 550); brush.vertex(400, 590); brush.vertex(300, 570);
  brush.endShape(true);
  // cactus: tall column
  brush.fill("#1f6a1a", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.4);
  brush.vertex(290, 520); brush.vertex(310, 520); brush.vertex(310, 230); brush.vertex(290, 230);
  brush.endShape(true);
  // arms
  brush.beginShape(0.5);
  brush.vertex(295, 430); brush.vertex(315, 430); brush.vertex(340, 350); brush.vertex(320, 350); brush.vertex(300, 430);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(295, 370); brush.vertex(315, 370); brush.vertex(335, 280); brush.vertex(315, 280); brush.vertex(295, 370);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(295, 520); brush.vertex(315, 520); brush.vertex(335, 540); brush.vertex(315, 540); brush.vertex(295, 520);
  brush.endShape(true);
  // shadows
  brush.fill("#0c3a0a", 180);
  brush.fillBleed(0.2);
  brush.beginShape(0.5);
  brush.vertex(290, 520); brush.vertex(310, 520); brush.vertex(310, 540); brush.vertex(290, 540);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(295, 430); brush.vertex(315, 430); brush.vertex(315, 450); brush.vertex(295, 450);
  brush.endShape(true);
  // silhouettes of distant rocks
  brush.fill("#141414", 240);
  brush.fillBleed(0.15);
  brush.beginShape(0.4);
  brush.vertex(50, 540); brush.vertex(100, 520); brush.vertex(140, 540); brush.vertex(130, 560); brush.vertex(50, 560);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(200, 535); brush.vertex(260, 510); brush.vertex(320, 540); brush.vertex(310, 560); brush.vertex(200, 560);
  brush.endShape(true);
}
