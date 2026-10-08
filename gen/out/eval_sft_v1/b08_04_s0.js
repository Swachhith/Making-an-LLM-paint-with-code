async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf8e8");
  brush.noStroke();

  // sky: loose blooms, drips, and a splash of orange at the top
  brush.fill("#8fb0e0", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(0, 0); brush.vertex(300, 20); brush.vertex(600, 40); brush.vertex(600, 250); brush.vertex(0, 260);
  brush.endShape(true);
  brush.fill("#f0a83a", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(0, 0); brush.vertex(150, 10); brush.vertex(600, 30); brush.vertex(600, 200); brush.vertex(0, 180);
  brush.endShape(true);
  brush.fill("#5a7fb8", 160);
  brush.fillBleed(0.3);
  brush.circle(50, 120, 100, 0.6);
  brush.fill("#b08a4a", 170);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(520, 260); brush.vertex(420, 220); brush.vertex(340, 250); brush.vertex(450, 300); brush.vertex(540, 330); brush.vertex(540, 260);
  brush.endShape(true);
  brush.fill("#c03050", 190);
  brush.fillBleed(0.3);
  brush.circle(420, 300, 55, 0.5);
  brush.fill("#e02060", 190);
  brush.fillBleed(0.3);
  brush.circle(455, 335, 30, 0.5);
  // wet sand: teal-grey, uneven, with drips
  brush.fill("#4a6a66", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(0, 430); brush.vertex(600, 420); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  brush.fill("#2a4a44", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(20, 450); brush.vertex(120, 460); brush.vertex(600, 440); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  // footprints
  brush.fill("#1e3a38", 220);
  brush.fillBleed(0.2);
  for (const p of [[120, 500], [220, 515], [330, 530], [440, 545], [520, 560]]) {
    brush.circle(p[0], p[1], 10, 0.5);
  }
  // figure: loose, two passes, paper left for white shirt
  let x = 250, y = 470;
  brush.fill("#3a3080", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(x - 10, y - 20); brush.vertex(x - 12, y - 20); brush.vertex(x - 8, y - 12); brush.vertex(x - 10, y - 10);
  brush.vertex(x + 8, y - 10); brush.vertex(x + 10, y - 12); brush.vertex(x + 12, y - 20); brush.vertex(x + 10, y - 20);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(x - 10, y + 14); brush.vertex(x + 10, y + 14); brush.vertex(x + 10, y + 46); brush.vertex(x - 10, y + 46);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(x - 14, y + 46); brush.vertex(x - 12, y + 46); brush.vertex(x - 12, y + 78); brush.vertex(x - 14, y + 78);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(x + 14, y + 46); brush.vertex(x + 12, y + 46); brush.vertex(x + 12, y + 78); brush.vertex(x + 14, y + 78);
  brush.endShape(true);
  brush.fill("#e8b050", 200);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(x - 10, y - 20); brush.vertex(x - 12, y - 20); brush.vertex(x - 10, y - 10); brush.vertex(x + 10, y - 10); brush.vertex(x + 12, y - 20); brush.vertex(x + 10, y - 20);
  brush.endShape(true);
  brush.fill("#c03060", 200);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(x - 10, y + 14); brush.vertex(x + 10, y + 14); brush.vertex(x + 10, y + 46); brush.vertex(x - 10, y + 46);
  brush.endShape(true);
  // splash of colour behind
  brush.fill("#f06a30", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(240, 440); brush.vertex(270, 420); brush.vertex(300, 435); brush.vertex(270, 455); brush.vertex(240, 440);
  brush.endShape(true);
  // drips
  brush.fill("#2a1a60", 170);
  brush.fillBleed(0.2);
  brush.beginShape(0.7);
  brush.vertex(250, 470); brush.vertex(250, 485); brush.vertex(256, 485); brush.vertex(256, 470);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(250, 500); brush.vertex(250, 515); brush.vertex(256, 515); brush.vertex(256, 500);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(250, 530); brush.vertex(250, 545); brush.vertex(256, 545); brush.vertex(256, 530);
  brush.endShape(true);
  brush.fill("#c03060", 170);
  brush.fillBleed(0.2);
  brush.beginShape(0.7);
  brush.vertex(250, 490); brush.vertex(250, 505); brush.vertex(256, 505); brush.vertex(256, 490);
  brush.endShape(true);
  brush.fill("#f0a83a", 170);
  brush.fillBleed(0.2);
  brush.beginShape(0.7);
  brush.vertex(250, 510); brush.vertex(250, 525); brush.vertex(256, 525); brush.vertex(256, 510);
  brush.endShape(true);
}
