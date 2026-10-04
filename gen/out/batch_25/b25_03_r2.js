async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eef2f5");
  randomSeed(323);
  brush.noStroke();
  let hz = 320;

  // cool sky with a thin pink-lilac glow near the horizon
  brush.fill("#86aacb", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.6);
  brush.vertex(-10, -10); brush.vertex(610, -10); brush.vertex(610, 180); brush.vertex(-10, 200);
  brush.endShape(true);
  brush.fill("#d8c8dc", 170);
  brush.beginShape(0.6);
  brush.vertex(-10, 170); brush.vertex(610, 160); brush.vertex(610, hz); brush.vertex(-10, hz);
  brush.endShape(true);

  // mesas: sharp-edged, flat-topped, painted three times each (tint, body, shadow)
  let mesas = [
    [[-10, hz], [-10, 150], [95, 148], [102, 185], [118, 232], [150, 268], [190, hz]],
    [[170, hz], [205, 262], [222, 205], [230, 190], [350, 186], [356, 205], [370, 250], [410, 285], [440, hz]],
    [[420, hz], [448, 270], [462, 222], [470, 120], [610, 116], [610, hz]]
  ];
  let hues = [["#b0a4c4", "#8a7eaa", "#5c5080"], ["#bcb2cc", "#958ab4", "#6a6090"], ["#a498bc", "#7e72a2", "#524676"]];
  for (let k = 0; k < mesas.length; k++) {
    let m = mesas[k];
    for (let pass = 0; pass < 2; pass++) {
      brush.fill(hues[k][pass], 215);
      brush.fillBleed(pass ? 0.12 : 0.2);
      brush.fillTexture(0.5, 0.45);
      brush.beginShape(0);
      for (let p of m) brush.vertex(p[0], p[1] + pass * 6);
      brush.endShape(true);
    }
    // cliff-face shadow on the right slopes
    let peakIdx = 3;
    brush.fill(hues[k][2], 215);
    brush.fillBleed(0.12);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0);
    let tr = m[m.length - 3];
    brush.vertex(tr[0] - 30, tr[1] + 10);
    for (let i = m.length - 3; i < m.length; i++) brush.vertex(m[i][0], m[i][1]);
    brush.vertex(tr[0] - 30, hz);
    brush.endShape(true);
    // horizontal strata
    let tops = m.filter(p => p[1] < hz - 20);
    let top = Math.min(...tops.map(p => p[1]));
    brush.fill(hues[k][2], 180);
    brush.fillBleed(0.15);
    brush.beginShape(0.3);
    let x0 = tops[0][0] + 10, x1 = tops[tops.length - 1][0] - 10;
    brush.vertex(x0, top + 30); brush.vertex(x1, top + 28); brush.vertex(x1, top + 44); brush.vertex(x0, top + 46);
    brush.endShape(true);
  }

  // still water
  brush.fill("#a9c2d6", 185);
  brush.fillBleed(0.28);
  brush.fillTexture(0.45, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-10, hz); brush.vertex(610, hz); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  // mirrored mesas, darker and softer, slightly shortened
  for (let k = 0; k < mesas.length; k++) {
    brush.fill(hues[k][1], 200);
    brush.fillBleed(0.3);
    brush.fillTexture(0.55, 0.5);
    brush.beginShape(0.1);
    for (let p of mesas[k]) brush.vertex(p[0] + random(-4, 4), hz + (hz - p[1]) * 0.9);
    brush.endShape(true);
    brush.fill(hues[k][2], 170);
    brush.fillBleed(0.3);
    brush.beginShape(0.1);
    for (let p of mesas[k]) brush.vertex(p[0] + random(-4, 4), hz + (hz - p[1]) * 0.45);
    brush.endShape(true);
  }
  // pale ripple lines across the reflection
  for (let y = hz + 30; y < 600; y += 34) {
    brush.fill("#e6eef4", 200);
    brush.fillBleed(0.18);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.6);
    let x0 = random(-40, 200), len = random(220, 420);
    brush.vertex(x0, y); brush.vertex(x0 + len, y + 2); brush.vertex(x0 + len - 20, y + 12); brush.vertex(x0 + 15, y + 11);
    brush.endShape(true);
  }
  // shoreline
  brush.fill("#473d66", 215);
  brush.fillBleed(0.12);
  brush.beginShape(0.2);
  brush.vertex(-10, hz - 4); brush.vertex(610, hz - 5); brush.vertex(610, hz + 10); brush.vertex(-10, hz + 11);
  brush.endShape(true);
}
