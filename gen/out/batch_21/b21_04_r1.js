async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f8e8ea");
  brush.noStroke();

  let sky = [["#5a3a8a", -20, 100], ["#a83a8a", 70, 190], ["#ec5a8a", 160, 250], ["#ff9a70", 220, 292]];
  for (let s of sky) {
    brush.fill(s[0], 215);
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.3);
    brush.vertex(-20, s[1]); brush.vertex(620, s[1] + 10); brush.vertex(620, s[2]); brush.vertex(-20, s[2] - 10);
    brush.endShape(true);
  }
  // sun glow sitting on the horizon
  brush.fill("#ffd27a", 225);
  brush.fillBleed(0.3);
  brush.circle(400, 282, 30, 0.3);

  // cloud streaks, deep plum
  let streaks = [[40, 150, 300], [330, 105, 260], [150, 210, 200]];
  for (let s of streaks) {
    brush.fill("#6a2468", 205);
    brush.fillBleed(0.25);
    brush.fillTexture(0.45, 0.4);
    brush.beginShape(0.8);
    brush.vertex(s[0], s[1]); brush.vertex(s[0] + s[2] * 0.7, s[1] - 10); brush.vertex(s[0] + s[2], s[1] + 2); brush.vertex(s[0] + s[2] * 0.4, s[1] + 14);
    brush.endShape(true);
  }

  // far fields with hedgerow trees along the horizon
  brush.fill("#3a2848", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, 296); brush.vertex(620, 290); brush.vertex(620, 318); brush.vertex(-20, 320);
  brush.endShape(true);
  let trees = [[60, 16], [84, 12], [210, 20], [236, 14], [520, 18], [548, 13]];
  for (let t of trees) {
    brush.fill("#2e1f3c", 235);
    brush.fillBleed(0.18);
    brush.circle(t[0], 296 - t[1] * 0.6, t[1], 0.6);
  }
  brush.fill("#4a6a2e", 215);
  brush.beginShape(0.4);
  brush.vertex(-20, 308); brush.vertex(620, 304); brush.vertex(620, 324); brush.vertex(-20, 326);
  brush.endShape(true);

  // water mirroring the sky
  let water = [["#ff9a70", 322, 356], ["#ec5a8a", 348, 425], ["#a83a8a", 415, 515], ["#5a3a8a", 505, 620]];
  for (let w of water) {
    brush.fill(w[0], 195);
    brush.fillBleed(0.28);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.3);
    brush.vertex(-20, w[1]); brush.vertex(620, w[1] - 6); brush.vertex(620, w[2]); brush.vertex(-20, w[2] + 6);
    brush.endShape(true);
  }
  // mirrored trees, sun column, plum streaks
  for (let t of trees) {
    brush.fill("#3a2848", 180);
    brush.fillBleed(0.3);
    brush.circle(t[0], 334 + t[1] * 0.5, t[1] * 0.9, 0.7);
  }
  for (let i = 0; i < 6; i++) {
    brush.fill("#ffcf80", 215);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    let y = 340 + i * 30;
    let w = 50 - i * 6;
    brush.beginShape(0.4);
    brush.vertex(400 - w, y); brush.vertex(400 + w, y - 2); brush.vertex(400 + w - 4, y + 7); brush.vertex(400 - w + 4, y + 8);
    brush.endShape(true);
  }
  brush.fill("#6a2468", 180);
  brush.fillBleed(0.25);
  brush.beginShape(0.8);
  brush.vertex(40, 470); brush.vertex(250, 460); brush.vertex(340, 474); brush.vertex(150, 486);
  brush.endShape(true);

  // reeds in silhouette at the near bank
  for (let i = 0; i < 8; i++) {
    let x = 20 + i * 22;
    brush.fill("#24162e", 230);
    brush.fillBleed(0.15);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.5);
    brush.vertex(x - 8, 620); brush.vertex(x + (i % 2 ? 8 : -6), 480 + (i % 3) * 22); brush.vertex(x + 10, 620);
    brush.endShape(true);
  }
}
