async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf6ec");
  randomSeed(101);
  brush.noStroke();

  // two blooms: one upright, one leaning
  let blooms = [[300, 200, 0], [420, 440, 220]];
  for (let b of blooms) {
    let [x, y, a] = b;
    let cx = x, cy = y;
    let n = 13;
    for (let i = 0; i < n; i++) {
      let ang = a + i * 360 / n;
      let R = 150;
      for (let pass = 0; pass < 2; pass++) {
        let r = R * (0.85 + pass * 0.15);
        brush.fill(pass ? "#f2a8a2" : "#ffc0c8", pass ? 170 : 150);
        brush.fillBleed(0.3);
        brush.fillTexture(0.45, 0.45);
        brush.beginShape(0.6);
        brush.vertex(cx + cos(ang - 12) * r * 0.5, cy + sin(ang - 12) * r * 0.5);
        brush.vertex(cx + cos(ang) * r, cy + sin(ang) * r);
        brush.vertex(cx + cos(ang + 12) * r * 0.5, cy + sin(ang + 12) * r * 0.5);
        brush.endShape(true);
      }
    }
    // centre
    brush.fill("#f6b2b2", 220);
    brush.fillBleed(0.15);
    brush.circle(cx, cy, 28, 0.3);
  }
}
