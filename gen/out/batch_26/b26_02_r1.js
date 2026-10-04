async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ebe6d8");
  randomSeed(2622);
  brush.noStroke();

  // earthy ground: olive upper left, umber lower right
  brush.fill("#8c8a5a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.55, 0.45);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 200); brush.vertex(300, 300); brush.vertex(-20, 380);
  brush.endShape(true);
  brush.fill("#6a543a", 170);
  brush.beginShape(0.5);
  brush.vertex(-20, 380); brush.vertex(300, 300); brush.vertex(620, 200); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // five overlapping sepals, broad as spoons, filling the sheet
  let cx = 320, cy = 290;
  let order = [0, 2, 4, 1, 3];
  for (let j of order) {
    let a = -100 + j * 72 + random(-5, 5);
    let r = 270 + random(-15, 10);
    let pts = [];
    pts.push([cx + cos(a) * 20, cy + sin(a) * 20]);
    pts.push([cx + cos(a - 38) * r * 0.55, cy + sin(a - 38) * r * 0.55]);
    pts.push([cx + cos(a - 24) * r * 0.9, cy + sin(a - 24) * r * 0.9]);
    pts.push([cx + cos(a) * r, cy + sin(a) * r]);
    pts.push([cx + cos(a + 24) * r * 0.9, cy + sin(a + 24) * r * 0.9]);
    pts.push([cx + cos(a + 38) * r * 0.55, cy + sin(a + 38) * r * 0.55]);
    brush.fill("#9a6a7c", 190);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.9);
    for (let p of pts) brush.vertex(p[0], p[1]);
    brush.endShape(true);
    // plum pooling toward the heart and along one edge
    brush.fill("#5a2238", 200);
    brush.fillBleed(0.25);
    brush.beginShape(0.8);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 30) * r * 0.5, cy + sin(a - 30) * r * 0.5);
    brush.vertex(cx + cos(a - 12) * r * 0.8, cy + sin(a - 12) * r * 0.8);
    brush.vertex(cx + cos(a + 10) * r * 0.45, cy + sin(a + 10) * r * 0.45);
    brush.endShape(true);
    brush.fill("#3c1426", 200);
    for (let k = 0; k < 9; k++) {
      let rr = random(50, r * 0.55), aa = a + random(-20, 20);
      brush.circle(cx + cos(aa) * rr, cy + sin(aa) * rr, random(2, 4), true);
    }
  }

  // nectary cup and a crown of stamens
  brush.fill("#6e7a34", 215);
  brush.fillBleed(0.25);
  brush.circle(cx, cy, 55, true);
  brush.fill("#a8a050", 220);
  brush.circle(cx, cy, 34, true);
  brush.fill("#dccb88", 235);
  for (let k = 0; k < 26; k++) {
    let a = random(360), rr = random(18, 50);
    brush.circle(cx + cos(a) * rr, cy + sin(a) * rr, 4, true);
  }
}
