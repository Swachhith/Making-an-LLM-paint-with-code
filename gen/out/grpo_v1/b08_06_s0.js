async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2eef0");
  brush.noStroke();
  // sky: bold cerulean
  brush.fill("#2a7fd8", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 250); brush.vertex(470, 270); brush.vertex(330, 230); brush.vertex(180, 270); brush.vertex(-20, 250);
  brush.endShape(true);
  // sea: turquoise, low and wide
  brush.fill("#1fa3b8", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, 270); brush.vertex(620, 270); brush.vertex(620, 400); brush.vertex(-20, 400);
  brush.endShape(true);
  // distant dark headland
  brush.fill("#144a7a", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.2);
  brush.vertex(200, 250); brush.vertex(300, 230); brush.vertex(380, 240); brush.vertex(420, 260); brush.vertex(300, 300); brush.vertex(200, 320);
  brush.endShape(true);
  // hillside rising from sea level to the village
  brush.fill("#8a3a1a", 225);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(330, 320); brush.vertex(400, 280); brush.vertex(480, 250); brush.vertex(560, 270); brush.vertex(620, 320); brush.vertex(620, 620); brush.vertex(-20, 620); brush.vertex(-20, 350);
  brush.endShape(true);
  // village houses, seen from below: clustered on the slope
  let houses = [[100, 380, 60, 80], [170, 370, 50, 70], [240, 360, 65, 90], [320, 350, 55, 80], [400, 340, 60, 85], [470, 355, 50, 75], [540, 370, 55, 80]];
  for (let h of houses) {
    let [x, y, w, ht] = h;
    brush.fill("#d8381e", 220);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.1);
    brush.vertex(x, y + ht); brush.vertex(x + w, y + ht); brush.vertex(x + w, y); brush.vertex(x, y);
    brush.endShape(true);
    brush.fill("#f0a00a", 210);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.1);
    brush.vertex(x - 10, y + ht - 12); brush.vertex(x + w + 10, y + ht - 12); brush.vertex(x + w + 10, y - 10); brush.vertex(x - 10, y - 10);
    brush.endShape(true);
    // chimneys
    brush.fill("#3a1a0a", 220);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.1);
    brush.vertex(x + w * 0.3, y - 20); brush.vertex(x + w * 0.3 + 12, y - 20); brush.vertex(x + w * 0.3 + 12, y - 50); brush.vertex(x + w * 0.3, y - 50);
    brush.endShape(true);
    brush.beginShape(0.1);
    brush.vertex(x + w * 0.7, y - 20); brush.vertex(x + w * 0.7 + 12, y - 20); brush.vertex(x + w * 0.7 + 12, y - 50); brush.vertex(x + w * 0.7, y - 50);
    brush.endShape(true);
  }
  // a few trees on the hill
  for (let t of [[130, 420, 28], [200, 430, 30], [420, 410, 26], [490, 420, 24]]) {
    brush.fill("#145a2a", 215);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5);
    brush.vertex(t[0], t[3]); brush.vertex(t[0] + 10, t[3] - 15); brush.vertex(t[0] + 20, t[3] - 30); brush.vertex(t[0] + 15, t[3] - 40); brush.vertex(t[0] - 15, t[3] - 40); brush.vertex(t[0] - 20, t[3] - 30); brush.vertex(t[0] - 10, t[3] - 15);
    brush.endShape(true);
  }
  // sea spray on the wind
  brush.fill("#bfe6f2", 170);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  for (let i = 0; i < 12; i++) {
    brush.circle(300 + i * 28, 360 + i * 4, 5 + i * 0.8, 0.4);
  }
  // sun low over the hill
  brush.fill("#ffd83a", 230);
  brush.fillBleed(0.25);
  brush.fillTexture(0.3, 0.3);
  brush.circle(560, 200, 45, 0.4);
  // a figure on the hill
  brush.fill("#2a1a3a", 220);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.1);
  brush.vertex(340, 430); brush.vertex(346, 430); brush.vertex(350, 450); brush.vertex(344, 450);
  brush.endShape(true);
  brush.circle(344, 410, 6, 0.3);
  // white cliffs on the far side
  brush.fill("#e0d0c0", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.2);
  brush.vertex(200, 230); brush.vertex(620, 230); brush.vertex(620, 260); brush.vertex(200, 260);
  brush.endShape(true);
}
