async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdfaf7");
  brush.noStroke();
  // bloom A: front-facing, big loose coral lobes, upper right
  let cx = 385, cy = 210;
  let lobes = [[0, 115], [72, 118], [144, 108], [216, 120], [288, 112]];
  for (let L of lobes) {
    brush.fill("#f6a890", 185);
    brush.fillBleed(0.45);
    brush.fillTexture(0.5, 0.4);
    brush.circle(cx + 64 * cos(L[0]), cy + 58 * sin(L[0]), L[1] * 0.6, true);
  }
  // a second, smaller ring of ruffled petals
  for (let k = 0; k < 7; k++) {
    let a = k * 51 + 10;
    brush.fill("#f19680", 185);
    brush.fillBleed(0.22);
    brush.fillTexture(0.45, 0.5);
    brush.beginShape(0.9);
    brush.vertex(cx + 25 * cos(a - 30), cy + 25 * sin(a - 30));
    brush.vertex(cx + 75 * cos(a - 22), cy + 72 * sin(a - 22));
    brush.vertex(cx + 82 * cos(a), cy + 78 * sin(a));
    brush.vertex(cx + 75 * cos(a + 22), cy + 72 * sin(a + 22));
    brush.vertex(cx + 25 * cos(a + 30), cy + 25 * sin(a + 30));
    brush.endShape(true);
  }
  brush.fill("#dc6c58", 205);
  brush.fillBleed(0.2);
  brush.beginShape(0.9);
  brush.vertex(cx - 30, cy + 5); brush.vertex(cx - 10, cy - 26); brush.vertex(cx + 26, cy - 15);
  brush.vertex(cx + 30, cy + 16); brush.vertex(cx, cy + 30);
  brush.endShape(true);
  brush.fill("#f2c35e", 205);
  brush.fillBleed(0.1);
  brush.circle(cx + 2, cy + 2, 10, true);
  // bloom B: tilted cup from the side, lower left
  let bx = 185, by = 405;
  brush.fill("#f8b6a0", 185);
  brush.fillBleed(0.4);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.9);
  brush.vertex(bx - 115, by - 30); brush.vertex(bx - 62, by - 98); brush.vertex(bx + 10, by - 74);
  brush.vertex(bx + 82, by - 108); brush.vertex(bx + 122, by - 35); brush.vertex(bx + 62, by + 55);
  brush.vertex(bx - 62, by + 50);
  brush.endShape(true);
  // vertical folds on the cup's outer petals
  for (let k = -2; k <= 2; k++) {
    brush.fill("#ee8f7a", 180);
    brush.fillBleed(0.15);
    brush.beginShape(0.9);
    brush.vertex(bx + k * 38 - 12, by + 42);
    brush.vertex(bx + k * 42 - 6, by - 40);
    brush.vertex(bx + k * 42 + 8, by - 40);
    brush.vertex(bx + k * 38 + 10, by + 42);
    brush.endShape(true);
  }
  brush.fill("#d9654f", 195);
  brush.fillBleed(0.15);
  brush.beginShape(0.9);
  brush.vertex(bx - 50, by - 44); brush.vertex(bx, by - 68); brush.vertex(bx + 50, by - 44); brush.vertex(bx, by - 26);
  brush.endShape(true);
  // sepals and stems
  brush.fill("#a1bb8d", 200);
  brush.fillBleed(0.12);
  brush.beginShape(0.7);
  brush.vertex(bx - 48, by + 42); brush.vertex(bx + 5, by + 74); brush.vertex(bx + 52, by + 44); brush.vertex(bx + 5, by + 55);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(bx, by + 60); brush.vertex(bx + 8, by + 60); brush.vertex(bx + 30, by + 175); brush.vertex(bx + 22, by + 175);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(cx - 20, cy + 75); brush.vertex(cx - 12, cy + 77); brush.vertex(bx + 40, by + 165); brush.vertex(bx + 32, by + 165);
  brush.endShape(true);
}
