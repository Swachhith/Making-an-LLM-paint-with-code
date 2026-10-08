async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2f4f8");
  randomSeed(31337);
  brush.noStroke();
  // cool light blue-grey wash behind the bloom
  brush.fill("#a8c7e8", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(60, 60); brush.vertex(540, 30); brush.vertex(620, 120); brush.vertex(470, 470); brush.vertex(130, 420); brush.vertex(20, 130);
  brush.endShape(true);
  // cool stem, pale leaves
  brush.fill("#6f8aa8", 200);
  brush.fillBleed(0.2);
  brush.beginShape(0.3);
  brush.vertex(300, 540); brush.vertex(330, 540); brush.vertex(340, 400); brush.vertex(310, 400);
  brush.endShape(true);
  brush.fill("#8fa9b8", 190);
  brush.fillBleed(0.25);
  brush.beginShape(0.4);
  brush.vertex(200, 530); brush.vertex(260, 530); brush.vertex(250, 460); brush.vertex(190, 460);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(370, 530); brush.vertex(430, 530); brush.vertex(420, 470); brush.vertex(360, 470);
  brush.endShape(true);
  // centre
  brush.fill("#d8b8c8", 220);
  brush.fillBleed(0.15);
  brush.circle(300, 300, 28, 0.3);
  brush.fill("#e8d0e8", 220);
  brush.fillBleed(0.15);
  brush.circle(300, 300, 14, 0.3);
  // petals: 10 rings, each two passes, darker and more opaque inside
  for (let ring = 0; ring < 10; ring++) {
    const r = 120 - ring * 10.5;
    const len = 250 - ring * 15;
    const col = ["#8a4a8a", "#9a5a9a", "#a86aa8", "#b87ab8", "#c88ac8", "#d89ad8", "#e8a8e8", "#f0b0f0", "#f4c0f4", "#f8d0f8"][ring];
    const op = 180 - ring * 10;
    for (let pass = 0; pass < 2; pass++) {
      brush.fill(col, op);
      brush.fillBleed(0.22);
      brush.fillTexture(0.45, 0.45);
      brush.beginShape(0.5);
      const a = ring * 36;
      brush.vertex(300, 300);
      brush.vertex(300 + cos(a - 14) * r * 0.6, 300 + sin(a - 14) * r * 0.6);
      brush.vertex(300 + cos(a - 6) * r, 300 + sin(a - 6) * r);
      brush.vertex(300 + cos(a + 6) * r * 0.95, 300 + sin(a + 6) * r * 0.95);
      brush.vertex(300 + cos(a + 14) * r * 0.6, 300 + sin(a + 14) * r * 0.6);
      brush.endShape(true);
      // inner ruffled pass
      brush.fill(col, op - 20);
      brush.fillBleed(0.2);
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(0.6);
      brush.vertex(300, 300);
      brush.vertex(300 + cos(a - 8) * r * 0.5, 300 + sin(a - 8) * r * 0.5);
      brush.vertex(300 + cos(a) * r * 0.85, 300 + sin(a) * r * 0.85);
      brush.vertex(300 + cos(a + 8) * r * 0.5, 300 + sin(a + 8) * r * 0.5);
      brush.endShape(true);
    }
  }
  // cool shadow on the lower right petal
  brush.fill("#7a4a7a", 170);
  brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(400, 360); brush.vertex(460, 330); brush.vertex(500, 350); brush.vertex(450, 380);
  brush.endShape(true);
}
