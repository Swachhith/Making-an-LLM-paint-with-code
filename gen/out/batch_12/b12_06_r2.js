async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f0f4f6");
  randomSeed(6606);
  brush.noStroke();
  // cool sky, clouds left as paper between two blue passes
  brush.fill("#8fb6d8", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 120); brush.vertex(400, 150); brush.vertex(200, 110); brush.vertex(-20, 140);
  brush.endShape(true);
  brush.fill("#b8d0e2", 170);
  brush.fillBleed(0.35);
  brush.beginShape(0.6);
  brush.vertex(-20, 190); brush.vertex(250, 170); brush.vertex(620, 200); brush.vertex(620, 300); brush.vertex(-20, 300);
  brush.endShape(true);
  // distant woodland
  brush.fill("#6f8e98", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(-20, 300); brush.vertex(60, 270); brush.vertex(160, 280); brush.vertex(260, 262); brush.vertex(380, 280); brush.vertex(500, 266); brush.vertex(620, 285); brush.vertex(620, 310); brush.vertex(-20, 310);
  brush.endShape(true);
  // green pasture both sides
  brush.fill("#a2c0a6", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.3);
  brush.vertex(-20, 305); brush.vertex(620, 305); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // canal: sweeping S-curve from horizon to bottom left
  for (let p = 0; p < 2; p++) {
    brush.fill(p ? "#3c6c90" : "#6f9fc0", p ? 150 : 200);
    brush.fillBleed(0.3);
    brush.fillTexture(0.45, 0.5);
    brush.beginShape(0.7);
    brush.vertex(330, 308); brush.vertex(350, 308);
    brush.vertex(420 - p * 10, 380); brush.vertex(360, 470); brush.vertex(260, 620);
    brush.vertex(40, 620); brush.vertex(230 + p * 20, 470); brush.vertex(310, 380);
    brush.endShape(true);
  }
  // sky reflection streak on the water
  brush.fill("#dbe8f0", 210);
  brush.fillBleed(0.2);
  brush.beginShape(0.6);
  brush.vertex(300, 440); brush.vertex(340, 440); brush.vertex(250, 560); brush.vertex(200, 560);
  brush.endShape(true);
  // houseboat moored mid-distance on the canal bend, small
  let bx = 350, by = 392;
  brush.fill("#2a3e58", 235);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.1);
  brush.vertex(bx - 34, by); brush.vertex(bx + 34, by - 2); brush.vertex(bx + 30, by + 12); brush.vertex(bx - 30, by + 13);
  brush.endShape(true);
  brush.fill("#e2e8ea", 245);
  brush.beginShape(0.03);
  brush.vertex(bx - 24, by - 18); brush.vertex(bx + 22, by - 19); brush.vertex(bx + 22, by); brush.vertex(bx - 24, by);
  brush.endShape(true);
  brush.fill("#4a7896", 230);
  brush.beginShape(0.03);
  brush.vertex(bx - 28, by - 18); brush.vertex(bx - 2, by - 32); brush.vertex(bx + 26, by - 19);
  brush.endShape(true);
  brush.fill("#2a3e58", 200);
  brush.circle(bx - 12, by - 9, 3, 0.1);
  brush.circle(bx + 8, by - 9, 3, 0.1);
  brush.fill("#2a3e58", 130);
  brush.fillBleed(0.3);
  brush.beginShape(0.4);
  brush.vertex(bx - 30, by + 14); brush.vertex(bx + 30, by + 13); brush.vertex(bx + 26, by + 34); brush.vertex(bx - 26, by + 36);
  brush.endShape(true);
  // pollarded willows along towpath, receding
  for (let t of [[440, 330, 22], [500, 360, 32], [560, 410, 46]]) {
    brush.fill("#5f8a82", 200);
    brush.fillBleed(0.3);
    brush.fillTexture(0.55, 0.55);
    brush.circle(t[0], t[1] - t[2], t[2], 0.8);
    brush.fill("#3e6460", 170);
    brush.circle(t[0] + 5, t[1] - t[2] + 6, t[2] * 0.6, 0.8);
  }
}
