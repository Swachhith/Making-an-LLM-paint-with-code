async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdfcfa");

  // hair-thin stems, most of the paper left bare
  brush.noStroke();
  brush.fill("#b3cfa8", 190);
  brush.fillBleed(0.04, "out");
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(1);
  brush.vertex(200, 210);
  brush.vertex(230, 400);
  brush.vertex(260, 600);
  brush.vertex(265, 600);
  brush.vertex(235, 400);
  brush.vertex(205, 210);
  brush.endShape(true);
  brush.beginShape(1);
  brush.vertex(420, 360);
  brush.vertex(350, 470);
  brush.vertex(270, 600);
  brush.vertex(276, 600);
  brush.vertex(356, 470);
  brush.vertex(426, 362);
  brush.endShape(true);

  // bloom A: facing us, eight notched petals in pale lilac-pink shadow
  let ax = 200, ay = 200;
  for (let i = 0; i < 8; i++) {
    let a = i * 45 + 8;
    brush.fill("#eadbe8", 190);
    brush.fillBleed(0.3, "out");
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.7);
    brush.vertex(ax + cos(a) * 18, ay + sin(a) * 18);
    brush.vertex(ax + cos(a - 12) * 105, ay + sin(a - 12) * 105);
    brush.vertex(ax + cos(a - 4) * 112, ay + sin(a - 4) * 112);
    brush.vertex(ax + cos(a) * 102, ay + sin(a) * 102);
    brush.vertex(ax + cos(a + 4) * 112, ay + sin(a + 4) * 112);
    brush.vertex(ax + cos(a + 12) * 105, ay + sin(a + 12) * 105);
    brush.endShape(true);
  }
  brush.fill("#f0c95a", 215);
  brush.fillBleed(0.25, "out");
  brush.circle(ax, ay, 22, true);
  brush.fill("#c9962e", 200);
  brush.fillBleed(0.08, "out");
  brush.circle(ax + 4, ay + 4, 10, true);

  // bloom B: tilted away, petals squashed into an ellipse
  let bx = 420, by = 340;
  for (let i = 0; i < 8; i++) {
    let a = i * 45 + 20;
    let ca = cos(a), sa = sin(a);
    let tip = 90;
    brush.fill("#dfe3ee", 185);
    brush.fillBleed(0.3, "out");
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.7);
    brush.vertex(bx + ca * 12, by + sa * 5);
    brush.vertex(bx + cos(a - 12) * tip, by + sin(a - 12) * tip * 0.4);
    brush.vertex(bx + ca * tip * 1.05, by + sa * tip * 0.44);
    brush.vertex(bx + cos(a + 12) * tip, by + sin(a + 12) * tip * 0.4);
    brush.endShape(true);
  }
  brush.fill("#f2d06a", 210);
  brush.fillBleed(0.2, "out");
  brush.beginShape(0.9);
  brush.vertex(bx - 20, by);
  brush.vertex(bx, by - 8);
  brush.vertex(bx + 20, by);
  brush.vertex(bx, by + 8);
  brush.endShape(true);
}
