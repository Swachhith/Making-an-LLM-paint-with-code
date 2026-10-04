async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcf2de");
  randomSeed(26062);
  brush.noStroke();

  // sky: golden overall, rose toward the horizon, paper glow around the sun at right
  brush.fill("#e8b060", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.7);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 250); brush.vertex(480, 330);
  brush.vertex(400, 300); brush.vertex(-20, 360);
  brush.endShape(true);
  brush.fill("#f0906a", 175);
  brush.beginShape(0.8);
  brush.vertex(-20, 320); brush.vertex(300, 330); brush.vertex(400, 390); brush.vertex(620, 350);
  brush.vertex(620, 440); brush.vertex(-20, 440);
  brush.endShape(true);

  // long flat clouds, broad and low-curvature, with violet bellies
  let clouds = [[-40, 70, 340, 40], [260, 130, 380, 34], [-20, 230, 280, 28], [380, 260, 260, 24]];
  for (let c of clouds) {
    let [x, y, w, h] = c;
    brush.fill("#e89a80", 170);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.6);
    brush.vertex(x, y); brush.vertex(x + w * 0.3, y - h); brush.vertex(x + w * 0.7, y - h * 0.7);
    brush.vertex(x + w, y + 4); brush.vertex(x + w * 0.6, y + h * 0.5); brush.vertex(x + w * 0.2, y + h * 0.4);
    brush.endShape(true);
    brush.fill("#a07090", 170);
    brush.beginShape(0.6);
    brush.vertex(x + w * 0.1, y + 2); brush.vertex(x + w * 0.9, y + 4); brush.vertex(x + w * 0.6, y + h * 0.5); brush.vertex(x + w * 0.25, y + h * 0.45);
    brush.endShape(true);
  }

  // hills
  brush.fill("#8a7090", 205);
  brush.beginShape(0.7);
  brush.vertex(-20, 440); brush.vertex(120, 414); brush.vertex(270, 430); brush.vertex(430, 408);
  brush.vertex(620, 426); brush.vertex(620, 466); brush.vertex(-20, 466);
  brush.endShape(true);

  // meadows in olive-gold, darker at the edges
  brush.fill("#a89a48", 205);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 456); brush.vertex(620, 452); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#6a5a28", 200);
  brush.beginShape(0.6);
  brush.vertex(-20, 500); brush.vertex(100, 520); brush.vertex(160, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(620, 490); brush.vertex(520, 520); brush.vertex(470, 620); brush.vertex(620, 620);
  brush.endShape(true);

  // river: paper-bright S reflecting the sky, edged with a violet shadow bank
  let path = [[420, 456], [330, 470], [430, 500], [260, 540], [380, 620]];
  brush.fill("#6a4a6a", 215);
  brush.fillBleed(0.2);
  brush.beginShape(0.9);
  for (let i = 0; i < path.length; i++) brush.vertex(path[i][0] - 10 - i * 22, path[i][1] - 3);
  for (let i = path.length - 1; i >= 0; i--) brush.vertex(path[i][0] - 2 - i * 14, path[i][1] + 3);
  brush.endShape(true);
  brush.fill("#f6d088", 230);
  brush.beginShape(0.9);
  for (let i = 0; i < path.length; i++) brush.vertex(path[i][0] - 4 - i * 16, path[i][1]);
  for (let i = path.length - 1; i >= 0; i--) brush.vertex(path[i][0] + 4 + i * 16, path[i][1] + 4);
  brush.endShape(true);
  brush.fill("#f09878", 200);
  brush.beginShape(0.9);
  for (let i = 1; i < path.length; i++) brush.vertex(path[i][0] + i * 4, path[i][1] + 2);
  for (let i = path.length - 1; i >= 1; i--) brush.vertex(path[i][0] + 2 + i * 14, path[i][1] + 5);
  brush.endShape(true);

  // poplars on the far bank
  brush.fill("#4a2e2a", 220);
  for (let k = 0; k < 5; k++) {
    let x = 470 + k * 22;
    brush.beginShape(0.8);
    brush.vertex(x - 8, 452); brush.vertex(x, 400 + random(-10, 10)); brush.vertex(x + 8, 452);
    brush.endShape(true);
  }
  for (let k = 0; k < 6; k++) brush.circle(90 + k * 28, 452 + random(-3, 3), random(9, 14), true);
}
