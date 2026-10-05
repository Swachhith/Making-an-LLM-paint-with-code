async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8dcc3");
  brush.noStroke();

  // dusky sky, low and wide, pale blue-grey
  brush.fill("#b7c3c9", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.7);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 200); brush.vertex(-20, 220);
  brush.endShape(true);
  brush.fill("#8f9aa8", 150);
  brush.beginShape(0.8);
  brush.vertex(-20, 200); brush.vertex(620, 190); brush.vertex(620, 300); brush.vertex(-20, 320);
  brush.endShape(true);

  // silhouettes: distant hills and a low house, so the tree can fill the canvas
  brush.fill("#5a5a5a", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, 340); brush.vertex(150, 320); brush.vertex(300, 345); brush.vertex(450, 330); brush.vertex(620, 350); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(350, 340); brush.vertex(420, 300); brush.vertex(490, 340); brush.vertex(490, 620); brush.vertex(350, 620);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(480, 350); brush.vertex(520, 350); brush.vertex(520, 420); brush.vertex(480, 420);
  brush.endShape(true);

  // baobab trunk: wide at the base, tapering up, almost filling the canvas
  let cx = 290, cy = 560;
  let baseW = 220, baseH = 260;
  brush.fill("#5c4a38", 215);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(cx - baseW, cy - baseH); brush.vertex(cx + baseW, cy - baseH); brush.vertex(cx + baseW * 0.7, cy - baseH * 0.55); brush.vertex(cx, cy - baseH * 0.5); brush.vertex(cx - baseW * 0.7, cy - baseH * 0.55);
  brush.endShape(true);
  brush.fill("#3e3024", 220);
  brush.beginShape(0.5);
  brush.vertex(cx - baseW * 0.9, cy - baseH * 0.7); brush.vertex(cx + baseW * 0.9, cy - baseH * 0.7); brush.vertex(cx + baseW * 0.6, cy - baseH * 0.45); brush.vertex(cx, cy - baseH * 0.4); brush.vertex(cx - baseW * 0.6, cy - baseH * 0.45);
  brush.endShape(true);
  // buttressed base, wide and squat
  brush.fill("#3e3024", 220);
  brush.beginShape(0.6);
  brush.vertex(cx - baseW * 1.1, cy); brush.vertex(cx - baseW * 0.7, cy - 30); brush.vertex(cx - baseW * 0.4, cy + 10); brush.vertex(cx - baseW * 0.1, cy + 30); brush.vertex(cx - baseW * 0.1, cy + 80); brush.vertex(cx + baseW * 0.1, cy + 60); brush.vertex(cx + baseW * 0.4, cy + 40); brush.vertex(cx + baseW * 0.7, cy + 20); brush.vertex(cx + baseW * 1.1, cy);
  brush.endShape(true);
  // crown: wide, almost a circle, overlapping the sky and the hills
  let r = 260;
  brush.fill("#5c4a38", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(cx, cy - r * 0.45, r * 0.95, 0.6);
  brush.fill("#3e3024", 200);
  brush.fillBleed(0.25);
  brush.circle(cx, cy - r * 0.45, r * 0.75, 0.5);
  // two passes of dark greenish-grey foliage
  brush.fill("#4a5a48", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(cx, cy - r * 0.55, r * 0.6, 0.5);
  brush.fill("#3a4438", 170);
  brush.circle(cx, cy - r * 0.55, r * 0.45, 0.45);
  // warm glow on the crown from the setting sun
  brush.fill("#c98a5a", 160);
  brush.fillBleed(0.3);
  brush.circle(cx, cy - r * 0.5, r * 0.35, 0.5);
  brush.fill("#d9a970", 140);
  brush.circle(cx, cy - r * 0.5, r * 0.22, 0.5);
  // a few bare branches reaching out
  brush.fill("#3e3024", 215);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(cx - 30, cy - 180); brush.vertex(cx - 100, cy - 230); brush.vertex(cx - 150, cy - 260); brush.vertex(cx - 150, cy - 240); brush.vertex(cx - 100, cy - 200); brush.vertex(cx - 30, cy - 160);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(cx + 30, cy - 170); brush.vertex(cx + 130, cy - 220); brush.vertex(cx + 180, cy - 250); brush.vertex(cx + 180, cy - 230); brush.vertex(cx + 130, cy - 190); brush.vertex(cx + 30, cy - 140);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(cx - 50, cy - 250); brush.vertex(cx + 50, cy - 250); brush.vertex(cx + 100, cy - 290); brush.vertex(cx + 20, cy - 300);
  brush.endShape(true);
  // the ground, darker than the paper
  brush.fill("#8c7a66", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, 620); brush.vertex(620, 620); brush.vertex(620, 640); brush.vertex(-20, 640);
  brush.endShape(true);
}
