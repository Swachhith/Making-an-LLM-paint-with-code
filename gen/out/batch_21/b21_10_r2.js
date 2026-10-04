async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#edf1f6");
  brush.noStroke();

  // one broad graded sky, darker at the zenith
  brush.fill("#8fb2d6", 185);
  brush.fillBleed(0.3);
  brush.fillTexture(0.35, 0.55);
  brush.beginShape(0.2);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 380); brush.vertex(-20, 400);
  brush.endShape(true);
  brush.fill("#5d8cc2", 195);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 120); brush.vertex(-20, 150);
  brush.endShape(true);

  // three peaks at different depths above the cloud line (low, ~440)
  // far left, faint lilac
  brush.fill("#a7a6c6", 190);
  brush.fillBleed(0.25);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.05);
  brush.vertex(20, 440); brush.vertex(110, 330); brush.vertex(140, 312); brush.vertex(200, 380); brush.vertex(250, 440);
  brush.endShape(true);
  brush.fill("#8a88b0", 185);
  brush.beginShape(0.05);
  brush.vertex(140, 312); brush.vertex(200, 380); brush.vertex(250, 440); brush.vertex(150, 440);
  brush.endShape(true);
  // main peak, centre-right, crisp
  brush.fill("#7b8cae", 220);
  brush.fillBleed(0.2);
  brush.beginShape(0.05);
  brush.vertex(200, 440); brush.vertex(330, 300); brush.vertex(390, 210); brush.vertex(410, 196); brush.vertex(440, 230); brush.vertex(520, 330); brush.vertex(600, 400); brush.vertex(620, 440);
  brush.endShape(true);
  brush.fill("#465a82", 220);
  brush.fillBleed(0.18);
  brush.beginShape(0.05);
  brush.vertex(410, 196); brush.vertex(440, 230); brush.vertex(520, 330); brush.vertex(600, 400); brush.vertex(620, 440); brush.vertex(470, 440); brush.vertex(420, 300);
  brush.endShape(true);
  brush.fill("#384a70", 190);
  brush.beginShape(0.1);
  brush.vertex(412, 200); brush.vertex(426, 214); brush.vertex(432, 330); brush.vertex(470, 440); brush.vertex(440, 440); brush.vertex(418, 320);
  brush.endShape(true);
  // snowfield on the lit face is paper; slate gullies cut into it
  let gullies = [[398, 214, 340, 380], [376, 250, 290, 410], [350, 290, 250, 430]];
  for (let g of gullies) {
    brush.fill("#6c7da2", 190);
    brush.fillBleed(0.18);
    brush.fillTexture(0.45, 0.4);
    brush.beginShape(0.3);
    brush.vertex(g[0], g[1]); brush.vertex(g[0] + 10, g[1] + 4); brush.vertex(g[2] + 14, g[3]); brush.vertex(g[2], g[3]);
    brush.endShape(true);
  }
  // near dark spur on the far right
  brush.fill("#3e4c6c", 215);
  brush.fillBleed(0.2);
  brush.beginShape(0.1);
  brush.vertex(520, 440); brush.vertex(580, 360); brush.vertex(620, 340); brush.vertex(620, 440);
  brush.endShape(true);

  // cloud sea: paper tops, cool shadow under each bank, flowing between the peaks
  let banks = [[440, 30, "#b7c4da"], [480, 36, "#a2b2cc"], [530, 40, "#8c9ebf"], [580, 44, "#7688b0"]];
  for (let b of banks) {
    let [y, h, c] = b;
    brush.fill(c, 195);
    brush.fillBleed(0.3);
    brush.fillTexture(0.35, 0.55);
    brush.beginShape(0.9);
    brush.vertex(-20, y + h * 0.4); brush.vertex(100, y + h * 0.2); brush.vertex(220, y + h * 0.5); brush.vertex(340, y + h * 0.25); brush.vertex(470, y + h * 0.5); brush.vertex(620, y + h * 0.3);
    brush.vertex(620, y + h); brush.vertex(300, y + h * 1.1); brush.vertex(-20, y + h);
    brush.endShape(true);
  }
  // wisps of cloud curling up round the base of the main peak
  brush.fill("#aebcd4", 175);
  brush.fillBleed(0.3);
  brush.beginShape(0.9);
  brush.vertex(240, 440); brush.vertex(300, 400); brush.vertex(380, 410); brush.vertex(450, 390); brush.vertex(520, 420); brush.vertex(560, 450); brush.vertex(240, 460);
  brush.endShape(true);
}
