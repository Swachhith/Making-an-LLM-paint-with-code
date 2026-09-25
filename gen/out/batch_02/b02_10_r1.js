async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3eef4");

  // saturated deep teal wash behind, broad and bleeding
  brush.noStroke();
  brush.fill("#1f6f7a", 205);
  brush.fillBleed(0.45, "out");
  brush.fillTexture(0.6, 0.5);
  brush.beginShape(0.7);
  brush.vertex(60, 80);
  brush.vertex(560, 40);
  brush.vertex(580, 420);
  brush.vertex(320, 520);
  brush.vertex(40, 440);
  brush.endShape(true);

  // knobbly brown branch, diagonal
  brush.fill("#4b3326", 240);
  brush.fillBleed(0.06, "out");
  brush.fillTexture(0.5, 0.7);
  brush.beginShape(0.3);
  brush.vertex(20, 580);
  brush.vertex(220, 430);
  brush.vertex(330, 380);
  brush.vertex(470, 250);
  brush.vertex(480, 262);
  brush.vertex(340, 395);
  brush.vertex(230, 448);
  brush.vertex(35, 598);
  brush.endShape(true);

  // open goblet bloom at (240, 330): petals as tall tulip spoons
  let bx = 240, by = 420;
  let spoons = [[-60, 190], [-25, 220], [10, 215], [45, 185], [-5, 150]];
  for (let s of spoons) {
    let tx = bx + s[0] * 1.6, ty = by - s[1];
    brush.fill("#b0328f", 217);
    brush.fillBleed(0.25, "out");
    brush.fillTexture(0.5, 0.6);
    brush.beginShape(0.9);
    brush.vertex(bx - 12, by);
    brush.vertex(tx - 45, ty + 50);
    brush.vertex(tx, ty);
    brush.vertex(tx + 45, ty + 50);
    brush.vertex(bx + 12, by);
    brush.endShape(true);
    // deep violet base
    brush.fill("#5b1a78", 232);
    brush.fillBleed(0.15, "out");
    brush.beginShape(0.9);
    brush.vertex(bx - 10, by);
    brush.vertex(bx + s[0] * 0.9 - 28, by - s[1] * 0.5);
    brush.vertex(bx + s[0] * 0.9 + 28, by - s[1] * 0.5);
    brush.vertex(bx + 10, by);
    brush.endShape(true);
    // pink lit tip
    brush.fill("#f4a3d4", 205);
    brush.fillBleed(0.1, "out");
    brush.circle(tx, ty + 30, 18, true);
  }

  // closed bud on the upper branch: slim flame shape
  let ux = 450, uy = 250;
  brush.fill("#7a2482", 232);
  brush.fillBleed(0.2, "out");
  brush.fillTexture(0.5, 0.6);
  brush.beginShape(0.9);
  brush.vertex(ux - 22, uy);
  brush.vertex(ux - 30, uy - 70);
  brush.vertex(ux + 10, uy - 150);
  brush.vertex(ux + 30, uy - 70);
  brush.vertex(ux + 20, uy);
  brush.endShape(true);
  brush.fill("#d35cb4", 202);
  brush.fillBleed(0.1, "out");
  brush.beginShape(0.9);
  brush.vertex(ux, uy - 20);
  brush.vertex(ux - 8, uy - 90);
  brush.vertex(ux + 8, uy - 135);
  brush.vertex(ux + 14, uy - 70);
  brush.endShape(true);
  // furry sepal cup
  brush.fill("#8a7a4a", 232);
  brush.fillBleed(0.1, "out");
  brush.circle(ux, uy + 2, 16, true);
}
