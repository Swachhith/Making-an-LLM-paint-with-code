async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2e8d0");
  brush.noStroke();
  // sky: deep violet top, orange middle, yellow low
  brush.fill("#7a2a8a", 215);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 180); brush.vertex(300, 230); brush.vertex(-20, 150);
  brush.endShape(true);
  brush.fill("#e86a2a", 220);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 180); brush.vertex(620, 180); brush.vertex(620, 380); brush.vertex(420, 420); brush.vertex(-20, 340);
  brush.endShape(true);
  brush.fill("#ffd03a", 225);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 340); brush.vertex(620, 340); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // two suns: a big orange one, a small pink one
  brush.fill("#ff8a1a", 235);
  brush.fillBleed(0.2);
  brush.circle(440, 370, 55, 0.4);
  brush.fill("#ffb0d0", 220);
  brush.circle(300, 300, 30, 0.4);
  // palm trees: dark silhouettes, tall trunks and sweeping fronds
  let palms = [[30, 500, 100, 130], [140, 500, 90, 110], [260, 480, 110, 150], [370, 520, 85, 100], [470, 470, 100, 130], [560, 500, 90, 120]];
  for (let p of palms) {
    let [x, y, w, h] = p;
    // trunk
    brush.fill("#1a0a14", 240);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.2);
    brush.vertex(x, y); brush.vertex(x + w * 0.3, y - h * 0.4); brush.vertex(x + w, y - h * 0.3); brush.vertex(x + w * 0.7, y);
    brush.endShape(true);
    // fronds: two passes each
    brush.fill("#1a0a14", 235);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    let base = y - h * 0.35;
    let n = 9;
    for (let k = 0; k < n; k++) {
      let a = k * 180 / n + 90;
      let L = 100 + k * 15;
      brush.beginShape(0.5);
      brush.vertex(x + w * 0.35, base);
      brush.vertex(x + w * 0.55 + cos(a - 20) * L * 0.8, base + sin(a - 20) * L * 0.8);
      brush.vertex(x + w * 0.55 + cos(a) * L, base + sin(a) * L);
      brush.vertex(x + w * 0.55 + cos(a + 20) * L * 0.8, base + sin(a + 20) * L * 0.8);
      brush.endShape(true);
    }
  }
  // distant dark island on the horizon
  brush.fill("#1a0a14", 235);
  brush.fillBleed(0.2);
  brush.beginShape(0.4);
  brush.vertex(-20, 380); brush.vertex(150, 370); brush.vertex(300, 385); brush.vertex(470, 372); brush.vertex(620, 380); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
}
