async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf1dc");

  brush.noStroke();
  let bands = [
    [-20, 110, "#7a1e6e", 220],
    [80, 200, "#c42a4a", 215],
    [170, 280, "#ea5a24", 210],
    [250, 355, "#f7a21b", 200]
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

  brush.fill("#ffd23a", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.circle(415, 318, 42, 0.2);
  brush.fill("#fff08a", 200);
  brush.circle(415, 318, 26, 0.2);

  brush.fill("#8a2a5c", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(-20, 150);
  brush.vertex(80, 135);
  brush.vertex(220, 150);
  brush.vertex(180, 170);
  brush.vertex(20, 172);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(470, 210);
  brush.vertex(560, 195);
  brush.vertex(620, 205);
  brush.vertex(620, 228);
  brush.vertex(500, 230);
  brush.endShape(true);

  brush.fill("#2b1a5a", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.2);
  brush.vertex(-20, 352);
  brush.vertex(620, 350);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#1a0f3e", 200);
  brush.beginShape(0.5);
  brush.vertex(-20, 470);
  brush.vertex(620, 450);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);

  randomSeed(244);
  for (let i = 0; i < 14; i++) {
    let y = 362 + i * 16;
    let w = 30 + i * 9 + random(-10, 10);
    brush.fill(i < 5 ? "#ffc22e" : "#f2702a", 220 - i * 5);
    brush.fillBleed(0.25);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.4);
    brush.vertex(415 - w / 2 + random(-10, 10), y);
    brush.vertex(415 + w / 2 + random(-10, 10), y + 2);
    brush.vertex(415 + w / 2 - 8, y + 19);
    brush.vertex(415 - w / 2 + 8, y + 18);
    brush.endShape(true);
  }
}
