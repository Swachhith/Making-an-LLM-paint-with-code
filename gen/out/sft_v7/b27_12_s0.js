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

  // misty sky, layered planes
  brush.fill("#a8b6c8", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 220); brush.vertex(-20, 250);
  brush.endShape(true);
  brush.fill("#7a8aa0", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(-20, 220); brush.vertex(620, 200); brush.vertex(620, 370); brush.vertex(-20, 400);
  brush.endShape(true);

  // far bank: dark blue-green, two passes
  brush.fill("#5f7a8a", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 400); brush.vertex(150, 370); brush.vertex(320, 390); brush.vertex(620, 360); brush.vertex(620, 420); brush.vertex(-20, 440);
  brush.endShape(true);
  brush.fill("#3f5568", 190);
  brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(-20, 420); brush.vertex(180, 400); brush.vertex(340, 420); brush.vertex(620, 400); brush.vertex(620, 460); brush.vertex(-20, 480);
  brush.endShape(true);

  // lake, reflection of sky, darker near the bank
  brush.fill("#8fa8b8", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 400); brush.vertex(620, 390); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#6a8a9a", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 460); brush.vertex(620, 450); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // soft reflection of the far bank, broken
  brush.fill("#5f7a8a", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(-20, 560); brush.vertex(100, 530); brush.vertex(200, 550); brush.vertex(300, 520); brush.vertex(420, 540); brush.vertex(620, 510); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // reeds: two rows, left and right, long soft strokes
  let rows = [[100, 520], [470, 530]];
  for (let row of rows) {
    for (let k = 0; k < 3; k++) {
      let x = row[0] + k * 18;
      let y = row[1] + k * 6;
      brush.fill("#7a9a6a", 190);
      brush.fillBleed(0.3);
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(0.5);
      brush.vertex(x, y); brush.vertex(x + 160, y - 20); brush.vertex(x + 170, y - 140); brush.vertex(x + 150, y - 140); brush.vertex(x + 160, y - 20);
      brush.endShape(true);
      brush.fill("#4f6a50", 180);
      brush.beginShape(0.5);
      brush.vertex(x + 60, y); brush.vertex(x + 130, y - 18); brush.vertex(x + 136, y - 110); brush.vertex(x + 118, y - 110); brush.vertex(x + 124, y - 18);
      brush.endShape(true);
    }
  }
  // reed stems, vertical
  for (let i = 0; i < 24; i++) {
    let x = 100 + i * 13;
    let y = 520 + (i % 3) * 6;
    brush.fill("#5f7a50", 190);
    brush.fillBleed(0.25);
    brush.beginShape(0.3);
    brush.vertex(x, y); brush.vertex(x + 6, y - 130); brush.vertex(x + 12, y - 130); brush.vertex(x + 6, y);
    brush.endShape(true);
  }
  // right bank reeds
  for (let i = 0; i < 22; i++) {
    let x = 470 + i * 15;
    let y = 530 + (i % 3) * 6;
    brush.fill("#5f7a50", 190);
    brush.fillBleed(0.25);
    brush.beginShape(0.3);
    brush.vertex(x, y); brush.vertex(x - 6, y - 130); brush.vertex(x - 12, y - 130); brush.vertex(x - 6, y);
    brush.endShape(true);
  }
}
