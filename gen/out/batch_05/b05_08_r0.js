async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2f5f6");
  brush.noStroke();
  // cool grey-blue shadow wash to the right
  brush.fill("#cfdbe3", 150);
  brush.fillBleed(0.45);
  brush.fillTexture(0.5, 0.3);
  brush.circle(360, 280, 200, true);
  // slender stem with a small leaf
  brush.fill("#7aa37f", 210);
  brush.fillBleed(0.06);
  brush.beginShape(0.5);
  brush.vertex(296, 360); brush.vertex(308, 360); brush.vertex(330, 590); brush.vertex(318, 590);
  brush.endShape(true);
  brush.fill("#97bc8f", 195);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.7);
  brush.vertex(318, 480); brush.vertex(370, 455); brush.vertex(420, 470); brush.vertex(372, 490);
  brush.endShape(true);
  // green calyx under the cup
  brush.fill("#8bb07a", 205);
  brush.fillBleed(0.12);
  brush.beginShape(0.8);
  brush.vertex(262, 350); brush.vertex(302, 380); brush.vertex(345, 350); brush.vertex(305, 340);
  brush.endShape(true);
  // layered arcs stacked upward: outer petals low and wide, inner ones higher and tighter
  let rows = 7;
  for (let r = 0; r < rows; r++) {
    let y = 340 - r * 26;
    let w = 150 - r * 14;
    let col = r < 2 ? "#f2c417" : (r < 5 ? "#f7d23a" : "#e7d95a");
    let n = 5 - floor(r / 3);
    for (let i = 0; i < n; i++) {
      let px = 302 - w + (2 * w) * (i + 0.5) / n;
      let pw = (2 * w) / n * 0.75;
      brush.fill(col, 185 + r * 5);
      brush.fillBleed(0.2);
      brush.fillTexture(0.45, 0.55);
      brush.beginShape(0.9);
      brush.vertex(px - pw, y);
      brush.vertex(px - pw * 0.8, y - 38);
      brush.vertex(px, y - 50);
      brush.vertex(px + pw * 0.8, y - 38);
      brush.vertex(px + pw, y);
      brush.vertex(px, y + 12);
      brush.endShape(true);
    }
    // shadow line under each row where petals overlap
    brush.fill("#c99a10", 150);
    brush.fillBleed(0.15);
    brush.beginShape(0.8);
    brush.vertex(302 - w * 0.9, y + 4);
    brush.vertex(302, y + 16);
    brush.vertex(302 + w * 0.9, y + 4);
    brush.vertex(302, y + 8);
    brush.endShape(true);
  }
  // cool green heart just visible at the top
  brush.fill("#b8c95a", 190);
  brush.fillBleed(0.1);
  brush.circle(302, 140, 16, true);
}
