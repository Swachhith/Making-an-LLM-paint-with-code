async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fff8f0");
  randomSeed(12);
  brush.noStroke();

  // wiry stems in bold green
  brush.fill("#1f7a3a", 225);
  brush.fillBleed(0.05);
  brush.fillTexture(0.2, 0.2);
  brush.beginShape(0.6);
  brush.vertex(236, 300); brush.vertex(246, 300); brush.vertex(270, 600); brush.vertex(258, 600);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(440, 250); brush.vertex(448, 252); brush.vertex(330, 600); brush.vertex(320, 600);
  brush.endShape(true);
  // feathery leaf threads
  for (let i = 0; i < 7; i++) {
    const y = 420 + i * 22;
    const x = 262 + i * 1.5;
    const s = i % 2 ? 1 : -1;
    brush.fill("#2a8f45", 200);
    brush.beginShape(0.5);
    brush.vertex(x, y); brush.vertex(x + s * 50, y - 25); brush.vertex(x + s * 52, y - 21); brush.vertex(x, y + 5);
    brush.endShape(true);
  }

  // cosmos: eight broad notched petals, hot magenta
  const cx = 240, cy = 270;
  for (let i = 0; i < 8; i++) {
    const a = i * 45 + random(-6, 6);
    const l = random(135, 155);
    brush.fill("#e0187a", 190);
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.6);
    brush.beginShape(0.5);
    brush.vertex(cx + cos(a - 12) * 25, cy + sin(a - 12) * 25);
    brush.vertex(cx + cos(a - 17) * l, cy + sin(a - 17) * l);
    brush.vertex(cx + cos(a - 8) * (l + 10), cy + sin(a - 8) * (l + 10));
    brush.vertex(cx + cos(a) * (l - 6), cy + sin(a) * (l - 6));
    brush.vertex(cx + cos(a + 8) * (l + 10), cy + sin(a + 8) * (l + 10));
    brush.vertex(cx + cos(a + 17) * l, cy + sin(a + 17) * l);
    brush.vertex(cx + cos(a + 12) * 25, cy + sin(a + 12) * 25);
    brush.endShape(true);
    // deeper vein streak
    brush.fill("#a5005a", 200);
    brush.fillBleed(0.1);
    brush.beginShape(0.5);
    brush.vertex(cx + cos(a - 5) * 30, cy + sin(a - 5) * 30);
    brush.vertex(cx + cos(a) * l * 0.6, cy + sin(a) * l * 0.6);
    brush.vertex(cx + cos(a + 5) * 30, cy + sin(a + 5) * 30);
    brush.endShape(true);
  }
  brush.fill("#ffb400", 240);
  brush.fillBleed(0.1);
  brush.circle(cx, cy, 30, 0.5);
  brush.fill("#d96a00", 220);
  brush.circle(cx + 4, cy + 4, 16, 0.6);

  // closed bud: teardrop with striped bracts
  const bx = 444, by = 220;
  brush.fill("#e0187a", 215);
  brush.fillBleed(0.2);
  brush.beginShape(0.9);
  brush.vertex(bx, by - 50); brush.vertex(bx + 26, by); brush.vertex(bx, by + 30); brush.vertex(bx - 26, by);
  brush.endShape(true);
  brush.fill("#1f7a3a", 225);
  brush.fillBleed(0.1);
  for (let k = -1; k <= 1; k++) {
    brush.beginShape(0.6);
    brush.vertex(bx + k * 10, by + 30); brush.vertex(bx + k * 22 - 4, by - 5); brush.vertex(bx + k * 22 + 4, by - 5);
    brush.endShape(true);
  }
}
