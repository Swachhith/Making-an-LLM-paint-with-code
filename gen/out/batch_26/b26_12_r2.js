async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3f5f6");
  randomSeed(26122);
  brush.noStroke();

  // ridge silhouettes
  let ridges = [];
  for (let r = 0; r < 5; r++) {
    let base = 170 + r * 85;
    let pts = [];
    let n = 5 + r * 2;
    for (let i = 0; i <= n; i++) {
      let x = -30 + (660 / n) * i + random(-15, 15);
      let h = i % 2 == 0 ? random(55, 95) - r * 10 : random(5, 25);
      pts.push([x, base - h]);
    }
    ridges.push(pts);
  }

  // warm grey sky above the far snowy ridge
  brush.fill("#c2bcc6", 175);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.2);
  brush.vertex(-20, -20); brush.vertex(620, -20);
  for (let i = ridges[0].length - 1; i >= 0; i--) brush.vertex(ridges[0][i][0], ridges[0][i][1]);
  brush.endShape(true);

  // ridges back to front; snow is the paper strip left along each crest
  let tones = ["#b4bccc", "#9ca8bc", "#8494ac", "#6a7a96", "#50607e"];
  for (let r = 0; r < 5; r++) {
    let pts = ridges[r];
    let snow = 40 - r * 7;
    brush.fill(tones[r], 175 + r * 12);
    brush.fillBleed(0.28);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.3);
    for (let p of pts) brush.vertex(p[0], p[1] + snow);
    brush.vertex(640, 640); brush.vertex(-40, 640);
    brush.endShape(true);
    for (let i = 0; i < pts.length - 1; i += 2) {
      let [px, py] = pts[i];
      let [qx, qy] = pts[i + 1];
      brush.fill(tones[min(4, r + 1)], 170);
      brush.fillBleed(0.22);
      brush.beginShape(0.2);
      brush.vertex(px + 4, py + snow * 0.4);
      brush.vertex(qx, qy + snow);
      brush.vertex(qx - 10, qy + 100);
      brush.vertex(px + 10, py + 70);
      brush.endShape(true);
    }
    // mist band washing out the foot of each ridge
    if (r < 4) {
      brush.fill("#dde2e8", 175);
      brush.beginShape(0.8);
      brush.vertex(-20, 170 + r * 85 + 30); brush.vertex(300, 170 + r * 85 + 22);
      brush.vertex(620, 170 + r * 85 + 32); brush.vertex(620, 170 + r * 85 + 52); brush.vertex(-20, 170 + r * 85 + 50);
      brush.endShape(true);
    }
  }
  // dark conifers on the nearest slope
  brush.fill("#2e3a4e", 215);
  for (let k = 0; k < 14; k++) {
    let x = random(-10, 600), y = random(560, 600), h = random(40, 70);
    brush.beginShape(0.1);
    brush.vertex(x - 12, y); brush.vertex(x, y - h); brush.vertex(x + 12, y);
    brush.endShape(true);
  }
}
