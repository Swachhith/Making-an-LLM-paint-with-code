async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2ead8");
  brush.noStroke();
  brush.fillBleed(0.28);
  brush.fillTexture(0.4, 0.4);
  // dark interior
  brush.fill("#2a1a2a", 210);
  brush.beginShape(0.5);
  brush.vertex(240, 120); brush.vertex(590, 100); brush.vertex(590, 560); brush.vertex(240, 560);
  brush.endShape(true);
  brush.fill("#1a0e1c", 200);
  brush.beginShape(0.5);
  brush.vertex(300, 200); brush.vertex(590, 190); brush.vertex(590, 560); brush.vertex(300, 560);
  brush.endShape(true);
  // awning stripes
  for (let i = 0; i < 6; i++) {
    brush.fill(i % 2 ? "#e8c040" : "#c81a20", 220);
    brush.beginShape(0.3);
    brush.vertex(235 + i * 60, 60); brush.vertex(295 + i * 60, 60); brush.vertex(300 + i * 60, 140); brush.vertex(240 + i * 60, 145);
    brush.endShape(true);
  }
  // counter + crates
  brush.fill("#8a4a1c", 220);
  brush.beginShape(0.4);
  brush.vertex(240, 430); brush.vertex(590, 430); brush.vertex(590, 560); brush.vertex(240, 560);
  brush.endShape(true);
  brush.fill("#e8602a", 210);
  brush.circle(300, 410, 20, 0.8);
  brush.circle(340, 415, 18, 0.8);
  brush.fill("#d8c020", 210);
  brush.circle(390, 412, 18, 0.8);
  brush.circle(430, 418, 17, 0.8);
  // seller
  brush.fill("#1a4a6a", 220);
  brush.beginShape(0.5);
  brush.vertex(480, 430); brush.vertex(490, 270); brush.vertex(540, 270); brush.vertex(552, 430);
  brush.endShape(true);
  brush.fill("#d89868", 220);
  brush.circle(515, 245, 26, 0.6);
  brush.fill("#0a0610", 230);
  brush.circle(515, 232, 22, 0.8);
  // ground shadow left empty space
  brush.fill("#6a5a6a", 150);
  brush.beginShape(0.6);
  brush.vertex(20, 540); brush.vertex(230, 530); brush.vertex(240, 585); brush.vertex(30, 590);
  brush.endShape(true);
}
