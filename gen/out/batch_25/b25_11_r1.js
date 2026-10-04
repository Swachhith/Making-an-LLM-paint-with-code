async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e6d8c4");
  randomSeed(1211);
  brush.noStroke();
  let hz = 390;

  // dusk sky: slate violet over dusty rose over dull amber at the horizon
  let bands = [["#6f6480", -10, 150], ["#b08488", 110, 290], ["#d49a62", 250, hz + 10]];
  for (let b of bands) {
    brush.fill(b[0], 200);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.7);
    brush.vertex(-10, b[1]); brush.vertex(610, b[1] - 12); brush.vertex(610, b[2]); brush.vertex(-10, b[2] + 8);
    brush.endShape(true);
  }
  // a low sun, pale, sitting just above the far grass
  brush.fill("#f0c07a", 200);
  brush.fillBleed(0.25);
  brush.circle(170, hz - 30, 26, 0.2);

  // field: umber, ochre stubble, darker foreground
  brush.fill("#8a7048", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.55, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-10, hz); brush.vertex(610, hz - 4); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#a58a58", 175);
  brush.beginShape(0.8);
  brush.vertex(-10, 420); brush.vertex(400, 410); brush.vertex(610, 430); brush.vertex(610, 470); brush.vertex(-10, 460);
  brush.endShape(true);
  brush.fill("#5a4632", 195);
  brush.beginShape(0.8);
  brush.vertex(-10, 520); brush.vertex(300, 505); brush.vertex(610, 525); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);

  // baobab, far but legible: swollen barrel trunk, splayed root-like branches
  let bx = 400, by = hz + 6;
  for (let p = 0; p < 3; p++) {
    brush.fill(p == 2 ? "#2a1e1c" : "#4a3a34", 220);
    brush.fillBleed(0.15);
    brush.fillTexture(0.35, 0.3);
    brush.beginShape(0.6);
    brush.vertex(bx - 30, by); brush.vertex(bx - 34, by - 45); brush.vertex(bx - 22, by - 95);
    brush.vertex(bx + 22, by - 95); brush.vertex(bx + 34, by - 45); brush.vertex(bx + 30, by);
    brush.endShape(true);
  }
  // branches: short thick limbs forking twice
  let limbs = [[-150, 60], [-125, 75], [-100, 60], [-75, 70], [-55, 62], [-30, 55]];
  for (let l of limbs) {
    let a = l[0], r = l[1];
    let x0 = bx + cos(a) * 12, y0 = by - 92;
    let x1 = bx + cos(a) * r, y1 = by - 95 + sin(a) * r * 0.75;
    brush.fill("#2e2220", 220);
    brush.fillBleed(0.15);
    brush.fillTexture(0.35, 0.3);
    brush.beginShape(0.2);
    brush.vertex(x0 - 8, y0 + 4); brush.vertex(x0 + 8, y0 + 4); brush.vertex(x1 + 5, y1); brush.vertex(x1 - 5, y1);
    brush.endShape(true);
    for (let s of [-1, 1]) {
      let x2 = x1 + cos(a + s * 30) * 22, y2 = y1 + sin(a + s * 30) * 18;
      brush.beginShape(0.2);
      brush.vertex(x1 - 5, y1 + 2); brush.vertex(x1 + 5, y1 + 2); brush.vertex(x2 + 3, y2); brush.vertex(x2 - 3, y2);
      brush.endShape(true);
    }
  }
  // sparse leaf clumps
  for (let i = 0; i < 8; i++) {
    brush.fill("#4a4a32", 180);
    brush.fillBleed(0.25);
    brush.circle(bx + random(-75, 75), by - 150 + random(-20, 25), random(7, 13), 0.7);
  }
  // long shadow toward the viewer
  brush.fill("#3e3024", 180);
  brush.fillBleed(0.25);
  brush.beginShape(0.4);
  brush.vertex(bx - 30, by); brush.vertex(bx + 30, by); brush.vertex(bx + 150, by + 50); brush.vertex(bx + 60, by + 55);
  brush.endShape(true);
  // distant acacias on the horizon
  for (let x of [60, 120, 250, 530]) {
    brush.fill("#3e3230", 200);
    brush.fillBleed(0.2);
    brush.beginShape(0.6);
    brush.vertex(x - 22, hz - 16); brush.vertex(x + 22, hz - 18); brush.vertex(x + 14, hz - 8); brush.vertex(x - 14, hz - 8);
    brush.endShape(true);
  }
}
