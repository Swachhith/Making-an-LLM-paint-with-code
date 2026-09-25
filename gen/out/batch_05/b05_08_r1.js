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
  // cool blue-grey shadow wash behind and to the right
  brush.fill("#c4d4df", 175);
  brush.fillBleed(0.45);
  brush.fillTexture(0.5, 0.3);
  brush.circle(350, 270, 190, true);
  // slender curved stem and a small leaf
  brush.fill("#6f9b76", 220);
  brush.fillBleed(0.06);
  brush.beginShape(0.6);
  brush.vertex(292, 370); brush.vertex(305, 370); brush.vertex(320, 470); brush.vertex(345, 590); brush.vertex(332, 590); brush.vertex(306, 470);
  brush.endShape(true);
  brush.fill("#8db483", 205);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.7);
  brush.vertex(318, 480); brush.vertex(372, 450); brush.vertex(430, 462); brush.vertex(375, 490);
  brush.endShape(true);
  // the globe: a pale yellow round body
  let cx = 300, cy = 255;
  brush.fill("#f7df6a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.4);
  brush.circle(cx, cy, 120, true);
  // green calyx beneath
  brush.fill("#7ea86a", 215);
  brush.fillBleed(0.12);
  brush.beginShape(0.8);
  brush.vertex(250, 355); brush.vertex(298, 385); brush.vertex(348, 355); brush.vertex(300, 360);
  brush.endShape(true);
  // wrapped petals: crescent shells from the outside in, each rising higher on the globe
  let shells = [
    [-60, 120, "#f0bd12", 215], [60, 120, "#f3c41f", 210], [180, 115, "#eeb70f", 215],
    [-20, 90, "#f6cc30", 210], [100, 90, "#f4c52a", 210], [220, 85, "#f1c02a", 210],
    [30, 60, "#f7d44a", 210], [150, 58, "#f2cf45", 210], [270, 55, "#f4d24c", 205]
  ];
  for (let s of shells) {
    let a = s[0], r = s[1];
    // crescent spanning ~150 degrees of arc, open toward the top of the flower
    brush.fill(s[2], s[3]);
    brush.fillBleed(0.18);
    brush.fillTexture(0.45, 0.55);
    brush.beginShape(0.9);
    for (let k = -75; k <= 75; k += 25) {
      brush.vertex(cx + r * cos(a + 90 + k), cy + 10 + r * 0.95 * sin(a + 90 + k));
    }
    for (let k = 75; k >= -75; k -= 25) {
      brush.vertex(cx + r * 0.72 * cos(a + 90 + k) + 0.18 * r * cos(a - 90), cy + 10 + r * 0.7 * sin(a + 90 + k) + 0.18 * r * sin(a - 90));
    }
    brush.endShape(true);
  }
  // shadow under the overlapping rims
  brush.fill("#c28a0c", 175);
  brush.fillBleed(0.15);
  brush.beginShape(0.8);
  brush.vertex(200, 310); brush.vertex(300, 350); brush.vertex(400, 310); brush.vertex(300, 335);
  brush.endShape(true);
  // green-gold heart at the top
  brush.fill("#aebf45", 210);
  brush.fillBleed(0.1);
  brush.circle(cx + 5, cy - 55, 18, true);
  brush.fill("#6f8a2e", 220);
  brush.circle(cx + 6, cy - 55, 7, true);
}
