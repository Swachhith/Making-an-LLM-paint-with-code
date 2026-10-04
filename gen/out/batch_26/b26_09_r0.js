async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcf4f0");
  randomSeed(2609);
  brush.noStroke();

  // pastel sky bands: lilac high, pink, then peach at the horizon
  brush.fill("#b8a8e0", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 190); brush.vertex(-20, 170);
  brush.endShape(true);
  brush.fill("#f0a8c4", 170);
  brush.beginShape(0.5);
  brush.vertex(-20, 140); brush.vertex(620, 160); brush.vertex(620, 340); brush.vertex(-20, 330);
  brush.endShape(true);
  brush.fill("#f8c098", 180);
  brush.beginShape(0.5);
  brush.vertex(-20, 300); brush.vertex(620, 310); brush.vertex(620, 470); brush.vertex(-20, 470);
  brush.endShape(true);

  // pale sun, low
  brush.fill("#fce08a", 220);
  brush.fillBleed(0.3);
  brush.circle(360, 430, 48, true);

  // sea below the horizon, reflecting
  brush.fill("#a8a0d0", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.3);
  brush.vertex(-20, 470); brush.vertex(620, 470); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#f8d098", 200);
  brush.beginShape(0.6);
  brush.vertex(330, 474); brush.vertex(390, 474); brush.vertex(420, 560); brush.vertex(300, 560);
  brush.endShape(true);

  // palms: curved trunks of stacked wide segments, dusty mauve
  let palms = [[110, 560, 60, 1.0], [200, 580, 20, 0.8], [520, 590, -40, 1.1]];
  for (let p of palms) {
    let [bx, by, lean, s] = p;
    let tx = bx + lean, ty = by - 380 * s;
    brush.fill("#7a6488", 200);
    brush.fillBleed(0.2);
    brush.beginShape(0.8);
    brush.vertex(bx - 12, by); brush.vertex(bx + 12, by);
    brush.vertex((bx + tx) / 2 + lean * 0.3 + 9, (by + ty) / 2);
    brush.vertex(tx + 8, ty); brush.vertex(tx - 8, ty);
    brush.vertex((bx + tx) / 2 + lean * 0.3 - 9, (by + ty) / 2);
    brush.endShape(true);
    for (let f = 0; f < 7; f++) {
      let a = -170 + f * 30 + random(-8, 8);
      let L = 120 * s;
      let ex = tx + cos(a) * L, ey = ty + sin(a) * L * 0.6 + 40 * s;
      brush.fill("#6a5480", 200);
      brush.beginShape(0.8);
      brush.vertex(tx, ty);
      brush.vertex((tx + ex) / 2, (ty + ey) / 2 - 22 * s);
      brush.vertex(ex, ey);
      brush.vertex((tx + ex) / 2, (ty + ey) / 2 - 2);
      brush.endShape(true);
    }
  }
}
