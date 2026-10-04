async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf0e2");
  brush.noStroke();

  // a single warm apricot wash drifting from the upper left, the rest bare paper
  brush.fill("#f2c8a0", 160);
  brush.fillBleed(0.35);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20);
  brush.vertex(330, -20);
  brush.vertex(260, 180);
  brush.vertex(120, 330);
  brush.vertex(-20, 360);
  brush.endShape(true);

  let ox = 200, oy = 180;
  // stem sweeping down to the right
  brush.fill("#7e8e46", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(ox + 10, oy + 90);
  brush.vertex(ox + 60, oy + 140);
  brush.vertex(ox + 140, oy + 260);
  brush.vertex(ox + 180, oy + 440);
  brush.vertex(ox + 155, oy + 440);
  brush.vertex(ox + 115, oy + 270);
  brush.vertex(ox + 40, oy + 160);
  brush.vertex(ox - 10, oy + 110);
  brush.endShape(true);

  // sepals, three pointed
  for (let s of [[-90, 170], [140, 170], [40, 170]]) {
    let a = s[0], L = s[1];
    for (let k = 0; k < 2; k++) {
      brush.fill(k ? "#b25cb8" : "#dca0de", k ? 170 : 200);
      brush.fillBleed(0.3);
      brush.fillTexture(0.4, 0.5);
      brush.beginShape(0.35);
      let f = k ? 0.7 : 1;
      brush.vertex(ox, oy);
      brush.vertex(ox + cos(a - 24) * L * 0.55 * f, oy + sin(a - 24) * L * 0.55 * f);
      brush.vertex(ox + cos(a) * L * f, oy + sin(a) * L * f);
      brush.vertex(ox + cos(a + 24) * L * 0.55 * f, oy + sin(a + 24) * L * 0.55 * f);
      brush.endShape(true);
    }
  }
  // broad side petals, rounded, overlapping the sepals
  for (let a of [-155, -25]) {
    let L = 175;
    brush.fill("#c06ac6", 215);
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.45);
    brush.vertex(ox, oy);
    brush.vertex(ox + cos(a - 45) * L * 0.7, oy + sin(a - 45) * L * 0.7);
    brush.vertex(ox + cos(a - 20) * L, oy + sin(a - 20) * L);
    brush.vertex(ox + cos(a + 10) * L, oy + sin(a + 10) * L);
    brush.vertex(ox + cos(a + 40) * L * 0.65, oy + sin(a + 40) * L * 0.65);
    brush.endShape(true);
    brush.fill("#8e2e94", 185);
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.4);
    brush.vertex(ox, oy);
    brush.vertex(ox + cos(a - 20) * L * 0.5, oy + sin(a - 20) * L * 0.5);
    brush.vertex(ox + cos(a) * L * 0.65, oy + sin(a) * L * 0.65);
    brush.vertex(ox + cos(a + 20) * L * 0.5, oy + sin(a + 20) * L * 0.5);
    brush.endShape(true);
  }
  // lip
  for (let k = 0; k < 2; k++) {
    let f = k ? 0.65 : 1;
    brush.fill(k ? "#5a145c" : "#86207e", 225);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.5);
    brush.vertex(ox - 28 * f, oy + 10);
    brush.vertex(ox - 70 * f, oy + 70 * f);
    brush.vertex(ox - 40 * f, oy + 130 * f);
    brush.vertex(ox, oy + 115 * f);
    brush.vertex(ox + 40 * f, oy + 130 * f);
    brush.vertex(ox + 70 * f, oy + 70 * f);
    brush.vertex(ox + 28 * f, oy + 10);
    brush.endShape(true);
  }
  brush.fill("#eaa830", 230);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.circle(ox, oy + 16, 15, 0.4);
  // two buds further down the stem
  brush.fill("#d494d4", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.circle(ox + 95, oy + 200, 22, 0.4);
  brush.circle(ox + 130, oy + 250, 15, 0.4);
}
