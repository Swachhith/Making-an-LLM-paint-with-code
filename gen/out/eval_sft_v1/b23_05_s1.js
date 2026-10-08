async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f0f4f8");
  brush.noStroke();

  // cool blue-grey sky
  brush.fill("#b8c4d8", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 300); brush.vertex(420, 320); brush.vertex(300, 300); brush.vertex(100, 320); brush.vertex(-20, 300);
  brush.endShape(true);

  // ground: mossy blue-grey
  brush.fill("#8aa0b0", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.9);
  brush.vertex(-20, 620); brush.vertex(620, 620); brush.vertex(620, 530); brush.vertex(420, 550); brush.vertex(300, 520); brush.vertex(100, 540); brush.vertex(-20, 530);
  brush.endShape(true);

  // big birch: trunk
  brush.fill("#e8d8c8", 245);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.05);
  brush.vertex(280, 380); brush.vertex(294, 380); brush.vertex(294, 620); brush.vertex(276, 620);
  brush.endShape(true);
  // darker bark wash
  brush.fill("#c4b2a0", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.1);
  brush.vertex(282, 400); brush.vertex(292, 400); brush.vertex(292, 620); brush.vertex(282, 620);
  brush.endShape(true);
  // vertical black lines
  brush.fill("#5a4a40", 230);
  brush.fillBleed(0.05);
  brush.fillTexture(0.3, 0.3);
  for (let i = -1; i <= 1; i++) {
    brush.beginShape(0.02);
    brush.vertex(288 + i * 5, 420); brush.vertex(288 + i * 5 + 2, 620); brush.vertex(288 + i * 5 - 2, 620); brush.vertex(288 + i * 5, 420);
    brush.endShape(true);
  }

  // crown: pale blue-grey with soft edges
  brush.fill("#c8d8e4", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(1);
  brush.vertex(260, 260); brush.vertex(330, 200); brush.vertex(400, 260); brush.vertex(400, 360); brush.vertex(330, 420); brush.vertex(260, 360); brush.vertex(260, 260);
  brush.endShape(true);
  brush.fill("#a8b8c8", 180);
  brush.fillBleed(0.3);
  brush.beginShape(1);
  brush.vertex(230, 300); brush.vertex(300, 250); brush.vertex(370, 300); brush.vertex(370, 390); brush.vertex(300, 430); brush.vertex(230, 390);
  brush.endShape(true);
  brush.fill("#8898a8", 150);
  brush.fillBleed(0.25);
  brush.beginShape(1);
  brush.vertex(200, 340); brush.vertex(270, 310); brush.vertex(340, 340); brush.vertex(340, 400); brush.vertex(270, 410); brush.vertex(200, 380);
  brush.endShape(true);

  // smaller birches
  // left
  brush.fill("#c8d8e4", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(1);
  brush.vertex(120, 200); brush.vertex(170, 150); brush.vertex(220, 200); brush.vertex(220, 270); brush.vertex(170, 310); brush.vertex(120, 270);
  brush.endShape(true);
  brush.fill("#e8d8c8", 245);
  brush.fillBleed(0.15);
  brush.beginShape(0.05);
  brush.vertex(152, 160); brush.vertex(152, 270); brush.vertex(162, 270); brush.vertex(162, 160);
  brush.endShape(true);
  // right
  brush.fill("#c8d8e4", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(1);
  brush.vertex(470, 230); brush.vertex(520, 190); brush.vertex(570, 230); brush.vertex(570, 300); brush.vertex(520, 330); brush.vertex(470, 300);
  brush.endShape(true);
  brush.fill("#e8d8c8", 245);
  brush.fillBleed(0.15);
  brush.beginShape(0.05);
  brush.vertex(502, 240); brush.vertex(502, 330); brush.vertex(512, 330); brush.vertex(512, 240);
  brush.endShape(true);
  // a third, smaller
  brush.fill("#c8d8e4", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(1);
  brush.vertex(350, 350); brush.vertex(380, 320); brush.vertex(410, 350); brush.vertex(410, 410); brush.vertex(380, 430); brush.vertex(350, 410);
  brush.endShape(true);
  brush.fill("#e8d8c8", 245);
  brush.fillBleed(0.15);
  brush.beginShape(0.05);
  brush.vertex(380, 370); brush.vertex(380, 430); brush.vertex(390, 430); brush.vertex(390, 370);
  brush.endShape(true);

  // blue-grey ground cover
  brush.fill("#8aa0b0", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(1);
  brush.vertex(-20, 530); brush.vertex(620, 530); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#6a7a8a", 170);
  brush.fillBleed(0.25);
  brush.beginShape(1);
  brush.vertex(-20, 560); brush.vertex(620, 560); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
}
