async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6efe1");
  brush.noStroke();

  // soft grey-green ground wash around the flower
  brush.fill("#a9ab93", 35);
  brush.fillBleed(0.6, "out");
  brush.fillTexture(0.7, 0.2);
  brush.circle(300, 305, 520, true);

  let cx = 300, cy = 300;
  // three falls, broad, radiating outward (seen from above)
  for (let i = 0; i < 3; i++) {
    let a = i * 120 + 90;
    let ax = cos(a), ay = sin(a), px = -ay, py = ax;
    let pas = [[1, "#9a90b0", 55, 0.5], [0.82, "#6f6490", 90, 0.3], [0.55, "#4d4270", 120, 0.15]];
    for (let P of pas) {
      let L = 230 * P[0], W = 95 * P[0];
      brush.fill(P[1], P[2]);
      brush.fillBleed(P[3], "out");
      brush.fillTexture(0.6, 0.5);
      brush.beginShape(0.95);
      brush.vertex(cx + px * 18, cy + py * 18);
      brush.vertex(cx + ax * L * 0.55 + px * W * 0.55, cy + ay * L * 0.55 + py * W * 0.55);
      brush.vertex(cx + ax * L * 0.95 + px * W * 0.3, cy + ay * L * 0.95 + py * W * 0.3);
      brush.vertex(cx + ax * L, cy + ay * L);
      brush.vertex(cx + ax * L * 0.95 - px * W * 0.3, cy + ay * L * 0.95 - py * W * 0.3);
      brush.vertex(cx + ax * L * 0.55 - px * W * 0.55, cy + ay * L * 0.55 - py * W * 0.55);
      brush.vertex(cx - px * 18, cy - py * 18);
      brush.endShape(true);
    }
    // ochre beard
    brush.fill("#c29b45", 150);
    brush.fillBleed(0.1, "out");
    brush.fillTexture(0.3, 0.7);
    brush.beginShape(0.6);
    brush.vertex(cx + ax * 20 + px * 6, cy + ay * 20 + py * 6);
    brush.vertex(cx + ax * 95, cy + ay * 95);
    brush.vertex(cx + ax * 20 - px * 6, cy + ay * 20 - py * 6);
    brush.endShape(true);
  }
  // three standards, narrower, between the falls, upright so foreshortened
  for (let i = 0; i < 3; i++) {
    let a = i * 120 + 30;
    let ax = cos(a), ay = sin(a), px = -ay, py = ax;
    for (let P of [[1, "#b3aac4", 60, 0.35], [0.7, "#7c7199", 95, 0.2]]) {
      let L = 120 * P[0], W = 60 * P[0];
      brush.fill(P[1], P[2]);
      brush.fillBleed(P[3], "out");
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(1);
      brush.vertex(cx, cy);
      brush.vertex(cx + ax * L * 0.6 + px * W * 0.5, cy + ay * L * 0.6 + py * W * 0.5);
      brush.vertex(cx + ax * L, cy + ay * L);
      brush.vertex(cx + ax * L * 0.6 - px * W * 0.5, cy + ay * L * 0.6 - py * W * 0.5);
      brush.endShape(true);
    }
  }
  brush.fill("#3b3456", 110);
  brush.fillBleed(0.2, "out");
  brush.circle(cx, cy, 40, true);
}
