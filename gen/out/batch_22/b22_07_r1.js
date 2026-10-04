async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe9dc");
  randomSeed(707);
  brush.noStroke();
  // muted sky-to-bank wash
  brush.fill("#cfc7ae", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 470); brush.vertex(-20, 470);
  brush.endShape(true);
  // the pond, a narrow band at the foot
  brush.fill("#7f8f86", 200);
  brush.fillBleed(0.28);
  brush.beginShape(0.6);
  brush.vertex(-20, 470); brush.vertex(620, 460); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#5f6f66", 170);
  brush.beginShape(0.8);
  brush.vertex(150, 500); brush.vertex(460, 495); brush.vertex(470, 600); brush.vertex(140, 610);
  brush.endShape(true);
  // earthy bank
  brush.fill("#8a7550", 190);
  brush.beginShape(0.6);
  brush.vertex(-20, 450); brush.vertex(620, 440); brush.vertex(620, 478); brush.vertex(-20, 488);
  brush.endShape(true);
  // tall trunk up the middle
  brush.fill("#5a4632", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(285, 470); brush.vertex(290, 300); brush.vertex(282, 130); brush.vertex(300, 60); brush.vertex(318, 130); brush.vertex(312, 300); brush.vertex(322, 470);
  brush.endShape(true);
  // falling curtains of leaves, long vertical drapes
  for (let i = 0; i < 22; i++) {
    let x = 130 + i * 16 + random(-6, 6);
    let top = 40 + abs(x - 300) * 0.45 + random(-10, 10);
    let bottom = 400 + random(0, 70);
    let w = random(18, 30);
    brush.fill(random(["#8d9562", "#7a8450", "#a3a56c", "#6d7547"]), random(160, 210));
    brush.fillBleed(0.28);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(0.7);
    brush.vertex(x - w / 2, top);
    brush.vertex(x + w / 2, top + 10);
    brush.vertex(x + w * 0.4 + (x - 300) * 0.05, bottom - 40);
    brush.vertex(x + (x - 300) * 0.08, bottom);
    brush.vertex(x - w * 0.4 + (x - 300) * 0.05, bottom - 30);
    brush.endShape(true);
  }
  // a darker second pass of drapes in shadow
  for (let i = 0; i < 12; i++) {
    let x = 170 + i * 24 + random(-8, 8);
    let top = 120 + abs(x - 300) * 0.4;
    let bottom = 330 + random(0, 90);
    brush.fill("#4f5636", random(170, 210));
    brush.fillBleed(0.25);
    brush.beginShape(0.7);
    brush.vertex(x - 9, top);
    brush.vertex(x + 9, top);
    brush.vertex(x + 8 + (x - 300) * 0.06, bottom);
    brush.vertex(x - 8 + (x - 300) * 0.06, bottom - 20);
    brush.endShape(true);
  }
  // reflection of the willow in the pond
  brush.fill("#5c6a48", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(180, 480); brush.vertex(420, 478); brush.vertex(390, 580); brush.vertex(220, 585);
  brush.endShape(true);
  // ripples of light across the water
  for (let k = 0; k < 4; k++) {
    brush.fill("#aab5a6", 170);
    brush.fillBleed(0.25);
    brush.beginShape(0.6);
    let y = 505 + k * 25;
    brush.vertex(40 + k * 30, y); brush.vertex(300 + k * 20, y - 4); brush.vertex(300 + k * 20, y + 12); brush.vertex(40 + k * 30, y + 14);
    brush.endShape(true);
  }
  // reeds at the pond edge
  for (let k = 0; k < 7; k++) {
    let x = 470 + k * 16;
    brush.fill("#6b5a36", 200);
    brush.fillBleed(0.2);
    brush.beginShape(0.3);
    brush.vertex(x - 8, 480); brush.vertex(x + random(-6, 6), 380 + random(0, 40)); brush.vertex(x + 8, 480);
    brush.endShape(true);
  }
  brush.fill("#d9d3c0", 200);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(60, 540); brush.vertex(200, 537); brush.vertex(200, 546); brush.vertex(60, 550);
  brush.endShape(true);
}
