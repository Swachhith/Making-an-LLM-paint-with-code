async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4f0e8");
  brush.noStroke();
  let cx = 320, cy = 230;
  // bold ground laid in blocks that stop short of the flower, leaving it as paper
  let ground = [
    [[0, 0], [600, 0], [600, 70], [420, 80], [320, 60], [200, 85], [0, 100]],
    [[0, 90], [150, 100], [140, 230], [120, 330], [0, 360]],
    [[600, 60], [470, 90], [510, 220], [490, 320], [600, 350]]
  ];
  let gcol = ["#2438a8", "#1f58b0", "#3a2aa0"];
  for (let g = 0; g < ground.length; g++) {
    brush.fill(gcol[g], 225);
    brush.fillBleed(0.3);
    brush.fillTexture(0.6, 0.4);
    brush.beginShape(0.6);
    for (let p of ground[g]) brush.vertex(p[0], p[1]);
    brush.endShape(true);
  }
  brush.fill("#c8157a", 220);
  brush.fillBleed(0.35);
  brush.fillTexture(0.6, 0.4);
  brush.beginShape(0.7);
  brush.vertex(0, 350); brush.vertex(150, 330); brush.vertex(250, 350); brush.vertex(300, 330);
  brush.vertex(400, 350); brush.vertex(500, 320); brush.vertex(600, 340); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  // broad fleshy leaves
  brush.fill("#0f6e32", 240);
  brush.fillBleed(0.15);
  brush.fillTexture(0.4, 0.6);
  brush.beginShape(0.75);
  brush.vertex(300, 560); brush.vertex(200, 500); brush.vertex(60, 480);
  brush.vertex(30, 515); brush.vertex(150, 570); brush.vertex(290, 588);
  brush.endShape(true);
  brush.beginShape(0.75);
  brush.vertex(300, 565); brush.vertex(410, 480); brush.vertex(545, 445);
  brush.vertex(575, 480); brush.vertex(450, 545); brush.vertex(320, 590);
  brush.endShape(true);
  brush.fill("#8fcf3a", 200);
  brush.fillBleed(0.1);
  brush.beginShape(0.75);
  brush.vertex(290, 565); brush.vertex(190, 510); brush.vertex(80, 495); brush.vertex(200, 520);
  brush.endShape(true);
  // arching stem
  brush.fill("#2e4a14", 235);
  brush.fillBleed(0.05);
  brush.beginShape(0.6);
  brush.vertex(296, 560); brush.vertex(306, 560); brush.vertex(330, 400);
  brush.vertex(345, 300); brush.vertex(335, 300); brush.vertex(318, 400);
  brush.endShape(true);
  // sepals: only violet-grey shadow toward the centre, the rest is paper
  let sep = [[-90, 150], [150, 140], [30, 140]];
  for (let s of sep) {
    brush.fill("#c9c2e3", 190);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.6);
    brush.beginShape(0.8);
    brush.vertex(cx, cy);
    brush.vertex(cx + s[1] * 0.45 * cos(s[0] - 14), cy + s[1] * 0.45 * sin(s[0] - 14));
    brush.vertex(cx + s[1] * 0.7 * cos(s[0]), cy + s[1] * 0.7 * sin(s[0]));
    brush.vertex(cx + s[1] * 0.45 * cos(s[0] + 14), cy + s[1] * 0.45 * sin(s[0] + 14));
    brush.endShape(true);
  }
  // broad side petals with a cool shadow along the lower edge
  for (let side of [-1, 1]) {
    brush.fill("#d8d3ec", 190);
    brush.fillBleed(0.2);
    brush.beginShape(0.9);
    brush.vertex(cx, cy);
    brush.vertex(cx + side * 60, cy - 15);
    brush.vertex(cx + side * 140, cy - 5);
    brush.vertex(cx + side * 140, cy + 20);
    brush.vertex(cx + side * 70, cy + 35);
    brush.endShape(true);
  }
  // lip: magenta with a yellow throat
  brush.fill("#d4147a", 240);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.6);
  brush.beginShape(0.8);
  brush.vertex(cx - 28, cy + 10); brush.vertex(cx + 28, cy + 10); brush.vertex(cx + 34, cy + 48);
  brush.vertex(cx, cy + 82); brush.vertex(cx - 34, cy + 48);
  brush.endShape(true);
  brush.fill("#ffcd00", 240);
  brush.fillBleed(0.1);
  brush.circle(cx, cy + 14, 13, true);
  brush.fill("#e85a1a", 230);
  brush.circle(cx, cy + 5, 6, true);
}
