async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3f5f7");
  brush.noStroke();

  // cool light blue-grey sky, a wide wash behind the flower
  brush.fill("#b7c7d8", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 420); brush.vertex(300, 450); brush.vertex(-20, 420);
  brush.endShape(true);

  // stems
  brush.fill("#4a6a4a", 215);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.6);
  brush.vertex(300, 470); brush.vertex(310, 470); brush.vertex(320, 620); brush.vertex(310, 620);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(300, 470); brush.vertex(290, 470); brush.vertex(280, 620); brush.vertex(290, 620);
  brush.endShape(true);
  // leaves
  brush.fill("#5f845a", 200);
  brush.fillBleed(0.2);
  brush.beginShape(0.6);
  brush.vertex(260, 530); brush.vertex(170, 470); brush.vertex(130, 520); brush.vertex(200, 580);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(340, 540); brush.vertex(430, 480); brush.vertex(470, 530); brush.vertex(400, 590);
  brush.endShape(true);

  // open white poppy: five broad petals, overlapping
  const cx = 220, cy = 230;
  const petals = [
    [-30, -10], [40, -30], [110, 10], [150, 110], [60, 140], [-20, 110]
  ];
  for (const p of petals) {
    brush.fill("#f4f6f8", 200);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.7);
    brush.vertex(cx + p[0] * 25, cy + p[1] * 25);
    brush.vertex(cx + p[0] * 100, cy + p[1] * 100);
    brush.vertex(cx + p[0] * 120, cy + p[1] * 115);
    brush.vertex(cx + p[0] * 85, cy + p[1] * 125);
    brush.vertex(cx + p[0] * 30, cy + p[1] * 100);
    brush.vertex(cx + p[0] * 15, cy + p[1] * 25);
    brush.endShape(true);
  }
  // dark centre
  brush.fill("#3a2a4a", 230);
  brush.fillBleed(0.15);
  brush.circle(cx, cy, 30, 0.3);
  brush.fill("#1e1428", 215);
  brush.circle(cx + 4, cy + 2, 16, 0.3);

  // closed bud, right
  brush.fill("#f4f6f8", 215);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(440, 250); brush.vertex(480, 220); brush.vertex(520, 240); brush.vertex(500, 280); brush.vertex(460, 270);
  brush.endShape(true);
  brush.fill("#d0e0f0", 180);
  brush.fillBleed(0.3);
  brush.beginShape(0.7);
  brush.vertex(440, 250); brush.vertex(480, 220); brush.vertex(520, 240); brush.vertex(500, 280); brush.vertex(460, 270);
  brush.endShape(true);
  brush.fill("#3a2a4a", 230);
  brush.fillBleed(0.1);
  brush.beginShape(0.7);
  brush.vertex(455, 250); brush.vertex(470, 230); brush.vertex(485, 245); brush.vertex(470, 260);
  brush.endShape(true);
}
