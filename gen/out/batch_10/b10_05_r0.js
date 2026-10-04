async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3f1ea");
  brush.noStroke();
  // splashy green background blooms
  const greens = ["#7fa35a", "#a8c26a", "#4f7d52"];
  for (let i = 0; i < 14; i++) {
    const a = i * 137.5;
    const rr = 120 + (i * 47) % 180;
    brush.fill(greens[i % 3], 150);
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.5);
    brush.circle(300 + rr * cos(a), 320 + rr * sin(a), 40 + (i % 4) * 14, 0.9);
  }
  // stems, wide soft shapes
  brush.fill("#3f6b35", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(250, 620); brush.vertex(268, 620); brush.vertex(258, 420); brush.vertex(242, 330); brush.vertex(228, 330); brush.vertex(240, 420);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(256, 500); brush.vertex(270, 492); brush.vertex(400, 290); brush.vertex(418, 200); brush.vertex(404, 196); brush.vertex(384, 285);
  brush.endShape(true);
  // leaves
  brush.fill("#557f3c", 200);
  brush.beginShape(0.7);
  brush.vertex(256, 540); brush.vertex(170, 470); brush.vertex(140, 400); brush.vertex(200, 460);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(262, 460); brush.vertex(330, 420); brush.vertex(372, 360); brush.vertex(300, 410);
  brush.endShape(true);
  // closed bud on the right
  brush.fill("#e87a2a", 210);
  brush.fillBleed(0.25);
  brush.beginShape(0.7);
  brush.vertex(410, 210); brush.vertex(438, 160); brush.vertex(440, 100); brush.vertex(424, 70); brush.vertex(405, 100); brush.vertex(400, 160);
  brush.endShape(true);
  brush.fill("#c94e16", 200);
  brush.beginShape(0.7);
  brush.vertex(420, 205); brush.vertex(436, 150); brush.vertex(426, 82); brush.vertex(418, 150);
  brush.endShape(true);
  // open bloom: six recurved petals around centre
  const cx = 235, cy = 300;
  for (let p = 0; p < 6; p++) {
    const a = p * 60 + 15;
    const tipx = cx + 150 * cos(a), tipy = cy + 150 * sin(a);
    const lx = cx + 80 * cos(a - 20), ly = cy + 80 * sin(a - 20);
    const rx = cx + 80 * cos(a + 20), ry = cy + 80 * sin(a + 20);
    brush.fill("#ff8a1f", 210);
    brush.fillBleed(0.28);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.6);
    brush.vertex(cx, cy); brush.vertex(lx, ly); brush.vertex(tipx, tipy); brush.vertex(rx, ry);
    brush.endShape(true);
    brush.fill("#e0520f", 190);
    brush.fillBleed(0.2);
    brush.beginShape(0.6);
    brush.vertex(cx, cy);
    brush.vertex(cx + 60 * cos(a - 8), cy + 60 * sin(a - 8));
    brush.vertex(cx + 110 * cos(a), cy + 110 * sin(a));
    brush.vertex(cx + 60 * cos(a + 8), cy + 60 * sin(a + 8));
    brush.endShape(true);
    // spots
    brush.fill("#5a1a10", 220);
    brush.fillBleed(0.1);
    for (let s = 0; s < 4; s++) {
      const d = 30 + s * 16;
      brush.circle(cx + d * cos(a + (s % 2 ? 7 : -7)), cy + d * sin(a + (s % 2 ? 7 : -7)), 3, 0.3);
    }
  }
  // stamens, wide soft
  brush.fill("#7a3a1a", 220);
  brush.fillBleed(0.15);
  for (let k = 0; k < 5; k++) {
    const a = -110 + k * 16;
    brush.circle(cx + 95 * cos(a), cy + 95 * sin(a), 8, 0.4);
  }
  brush.fill("#b04a14", 230);
  brush.circle(cx, cy, 16, 0.5);
  // drips
  brush.fill("#ff8a1f", 170);
  brush.fillBleed(0.3);
  brush.circle(180, 490, 12, 0.8);
  brush.circle(320, 470, 9, 0.8);
  brush.circle(120, 200, 10, 0.8);
}
