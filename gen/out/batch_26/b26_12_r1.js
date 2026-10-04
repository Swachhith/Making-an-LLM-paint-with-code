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

  // ridge tops, peaked and irregular
  let ridges = [];
  for (let r = 0; r < 4; r++) {
    let base = 190 + r * 95;
    let pts = [];
    let n = 7 + r;
    for (let i = 0; i <= n; i++) {
      let x = -20 + (640 / n) * i;
      let h = i % 2 == 0 ? random(60, 100) - r * 12 : random(10, 30);
      pts.push([x, base - h]);
    }
    ridges.push(pts);
  }

  // grey-lilac sky, stopping at the far ridgeline so its snow stays paper
  brush.fill("#b8bccc", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.2);
  brush.vertex(-20, -20); brush.vertex(620, -20);
  for (let i = ridges[0].length - 1; i >= 0; i--) brush.vertex(ridges[0][i][0], ridges[0][i][1]);
  brush.endShape(true);

  // each ridge: a soft mist band behind it (paper-ish), then its rock below the snowline
  let tones = ["#a8b2c4", "#8e9ab2", "#74829e", "#58668a"];
  for (let r = 0; r < 4; r++) {
    let pts = ridges[r];
    brush.fill(tones[r], 175 + r * 15);
    brush.fillBleed(0.28);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.3);
    for (let p of pts) brush.vertex(p[0], p[1] + 35);
    brush.vertex(620, 640); brush.vertex(-20, 640);
    brush.endShape(true);
    // shadowed faces: a triangle down the right side of every peak
    for (let i = 0; i < pts.length - 1; i += 2) {
      let [px, py] = pts[i];
      let [qx, qy] = pts[i + 1];
      brush.fill(tones[min(3, r + 1)], 175);
      brush.fillBleed(0.22);
      brush.beginShape(0.2);
      brush.vertex(px, py + 8);
      brush.vertex(qx, qy + 20);
      brush.vertex(qx - 10, qy + 110);
      brush.vertex(px + 8, py + 60);
      brush.endShape(true);
    }
  }
  // mist pooling in the valley before the front ridge
  brush.fill("#e0e4ea", 170);
  brush.beginShape(0.8);
  brush.vertex(-20, 430); brush.vertex(300, 415); brush.vertex(620, 440); brush.vertex(620, 460); brush.vertex(-20, 455);
  brush.endShape(true);
}
