async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3efe6");
  randomSeed(2611);
  brush.noStroke();

  // dark leafy corners, leaving paper behind the flower
  let corners = [[-20, -20], [620, -20], [620, 620], [-20, 620]];
  for (let c of corners) {
    let [x, y] = c;
    let sx = x < 0 ? 1 : -1, sy = y < 0 ? 1 : -1;
    brush.fill("#1e5a2a", 190);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.7);
    brush.vertex(x, y); brush.vertex(x + sx * 260, y); brush.vertex(x + sx * 170, y + sy * 110);
    brush.vertex(x + sx * 90, y + sy * 200); brush.vertex(x, y + sy * 270);
    brush.endShape(true);
  }

  // six pointed tepals
  let cx = 300, cy = 300;
  for (let i = 0; i < 6; i++) {
    let a = i * 60 + 15 + random(-5, 5);
    let r = 255 + random(-15, 10);
    let side = 70;
    brush.fill("#8a3adc", 200);
    brush.fillBleed(0.28);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(0.8);
    brush.vertex(cx + cos(a) * 30, cy + sin(a) * 30);
    brush.vertex(cx + cos(a - 25) * r * 0.55, cy + sin(a - 25) * r * 0.55);
    brush.vertex(cx + cos(a) * r, cy + sin(a) * r);
    brush.vertex(cx + cos(a + 25) * r * 0.55, cy + sin(a + 25) * r * 0.55);
    brush.endShape(true);
    // darker central bar on each tepal
    brush.fill("#5a1aa8", 210);
    brush.fillBleed(0.22);
    brush.beginShape(0.7);
    brush.vertex(cx + cos(a) * 40, cy + sin(a) * 40);
    brush.vertex(cx + cos(a - 7) * r * 0.55, cy + sin(a - 7) * r * 0.55);
    brush.vertex(cx + cos(a) * r * 0.9, cy + sin(a) * r * 0.9);
    brush.vertex(cx + cos(a + 7) * r * 0.55, cy + sin(a + 7) * r * 0.55);
    brush.endShape(true);
  }

  // stamen boss: greenish centre and pale-tipped filaments as dots
  brush.fill("#6a8a2a", 220);
  brush.circle(cx, cy, 32, true);
  brush.fill("#e0d060", 230);
  for (let k = 0; k < 24; k++) {
    let a = k * 15, rr = random(30, 46);
    brush.circle(cx + cos(a) * rr, cy + sin(a) * rr, 4, true);
  }
  brush.fill("#3a0a6a", 220);
  brush.circle(cx, cy, 12, true);
}
