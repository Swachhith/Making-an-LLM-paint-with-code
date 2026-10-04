async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#0b0818");
  brush.noStroke();

  // hills rise high on both sides, leaving a tall narrow V of sky
  let hillL = [[-20,620],[-20,120],[40,150],[90,230],[150,330],[210,450],[260,540],[300,560]];
  let hillR = [[300,560],[340,520],[380,430],[430,310],[490,210],[550,150],[620,100],[620,620]];
  // sky polygon = top edge + hill outlines, painted in passes of blue then violet
  let passes = [["#26307a", 210, -20], ["#3c2f8a", 190, 150], ["#7a4aa8", 180, 330], ["#b06ab0", 160, 450]];
  for (let p of passes) {
    brush.fill(p[0], p[1]);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.1);
    brush.vertex(-20, p[2]);
    brush.vertex(620, p[2]);
    for (let i = hillR.length - 2; i >= 0; i--) brush.vertex(hillR[i][0], max(hillR[i][1], p[2]));
    for (let i = hillL.length - 1; i >= 1; i--) brush.vertex(hillL[i][0], max(hillL[i][1], p[2]));
    brush.endShape(true);
  }

  // a vertical column of stars through the V
  for (let i = 0; i < 110; i++) {
    let y = (i * 47.3) % 520;
    let spread = 60 + y * 0.35;
    let x = 300 + (((i * 97.1) % 200) / 100 - 1) * spread;
    brush.fill("#f2ecff", 210 + (i % 3) * 15);
    brush.fillBleed(0.1);
    brush.fillTexture(0.3, 0.3);
    brush.circle(x, y, 0.8 + (i % 5) * 0.55, 0.3);
  }
  for (let s of [[300, 70], [250, 180], [360, 240], [310, 360]]) {
    brush.fill("#c8b8ff", 140);
    brush.fillBleed(0.35);
    brush.fillTexture(0.3, 0.3);
    brush.circle(s[0], s[1], 10, 0.4);
    brush.fill("#ffffff", 245);
    brush.fillBleed(0.1);
    brush.fillTexture(0.2, 0.2);
    brush.circle(s[0], s[1], 3, 0.2);
  }
  // a few stars over the hill shoulders too
  for (let s of [[20, 60], [70, 90], [560, 40], [590, 70], [520, 100]]) {
    brush.fill("#e8e0ff", 230);
    brush.fillBleed(0.1);
    brush.fillTexture(0.3, 0.3);
    brush.circle(s[0], s[1], 1.8, 0.3);
  }
  // violet haze catching the hill rims
  brush.fill("#4a3478", 150);
  brush.fillBleed(0.35);
  brush.fillTexture(0.4, 0.4);
  brush.circle(300, 560, 50, 0.7);
}
