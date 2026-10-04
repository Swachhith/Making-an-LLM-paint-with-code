async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef4f6");
  brush.noStroke();

  // bright cerulean sky, only top
  brush.fill("#2f8fd8", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 160); brush.vertex(-20, 175);
  brush.endShape(true);

  // far headland (distant plane), purple-blue
  brush.fill("#5a4fa0", 190);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(300, 180); brush.vertex(380, 140); brush.vertex(470, 130); brush.vertex(620, 150); brush.vertex(620, 190); brush.vertex(300, 190);
  brush.endShape(true);

  // sea: deep teal to turquoise
  brush.fill("#0b7a8f", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 175); brush.vertex(620, 185); brush.vertex(620, 420); brush.vertex(-20, 440);
  brush.endShape(true);
  brush.fill("#18b7c0", 180);
  brush.beginShape(0.6);
  brush.vertex(-20, 300); brush.vertex(620, 290); brush.vertex(620, 460); brush.vertex(-20, 470);
  brush.endShape(true);

  // middle rocks, right
  brush.fill("#6a3a2a", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(380, 330); brush.vertex(420, 270); brush.vertex(480, 250); brush.vertex(540, 280); brush.vertex(620, 260); brush.vertex(620, 380); brush.vertex(390, 380);
  brush.endShape(true);
  brush.fill("#3a1c14", 200);
  brush.beginShape(0.3);
  brush.vertex(430, 380); brush.vertex(470, 300); brush.vertex(520, 310); brush.vertex(560, 380);
  brush.endShape(true);

  // waves: white foam left as paper -- paint the dark water between foam bands
  brush.fill("#054a5e", 225);
  for (let i = 0; i < 4; i++) {
    const y = 350 + i * 30;
    brush.beginShape(0.8);
    brush.vertex(-20, y); brush.vertex(100, y - 10); brush.vertex(220, y + 6); brush.vertex(340, y - 8); brush.vertex(440, y + 4);
    brush.vertex(440, y + 16); brush.vertex(330, y + 8); brush.vertex(210, y + 20); brush.vertex(90, y + 6); brush.vertex(-20, y + 18);
    brush.endShape(true);
  }

  // foreground rocks: big bold mass bottom-left
  brush.fill("#8a4424", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, 470); brush.vertex(60, 430); brush.vertex(150, 450); brush.vertex(230, 420); brush.vertex(330, 470); brush.vertex(420, 500); brush.vertex(620, 520); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#2e140c", 220);
  brush.beginShape(0.4);
  brush.vertex(-20, 540); brush.vertex(90, 500); brush.vertex(200, 520); brush.vertex(300, 560); brush.vertex(620, 580); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#c86a2a", 200);
  brush.beginShape(0.4);
  brush.vertex(70, 445); brush.vertex(140, 460); brush.vertex(120, 490); brush.vertex(60, 480);
  brush.endShape(true);

  // cast shadow crevices on foreground rock
  brush.fill("#1a0a06", 200);
  brush.beginShape(0.5);
  brush.vertex(150, 455); brush.vertex(190, 470); brush.vertex(170, 520); brush.vertex(140, 500);
  brush.endShape(true);
  // spray splash around middle rocks
  brush.fill("#18b7c0", 160);
  brush.circle(400, 320, 20, 0.8);
  brush.circle(370, 345, 14, 0.8);
}
