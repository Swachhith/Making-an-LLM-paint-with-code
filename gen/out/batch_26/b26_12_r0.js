async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4f6f7");
  randomSeed(2612);
  brush.noStroke();

  // four ridges, each with a jagged top; the sky wash stops at the first ridge
  let ridges = [];
  for (let r = 0; r < 4; r++) {
    let base = 180 + r * 90;
    let pts = [];
    for (let x = -20; x <= 620; x += 40) {
      pts.push([x, base - abs(sin(x * (0.6 + r * 0.15) + r * 70)) * (90 - r * 12) + random(-8, 8)]);
    }
    ridges.push(pts);
  }

  // pale grey-lilac sky down to the far ridgeline (snow stays paper)
  brush.fill("#c4c8d6", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20);
  for (let i = ridges[0].length - 1; i >= 0; i--) brush.vertex(ridges[0][i][0], ridges[0][i][1]);
  brush.endShape(true);

  // rock below each ridge's snowline, deepening toward the front
  let tones = ["#b0b8c8", "#98a4b8", "#7e8ca4", "#62708c"];
  for (let r = 0; r < 4; r++) {
    let pts = ridges[r];
    brush.fill(tones[r], 170 + r * 15);
    brush.fillBleed(0.28);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.4);
    for (let p of pts) brush.vertex(p[0], p[1] + 28 + r * 4);
    brush.vertex(620, 640); brush.vertex(-20, 640);
    brush.endShape(true);
    // streaks of shadow in the gullies
    for (let i = 1; i < pts.length - 1; i += 2) {
      brush.fill(tones[min(3, r + 1)], 170);
      brush.beginShape(0.5);
      brush.vertex(pts[i][0] - 10, pts[i][1] + 20);
      brush.vertex(pts[i][0] + 12, pts[i][1] + 22);
      brush.vertex(pts[i][0] + 26, pts[i][1] + 70);
      brush.vertex(pts[i][0] - 4, pts[i][1] + 66);
      brush.endShape(true);
    }
  }
}
