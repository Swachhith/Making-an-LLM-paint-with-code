async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2f6f9");
  randomSeed(13);
  brush.noStroke();

  // cool light: soft blue-grey sky
  brush.fill("#a9b8c8", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 300); brush.vertex(-20, 320);
  brush.endShape(true);
  brush.fill("#eef4f8", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 300); brush.vertex(620, 300); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // ground: cool sage, left as paper where the trunk stands
  brush.fill("#b7c7b8", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 500); brush.vertex(620, 490); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // the birch: a tall column, most of the canvas
  const trunkW = 60;
  for (let p = 0; p < 3; p++) {
    brush.fill("#f4f5f0", 230);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.1);
    brush.vertex(-10, 500 - p * 30);
    brush.vertex(trunkW / 2, 500 - p * 30);
    brush.vertex(trunkW / 2, 200);
    brush.vertex(-10, 200);
    brush.endShape(true);
  }
  // crown: wide, pale, with darker shadow side
  let cx = 300, cy = 200;
  for (let p = 0; p < 3; p++) {
    brush.fill("#f6f7f4", 230);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.6);
    brush.vertex(cx - 170, cy + 40); brush.vertex(cx - 120, cy - 20); brush.vertex(cx - 70, cy - 90);
    brush.vertex(cx - 20, cy - 140); brush.vertex(cx + 20, cy - 130); brush.vertex(cx + 70, cy - 95);
    brush.vertex(cx + 120, cy - 22); brush.vertex(cx + 170, cy + 40);
    brush.endShape(true);
  }
  // shadowed side of the crown
  for (let p = 0; p < 2; p++) {
    brush.fill("#c4c9c2", 200);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.6);
    brush.vertex(cx - 120, cy + 20); brush.vertex(cx - 70, cy + 60); brush.vertex(cx - 30, cy + 110);
    brush.vertex(cx + 30, cy + 100); brush.vertex(cx + 70, cy + 60); brush.vertex(cx + 120, cy + 20);
    brush.endShape(true);
  }
  // mossy lower crown
  for (let p = 0; p < 2; p++) {
    brush.fill("#6f8a6a", 190);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.8);
    brush.vertex(cx - 140, cy + 130); brush.vertex(cx - 90, cy + 160); brush.vertex(cx - 40, cy + 180);
    brush.vertex(cx + 40, cy + 170); brush.vertex(cx + 90, cy + 150); brush.vertex(cx + 140, cy + 130);
    brush.endShape(true);
  }
  // a second birch, smaller, off-centre
  brush.fill("#f4f5f0", 230);
  brush.fillBleed(0.15);
  brush.beginShape(0.1);
  brush.vertex(250, 450); brush.vertex(270, 450); brush.vertex(270, 200); brush.vertex(250, 200);
  brush.endShape(true);
  brush.fill("#f6f7f4", 230);
  brush.beginShape(0.6);
  brush.vertex(250, 220); brush.vertex(270, 160); brush.vertex(290, 200); brush.vertex(270, 260);
  brush.endShape(true);
  brush.fill("#c4c9c2", 200);
  brush.beginShape(0.6);
  brush.vertex(260, 230); brush.vertex(280, 190); brush.vertex(300, 230); brush.vertex(280, 270);
  brush.endShape(true);
  // a few fallen birch trunks
  for (let i = 0; i < 3; i++) {
    let x = random(300, 470), y = random(300, 470), a = random(0, 360), w = random(20, 30);
    brush.fill("#f4f5f0", 230);
    brush.fillBleed(0.15);
    brush.beginShape(0.1);
    brush.vertex(x - w, y); brush.vertex(x + w, y); brush.vertex(x + w * 0.9, y + random(0, 80)); brush.vertex(x - w * 0.9, y + random(0, 80));
    brush.endShape(true);
  }
}
