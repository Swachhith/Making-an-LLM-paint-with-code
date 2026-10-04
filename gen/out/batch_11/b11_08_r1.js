async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3ecdc");
  brush.noStroke();

  // high horizon: sky only in the top ~30%, yet "big" via dramatic clouds
  brush.fill("#6f97c9", 190);
  brush.fillBleed(0.35);
  brush.fillTexture(0.55, 0.5);
  brush.beginShape(0.9);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 175); brush.vertex(-20, 185);
  brush.endShape(true);
  // grey cloud blooms
  brush.fill("#8a8aa5", 170);
  brush.circle(120, 60, 70, 0.9);
  brush.circle(400, 90, 90, 0.9);
  brush.fill("#5c6088", 160);
  brush.circle(420, 110, 45, 0.9);

  // drips from the sky wash down into the field
  brush.fill("#6f97c9", 170);
  brush.fillBleed(0.2);
  const drips = [60, 175, 290, 480, 545];
  for (let i = 0; i < drips.length; i++) {
    const x = drips[i], len = 60 + (i * 37) % 70;
    brush.beginShape(0.6);
    brush.vertex(x - 8, 170); brush.vertex(x + 8, 170); brush.vertex(x + 4, 170 + len); brush.vertex(x, 180 + len); brush.vertex(x - 4, 170 + len);
    brush.endShape(true);
    brush.circle(x, 178 + len, 7, 0.3);
  }

  // wheat field: loose golden washes that bloom into each other
  brush.fill("#e0b040", 210);
  brush.fillBleed(0.35);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, 180); brush.vertex(620, 170); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#c9801e", 190);
  brush.beginShape(0.9);
  brush.vertex(-20, 330); brush.vertex(200, 290); brush.vertex(450, 340); brush.vertex(620, 310); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // bloom spots of ochre/sienna splashed in
  const blooms = [[90, 420, 50, "#a8561a"], [330, 480, 70, "#b86a1c"], [500, 400, 45, "#8a4a14"], [230, 560, 40, "#d9962a"], [520, 560, 55, "#9a5418"]];
  for (const b of blooms) {
    brush.fill(b[3], 180);
    brush.fillBleed(0.35);
    brush.circle(b[0], b[1], b[2], 0.9);
  }
  // green hedge along horizon
  brush.fill("#5a7a3a", 200);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(-20, 178); brush.vertex(160, 168); brush.vertex(340, 176); brush.vertex(620, 166); brush.vertex(620, 195); brush.vertex(-20, 200);
  brush.endShape(true);
  // wheat ears: clusters of small ovals in the foreground rows
  for (let r = 0; r < 4; r++) {
    const y = 420 + r * 50;
    for (let x = 10 + r * 17; x < 600; x += 38) {
      brush.fill(r % 2 ? "#a8621a" : "#8a4a10", 200);
      brush.fillBleed(0.15);
      brush.circle(x, y + ((x * 13) % 20), 5 + r, 0.5);
      brush.circle(x + 4, y - 10 - r * 2 + ((x * 13) % 20), 4 + r, 0.5);
    }
  }
  // splatter dots
  brush.fill("#6b3410", 210);
  const sp = [[40, 300], [150, 380], [270, 350], [380, 420], [460, 520], [560, 460], [110, 520], [300, 590]];
  for (const s of sp) brush.circle(s[0], s[1], 4 + (s[0] % 5), 0.5);
}
