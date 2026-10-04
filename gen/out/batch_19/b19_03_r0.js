async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf3f1");
  brush.noStroke();

  // pastel sky, pink low and lilac high
  brush.fill("#c9b8e0", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 300); brush.vertex(-20, 280);
  brush.endShape(true);
  brush.fill("#f2c2c6", 180);
  brush.fillBleed(0.3);
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.3);
  brush.vertex(-20, 240); brush.vertex(620, 260); brush.vertex(620, 560); brush.vertex(-20, 560);
  brush.endShape(true);

  // a soft cloud
  brush.fill("#ffffff", 0);
  brush.fill("#e3d3ee", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.3, 0.3);
  brush.circle(120, 110, 60, true);
  brush.circle(180, 95, 45, true);

  // tower, strongly tapered because we look up at it
  brush.fill("#d9c3a8", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.05);
  brush.vertex(220, 620); brush.vertex(470, 620); brush.vertex(400, 230); brush.vertex(300, 230);
  brush.endShape(true);
  // shaded side
  brush.fill("#b39a8c", 200);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.05);
  brush.vertex(380, 620); brush.vertex(470, 620); brush.vertex(400, 230); brush.vertex(368, 230);
  brush.endShape(true);

  // cap
  brush.fill("#9c8bb8", 215);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(285, 240); brush.vertex(300, 190); brush.vertex(350, 160); brush.vertex(400, 190); brush.vertex(415, 240);
  brush.endShape(true);

  // door and window
  brush.fill("#8d7aa6", 210);
  brush.fillBleed(0.15);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(320, 620); brush.vertex(320, 540); brush.vertex(345, 525); brush.vertex(370, 540); brush.vertex(370, 620);
  brush.endShape(true);
  brush.beginShape(0.3);
  brush.vertex(335, 360); brush.vertex(362, 360); brush.vertex(360, 395); brush.vertex(337, 395);
  brush.endShape(true);

  // sails from hub, four lattice blades seen from below
  const hx = 350, hy = 210;
  const angs = [-60, 30, 120, 210];
  for (let s = 0; s < 4; s++) {
    const a = angs[s] * Math.PI / 180;
    const dx = Math.cos(a), dy = Math.sin(a);
    const px = -dy, py = dx;
    const L = 230;
    brush.fill(s % 2 ? "#e8a9b4" : "#a9c6e0", 190);
    brush.fillBleed(0.2);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.05);
    brush.vertex(hx + dx * 40, hy + dy * 40);
    brush.vertex(hx + dx * L, hy + dy * L);
    brush.vertex(hx + dx * L + px * 55, hy + dy * L + py * 55);
    brush.vertex(hx + dx * 50 + px * 45, hy + dy * 50 + py * 45);
    brush.endShape(true);
    // spar
    brush.fill("#7b6a86", 210);
    brush.fillBleed(0.1);
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.05);
    brush.vertex(hx - px * 8, hy - py * 8);
    brush.vertex(hx + dx * L - px * 8, hy + dy * L - py * 8);
    brush.vertex(hx + dx * L + px * 8, hy + dy * L + py * 8);
    brush.vertex(hx + px * 8, hy + py * 8);
    brush.endShape(true);
  }
  brush.fill("#5f4f6e", 230);
  brush.fillBleed(0.1);
  brush.fillTexture(0.3, 0.3);
  brush.circle(hx, hy, 14, true);

  // grass at the foot
  brush.fill("#b5d4b2", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.6);
  brush.vertex(-20, 560); brush.vertex(120, 530); brush.vertex(260, 575); brush.vertex(420, 560);
  brush.vertex(620, 540); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
}
