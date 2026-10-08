async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fff4e6");
  randomSeed(2412);
  brush.noStroke();

  // sky: big sky, two passes each
  brush.fill("#f77a2a", 225);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 230); brush.vertex(420, 310); brush.vertex(300, 250); brush.vertex(120, 330); brush.vertex(-20, 240);
  brush.endShape(true);
  brush.fill("#e04a2a", 215);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 230); brush.vertex(620, 230); brush.vertex(620, 420); brush.vertex(400, 430); brush.vertex(300, 420); brush.vertex(100, 430); brush.vertex(-20, 420);
  brush.endShape(true);
  brush.fill("#c81a8a", 225);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 300); brush.vertex(620, 300); brush.vertex(620, 340); brush.vertex(450, 350); brush.vertex(300, 340); brush.vertex(120, 350); brush.vertex(-20, 330);
  brush.endShape(true);

  // clouds
  brush.fill("#fff4e6", 240);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(200, 200); brush.vertex(320, 190); brush.vertex(360, 210); brush.vertex(240, 220);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(470, 210); brush.vertex(540, 195); brush.vertex(580, 215); brush.vertex(520, 225);
  brush.endShape(true);
  brush.fill("#e04a2a", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.8);
  brush.vertex(150, 240); brush.vertex(230, 230); brush.vertex(270, 245); brush.vertex(190, 255);
  brush.endShape(true);

  // sun
  brush.fill("#ffd84a", 250);
  brush.fillBleed(0.15);
  brush.fillTexture(0.2, 0.2);
  brush.circle(430, 200, 45, 0.2);
  brush.fill("#ffd84a", 225);
  brush.fillBleed(0.1);
  brush.circle(430, 200, 30, 0.2);

  // palm trees, silhouettes
  let palms = [[130, 470, 320, 30, 220, 120, 220], [270, 460, 300, 32, 240, 110, 240], [420, 450, 330, 36, 260, 100, 260], [530, 440, 340, 38, 270, 90, 270]];
  for (let p of palms) {
    let [x, y, w, h, s, l, t] = p;
    brush.fill("#2a121a", 240);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.4);
    brush.vertex(x - w * 0.2, y - h);
    brush.vertex(x, y - h * 0.4);
    brush.vertex(x + w * 0.2, y - h);
    brush.vertex(x + w * 0.25, y - h * 0.55);
    brush.vertex(x + w * 0.15, y - h * 0.7);
    brush.vertex(x + w * 0.2, y - h * 0.72);
    brush.vertex(x + w * 0.35, y - h * 0.85);
    brush.vertex(x + w * 0.3, y - h * 0.95);
    brush.vertex(x + w * 0.32, y - h * 0.98);
    brush.vertex(x + w * 0.28, y - h * 0.95);
    brush.vertex(x + w * 0.22, y - h * 0.85);
    brush.vertex(x + w * 0.2, y - h * 0.72);
    brush.vertex(x + w * 0.15, y - h * 0.7);
    brush.vertex(x + w * 0.25, y - h * 0.55);
    brush.vertex(x + w * 0.2, y - h);
    brush.endShape(true);
    for (let k = 0; k < 5; k++) {
      let off = (k % 2) ? -1 : 1;
      brush.fill("#1a0a10", 230);
      brush.fillBleed(0.15);
      brush.fillTexture(0.4, 0.4);
      brush.beginShape(0.6);
      brush.vertex(x + off * w * 0.25, y - h);
      brush.vertex(x + off * w * 0.4, y - h * 0.55);
      brush.vertex(x + off * w * 0.45, y - h * 0.7);
      brush.vertex(x + off * w * 0.42, y - h * 0.85);
      brush.vertex(x + off * w * 0.38, y - h * 0.95);
      brush.vertex(x + off * w * 0.36, y - h * 0.98);
      brush.vertex(x + off * w * 0.32, y - h * 0.95);
      brush.vertex(x + off * w * 0.3, y - h * 0.85);
      brush.vertex(x + off * w * 0.34, y - h * 0.7);
      brush.vertex(x + off * w * 0.39, y - h * 0.55);
      brush.vertex(x + off * w * 0.44, y - h);
      brush.endShape(true);
    }
    brush.fill("#1a0a10", 250);
    brush.fillBleed(0.1);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.5);
    brush.vertex(x, y - h);
    brush.vertex(x + w * 0.3, y - h * 0.85);
    brush.vertex(x + w * 0.35, y - h * 0.7);
    brush.vertex(x + w * 0.32, y - h * 0.98);
    brush.vertex(x + w * 0.28, y - h * 0.95);
    brush.vertex(x + w * 0.22, y - h * 0.85);
    brush.vertex(x + w * 0.2, y - h * 0.72);
    brush.vertex(x + w * 0.15, y - h * 0.7);
    brush.vertex(x + w * 0.25, y - h * 0.55);
    brush.vertex(x + w * 0.2, y - h);
    brush.endShape(true);
  }
  // ground
  brush.fill("#3a1a12", 235);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 420); brush.vertex(620, 420); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
}
