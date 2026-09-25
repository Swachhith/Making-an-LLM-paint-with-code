async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbfaf7");
  randomSeed(502);
  brush.noStroke();
  // leaves peeking from under the head
  let leafs = [[190, 420, 135], [420, 180, -45], [430, 430, 45]];
  for (let L of leafs) {
    let a = L[2];
    brush.fill("#a3c3a0", 200);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.6);
    brush.vertex(L[0], L[1]);
    brush.vertex(L[0] + 90 * cos(a - 24), L[1] + 90 * sin(a - 24));
    brush.vertex(L[0] + 170 * cos(a), L[1] + 170 * sin(a));
    brush.vertex(L[0] + 90 * cos(a + 24), L[1] + 90 * sin(a + 24));
    brush.endShape(true);
    brush.fill("#7aa27c", 180);
    brush.fillBleed(0.1);
    brush.beginShape(0.6);
    brush.vertex(L[0], L[1]);
    brush.vertex(L[0] + 160 * cos(a), L[1] + 160 * sin(a));
    brush.vertex(L[0] + 85 * cos(a + 20), L[1] + 85 * sin(a + 20));
    brush.endShape(true);
  }
  // broken underwash, paper still showing between
  let pools = [[270, 265, 90, "#d8c9ef"], [345, 335, 85, "#cbd0f0"], [255, 355, 65, "#e5c9e7"]];
  for (let p of pools) {
    brush.fill(p[3], 150);
    brush.fillBleed(0.4);
    brush.fillTexture(0.5, 0.4);
    brush.circle(p[0], p[1], p[2], true);
  }
  // fewer, larger florets: four rounded sepals each, overlapping on the dome
  let tints = ["#b397e0", "#a197e6", "#cf9dd6", "#98abe6", "#bfa8ef"];
  for (let i = 0; i < 48; i++) {
    let r = 150 * sqrt(random());
    let t = random(360);
    let cx = 305 + r * cos(t);
    let cy = 305 + r * sin(t);
    let s = map(r, 0, 150, 44, 30) * random(0.85, 1.1);
    let rot = random(90);
    let c = random(tints);
    for (let k = 0; k < 4; k++) {
      let ang = rot + k * 90 + random(-8, 8);
      brush.fill(c, random(170, 220));
      brush.fillBleed(random(0.15, 0.28));
      brush.fillTexture(0.45, 0.45);
      brush.beginShape(0.9);
      brush.vertex(cx + 3 * cos(ang), cy + 3 * sin(ang));
      brush.vertex(cx + s * 0.55 * cos(ang - 32), cy + s * 0.55 * sin(ang - 32));
      brush.vertex(cx + s * 0.95 * cos(ang - 14), cy + s * 0.95 * sin(ang - 14));
      brush.vertex(cx + s * 0.95 * cos(ang + 14), cy + s * 0.95 * sin(ang + 14));
      brush.vertex(cx + s * 0.55 * cos(ang + 32), cy + s * 0.55 * sin(ang + 32));
      brush.endShape(true);
    }
    brush.fill("#6a549f", 225);
    brush.fillBleed(0.05);
    brush.circle(cx, cy, 3.5, true);
  }
}
