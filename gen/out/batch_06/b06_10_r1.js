async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3ece2");
  randomSeed(1011);
  brush.noStroke();
  // saturated teal wash sweeping behind
  brush.fill("#0d6f73", 220);
  brush.fillBleed(0.4, "out");
  brush.fillTexture(0.65, 0.45);
  brush.beginShape(0.9);
  brush.vertex(-20, 380); brush.vertex(200, 330); brush.vertex(620, 420); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // stem
  brush.fill("#2c5e22", 235);
  brush.fillBleed(0.08, "out");
  brush.beginShape(0.4);
  brush.vertex(300, 320); brush.vertex(318, 460); brush.vertex(340, 600); brush.vertex(356, 600); brush.vertex(334, 460); brush.vertex(316, 320);
  brush.endShape(true);
  brush.fill("#3d7a2b", 225);
  brush.fillBleed(0.2, "out");
  brush.beginShape(0.7);
  brush.vertex(325, 470); brush.vertex(420, 430); brush.vertex(500, 445); brush.vertex(410, 480);
  brush.endShape(true);
  // flower head tilted to face right: squashed ellipse of radial petals
  let cx = 310, cy = 230, sx = 0.42, sy = 1.0, tilt = -12;
  let rings = [
    { n: 18, r: 190, w: 9, c: "#e8590c", o: 220 },
    { n: 15, r: 145, w: 11, c: "#f57c14", o: 220 },
    { n: 12, r: 100, w: 13, c: "#fb9a1e", o: 225 },
    { n: 9, r: 55, w: 18, c: "#fdb52e", o: 230 }
  ];
  function pt(a, r) {
    let x = cos(a) * r * sx, y = sin(a) * r * sy;
    return [cx + x * cos(tilt) - y * sin(tilt), cy + x * sin(tilt) + y * cos(tilt)];
  }
  // back of head: green-orange underside petals curling back on the left
  for (let i = 0; i < 7; i++) {
    let a = 120 + i * 20;
    brush.fill("#b8420a", 215);
    brush.fillBleed(0.15, "out");
    brush.fillTexture(0.5, 0.6);
    let b = pt(a, 40);
    brush.beginShape(0.5);
    brush.vertex(b[0], b[1]);
    brush.vertex(b[0] - 70 - random(20), b[1] + (i - 3) * 35 - 10);
    brush.vertex(b[0] - 90 - random(20), b[1] + (i - 3) * 40 + 10);
    brush.vertex(b[0] - 10, b[1] + 15);
    brush.endShape(true);
  }
  for (let R = 0; R < rings.length; R++) {
    let g = rings[R];
    for (let i = 0; i < g.n; i++) {
      let a = i * 360 / g.n + R * 10 + random(-4, 4);
      let len = g.r * random(0.9, 1.06);
      let p0 = pt(a - g.w, len * 0.2), p1 = pt(a - g.w * 0.7, len * 0.8), p2 = pt(a, len), p3 = pt(a + g.w * 0.7, len * 0.8), p4 = pt(a + g.w, len * 0.2);
      brush.fill(g.c, g.o);
      brush.fillBleed(0.15, "out");
      brush.fillTexture(0.55, 0.65);
      brush.beginShape(0.4);
      brush.vertex(p0[0], p0[1]); brush.vertex(p1[0], p1[1]); brush.vertex(p2[0], p2[1]); brush.vertex(p3[0], p3[1]); brush.vertex(p4[0], p4[1]);
      brush.endShape(true);
    }
  }
  brush.fill("#9b2c05", 235);
  brush.fillBleed(0.1, "out");
  let c = pt(0, 0);
  brush.circle(c[0] + 4, c[1], 16, true);
}
