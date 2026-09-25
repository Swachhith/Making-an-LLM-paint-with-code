async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbfaf7");
  randomSeed(501);
  brush.noStroke();
  // a faint shadow halo under the dome, broken so paper shows
  brush.fill("#d9d3ea", 130);
  brush.fillBleed(0.35);
  brush.fillTexture(0.5, 0.4);
  brush.circle(305, 300, 190, true);
  // leaves peeking at the corners of the head
  let leafs = [[120, 470, 215], [480, 150, 35], [470, 460, 135]];
  for (let L of leafs) {
    brush.fill("#b8cdb4", 170);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.6);
    let a = L[2];
    brush.vertex(L[0], L[1]);
    brush.vertex(L[0] + 70 * cos(a - 25), L[1] + 70 * sin(a - 25));
    brush.vertex(L[0] + 130 * cos(a), L[1] + 130 * sin(a));
    brush.vertex(L[0] + 70 * cos(a + 25), L[1] + 70 * sin(a + 25));
    brush.endShape(true);
  }
  // florets: four-sepal stars scattered over a dome, fewer at the rim
  let tints = ["#c9b3e6", "#b9aee8", "#dcb7df", "#aebde9", "#cfc0ee"];
  for (let i = 0; i < 70; i++) {
    let r = 175 * sqrt(random());
    let t = random(360);
    let cx = 305 + r * cos(t);
    let cy = 300 + r * sin(t);
    if (random() < 0.18) continue;
    let s = map(r, 0, 175, 24, 15) * random(0.85, 1.15);
    let rot = random(90);
    brush.fill(random(tints), random(165, 215));
    brush.fillBleed(random(0.15, 0.3));
    brush.fillTexture(0.45, 0.35);
    for (let k = 0; k < 4; k++) {
      let ang = rot + k * 90;
      brush.beginShape(0.7);
      brush.vertex(cx, cy);
      brush.vertex(cx + s * 0.7 * cos(ang - 28), cy + s * 0.7 * sin(ang - 28));
      brush.vertex(cx + s * cos(ang), cy + s * sin(ang));
      brush.vertex(cx + s * 0.7 * cos(ang + 28), cy + s * 0.7 * sin(ang + 28));
      brush.endShape(true);
    }
    brush.fill("#8e7cc3", 200);
    brush.fillBleed(0.05);
    brush.circle(cx, cy, 2.5, true);
  }
}
