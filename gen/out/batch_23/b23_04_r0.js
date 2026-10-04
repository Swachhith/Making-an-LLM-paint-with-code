async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf1dc");
  brush.noStroke();

  // warm sky
  brush.fill("#f2c784", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.8);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 290); brush.vertex(0, 300);
  brush.endShape(true);

  // golden field
  brush.fill("#e0a23c", 200);
  brush.fillBleed(0.28);
  brush.beginShape(0.8);
  brush.vertex(0, 300); brush.vertex(600, 285); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  brush.fill("#c8792a", 180);
  brush.beginShape(0.9);
  brush.vertex(0, 450); brush.vertex(300, 420); brush.vertex(600, 460); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);

  // distant grove: soft foliage mass in ochre and olive
  brush.fill("#b59a3c", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.8);
  brush.vertex(300, 300); brush.vertex(320, 200); brush.vertex(380, 170); brush.vertex(450, 185);
  brush.vertex(500, 220); brush.vertex(520, 300);
  brush.endShape(true);
  brush.fill("#8b7a2a", 170);
  brush.circle(360, 215, 35, 0.6);
  brush.circle(440, 205, 40, 0.6);

  // shadow band beneath the grove
  brush.fill("#8a5a24", 190);
  brush.fillBleed(0.25);
  brush.beginShape(0.7);
  brush.vertex(290, 292); brush.vertex(530, 290); brush.vertex(535, 310); brush.vertex(285, 312);
  brush.endShape(true);

  // birch trunks: left as paper; paint dark marks on them and gaps between them
  const xs = [322, 346, 372, 392, 420, 446, 470, 494];
  for (const x of xs) {
    brush.fill("#5a4630", 220);
    brush.fillBleed(0.1);
    brush.beginShape(0.2);
    brush.vertex(x + 8, 190 + (x % 3) * 8); brush.vertex(x + 15, 190 + (x % 3) * 8);
    brush.vertex(x + 15, 300); brush.vertex(x + 8, 300);
    brush.endShape(true);
    for (let y = 215; y < 295; y += 22) {
      brush.fill("#2e241a", 230);
      brush.circle(x + 3, y + (x % 7), 3, 0.3);
    }
  }
  brush.fill("#6b5a28", 150);
  brush.beginShape(0.4);
  brush.vertex(310, 240); brush.vertex(322, 240); brush.vertex(322, 295); brush.vertex(310, 295);
  brush.endShape(true);

  // grasses in foreground
  for (let i = 0; i < 20; i++) {
    const x = random(600), y = 500 + random(90);
    brush.fill("#9c5a1c", 190);
    brush.circle(x, y, 6 + random(6), 0.6);
  }
}
