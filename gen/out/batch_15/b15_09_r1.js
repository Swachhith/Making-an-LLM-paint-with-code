async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#141218");
  brush.noStroke();

  // moonlit haze: lighter slate washes on dark paper
  brush.fill("#4a4e66", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.circle(400, 170, 240, 0.5);
  brush.fill("#5e6078", 180);
  brush.circle(420, 150, 130, 0.5);
  brush.fill("#343850", 200);
  brush.beginShape(0.8);
  brush.vertex(0, 260);
  brush.vertex(600, 240);
  brush.vertex(600, 470);
  brush.vertex(0, 480);
  brush.endShape(true);

  // crescent moon, bright, layered twice
  let mx = 430, my = 140;
  for (let pass = 0; pass < 2; pass++) {
    brush.fill("#fbe8b8", 250);
    brush.fillBleed(0.08);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.9);
    for (let a = -125; a <= 125; a += 15) brush.vertex(mx + cos(a) * 44, my + sin(a) * 44);
    for (let a = 115; a >= -115; a -= 15) brush.vertex(mx + 18 + cos(a) * 30, my + sin(a) * 36);
    brush.endShape(true);
  }

  // pine silhouettes, ragged tiers, three dark passes each
  let trees = [[25, 290], [85, 190], [150, 250], [210, 330], [265, 280], [330, 370], [510, 300], [570, 230]];
  for (let t of trees) {
    let x = t[0], y0 = t[1];
    let h = 530 - y0;
    for (let pass = 0; pass < 3; pass++) {
      brush.fill("#030205", 250);
      brush.fillBleed(0.1);
      brush.fillTexture(0.3, 0.3);
      brush.beginShape(0.25);
      brush.vertex(x, y0);
      for (let i = 1; i <= 7; i++) {
        brush.vertex(x + 8 + i * 5.5, y0 + (h * i) / 7);
        brush.vertex(x + 4 + i * 2, y0 + (h * i) / 7 - 7);
      }
      for (let i = 7; i >= 1; i--) {
        brush.vertex(x - 4 - i * 2, y0 + (h * i) / 7 - 7);
        brush.vertex(x - 8 - i * 5.5, y0 + (h * i) / 7);
      }
      brush.endShape(true);
    }
  }
  for (let pass = 0; pass < 3; pass++) {
    brush.fill("#030205", 250);
    brush.fillBleed(0.1);
    brush.beginShape(0.4);
    brush.vertex(0, 500);
    brush.vertex(600, 485);
    brush.vertex(600, 600);
    brush.vertex(0, 600);
    brush.endShape(true);
  }

  // a few warm lights low in the woods
  let lights = [[415, 515, 26], [448, 520, 18], [160, 545, 14], [560, 540, 10]];
  for (let l of lights) {
    brush.fill("#d0601a", 170);
    brush.fillBleed(0.3);
    brush.circle(l[0], l[1], l[2], 0.4);
    brush.fill("#ffb050", 240);
    brush.fillBleed(0.08);
    brush.circle(l[0], l[1], l[2] * 0.35, 0.1);
  }
}
