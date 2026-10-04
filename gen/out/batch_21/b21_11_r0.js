async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f0f3f1");
  randomSeed(1121);
  brush.noStroke();

  // a narrow vertical panel of lake, framed by margin paper left and right
  brush.fill("#cfdde3", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.1);
  brush.vertex(150, 30); brush.vertex(450, 30); brush.vertex(450, 570); brush.vertex(150, 570);
  brush.endShape(true);
  // far shore, high up in the panel: misty sage hills
  brush.fill("#98ada6", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.6);
  brush.vertex(150, 130); brush.vertex(220, 110); brush.vertex(300, 124); brush.vertex(380, 104); brush.vertex(450, 118); brush.vertex(450, 150); brush.vertex(150, 150);
  brush.endShape(true);
  // reflection of the shore
  brush.fill("#a9bcb8", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(150, 150); brush.vertex(450, 150); brush.vertex(450, 178); brush.vertex(380, 192); brush.vertex(300, 176); brush.vertex(220, 188); brush.vertex(150, 172);
  brush.endShape(true);
  // water deepening toward the bottom
  brush.fill("#7fa1b3", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.3);
  brush.vertex(150, 300); brush.vertex(450, 290); brush.vertex(450, 570); brush.vertex(150, 570);
  brush.endShape(true);
  // pale horizontal glints left as gaps: painted slightly darker ripples between
  for (let i = 0; i < 6; i++) {
    let y = 220 + i * 50;
    brush.fill("#6a8ea2", 170);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.3);
    brush.beginShape(0.4);
    brush.vertex(160 + i * 6, y); brush.vertex(440 - i * 10, y - 3); brush.vertex(440 - i * 10, y + 8); brush.vertex(160 + i * 6, y + 10);
    brush.endShape(true);
  }

  // tall reeds rising the full height, broad soft blades
  for (let i = 0; i < 11; i++) {
    let x = 160 + random(0, 110) + (i > 5 ? 170 : 0);
    let top = random(60, 260);
    let lean = random(-30, 30);
    brush.fill(random(["#5d7a5e", "#7b8f5c", "#4a6452"]), random(190, 230));
    brush.fillBleed(0.2);
    brush.fillTexture(0.45, 0.4);
    brush.beginShape(0.5);
    brush.vertex(x - 9, 572); brush.vertex(x - 4 + lean * 0.6, (572 + top) / 2); brush.vertex(x + lean, top); brush.vertex(x + 6 + lean * 0.6, (572 + top) / 2); brush.vertex(x + 9, 572);
    brush.endShape(true);
  }
  // cattail heads
  for (let i = 0; i < 4; i++) {
    let x = [190, 235, 390, 420][i];
    let y = [150, 210, 120, 190][i];
    brush.fill("#6b4a32", 230);
    brush.fillBleed(0.15);
    brush.beginShape(0.5);
    brush.vertex(x - 8, y); brush.vertex(x + 8, y); brush.vertex(x + 8, y + 40); brush.vertex(x - 8, y + 40);
    brush.endShape(true);
  }
}
