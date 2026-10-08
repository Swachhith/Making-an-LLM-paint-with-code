async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf5eb");
  brush.noStroke();
  // warm light: a soft apricot wash behind the flower
  brush.fill("#f4c99e", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(60, 60); brush.vertex(220, 130); brush.vertex(460, 120); brush.vertex(600, 190); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  // stem: a wide soft S-shape from bottom-left to top-right
  brush.fill("#5d7a38", 225);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.6);
  brush.vertex(250, 520); brush.vertex(290, 460); brush.vertex(340, 400); brush.vertex(410, 340); brush.vertex(490, 280); brush.vertex(540, 230); brush.vertex(580, 190); brush.vertex(600, 170); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  brush.fill("#3a5228", 200);
  brush.beginShape(0.6);
  brush.vertex(260, 510); brush.vertex(300, 450); brush.vertex(350, 390); brush.vertex(420, 330); brush.vertex(500, 270); brush.vertex(550, 220); brush.vertex(585, 185); brush.vertex(600, 165); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  // leaves: two broad heart shapes, one on each side of the stem
  brush.fill("#7a9a4a", 215);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.9);
  brush.vertex(280, 470); brush.vertex(330, 470); brush.vertex(390, 430); brush.vertex(400, 380); brush.vertex(350, 370); brush.vertex(300, 410);
  brush.endShape(true);
  brush.beginShape(0.9);
  brush.vertex(420, 290); brush.vertex(480, 290); brush.vertex(520, 330); brush.vertex(530, 380); brush.vertex(480, 390); brush.vertex(430, 350);
  brush.endShape(true);
  // the sunflower head, two passes
  brush.fill("#e8a830", 225);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.circle(490, 310, 150, 0.4);
  brush.fill("#d98a20", 235);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.circle(490, 310, 135, 0.4);
  // seeds: rings of small dark circles
  for (let r = 20; r <= 140; r += 14) {
    for (let i = 0; i < 32; i++) {
      const a = i * 11.25;
      const rr = r * (0.85 + 0.15 * Math.sin(i * 0.3));
      const x = 490 + cos(a + i * 0.3) * rr;
      const y = 310 + sin(a + i * 0.3) * rr;
      brush.fill("#3a2a18", 235);
      brush.fillBleed(0.1);
      brush.fillTexture(0.3, 0.3);
      brush.circle(x, y, 3, 0.2);
    }
  }
  // a few stray petals leaning out
  for (let i = 0; i < 12; i++) {
    const a = i * 30;
    const len = 100 + 20 * i;
    const x = 490 + cos(a) * len;
    const y = 310 + sin(a) * len;
    brush.fill("#e09020", 220);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.9);
    brush.vertex(490, 310); brush.vertex(x + 25, y - 20); brush.vertex(x + 10, y + 12); brush.vertex(490, 310);
    brush.endShape(true);
  }
}
