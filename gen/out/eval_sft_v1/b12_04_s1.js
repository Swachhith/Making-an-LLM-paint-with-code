async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4f0e6");
  brush.noStroke();

  // limited palette: cobalt, magenta, sage
  const cobalt = "#2e4a8a";
  const magenta = "#9a2f8e";
  const sage = "#8aa06f";

  // two big blooms, one small
  const blooms = [
    { x: 260, y: 230, sx: 1, sy: 0.9, cx: 0, cy: 0 },
    { x: 340, y: 290, sx: 0.9, sy: 1.1, cx: 0, cy: 0 },
    { x: 220, y: 370, sx: 0.7, sy: 0.8, cx: 0, cy: 0 },
  ];

  for (const b of blooms) {
    // sepals: three broad shapes, each with a stem
    for (const s of [[-150, -40], [0, -130], [150, -40]]) {
      const lx = b.x + s[0] * b.sx;
      const ly = b.y + s[1] * b.sy;
      brush.fill(magenta, 210);
      brush.fillBleed(0.25);
      brush.fillTexture(0.4, 0.4);
      brush.beginShape(0.6);
      brush.vertex(b.x, b.y);
      brush.vertex(lx + 20, ly + 40);
      brush.vertex(lx + 10, ly + 100);
      brush.vertex(lx - 10, ly + 100);
      brush.vertex(lx - 20, ly + 40);
      brush.endShape(true);
    }
    // fall petals: two long curved ones, pale magenta
    brush.fill(magenta, 180);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.7);
    brush.vertex(b.x, b.y);
    brush.vertex(b.x + 45, b.y + 110);
    brush.vertex(b.x + 10, b.y + 230);
    brush.vertex(b.x - 30, b.y + 150);
    brush.endShape(true);
    brush.beginShape(0.7);
    brush.vertex(b.x, b.y);
    brush.vertex(b.x - 45, b.y + 110);
    brush.vertex(b.x - 10, b.y + 230);
    brush.vertex(b.x + 30, b.y + 150);
    brush.endShape(true);
    // standard petal: three broad ones, cobalt
    for (const p of [[110, 20], [110, -20], [-110, 0]]) {
      brush.fill(cobalt, 220);
      brush.fillBleed(0.25);
      brush.fillTexture(0.45, 0.45);
      brush.beginShape(0.6);
      brush.vertex(b.x, b.y);
      brush.vertex(b.x + p[0] * 0.6, b.y + p[1] * 0.6);
      brush.vertex(b.x + p[0] * 0.9, b.y + p[1] * 0.95);
      brush.vertex(b.x + p[0] * 0.8, b.y + p[1] * 1.15);
      brush.vertex(b.x + p[0] * 0.4, b.y + p[1] * 1.05);
      brush.vertex(b.x + p[0] * 0.2, b.y + p[1] * 0.9);
      brush.vertex(b.x + p[0] * 0.1, b.y + p[1] * 0.6);
      brush.endShape(true);
    }
    // dark throat
    brush.fill(cobalt, 240);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.5);
    brush.vertex(b.x - 14, b.y + 15);
    brush.vertex(b.x + 14, b.y + 15);
    brush.vertex(b.x + 10, b.y + 45);
    brush.vertex(b.x - 10, b.y + 45);
    brush.endShape(true);
    brush.fill(magenta, 230);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.5);
    brush.vertex(b.x - 8, b.y + 22);
    brush.vertex(b.x + 8, b.y + 22);
    brush.vertex(b.x + 4, b.y + 52);
    brush.vertex(b.x - 4, b.y + 52);
    brush.endShape(true);
    // yellow centre
    brush.fill("#e8b83a", 230);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.circle(b.x, b.y + 10, 18, 0.3);
  }

  // stems and leaves
  for (const b of blooms) {
    brush.fill(sage, 220);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.4);
    brush.vertex(b.x, b.y + 20);
    brush.vertex(b.x + 8, b.y + 200);
    brush.vertex(b.x + 16, b.y + 320);
    brush.vertex(b.x + 4, b.y + 300);
    brush.endShape(true);
    brush.fill(sage, 190);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.4);
    brush.vertex(b.x, b.y + 20);
    brush.vertex(b.x - 8, b.y + 200);
    brush.vertex(b.x - 16, b.y + 320);
    brush.vertex(b.x - 4, b.y + 300);
    brush.endShape(true);
  }
  // ground
  brush.fill(sage, 210);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(0, 480);
  brush.vertex(600, 460);
  brush.vertex(600, 600);
  brush.vertex(0, 600);
  brush.endShape(true);
}
