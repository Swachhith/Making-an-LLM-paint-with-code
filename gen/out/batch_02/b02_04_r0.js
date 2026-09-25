async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1f4f6");

  // cool grey-lilac wash behind the head so the white petals read
  brush.noStroke();
  brush.fill("#aebbc9", 170);
  brush.fillBleed(0.45, "out");
  brush.fillTexture(0.6, 0.3);
  brush.circle(250, 230, 200, true);

  // hairy curving stem
  brush.fill("#7f9a84", 215);
  brush.fillBleed(0.06, "out");
  brush.fillTexture(0.3, 0.5);
  brush.beginShape(1);
  brush.vertex(250, 300);
  brush.vertex(275, 420);
  brush.vertex(330, 590);
  brush.vertex(342, 590);
  brush.vertex(286, 420);
  brush.vertex(262, 300);
  brush.endShape(true);

  // two lobed grey-green leaves
  for (let side of [-1, 1]) {
    let bx = 290 + side * 5, by = 470 + side * 40;
    brush.fill("#98ae9a", 185);
    brush.fillBleed(0.25, "out");
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.5);
    brush.vertex(bx, by);
    brush.vertex(bx + side * 40, by - 40);
    brush.vertex(bx + side * 55, by - 20);
    brush.vertex(bx + side * 85, by - 60);
    brush.vertex(bx + side * 100, by - 30);
    brush.vertex(bx + side * 140, by - 70);
    brush.vertex(bx + side * 120, by - 10);
    brush.vertex(bx + side * 70, by + 15);
    brush.endShape(true);
  }

  // four broad white petals: bare paper with cool shadow edges
  let cx = 250, cy = 230;
  for (let i = 0; i < 4; i++) {
    let a = 45 + i * 90;
    brush.fill("#fbfcfd", 235);
    brush.fillBleed(0.2, "out");
    brush.fillTexture(0.3, 0.3);
    brush.beginShape(0.8);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 45) * 120, cy + sin(a - 45) * 120);
    brush.vertex(cx + cos(a - 15) * 165, cy + sin(a - 15) * 165);
    brush.vertex(cx + cos(a + 15) * 160, cy + sin(a + 15) * 160);
    brush.vertex(cx + cos(a + 45) * 115, cy + sin(a + 45) * 115);
    brush.endShape(true);
    // crumpled shadow along one side
    brush.fill("#c3cad9", 170);
    brush.fillBleed(0.15, "out");
    brush.fillTexture(0.6, 0.7);
    brush.beginShape(0.6);
    brush.vertex(cx + cos(a) * 40, cy + sin(a) * 40);
    brush.vertex(cx + cos(a + 25) * 140, cy + sin(a + 25) * 140);
    brush.vertex(cx + cos(a + 10) * 120, cy + sin(a + 10) * 120);
    brush.endShape(true);
  }

  // dark centre: seed head and stamen ring
  brush.fill("#3c3f55", 220);
  brush.fillBleed(0.3, "out");
  brush.circle(cx, cy, 34, true);
  for (let i = 0; i < 28; i++) {
    let a = i * 360 / 28;
    brush.fill("#2a2b3a", 210);
    brush.fillBleed(0.05, "out");
    brush.circle(cx + cos(a) * 42, cy + sin(a) * 42, 4, true);
  }
  brush.fill("#a8b39a", 220);
  brush.fillBleed(0.05, "out");
  brush.circle(cx, cy, 14, true);
}
