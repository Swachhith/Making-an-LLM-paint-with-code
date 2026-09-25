async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf0e1");
  brush.noStroke();
  // warm sunlit wash at the top-left only
  brush.fill("#f6d7a8", 200);
  brush.fillBleed(0.5, "out");
  brush.fillTexture(0.5, 0.2);
  brush.circle(110, 90, 180, true);
  // stem, gently curved, with one leaf
  brush.fill("#7d9152", 225);
  brush.fillBleed(0.08, "out");
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.5);
  brush.vertex(300, 420); brush.vertex(290, 510); brush.vertex(320, 600);
  brush.vertex(334, 600); brush.vertex(304, 510); brush.vertex(314, 420);
  brush.endShape(true);
  brush.fill("#95a562", 215);
  brush.fillBleed(0.25, "out");
  brush.beginShape(0.7);
  brush.vertex(295, 520); brush.vertex(210, 480); brush.vertex(150, 495); brush.vertex(220, 525);
  brush.endShape(true);
  // ranunculus seen from side: a round ball of stacked crescent petals
  let cx = 305, cy = 290;
  // body wash
  brush.fill("#f8c7a3", 210);
  brush.fillBleed(0.3, "out");
  brush.fillTexture(0.45, 0.5);
  brush.circle(cx, cy, 145, true);
  // crescents from bottom (outer, big) to top (inner, small)
  for (let i = 0; i < 11; i++) {
    let w = 150 - i * 9;
    let y = cy + 120 - i * 21;
    let d = 34 - i * 1.2;
    let col = i < 4 ? "#ee9a6c" : (i < 8 ? "#f2a97c" : "#e6855a");
    brush.fill(col, 205 + (i % 3) * 10);
    brush.fillBleed(0.15, "out");
    brush.fillTexture(0.55, 0.65);
    brush.beginShape(0.9);
    brush.vertex(cx - w, y - d * 1.6);
    brush.vertex(cx - w * 0.6, y + d * 0.2);
    brush.vertex(cx, y + d * 0.6);
    brush.vertex(cx + w * 0.6, y + d * 0.2);
    brush.vertex(cx + w, y - d * 1.6);
    brush.vertex(cx + w * 0.55, y - d * 0.5);
    brush.vertex(cx, y - d * 0.2);
    brush.vertex(cx - w * 0.55, y - d * 0.5);
    brush.endShape(true);
  }
  // green heart just visible at the top
  brush.fill("#b3b060", 215);
  brush.fillBleed(0.15, "out");
  brush.circle(cx, cy - 115, 16, true);
  // sepals at the base
  brush.fill("#6b8444", 230);
  brush.fillBleed(0.1, "out");
  brush.beginShape(0.6);
  brush.vertex(250, 405); brush.vertex(305, 432); brush.vertex(360, 405); brush.vertex(305, 418);
  brush.endShape(true);
}
