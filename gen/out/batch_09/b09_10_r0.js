async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef2f6");
  brush.noStroke();

  // pale sky, darker at top
  brush.fillBleed(0.3);
  brush.fillTexture(0.35, 0.4);
  brush.fill("#a8c4e0", 170);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 300); brush.vertex(-20, 300);
  brush.endShape(true);
  brush.fill("#5a80b8", 150);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 90); brush.vertex(-20, 70);
  brush.endShape(true);

  // ridges, far to near; each mirrored below the waterline at y = 300
  let ridges = [
    ["#7a9acc", 190, [[-20, 230], [90, 190], [200, 215], [320, 170], [460, 205], [620, 180]]],
    ["#3e5e9e", 200, [[-20, 250], [120, 215], [260, 255], [380, 220], [520, 250], [620, 230]]],
    ["#1a2e6a", 215, [[-20, 270], [70, 245], [180, 280], [330, 250], [450, 275], [620, 255]]],
    ["#0a1030", 235, [[-20, 290], [150, 272], [300, 295], [420, 280], [620, 292]]]
  ];
  for (let r of ridges) {
    brush.fillBleed(0.2);
    brush.fillTexture(0.35, 0.4);
    brush.fill(r[0], r[1]);
    brush.beginShape(0.4);
    for (let p of r[2]) brush.vertex(p[0], p[1]);
    brush.vertex(620, 302); brush.vertex(-20, 302);
    brush.endShape(true);
    // reflection, softer
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.fill(r[0], r[1] - 30);
    brush.beginShape(0.5);
    brush.vertex(-20, 298); brush.vertex(620, 298);
    for (let i = r[2].length - 1; i >= 0; i--) brush.vertex(r[2][i][0], 600 - r[2][i][1]);
    brush.endShape(true);
  }

  // water beneath reflections: deep blue fading down
  brush.fillBleed(0.3);
  brush.fill("#1a3a7a", 170);
  brush.beginShape(0.4);
  brush.vertex(-20, 440); brush.vertex(620, 430); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // ripple highlights: left as paper-coloured breaks painted with pale blue
  brush.fill("#c8d8f0", 170);
  for (let i = 0; i < 4; i++) {
    let y = 330 + i * 30;
    brush.beginShape(0.6);
    brush.vertex(60 + i * 90, y); brush.vertex(200 + i * 90, y - 2); brush.vertex(195 + i * 90, y + 15); brush.vertex(65 + i * 90, y + 16);
    brush.endShape(true);
  }
  // dark foreground shore
  brush.fill("#050818", 230);
  brush.beginShape(0.4);
  brush.vertex(-20, 560); brush.vertex(200, 545); brush.vertex(400, 570); brush.vertex(620, 550); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
}
