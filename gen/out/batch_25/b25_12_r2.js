async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf3e0");
  randomSeed(1412);
  brush.noStroke();
  let hz = 215;

  // warm sky
  brush.fill("#f6cc92", 185);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.6);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, hz); brush.vertex(-10, hz);
  brush.endShape(true);
  brush.fill("#eaa868", 150);
  brush.beginShape(1);
  brush.vertex(-10, 130); brush.vertex(610, 120); brush.vertex(610, hz); brush.vertex(-10, hz);
  brush.endShape(true);
  // hills and trees on the horizon
  brush.fill("#b39a82", 195);
  brush.fillBleed(0.28);
  brush.beginShape(0.8);
  brush.vertex(-10, hz); brush.vertex(120, 175); brush.vertex(290, 198); brush.vertex(450, 168);
  brush.vertex(610, 190); brush.vertex(610, hz + 12); brush.vertex(-10, hz + 12);
  brush.endShape(true);
  for (let i = 0; i < 9; i++) {
    brush.fill("#6e7c40", 205);
    brush.fillBleed(0.25);
    brush.circle(30 + i * 68 + random(-10, 10), hz + 2, random(10, 17), 0.6);
  }

  // path: S-curve described by a centre line and a half-width widening toward us
  let cxAt = y => 300 + sin((y - hz) * 0.55) * 60 * ((y - hz) / 385);
  let hwAt = y => 4 + ((y - hz) / 385) * 120;
  // meadow first
  brush.fill("#b6be5c", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-10, hz + 8); brush.vertex(610, hz + 6); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  // red haze band far off, gaps for the path
  brush.fill("#e0402a", 185);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(-10, hz + 18); brush.vertex(cxAt(hz + 18) - 8, hz + 18); brush.vertex(cxAt(hz + 80) - hwAt(hz + 80) - 6, hz + 80); brush.vertex(-10, hz + 90);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(cxAt(hz + 18) + 8, hz + 18); brush.vertex(610, hz + 16); brush.vertex(610, hz + 88); brush.vertex(cxAt(hz + 80) + hwAt(hz + 80) + 6, hz + 80);
  brush.endShape(true);
  // path in two passes: sand, then a shaded wheel-rut down the middle
  let L = [], R = [];
  for (let y = hz + 6; y <= 610; y += 25) { L.push([cxAt(y) - hwAt(y), y]); R.push([cxAt(y) + hwAt(y), y]); }
  brush.fill("#e6bb82", 220);
  brush.fillBleed(0.15);
  brush.fillTexture(0.5, 0.45);
  brush.beginShape(0.6);
  for (let p of L) brush.vertex(p[0], p[1]);
  for (let i = R.length - 1; i >= 0; i--) brush.vertex(R[i][0], R[i][1]);
  brush.endShape(true);
  brush.fill("#c08c58", 190);
  brush.fillBleed(0.2);
  brush.beginShape(0.6);
  for (let y = hz + 60; y <= 610; y += 25) brush.vertex(cxAt(y) - hwAt(y) * 0.25, y);
  for (let y = 610; y >= hz + 60; y -= 25) brush.vertex(cxAt(y) + hwAt(y) * 0.12, y);
  brush.endShape(true);

  // poppies, kept off the path; loose irregular blooms with dark hearts
  for (let i = 0; i < 190; i++) {
    let y = hz + 20 + pow(random(), 0.75) * 385;
    let t = (y - hz) / 385;
    let edge = hwAt(y) + 6 + t * 18;
    let x = random() < 0.5 ? random(-10, cxAt(y) - edge) : random(cxAt(y) + edge, 610);
    let r = 3 + t * t * 24 + random(0, 3);
    brush.fill(random(["#e8281a", "#d41e1a", "#f5451e"]), random(205, 235));
    brush.fillBleed(0.3);
    brush.fillTexture(0.55, 0.5);
    if (r > 10) {
      brush.beginShape(1);
      for (let a = 0; a < 360; a += 72) {
        let rr = r * random(0.8, 1.15);
        brush.vertex(x + cos(a) * rr, y + sin(a) * rr * 0.8);
      }
      brush.endShape(true);
      brush.fill("#1e1210", 225);
      brush.fillBleed(0.1);
      brush.circle(x, y - r * 0.05, r * 0.22, 0.3);
    } else {
      brush.circle(x, y, r, 0.9);
    }
  }
}
