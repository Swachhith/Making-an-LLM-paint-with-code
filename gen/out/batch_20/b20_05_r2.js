async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#eaf1f3");
  brush.noStroke();

  brush.fill("#9cc0d6", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.35, 0.35);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 150); brush.vertex(-20, 190);
  brush.endShape(true);

  brush.fill("#8fa8c0", 180);
  brush.fillBleed(0.28);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 225); brush.vertex(100, 190); brush.vertex(230, 205); brush.vertex(330, 180); brush.vertex(470, 210); brush.vertex(620, 195); brush.vertex(620, 250); brush.vertex(-20, 250);
  brush.endShape(true);
  brush.fill("#5f8288", 200);
  brush.beginShape(0.5);
  brush.vertex(-20, 250); brush.vertex(150, 228); brush.vertex(280, 242); brush.vertex(420, 230); brush.vertex(620, 245); brush.vertex(620, 265); brush.vertex(-20, 265);
  brush.endShape(true);

  // banks, two passes, stronger
  for (let p = 0; p < 2; p++) {
    brush.fill(p === 0 ? "#86aa9c" : "#5f8a82", p === 0 ? 205 : 180);
    brush.fillBleed(0.25);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(0.4);
    brush.vertex(-20, 262); brush.vertex(285, 265); brush.vertex(260, 320); brush.vertex(170, 410); brush.vertex(40, 620); brush.vertex(-20, 620);
    brush.endShape(true);
    brush.beginShape(0.4);
    brush.vertex(315, 265); brush.vertex(620, 262); brush.vertex(620, 620); brush.vertex(560, 620); brush.vertex(430, 430); brush.vertex(335, 320);
    brush.endShape(true);
  }

  // water, reflecting sky, left partly as paper
  brush.fill("#a8cadb", 190);
  brush.fillBleed(0.28);
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.5);
  brush.vertex(285, 265); brush.vertex(315, 265); brush.vertex(335, 320); brush.vertex(430, 430); brush.vertex(560, 620); brush.vertex(40, 620); brush.vertex(170, 410); brush.vertex(260, 320);
  brush.endShape(true);
  // reflections of banks
  brush.fill("#6a9aa8", 160);
  brush.beginShape(0.6);
  brush.vertex(170, 412); brush.vertex(230, 412); brush.vertex(150, 560); brush.vertex(80, 560);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(380, 412); brush.vertex(430, 432); brush.vertex(510, 560); brush.vertex(450, 560);
  brush.endShape(true);
  // ripples (paper left between)
  brush.fill("#eaf1f3", 200);
  brush.beginShape(0.5);
  brush.vertex(200, 480); brush.vertex(380, 478); brush.vertex(382, 494); brush.vertex(198, 496);
  brush.endShape(true);

  // reeds foreground, two clumps, tall
  function reed(x, h, lean, col, op) {
    brush.fill(col, op);
    brush.fillBleed(0.2);
    brush.fillTexture(0.35, 0.4);
    brush.beginShape(0.6);
    brush.vertex(x - 10, 620);
    brush.vertex(x + lean * 0.5 - 6, 620 - h * 0.6);
    brush.vertex(x + lean, 620 - h);
    brush.vertex(x + lean * 0.5 + 9, 620 - h * 0.55);
    brush.vertex(x + 11, 620);
    brush.endShape(true);
  }
  const L = [[10,300,25],[35,250,-20],[60,340,40],[85,220,5],[105,280,55],[130,180,20]];
  for (const r of L) { reed(r[0], r[1], r[2], "#3a6660", 225); }
  for (const r of L) { reed(r[0] + 4, r[1] * 0.7, r[2] * 0.7, "#27504e", 200); }
  const R = [[480,190,-25],[510,260,-40],[540,320,-15],[570,280,10],[595,230,-5]];
  for (const r of R) { reed(r[0], r[1], r[2], "#3a6660", 225); }
  for (const r of R) { reed(r[0] - 4, r[1] * 0.7, r[2] * 0.7, "#27504e", 200); }
  // cattail heads
  brush.fill("#4a3a3a", 230);
  brush.fillBleed(0.15);
  brush.circle(100, 300, 10, 0.3);
  brush.circle(92, 325, 9, 0.3);
  brush.circle(525, 318, 10, 0.3);
  brush.circle(518, 340, 9, 0.3);
  brush.fill("#4a6a70", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  for (let x = 20; x < 600; x += 28) {
    if (x > 250 && x < 350) continue;
    brush.circle(x, 256, 14 + (x % 3) * 3, 0.5);
  }
  brush.fill("#eaf1f3", 220);
  brush.beginShape(0.5);
  brush.vertex(275, 290); brush.vertex(325, 290); brush.vertex(330, 300); brush.vertex(270, 300);
  brush.endShape(true);
}
