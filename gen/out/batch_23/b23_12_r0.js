async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7f2ee");
  brush.noStroke();

  // deep shadowed background, dark green-violet behind the flower
  brush.fill("#2a2240", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.8);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  brush.fill("#1c3a2a", 180);
  brush.circle(120, 480, 160, 0.8);

  // stems
  brush.fill("#4f8a3a", 220);
  brush.fillBleed(0.15);
  brush.beginShape(0.6);
  brush.vertex(262, 300); brush.vertex(280, 300); brush.vertex(300, 600); brush.vertex(280, 600);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(440, 330); brush.vertex(456, 330); brush.vertex(400, 600); brush.vertex(382, 600);
  brush.endShape(true);

  // open cosmos: eight broad notched petals
  const cx = 250, cy = 250;
  for (let i = 0; i < 8; i++) {
    const t = i * 45 + 10;
    const L = 150;
    const px = (r, a) => cx + r * cos(t + a), py = (r, a) => cy + r * sin(t + a);
    brush.fill("#f06aa8", 230);
    brush.fillBleed(0.25);
    brush.beginShape(0.6);
    brush.vertex(px(20, -8), py(20, -8));
    brush.vertex(px(L * 0.7, -16), py(L * 0.7, -16));
    brush.vertex(px(L, -12), py(L, -12));
    brush.vertex(px(L * 0.9, 0), py(L * 0.9, 0));
    brush.vertex(px(L, 12), py(L, 12));
    brush.vertex(px(L * 0.7, 16), py(L * 0.7, 16));
    brush.vertex(px(20, 8), py(20, 8));
    brush.endShape(true);
    brush.fill("#c2266e", 200);
    brush.beginShape(0.6);
    brush.vertex(px(20, -6), py(20, -6));
    brush.vertex(px(L * 0.45, -9), py(L * 0.45, -9));
    brush.vertex(px(L * 0.5, 0), py(L * 0.5, 0));
    brush.vertex(px(L * 0.45, 9), py(L * 0.45, 9));
    brush.vertex(px(20, 6), py(20, 6));
    brush.endShape(true);
  }
  // deep centre
  brush.fill("#6a1a0a", 240);
  brush.circle(cx, cy, 36, 0.3);
  brush.fill("#f2b400", 240);
  brush.circle(cx, cy, 24, 0.5);
  brush.fill("#8a4a00", 230);
  brush.circle(cx + 3, cy + 3, 10, 0.4);

  // closed bud
  brush.fill("#d23a82", 230);
  brush.fillBleed(0.2);
  brush.beginShape(0.8);
  brush.vertex(448, 335); brush.vertex(425, 290); brush.vertex(445, 245); brush.vertex(470, 290);
  brush.endShape(true);
  brush.fill("#7a1244", 210);
  brush.beginShape(0.8);
  brush.vertex(448, 335); brush.vertex(440, 290); brush.vertex(447, 255); brush.vertex(458, 300);
  brush.endShape(true);
  brush.fill("#3f7a2e", 230);
  brush.beginShape(0.6);
  brush.vertex(430, 320); brush.vertex(448, 345); brush.vertex(466, 320); brush.vertex(448, 332);
  brush.endShape(true);
}
