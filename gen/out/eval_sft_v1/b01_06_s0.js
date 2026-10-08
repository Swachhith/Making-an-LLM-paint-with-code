async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf3e8");
  brush.noStroke();
  // warm light wash behind the bloom: peachy sky + golden ground
  brush.fill("#f2c9a8", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 300); brush.vertex(400, 350); brush.vertex(200, 320); brush.vertex(0, 360);
  brush.endShape(true);
  brush.fill("#f0a87a", 160);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(0, 420); brush.vertex(600, 420); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  // stem and leaves, dark green
  brush.fill("#2f5a2a", 215);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.6);
  brush.vertex(300, 520); brush.vertex(310, 320); brush.vertex(330, 180); brush.vertex(350, 250); brush.vertex(340, 520);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(310, 520); brush.vertex(330, 470); brush.vertex(370, 430); brush.vertex(360, 520);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(300, 520); brush.vertex(260, 480); brush.vertex(220, 440); brush.vertex(230, 520);
  brush.endShape(true);
  // petals: pale blue with gold veins, overlapping three passes each
  const cx = 300, cy = 240;
  const petals = [[-30, -110], [180, -100], [330, -110], [180, 110], [30, 110], [-30, 100]];
  for (const p of petals) {
    const [a, w] = p;
    for (let k = 0; k < 3; k++) {
      const r = 250 * (0.6 + k * 0.25);
      brush.fill("#6fa8d8", 210);
      brush.fillBleed(0.28);
      brush.fillTexture(0.5, 0.4);
      brush.beginShape(0.9);
      brush.vertex(cx + cos(a) * 120, cy + sin(a) * 120);
      for (let t = 0; t <= 1; t += 0.09) {
        const rr = r * t;
        const aa = a + t * 90;
        brush.vertex(cx + cos(aa) * rr * 0.85, cy + sin(aa) * rr * 0.85);
        brush.vertex(cx + cos(aa + 180) * rr * 0.9, cy + sin(aa + 180) * rr * 0.9);
      }
      brush.endShape(true);
    }
    // gold veins radiating from the centre
    for (let i = 0; i < 7; i++) {
      const a = a + i * 360 / 7;
      brush.fill("#d9a020", 230);
      brush.fillBleed(0.12);
      brush.fillTexture(0.3, 0.3);
      brush.beginShape(0.5);
      brush.vertex(cx + cos(a) * 20, cy + sin(a) * 20);
      brush.vertex(cx + cos(a) * 200, cy + sin(a) * 200);
      brush.vertex(cx + cos(a + 180) * 20, cy + sin(a + 180) * 20);
      brush.endShape(true);
    }
  }
  // centre: dark blue throat with gold star
  brush.fill("#2a3f8a", 230);
  brush.fillBleed(0.15);
  brush.fillTexture(0.4, 0.4);
  brush.circle(cx, cy, 60, 0.4);
  brush.fill("#f0c820", 230);
  brush.fillBleed(0.12);
  brush.fillTexture(0.3, 0.3);
  for (let i = 0; i < 12; i++) {
    const a = i * 30;
    brush.beginShape(0.4);
    brush.vertex(cx + cos(a) * 20, cy + sin(a) * 20);
    brush.vertex(cx + cos(a - 15) * 45, cy + sin(a - 15) * 45);
    brush.vertex(cx + cos(a) * 30, cy + sin(a) * 30);
    brush.endShape(true);
  }
  brush.fill("#d9a020", 230);
  brush.fillBleed(0.15);
  brush.circle(cx, cy, 30, 0.3);
  brush.fill("#f0c820", 220);
  brush.fillBleed(0.2);
  brush.circle(cx, cy, 12, 0.5);
}
