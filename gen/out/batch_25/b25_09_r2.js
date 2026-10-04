async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fff8e6");
  randomSeed(919);
  brush.noStroke();

  // worm's-eye view: tower leans in from bottom-left to a vanishing point up and right
  let base = [[190, 520], [330, 520]];
  let top = [[285, 110], [345, 110]];
  // sky in two pieces around the tower
  brush.fill("#1848c0", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.55, 0.5);
  brush.beginShape(0.1);
  brush.vertex(-10, -10); brush.vertex(285, -10); brush.vertex(top[0][0], top[0][1]);
  brush.vertex(base[0][0], base[0][1]); brush.vertex(-10, 520);
  brush.endShape(true);
  brush.beginShape(0.1);
  brush.vertex(345, -10); brush.vertex(610, -10); brush.vertex(610, 520);
  brush.vertex(base[1][0], base[1][1]); brush.vertex(top[1][0], top[1][1]);
  brush.endShape(true);
  // turquoise near the horizon and dark ultramarine at the zenith
  brush.fill("#10a0c0", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(-10, 380); brush.vertex(180, 360); brush.vertex(170, 520); brush.vertex(-10, 520);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(360, 360); brush.vertex(610, 380); brush.vertex(610, 520); brush.vertex(340, 520);
  brush.endShape(true);
  brush.fill("#0a1f78", 210);
  brush.fillBleed(0.3);
  brush.beginShape(1);
  brush.vertex(-10, -10); brush.vertex(260, -10); brush.vertex(140, 90); brush.vertex(-10, 160);
  brush.endShape(true);
  brush.beginShape(1);
  brush.vertex(380, -10); brush.vertex(610, -10); brush.vertex(610, 170); brush.vertex(480, 80);
  brush.endShape(true);
  // gulls
  for (let g of [[110, 200], [470, 250], [520, 210]]) {
    brush.fill("#0a1f78", 220);
    brush.fillBleed(0.1);
    brush.beginShape(0.5);
    brush.vertex(g[0] - 18, g[1]); brush.vertex(g[0], g[1] - 8); brush.vertex(g[0] + 18, g[1]); brush.vertex(g[0], g[1] - 3);
    brush.endShape(true);
  }

  // tower shadow on its right side
  brush.fill("#9a7fd0", 205);
  brush.fillBleed(0.12);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0);
  brush.vertex(280, 520); brush.vertex(330, 520); brush.vertex(345, 110); brush.vertex(322, 110);
  brush.endShape(true);
  // bold red bands, following the lean
  let lerpPt = (t, side) => [lerp(base[side][0], top[side][0], t), lerp(base[side][1], top[side][1], t)];
  for (let t of [0.08, 0.38, 0.68]) {
    let a = lerpPt(t, 0), b = lerpPt(t, 1), c = lerpPt(t + 0.14, 1), d = lerpPt(t + 0.14, 0);
    for (let p = 0; p < 2; p++) {
      brush.fill(p ? "#a80820" : "#ff1a30", 225);
      brush.fillBleed(0.1);
      brush.fillTexture(0.3, 0.3);
      brush.beginShape(0);
      brush.vertex(p ? lerp(a[0], b[0], 0.6) : a[0], a[1]); brush.vertex(b[0], b[1]);
      brush.vertex(c[0], c[1]); brush.vertex(p ? lerp(d[0], c[0], 0.6) : d[0], d[1]);
      brush.endShape(true);
    }
  }
  // gallery, lantern, cap
  brush.fill("#101428", 235);
  brush.beginShape(0);
  brush.vertex(262, 112); brush.vertex(368, 112); brush.vertex(368, 94); brush.vertex(262, 94);
  brush.endShape(true);
  brush.fill("#ffd21a", 235);
  brush.fillBleed(0.25);
  brush.circle(315, 72, 22, 0.2);
  brush.fill("#ff1a30", 235);
  brush.fillBleed(0.1);
  brush.beginShape(0);
  brush.vertex(285, 55); brush.vertex(315, 18); brush.vertex(345, 55);
  brush.endShape(true);

  // a sliver of wind-whipped sea glimpsed on the left
  brush.fill("#0a5a9a", 220);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(-10, 470); brush.vertex(185, 468); brush.vertex(180, 505); brush.vertex(-10, 505);
  brush.endShape(true);
  // cliff looming at the bottom, hot orange and sienna with green turf
  brush.fill("#f07a10", 225);
  brush.fillBleed(0.28);
  brush.fillTexture(0.55, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-10, 610); brush.vertex(-10, 500); brush.vertex(150, 505); brush.vertex(300, 518);
  brush.vertex(460, 500); brush.vertex(610, 490); brush.vertex(610, 610);
  brush.endShape(true);
  brush.fill("#9a3208", 220);
  brush.fillBleed(0.22);
  brush.beginShape(0.5);
  brush.vertex(-10, 610); brush.vertex(60, 555); brush.vertex(200, 575); brush.vertex(330, 548);
  brush.vertex(470, 580); brush.vertex(610, 545); brush.vertex(610, 610);
  brush.endShape(true);
  brush.fill("#1a9a3a", 220);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(-10, 498); brush.vertex(200, 510); brush.vertex(460, 496); brush.vertex(610, 486);
  brush.vertex(610, 510); brush.vertex(300, 532); brush.vertex(-10, 520);
  brush.endShape(true);
}
