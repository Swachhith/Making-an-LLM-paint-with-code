async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf3d6");
  randomSeed(2404);

  brush.noStroke();
  let bands = [
    [-20, 120, "#6a1466", 230],
    [70, 200, "#c42048", 225],
    [160, 270, "#ea4a1c", 215],
    [240, 330, "#f79a1b", 200]
  ];
  for (let b of bands) {
    brush.fill(b[2], b[3]);
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5);
    brush.vertex(-20, b[0]);
    brush.vertex(620, b[0] + 15);
    brush.vertex(620, b[1]);
    brush.vertex(-20, b[1] - 10);
    brush.endShape(true);
  }
  brush.fill("#6a1466", 200);
  brush.beginShape(0.5);
  brush.vertex(-20, -20);
  brush.vertex(620, -20);
  brush.vertex(620, 70);
  brush.vertex(-20, 60);
  brush.endShape(true);

  brush.fill("#f26a10", 200);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 300);
  brush.vertex(330, 305);
  brush.vertex(300, 350);
  brush.vertex(-20, 352);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(500, 305);
  brush.vertex(620, 300);
  brush.vertex(620, 352);
  brush.vertex(530, 350);
  brush.endShape(true);

  brush.fill("#ffc21a", 230);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.circle(420, 318, 44, 0.15);

  brush.fill("#7a1a4c", 215);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(-20, 150);
  brush.vertex(80, 132);
  brush.vertex(240, 148);
  brush.vertex(190, 172);
  brush.vertex(20, 176);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(450, 215);
  brush.vertex(560, 196);
  brush.vertex(620, 205);
  brush.vertex(620, 232);
  brush.vertex(480, 234);
  brush.endShape(true);

  for (let p = 0; p < 3; p++) {
    brush.fill(["#3a1a6a", "#24105a", "#140840"][p], 230);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.3);
    brush.vertex(-20, 350 + p * 60);
    brush.vertex(620, 350 + p * 55);
    brush.vertex(620, 620);
    brush.vertex(-20, 620);
    brush.endShape(true);
  }

  for (let i = 0; i < 9; i++) {
    let y = 358 + i * 26;
    let w = 50 + i * 16;
    let x = 420 + random(-12, 12);
    brush.fill(i < 3 ? "#ffc22e" : "#f2702a", 230 - i * 6);
    brush.fillBleed(0.25);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.6);
    brush.vertex(x - w / 2, y);
    brush.vertex(x + w / 2, y + 3);
    brush.vertex(x + w / 3, y + 17);
    brush.vertex(x - w / 3, y + 16);
    brush.endShape(true);
  }
  brush.fill("#0a0418", 230);
  brush.fillBleed(0.15);
  brush.beginShape(0.3);
  brush.vertex(160, 340);
  brush.vertex(186, 340);
  brush.vertex(200, 358);
  brush.vertex(146, 358);
  brush.endShape(true);
  brush.beginShape(0);
  brush.vertex(168, 342);
  brush.vertex(170, 300);
  brush.vertex(188, 338);
  brush.endShape(true);
}
