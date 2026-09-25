async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4e8e0");
  randomSeed(1113);
  brush.noStroke();
  // saturated wine-and-violet ground, two layers
  brush.fill("#3b0a3a", 245);
  brush.fillBleed(0.3, "out");
  brush.fillTexture(0.75, 0.5);
  brush.beginShape(0.9);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#1f0624", 235);
  brush.fillBleed(0.4, "out");
  brush.circle(520, 90, 160, true);
  brush.circle(60, 540, 150, true);
  // leaves: pointed ovals with a midrib
  let leaves = [[170, 380, 60, 480], [330, 470, 480, 560], [120, 150, 20, 60], [400, 140, 540, 70]];
  for (let L of leaves) {
    let dx = L[2] - L[0], dy = L[3] - L[1];
    let n = sqrt(dx * dx + dy * dy), px = -dy / n * 38, py = dx / n * 38;
    brush.fill("#1f9a4a", 240);
    brush.fillBleed(0.1, "out");
    brush.fillTexture(0.5, 0.6);
    brush.beginShape(0.8);
    brush.vertex(L[0], L[1]);
    brush.vertex(L[0] + dx * 0.4 + px, L[1] + dy * 0.4 + py);
    brush.vertex(L[2], L[3]);
    brush.vertex(L[0] + dx * 0.4 - px, L[1] + dy * 0.4 - py);
    brush.endShape(true);
    brush.fill("#0c5a2a", 235);
    brush.beginShape(0.3);
    brush.vertex(L[0], L[1]); brush.vertex(L[2], L[3]); brush.vertex(L[2] + px * 0.08, L[3] + py * 0.08);
    brush.endShape(true);
  }
  // rose 1: face-on, big, cup of nested petals
  let ax = 230, ay = 260;
  let rr = [165, 140, 115, 92, 70, 50, 32];
  for (let j = 0; j < rr.length; j++) {
    let n = 5;
    for (let k = 0; k < n; k++) {
      let a = k * 72 + j * 31;
      let r = rr[j];
      brush.fill(j < 2 ? "#f0aec0" : (j < 4 ? "#e0809d" : "#c4527a"), 235);
      brush.fillBleed(0.08, "out");
      brush.fillTexture(0.5, 0.75);
      brush.beginShape(0.9);
      brush.vertex(ax + cos(a - 40) * r * 0.45, ay + sin(a - 40) * r * 0.45);
      brush.vertex(ax + cos(a - 38) * r, ay + sin(a - 38) * r);
      brush.vertex(ax + cos(a) * r * 1.06, ay + sin(a) * r * 1.06);
      brush.vertex(ax + cos(a + 38) * r, ay + sin(a + 38) * r);
      brush.vertex(ax + cos(a + 40) * r * 0.45, ay + sin(a + 40) * r * 0.45);
      brush.endShape(true);
      // shadowed lip on the inner edge
      brush.fill("#9c2c58", 225);
      brush.fillBleed(0.06, "out");
      brush.beginShape(0.7);
      brush.vertex(ax + cos(a - 30) * r * 0.5, ay + sin(a - 30) * r * 0.5);
      brush.vertex(ax + cos(a) * r * 0.62, ay + sin(a) * r * 0.62);
      brush.vertex(ax + cos(a + 30) * r * 0.5, ay + sin(a + 30) * r * 0.5);
      brush.vertex(ax + cos(a) * r * 0.55, ay + sin(a) * r * 0.55);
      brush.endShape(true);
    }
  }
  brush.fill("#6e1340", 245);
  brush.circle(ax, ay, 14, true);
  // rose 2: side profile, lower right, leaning
  let bx = 440, by = 360;
  brush.fill("#157a38", 245);
  brush.fillBleed(0.06, "out");
  brush.beginShape(0.5);
  brush.vertex(bx - 75, by + 60); brush.vertex(bx - 5, by + 115); brush.vertex(bx + 65, by + 60); brush.vertex(bx, by + 88);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(bx - 6, by + 100); brush.vertex(bx + 10, by + 250); brush.vertex(bx + 20, by + 250); brush.vertex(bx + 5, by + 100);
  brush.endShape(true);
  for (let i = 0; i < 7; i++) {
    let w = 125 - i * 14;
    let top = by - 95 + i * 9;
    brush.fill(i % 2 ? "#d0628a" : "#eea0b6", 240);
    brush.fillBleed(0.08, "out");
    brush.fillTexture(0.55, 0.75);
    brush.beginShape(0.9);
    brush.vertex(bx - w, top + 10);
    brush.vertex(bx - w * 0.85, by + 30);
    brush.vertex(bx - 10, by + 88 - i * 7);
    brush.vertex(bx + w * 0.85, by + 25);
    brush.vertex(bx + w, top - 5);
    brush.vertex(bx, top + 32);
    brush.endShape(true);
  }
}
