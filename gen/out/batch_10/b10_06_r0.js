async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf4ee");
  brush.noStroke();
  // background splash of leaves behind the bloom
  brush.fill("#5f8a5c", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, 470); brush.vertex(90, 420); brush.vertex(170, 520); brush.vertex(60, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(620, 90); brush.vertex(500, 40); brush.vertex(470, 130); brush.vertex(620, 200);
  brush.endShape(true);
  const cx = 300, cy = 310;
  // outer ring: broad loose petals
  for (let i = 0; i < 9; i++) {
    const a = i * 40 + 10;
    const r1 = 250;
    brush.fill("#f47a62", 185);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.8);
    brush.vertex(cx + 60 * cos(a - 30), cy + 60 * sin(a - 30));
    brush.vertex(cx + r1 * cos(a - 22), cy + r1 * sin(a - 22));
    brush.vertex(cx + (r1 + 20) * cos(a), cy + (r1 + 20) * sin(a));
    brush.vertex(cx + r1 * cos(a + 22), cy + r1 * sin(a + 22));
    brush.vertex(cx + 60 * cos(a + 30), cy + 60 * sin(a + 30));
    brush.endShape(true);
  }
  // middle ring
  for (let i = 0; i < 8; i++) {
    const a = i * 45 + 30;
    brush.fill("#ee5f4f", 195);
    brush.fillBleed(0.26);
    brush.beginShape(0.8);
    brush.vertex(cx + 30 * cos(a - 35), cy + 30 * sin(a - 35));
    brush.vertex(cx + 165 * cos(a - 22), cy + 165 * sin(a - 22));
    brush.vertex(cx + 180 * cos(a), cy + 180 * sin(a));
    brush.vertex(cx + 165 * cos(a + 22), cy + 165 * sin(a + 22));
    brush.vertex(cx + 30 * cos(a + 35), cy + 30 * sin(a + 35));
    brush.endShape(true);
  }
  // inner cupped petals
  for (let i = 0; i < 7; i++) {
    const a = i * 51 + 5;
    brush.fill("#d9423f", 205);
    brush.fillBleed(0.22);
    brush.beginShape(0.7);
    brush.vertex(cx, cy);
    brush.vertex(cx + 95 * cos(a - 25), cy + 95 * sin(a - 25));
    brush.vertex(cx + 105 * cos(a), cy + 105 * sin(a));
    brush.vertex(cx + 95 * cos(a + 25), cy + 95 * sin(a + 25));
    brush.endShape(true);
  }
  // deep heart
  brush.fill("#a8233a", 220);
  brush.fillBleed(0.25);
  brush.circle(cx + 5, cy + 5, 45, 0.7);
  brush.fill("#e8b33a", 210);
  brush.fillBleed(0.2);
  brush.circle(cx - 8, cy - 4, 16, 0.6);
  // splashes and drips
  for (let i = 0; i < 12; i++) {
    const a = i * 83;
    const d = 200 + (i * 29) % 80;
    brush.fill(i % 3 ? "#f47a62" : "#c93a4a", 160);
    brush.fillBleed(0.3);
    brush.circle(cx + d * cos(a), cy + d * sin(a), 6 + (i % 4) * 5, 0.9);
  }
}
