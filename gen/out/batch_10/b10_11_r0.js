async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7f2e6");
  brush.noStroke();
  // soft shadow wash behind the flower
  brush.fill("#d8cde6", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(430, 410, 150, 0.7);
  // arching stem from the right edge
  brush.fill("#4f7a2c", 220);
  brush.fillBleed(0.15);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.8);
  brush.vertex(620, 150); brush.vertex(560, 190); brush.vertex(500, 280); brush.vertex(460, 360);
  brush.vertex(476, 364); brush.vertex(516, 290); brush.vertex(572, 206); brush.vertex(620, 172);
  brush.endShape(true);
  const cx = 440, cy = 410;
  // two petals (sepals) up and down-left
  const dirs = [-90, 150, 30];
  for (const a of dirs) {
    brush.fill("#8a1fc2", 205);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.5);
    brush.beginShape(0.8);
    brush.vertex(cx, cy);
    brush.vertex(cx + 45 * cos(a - 25), cy + 45 * sin(a - 25));
    brush.vertex(cx + 105 * cos(a), cy + 105 * sin(a));
    brush.vertex(cx + 45 * cos(a + 25), cy + 45 * sin(a + 25));
    brush.endShape(true);
  }
  // two broad side petals
  for (const a of [-20, 200]) {
    brush.fill("#a52ad6", 215);
    brush.fillBleed(0.28);
    brush.beginShape(0.9);
    brush.vertex(cx, cy);
    brush.vertex(cx + 60 * cos(a - 40), cy + 60 * sin(a - 40));
    brush.vertex(cx + 110 * cos(a - 10), cy + 110 * sin(a - 10));
    brush.vertex(cx + 100 * cos(a + 20), cy + 100 * sin(a + 20));
    brush.vertex(cx + 50 * cos(a + 40), cy + 50 * sin(a + 40));
    brush.endShape(true);
    brush.fill("#6a0f9a", 180);
    brush.fillBleed(0.2);
    brush.beginShape(0.8);
    brush.vertex(cx, cy);
    brush.vertex(cx + 45 * cos(a - 15), cy + 45 * sin(a - 15));
    brush.vertex(cx + 70 * cos(a + 5), cy + 70 * sin(a + 5));
    brush.vertex(cx + 40 * cos(a + 20), cy + 40 * sin(a + 20));
    brush.endShape(true);
  }
  // lip, deep magenta-violet
  brush.fill("#5a0a6e", 230);
  brush.fillBleed(0.2);
  brush.beginShape(0.8);
  brush.vertex(cx - 22, cy + 5); brush.vertex(cx + 22, cy + 5); brush.vertex(cx + 30, cy + 55); brush.vertex(cx, cy + 75); brush.vertex(cx - 30, cy + 55);
  brush.endShape(true);
  brush.fill("#ffcf2a", 230);
  brush.fillBleed(0.1);
  brush.circle(cx, cy + 4, 9, 0.4);
  // a second closed bud up the stem
  brush.fill("#9a28cc", 200);
  brush.fillBleed(0.25);
  brush.circle(540, 215, 20, 0.5);
}
