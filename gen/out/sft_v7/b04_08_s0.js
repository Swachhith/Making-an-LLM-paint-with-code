async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf2e4");
  brush.noStroke();

  // warm light washes: a yellowish ground, a soft lilac sky
  brush.fill("#f2d070", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 300); brush.vertex(-20, 320);
  brush.endShape(true);
  brush.fill("#e9c97a", 160);
  brush.beginShape(0.6);
  brush.vertex(-20, 260); brush.vertex(620, 250); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // stem, leaning right
  brush.fill("#5a7a3a", 215);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.2);
  brush.vertex(240, 420); brush.vertex(260, 420); brush.vertex(285, 580); brush.vertex(270, 620); brush.vertex(255, 620); brush.vertex(230, 580);
  brush.endShape(true);

  // two leaves, broad and soft
  brush.fill("#4a6a30", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(255, 440); brush.vertex(210, 400); brush.vertex(180, 380); brush.vertex(160, 390); brush.vertex(190, 410);
  brush.endShape(true);
  brush.beginShape(0.5);
  brush.vertex(255, 440); brush.vertex(300, 470); brush.vertex(330, 490); brush.vertex(350, 480); brush.vertex(320, 460);
  brush.endShape(true);

  // anemone: ring of broad notched petals, deep blue, one closed bud at the centre
  const cx = 260, cy = 210;
  for (let i = 0; i < 10; i++) {
    const a = i * 36 + 10;
    const len = 120 + (i % 3) * 15;
    const w = 26 + (i % 3) * 4;
    brush.fill("#1f54b8", 220);
    brush.fillBleed(0.2);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.4);
    brush.vertex(cx + cos(a - 15) * len * 0.3, cy + sin(a - 15) * len * 0.3);
    brush.vertex(cx + cos(a - 10) * len, cy + sin(a - 10) * len);
    brush.vertex(cx + cos(a + 10) * len, cy + sin(a + 10) * len);
    brush.vertex(cx + cos(a + 15) * len * 0.3, cy + sin(a + 15) * len * 0.3);
    brush.endShape(true);
  }
  // darker veins
  for (let i = 0; i < 10; i++) {
    const a = i * 36 + 10;
    brush.fill("#0d2470", 200);
    brush.fillBleed(0.1);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.4);
    brush.vertex(cx + cos(a - 10) * 50, cy + sin(a - 10) * 50);
    brush.vertex(cx + cos(a) * 100, cy + sin(a) * 100);
    brush.vertex(cx + cos(a + 10) * 50, cy + sin(a + 10) * 50);
    brush.endShape(true);
  }
  // closed bud
  brush.fill("#0e246a", 230);
  brush.fillBleed(0.15);
  brush.fillTexture(0.4, 0.4);
  brush.circle(cx, cy, 20, true);
  // stamens
  for (let i = 0; i < 12; i++) {
    const a = i * 30;
    brush.fill("#e09a1a", 235);
    brush.fillBleed(0.1);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.3);
    brush.vertex(cx, cy); brush.vertex(cx + cos(a) * 50, cy + sin(a) * 50); brush.vertex(cx + cos(a) * 40, cy + sin(a) * 40);
    brush.endShape(true);
  }
}
