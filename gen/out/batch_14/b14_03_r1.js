async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0c1630");
  randomSeed(313);
  brush.noStroke();

  // soft indigo and teal veils across the huge sky, irregular not banded
  const veils = [["#2c2f86", 60, 180], ["#1d6f7c", 330, 150], ["#2a4a8e", 200, 170], ["#3a9aa0", 420, 140]];
  for (const v of veils) {
    brush.fill(v[0], v[2]);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.9);
    brush.vertex(-40, v[1] + random(-40, 40));
    brush.vertex(150, v[1] - random(30, 80));
    brush.vertex(380, v[1] + random(-40, 20));
    brush.vertex(640, v[1] - random(20, 60));
    brush.vertex(640, v[1] + random(60, 110));
    brush.vertex(300, v[1] + random(70, 120));
    brush.vertex(-40, v[1] + random(60, 100));
    brush.endShape(true);
  }
  // a faint milky way diagonal
  brush.fill("#6fb7c0", 120);
  brush.beginShape(0.9);
  brush.vertex(40, 460); brush.vertex(180, 280); brush.vertex(420, 40); brush.vertex(520, 60);
  brush.vertex(300, 300); brush.vertex(120, 480);
  brush.endShape(true);

  // stars: many pinpricks, a few larger with halos
  for (let i = 0; i < 220; i++) {
    const x = random(600), y = random(0, 470);
    brush.fill(random() < 0.3 ? "#c8f4f2" : "#fffbe6", random(190, 250));
    brush.fillBleed(0.02);
    brush.fillTexture(0.2, 0.2);
    brush.circle(x, y, random(0.6, 1.8), 0.1);
  }
  for (let i = 0; i < 9; i++) {
    const x = random(600), y = random(0, 400);
    brush.fill("#dff8f4", 110);
    brush.circle(x, y, 7, 0.3);
    brush.fill("#ffffff", 240);
    brush.circle(x, y, 2.6, 0.1);
  }

  // sea, dark teal, low
  brush.fill("#08323f", 235);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, 488); brush.vertex(620, 486); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // glints of beam on water
  brush.fill("#9fe0d4", 170);
  for (let i = 0; i < 9; i++) {
    const y = 500 + i * 11, x = 120 + i * 18 + random(-20, 20);
    brush.beginShape(0.5);
    brush.vertex(x, y); brush.vertex(x + random(60, 140), y - 2); brush.vertex(x + 40, y + 4);
    brush.endShape(true);
  }

  // beam sweeping left across the sky, two passes
  for (let pass = 0; pass < 2; pass++) {
    brush.fill("#e8f6d6", pass ? 150 : 110);
    brush.fillBleed(0.3);
    brush.fillTexture(0.35, 0.4);
    brush.beginShape(0.2);
    brush.vertex(470, 382); brush.vertex(-20, pass ? 300 : 260); brush.vertex(-20, pass ? 350 : 400); brush.vertex(470, 392);
    brush.endShape(true);
  }

  // headland, twice for depth
  for (let pass = 0; pass < 2; pass++) {
    brush.fill("#040a14", 245);
    brush.fillBleed(0.15);
    brush.fillTexture(0.35, 0.35);
    brush.beginShape(0.6);
    brush.vertex(380, 500); brush.vertex(420, 470); brush.vertex(460, 458);
    brush.vertex(520, 460); brush.vertex(575, 478); brush.vertex(620, 490);
    brush.vertex(620, 530); brush.vertex(380, 530);
    brush.endShape(true);
  }

  // tower, taller now
  for (let pass = 0; pass < 2; pass++) {
    brush.fill("#e6eef0", 235);
    brush.fillBleed(0.08);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0);
    brush.vertex(460, 392); brush.vertex(482, 392); brush.vertex(492, 468); brush.vertex(450, 468);
    brush.endShape(true);
  }
  brush.fill("#c0303a", 225);
  brush.beginShape(0);
  brush.vertex(457, 418); brush.vertex(486, 418); brush.vertex(488, 434); brush.vertex(455, 434);
  brush.endShape(true);
  brush.beginShape(0);
  brush.vertex(454, 446); brush.vertex(489, 446); brush.vertex(490, 460); brush.vertex(452, 460);
  brush.endShape(true);
  brush.fill("#0a0a1a", 240);
  brush.beginShape(0);
  brush.vertex(458, 376); brush.vertex(471, 364); brush.vertex(484, 376); brush.vertex(484, 392); brush.vertex(458, 392);
  brush.endShape(true);
  brush.fill("#fff3a8", 150);
  brush.fillBleed(0.3);
  brush.circle(471, 385, 22, 0.3);
  brush.fill("#fffbe0", 250);
  brush.circle(471, 385, 7, 0.1);
}
