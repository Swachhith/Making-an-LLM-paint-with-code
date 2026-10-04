async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3eef2");
  brush.noStroke();

  brush.fill("#d7c7e0", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(60, 120); brush.vertex(400, 60); brush.vertex(560, 260); brush.vertex(470, 520); brush.vertex(150, 540); brush.vertex(40, 330);
  brush.endShape(true);

  // arcing stem from lower-left to upper-right
  brush.fill("#2f6b3a", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.8);
  brush.vertex(40, 580); brush.vertex(120, 440); brush.vertex(240, 330); brush.vertex(370, 270); brush.vertex(380, 290); brush.vertex(255, 350); brush.vertex(140, 455); brush.vertex(62, 590);
  brush.endShape(true);

  // leaves
  brush.fill("#1f5a34", 210);
  brush.fillBleed(0.25);
  brush.beginShape(0.6);
  brush.vertex(150, 440); brush.vertex(200, 480); brush.vertex(280, 500); brush.vertex(240, 460);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(100, 500); brush.vertex(40, 470); brush.vertex(10, 420); brush.vertex(70, 450);
  brush.endShape(true);
  brush.fill("#3f7f3a", 190);
  brush.beginShape(0.6);
  brush.vertex(240, 345); brush.vertex(230, 280); brush.vertex(260, 230); brush.vertex(270, 300);
  brush.endShape(true);

  // hellebore flower — five broad cupped petals, nodding
  const cx = 420, cy = 330;
  for (let i = 0; i < 5; i++) {
    const a = i * 72 + 20;
    brush.fill("#6a1848", 200);
    brush.fillBleed(0.28);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(0.7);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 28) * 90, cy + sin(a - 28) * 90);
    brush.vertex(cx + cos(a) * 118, cy + sin(a) * 118);
    brush.vertex(cx + cos(a + 28) * 90, cy + sin(a + 28) * 90);
    brush.endShape(true);
  }
  for (let i = 0; i < 5; i++) {
    const a = i * 72 + 20;
    brush.fill("#8e1f5c", 220);
    brush.fillBleed(0.22);
    brush.beginShape(0.7);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 18) * 65, cy + sin(a - 18) * 65);
    brush.vertex(cx + cos(a) * 85, cy + sin(a) * 85);
    brush.vertex(cx + cos(a + 18) * 65, cy + sin(a + 18) * 65);
    brush.endShape(true);
  }
  brush.fill("#3b0a2a", 230);
  brush.fillBleed(0.2);
  brush.circle(cx, cy, 30, 0.4);
  brush.fill("#d9c23a", 240);
  brush.circle(cx, cy, 16, 0.6);
  brush.fill("#b7d24a", 220);
  brush.circle(cx - 4, cy + 2, 8, 0.4);

  // bud
  brush.fill("#7a1a52", 220);
  brush.fillBleed(0.25);
  brush.circle(180, 250, 28, 0.4);
  brush.fill("#4a0e34", 200);
  brush.circle(186, 256, 16, 0.4);
  brush.fill("#2f6b3a", 210);
  brush.beginShape(0.6);
  brush.vertex(186, 272); brush.vertex(230, 330); brush.vertex(245, 325); brush.vertex(200, 265);
  brush.endShape(true);
}
