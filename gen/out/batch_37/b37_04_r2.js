async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eae6f2");
  brush.noStroke();
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.fill("#4a4ab0", 170);
  brush.beginShape(0.4);
  brush.vertex(-40, -40); brush.vertex(640, -40); brush.vertex(640, 140); brush.vertex(-40, 140);
  brush.endShape(true);
  for (let p = 0; p < 2; p++) {
    brush.fill(p ? "#0e2a3a" : "#1c3e3a", 190 + p * 40);
    brush.beginShape(0.8);
    brush.vertex(-40, 100 + p * 30); brush.vertex(240, 130 + p * 30); brush.vertex(250 - p * 20, 400); brush.vertex(190, 650); brush.vertex(-40, 650);
    brush.endShape(true);
    brush.fill(p ? "#10204e" : "#1a2a6a", 200 + p * 30);
    brush.beginShape(0.8);
    brush.vertex(640, 90 + p * 30); brush.vertex(380, 130 + p * 30); brush.vertex(370 + p * 20, 400); brush.vertex(440, 650); brush.vertex(640, 650);
    brush.endShape(true);
  }
  brush.fill("#2a9a60", 170);
  brush.beginShape(0.9);
  brush.vertex(-40, 190); brush.vertex(140, 210); brush.vertex(190, 400); brush.vertex(80, 560); brush.vertex(-40, 540);
  brush.endShape(true);
  brush.fill("#3aa070", 160);
  brush.beginShape(0.9);
  brush.vertex(640, 200); brush.vertex(470, 230); brush.vertex(420, 430); brush.vertex(520, 580); brush.vertex(640, 550);
  brush.endShape(true);
  brush.fill("#d8d8f8", 255);
  brush.beginShape(0.3);
  brush.vertex(255, 140); brush.vertex(375, 140); brush.vertex(385, 430); brush.vertex(250, 430);
  brush.endShape(true);
  brush.fill("#4a54c0", 150);
  brush.beginShape(0.5);
  brush.vertex(268, 150); brush.vertex(362, 150); brush.vertex(366, 420); brush.vertex(262, 420);
  brush.endShape(true);
  brush.fill("#2a2a90", 190);
  brush.beginShape(0.8);
  brush.vertex(150, 430); brush.vertex(470, 430); brush.vertex(520, 650); brush.vertex(100, 650);
  brush.endShape(true);
  brush.fill("#8a90e0", 170);
  brush.beginShape(0.8);
  brush.vertex(240, 440); brush.vertex(390, 440); brush.vertex(410, 520); brush.vertex(230, 520);
  brush.endShape(true);
  brush.fill("#ff6a14", 245);
  brush.circle(110, 520, 24, 0.8);
  brush.circle(60, 470, 14, 0.8);
  brush.circle(150, 475, 12, 0.8);

  brush.fill("#0a1a30", 120);
  brush.beginShape(0.8);
  brush.vertex(-40, 450); brush.vertex(120, 420); brush.vertex(140, 650); brush.vertex(-40, 650);
  brush.endShape(true);
  brush.fill("#10205a", 110);
  brush.beginShape(0.8);
  brush.vertex(640, 420); brush.vertex(500, 440); brush.vertex(520, 650); brush.vertex(640, 650);
  brush.endShape(true);
}
