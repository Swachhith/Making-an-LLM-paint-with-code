async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf4e6");
  brush.noStroke();

  // negative painting: warm wash only in the gaps between petals,
  // so the white petals are the untouched paper
  const n = 8;
  for (let i = 0; i < n; i++) {
    const a = i * 45 + 32;
    brush.fill(i % 2 ? "#e6b77a" : "#ecc48c", 200);
    brush.fillBleed(0.3, "out");
    brush.fillTexture(0.6, 0.5);
    brush.beginShape(0.5);
    brush.vertex(300 + cos(a - 6) * 70, 300 + sin(a - 6) * 70);
    brush.vertex(300 + cos(a - 12) * 430, 300 + sin(a - 12) * 430);
    brush.vertex(300 + cos(a + 12) * 430, 300 + sin(a + 12) * 430);
    brush.vertex(300 + cos(a + 6) * 70, 300 + sin(a + 6) * 70);
    brush.endShape(true);
  }
  // a deeper sienna pool where two gaps meet the edge
  brush.fill("#c98a4e", 170);
  brush.fillBleed(0.5, "out");
  brush.circle(560, 70, 60, true);
  brush.circle(40, 540, 70, true);

  // faint shadow on one side of each petal, ridge down the middle
  for (let i = 0; i < n; i++) {
    const a = i * 45 + 10;
    brush.fill("#dccbb2", 160);
    brush.fillBleed(0.25, "in");
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.8);
    brush.vertex(300 + cos(a) * 60, 300 + sin(a) * 60);
    brush.vertex(300 + cos(a + 3) * 240, 300 + sin(a + 3) * 240);
    brush.vertex(300 + cos(a + 13) * 250, 300 + sin(a + 13) * 250);
    brush.vertex(300 + cos(a + 10) * 120, 300 + sin(a + 10) * 120);
    brush.endShape(true);
  }

  // pale green base of petals
  brush.fill("#c5c98e", 170);
  brush.fillBleed(0.4, "out");
  brush.circle(300, 300, 70, true);

  // golden disc, many small dabs
  brush.fill("#eab02e", 225);
  brush.fillBleed(0.2, "out");
  brush.circle(300, 300, 44, true);
  for (let r = 10; r <= 40; r += 10) {
    for (let k = 0; k < r; k += 3) {
      const a = k * 360 / r + r * 7;
      brush.fill(r > 30 ? "#c7861f" : "#f2c14a", 220);
      brush.fillBleed(0.05, "in");
      brush.circle(300 + cos(a) * r, 300 + sin(a) * r, 3.5, true);
    }
  }
}
