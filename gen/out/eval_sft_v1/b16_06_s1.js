async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#121212");
  randomSeed(2113);
  brush.noStroke();

  // sky: indigo fading to violet, then a warm glow along the horizon
  brush.fill("#2a1a50", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 250); brush.vertex(400, 320); brush.vertex(200, 250); brush.vertex(-20, 320);
  brush.endShape(true);
  brush.fill("#4a2a80", 170);
  brush.beginShape(0.5);
  brush.vertex(-20, 320); brush.vertex(620, 320); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#d07a3a", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(-20, 470); brush.vertex(200, 440); brush.vertex(420, 465); brush.vertex(620, 435); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // pine trees, low horizon
  let trees = [];
  for (let i = 0; i < 12; i++) {
    let x = random(20, 580);
    let h = random(120, 230);
    let w = random(20, 38);
    trees.push({ x, w, h, h2: h / 2 });
  }
  for (let t of trees) {
    brush.fill("#0a0a0a", 235);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5);
    brush.vertex(t.x - t.w * 0.7, 620);
    brush.vertex(t.x - t.w * 0.2, 620);
    brush.vertex(t.x - t.w * 0.2, t.h2 - 15);
    brush.vertex(t.x, t.h2 - 15);
    brush.vertex(t.x + t.w * 0.2, t.h2 - 15);
    brush.vertex(t.x + t.w * 0.2, 620);
    brush.endShape(true);
    brush.beginShape(0.5);
    brush.vertex(t.x + t.w * 0.7, 620);
    brush.vertex(t.x + t.w, 620);
    brush.vertex(t.x + t.w, t.h2 - 15);
    brush.vertex(t.x + t.w * 0.7, t.h2 - 15);
    brush.vertex(t.x + t.w * 0.7, 620);
    brush.endShape(true);
  }
  // a taller pine on the right
  brush.fill("#060606", 245);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(540, 620); brush.vertex(555, 620); brush.vertex(545, 220); brush.vertex(558, 220); brush.vertex(558, 620);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(555, 620); brush.vertex(570, 620); brush.vertex(562, 220); brush.vertex(575, 220); brush.vertex(575, 620);
  brush.endShape(true);

  // crescent moon
  brush.fill("#f6e89a", 240);
  brush.fillBleed(0.25);
  brush.fillTexture(0.3, 0.3);
  brush.circle(320, 150, 65, 0.4);
  brush.fill("#121212", 235);
  brush.fillBleed(0.25);
  brush.circle(320, 150, 32, 0.3);
  brush.fill("#f6e89a", 240);
  brush.fillBleed(0.25);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.4);
  brush.vertex(310, 142); brush.vertex(332, 142); brush.vertex(338, 168); brush.vertex(316, 168);
  brush.endShape(true);
  brush.fill("#f6e89a", 240);
  brush.beginShape(0.4);
  brush.vertex(310, 168); brush.vertex(332, 168); brush.vertex(338, 194); brush.vertex(316, 194);
  brush.endShape(true);

  // warm stars
  for (let i = 0; i < 22; i++) {
    let x = random(20, 580), y = random(-20, 320);
    let s = random(1.2, 3);
    brush.fill("#f7d88a", 215);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.circle(x, y, s, 0.2);
  }
  // warm glow halo around the moon
  brush.fill("#f7c87a", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.circle(320, 150, 120, 0.5);
  brush.fill("#e0a040", 130);
  brush.circle(320, 150, 80, 0.5);
}
