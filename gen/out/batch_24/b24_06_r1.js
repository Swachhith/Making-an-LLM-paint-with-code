async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ece6dc");

  brush.noStroke();
  brush.fill("#d8c8b0", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.55, 0.5);
  brush.circle(430, 200, 170, 0.9);
  brush.fill("#c9bfa9", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(-20, 470);
  brush.vertex(300, 450);
  brush.vertex(620, 480);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);

  brush.fill("#7a7650", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(186, 230);
  brush.vertex(204, 232);
  brush.vertex(228, 400);
  brush.vertex(242, 560);
  brush.vertex(224, 562);
  brush.vertex(210, 400);
  brush.endShape(true);

  brush.fill("#857a52", 200);
  brush.beginShape(0.6);
  brush.vertex(220, 400);
  brush.vertex(280, 360);
  brush.vertex(320, 355);
  brush.vertex(290, 385);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(226, 470);
  brush.vertex(170, 430);
  brush.vertex(140, 432);
  brush.vertex(175, 465);
  brush.endShape(true);

  let cx = 195, cy = 190;
  let rings = [
    [130, 16, "#b0506a", 190],
    [100, 14, "#a3405c", 205],
    [72, 12, "#933350", 215],
    [46, 10, "#7d2a45", 220]
  ];
  for (let r = 0; r < rings.length; r++) {
    let R = rings[r][0], n = rings[r][1];
    for (let i = 0; i < n; i++) {
      let a = i * 360 / n + r * 11;
      let half = 180 / n + 2;
      brush.fill(rings[r][2], rings[r][3]);
      brush.fillBleed(0.25);
      brush.fillTexture(0.45, 0.4);
      brush.beginShape(0.6);
      brush.vertex(cx + cos(a - half * 0.5) * R * 0.3, cy + sin(a - half * 0.5) * R * 0.3 * 0.85);
      brush.vertex(cx + cos(a - half) * R * 0.92, cy + sin(a - half) * R * 0.92 * 0.85);
      brush.vertex(cx + cos(a) * R, cy + sin(a) * R * 0.85);
      brush.vertex(cx + cos(a + half) * R * 0.92, cy + sin(a + half) * R * 0.92 * 0.85);
      brush.vertex(cx + cos(a + half * 0.5) * R * 0.3, cy + sin(a + half * 0.5) * R * 0.3 * 0.85);
      brush.endShape(true);
    }
  }
  for (let i = 0; i < 10; i++) {
    let a = i * 36 + 8;
    brush.fill("#6a2238", 190);
    brush.fillBleed(0.25);
    brush.circle(cx + cos(a) * 95, cy + sin(a) * 80, 10, 0.6);
  }
  brush.fill("#8a6a2a", 220);
  brush.fillBleed(0.2);
  brush.circle(cx, cy - 4, 22, 0.4);
  brush.fill("#c79a2e", 220);
  randomSeed(2406);
  for (let i = 0; i < 9; i++) {
    let a = i * 40;
    brush.circle(cx + cos(a) * 16, cy - 4 + sin(a) * 14, 5, 0.3);
  }
  brush.fill("#3e2a1a", 220);
  brush.circle(cx + 2, cy - 3, 10, 0.4);
}
