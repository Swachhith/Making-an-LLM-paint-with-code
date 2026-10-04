async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3f0f5");
  randomSeed(1110);
  brush.noStroke();

  // saturated leafy backdrop in two greens, with paper left around the bloom
  brush.fill("#48a83c", 185);
  brush.fillBleed(0.3);
  brush.fillTexture(0.55, 0.5);
  brush.beginShape(1);
  brush.vertex(-10, 380); brush.vertex(160, 420); brush.vertex(330, 380); brush.vertex(610, 330);
  brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);
  brush.fill("#1e6e2c", 190);
  brush.beginShape(1);
  brush.vertex(-10, 500); brush.vertex(250, 470); brush.vertex(610, 520); brush.vertex(610, 610); brush.vertex(-10, 610);
  brush.endShape(true);

  // bud stem and bloom stem
  brush.fill("#1e6e2c", 215);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(478, 230); brush.vertex(496, 235); brush.vertex(470, 420); brush.vertex(452, 418);
  brush.endShape(true);

  // pansy face, large, left of centre. Petals as separate overlapping rounded shapes.
  let cx = 250, cy = 270;
  let blob = (x, y, rx, ry, col, op, bleed) => {
    brush.fill(col, op);
    brush.fillBleed(bleed);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(1);
    for (let a = 0; a < 360; a += 45) brush.vertex(x + cos(a) * rx * random(0.9, 1.05), y + sin(a) * ry * random(0.9, 1.05));
    brush.endShape(true);
  };
  // back pair (upper), deep violet
  blob(cx - 55, cy - 80, 85, 75, "#5a0fa8", 220, 0.28);
  blob(cx + 55, cy - 85, 85, 75, "#4a0a94", 220, 0.28);
  blob(cx - 50, cy - 85, 60, 50, "#300670", 200, 0.2);
  blob(cx + 55, cy - 90, 60, 50, "#300670", 200, 0.2);
  // side pair, yellow with violet at the base
  blob(cx - 90, cy + 10, 70, 58, "#ffc000", 225, 0.26);
  blob(cx + 90, cy + 10, 70, 58, "#ffc000", 225, 0.26);
  // lower lip, largest, yellow
  blob(cx, cy + 75, 90, 70, "#ffd200", 225, 0.26);
  blob(cx, cy + 78, 70, 52, "#ffb000", 180, 0.2);
  // the "face": dark violet blotch radiating over the lower three petals
  blob(cx, cy + 25, 60, 50, "#3a067a", 225, 0.2);
  blob(cx - 55, cy + 10, 30, 25, "#3a067a", 210, 0.2);
  blob(cx + 55, cy + 10, 30, 25, "#3a067a", 210, 0.2);
  brush.fill("#ff7a00", 235);
  brush.fillBleed(0.15);
  brush.circle(cx, cy + 2, 12, 0.3);

  // closed bud to the right, nodding
  let bx = 480, by = 190;
  brush.fill("#6a14c0", 225);
  brush.fillBleed(0.22);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(1);
  brush.vertex(bx - 5, by - 85); brush.vertex(bx + 32, by - 20); brush.vertex(bx + 8, by + 38); brush.vertex(bx - 28, by - 15);
  brush.endShape(true);
  brush.fill("#300670", 215);
  brush.fillBleed(0.18);
  brush.beginShape(1);
  brush.vertex(bx, by - 70); brush.vertex(bx + 24, by - 15); brush.vertex(bx + 8, by + 30);
  brush.endShape(true);
  brush.fill("#ffc000", 220);
  brush.beginShape(1);
  brush.vertex(bx - 22, by - 30); brush.vertex(bx - 8, by - 60); brush.vertex(bx - 6, by);
  brush.endShape(true);
  brush.fill("#1e6e2c", 225);
  brush.fillBleed(0.2);
  brush.beginShape(0.5);
  brush.vertex(bx - 30, by + 5); brush.vertex(bx - 5, by + 20); brush.vertex(bx + 5, by + 55);
  brush.vertex(bx + 20, by + 22); brush.vertex(bx + 36, by + 2); brush.vertex(bx + 18, by + 40); brush.vertex(bx - 10, by + 40);
  brush.endShape(true);
}
