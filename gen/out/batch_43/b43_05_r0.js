async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2ecd8");
  brush.noStroke();
  // forest backdrop in bold greens
  brush.fill("#1fa04a", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 360); brush.vertex(-10, 340);
  brush.endShape(true);
  // tall tree trunks behind
  for (let i = 0; i < 4; i++) {
    const x = 70 + i * 150;
    brush.fill(i % 2 ? "#7a3a14" : "#5a2a60", 190); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5);
    brush.vertex(x, -10); brush.vertex(x + 40, -10); brush.vertex(x + 34, 380); brush.vertex(x - 6, 380);
    brush.endShape(true);
  }
  // forest floor
  brush.fill("#e0a020", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(-10, 380); brush.vertex(300, 350); brush.vertex(610, 390); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#d4571a", 170); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(-10, 470); brush.vertex(300, 440); brush.vertex(610, 480); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  // the fallen log, diagonal and tall
  brush.fill("#8a3410", 220); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5);
  brush.vertex(110, 580); brush.vertex(160, 590); brush.vertex(520, 330); brush.vertex(480, 290);
  brush.endShape(true);
  brush.fill("#4d1c08", 210); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5);
  brush.vertex(120, 575); brush.vertex(160, 588); brush.vertex(470, 365); brush.vertex(455, 340);
  brush.endShape(true);
  // cut end
  brush.fill("#e8b040", 220); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.4);
  brush.circle(500, 312, 34, 0.3);
  brush.fill("#a85a18", 200); brush.fillBleed(0.2); brush.fillTexture(0.3, 0.3);
  brush.circle(500, 312, 16, 0.3);
  // moss
  brush.fill("#0f8a30", 220); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.circle(260, 470, 50, 0.7);
  brush.circle(360, 405, 38, 0.7);
  brush.fill("#6a1fa0", 160); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.circle(180, 560, 60, 0.7);
}
