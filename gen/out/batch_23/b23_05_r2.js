async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2f5f7");
  brush.noStroke();

  // cool blue-grey backdrop around the big trunks (trunks stay paper)
  // trunk 1: x 200-300 slightly leaning; trunk 2: x 400-450 behind
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.45);
  brush.fill("#5f86ab", 210);
  brush.beginShape(0.3);
  brush.vertex(-40, -40); brush.vertex(215, -40); brush.vertex(195, 640); brush.vertex(-40, 640);
  brush.endShape(true);
  brush.fill("#5a8a90", 210);
  brush.beginShape(0.3);
  brush.vertex(310, -40); brush.vertex(405, -40); brush.vertex(398, 640); brush.vertex(300, 640);
  brush.endShape(true);
  brush.fill("#5f86ab", 210);
  brush.beginShape(0.3);
  brush.vertex(455, -40); brush.vertex(640, -40); brush.vertex(640, 640); brush.vertex(452, 640);
  brush.endShape(true);

  // second backdrop pass, patchy, for depth
  brush.fill("#3f6a8e", 170);
  brush.circle(90, 150, 90, 0.8);
  brush.circle(350, 420, 60, 0.8);
  brush.circle(540, 250, 80, 0.8);
  brush.fill("#3f6a8e", 160);
  brush.circle(120, 420, 80, 0.8);

  // distant foliage flecks in cool greens
  for (let i = 0; i < 30; i++) {
    const x = random([random(0, 190), random(310, 395), random(460, 600)]);
    brush.fill(random(["#2f6e5e", "#4e8a74", "#24566a"]), 200);
    brush.circle(x, random(0, 360), 12 + random(20), 0.7);
  }

  // ground: cool shadow at the base
  brush.fill("#5f7fa0", 200);
  brush.beginShape(0.8);
  brush.vertex(-40, 510); brush.vertex(640, 490); brush.vertex(640, 640); brush.vertex(-40, 640);
  brush.endShape(true);

  // shadow side of trunk 1 (right edge)
  brush.fill("#9fb0c4", 190);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(275, -40); brush.vertex(310, -40); brush.vertex(300, 640); brush.vertex(262, 640);
  brush.endShape(true);
  // shadow side of trunk 2
  brush.beginShape(0.3);
  brush.vertex(438, -40); brush.vertex(455, -40); brush.vertex(452, 640); brush.vertex(434, 640);
  brush.endShape(true);

  // black birch markings: horizontal lenticels and knots
  brush.fillBleed(0.15);
  for (let y = 30; y < 560; y += 45 + random(30)) {
    const t = y / 600;
    const lx = 215 - 20 * t;
    brush.fill("#1c2230", 230);
    brush.beginShape(0.5);
    brush.vertex(lx - 2, y); brush.vertex(lx + 30 + random(40), y + 2);
    brush.vertex(lx + 25 + random(30), y + 14); brush.vertex(lx - 2, y + 13);
    brush.endShape(true);
    if (random() < 0.6) {
      brush.fill("#2a3140", 210);
      brush.beginShape(0.5);
      brush.vertex(300 - 10 * t, y + 20); brush.vertex(270 - 10 * t, y + 22);
      brush.vertex(275 - 10 * t, y + 36); brush.vertex(302 - 10 * t, y + 35);
      brush.endShape(true);
    }
  }
  for (let y = 60; y < 560; y += 60 + random(30)) {
    brush.fill("#1c2230", 220);
    brush.beginShape(0.5);
    brush.vertex(404, y); brush.vertex(430, y + 1); brush.vertex(428, y + 14); brush.vertex(404, y + 15);
    brush.endShape(true);
  }
  // knot / branch scar
  brush.fill("#101520", 230);
  brush.beginShape(0.6);
  brush.vertex(230, 200); brush.vertex(262, 190); brush.vertex(270, 215); brush.vertex(238, 225);
  brush.endShape(true);

  // cool grey rounding on the lit edges of the trunks
  brush.fill("#b8c6d4", 170);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(212, -40); brush.vertex(230, -40); brush.vertex(212, 640); brush.vertex(193, 640);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(405, -40); brush.vertex(418, -40); brush.vertex(414, 640); brush.vertex(399, 640);
  brush.endShape(true);
  // grass and bluebells at the foot
  for (let i = 0; i < 26; i++) {
    brush.fill(random(["#3d7a5a", "#5a78c8"]), 210);
    brush.circle(random(600), 540 + random(55), 6 + random(8), 0.6);
  }
}
