async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f8f2f2");
  brush.noStroke();

  // splashy bloom washes
  brush.fill("#f2b7c6", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.6);
  brush.circle(180, 200, 150, 0.9);
  brush.fill("#c7d9ef", 150);
  brush.circle(460, 420, 170, 0.9);
  // drips
  brush.fill("#f2b7c6", 160);
  brush.fillBleed(0.3);
  brush.beginShape(0.4);
  brush.vertex(140, 300); brush.vertex(160, 300); brush.vertex(156, 420); brush.vertex(150, 430); brush.vertex(144, 420);
  brush.endShape(true);
  brush.beginShape(0.4);
  brush.vertex(230, 310); brush.vertex(246, 310); brush.vertex(242, 380); brush.vertex(236, 388); brush.vertex(232, 380);
  brush.endShape(true);

  // arcing branch from right edge sweeping to upper left
  brush.fill("#5a3a34", 225);
  brush.fillBleed(0.22);
  brush.fillTexture(0.45, 0.5);
  brush.beginShape(0.8);
  brush.vertex(620, 520); brush.vertex(470, 380); brush.vertex(300, 260); brush.vertex(120, 170); brush.vertex(30, 140);
  brush.vertex(30, 158); brush.vertex(118, 190); brush.vertex(290, 282); brush.vertex(460, 402); brush.vertex(620, 548);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(330, 285); brush.vertex(360, 200); brush.vertex(380, 150); brush.vertex(392, 156); brush.vertex(378, 205); brush.vertex(348, 290);
  brush.endShape(true);

  // blossoms: clusters of soft pink five-petal flowers
  const fl = [[80,150],[140,185],[200,215],[260,245],[375,160],[360,230],[420,330],[480,370],[540,440],[310,280],[180,160],[450,300]];
  for (const f of fl) {
    for (let k = 0; k < 5; k++) {
      const a = k * 72 + f[0];
      brush.fill("#e98aa6", 190);
      brush.fillBleed(0.3);
      brush.fillTexture(0.5, 0.5);
      brush.circle(f[0] + cos(a) * 12, f[1] + sin(a) * 12, 11, 0.6);
    }
    brush.fill("#b8325e", 220);
    brush.fillBleed(0.2);
    brush.circle(f[0], f[1], 4, 0.4);
  }
  // splatter dots
  brush.fill("#d45c80", 200);
  const sp = [[100,260],[330,120],[520,300],[270,360],[420,480],[60,90],[560,380]];
  for (const s of sp) brush.circle(s[0], s[1], 5, 0.8);
}
