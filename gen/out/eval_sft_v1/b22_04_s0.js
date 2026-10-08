async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2f4f6");
  brush.noStroke();

  // misty sky: pale lavender, soft
  brush.fill("#b8c4d8", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 180); brush.vertex(470, 220); brush.vertex(350, 210); brush.vertex(230, 230); brush.vertex(90, 215); brush.vertex(-20, 190);
  brush.endShape(true);

  // distant hill
  brush.fill("#9aa8b8", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(-20, 225); brush.vertex(150, 210); brush.vertex(300, 225); brush.vertex(450, 212); brush.vertex(620, 230); brush.vertex(620, 250); brush.vertex(-20, 250);
  brush.endShape(true);

  // meadow: soft green, very pale
  brush.fill("#a8c8a0", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, 250); brush.vertex(620, 250); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // poppies: stems as pale stems, blooms as soft red circles
  const poppies = [
    [300, 400, 22], [312, 420, 19], [298, 440, 17], [306, 460, 20],
    [420, 390, 24], [434, 410, 22], [418, 430, 20], [430, 450, 23],
    [530, 380, 23], [545, 400, 21], [532, 420, 19],
    [150, 450, 20], [164, 470, 18], [146, 490, 22],
    [470, 480, 21], [484, 500, 19], [466, 520, 22],
    [230, 500, 20], [244, 520, 18], [226, 540, 22],
    [50, 470, 19], [62, 490, 21], [46, 510, 20],
    [520, 500, 22], [534, 520, 20], [516, 540, 22],
    [360, 530, 21], [374, 550, 19], [356, 570, 22],
    [100, 560, 22], [114, 580, 20], [96, 600, 22],
    [560, 570, 21], [574, 590, 19], [556, 610, 22]
  ];
  for (const p of poppies) {
    const [x, y, r] = p;
    brush.fill("#c93a44", 200);
    brush.fillBleed(0.28);
    brush.fillTexture(0.45, 0.45);
    brush.circle(x, y, r, 0.5);
    brush.fill("#9a2a38", 170);
    brush.fillBleed(0.25);
    brush.circle(x, y, r * 0.7, 0.55);
    brush.fill("#7a2232", 150);
    brush.fillBleed(0.22);
    brush.circle(x, y, r * 0.45, 0.6);
  }
  // soft stems
  for (const p of poppies) {
    const [x, y, r] = p;
    brush.fill("#8aa070", 190);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.4);
    brush.vertex(x - 3, y); brush.vertex(x + 3, y); brush.vertex(x + 5, y + 60); brush.vertex(x - 5, y + 60);
    brush.endShape(true);
  }
}
