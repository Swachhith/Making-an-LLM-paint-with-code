async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7f1e2");
  brush.noStroke();
  // vivid sky: orange to magenta
  brush.fill("#ff6a1a", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 320); brush.vertex(-10, 320);
  brush.endShape(true);
  brush.fill("#d8208a", 160); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 140); brush.vertex(-10, 170);
  brush.endShape(true);
  // pond
  brush.fill("#0a7a90", 225); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-10, 330); brush.vertex(610, 330); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  // stone base
  brush.fill("#3a2a60", 225); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(70, 335); brush.vertex(100, 305); brush.vertex(500, 305); brush.vertex(530, 335);
  brush.endShape(true);
  // pagoda, 4 tiers each wider, built from the bottom up
  const tw = [250, 200, 150, 100];
  for (let i = 0; i < 4; i++) {
    const w = tw[i], y = 300 - i * 78;
    brush.fill("#cc1018", 235); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.3);
    brush.vertex(300 - w / 2 + 16, y); brush.vertex(300 - w / 2 + 16, y - 52); brush.vertex(300 + w / 2 - 16, y - 52); brush.vertex(300 + w / 2 - 16, y);
    brush.endShape(true);
    brush.fill("#ffc820", 230); brush.fillBleed(0.2); brush.fillTexture(0.3, 0.3);
    for (let k = 0; k < 3; k++) brush.circle(300 - w / 4 + k * w / 4, y - 24, 9, 0.3);
    brush.fill("#14124a", 240); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.6);
    brush.vertex(300 - w / 2 - 28, y - 44); brush.vertex(300 - w / 4, y - 62); brush.vertex(300, y - 80); brush.vertex(300 + w / 4, y - 62);
    brush.vertex(300 + w / 2 + 28, y - 44); brush.vertex(300 + w / 2 - 14, y - 36); brush.vertex(300 - w / 2 + 14, y - 36);
    brush.endShape(true);
  }
  brush.fill("#e8a810", 235); brush.fillBleed(0.2); brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(285, -50 + 74); brush.vertex(300, -30); brush.vertex(315, -50 + 74);
  brush.endShape(true);
  // reflection: broken vertical strokes in the water
  const rf = [["#cc1018", 190], ["#14124a", 180], ["#cc1018", 170], ["#14124a", 170]];
  for (let i = 0; i < 4; i++) {
    const w = tw[i] * 0.8, y = 345 + i * 55;
    brush.fill(rf[i][0], rf[i][1]); brush.fillBleed(0.35); brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.9);
    brush.vertex(300 - w / 2, y); brush.vertex(300 + w / 2, y + 6); brush.vertex(300 + w / 2 - 12, y + 50); brush.vertex(300 - w / 2 + 10, y + 46);
    brush.endShape(true);
  }
  // lily pads and blossoms
  brush.fill("#18a040", 225); brush.fillBleed(0.3); brush.fillTexture(0.3, 0.3);
  brush.circle(70, 540, 30, 0.6); brush.circle(540, 520, 34, 0.6); brush.circle(50, 420, 22, 0.6); brush.circle(560, 400, 24, 0.6);
  brush.fill("#ff5aa0", 230); brush.circle(540, 515, 10, 0.4); brush.circle(70, 535, 9, 0.4);
}
