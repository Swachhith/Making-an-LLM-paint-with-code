async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#16213f");
  brush.noStroke();

  // deepen the night sky toward top
  brush.fill("#0b1230", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 220); brush.vertex(0, 260);
  brush.endShape(true);

  // meadow silhouette: grasses and a tree, darkest blue
  brush.fill("#050a1e", 240);
  brush.fillBleed(0.2);
  brush.beginShape(0.6);
  brush.vertex(0, 430); brush.vertex(120, 410); brush.vertex(260, 425); brush.vertex(400, 400);
  brush.vertex(600, 420); brush.vertex(600, 600); brush.vertex(0, 600);
  brush.endShape(true);
  // grass blades (wide tapering shapes)
  for (let x = 0; x < 600; x += 22) {
    const h = 40 + random(70);
    brush.beginShape(0.4);
    brush.vertex(x, 440); brush.vertex(x + 8 + random(10), 430 - h); brush.vertex(x + 20, 440);
    brush.endShape(true);
  }
  // tree
  brush.beginShape(0.5);
  brush.vertex(470, 420); brush.vertex(484, 300); brush.vertex(500, 300); brush.vertex(512, 420);
  brush.endShape(true);
  brush.circle(492, 250, 75, 0.6);
  brush.circle(450, 280, 45, 0.6);
  brush.circle(540, 285, 45, 0.6);

  // fireflies: warm yellow glows
  for (let i = 0; i < 45; i++) {
    const x = random(600), y = 250 + random(300);
    brush.fillBleed(0.35);
    brush.fill("#f2c230", 150);
    brush.circle(x, y, 7 + random(5), 0.5);
    brush.fill("#ffe46a", 240);
    brush.circle(x, y, 2 + random(2), 0.2);
  }
  // a few stars
  for (let i = 0; i < 25; i++) {
    brush.fill("#ffe46a", 200);
    brush.circle(random(600), random(220), 1 + random(1.5), 0.1);
  }
}
