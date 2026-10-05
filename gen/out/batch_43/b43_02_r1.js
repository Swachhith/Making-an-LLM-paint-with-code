async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4f1ea");
  brush.noStroke();
  // thin sky strip, high horizon
  brush.fill("#5d73c0", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 70); brush.vertex(-10, 85);
  brush.endShape(true);
  brush.fill("#2b3590", 210); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(-10, 100); brush.vertex(130, 60); brush.vertex(300, 90); brush.vertex(470, 50); brush.vertex(610, 85); brush.vertex(610, 150); brush.vertex(-10, 150);
  brush.endShape(true);
  // terraced slopes stepping down to the river on the right
  const cols = ["#2a2f8c", "#3a48b0", "#1c2268", "#4a5cc4"];
  for (let i = 0; i < 9; i++) {
    const y = 125 + i * 54;
    brush.fill(cols[i % 4], 215); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.6);
    brush.vertex(-10, y + 14); brush.vertex(180, y - 8); brush.vertex(330, y + 6);
    brush.vertex(330, y + 64); brush.vertex(150, y + 68); brush.vertex(-10, y + 62);
    brush.endShape(true);
    brush.fill("#10143e", 200); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5);
    brush.vertex(-10, y + 50); brush.vertex(180, y + 44); brush.vertex(330, y + 52); brush.vertex(330, y + 66); brush.vertex(-10, y + 66);
    brush.endShape(true);
    for (let j = 0; j < 6; j++) {
      brush.fill("#0e1240", 200); brush.fillBleed(0.2); brush.fillTexture(0.3, 0.3);
      brush.circle(15 + j * 54 + (i % 2) * 20, y + 28, 11, 0.6);
    }
  }
  // opposite bank, paler indigo
  brush.fill("#6a78cc", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(480, 130); brush.vertex(610, 120); brush.vertex(610, 610); brush.vertex(520, 610); brush.vertex(500, 400);
  brush.endShape(true);
  // river, winding
  brush.fill("#2f6ad0", 215); brush.fillBleed(0.3); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.9);
  brush.vertex(330, 140); brush.vertex(480, 140); brush.vertex(440, 280); brush.vertex(500, 400); brush.vertex(530, 610); brush.vertex(330, 610); brush.vertex(380, 440); brush.vertex(330, 300);
  brush.endShape(true);
  brush.fill("#9ac4f4", 150); brush.fillBleed(0.3); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.9);
  brush.vertex(390, 200); brush.vertex(430, 220); brush.vertex(420, 330); brush.vertex(450, 450); brush.vertex(420, 540); brush.vertex(390, 400);
  brush.endShape(true);
  // single bright accent: orange cottage and its glow
  brush.fill("#ff7a00", 240); brush.fillBleed(0.15); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.2);
  brush.vertex(235, 330); brush.vertex(235, 295); brush.vertex(265, 280); brush.vertex(295, 295); brush.vertex(295, 330);
  brush.endShape(true);
  brush.fill("#ffa530", 170); brush.fillBleed(0.3); brush.fillTexture(0.3, 0.3);
  brush.circle(265, 330, 30, 0.7);
}
