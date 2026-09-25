async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#ede4d3");

  // ochre field wash across the bottom
  brush.noStroke();
  brush.fill("#c9b58a", 160);
  brush.fillBleed(0.4, "out");
  brush.fillTexture(0.7, 0.3);
  brush.beginShape(0.5);
  brush.vertex(0, 420);
  brush.vertex(300, 390);
  brush.vertex(600, 440);
  brush.vertex(600, 600);
  brush.vertex(0, 600);
  brush.endShape(true);

  // olive stems
  brush.fill("#6b6b3e", 215);
  brush.fillBleed(0.05, "out");
  brush.fillTexture(0.4, 0.6);
  brush.beginShape(0.9);
  brush.vertex(180, 250);
  brush.vertex(200, 420);
  brush.vertex(230, 600);
  brush.vertex(240, 600);
  brush.vertex(210, 420);
  brush.vertex(190, 250);
  brush.endShape(true);
  brush.beginShape(0.9);
  brush.vertex(410, 330);
  brush.vertex(370, 460);
  brush.vertex(330, 600);
  brush.vertex(340, 600);
  brush.vertex(380, 460);
  brush.vertex(420, 335);
  brush.endShape(true);

  // bloom 1: face-on, upper left, four crumpled brick petals
  let cx = 185, cy = 215;
  for (let i = 0; i < 4; i++) {
    let a = 20 + i * 90;
    brush.fill("#b5503a", 185);
    brush.fillBleed(0.3, "out");
    brush.fillTexture(0.6, 0.6);
    brush.beginShape(0.6);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 50) * 95, cy + sin(a - 50) * 95);
    brush.vertex(cx + cos(a - 20) * 125, cy + sin(a - 20) * 125);
    brush.vertex(cx + cos(a + 5) * 115, cy + sin(a + 5) * 115);
    brush.vertex(cx + cos(a + 30) * 128, cy + sin(a + 30) * 128);
    brush.vertex(cx + cos(a + 50) * 90, cy + sin(a + 50) * 90);
    brush.endShape(true);
    brush.fill("#8e3a2a", 200);
    brush.fillBleed(0.12, "out");
    brush.beginShape(0.7);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 25) * 70, cy + sin(a - 25) * 70);
    brush.vertex(cx + cos(a + 20) * 80, cy + sin(a + 20) * 80);
    brush.endShape(true);
  }
  brush.fill("#2e2a22", 225);
  brush.fillBleed(0.2, "out");
  brush.circle(cx, cy, 24, true);
  brush.fill("#7d7a52", 210);
  brush.fillBleed(0.05, "out");
  brush.circle(cx, cy, 10, true);

  // bloom 2: seen from the side, cupped, lower right
  let bx = 420, by = 290;
  brush.fill("#a8492f", 180);
  brush.fillBleed(0.3, "out");
  brush.fillTexture(0.6, 0.6);
  brush.beginShape(0.8);
  brush.vertex(bx - 95, by - 70);
  brush.vertex(bx - 30, by - 50);
  brush.vertex(bx + 10, by - 95);
  brush.vertex(bx + 90, by - 65);
  brush.vertex(bx + 70, by + 10);
  brush.vertex(bx, by + 45);
  brush.vertex(bx - 70, by + 5);
  brush.endShape(true);
  brush.fill("#c2643f", 190);
  brush.fillBleed(0.15, "out");
  brush.beginShape(0.8);
  brush.vertex(bx - 75, by - 35);
  brush.vertex(bx, by - 15);
  brush.vertex(bx + 70, by - 30);
  brush.vertex(bx + 45, by + 20);
  brush.vertex(bx, by + 40);
  brush.vertex(bx - 50, by + 15);
  brush.endShape(true);
  brush.fill("#6f2a20", 200);
  brush.fillBleed(0.1, "out");
  brush.beginShape(0.8);
  brush.vertex(bx - 40, by - 55);
  brush.vertex(bx + 30, by - 58);
  brush.vertex(bx, by - 40);
  brush.endShape(true);
}
