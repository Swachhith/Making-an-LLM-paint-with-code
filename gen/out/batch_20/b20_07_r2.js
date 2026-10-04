async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6f1ee");
  brush.noStroke();

  // big wet blooms
  brush.fill("#f0a8bc", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.6);
  brush.circle(170, 190, 170, 1.0);
  brush.fill("#b8cfe8", 170);
  brush.circle(470, 430, 190, 1.0);
  brush.fill("#f5d3a8", 150);
  brush.circle(500, 130, 110, 1.0);
  // drips running down from the pink bloom
  brush.fill("#f0a8bc", 190);
  brush.fillBleed(0.3);
  const dr = [[110, 330, 150], [175, 350, 90], [240, 330, 130], [300, 300, 60]];
  for (const d of dr) {
    brush.beginShape(0.4);
    brush.vertex(d[0] - 9, d[1]); brush.vertex(d[0] + 9, d[1]); brush.vertex(d[0] + 5, d[1] + d[2]);
    brush.vertex(d[0], d[1] + d[2] + 12); brush.vertex(d[0] - 5, d[1] + d[2]);
    brush.endShape(true);
    brush.circle(d[0], d[1] + d[2] + 8, 8, 0.3);
  }

  // branch arcing from bottom-right to top-left, three passes
  for (let p = 0; p < 3; p++) {
    brush.fill("#4a2e2a", 220 + p * 8);
    brush.fillBleed(0.22);
    brush.fillTexture(0.45, 0.5);
    const t = 12 - p * 3;
    brush.beginShape(0.8);
    brush.vertex(620, 540); brush.vertex(470, 390); brush.vertex(300, 270); brush.vertex(130, 175); brush.vertex(20, 140);
    brush.vertex(20, 140 + t * 1.5); brush.vertex(125, 175 + t * 2); brush.vertex(290, 270 + t * 2); brush.vertex(460, 392 + t * 2.4); brush.vertex(620, 540 + t * 3);
    brush.endShape(true);
  }
  brush.fill("#4a2e2a", 225);
  brush.beginShape(0.7);
  brush.vertex(330, 285); brush.vertex(360, 200); brush.vertex(385, 140); brush.vertex(400, 146); brush.vertex(382, 205); brush.vertex(352, 292);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(470, 395); brush.vertex(520, 330); brush.vertex(560, 300); brush.vertex(568, 314); brush.vertex(530, 345); brush.vertex(488, 404);
  brush.endShape(true);

  // blossoms — larger, loose five-petal
  const fl = [[70,150,22],[150,175,26],[230,210,20],[280,250,24],[385,140,22],[365,210,26],[430,330,24],[500,380,20],[560,450,22],[330,285,18],[190,150,16],[445,290,18],[555,300,20],[120,210,16]];
  for (const f of fl) {
    for (let k = 0; k < 5; k++) {
      const a = k * 72 + f[0] * 3;
      brush.fill("#e8809f", 215);
      brush.fillBleed(0.3);
      brush.fillTexture(0.5, 0.5);
      brush.circle(f[0] + cos(a) * f[2] * 0.9, f[1] + sin(a) * f[2] * 0.9, f[2] * 0.85, 0.6);
    }
    brush.fill("#d86890", 180);
    brush.circle(f[0], f[1], f[2] * 0.5, 0.5);
    brush.fill("#8a1f48", 230);
    brush.fillBleed(0.15);
    brush.circle(f[0], f[1], 3, 0.3);
  }
  brush.fill("#d45c80", 210);
  const sp = [[100,270],[330,110],[520,250],[260,370],[420,500],[50,80],[580,380],[210,430],[360,420]];
  for (const s of sp) brush.circle(s[0], s[1], 5, 0.9);
}
