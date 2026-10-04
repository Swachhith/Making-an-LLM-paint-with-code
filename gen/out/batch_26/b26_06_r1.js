async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcf3e0");
  randomSeed(2666);
  brush.noStroke();

  // gold at the top, apricot near the horizon; paper glow left around the sun
  brush.fill("#e0a858", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 300); brush.vertex(520, 330);
  brush.vertex(440, 250); brush.vertex(340, 240); brush.vertex(260, 330); brush.vertex(-20, 320);
  brush.endShape(true);
  brush.fill("#f09a6a", 170);
  brush.beginShape(0.7);
  brush.vertex(-20, 300); brush.vertex(240, 350); brush.vertex(300, 410); brush.vertex(480, 400);
  brush.vertex(620, 300); brush.vertex(620, 440); brush.vertex(-20, 440);
  brush.endShape(true);

  // big soft cloud masses drifting, rosy undersides
  let clouds = [[40, 90, 260], [330, 60, 240], [150, 210, 200], [470, 190, 170]];
  for (let c of clouds) {
    let [x, y, w] = c;
    brush.fill("#e8a07a", 170);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.9);
    brush.vertex(x, y + 30); brush.vertex(x + w * 0.15, y); brush.vertex(x + w * 0.45, y - 25);
    brush.vertex(x + w * 0.8, y - 10); brush.vertex(x + w, y + 25); brush.vertex(x + w * 0.5, y + 45);
    brush.endShape(true);
    brush.fill("#c86a60", 180);
    brush.beginShape(0.9);
    brush.vertex(x + w * 0.1, y + 32); brush.vertex(x + w * 0.5, y + 20); brush.vertex(x + w * 0.95, y + 28); brush.vertex(x + w * 0.5, y + 46);
    brush.endShape(true);
  }

  // violet hills along the low horizon
  brush.fill("#9a809a", 200);
  brush.beginShape(0.7);
  brush.vertex(-20, 440); brush.vertex(110, 416); brush.vertex(250, 432); brush.vertex(420, 410);
  brush.vertex(620, 428); brush.vertex(620, 468); brush.vertex(-20, 468);
  brush.endShape(true);

  // meadows
  brush.fill("#c4903e", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 458); brush.vertex(620, 455); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#8a5628", 200);
  brush.beginShape(0.6);
  brush.vertex(-20, 520); brush.vertex(130, 505); brush.vertex(250, 600); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(620, 500); brush.vertex(470, 520); brush.vertex(400, 620); brush.vertex(620, 620);
  brush.endShape(true);

  // river: dark banks first, then the bright sky-coloured water inside
  let path = [[340, 460], [300, 475], [370, 500], [240, 540], [360, 620]];
  brush.fill("#6a3a22", 210);
  brush.fillBleed(0.2);
  brush.beginShape(0.9);
  for (let i = 0; i < path.length; i++) brush.vertex(path[i][0] - 8 - i * 20, path[i][1]);
  for (let i = path.length - 1; i >= 0; i--) brush.vertex(path[i][0] + 8 + i * 20, path[i][1] + 4);
  brush.endShape(true);
  brush.fill("#f4c070", 230);
  brush.beginShape(0.9);
  for (let i = 0; i < path.length; i++) brush.vertex(path[i][0] - 4 - i * 14, path[i][1] + 2);
  for (let i = path.length - 1; i >= 0; i--) brush.vertex(path[i][0] + 4 + i * 14, path[i][1] + 4);
  brush.endShape(true);
  brush.fill("#f09a6a", 200);
  brush.beginShape(0.9);
  for (let i = 1; i < path.length; i++) brush.vertex(path[i][0] - i * 6, path[i][1] + 4);
  for (let i = path.length - 1; i >= 1; i--) brush.vertex(path[i][0] + i * 6, path[i][1] + 6);
  brush.endShape(true);

  // trees on the bank
  brush.fill("#4a2a1e", 215);
  for (let k = 0; k < 6; k++) brush.circle(150 + k * 26 + random(-6, 6), 455 + random(-4, 4), random(8, 14), true);
  for (let k = 0; k < 4; k++) brush.circle(440 + k * 24, 452 + random(-3, 3), random(7, 11), true);
}
