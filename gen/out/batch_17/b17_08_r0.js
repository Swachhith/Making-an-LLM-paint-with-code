async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f5f1e8");
  brush.noStroke();
  let ridges = [
    { c: "#a9b7c9", o: 170, y: 170, pts: [[0, 200], [90, 150], [170, 185], [260, 120], [360, 170], [450, 140], [600, 190]] },
    { c: "#6d82a0", o: 200, y: 230, pts: [[0, 250], [120, 190], [230, 240], [330, 200], [440, 250], [530, 210], [600, 240]] },
    { c: "#344a6b", o: 220, y: 280, pts: [[0, 270], [70, 230], [180, 290], [300, 250], [420, 300], [600, 260]] },
    { c: "#101a2c", o: 240, y: 320, pts: [[0, 300], [140, 320], [260, 300], [380, 320], [520, 290], [600, 310]] }
  ];
  // sky
  brush.fill("#e0b36a", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 60);
  brush.vertex(620, 40);
  brush.vertex(620, 260);
  brush.vertex(-20, 260);
  brush.endShape(true);
  // ridges and their mirror images about y=330
  let wl = 330;
  for (let r of ridges) {
    brush.fill(r.c, r.o);
    brush.fillBleed(0.2);
    brush.fillTexture(0.45, 0.45);
    brush.beginShape(0.4);
    brush.vertex(-20, wl);
    for (let p of r.pts) brush.vertex(p[0], p[1]);
    brush.vertex(620, wl);
    brush.endShape(true);
    brush.fill(r.c, r.o * 0.8);
    brush.fillBleed(0.3);
    brush.beginShape(0.4);
    brush.vertex(-20, wl);
    for (let p of r.pts) brush.vertex(p[0], 2 * wl - p[1]);
    brush.vertex(620, wl);
    brush.endShape(true);
  }
  // reflected sky in the lake
  brush.fill("#c99a4e", 120);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 420);
  brush.vertex(620, 410);
  brush.vertex(620, 520);
  brush.vertex(-20, 530);
  brush.endShape(true);
  // dark foreground shore with deep shadow
  brush.fill("#0b0f18", 240);
  brush.fillBleed(0.15);
  brush.beginShape(0.6);
  brush.vertex(-20, 520);
  brush.vertex(160, 540);
  brush.vertex(340, 510);
  brush.vertex(620, 540);
  brush.vertex(620, 620);
  brush.vertex(-20, 620);
  brush.endShape(true);
  // pale water line
  brush.fill("#fff3d6", 200);
  brush.circle(300, 331, 3, 0.1);
}
