async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fff2d6");
  brush.noStroke();

  // big graded sky bands: violet top, magenta, orange, yellow at horizon
  const bands = [
    ["#5b2a8c", 0, 140],
    ["#c21e6a", 110, 260],
    ["#f0461e", 230, 380],
    ["#ffae00", 350, 470],
  ];
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  for (const [c, y0, y1] of bands) {
    brush.fill(c, 220);
    brush.beginShape(0.8);
    brush.vertex(-40, y0); brush.vertex(640, y0 + 10); brush.vertex(640, y1); brush.vertex(-40, y1 - 10);
    brush.endShape(true);
  }
  // sun left as paper-ish: only a pale yellow halo around it
  brush.fill("#ffd84a", 200);
  brush.circle(360, 440, 55, 0.3);

  // sea / beach strip, low horizon
  brush.fill("#6a1f4a", 230);
  brush.fillBleed(0.2);
  brush.beginShape(0.5);
  brush.vertex(-40, 470); brush.vertex(640, 470); brush.vertex(640, 640); brush.vertex(-40, 640);
  brush.endShape(true);
  brush.fill("#f08a1e", 200);
  brush.beginShape(0.6);
  brush.vertex(250, 480); brush.vertex(470, 480); brush.vertex(430, 492); brush.vertex(290, 492);
  brush.endShape(true);
  brush.fill("#2a0c2a", 230);
  brush.beginShape(0.7);
  brush.vertex(-40, 540); brush.vertex(300, 525); brush.vertex(640, 545); brush.vertex(640, 640); brush.vertex(-40, 640);
  brush.endShape(true);

  // palm trunks (wide curved shapes)
  const palm = (bx, by, tx, ty, w) => {
    brush.fill("#1e0a24", 240);
    brush.fillBleed(0.15);
    brush.beginShape(0.8);
    brush.vertex(bx - w, by); brush.vertex((bx + tx) / 2 - w * 0.6 + 15, (by + ty) / 2);
    brush.vertex(tx - 6, ty); brush.vertex(tx + 8, ty);
    brush.vertex((bx + tx) / 2 + w * 0.6 + 15, (by + ty) / 2); brush.vertex(bx + w, by);
    brush.endShape(true);
    // fronds
    for (let a = 0; a < 360; a += 45 + random(15)) {
      const L = 90 + random(40);
      const ex = tx + L * cos(a), ey = ty + L * sin(a) * 0.6 + 25;
      const nx = -sin(a) * 30, ny = cos(a) * 30;
      brush.beginShape(0.7);
      brush.vertex(tx, ty);
      brush.vertex((tx + ex) / 2 + nx, (ty + ey) / 2 + ny - 12);
      brush.vertex(ex, ey);
      brush.vertex((tx + ex) / 2 - nx * 0.5, (ty + ey) / 2 - ny * 0.5 + 6);
      brush.endShape(true);
    }
  };
  palm(90, 640, 150, 170, 24);
  palm(520, 640, 470, 250, 20);
  palm(20, 640, 30, 330, 18);

  brush.fill("#ffd84a", 210);
  brush.fillBleed(0.2);
  for (let k = 0; k < 4; k++) {
    brush.beginShape(0.5);
    brush.vertex(300 + k * 12, 500 + k * 9); brush.vertex(420 - k * 12, 500 + k * 9);
    brush.vertex(410 - k * 12, 516 + k * 9); brush.vertex(310 + k * 12, 516 + k * 9);
    brush.endShape(true);
  }
}
