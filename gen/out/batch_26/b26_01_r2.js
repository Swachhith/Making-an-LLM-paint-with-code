async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f8f0dc");
  randomSeed(26012);
  brush.noStroke();

  // hot yellow wash behind, blue-green below
  brush.fill("#f0cc50", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 420); brush.vertex(-20, 460);
  brush.endShape(true);
  brush.fill("#2a8a6a", 185);
  brush.beginShape(0.6);
  brush.vertex(-20, 470); brush.vertex(200, 430); brush.vertex(420, 470); brush.vertex(620, 440);
  brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // stem and blade leaf
  brush.fill("#1e6a3a", 225);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(288, 400); brush.vertex(312, 400); brush.vertex(318, 620); brush.vertex(282, 620);
  brush.endShape(true);
  brush.fill("#2a7a44", 215);
  brush.beginShape(0.4);
  brush.vertex(360, 620); brush.vertex(420, 470); brush.vertex(500, 330); brush.vertex(440, 480); brush.vertex(395, 620);
  brush.endShape(true);

  let cx = 300, cy = 250;
  // standards: three tall spoons leaning inward, overlapping above the heart
  let std = [[-28, 175], [0, 205], [28, 175]];
  for (let pass = 0; pass < 3; pass++) {
    for (let s of std) {
      let a = -90 + s[0], L = s[1] * (1 - pass * 0.15);
      let tx = cx + cos(a) * L, ty = cy + sin(a) * L;
      let nx = cos(a + 90), ny = sin(a + 90);
      let w = 62 * (1 - pass * 0.3);
      brush.fill(["#9a5ae8", "#6a2ad0", "#4a12a0"][pass], [180, 200, 205][pass]);
      brush.fillBleed(0.28);
      brush.fillTexture(0.45, 0.5);
      brush.beginShape(0.85);
      brush.vertex(cx + nx * 12, cy + ny * 12);
      brush.vertex(cx + cos(a) * L * 0.55 + nx * w, cy + sin(a) * L * 0.55 + ny * w);
      brush.vertex(tx + nx * w * 0.4, ty + ny * w * 0.4);
      brush.vertex(tx - nx * w * 0.4, ty - ny * w * 0.4);
      brush.vertex(cx + cos(a) * L * 0.55 - nx * w, cy + sin(a) * L * 0.55 - ny * w);
      brush.vertex(cx - nx * 12, cy - ny * 12);
      brush.endShape(true);
    }
  }

  // falls: three broad petals arching out then hanging down
  let falls = [[-160, 1], [-20, 1], [90, 1.15]];
  for (let f of falls) {
    let a = f[0], s = f[1];
    let ox = cx + cos(a) * 170 * s, oy = cy + sin(a) * 60 * s + 60;
    let hx = ox + cos(a) * 20, hy = oy + 130 * s;
    for (let pass = 0; pass < 3; pass++) {
      let w = (85 - pass * 25) * s;
      brush.fill(["#7a36e0", "#521ab8", "#300a78"][pass], [205, 210, 200][pass]);
      brush.fillBleed(0.28);
      brush.fillTexture(0.5, 0.45);
      brush.beginShape(0.85);
      brush.vertex(cx, cy + 10);
      brush.vertex(ox - w * 0.6, oy - w * 0.5);
      brush.vertex(hx - w * 0.7, hy - w * 0.3);
      brush.vertex(hx, hy + (pass == 0 ? 10 : 0));
      brush.vertex(hx + w * 0.7, hy - w * 0.3);
      brush.vertex(ox + w * 0.6, oy + w * 0.2);
      brush.endShape(true);
    }
    // golden beard running out along the fall
    brush.fill("#f5a010", 240);
    brush.fillBleed(0.2);
    brush.beginShape(0.7);
    brush.vertex(cx - 8, cy + 12);
    brush.vertex((cx + ox) / 2 - 9, (cy + oy) / 2);
    brush.vertex(ox, oy + 10);
    brush.vertex((cx + ox) / 2 + 9, (cy + oy) / 2 + 12);
    brush.vertex(cx + 8, cy + 18);
    brush.endShape(true);
  }
  brush.fill("#240848", 225);
  brush.circle(cx, cy + 12, 20, true);
}
