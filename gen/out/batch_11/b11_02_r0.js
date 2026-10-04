async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4f1ea");
  brush.noStroke();

  // two colours: ultramarine blue and a warm ochre; one green
  // soft ochre wash behind, bottom-left
  brush.fill("#d9a441", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.7);
  brush.vertex(-20, 380); brush.vertex(200, 330); brush.vertex(360, 420); brush.vertex(320, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // the arcing stem: a wide soft ribbon from bottom-left curving up to the right
  brush.fill("#557a3a", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(60, 590); brush.vertex(140, 430); brush.vertex(260, 310); brush.vertex(390, 230); brush.vertex(440, 205);
  brush.vertex(448, 222); brush.vertex(400, 250); brush.vertex(278, 330); brush.vertex(162, 445); brush.vertex(82, 596);
  brush.endShape(true);

  // two narrow leaves off the stem
  brush.fill("#4a6b30", 200);
  brush.beginShape(0.7);
  brush.vertex(170, 420); brush.vertex(110, 360); brush.vertex(60, 340); brush.vertex(120, 390); brush.vertex(160, 440);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(300, 300); brush.vertex(330, 380); brush.vertex(360, 420); brush.vertex(345, 360); brush.vertex(315, 295);
  brush.endShape(true);

  // cornflower head: ragged ring of blue florets at stem tip
  const cx = 470, cy = 180;
  brush.fill("#3b5bc4", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.4);
  brush.circle(cx, cy, 70, 0.5);
  for (let i = 0; i < 9; i++) {
    const a = (i / 9) * Math.PI * 2 + 0.3;
    const r1 = 22, r2 = 85;
    brush.fill("#2a3fa8", 200);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.3);
    brush.vertex(cx + r1 * Math.cos(a - 0.25), cy + r1 * Math.sin(a - 0.25));
    brush.vertex(cx + r2 * Math.cos(a - 0.22), cy + r2 * Math.sin(a - 0.22));
    brush.vertex(cx + (r2 - 12) * Math.cos(a - 0.08), cy + (r2 - 12) * Math.sin(a - 0.08));
    brush.vertex(cx + r2 * Math.cos(a + 0.05), cy + r2 * Math.sin(a + 0.05));
    brush.vertex(cx + (r2 - 10) * Math.cos(a + 0.16), cy + (r2 - 10) * Math.sin(a + 0.16));
    brush.vertex(cx + r2 * Math.cos(a + 0.25), cy + r2 * Math.sin(a + 0.25));
    brush.vertex(cx + r1 * Math.cos(a + 0.25), cy + r1 * Math.sin(a + 0.25));
    brush.endShape(true);
  }
  // dark centre
  brush.fill("#1c2670", 220);
  brush.fillBleed(0.2);
  brush.circle(cx, cy, 20, 0.4);
  // ochre stamen dots
  brush.fill("#b8801f", 220);
  brush.circle(cx - 6, cy - 4, 5, 0.3);
  brush.circle(cx + 7, cy + 3, 4, 0.3);

  // green bud below
  brush.fill("#557a3a", 200);
  brush.circle(250, 300, 16, 0.4);
  brush.fill("#3b5bc4", 190);
  brush.circle(250, 290, 10, 0.4);
}
