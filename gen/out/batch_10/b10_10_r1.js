async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2f5f6");
  brush.noStroke();
  // a tall panel with bare paper margins either side
  const L = 150, R = 450;
  // sky, cool blue fading into lavender
  brush.fill("#8fb3d6", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.2);
  brush.vertex(L, 20); brush.vertex(R, 22); brush.vertex(R, 260); brush.vertex(L, 250);
  brush.endShape(true);
  brush.fill("#c3b8dc", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.3);
  brush.vertex(L, 200); brush.vertex(R, 190); brush.vertex(R, 330); brush.vertex(L, 330);
  brush.endShape(true);
  // tall poplars in mist, distant then nearer
  const trees = [[180, 170, "#a9b8cc", 165], [215, 130, "#8aa2b8", 185], [250, 150, "#7f98b0", 190], [390, 160, "#9fb2c4", 175], [350, 70, "#5f7f9a", 210], [420, 200, "#a9b8cc", 160]];
  for (const t of trees) {
    brush.fill(t[2], t[3]);
    brush.fillBleed(0.25);
    brush.beginShape(0.8);
    brush.vertex(t[0], t[1]); brush.vertex(t[0] + 18, t[1] + 80); brush.vertex(t[0] + 16, 380); brush.vertex(t[0] - 16, 380); brush.vertex(t[0] - 18, t[1] + 80);
    brush.endShape(true);
  }
  // mist band
  brush.fill("#cdd3ea", 150);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(L, 300); brush.vertex(R, 290); brush.vertex(R, 360); brush.vertex(L, 370);
  brush.endShape(true);
  // meadow, mint to cool green
  brush.fill("#9cc8b4", 190);
  brush.fillBleed(0.28);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(L, 350); brush.vertex(R, 345); brush.vertex(R, 580); brush.vertex(L, 580);
  brush.endShape(true);
  brush.fill("#5f9a8a", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.5);
  brush.vertex(L, 450); brush.vertex(300, 430); brush.vertex(R, 460); brush.vertex(R, 580); brush.vertex(L, 580);
  brush.endShape(true);
  // grass tufts and dew flowers
  for (let i = 0; i < 9; i++) {
    const x = L + 20 + i * 32;
    const y = 500 + (i % 3) * 20;
    brush.fill("#3f7a78", 200);
    brush.fillBleed(0.2);
    brush.beginShape(0.5);
    brush.vertex(x - 9, y + 30); brush.vertex(x, y - 25); brush.vertex(x + 9, y + 30);
    brush.endShape(true);
  }
  brush.fill("#b7a6e0", 210);
  brush.fillBleed(0.2);
  const fl = [[190, 480], [260, 500], [330, 470], [410, 495], [220, 540], [370, 535]];
  for (const f of fl) brush.circle(f[0], f[1], 6, 0.5);
}
