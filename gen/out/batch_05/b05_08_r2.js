async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1f5f7");
  brush.noStroke();
  // cool blue-grey shadow wash behind and to the right
  brush.fill("#bfd0dd", 180);
  brush.fillBleed(0.45);
  brush.fillTexture(0.5, 0.3);
  brush.circle(355, 270, 195, true);
  // stem and leaf
  brush.fill("#6a9872", 225);
  brush.fillBleed(0.06);
  brush.beginShape(0.6);
  brush.vertex(292, 360); brush.vertex(305, 360); brush.vertex(320, 470); brush.vertex(345, 590); brush.vertex(332, 590); brush.vertex(306, 470);
  brush.endShape(true);
  brush.fill("#86b07c", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.7);
  brush.vertex(318, 480); brush.vertex(375, 448); brush.vertex(435, 460); brush.vertex(378, 492);
  brush.endShape(true);
  // globe body, slightly wider than tall
  let cx = 300, cy = 250;
  brush.fill("#f7d955", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.4);
  brush.beginShape(0.9);
  for (let a = 0; a < 360; a += 30) brush.vertex(cx + 130 * cos(a), cy + 115 * sin(a));
  brush.endShape(true);
  // calyx
  brush.fill("#78a466", 220);
  brush.fillBleed(0.12);
  brush.beginShape(0.8);
  brush.vertex(245, 350); brush.vertex(298, 385); brush.vertex(352, 350); brush.vertex(300, 358);
  brush.endShape(true);
  // side view: many thin cupped petals seen as nested arcs, sagging downward,
  // each a thin crescent with a darker ochre lower lip. Outer rows first.
  let rows = [[125, 60, "#efb611"], [110, 35, "#f2bf1c"], [95, 12, "#f4c62a"], [80, -10, "#f5cd38"], [64, -30, "#f6d446"], [46, -48, "#f2d85a"]];
  for (let r of rows) {
    let w = r[0], y0 = cy + r[1];
    // petal body
    brush.fill(r[2], 205);
    brush.fillBleed(0.18);
    brush.fillTexture(0.45, 0.55);
    brush.beginShape(0.9);
    brush.vertex(cx - w, y0 - 20);
    brush.vertex(cx - w * 0.6, y0 + 22);
    brush.vertex(cx, y0 + 34);
    brush.vertex(cx + w * 0.6, y0 + 22);
    brush.vertex(cx + w, y0 - 20);
    brush.vertex(cx + w * 0.55, y0 + 6);
    brush.vertex(cx, y0 + 14);
    brush.vertex(cx - w * 0.55, y0 + 6);
    brush.endShape(true);
    // ochre lip line along the bottom of the crescent
    brush.fill("#c98a0a", 190);
    brush.fillBleed(0.08);
    brush.beginShape(0.9);
    brush.vertex(cx - w * 0.85, y0 - 4);
    brush.vertex(cx - w * 0.5, y0 + 26);
    brush.vertex(cx, y0 + 36);
    brush.vertex(cx + w * 0.5, y0 + 26);
    brush.vertex(cx + w * 0.85, y0 - 4);
    brush.vertex(cx + w * 0.5, y0 + 20);
    brush.vertex(cx, y0 + 29);
    brush.vertex(cx - w * 0.5, y0 + 20);
    brush.endShape(true);
  }
  // green-gold heart at the top
  brush.fill("#a9bd43", 215);
  brush.fillBleed(0.1);
  brush.circle(cx + 3, cy - 72, 20, true);
  brush.fill("#5f7d26", 225);
  brush.circle(cx + 4, cy - 72, 8, true);
  // highlight left as a pale patch on the upper left of the globe
  brush.fill("#fbeb9a", 190);
  brush.fillBleed(0.15);
  brush.circle(cx - 70, cy - 55, 20, true);
}
