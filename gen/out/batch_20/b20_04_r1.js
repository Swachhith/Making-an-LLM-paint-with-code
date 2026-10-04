async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#2a3b66");
  brush.noStroke();

  // deeper blue at top of the sky
  brush.fill("#121c3a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 180); brush.vertex(-20, 220);
  brush.endShape(true);

  // warm moon high up, a vertical axis starts at top
  brush.fill("#f6d77a", 150);
  brush.fillBleed(0.3);
  brush.circle(300, 70, 50, 0.3);
  brush.fill("#fbe6a0", 240);
  brush.fillBleed(0.15);
  brush.circle(300, 70, 26, 0.15);

  brush.fill("#f5d77a", 230);
  brush.fillBleed(0.15);
  const st = [[60,40],[130,110],[210,30],[400,60],[470,120],[545,40],[90,200],[510,210],[240,150],[370,160],[30,280],[570,300]];
  for (const s of st) brush.circle(s[0], s[1], 3, 0.3);

  // smoke rising as a tall column from chimney to moon
  brush.fill("#6a7aa0", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(320, 400); brush.vertex(300, 320); brush.vertex(330, 240); brush.vertex(300, 160); brush.vertex(330, 150); brush.vertex(355, 240); brush.vertex(330, 320); brush.vertex(345, 400);
  brush.endShape(true);

  // two very tall pines framing a narrow vertical column
  function pine(x, base, h, w, op) {
    brush.fill("#0a1024", op);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.15);
    brush.vertex(x, base - h);
    const tiers = 6;
    for (let t = 1; t <= tiers; t++) {
      const yy = base - h + (h * t) / tiers;
      const ww = (w * t) / tiers;
      brush.vertex(x + ww * 0.55, yy);
      if (t < tiers) brush.vertex(x + ww * 0.3, yy);
    }
    for (let t = tiers; t >= 1; t--) {
      const yy = base - h + (h * t) / tiers;
      const ww = (w * t) / tiers;
      if (t < tiers) brush.vertex(x - ww * 0.3, yy);
      brush.vertex(x - ww * 0.55, yy);
    }
    brush.endShape(true);
  }
  pine(90, 560, 540, 200, 240);
  pine(90, 560, 540, 200, 220);
  pine(515, 560, 560, 210, 240);
  pine(515, 560, 560, 210, 220);
  pine(180, 520, 260, 90, 200);
  pine(430, 520, 280, 100, 200);

  // snow — pale on dark paper
  brush.fill("#e8e2cc", 225);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, 520); brush.vertex(150, 490); brush.vertex(330, 500); brush.vertex(620, 485); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#f4efdc", 235);
  brush.beginShape(0.5);
  brush.vertex(-20, 560); brush.vertex(300, 545); brush.vertex(620, 560); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // cabin
  brush.fill("#0f1630", 240);
  brush.fillBleed(0.18);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.1);
  brush.vertex(245, 440); brush.vertex(355, 440); brush.vertex(355, 515); brush.vertex(245, 515);
  brush.endShape(true);
  brush.fill("#eee8d6", 240);
  brush.beginShape(0.1);
  brush.vertex(228, 447); brush.vertex(300, 385); brush.vertex(372, 447); brush.vertex(355, 454); brush.vertex(245, 454);
  brush.endShape(true);
  brush.fill("#0f1630", 240);
  brush.beginShape(0.1);
  brush.vertex(318, 395); brush.vertex(338, 395); brush.vertex(338, 425); brush.vertex(318, 410);
  brush.endShape(true);
  // windows + door glow
  brush.fill("#f7c843", 250);
  brush.fillBleed(0.3);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.1);
  brush.vertex(258, 465); brush.vertex(284, 465); brush.vertex(284, 492); brush.vertex(258, 492);
  brush.endShape(true);
  brush.beginShape(0.1);
  brush.vertex(316, 462); brush.vertex(340, 462); brush.vertex(340, 515); brush.vertex(316, 515);
  brush.endShape(true);
  brush.fill("#f7c843", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(300, 518); brush.vertex(350, 518); brush.vertex(420, 600); brush.vertex(290, 600);
  brush.endShape(true);
  brush.fill("#f7c843", 140);
  brush.circle(300, 470, 90, 0.5);
}
