async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e6dcc6");
  brush.noStroke();

  brush.fill("#7f865a", 175);
  brush.fillBleed(0.45);
  brush.fillTexture(0.7, 0.5);
  brush.circle(300, 300, 295, true);

  let cx = 300, cy = 300;
  for (let layer = 0; layer < 2; layer++) {
    let n = 24;
    for (let k = 0; k < n; k++) {
      let a = k * 360 / n + layer * (180 / n) + random(-3, 3);
      let len = (layer == 0 ? 250 : 210) + random(-15, 15);
      let bend = random(-4, 4);
      brush.fill(layer == 0 ? "#b98530" : "#d3a23e", layer == 0 ? 200 : 220);
      brush.fillBleed(0.22);
      brush.fillTexture(0.55, 0.55);
      brush.beginShape(0.5);
      brush.vertex(cx + cos(a - 7) * 100, cy + sin(a - 7) * 100);
      brush.vertex(cx + cos(a - 6 + bend) * len * 0.75, cy + sin(a - 6 + bend) * len * 0.75);
      brush.vertex(cx + cos(a + bend * 2) * len, cy + sin(a + bend * 2) * len);
      brush.vertex(cx + cos(a + 6 + bend) * len * 0.75, cy + sin(a + 6 + bend) * len * 0.75);
      brush.vertex(cx + cos(a + 7) * 100, cy + sin(a + 7) * 100);
      brush.endShape(true);
    }
  }
  // umber shadow ring where petals meet the disc
  let disc = [[128, "#7a5020", 205, 0.35], [112, "#553418", 230, 0.2], [90, "#3a2210", 235, 0.15], [55, "#4e3a1a", 220, 0.1]];
  for (let d of disc) {
    brush.fill(d[1], d[2]);
    brush.fillBleed(d[3]);
    brush.fillTexture(0.65, 0.5);
    brush.beginShape(0.9);
    for (let a = 0; a < 360; a += 30) {
      let r = d[0] * (0.95 + random(0, 0.08));
      brush.vertex(cx + cos(a) * r, cy + sin(a) * r);
    }
    brush.endShape(true);
  }
  for (let i = 0; i < 90; i++) {
    let ang = i * 137.5;
    let r = 10.5 * sqrt(i) + 3;
    if (r > 104) continue;
    brush.fill(i % 3 == 0 ? "#a07a3a" : "#5e3e1a", 225);
    brush.fillBleed(0.02);
    brush.circle(cx + cos(ang) * r, cy + sin(ang) * r, 4.5, true);
  }
}
