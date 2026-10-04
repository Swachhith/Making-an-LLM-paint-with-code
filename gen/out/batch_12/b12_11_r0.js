async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#12141c");
  randomSeed(1111);
  brush.noStroke();
  // stars as paper-light dots on dark paper
  for (let i = 0; i < 90; i++) {
    brush.fill("#f4ecd8", random(170, 250));
    brush.fillBleed(0.05);
    brush.circle(random(0, 600), random(0, 420), random(0.8, 2.6), 0.2);
  }
  // faint nebula haze
  brush.fill("#2a2f44", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(150, 150, 160, 0.9);
  // rocky headland, black
  brush.fill("#05060a", 240);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, 470); brush.vertex(200, 450); brush.vertex(300, 440); brush.vertex(380, 470); brush.vertex(520, 520); brush.vertex(620, 540); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // tall lighthouse tower, slightly tapered, centred-left
  let x = 260;
  brush.fill("#d8d0c0", 230);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.02);
  brush.vertex(x - 16, 150); brush.vertex(x + 16, 150); brush.vertex(x + 28, 450); brush.vertex(x - 28, 450);
  brush.endShape(true);
  // dark bands
  for (let y of [220, 310, 400]) {
    brush.fill("#5a1e1e", 220);
    brush.fillBleed(0.1);
    let w = 16 + (y - 150) / 300 * 12;
    brush.beginShape(0.02);
    brush.vertex(x - w, y); brush.vertex(x + w, y); brush.vertex(x + w + 2, y + 35); brush.vertex(x - w - 2, y + 35);
    brush.endShape(true);
  }
  // lantern room warm
  brush.fill("#ffb640", 250);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.circle(x, 130, 40, 0.4);
  brush.fill("#ffe08a", 250);
  brush.fillBleed(0.1);
  brush.circle(x, 132, 16, 0.2);
  // cap
  brush.fill("#0a0a0e", 240);
  brush.beginShape(0.05);
  brush.vertex(x - 20, 112); brush.vertex(x, 90); brush.vertex(x + 20, 112);
  brush.endShape(true);
  // beam
  brush.fill("#f2c46a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.2);
  brush.vertex(x + 15, 120); brush.vertex(620, 60); brush.vertex(620, 190); brush.vertex(x + 15, 140);
  brush.endShape(true);
  // cottage window lights at base
  brush.fill("#ffa531", 240);
  brush.fillBleed(0.1);
  brush.circle(330, 452, 5, 0.2);
  brush.circle(346, 454, 5, 0.2);
  // sea glints
  for (let i = 0; i < 12; i++) {
    brush.fill("#c9913a", 200);
    brush.fillBleed(0.1);
    brush.circle(random(360, 600), random(480, 520), random(2, 4), 0.3);
  }
}
