async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6efe1");
  randomSeed(1001);
  brush.noStroke();

  // splashy sky: lilac and violet drips
  brush.fill("#b89fd8", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, -20); brush.vertex(300, -20); brush.vertex(620, 100); brush.vertex(620, 300); brush.vertex(300, 320); brush.vertex(-20, 300);
  brush.endShape(true);
  brush.fill("#9a7fc8", 170);
  brush.beginShape(0.8);
  brush.vertex(300, -20); brush.vertex(620, -20); brush.vertex(620, 150); brush.vertex(400, 160); brush.vertex(300, 150);
  brush.endShape(true);

  // stem, arcing from top left to bottom right
  let x = [-20, 120, 250, 380, 500, 620], y = [-20, 120, 250, 380, 500, 620];
  let sx = -20, sy = -20, ex = 620, ey = 620;
  brush.fill("#4a5a3a", 220);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.3);
  brush.vertex(sx, sy);
  for (let i = 0; i < x.length; i++) brush.vertex(x[i], y[i]);
  brush.vertex(ex, ey);
  brush.vertex(ex - 12, ey);
  brush.vertex(sx + 12, sy);
  brush.endShape(true);
  // drip of green down the stem
  brush.fill("#2f4a2a", 200);
  brush.fillBleed(0.2);
  brush.beginShape(0.6);
  brush.vertex(350, 300); brush.vertex(360, 300); brush.vertex(360, 620); brush.vertex(350, 620);
  brush.endShape(true);

  // cherry blossoms, loose and splashed
  let blooms = [
    [[30, 150], [90, 170], [130, 140], [90, 120], [30, 140]],
    [[220, 260], [260, 240], [300, 270], [260, 290], [220, 270]],
    [[470, 230], [520, 250], [560, 220], [520, 200], [470, 220]],
    [[500, 540], [540, 520], [580, 540], [540, 560], [500, 560]],
    [[180, 400], [220, 420], [260, 400], [220, 380], [180, 400]],
    [[420, 340], [460, 360], [500, 340], [460, 320], [420, 340]],
    [[110, 320], [150, 340], [190, 320], [150, 300], [110, 320]],
    [[480, 100], [520, 120], [560, 100], [520, 80], [480, 100]],
    [[200, 500], [240, 520], [280, 500], [240, 480], [200, 500]],
    [[50, 520], [90, 540], [130, 520], [90, 500], [50, 520]],
    [[320, 190], [360, 210], [400, 190], [360, 170], [320, 190]],
    [[380, 420], [420, 440], [460, 420], [420, 400], [380, 420]],
    [[250, 370], [290, 390], [330, 370], [290, 350], [250, 370]],
    [[540, 300], [580, 320], [620, 300], [580, 280], [540, 300]],
    [[150, 250], [190, 270], [230, 250], [190, 230], [150, 250]],
  ];
  for (let b of blooms) {
    let cx = b[0], cy = b[1];
    brush.fill("#ffb3c8", 200);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.circle(cx, cy, 34, 0.7);
    for (let k = 0; k < 5; k++) {
      let a = k * 72 + random(-10, 10), r = random(18, 30);
      brush.fill("#ff9bb0", 200);
      brush.fillBleed(0.3);
      brush.circle(cx + cos(a) * r, cy + sin(a) * r, 10, 0.6);
    }
    brush.fill("#ff6a8a", 170);
    brush.fillBleed(0.2);
    brush.circle(cx, cy, 14, 0.6);
  }
  // splatter drips and blooms of colour
  for (let i = 0; i < 40; i++) {
    let x = random(0, 600), y = random(0, 600);
    brush.fill(random(["#ffb3c8", "#ff9bb0", "#ff6a8a", "#c8204a"]), random(170, 230));
    brush.fillBleed(0.3);
    brush.circle(x, y, random(6, 16), 0.8);
  }
}
