async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7ecd9");
  brush.noStroke();

  // warm apricot background wash so white petals can read
  brush.fill("#e9c79a", 170);
  brush.fillBleed(0.6, "out");
  brush.fillTexture(0.6, 0.3);
  brush.beginShape(0.6);
  brush.vertex(0, 0);
  brush.vertex(600, 0);
  brush.vertex(600, 600);
  brush.vertex(0, 600);
  brush.endShape(true);

  // eight broad petals; shadow pass first then near-white
  for (let i = 0; i < 8; i++) {
    const a = i * 45 + 10;
    const len = 270;
    const x1 = 300 + cos(a) * len, y1 = 300 + sin(a) * len;
    brush.fill("#d9c6ae", 190);
    brush.fillBleed(0.3, "out");
    brush.fillTexture(0.4, 0.6);
    brush.beginShape(0.8);
    brush.vertex(300, 300);
    brush.vertex(300 + cos(a - 16) * len * 0.9, 300 + sin(a - 16) * len * 0.9);
    brush.vertex(300 + cos(a - 6) * len, 300 + sin(a - 6) * len);
    brush.vertex(x1 - cos(a) * 18, y1 - sin(a) * 18);
    brush.vertex(300 + cos(a + 6) * len, 300 + sin(a + 6) * len);
    brush.vertex(300 + cos(a + 16) * len * 0.9, 300 + sin(a + 16) * len * 0.9);
    brush.endShape(true);
    brush.fill("#fffaf0", 230);
    brush.fillBleed(0.15, "in");
    brush.beginShape(0.8);
    brush.vertex(300, 300);
    brush.vertex(300 + cos(a - 12) * len * 0.8, 300 + sin(a - 12) * len * 0.8);
    brush.vertex(300 + cos(a - 3) * len * 0.9, 300 + sin(a - 3) * len * 0.9);
    brush.vertex(300 + cos(a + 10) * len * 0.8, 300 + sin(a + 10) * len * 0.8);
    brush.endShape(true);
  }

  // golden disc
  brush.fill("#e8a92c", 220);
  brush.fillBleed(0.3, "out");
  brush.circle(300, 300, 48, true);
  brush.fill("#b8741c", 210);
  brush.fillBleed(0.1, "in");
  for (let k = 0; k < 14; k++) {
    brush.circle(300 + cos(k * 26) * 30, 300 + sin(k * 26) * 30, 5, true);
  }
  brush.circle(300, 300, 14, true);
}
