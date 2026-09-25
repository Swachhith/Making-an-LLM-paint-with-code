async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e9e1cf");
  brush.noStroke();

  brush.fill("#8f9468", 150);
  brush.fillBleed(0.45);
  brush.fillTexture(0.7, 0.5);
  brush.circle(300, 300, 290, true);

  let cx = 300, cy = 300;
  for (let layer = 0; layer < 2; layer++) {
    let n = 22;
    for (let k = 0; k < n; k++) {
      let a = k * 360 / n + layer * (180 / n) + random(-3, 3);
      let len = (layer == 0 ? 240 : 205) + random(-15, 15);
      brush.fill(layer == 0 ? "#c9973a" : "#d9ad48", layer == 0 ? 175 : 205);
      brush.fillBleed(0.25);
      brush.fillTexture(0.55, 0.5);
      brush.beginShape(0.5);
      brush.vertex(cx + cos(a - 7) * 95, cy + sin(a - 7) * 95);
      brush.vertex(cx + cos(a - 5) * len * 0.8, cy + sin(a - 5) * len * 0.8);
      brush.vertex(cx + cos(a + random(-2, 2)) * len, cy + sin(a) * len);
      brush.vertex(cx + cos(a + 5) * len * 0.8, cy + sin(a + 5) * len * 0.8);
      brush.vertex(cx + cos(a + 7) * 95, cy + sin(a + 7) * 95);
      brush.endShape(true);
    }
  }
  brush.fill("#6b4a26", 215);
  brush.fillBleed(0.3);
  brush.fillTexture(0.7, 0.5);
  brush.circle(cx, cy, 112, true);
  brush.fill("#3f2a18", 225);
  brush.fillBleed(0.2);
  brush.circle(cx, cy, 80, true);
  for (let i = 0; i < 70; i++) {
    let ang = i * 137.5;
    let r = 6 * sqrt(i) + 4;
    brush.fill(i % 3 == 0 ? "#8a6a3a" : "#231509", 200);
    brush.fillBleed(0.05);
    brush.circle(cx + cos(ang) * r, cy + sin(ang) * r, 4, true);
  }
}
