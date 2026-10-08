async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0e1a2e");
  randomSeed(1111);
  brush.noStroke();
  // teal upper sky
  brush.fill("#0f6a7a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 300); brush.vertex(300, 320); brush.vertex(0, 300);
  brush.endShape(true);
  // indigo lower sky
  brush.fill("#1a1f4a", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 300); brush.vertex(620, 300); brush.vertex(620, 620); brush.vertex(0, 620);
  brush.endShape(true);
  // sea
  brush.fill("#0a182a", 230);
  brush.fillBleed(0.25);
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 620); brush.vertex(620, 620); brush.vertex(620, 500); brush.vertex(400, 480); brush.vertex(200, 520); brush.vertex(-20, 540);
  brush.endShape(true);
  // ripples
  for (let i = 0; i < 12; i++) {
    let y = 520 + random(-20, 20);
    let w = random(60, 130);
    brush.fill("#1a2a4a", 170);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.3);
    brush.vertex(-20, y); brush.vertex(20, y - w); brush.vertex(620, y - w * 0.6); brush.vertex(620, y + w * 0.3); brush.vertex(20, y + w * 0.6);
    brush.endShape(true);
  }
  // moon
  brush.fill("#f2f4f8", 250);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.circle(300, 140, 80, 0.4);
  brush.fill("#c9d2e6", 230);
  brush.fillBleed(0.12);
  brush.fillTexture(0.3, 0.3);
  brush.circle(300, 140, 52, 0.3);
  // stars
  for (let i = 0; i < 40; i++) {
    let x = random(0, 600), y = random(-20, 350);
    brush.fill("#f6f8ff", 220);
    brush.fillBleed(0.08);
    brush.fillTexture(0.2, 0.2);
    brush.circle(x, y, random(1, 2.5), 0.2);
  }
}
