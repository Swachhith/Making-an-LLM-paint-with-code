async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7f8fa");
  brush.noStroke();

  // cool background wash painted around the bloom so white petals stay paper
  brush.fill("#8fa5c2", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.vertex(-20, 330); brush.vertex(110, 360); brush.vertex(150, 470); brush.vertex(300, 520);
  brush.vertex(450, 470); brush.vertex(500, 350); brush.vertex(470, 180); brush.vertex(380, 80);
  brush.vertex(300, 60); brush.vertex(200, 90); brush.vertex(120, 200); brush.vertex(-20, 250);
  brush.endShape(true);
  brush.fill("#5f7aa0", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.45);
  brush.beginShape(0.5);
  brush.vertex(-20, 420); brush.vertex(120, 480); brush.vertex(300, 560); brush.vertex(500, 500); brush.vertex(620, 420);
  brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // stem and bud-scale
  brush.fill("#5a4a44", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.4);
  brush.vertex(285, 500); brush.vertex(315, 500); brush.vertex(330, 620); brush.vertex(295, 620);
  brush.endShape(true);

  // petals: pink blush at the bases, fading to paper at the tips
  const petals = [[300, 480, 190, 150, 0], [300, 480, 420, 160, 0], [300, 480, 300, 90, 0],
                  [300, 480, 150, 330, 1], [300, 480, 450, 320, 1]];
  for (const p of petals) {
    const [bx, by, tx, ty] = p;
    const mx = (bx + tx) / 2, my = (by + ty) / 2;
    const dx = tx - bx, dy = ty - by, l = Math.hypot(dx, dy);
    const nx = -dy / l, ny = dx / l;
    // light outline shading on one side to shape the white petal
    brush.fill("#b7b3d4", 150);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.beginShape(0.7);
    brush.vertex(bx, by);
    brush.vertex(mx + nx * 70, my + ny * 70);
    brush.vertex(tx + nx * 10, ty + ny * 10);
    brush.vertex(mx + nx * 45, my + ny * 45);
    brush.endShape(true);
    // pink base
    brush.fill("#d4508a", 210);
    brush.fillBleed(0.3);
    brush.fillTexture(0.45, 0.5);
    brush.beginShape(0.7);
    brush.vertex(bx, by);
    brush.vertex(bx + dx * 0.45 + nx * 40, by + dy * 0.45 + ny * 40);
    brush.vertex(bx + dx * 0.55, by + dy * 0.55);
    brush.vertex(bx + dx * 0.45 - nx * 40, by + dy * 0.45 - ny * 40);
    brush.endShape(true);
    brush.fill("#a8286a", 200);
    brush.beginShape(0.7);
    brush.vertex(bx, by);
    brush.vertex(bx + dx * 0.25 + nx * 20, by + dy * 0.25 + ny * 20);
    brush.vertex(bx + dx * 0.3, by + dy * 0.3);
    brush.vertex(bx + dx * 0.25 - nx * 20, by + dy * 0.25 - ny * 20);
    brush.endShape(true);
  }
  // centre shadow
  brush.fill("#7a2a5a", 200);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.circle(300, 440, 22, true);
}
