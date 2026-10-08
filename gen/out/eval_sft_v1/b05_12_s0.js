async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcf6ef");
  randomSeed(2025);
  brush.noStroke();

  // soft lilac sky wash
  brush.fill("#d8c9e8", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 200); brush.vertex(300, 350); brush.vertex(-20, 220);
  brush.endShape(true);

  // stems
  brush.fill("#8a9a6a", 210);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.5);
  brush.vertex(300, 500); brush.vertex(310, 500); brush.vertex(315, 430); brush.vertex(305, 430);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(130, 520); brush.vertex(140, 520); brush.vertex(145, 470); brush.vertex(135, 470);
  brush.endShape(true);

  // peony 1: upper right, facing left
  let cx = 470, cy = 220;
  for (let pass = 0; pass < 2; pass++) {
    brush.fill(pass ? "#f08a8a" : "#e86a6a", pass ? 220 : 190);
    brush.fillBleed(0.28);
    brush.fillTexture(0.45, 0.45);
    for (let i = 0; i < 12; i++) {
      let a = i * 30 + random(-6, 6), r = random(30, 70);
      brush.circle(cx + cos(a) * r, cy + sin(a) * r, 16, 0.35);
    }
  }
  brush.fill("#c44a4a", 210);
  brush.fillBleed(0.22);
  brush.fillTexture(0.4, 0.4);
  for (let i = 0; i < 14; i++) {
    let a = i * 25 + random(-5, 5), r = random(38, 58);
    brush.circle(cx + cos(a) * r, cy + sin(a) * r, 12, 0.3);
  }
  brush.fill("#8a2a2a", 200);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  for (let i = 0; i < 10; i++) {
    let a = i * 36, r = random(30, 40);
    brush.circle(cx + cos(a) * r, cy + sin(a) * r, 8, 0.25);
  }

  // peony 2: lower left, facing up-right
  cx = 130; cy = 430;
  for (let pass = 0; pass < 2; pass++) {
    brush.fill(pass ? "#f4a08a" : "#e88070", pass ? 220 : 190);
    brush.fillBleed(0.28);
    brush.fillTexture(0.45, 0.45);
    for (let i = 0; i < 12; i++) {
      let a = i * 30 + random(-6, 6), r = random(30, 70);
      brush.circle(cx + cos(a) * r, cy + sin(a) * r, 16, 0.35);
    }
  }
  brush.fill("#c45a4a", 210);
  brush.fillBleed(0.22);
  brush.fillTexture(0.4, 0.4);
  for (let i = 0; i < 14; i++) {
    let a = i * 25 + random(-5, 5), r = random(38, 58);
    brush.circle(cx + cos(a) * r, cy + sin(a) * r, 12, 0.3);
  }
  brush.fill("#8a2a2a", 200);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  for (let i = 0; i < 10; i++) {
    let a = i * 36, r = random(30, 40);
    brush.circle(cx + cos(a) * r, cy + sin(a) * r, 8, 0.25);
  }
  // a few soft green leaves
  brush.fill("#9ac08a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(250, 330); brush.vertex(290, 300); brush.vertex(330, 310); brush.vertex(310, 340);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(470, 350); brush.vertex(510, 330); brush.vertex(545, 355); brush.vertex(520, 380);
  brush.endShape(true);
}
