async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8e0d4");
  brush.noStroke();

  // dusky sky: violet fading to indigo
  brush.fill("#7a6fa8", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 300); brush.vertex(400, 320); brush.vertex(200, 290); brush.vertex(-20, 310);
  brush.endShape(true);
  brush.fill("#4a3f7a", 160);
  brush.beginShape(0.6);
  brush.vertex(-20, 200); brush.vertex(620, 200); brush.vertex(620, 420); brush.vertex(300, 430); brush.vertex(-20, 410);
  brush.endShape(true);
  // a few stars
  for (let i = 0; i < 12; i++) {
    brush.fill("#f6efe2", 220);
    brush.fillBleed(0.05);
    brush.circle(random(-10, 610), random(-10, 300), random(1.2, 2.5), 0.1);
  }

  // distant field: warm brown
  brush.fill("#a88a68", 180);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 410); brush.vertex(620, 410); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // meadow grasses
  for (let i = 0; i < 30; i++) {
    let x = random(-10, 610), y = random(420, 620);
    brush.fill("#7a6a4a", 170);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.5);
    brush.vertex(x, y); brush.vertex(x + 12, y - 10); brush.vertex(x + 28, y + 6); brush.vertex(x + 14, y + 18);
    brush.endShape(true);
  }

  // baobab trunk: wide, soft, two passes
  brush.fill("#8c6a4a", 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(270, 320); brush.vertex(290, 320); brush.vertex(300, 620); brush.vertex(280, 620);
  brush.endShape(true);
  brush.fill("#6e523a", 200);
  brush.beginShape(0.4);
  brush.vertex(274, 320); brush.vertex(294, 320); brush.vertex(302, 620); brush.vertex(282, 620);
  brush.endShape(true);

  // crown: wide shallow dome, three passes
  for (let p = 0; p < 3; p++) {
    brush.fill("#5a4434", 210 - p * 10);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.7);
    brush.vertex(270, 320); brush.vertex(200, 200); brush.vertex(130, 230); brush.vertex(180, 290); brush.vertex(240, 270); brush.vertex(320, 250); brush.vertex(380, 270); brush.vertex(440, 290); brush.vertex(490, 230); brush.vertex(420, 200);
    brush.endShape(true);
  }
  // lower crown
  brush.fill("#5a4434", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(270, 320); brush.vertex(160, 400); brush.vertex(300, 420); brush.vertex(440, 400); brush.vertex(340, 380);
  brush.endShape(true);
  // crown shadow
  brush.fill("#3a2a22", 160);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(270, 320); brush.vertex(210, 230); brush.vertex(330, 230); brush.vertex(290, 320);
  brush.endShape(true);
}
