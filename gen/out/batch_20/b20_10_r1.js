async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe8e2");
  brush.noStroke();

  brush.fill("#5a4a9a", 215);
  brush.fillBleed(0.3);
  brush.fillTexture(0.6, 0.55);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 250); brush.vertex(-20, 300);
  brush.endShape(true);
  brush.fill("#e07a8a", 195);
  brush.circle(100, 340, 190, 1.0);
  brush.fill("#f2a860", 190);
  brush.circle(530, 330, 150, 1.0);
  brush.fill("#2f2a68", 200);
  brush.circle(460, 30, 170, 1.0);
  brush.circle(80, 20, 120, 1.0);

  // low-angle house: looming, verticals converge upward
  for (let p = 0; p < 2; p++) {
    brush.fill("#3a2a3e", 230);
    brush.fillBleed(0.22);
    brush.fillTexture(0.45, 0.5);
    brush.beginShape(0.1);
    brush.vertex(90, 610); brush.vertex(150, 270); brush.vertex(300, 150); brush.vertex(450, 270); brush.vertex(510, 610);
    brush.endShape(true);
  }
  brush.fill("#1e1628", 220);
  brush.beginShape(0.2);
  brush.vertex(300, 270); brush.vertex(450, 272); brush.vertex(510, 610); brush.vertex(320, 610);
  brush.endShape(true);
  for (let p = 0; p < 2; p++) {
    brush.fill("#140e1c", 240);
    brush.beginShape(0.1);
    brush.vertex(120, 290); brush.vertex(300, 130); brush.vertex(480, 290); brush.vertex(460, 300); brush.vertex(300, 162); brush.vertex(140, 300);
    brush.endShape(true);
    brush.beginShape(0.1);
    brush.vertex(380, 200); brush.vertex(384, 110); brush.vertex(414, 110); brush.vertex(414, 225);
    brush.endShape(true);
  }

  // one lit window, glow bleeding out
  brush.fill("#f39a3a", 170);
  brush.fillBleed(0.35);
  brush.circle(250, 400, 70, 0.7);
  brush.fill("#fbd35a", 250);
  brush.fillBleed(0.3);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.1);
  brush.vertex(218, 352); brush.vertex(282, 348); brush.vertex(284, 446); brush.vertex(220, 450);
  brush.endShape(true);
  brush.fill("#fbd35a", 230);
  brush.beginShape(0.1);
  brush.vertex(224, 358); brush.vertex(278, 355); brush.vertex(280, 440); brush.vertex(226, 444);
  brush.endShape(true);
  brush.fill("#2a1e30", 220);
  brush.beginShape(0.1);
  brush.vertex(246, 350); brush.vertex(256, 350); brush.vertex(258, 448); brush.vertex(248, 448);
  brush.endShape(true);
  brush.fill("#e87a3a", 160);
  brush.beginShape(0.6);
  brush.vertex(215, 452); brush.vertex(290, 448); brush.vertex(310, 560); brush.vertex(200, 560);
  brush.endShape(true);

  brush.fill("#0f0a16", 225);
  brush.beginShape(0.1);
  brush.vertex(355, 360); brush.vertex(405, 356); brush.vertex(410, 448); brush.vertex(358, 450);
  brush.endShape(true);

  brush.fill("#1f2a22", 235);
  brush.fillBleed(0.28);
  brush.beginShape(0.6);
  brush.vertex(-20, 555); brush.vertex(150, 530); brush.vertex(350, 555); brush.vertex(620, 520); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  brush.fill("#5a4a9a", 200);
  for (const d of [[40, 300, 110], [560, 260, 80], [520, 280, 130]]) {
    brush.beginShape(0.4);
    brush.vertex(d[0] - 9, d[1]); brush.vertex(d[0] + 9, d[1]); brush.vertex(d[0] + 4, d[1] + d[2]); brush.vertex(d[0], d[1] + d[2] + 10); brush.vertex(d[0] - 4, d[1] + d[2]);
    brush.endShape(true);
  }
  brush.fill("#f7e08a", 230);
  brush.circle(200, 50, 3, 0.3);
  brush.circle(540, 120, 3, 0.3);
  brush.circle(90, 150, 3, 0.3);
}
