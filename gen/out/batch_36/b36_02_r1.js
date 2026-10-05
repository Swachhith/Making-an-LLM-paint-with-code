async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e9f1ec");
  brush.noStroke();
  // sky wash teal fading
  brush.fill("#0e6b72", 190); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  [[0,0],[600,0],[600,430],[0,430]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#0a4f5a", 170); brush.fillBleed(0.3); brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.4);
  [[0,0],[600,0],[600,200],[0,260]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // low orange glow
  brush.fill("#f2822a", 200); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  [[0,420],[100,380],[300,400],[500,370],[600,410],[600,480],[0,480]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // ground
  brush.fill("#0b3d45", 230); brush.fillBleed(0.2); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  [[0,470],[200,455],[400,465],[600,450],[600,600],[0,600]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#d9691c", 170); brush.fillBleed(0.3); brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5);
  [[0,520],[300,500],[600,515],[600,600],[0,600]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // trunk, leaning
  brush.fill("#1b1410", 235); brush.fillBleed(0.15); brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  [[285,500],[298,380],[305,290],[318,290],[318,380],[330,500]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // branches
  brush.beginShape(0.5);
  [[300,300],[220,235],[170,200],[190,185],[250,215],[310,265]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.beginShape(0.5);
  [[312,300],[400,240],[450,205],[466,222],[420,262],[325,320]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  // flat acacia canopy layers
  const layers = [[300, 190, 230, 45, "#0a3a40", 210], [250, 160, 150, 38, "#12525a", 200], [370, 150, 170, 40, "#0f4a52", 200], [310, 120, 120, 30, "#e0701f", 150]];
  for (const L of layers) {
    brush.fill(L[4], L[5]); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.9);
    for (let a = 0; a < 360; a += 30) brush.vertex(L[0] + cos(a) * L[2], L[1] + sin(a) * L[3] * (sin(a) < 0 ? 0.8 : 1));
    brush.endShape(true);
  }
  // birds
  brush.fill("#0a2e33", 220);
  brush.circle(120, 90, 4, 0.3); brush.circle(140, 100, 3, 0.3); brush.circle(470, 70, 4, 0.3);
  // deeper canopy shadow, orange underglow, foreground grasses
  brush.fill("#06282d", 200); brush.fillBleed(0.25); brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.9);
  [[170,195],[250,215],[330,220],[430,205],[470,190],[380,235],[260,240]].forEach(p => brush.vertex(p[0], p[1]));
  brush.endShape(true);
  brush.fill("#ff8c1a", 190); brush.fillBleed(0.3);
  brush.circle(440, 395, 45, 0.5);
  brush.fill("#f2822a", 170);
  for (let i = 0; i < 8; i++) {
    const x = 30 + i * 80;
    brush.beginShape(0.5);
    [[x,600],[x+8,545],[x+20,600]].forEach(p => brush.vertex(p[0], p[1]));
    brush.endShape(true);
  }
}
