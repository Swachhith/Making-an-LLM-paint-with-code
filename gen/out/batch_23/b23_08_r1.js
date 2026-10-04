async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcf3f4");
  brush.noStroke();

  // pale mint background wash, soft
  brush.fill("#cfe8dc", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.9);
  brush.vertex(-40, -40); brush.vertex(640, -40); brush.vertex(640, 640); brush.vertex(-40, 640);
  brush.endShape(true);

  // stem, soft sage
  brush.fill("#8fbf95", 210);
  brush.fillBleed(0.2);
  brush.beginShape(0.7);
  brush.vertex(292, 290); brush.vertex(310, 290); brush.vertex(322, 640); brush.vertex(300, 640);
  brush.endShape(true);

  // two leaves
  brush.fill("#9ccaa0", 210);
  brush.beginShape(0.9);
  brush.vertex(305, 460); brush.vertex(220, 385); brush.vertex(110, 390); brush.vertex(200, 470);
  brush.endShape(true);
  brush.beginShape(0.9);
  brush.vertex(314, 525); brush.vertex(400, 450); brush.vertex(505, 450); brush.vertex(410, 540);
  brush.endShape(true);
  brush.fill("#6fa57a", 170);
  brush.beginShape(0.9);
  brush.vertex(300, 450); brush.vertex(240, 420); brush.vertex(200, 425); brush.vertex(250, 452);
  brush.endShape(true);

  // zinnia: layered rings of pastel pink petals, many small strokes
  const cx = 300, cy = 230;
  const rings = [[150, 16, "#f7a6c8", 180], [120, 14, "#f28bb8", 190], [88, 12, "#ee79ad", 200], [58, 10, "#e8659f", 210]];
  for (let r = 0; r < rings.length; r++) {
    const [R, n, c, a] = rings[r];
    for (let i = 0; i < n; i++) {
      const t = i * 360 / n + r * 11;
      brush.fill(c, a);
      brush.fillBleed(0.25);
      brush.beginShape(0.8);
      brush.vertex(cx + 18 * cos(t - 18), cy + 18 * sin(t - 18));
      brush.vertex(cx + R * cos(t - 9), cy + R * 0.85 * sin(t - 9));
      brush.vertex(cx + (R + 8) * cos(t), cy + (R + 8) * 0.85 * sin(t));
      brush.vertex(cx + R * cos(t + 9), cy + R * 0.85 * sin(t + 9));
      brush.vertex(cx + 18 * cos(t + 18), cy + 18 * sin(t + 18));
      brush.endShape(true);
    }
  }
  // a second, lighter veil of petals for depth
  for (let i = 0; i < 12; i++) {
    const t = i * 30 + 5;
    brush.fill("#fbc3da", 170);
    brush.fillBleed(0.3);
    brush.beginShape(0.9);
    brush.vertex(cx + 40 * cos(t - 10), cy + 34 * sin(t - 10));
    brush.vertex(cx + 170 * cos(t), cy + 145 * sin(t));
    brush.vertex(cx + 40 * cos(t + 10), cy + 34 * sin(t + 10));
    brush.endShape(true);
  }
  // centre: soft butter yellow with a peach core
  brush.fill("#f6d88a", 220);
  brush.circle(cx, cy, 30, 0.4);
  brush.fill("#e9b36c", 200);
  brush.circle(cx, cy, 16, 0.4);
  for (let i = 0; i < 10; i++) {
    brush.fill("#f4e27a", 220);
    brush.circle(cx + 24 * cos(i * 36), cy + 24 * sin(i * 36), 4, 0.3);
  }
}
