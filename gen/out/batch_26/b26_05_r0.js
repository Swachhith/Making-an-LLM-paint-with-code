async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4f1ea");
  randomSeed(2605);
  brush.noStroke();

  // deep teal-green backdrop to every edge
  brush.fill("#1f6b5a", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#2e8a4c", 170);
  brush.beginShape(0.6);
  brush.vertex(-20, 380); brush.vertex(200, 460); brush.vertex(420, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // many narrow ray petals, two layers
  let cx = 285, cy = 300;
  for (let layer = 0; layer < 2; layer++) {
    let n = layer == 0 ? 34 : 28;
    for (let i = 0; i < n; i++) {
      let a = (360 / n) * i + layer * 6 + random(-3, 3);
      let r = (layer == 0 ? 250 : 190) + random(-20, 15);
      let w = 11;
      let px = cos(a + 90) * w, py = sin(a + 90) * w;
      brush.fill(layer == 0 ? "#8a2fd8" : "#b040e0", 190 + layer * 30);
      brush.fillBleed(0.22);
      brush.fillTexture(0.4, 0.4);
      brush.beginShape(0.7);
      brush.vertex(cx + cos(a) * 40 - px * 0.5, cy + sin(a) * 40 - py * 0.5);
      brush.vertex(cx + cos(a) * r * 0.6 - px, cy + sin(a) * r * 0.6 - py);
      brush.vertex(cx + cos(a) * r, cy + sin(a) * r);
      brush.vertex(cx + cos(a) * r * 0.6 + px, cy + sin(a) * r * 0.6 + py);
      brush.vertex(cx + cos(a) * 40 + px * 0.5, cy + sin(a) * 40 + py * 0.5);
      brush.endShape(true);
    }
  }

  // golden disc, darker ring then bright dots
  brush.fill("#d98a10", 230);
  brush.fillBleed(0.25);
  brush.circle(cx, cy, 58, true);
  brush.fill("#f4c020", 230);
  brush.circle(cx - 6, cy - 6, 38, true);
  brush.fill("#a8500a", 220);
  for (let k = 0; k < 20; k++) {
    let a = random(360), rr = random(30, 55);
    brush.circle(cx + cos(a) * rr, cy + sin(a) * rr, 4, true);
  }
}
