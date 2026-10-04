async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ede3d0");
  randomSeed(303);
  brush.noStroke();
  // dusky sage background, darker corners
  brush.fill("#7d7a58", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-30, -30); brush.vertex(630, -30); brush.vertex(630, 630); brush.vertex(-30, 630);
  brush.endShape(true);
  brush.fill("#4e4a34", 160);
  brush.fillBleed(0.3);
  brush.circle(40, 580, 170, 0.8);
  brush.circle(590, 30, 140, 0.8);
  // globular bloom: many incurved scoop-shaped petals, outer ones first
  let cx = 310, cy = 300;
  brush.fill("#6a3a1c", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(cx, cy, 245, 0.35);
  for (let ring = 0; ring < 6; ring++) {
    let r = 235 - ring * 38;
    let n = 18 - ring * 2;
    let cols = ["#7a3e1a", "#94502a", "#aa6532", "#c07c40", "#cf9352", "#dcaa66"];
    for (let i = 0; i < n; i++) {
      let a = i * 360 / n + ring * 17 + random(-6, 6);
      let pr = r * random(0.9, 1.02);
      let tipx = cx + cos(a) * pr, tipy = cy + sin(a) * pr * 0.92;
      let bx = cx + cos(a) * pr * 0.35, by = cy + sin(a) * pr * 0.35;
      let px = -sin(a), py = cos(a);
      let w = 22 - ring * 1.5;
      brush.fill(cols[ring], random(170, 225));
      brush.fillBleed(0.25);
      brush.fillTexture(0.45, 0.5);
      brush.beginShape(0.9);
      brush.vertex(bx + px * w * 0.5, by + py * w * 0.5);
      brush.vertex(tipx + px * w, tipy + py * w);
      brush.vertex(tipx + cos(a) * 8, tipy + sin(a) * 8);
      brush.vertex(tipx - px * w, tipy - py * w);
      brush.vertex(bx - px * w * 0.5, by - py * w * 0.5);
      brush.endShape(true);
      // shadowed base of each petal where it tucks under the next
      brush.fill("#5a2e14", 150);
      brush.fillBleed(0.25);
      brush.circle(lerp(bx, tipx, 0.4), lerp(by, tipy, 0.4), w * 0.5, 0.6);
    }
  }
  // tight bud centre
  brush.fill("#c98a44", 220);
  brush.fillBleed(0.3);
  brush.circle(cx, cy, 30, 0.5);
  brush.fill("#8a4a20", 190);
  brush.circle(cx + 3, cy + 4, 14, 0.5);
}
