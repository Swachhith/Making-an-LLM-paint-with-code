async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2f5f7");

  // cool slate wash only behind the upper petals, not a full halo
  brush.noStroke();
  brush.fill("#7f93aa", 205);
  brush.fillBleed(0.4, "out");
  brush.fillTexture(0.65, 0.4);
  brush.beginShape(0.7);
  brush.vertex(40, 60);
  brush.vertex(260, 10);
  brush.vertex(480, 70);
  brush.vertex(470, 330);
  brush.vertex(330, 440);
  brush.vertex(120, 420);
  brush.vertex(20, 260);
  brush.endShape(true);

  // curving stem into the flower centre
  let cx = 250, cy = 230;
  brush.fill("#6e8c78", 230);
  brush.fillBleed(0.04, "out");
  brush.fillTexture(0.3, 0.6);
  brush.beginShape(1);
  brush.vertex(cx - 5, cy + 20);
  brush.vertex(275, 420);
  brush.vertex(330, 590);
  brush.vertex(344, 590);
  brush.vertex(288, 420);
  brush.vertex(cx + 7, cy + 20);
  brush.endShape(true);

  // two lobed grey-green leaves clasping the stem
  for (let side of [-1, 1]) {
    let bx = 292 + side * 3, by = 470 + side * 45;
    brush.fill("#7f9a86", 210);
    brush.fillBleed(0.2, "out");
    brush.fillTexture(0.55, 0.6);
    brush.beginShape(0.5);
    brush.vertex(bx, by);
    brush.vertex(bx + side * 40, by - 40);
    brush.vertex(bx + side * 55, by - 18);
    brush.vertex(bx + side * 85, by - 62);
    brush.vertex(bx + side * 100, by - 28);
    brush.vertex(bx + side * 145, by - 72);
    brush.vertex(bx + side * 125, by - 8);
    brush.vertex(bx + side * 70, by + 16);
    brush.endShape(true);
    brush.fill("#5c7a67", 190);
    brush.fillBleed(0.05, "out");
    brush.beginShape(0.5);
    brush.vertex(bx, by);
    brush.vertex(bx + side * 130, by - 55);
    brush.vertex(bx + side * 70, by - 20);
    brush.endShape(true);
  }

  // four broad white petals, shaped by cool shadows at their edges
  for (let i = 0; i < 4; i++) {
    let a = 45 + i * 90;
    brush.fill("#d3dbe7", 225);
    brush.fillBleed(0.15, "out");
    brush.fillTexture(0.5, 0.8);
    brush.beginShape(0.8);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 45) * 120, cy + sin(a - 45) * 120);
    brush.vertex(cx + cos(a - 15) * 170, cy + sin(a - 15) * 170);
    brush.vertex(cx + cos(a + 15) * 165, cy + sin(a + 15) * 165);
    brush.vertex(cx + cos(a + 45) * 115, cy + sin(a + 45) * 115);
    brush.endShape(true);
    // inner lit area back to almost white
    brush.fill("#fdfefe", 235);
    brush.fillBleed(0.05, "out");
    brush.fillTexture(0.2, 0.2);
    brush.beginShape(0.8);
    brush.vertex(cx + cos(a) * 30, cy + sin(a) * 30);
    brush.vertex(cx + cos(a - 30) * 110, cy + sin(a - 30) * 110);
    brush.vertex(cx + cos(a - 8) * 145, cy + sin(a - 8) * 145);
    brush.vertex(cx + cos(a + 20) * 125, cy + sin(a + 20) * 125);
    brush.endShape(true);
    // crumple crease in blue-grey
    brush.fill("#a9b4c9", 185);
    brush.fillBleed(0.08, "out");
    brush.beginShape(0.6);
    brush.vertex(cx + cos(a + 5) * 45, cy + sin(a + 5) * 45);
    brush.vertex(cx + cos(a + 28) * 150, cy + sin(a + 28) * 150);
    brush.vertex(cx + cos(a + 16) * 120, cy + sin(a + 16) * 120);
    brush.endShape(true);
  }

  // dark purplish blotch at petal bases, then seed head and stamens
  brush.fill("#4b4668", 200);
  brush.fillBleed(0.3, "out");
  brush.circle(cx, cy, 38, true);
  for (let i = 0; i < 32; i++) {
    let a = i * 360 / 32;
    brush.fill("#22222f", 220);
    brush.fillBleed(0.03, "out");
    brush.circle(cx + cos(a) * 44, cy + sin(a) * 44, 4, true);
  }
  brush.fill("#aebc98", 230);
  brush.fillBleed(0.05, "out");
  brush.circle(cx, cy, 16, true);
  for (let i = 0; i < 8; i++) {
    let a = i * 45;
    brush.fill("#4d5a50", 210);
    brush.fillBleed(0.01, "out");
    brush.beginShape(0.1);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a) * 15, cy + sin(a) * 15);
    brush.vertex(cx + cos(a + 8) * 15, cy + sin(a + 8) * 15);
    brush.endShape(true);
  }
}
