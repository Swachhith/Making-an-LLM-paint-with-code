async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf6ec");
  brush.noStroke();
  // faint lilac shadow behind the flower so white petals read
  brush.fill("#d9d6e6", 200);
  brush.fillBleed(0.5, "out");
  brush.fillTexture(0.5, 0.3);
  brush.circle(390, 250, 190, true);
  // stem
  brush.fill("#6f9a5c", 220);
  brush.fillBleed(0.08, "out");
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.5);
  brush.vertex(120, 600); brush.vertex(180, 470); brush.vertex(240, 370);
  brush.vertex(256, 378); brush.vertex(196, 478); brush.vertex(138, 600);
  brush.endShape(true);
  brush.fill("#86ad6c", 210);
  brush.fillBleed(0.2, "out");
  brush.beginShape(0.7);
  brush.vertex(180, 490); brush.vertex(100, 420); brush.vertex(40, 410); brush.vertex(110, 470); brush.vertex(175, 505);
  brush.endShape(true);
  // green calyx/base of trumpet
  brush.fill("#9fbd78", 220);
  brush.fillBleed(0.2, "out");
  brush.beginShape(0.8);
  brush.vertex(240, 372); brush.vertex(300, 320); brush.vertex(330, 300); brush.vertex(300, 345); brush.vertex(252, 382);
  brush.endShape(true);
  // back petal, in shadow
  brush.fill("#c9cbb8", 210);
  brush.fillBleed(0.3, "out");
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(290, 330); brush.vertex(370, 220); brush.vertex(450, 130); brush.vertex(520, 110);
  brush.vertex(480, 170); brush.vertex(400, 250); brush.vertex(320, 330);
  brush.endShape(true);
  // upper front petal, curling back at the tip
  brush.fill("#e3e2d2", 220);
  brush.fillBleed(0.25, "out");
  brush.beginShape(0.85);
  brush.vertex(285, 340); brush.vertex(350, 260); brush.vertex(430, 190); brush.vertex(520, 160);
  brush.vertex(565, 180); brush.vertex(530, 205); brush.vertex(450, 230); brush.vertex(330, 330);
  brush.endShape(true);
  // lower front petal, curling down
  brush.fill("#e8dccb", 220);
  brush.beginShape(0.85);
  brush.vertex(290, 350); brush.vertex(380, 310); brush.vertex(480, 300); brush.vertex(550, 330);
  brush.vertex(570, 380); brush.vertex(530, 360); brush.vertex(450, 340); brush.vertex(330, 360);
  brush.endShape(true);
  // grey-violet shadow where petals meet
  brush.fill("#a9a4bd", 190);
  brush.fillBleed(0.3, "out");
  brush.beginShape(0.8);
  brush.vertex(300, 335); brush.vertex(380, 285); brush.vertex(440, 275); brush.vertex(390, 305); brush.vertex(310, 348);
  brush.endShape(true);
  // green throat
  brush.fill("#a8bf6b", 210);
  brush.fillBleed(0.2, "out");
  brush.beginShape(0.8);
  brush.vertex(290, 342); brush.vertex(340, 300); brush.vertex(365, 290); brush.vertex(330, 325);
  brush.endShape(true);
  // stamens
  let tips = [[480, 250], [500, 262], [470, 272], [505, 240], [490, 280], [520, 255]];
  for (let t of tips) {
    brush.fill("#b3a95a", 220);
    brush.fillBleed(0.02, "out");
    brush.beginShape(0.3);
    brush.vertex(345, 305); brush.vertex(t[0], t[1]); brush.vertex(t[0] + 1, t[1] + 4); brush.vertex(347, 310);
    brush.endShape(true);
    brush.fill("#a8431d", 235);
    brush.circle(t[0], t[1], 7, true);
  }
}
