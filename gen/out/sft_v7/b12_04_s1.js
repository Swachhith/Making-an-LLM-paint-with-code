async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7f4ec");
  brush.noStroke();

  // two colours: cobalt and ochre; green: sage
  const cobalt = "#1a4fb0";
  const ochre = "#c98a1f";
  const sage = "#7f9a6a";

  // ground wash
  brush.fill(ochre, 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(0, 470); brush.vertex(600, 460); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);

  // three irises, small, overlapping, stems down
  const blooms = [
    { x: 240, y: 230, tilt: 0 },
    { x: 360, y: 270, tilt: -14 },
    { x: 270, y: 340, tilt: 12 }
  ];
  for (const b of blooms) {
    const cx = b.x, cy = b.y;
    // stems
    brush.fill(sage, 200);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.3);
    brush.vertex(cx - 10, cy); brush.vertex(cx + 10, cy); brush.vertex(cx + 14, cy + 110); brush.vertex(cx - 14, cy + 110);
    brush.endShape(true);
    // sepals
    const sepals = [[-100, -10], [100, -10], [-40, -130], [140, -130]];
    for (const s of sepals) {
      const a = s[0] + b.tilt;
      brush.fill(cobalt, 215);
      brush.fillBleed(0.25);
      brush.fillTexture(0.4, 0.4);
      brush.beginShape(0.3);
      brush.vertex(cx + cos(a) * 20, cy + sin(a) * 20);
      brush.vertex(cx + cos(a - 22) * 80, cy + sin(a - 22) * 80);
      brush.vertex(cx + cos(a - 11) * 100, cy + sin(a - 11) * 100);
      brush.vertex(cx + cos(a + 11) * 100, cy + sin(a + 11) * 100);
      brush.vertex(cx + cos(a + 22) * 80, cy + sin(a + 22) * 80);
      brush.endShape(true);
    }
    // fall
    brush.fill(cobalt, 220);
    brush.fillBleed(0.25);
    brush.beginShape(0.5);
    brush.vertex(cx, cy - 20);
    brush.vertex(cx + 16, cy + 20); brush.vertex(cx - 16, cy + 20);
    brush.vertex(cx + 12, cy + 100); brush.vertex(cx - 12, cy + 100);
    brush.endShape(true);
    // hood
    brush.fill(ochre, 220);
    brush.fillBleed(0.25);
    brush.beginShape(0.5);
    brush.vertex(cx, cy - 20);
    brush.vertex(cx + 16, cy + 10); brush.vertex(cx - 16, cy + 10);
    brush.vertex(cx + 10, cy + 40); brush.vertex(cx - 10, cy + 40);
    brush.endShape(true);
    // yellow mark
    brush.fill(ochre, 235);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.3);
    brush.circle(cx, cy + 2, 12, 0.3);
    brush.fill(ochre, 200);
    brush.circle(cx, cy + 6, 5, 0.3);
  }
}
