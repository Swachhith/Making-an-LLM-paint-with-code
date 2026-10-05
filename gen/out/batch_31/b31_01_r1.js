async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#dcd8ea");
  brush.noStroke();
  const sky = [["#1c1a68",-10,150,215],["#34308e",70,140,200],["#6a48a0",160,120,190],["#c0609a",250,90,190],["#ff8a30",310,70,215]];
  for (const s of sky) {
    brush.fill(s[0], s[3]); brush.fillBleed(0.3); brush.fillTexture(0.5, 0.4);
    brush.beginShape(0.5);
    brush.vertex(-10, s[1]); brush.vertex(200, s[1] - 10); brush.vertex(420, s[1] + 8); brush.vertex(610, s[1]);
    brush.vertex(610, s[1] + s[2]); brush.vertex(300, s[1] + s[2] + 14); brush.vertex(-10, s[1] + s[2]);
    brush.endShape(true);
  }
  // blazing accent
  brush.fill("#ff5a10", 230); brush.fillBleed(0.3);
  brush.circle(360, 392, 46, 0.5); brush.circle(360, 392, 70, 0.7);
  brush.fill("#ffe060", 230); brush.circle(360, 394, 24, 0.3);
  // flat desert
  brush.fill("#1a1450", 225); brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(-10, 410); brush.vertex(150, 402); brush.vertex(360, 408); brush.vertex(610, 400); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#3a2a78", 190);
  brush.beginShape(0.4);
  brush.vertex(-10, 450); brush.vertex(300, 425); brush.vertex(610, 445); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  // road
  brush.fill("#6a4a98", 215);
  brush.beginShape(0.2);
  brush.vertex(345, 410); brush.vertex(372, 410); brush.vertex(560, 610); brush.vertex(190, 610);
  brush.endShape(true);
  brush.fill("#ff8a30", 150);
  brush.beginShape(0.3);
  brush.vertex(352, 412); brush.vertex(368, 412); brush.vertex(430, 520); brush.vertex(340, 520);
  brush.endShape(true);
  // distant mesas
  brush.fill("#2a1e60", 215);
  brush.beginShape(0.1);
  brush.vertex(40, 408); brush.vertex(60, 388); brush.vertex(130, 386); brush.vertex(160, 408);
  brush.endShape(true);
  // poles
  brush.fill("#0e0a30", 235);
  for (let i = 0; i < 4; i++) {
    const x = 480 - i * 90 + i * i * 12, h = 120 - i * 28, b = 440 - i * 10;
    brush.beginShape(0.1);
    brush.vertex(x, b); brush.vertex(x + 16, b); brush.vertex(x + 13, b - h); brush.vertex(x + 3, b - h);
    brush.endShape(true);
    brush.beginShape(0.1);
    brush.vertex(x - 18, b - h + 2); brush.vertex(x + 34, b - h + 2); brush.vertex(x + 34, b - h + 18); brush.vertex(x - 18, b - h + 18);
    brush.endShape(true);
  }
}
