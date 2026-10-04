async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1eee8");
  brush.noStroke();

  // hazy sky
  brush.fill("#c9d3d8", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 400); brush.vertex(-20, 410);
  brush.endShape(true);

  // sea band
  brush.fill("#9fb8bd", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.35, 0.4);
  brush.beginShape(0.2);
  brush.vertex(-20, 395); brush.vertex(620, 385); brush.vertex(620, 450); brush.vertex(-20, 465);
  brush.endShape(true);

  // faint island on the horizon
  brush.fill("#8aa3a6", 170);
  brush.fillBleed(0.35);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.6);
  brush.vertex(40, 400); brush.vertex(90, 380); brush.vertex(150, 388); brush.vertex(190, 400);
  brush.endShape(true);
  // sand
  brush.fill("#e0cfb2", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-20, 450); brush.vertex(300, 440); brush.vertex(620, 445); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // trunk: a curved, tapering band from lower right to the crown upper left
  const pts = [[430, 600, 34], [420, 520, 30], [395, 440, 27], [360, 360, 24], [320, 280, 21], [280, 210, 19], [250, 160, 17]];
  for (let p = 0; p < 2; p++) {
    brush.fill(p === 0 ? "#a39585" : "#7f7264", 190);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.4);
    brush.beginShape(0.5);
    for (const q of pts) brush.vertex(q[0] - q[2] / 2 + p * 4, q[1]);
    for (let i = pts.length - 1; i >= 0; i--) brush.vertex(pts[i][0] + pts[i][2] / 2 - p * 3, pts[i][1]);
    brush.endShape(true);
  }

  // fronds radiating from crown
  const cx = 250, cy = 155;
  const fronds = [[-170, 230], [-140, 250], [-100, 230], [-60, 240], [-20, 220], [15, 250], [45, 230], [75, 210], [120, 190], [160, 210], [200, 170]];
  for (let k = 0; k < fronds.length; k++) {
    const a = fronds[k][0], L = fronds[k][1];
    const droop = 40;
    const ex = cx + Math.cos(a * Math.PI / 180) * L;
    const ey = cy + Math.sin(a * Math.PI / 180) * L * 0.6 + droop;
    const mx = cx + Math.cos(a * Math.PI / 180) * L * 0.5;
    const my = cy + Math.sin(a * Math.PI / 180) * L * 0.4 - 15;
    const nx = -Math.sin(a * Math.PI / 180) * 26, ny = Math.cos(a * Math.PI / 180) * 26;
    brush.fill(k % 2 ? "#7d9a88" : "#6b8b7a", 200);
    brush.fillBleed(0.25);
    brush.fillTexture(0.45, 0.5);
    brush.beginShape(0.6);
    brush.vertex(cx, cy);
    brush.vertex(mx + nx, my + ny);
    brush.vertex(ex, ey);
    brush.vertex(mx - nx * 0.6, my - ny * 0.6);
    brush.endShape(true);
  }
  // darker inner layer
  for (let k = 0; k < fronds.length; k += 2) {
    const a = fronds[k][0] + 6, L = fronds[k][1] * 0.6;
    const ex = cx + Math.cos(a * Math.PI / 180) * L;
    const ey = cy + Math.sin(a * Math.PI / 180) * L * 0.6 + 25;
    brush.fill("#4f6e60", 170);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.6);
    brush.vertex(cx, cy - 5);
    brush.vertex((cx + ex) / 2 + 12, (cy + ey) / 2 - 16);
    brush.vertex(ex, ey);
    brush.vertex((cx + ex) / 2 - 8, (cy + ey) / 2 + 10);
    brush.endShape(true);
  }
  // leaflet fringe: small soft dabs along each frond's outer half
  for (let k = 0; k < fronds.length; k++) {
    const a = fronds[k][0], L = fronds[k][1];
    for (let t = 0.45; t <= 1.0; t += 0.11) {
      const ex = cx + Math.cos(a * Math.PI / 180) * L * t;
      const ey = cy + Math.sin(a * Math.PI / 180) * L * 0.6 * t + 40 * t * t - 12 * Math.sin(t * Math.PI);
      brush.fill("#86a592", 170);
      brush.fillBleed(0.3);
      brush.fillTexture(0.4, 0.4);
      brush.circle(ex, ey + 12, 12 - t * 5, true);
    }
  }
  // coconuts
  brush.fill("#6d5c48", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.circle(245, 172, 12, true);
  brush.circle(265, 176, 11, true);

  // trunk shadow on sand
  brush.fill("#b8a58a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(410, 590); brush.vertex(200, 560); brush.vertex(190, 580); brush.vertex(420, 612);
  brush.endShape(true);
}
