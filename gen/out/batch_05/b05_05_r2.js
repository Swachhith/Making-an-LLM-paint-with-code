async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f6f3ec");
  brush.noStroke();
  let cx = 310, cy = 230;
  // bold ground as overlapping pools around the rim, leaving a paper window for the flower
  let pools = [
    [40, 40, 120, "#1f35a8"], [200, 10, 110, "#2a45b8"], [420, 10, 120, "#3226a0"], [575, 90, 120, "#1f35a8"],
    [20, 220, 110, "#2458c0"], [585, 260, 105, "#5a1fa0"], [40, 420, 130, "#c4127a"], [560, 440, 130, "#d0147f"],
    [300, 560, 150, "#b50f70"]
  ];
  for (let p of pools) {
    brush.fill(p[3], 225);
    brush.fillBleed(0.35);
    brush.fillTexture(0.6, 0.4);
    brush.circle(p[0], p[1], p[2], true);
  }
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
  brush.fill("#8fd23a", 205);
  brush.fillBleed(0.1);
  brush.beginShape(0.75);
  brush.vertex(290, 565); brush.vertex(190, 510); brush.vertex(80, 495); brush.vertex(200, 520);
  brush.endShape(true);
  brush.beginShape(0.75);
  brush.vertex(320, 570); brush.vertex(430, 500); brush.vertex(545, 460); brush.vertex(440, 515);
  brush.endShape(true);
  // arching stem up to the flower, with a second bud
  brush.fill("#2e4a14", 235);
  brush.fillBleed(0.05);
  brush.beginShape(0.6);
  brush.vertex(296, 560); brush.vertex(306, 560); brush.vertex(345, 420);
  brush.vertex(330, 300); brush.vertex(320, 300); brush.vertex(333, 420);
  brush.endShape(true);
  brush.fill("#ffb3dc", 215);
  brush.fillBleed(0.1);
  brush.circle(360, 400, 15, true);
  // sepals: violet shadow over the whole shape, a paper highlight left along the centre
  let sep = [[-90, 160], [150, 150], [30, 150]];
  for (let s of sep) {
    brush.fill("#b5aae0", 215);
    brush.fillBleed(0.12);
    brush.fillTexture(0.3, 0.7);
    brush.beginShape(0.8);
    brush.vertex(cx, cy);
    brush.vertex(cx + s[1] * 0.55 * cos(s[0] - 18), cy + s[1] * 0.55 * sin(s[0] - 18));
    brush.vertex(cx + s[1] * cos(s[0]), cy + s[1] * sin(s[0]));
    brush.vertex(cx + s[1] * 0.55 * cos(s[0] + 18), cy + s[1] * 0.55 * sin(s[0] + 18));
    brush.endShape(true);
  }
  // broad side petals, lavender-grey shaded, over the sepals
  for (let side of [-1, 1]) {
    brush.fill("#cbc3ea", 220);
    brush.fillBleed(0.15);
    brush.fillTexture(0.3, 0.7);
    brush.beginShape(0.9);
    brush.vertex(cx, cy);
    brush.vertex(cx + side * 60, cy - 95);
    brush.vertex(cx + side * 150, cy - 80);
    brush.vertex(cx + side * 170, cy + 10);
    brush.vertex(cx + side * 90, cy + 45);
    brush.endShape(true);
    brush.fill("#9d8fd4", 190);
    brush.fillBleed(0.15);
    brush.beginShape(0.9);
    brush.vertex(cx, cy);
    brush.vertex(cx + side * 60, cy - 10);
    brush.vertex(cx + side * 150, cy + 5);
    brush.vertex(cx + side * 90, cy + 42);
    brush.endShape(true);
  }
  // lip: magenta with a yellow throat
  brush.fill("#d4147a", 245);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.6);
  brush.beginShape(0.8);
  brush.vertex(cx - 30, cy + 10); brush.vertex(cx + 30, cy + 10); brush.vertex(cx + 36, cy + 50);
  brush.vertex(cx, cy + 86); brush.vertex(cx - 36, cy + 50);
  brush.endShape(true);
  brush.fill("#ffcd00", 245);
  brush.fillBleed(0.1);
  brush.circle(cx, cy + 14, 14, true);
  brush.fill("#e0480f", 235);
  brush.circle(cx, cy + 5, 6, true);
  brush.fill("#8a0a4f", 230);
  brush.circle(cx - 14, cy + 40, 4, true);
  brush.circle(cx + 14, cy + 40, 4, true);
}
