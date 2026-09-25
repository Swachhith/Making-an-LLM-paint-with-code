async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbfaf7");
  brush.noStroke();

  // tulip from above: six petals in two triads, a cup of pink around a dark star
  const cx = 318, cy = 290;

  // outer triad - big, loose, very pale
  for (let k = 0; k < 3; k++) {
    const a = 20 + k * 120;
    brush.fill("#f4c6cf", 150);
    brush.fillBleed(0.4);
    brush.fillTexture(0.3, 0.6);
    brush.beginShape(1);
    brush.vertex(cx + cos(a - 40) * 30, cy + sin(a - 40) * 30);
    brush.vertex(cx + cos(a - 28) * 150, cy + sin(a - 28) * 150);
    brush.vertex(cx + cos(a) * 190, cy + sin(a) * 190);
    brush.vertex(cx + cos(a + 28) * 150, cy + sin(a + 28) * 150);
    brush.vertex(cx + cos(a + 40) * 30, cy + sin(a + 40) * 30);
    brush.endShape(true);
    // rosy edge pooling
    brush.fill("#eaa0b0", 140);
    brush.fillBleed(0.3);
    brush.beginShape(1);
    brush.vertex(cx + cos(a - 26) * 140, cy + sin(a - 26) * 140);
    brush.vertex(cx + cos(a) * 185, cy + sin(a) * 185);
    brush.vertex(cx + cos(a + 26) * 140, cy + sin(a + 26) * 140);
    brush.vertex(cx + cos(a) * 150, cy + sin(a) * 150);
    brush.endShape(true);
  }
  // inner triad
  for (let k = 0; k < 3; k++) {
    const a = 80 + k * 120;
    brush.fill("#f7d4da", 165);
    brush.fillBleed(0.25);
    brush.fillTexture(0.3, 0.5);
    brush.beginShape(1);
    brush.vertex(cx + cos(a - 45) * 20, cy + sin(a - 45) * 20);
    brush.vertex(cx + cos(a - 30) * 110, cy + sin(a - 30) * 110);
    brush.vertex(cx + cos(a) * 135, cy + sin(a) * 135);
    brush.vertex(cx + cos(a + 30) * 110, cy + sin(a + 30) * 110);
    brush.vertex(cx + cos(a + 45) * 20, cy + sin(a + 45) * 20);
    brush.endShape(true);
  }
  // soft shadow deep in the cup
  brush.fill("#d99aa9", 150);
  brush.fillBleed(0.35);
  brush.circle(cx, cy, 55, 0.6);
  // green-yellow heart and dark stamens
  brush.fill("#e9e2a0", 190);
  brush.fillBleed(0.2);
  brush.circle(cx, cy, 22, 0.4);
  for (let i = 0; i < 6; i++) {
    const a = i * 60 + 10;
    brush.fill("#5a4a55", 200);
    brush.fillBleed(0.05);
    brush.circle(cx + cos(a) * 26, cy + sin(a) * 26, 5, 0.5);
  }
  brush.fill("#b7c68a", 200);
  brush.circle(cx, cy, 8, 0.3);
}
