async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fffaf4");
  brush.noStroke();

  const cx = 320, cy = 290;
  // five broad overlapping petals, one wash each, then an inner blush
  for (let i = 0; i < 5; i++) {
    const a = -90 + i * 72 + 8;
    brush.fill("#f8c6a8", 160);
    brush.fillBleed(0.5, "out");
    brush.fillTexture(0.5, 0.8);
    brush.beginShape(0.95);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 38) * 150, cy + sin(a - 38) * 150);
    brush.vertex(cx + cos(a - 10) * 205, cy + sin(a - 10) * 205);
    brush.vertex(cx + cos(a + 25) * 195, cy + sin(a + 25) * 195);
    brush.vertex(cx + cos(a + 40) * 120, cy + sin(a + 40) * 120);
    brush.endShape(true);
  }
  for (let i = 0; i < 5; i++) {
    const a = -90 + i * 72 + 8;
    brush.fill("#f2a88a", 170);
    brush.fillBleed(0.3, "out");
    brush.fillTexture(0.3, 0.5);
    brush.beginShape(0.9);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 22) * 95, cy + sin(a - 22) * 95);
    brush.vertex(cx + cos(a + 18) * 100, cy + sin(a + 18) * 100);
    brush.endShape(true);
  }

  // fine coral veins radiating from the eye
  for (let i = 0; i < 20; i++) {
    const a = i * 18 + 4;
    brush.fill("#eb9a82", 150);
    brush.fillBleed(0.25, "out");
    brush.fillTexture(0.2, 0.3);
    brush.beginShape(0.4);
    brush.vertex(cx + cos(a) * 30, cy + sin(a) * 30);
    brush.vertex(cx + cos(a + 6) * (80 + (i % 3) * 18), cy + sin(a + 6) * (80 + (i % 3) * 18));
    brush.vertex(cx + cos(a + 8) * (80 + (i % 3) * 18), cy + sin(a + 8) * (80 + (i % 3) * 18));
    brush.vertex(cx + cos(a + 1) * 30, cy + sin(a + 1) * 30);
    brush.endShape(true);
  }

  // crimson eye
  brush.fill("#c74d52", 210);
  brush.fillBleed(0.35, "out");
  brush.circle(cx, cy, 38, true);

  // stamen column pointing toward viewer, slight offset
  brush.fill("#f4e3c4", 220);
  brush.fillBleed(0.1, "in");
  brush.circle(cx + 6, cy - 4, 16, true);
  brush.fill("#e9b243", 230);
  for (let k = 0; k < 10; k++) {
    brush.circle(cx + 6 + cos(k * 36) * 18, cy - 4 + sin(k * 36) * 18, 4, true);
  }
  brush.fill("#b8323b", 230);
  brush.circle(cx + 6, cy - 4, 6, true);
}
