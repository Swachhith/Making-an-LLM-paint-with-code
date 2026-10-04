async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fff0cf");
  randomSeed(1809);
  brush.noStroke();

  // radial-ish sunset: big overlapping circles from outer to inner
  brush.fill("#c2275a", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.6);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 220); brush.vertex(0, 260);
  brush.endShape(true);
  brush.fill("#f26b22", 220);
  brush.circle(300, 430, 300, 0.4);
  brush.fill("#fbb42a", 220);
  brush.circle(300, 440, 180, 0.3);
  brush.fill("#ffe27a", 230);
  brush.circle(300, 450, 70, 0.1);

  // black beach
  brush.fill("#140a10", 250);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.5);
  brush.vertex(0, 500); brush.vertex(300, 485); brush.vertex(600, 505); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);

  // palm trunks: curved wide bands
  let palms = [[110, 500, 170, 110], [470, 505, 400, 150], [540, 510, 580, 260]];
  for (let P of palms) {
    let [bx, by, tx, ty] = P;
    for (let pass = 0; pass < 2; pass++) {
      brush.fill("#1a0c12", 240);
      brush.beginShape(0.6);
      brush.vertex(bx - 12, by);
      brush.vertex((bx + tx) / 2 - 20, (by + ty) / 2);
      brush.vertex(tx - 11, ty);
      brush.vertex(tx + 11, ty);
      brush.vertex((bx + tx) / 2 - 4, (by + ty) / 2);
      brush.vertex(bx + 12, by);
      brush.endShape(true);
    }
    // fronds
    for (let f = 0; f < 9; f++) {
      let a = -175 + f * 40 + random(-10, 10);
      let L = random(90, 130);
      let ex = tx + cos(a) * L, ey = ty + sin(a) * L * 0.6 + 40;
      let mx = tx + cos(a) * L * 0.5, my = ty + sin(a) * L * 0.5 - 12;
      brush.fill("#120810", 240);
      brush.fillBleed(0.2);
      brush.beginShape(0.7);
      brush.vertex(tx, ty - 8);
      brush.vertex(mx, my - 10);
      brush.vertex(ex, ey);
      brush.vertex(mx, my + 12);
      brush.vertex(tx, ty + 8);
      brush.endShape(true);
    }
  }
}
