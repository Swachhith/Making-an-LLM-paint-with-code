async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe9dc");
  randomSeed(2604);
  brush.noStroke();

  // thin strip of sky above a high horizon
  brush.fill("#aab0b0", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 110); brush.vertex(-20, 120);
  brush.endShape(true);

  // far ridges
  brush.fill("#8a8778", 170);
  brush.beginShape(0.7);
  brush.vertex(-20, 115); brush.vertex(90, 80); brush.vertex(210, 105); brush.vertex(330, 70);
  brush.vertex(470, 100); brush.vertex(620, 78); brush.vertex(620, 150); brush.vertex(-20, 160);
  brush.endShape(true);

  // valley slopes, left and right, patchwork fields
  let cols = ["#9b8a55", "#7d7a48", "#a5794a", "#6c6a3e", "#b09a66", "#85703f"];
  for (let i = 0; i < 12; i++) {
    let left = i % 2 == 0;
    let y = 140 + floor(i / 2) * 75;
    let x0 = left ? -20 : 330 + random(-20, 20);
    let x1 = left ? 260 + random(-20, 20) : 620;
    brush.fill(cols[i % 6], 170 + random(0, 40));
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.5);
    brush.vertex(x0, y); brush.vertex(x1, y + random(-10, 10));
    brush.vertex(x1 + (left ? 20 : 0), y + 85); brush.vertex(x0, y + 90);
    brush.endShape(true);
  }

  // river snaking from narrow at the top to wide at the bottom
  let pts = [[300, 140], [340, 190], [270, 260], [360, 340], [250, 440], [330, 620]];
  brush.fill("#9fb0b2", 210);
  brush.fillBleed(0.22);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  for (let i = 0; i < pts.length; i++) {
    let w = 8 + i * 18;
    brush.vertex(pts[i][0] - w, pts[i][1]);
  }
  for (let i = pts.length - 1; i >= 0; i--) {
    let w = 8 + i * 18;
    brush.vertex(pts[i][0] + w, pts[i][1]);
  }
  brush.endShape(true);
  // darker banks where the water meets the land
  brush.fill("#4f4a32", 190);
  for (let i = 1; i < pts.length; i++) {
    let w = 8 + i * 18;
    brush.circle(pts[i][0] - w - 6, pts[i][1], 8 + i * 2, true);
    brush.circle(pts[i][0] + w + 6, pts[i][1] + 10, 7 + i * 2, true);
  }

  // clumps of trees along the valley
  for (let k = 0; k < 16; k++) {
    let x = random(20, 580), y = random(170, 560);
    brush.fill("#4d5530", 200);
    brush.circle(x, y, random(8, 16), true);
  }
}
