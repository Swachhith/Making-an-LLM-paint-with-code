async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ece8dc");
  randomSeed(2602);
  brush.noStroke();

  // dull olive and umber ground, darker at the lower left
  brush.fill("#8a8a5c", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.55, 0.45);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(260, -20); brush.vertex(180, 150);
  brush.vertex(60, 330); brush.vertex(-20, 360);
  brush.endShape(true);
  brush.fill("#6b5a3e", 170);
  brush.beginShape(0.5);
  brush.vertex(-20, 420); brush.vertex(140, 470); brush.vertex(300, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#9a9468", 150);
  brush.beginShape(0.5);
  brush.vertex(620, 300); brush.vertex(540, 500); brush.vertex(420, 620); brush.vertex(620, 620);
  brush.endShape(true);

  // five broad rounded sepals, centre offset up and right
  let cx = 330, cy = 280;
  for (let i = 0; i < 5; i++) {
    let a = -90 + i * 72 + random(-6, 6);
    let r = 215 + random(-15, 15);
    let tipx = cx + cos(a) * r, tipy = cy + sin(a) * r;
    let lx = cx + cos(a - 32) * r * 0.7, ly = cy + sin(a - 32) * r * 0.7;
    let rx = cx + cos(a + 32) * r * 0.7, ry = cy + sin(a + 32) * r * 0.7;
    brush.fill("#8e5a72", 170);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.9);
    brush.vertex(cx, cy); brush.vertex(lx, ly); brush.vertex(tipx, tipy); brush.vertex(rx, ry);
    brush.endShape(true);
    // plum veins pooled toward the base
    brush.fill("#5e2440", 200);
    brush.fillBleed(0.22);
    brush.beginShape(0.8);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 20) * r * 0.55, cy + sin(a - 20) * r * 0.55);
    brush.vertex(cx + cos(a) * r * 0.75, cy + sin(a) * r * 0.75);
    brush.vertex(cx + cos(a + 20) * r * 0.55, cy + sin(a + 20) * r * 0.55);
    brush.endShape(true);
    // speckles
    brush.fill("#3e1428", 200);
    for (let k = 0; k < 7; k++) {
      let rr = random(40, r * 0.6), aa = a + random(-18, 18);
      brush.circle(cx + cos(aa) * rr, cy + sin(aa) * rr, random(2, 4), true);
    }
  }

  // green nectary ring and cream stamens
  brush.fill("#7c8a3c", 210);
  brush.fillBleed(0.25);
  brush.circle(cx, cy, 48, true);
  brush.fill("#c9b86a", 220);
  brush.circle(cx, cy, 30, true);
  brush.fill("#e6d69a", 230);
  for (let k = 0; k < 18; k++) {
    let a = random(360), rr = random(10, 34);
    brush.circle(cx + cos(a) * rr, cy + sin(a) * rr, 4, true);
  }
}
