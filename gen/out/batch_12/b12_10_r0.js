async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf6f4");
  randomSeed(1010);
  brush.noStroke();
  // soft mint wash lower right
  brush.fill("#bfe3d2", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(420, 430, 230, 0.8);
  brush.fill("#e6d4f0", 150);
  brush.circle(160, 130, 200, 0.8);
  // stem curving
  brush.fill("#8cbf94", 210);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(262, 250); brush.vertex(282, 250); brush.vertex(300, 400); brush.vertex(330, 610); brush.vertex(306, 610); brush.vertex(278, 400);
  brush.endShape(true);
  // two leaves
  brush.fill("#9ccfa2", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.7);
  brush.vertex(292, 450); brush.vertex(200, 400); brush.vertex(130, 420); brush.vertex(210, 450);
  brush.endShape(true);
  brush.beginShape(0.7);
  brush.vertex(305, 520); brush.vertex(400, 470); brush.vertex(470, 480); brush.vertex(390, 520);
  brush.endShape(true);
  // drooping pink petals radiating downward/sideways
  let cx = 272, cy = 220;
  for (let i = 0; i < 13; i++) {
    let a = -10 + i * (200 / 12);
    let l = random(130, 160);
    brush.fill("#f39cc0", random(180, 220));
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.6);
    brush.vertex(cx + cos(a - 7) * 30, cy + sin(a - 7) * 30);
    brush.vertex(cx + cos(a - 5) * l, cy + sin(a - 5) * l + 20);
    brush.vertex(cx + cos(a) * (l + 10), cy + sin(a) * (l + 10) + 26);
    brush.vertex(cx + cos(a + 5) * l, cy + sin(a + 5) * l + 20);
    brush.vertex(cx + cos(a + 7) * 30, cy + sin(a + 7) * 30);
    brush.endShape(true);
  }
  // cone
  brush.fill("#e7a46a", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.circle(cx, cy - 8, 38, 0.4);
  brush.fill("#c27a4a", 180);
  brush.circle(cx + 4, cy - 2, 26, 0.6);
  for (let i = 0; i < 25; i++) {
    brush.fill("#9a5a3a", 200);
    brush.fillBleed(0.05);
    brush.circle(cx + random(-26, 26), cy - 8 + random(-26, 26), random(1.5, 3), 0.3);
  }
}
