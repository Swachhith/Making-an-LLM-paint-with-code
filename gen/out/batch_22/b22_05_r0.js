async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#1d3150");
  randomSeed(55);
  brush.noStroke();
  // teal glow around the moon
  brush.fill("#3f8b98", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.circle(410, 180, 190, 0.5);
  brush.fill("#5aa8ad", 150);
  brush.circle(410, 180, 140, 0.4);
  // indigo corners
  brush.fill("#141d45", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.8);
  brush.vertex(-20, -20); brush.vertex(200, -20); brush.vertex(150, 180); brush.vertex(-20, 280);
  brush.endShape(true);
  // the crescent: outer arc, then the inner arc back
  brush.fill("#fbf1cf", 250);
  brush.fillBleed(0.12);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.5);
  for (let a = 60; a <= 300; a += 12) brush.vertex(410 + 115 * cos(a), 180 + 115 * sin(a));
  for (let a = 290; a >= 70; a -= 12) brush.vertex(460 + 100 * cos(a), 170 + 100 * sin(a));
  brush.endShape(true);
  brush.fill("#fffbe9", 230);
  brush.beginShape(0.5);
  for (let a = 90; a <= 270; a += 15) brush.vertex(410 + 108 * cos(a), 180 + 108 * sin(a));
  for (let a = 260; a >= 100; a -= 15) brush.vertex(440 + 95 * cos(a), 176 + 95 * sin(a));
  brush.endShape(true);
  // a few stars away from the moon
  for (let i = 0; i < 30; i++) {
    brush.fill("#e8f6f4", random(170, 240));
    brush.fillBleed(0.1);
    brush.circle(random(20, 280), random(20, 330), random(1.5, 3), 0.2);
  }
  // pine silhouettes across the bottom
  const pines = [[40, 250], [95, 330], [150, 280], [215, 380], [280, 300], [340, 240], [395, 270], [460, 210], [520, 290], [575, 350]];
  for (const [px, ph] of pines) {
    let base = 620;
    let top = base - ph;
    brush.fill("#08131d", 245);
    brush.fillBleed(0.15);
    brush.fillTexture(0.35, 0.35);
    brush.beginShape(0.1);
    brush.vertex(px, top);
    let tiers = 6;
    for (let k = 1; k <= tiers; k++) {
      let y = top + (ph * 0.85) * k / tiers;
      let w = 8 + k * (ph / 32);
      brush.vertex(px + w, y);
      brush.vertex(px + w * 0.45, y - 6);
    }
    brush.vertex(px + 8, base);
    brush.vertex(px - 8, base);
    for (let k = tiers; k >= 1; k--) {
      let y = top + (ph * 0.85) * k / tiers;
      let w = 8 + k * (ph / 32);
      brush.vertex(px - w * 0.45, y - 6);
      brush.vertex(px - w, y);
    }
    brush.endShape(true);
  }
  brush.fill("#050c14", 240);
  brush.beginShape(0.5);
  brush.vertex(-20, 560); brush.vertex(620, 550); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
}
