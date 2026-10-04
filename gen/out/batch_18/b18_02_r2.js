async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1f0ea");
  randomSeed(1802);
  brush.noStroke();

  // splashy background blooms
  let splash = ["#8fa3d8", "#c9a0e0", "#9bc7b0", "#b58fd6"];
  for (let i = 0; i < 9; i++) {
    brush.fill(splash[i % 4], random(130, 180));
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.6);
    brush.circle(random(0, 600), random(0, 600), random(60, 140), 0.8);
  }
  // many narrow aster rays, close up, huge
  let cx = 300, cy = 260;
  let rays = [
    [270, "#8e5cc8", 160, 34],
    [230, "#7a43b8", 185, 28],
    [170, "#5e2c98", 215, 24],
    [110, "#46207a", 220, 20]
  ];
  for (let R of rays) {
    let n = 26;
    for (let i = 0; i < n; i++) {
      let a = i * 360 / n + random(-5, 5) + R[0] * 0.1;
      let len = R[0] * random(0.8, 1.05);
      let w = R[3] / 2;
      brush.fill(R[1], R[2] - random(0, 35));
      brush.fillBleed(0.3);
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(0.7);
      brush.vertex(cx + cos(a + 90) * w * 0.5, cy + sin(a + 90) * w * 0.5);
      brush.vertex(cx + cos(a) * len * 0.7 + cos(a + 90) * w, cy + sin(a) * len * 0.7 + sin(a + 90) * w);
      brush.vertex(cx + cos(a) * len, cy + sin(a) * len);
      brush.vertex(cx + cos(a) * len * 0.7 - cos(a + 90) * w, cy + sin(a) * len * 0.7 - sin(a + 90) * w);
      brush.vertex(cx - cos(a + 90) * w * 0.5, cy - sin(a + 90) * w * 0.5);
      brush.endShape(true);
    }
  }
  // drips running down
  for (let i = 0; i < 5; i++) {
    let x = 180 + i * 60 + random(-15, 15);
    let y = 440 + random(0, 30);
    brush.fill("#7a4ab8", 190);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.3);
    brush.vertex(x - 9, y); brush.vertex(x + 9, y);
    brush.vertex(x + 8, y + random(70, 130)); brush.vertex(x - 8, y + random(70, 130));
    brush.endShape(true);
    brush.circle(x, y + 135, 13, 0.3);
  }

  // yellow disc
  brush.fill("#f0b52a", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(cx, cy, 62, 0.4);
  brush.fill("#d98a14", 220);
  brush.circle(cx + 6, cy + 6, 38, 0.4);
  for (let i = 0; i < 18; i++) {
    brush.fill("#8a4a0a", 200);
    brush.circle(cx + random(-40, 40), cy + random(-40, 40), random(3, 6), 0.3);
  }
}
