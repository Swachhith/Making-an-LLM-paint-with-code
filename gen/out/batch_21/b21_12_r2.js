async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fffaf0");
  brush.noStroke();

  // cobalt sky in pieces that stop at the chapel's edges
  let skyParts = [
    [[-20, -20], [270, -20], [270, 150], [70, 256], [70, 440], [-20, 440]],
    [[330, -20], [620, -20], [620, 420], [530, 420], [530, 256], [330, 150]],
    [[270, -20], [330, -20], [330, 50], [270, 50]]
  ];
  for (let part of skyParts) {
    brush.fill("#1a46b0", 225);
    brush.fillBleed(0.12);
    brush.fillTexture(0.45, 0.4);
    brush.beginShape(0);
    for (let v of part) brush.vertex(v[0], v[1]);
    brush.endShape(true);
  }
  brush.fill("#0e2a78", 200);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 70); brush.vertex(330, 50); brush.vertex(270, 50); brush.vertex(-20, 90);
  brush.endShape(true);
  // a couple of bright clouds, left as paper by being ringed with deeper blue
  brush.fill("#2656c0", 190);
  brush.fillBleed(0.25);
  brush.beginShape(0.8);
  brush.vertex(400, 120); brush.vertex(520, 100); brush.vertex(600, 130); brush.vertex(600, 170); brush.vertex(460, 170);
  brush.endShape(true);

  // green hill
  brush.fill("#2e9c3a", 235);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 430); brush.vertex(70, 440); brush.vertex(530, 440); brush.vertex(620, 410); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#157030", 215);
  brush.beginShape(0.6);
  brush.vertex(-20, 520); brush.vertex(300, 490); brush.vertex(620, 530); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // cast shadow of the chapel
  brush.fill("#0f5424", 210);
  brush.beginShape(0.4);
  brush.vertex(530, 440); brush.vertex(620, 426); brush.vertex(620, 470); brush.vertex(520, 462);
  brush.endShape(true);
  // worn path to the door, edged with deep green
  brush.fill("#0f5424", 200);
  brush.fillBleed(0.2);
  brush.beginShape(0.5);
  brush.vertex(250, 452); brush.vertex(262, 452); brush.vertex(220, 620); brush.vertex(190, 620);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(338, 452); brush.vertex(350, 452); brush.vertex(420, 620); brush.vertex(390, 620);
  brush.endShape(true);
  brush.fill("#e6c98a", 190);
  brush.beginShape(0.5);
  brush.vertex(262, 454); brush.vertex(338, 454); brush.vertex(392, 620); brush.vertex(218, 620);
  brush.endShape(true);

  // poppies
  let pops = [[50, 560], [100, 592], [470, 578], [520, 556], [566, 590], [24, 600], [150, 570]];
  for (let p of pops) {
    brush.fill("#ea2a18", 240);
    brush.fillBleed(0.15);
    brush.circle(p[0], p[1], 8, 0.5);
  }

  // shadow faces on the white chapel, violet
  brush.fill("#8a6cc8", 195);
  brush.fillBleed(0.12);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0);
  brush.vertex(430, 262); brush.vertex(530, 262); brush.vertex(530, 440); brush.vertex(430, 440);
  brush.endShape(true);
  brush.beginShape(0);
  brush.vertex(310, 54); brush.vertex(330, 54); brush.vertex(330, 150); brush.vertex(310, 150);
  brush.endShape(true);
  // eave shadow under the roof
  brush.fill("#b8a4e0", 170);
  brush.beginShape(0.2);
  brush.vertex(72, 270); brush.vertex(528, 270); brush.vertex(528, 290); brush.vertex(72, 288);
  brush.endShape(true);

  // red roof
  brush.fill("#d8321c", 240);
  brush.fillBleed(0.15);
  brush.fillTexture(0.45, 0.4);
  brush.beginShape(0);
  brush.vertex(62, 258); brush.vertex(270, 148); brush.vertex(330, 148); brush.vertex(538, 258); brush.vertex(538, 272); brush.vertex(62, 272);
  brush.endShape(true);
  brush.fill("#a8200e", 190);
  brush.beginShape(0);
  brush.vertex(330, 148); brush.vertex(538, 258); brush.vertex(538, 272); brush.vertex(400, 200);
  brush.endShape(true);
  // tower cap and cross
  brush.fill("#d8321c", 235);
  brush.beginShape(0);
  brush.vertex(262, 56); brush.vertex(300, 26); brush.vertex(338, 56);
  brush.endShape(true);
  brush.fill("#2a1f4a", 235);
  brush.beginShape(0);
  brush.vertex(294, -4); brush.vertex(306, -4); brush.vertex(306, 28); brush.vertex(294, 28);
  brush.endShape(true);
  brush.beginShape(0);
  brush.vertex(286, 6); brush.vertex(314, 6); brush.vertex(314, 14); brush.vertex(286, 14);
  brush.endShape(true);
  // bell opening with a gold bell
  brush.fill("#2a1f4a", 230);
  brush.beginShape(0.4);
  brush.vertex(284, 118); brush.vertex(284, 86); brush.vertex(300, 72); brush.vertex(316, 86); brush.vertex(316, 118);
  brush.endShape(true);
  brush.fill("#f0b81a", 240);
  brush.circle(300, 100, 8, 0.3);

  // arched blue door and windows
  brush.fill("#1e5fbf", 240);
  brush.fillBleed(0.12);
  brush.beginShape(0.4);
  brush.vertex(266, 440); brush.vertex(266, 370); brush.vertex(300, 336); brush.vertex(334, 370); brush.vertex(334, 440);
  brush.endShape(true);
  for (let x of [150, 460]) {
    brush.fill(x > 400 ? "#154a9a" : "#1e5fbf", 235);
    brush.beginShape(0.4);
    brush.vertex(x - 18, 390); brush.vertex(x - 18, 330); brush.vertex(x, 310); brush.vertex(x + 18, 330); brush.vertex(x + 18, 390);
    brush.endShape(true);
  }
  // step shadow at the door
  brush.fill("#8a6cc8", 180);
  brush.beginShape(0.2);
  brush.vertex(250, 440); brush.vertex(350, 440); brush.vertex(356, 452); brush.vertex(244, 452);
  brush.endShape(true);
}
