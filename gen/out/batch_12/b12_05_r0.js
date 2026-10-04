async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf1e2");
  randomSeed(55);
  brush.noStroke();
  const H = 300;
  // warm sky
  brush.fill("#f6c98a", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, H); brush.vertex(-20, H);
  brush.endShape(true);
  // mesas profile: flat tops, steep jagged sides
  let far = [[-20, H], [-20, 210], [60, 205], [80, 170], [190, 168], [205, 215], [260, 222], [280, 190], [300, 150], [420, 148], [440, 190], [470, 230], [540, 225], [560, 185], [620, 182], [620, H]];
  let near = [[-20, H], [-20, 250], [120, 245], [140, 200], [230, 198], [250, 255], [360, 262], [380, 230], [500, 226], [520, 270], [620, 268], [620, H]];
  function mesa(pts, col, a, mirror) {
    brush.fill(col, a);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.1);
    for (let p of pts) brush.vertex(p[0], mirror ? 2 * H - p[1] + 4 : p[1]);
    brush.endShape(true);
  }
  mesa(far, "#d98a5a", 190, false);
  mesa(near, "#b8532e", 210, false);
  mesa(near, "#8e3a22", 150, false);
  // water below: pale warm
  brush.fill("#e9b889", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, H); brush.vertex(620, H); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // reflection: softer, lower opacity
  mesa(far, "#d98a5a", 150, true);
  mesa(near, "#b8532e", 160, true);
  // ripple breaks in reflection (lighter strips)
  for (let i = 0; i < 6; i++) {
    let y = H + 40 + i * 42;
    brush.fill("#f7d9ae", 190);
    brush.fillBleed(0.2);
    brush.beginShape(0.5);
    let x0 = random(-20, 300);
    brush.vertex(x0, y); brush.vertex(x0 + random(150, 330), y + 2); brush.vertex(x0 + 200, y + 16); brush.vertex(x0 + 10, y + 16);
    brush.endShape(true);
  }
}
