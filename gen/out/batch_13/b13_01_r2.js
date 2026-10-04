async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#101014");
  randomSeed(41);
  brush.noStroke();
  // a big smoky corona, warm, three loose washes
  brush.fill("#3c3028", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(330, 250, 230, 0.7);
  brush.fill("#5e4630", 185);
  brush.fillBleed(0.3);
  brush.circle(330, 250, 150, 0.6);
  brush.fill("#8a6438", 170);
  brush.fillBleed(0.28);
  brush.circle(330, 250, 104, 0.5);
  // moon: stacked warm passes so it glows gold rather than grey
  brush.fill("#ffd98a", 250);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.circle(330, 250, 84, 0.1);
  brush.fill("#ffe7a8", 245);
  brush.fillBleed(0.12);
  brush.circle(326, 246, 72, 0.08);
  brush.fill("#fff2c6", 235);
  brush.fillBleed(0.1);
  brush.circle(320, 240, 52, 0.08);
  brush.fill("#d8a860", 150);
  brush.fillBleed(0.25);
  brush.circle(350, 232, 18, 0.6);
  brush.circle(312, 270, 14, 0.6);
  // thin inky clouds drifting across the lower half of the moon
  brush.fill("#0a0a0e", 220);
  brush.fillBleed(0.3);
  brush.beginShape(1);
  brush.vertex(120, 300);
  brush.vertex(300, 286);
  brush.vertex(470, 300);
  brush.vertex(520, 318);
  brush.vertex(330, 316);
  brush.vertex(150, 322);
  brush.endShape(true);
  brush.beginShape(1);
  brush.vertex(200, 400);
  brush.vertex(440, 388);
  brush.vertex(600, 404);
  brush.vertex(420, 418);
  brush.vertex(220, 418);
  brush.endShape(true);
  // stars, fewer near the moon
  for (let i = 0; i < 60; i++) {
    let x = random(0, 600), y = random(0, 460);
    if (dist(x, y, 330, 250) < 190) continue;
    brush.fill("#f2e4c0", 220);
    brush.fillBleed(0.05);
    brush.circle(x, y, random(0.8, 2.2), 0.2);
  }
  // sea
  brush.fill("#040406", 245);
  brush.fillBleed(0.15);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0);
  brush.vertex(-10, 486);
  brush.vertex(610, 484);
  brush.vertex(610, 610);
  brush.vertex(-10, 610);
  brush.endShape(true);
  // the moon road: broken gold strokes, broader and looser toward the viewer
  for (let j = 0; j < 20; j++) {
    let y = 490 + j * 6;
    let w = 10 + j * 5;
    for (let s = -1; s <= 1; s += 2) {
      let ox = s * random(0, w * 0.6);
      brush.fill(random() < 0.5 ? "#ffd280" : "#e8a850", 230 - j * 3);
      brush.fillBleed(0.18);
      brush.beginShape(1);
      brush.vertex(330 + ox - w * 0.6, y);
      brush.vertex(330 + ox + w * 0.6, y - 1);
      brush.vertex(330 + ox + w * 0.3, y + 4);
      brush.vertex(330 + ox - w * 0.3, y + 4);
      brush.endShape(true);
    }
  }
  // a distant headland with lamps, right side this time
  brush.fill("#18161a", 235);
  brush.fillBleed(0.2);
  brush.beginShape(1);
  brush.vertex(430, 486);
  brush.vertex(520, 470);
  brush.vertex(610, 464);
  brush.vertex(610, 490);
  brush.endShape(true);
  let lamps = [[480, 480], [506, 476], [534, 473], [566, 470], [590, 470]];
  for (let p of lamps) {
    brush.fill("#ffae44", 250);
    brush.fillBleed(0.12);
    brush.circle(p[0], p[1], 3, 0.3);
    brush.fill("#c86a24", 180);
    brush.fillBleed(0.3);
    brush.beginShape(1);
    brush.vertex(p[0] - 3, p[1] + 12);
    brush.vertex(p[0] + 3, p[1] + 12);
    brush.vertex(p[0] + 1, p[1] + 38);
    brush.vertex(p[0] - 1, p[1] + 38);
    brush.endShape(true);
  }
}
