async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6f8f9");
  randomSeed(26082);
  brush.noStroke();

  // sky: ultramarine, with white cumulus left as paper
  brush.fill("#2a66d0", 195);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 520); brush.vertex(-20, 520);
  brush.vertex(-20, 250); brush.vertex(60, 260); brush.vertex(140, 220); brush.vertex(120, 170); brush.vertex(40, 160); brush.vertex(-20, 190);
  brush.endShape(true);
  brush.fill("#163ea0", 190);
  brush.beginShape(0.7);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 140); brush.vertex(280, 90); brush.vertex(-20, 130);
  brush.endShape(true);

  // grass rising steeply to the house
  brush.fill("#48b030", 215);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 470); brush.vertex(150, 490); brush.vertex(450, 490); brush.vertex(620, 450);
  brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#1a6a1e", 205);
  brush.beginShape(0.6);
  brush.vertex(-20, 555); brush.vertex(300, 540); brush.vertex(620, 565); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // walls: bright front, shadowed side, strongly converging upward
  brush.fill("#f6c850", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0);
  brush.vertex(90, 495); brush.vertex(390, 510); brush.vertex(368, 262); brush.vertex(150, 246);
  brush.endShape(true);
  brush.fill("#d07a28", 215);
  brush.beginShape(0);
  brush.vertex(390, 510); brush.vertex(560, 470); brush.vertex(508, 270); brush.vertex(368, 262);
  brush.endShape(true);

  // red roof overhanging hard
  brush.fill("#e82818", 225);
  brush.fillBleed(0.22);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0);
  brush.vertex(60, 252); brush.vertex(400, 274); brush.vertex(345, 120); brush.vertex(195, 108);
  brush.endShape(true);
  brush.fill("#c0140e", 210);
  brush.beginShape(0);
  brush.vertex(100, 240); brush.vertex(385, 258); brush.vertex(340, 140); brush.vertex(205, 130);
  brush.endShape(true);
  brush.fill("#8e0c0a", 215);
  brush.beginShape(0);
  brush.vertex(345, 120); brush.vertex(400, 274); brush.vertex(530, 276);
  brush.endShape(true);
  brush.fill("#5e0608", 210);
  brush.beginShape(0);
  brush.vertex(60, 252); brush.vertex(530, 276); brush.vertex(528, 296); brush.vertex(70, 272);
  brush.endShape(true);

  // chimney
  brush.fill("#6a2414", 225);
  brush.beginShape(0);
  brush.vertex(270, 118); brush.vertex(306, 121); brush.vertex(300, 42); brush.vertex(276, 44);
  brush.endShape(true);

  // door and windows
  brush.fill("#1238a0", 232);
  brush.beginShape(0);
  brush.vertex(215, 500); brush.vertex(272, 503); brush.vertex(268, 385); brush.vertex(219, 382);
  brush.endShape(true);
  brush.fill("#183060", 228);
  let wins = [[148, 312, 52], [296, 318, 50]];
  for (let w of wins) {
    let [x, y, s] = w;
    brush.beginShape(0);
    brush.vertex(x, y + s); brush.vertex(x + s, y + s + 2); brush.vertex(x + s - 2, y); brush.vertex(x + 2, y - 2);
    brush.endShape(true);
  }
  brush.beginShape(0);
  brush.vertex(425, 400); brush.vertex(495, 386); brush.vertex(485, 322); brush.vertex(420, 328);
  brush.endShape(true);

  // flower border and tall grass in front, huge because it's close
  for (let k = 0; k < 16; k++) {
    brush.fill(k % 3 == 0 ? "#f5a010" : "#e8203a", 232);
    brush.circle(90 + k * 30 + random(-8, 8), 505 + random(-4, 14), random(8, 13), true);
  }
  brush.fill("#0e5214", 220);
  for (let k = 0; k < 11; k++) {
    let x = random(-10, 600);
    brush.beginShape(0.4);
    brush.vertex(x, 620); brush.vertex(x + random(-10, 20), 520 + random(-20, 20)); brush.vertex(x + 24, 620);
    brush.endShape(true);
  }
}
