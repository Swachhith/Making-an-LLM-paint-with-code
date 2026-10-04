async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbfbfd");
  randomSeed(808);
  brush.noStroke();
  let px = 400, py = 70;
  // sky painted around the peak's silhouette so the snow stays paper
  let ridge = [[-20, 300], [80, 230], [160, 290], [250, 250], [320, 170], [px, py], [455, 150], [520, 200], [620, 260]];
  for (let pass = 0; pass < 2; pass++) {
    brush.fill(pass ? "#0b3bb0" : "#1c6ce8", pass ? 190 : 220);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.05);
    brush.vertex(-20, -20); brush.vertex(620, -20);
    for (let i = ridge.length - 1; i >= 0; i--) brush.vertex(ridge[i][0], ridge[i][1] - (pass ? 30 : 0));
    brush.endShape(true);
  }
  // snow shadows (cool violet) on right faces, leaving lit snow as paper
  brush.fill("#6d7df0", 200);
  brush.fillBleed(0.15);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.05);
  brush.vertex(px, py); brush.vertex(455, 150); brush.vertex(470, 200); brush.vertex(430, 185); brush.vertex(410, 140);
  brush.endShape(true);
  brush.beginShape(0.05);
  brush.vertex(80, 230); brush.vertex(160, 290); brush.vertex(110, 280);
  brush.endShape(true);
  // rock below the snow line, jagged snow edge
  let snow = [[-20, 330], [40, 290], [80, 262], [120, 300], [160, 320], [230, 300], [280, 250], [330, 230], [360, 180], [390, 170], [420, 205], [450, 190], [500, 240], [540, 250], [620, 300]];
  brush.fill("#c42a6a", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.1);
  for (let q of snow) brush.vertex(q[0], q[1] + random(-6, 6));
  brush.vertex(620, 470); brush.vertex(-20, 470);
  brush.endShape(true);
  brush.fill("#5a1a8a", 210);
  brush.fillBleed(0.2);
  brush.beginShape(0.1);
  brush.vertex(390, 200); brush.vertex(450, 215); brush.vertex(540, 270); brush.vertex(620, 320); brush.vertex(620, 470); brush.vertex(420, 470);
  brush.endShape(true);
  brush.fill("#2a0a60", 170);
  brush.fillBleed(0.25);
  brush.beginShape(0.3);
  brush.vertex(-20, 390); brush.vertex(300, 360); brush.vertex(620, 380); brush.vertex(620, 470); brush.vertex(-20, 470);
  brush.endShape(true);
  // bold meadow and pines
  brush.fill("#0f9a50", 230);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 450); brush.vertex(300, 440); brush.vertex(620, 460); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  for (let x = 10; x < 600; x += random(28, 45)) {
    let h = random(50, 90);
    brush.fill("#064a2a", 230);
    brush.fillBleed(0.15);
    brush.beginShape(0.1);
    brush.vertex(x - 14, 460); brush.vertex(x, 460 - h); brush.vertex(x + 14, 460);
    brush.endShape(true);
  }
  brush.fill("#ff8a10", 210);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, 540); brush.vertex(300, 520); brush.vertex(620, 550); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
}
