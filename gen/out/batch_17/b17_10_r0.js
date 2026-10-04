async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcf8f0");
  randomSeed(10);
  brush.noStroke();
  // thin sky strip, high horizon
  brush.fill("#f2b56b", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.6);
  brush.beginShape(0.5);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 110);
  brush.vertex(-20, 120);
  brush.endShape(true);
  // wide sea with splashy blooms
  let seaBlots = [["#1f8fb0", 100, 200, 140], ["#2a6fbf", 380, 180, 150], ["#18a39a", 250, 330, 160], ["#1f5fa0", 520, 330, 130], ["#27a0c4", 120, 420, 120]];
  for (let b of seaBlots) {
    brush.fill(b[0], 170);
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.6);
    brush.circle(b[1], b[2], b[3], 0.7);
  }
  // rocky outcrop right side
  brush.fill("#8a4a2a", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.5);
  brush.beginShape(0.4);
  brush.vertex(620, 220);
  brush.vertex(520, 260);
  brush.vertex(460, 360);
  brush.vertex(380, 430);
  brush.vertex(330, 540);
  brush.vertex(360, 620);
  brush.vertex(620, 620);
  brush.endShape(true);
  brush.fill("#3a2a3a", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.3);
  brush.vertex(620, 320);
  brush.vertex(540, 380);
  brush.vertex(470, 470);
  brush.vertex(430, 620);
  brush.vertex(620, 620);
  brush.endShape(true);
  // foreground left rocks
  brush.fill("#5a3a2a", 210);
  brush.fillBleed(0.25);
  brush.circle(60, 560, 80, 0.5);
  brush.circle(160, 590, 50, 0.5);
  // crashing spray: leave paper; paint splash drops around it
  for (let i = 0; i < 60; i++) {
    let a = random(180, 360), d = random(40, 140);
    brush.fill(random() < 0.5 ? "#1f8fb0" : "#18a39a", 210);
    brush.fillBleed(0.15);
    brush.circle(400 + cos(a) * d, 380 + sin(a) * d * 0.7, random(2, 8), 0.4);
  }
  // drips from horizon
  for (let i = 0; i < 6; i++) {
    let x = 40 + i * 95;
    brush.fill("#2a6fbf", 170);
    brush.fillBleed(0.15);
    brush.beginShape(0.5);
    brush.vertex(x - 8, 110);
    brush.vertex(x + 8, 110);
    brush.vertex(x + 4, 150 + random(20, 70));
    brush.vertex(x - 4, 150 + random(20, 70));
    brush.endShape(true);
  }
  // wave crest bands
  for (let i = 0; i < 4; i++) {
    let y = 250 + i * 70;
    brush.fill("#0d3f78", 180);
    brush.fillBleed(0.25);
    brush.beginShape(0.8);
    brush.vertex(-20, y);
    brush.vertex(150, y - 20);
    brush.vertex(300, y + 5);
    brush.vertex(300, y + 22);
    brush.vertex(150, y);
    brush.vertex(-20, y + 20);
    brush.endShape(true);
  }
}
