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
  // leaves peeking from under the head
  let leafs = [[170, 430, 135], [440, 170, -45], [450, 440, 45]];
  for (let L of leafs) {
    let a = L[2];
    brush.fill("#a9c7a6", 190);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.6);
    brush.vertex(L[0], L[1]);
    brush.vertex(L[0] + 80 * cos(a - 22), L[1] + 80 * sin(a - 22));
    brush.vertex(L[0] + 150 * cos(a), L[1] + 150 * sin(a));
    brush.vertex(L[0] + 80 * cos(a + 22), L[1] + 80 * sin(a + 22));
    brush.endShape(true);
    brush.fill("#86ad86", 170);
    brush.fillBleed(0.1);
    brush.beginShape(0.6);
    brush.vertex(L[0], L[1]);
    brush.vertex(L[0] + 70 * cos(a + 8), L[1] + 70 * sin(a + 8));
    brush.vertex(L[0] + 140 * cos(a), L[1] + 140 * sin(a));
    brush.vertex(L[0] + 70 * cos(a + 18), L[1] + 70 * sin(a + 18));
    brush.endShape(true);
  }
  // a broken lilac underwash, in three patches so paper shows between
  let pools = [[270, 260, 95, "#d9ccef"], [350, 330, 90, "#cfd3f0"], [260, 360, 70, "#e6cde8"]];
  for (let p of pools) {
    brush.fill(p[3], 160);
    brush.fillBleed(0.4);
    brush.fillTexture(0.5, 0.4);
    brush.circle(p[0], p[1], p[2], true);
  }
  // florets: four-sepal stars packed on the dome, larger at the centre
  let tints = ["#b99be0", "#a59be6", "#d0a2d8", "#9fb0e6", "#c3aef0"];
  for (let i = 0; i < 110; i++) {
    let r = 165 * sqrt(random());
    let t = random(360);
    let cx = 305 + r * cos(t);
    let cy = 305 + r * sin(t) * 0.95;
    if (random() < 0.12) continue;
    let s = map(r, 0, 165, 30, 18) * random(0.85, 1.15);
    let rot = random(90);
    brush.fill(random(tints), random(190, 235));
    brush.fillBleed(random(0.12, 0.25));
    brush.fillTexture(0.45, 0.4);
    for (let k = 0; k < 4; k++) {
      let ang = rot + k * 90;
      brush.beginShape(0.8);
      brush.vertex(cx + 2 * cos(ang), cy + 2 * sin(ang));
      brush.vertex(cx + s * 0.75 * cos(ang - 30), cy + s * 0.75 * sin(ang - 30));
      brush.vertex(cx + s * cos(ang), cy + s * sin(ang));
      brush.vertex(cx + s * 0.75 * cos(ang + 30), cy + s * 0.75 * sin(ang + 30));
      brush.endShape(true);
    }
    brush.fill("#6f5aa8", 220);
    brush.fillBleed(0.05);
    brush.circle(cx, cy, 3, true);
  }
}
