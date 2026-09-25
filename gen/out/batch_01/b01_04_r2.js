async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6efe1");
  randomSeed(4);
  brush.noStroke();

  // bold deep green leaves behind
  let leaves = [[300, 300, 20, 230], [300, 300, 160, 210], [300, 300, 260, 190], [300, 300, 95, 150]];
  for (let L of leaves) {
    let a = L[2], r = L[3];
    brush.fill("#1e4f2a", 170);
    brush.fillBleed(0.3, "out");
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.8);
    brush.vertex(L[0], L[1]);
    brush.vertex(L[0] + cos(a - 25) * r * 0.6, L[1] + sin(a - 25) * r * 0.6);
    brush.vertex(L[0] + cos(a) * r, L[1] + sin(a) * r);
    brush.vertex(L[0] + cos(a + 25) * r * 0.6, L[1] + sin(a + 25) * r * 0.6);
    brush.endShape(true);
  }

  // bloom 1: facing, upper left. squash=1
  // bloom 2: tilted away, lower right. squash=0.55 rotated
  let blooms = [[210, 230, 1, 0, 1], [430, 420, 0.55, 35, 0.95]];
  for (let B of blooms) {
    let bx = B[0], by = B[1], sq = B[2], rot = B[3], sc = B[4];
    for (let i = 0; i < 5; i++) {
      let a = i * 72 + 18;
      for (let pass = 0; pass < 3; pass++) {
        let r = [150, 125, 80][pass] * sc;
        let spread = [34, 30, 22][pass];
        let pts = [];
        pts.push([0, 0]);
        pts.push([cos(a - spread) * r * 0.75, sin(a - spread) * r * 0.75]);
        pts.push([cos(a - spread * 0.4) * r, sin(a - spread * 0.4) * r]);
        pts.push([cos(a + spread * 0.5) * r * 1.02, sin(a + spread * 0.5) * r * 1.02]);
        pts.push([cos(a + spread) * r * 0.7, sin(a + spread) * r * 0.7]);
        brush.fill(["#ffb07a", "#ff8a5c", "#ff5a3c"][pass], [160, 200, 180][pass] + random(-20, 20));
        brush.fillBleed([0.5, 0.3, 0.2][pass], "out");
        brush.fillTexture(0.55, 0.5);
        brush.beginShape(0.9);
        for (let p of pts) {
          let x = p[0], y = p[1] * sq;
          brush.vertex(bx + x * cos(rot) - y * sin(rot), by + x * sin(rot) + y * cos(rot));
        }
        brush.endShape(true);
      }
    }
    // magenta eye
    brush.fill("#b0124a", 235);
    brush.fillBleed(0.35, "out");
    brush.fillTexture(0.4, 0.6);
    brush.circle(bx, by, 30 * sc, true);
    brush.fill("#6d0a2e", 235);
    brush.fillBleed(0.1, "out");
    brush.circle(bx, by, 14 * sc, true);
    // staminal column
    let ca = rot - 70;
    brush.fill("#d81b60", 235);
    brush.fillBleed(0.05, "out");
    brush.beginShape(0.5);
    brush.vertex(bx - 3, by); brush.vertex(bx + cos(ca) * 110 * sc - 3, by + sin(ca) * 110 * sc); brush.vertex(bx + cos(ca) * 110 * sc + 4, by + sin(ca) * 110 * sc); brush.vertex(bx + 4, by);
    brush.endShape(true);
    brush.fill("#ffc400", 235);
    brush.fillBleed(0.05, "out");
    for (let k = 0; k < 7; k++) brush.circle(bx + cos(ca) * (80 + k * 5) * sc + random(-9, 9), by + sin(ca) * (80 + k * 5) * sc + random(-9, 9), 4, true);
  }
}
