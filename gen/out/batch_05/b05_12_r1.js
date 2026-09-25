async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcf9f6");
  brush.noStroke();
  // bloom A: front-facing, big loose coral lobes, upper right
  let cx = 380, cy = 215;
  let lobes = [[0, 110], [70, 115], [140, 105], [210, 118], [285, 110]];
  for (let L of lobes) {
    brush.fill("#f6ab94", 185);
    brush.fillBleed(0.45);
    brush.fillTexture(0.5, 0.4);
    brush.circle(cx + 62 * cos(L[0]), cy + 57 * sin(L[0]), L[1] * 0.6, true);
  }
  // cupped inner petals as crescents
  for (let k = 0; k < 5; k++) {
    let a = k * 72 + 20;
    brush.fill("#ee8d77", 190);
    brush.fillBleed(0.2);
    brush.beginShape(0.9);
    brush.vertex(cx + 20 * cos(a - 40), cy + 20 * sin(a - 40));
    brush.vertex(cx + 60 * cos(a - 25), cy + 60 * sin(a - 25));
    brush.vertex(cx + 65 * cos(a + 10), cy + 65 * sin(a + 10));
    brush.vertex(cx + 35 * cos(a + 20), cy + 35 * sin(a + 20));
    brush.endShape(true);
  }
  brush.fill("#dc6e5a", 205);
  brush.fillBleed(0.2);
  brush.beginShape(0.9);
  brush.vertex(cx - 28, cy + 5); brush.vertex(cx - 10, cy - 24); brush.vertex(cx + 24, cy - 14);
  brush.vertex(cx + 28, cy + 15); brush.vertex(cx, cy + 28);
  brush.endShape(true);
  brush.fill("#f2c35e", 200);
  brush.fillBleed(0.1);
  brush.circle(cx + 2, cy + 2, 9, true);
  // bloom B: tilted cup seen from the side, lower left
  let bx = 190, by = 400;
  brush.fill("#f8b9a3", 185);
  brush.fillBleed(0.4);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.9);
  brush.vertex(bx - 110, by - 30); brush.vertex(bx - 60, by - 95); brush.vertex(bx + 10, by - 72);
  brush.vertex(bx + 80, by - 105); brush.vertex(bx + 118, by - 35); brush.vertex(bx + 60, by + 52);
  brush.vertex(bx - 60, by + 47);
  brush.endShape(true);
  brush.fill("#ee9480", 200);
  brush.fillBleed(0.25);
  brush.beginShape(0.9);
  brush.vertex(bx - 70, by - 20); brush.vertex(bx, by - 45); brush.vertex(bx + 70, by - 20);
  brush.vertex(bx + 40, by + 38); brush.vertex(bx - 40, by + 38);
  brush.endShape(true);
  brush.fill("#dc6e5a", 195);
  brush.fillBleed(0.15);
  brush.beginShape(0.9);
  brush.vertex(bx - 45, by - 42); brush.vertex(bx, by - 64); brush.vertex(bx + 45, by - 42); brush.vertex(bx, by - 26);
  brush.endShape(true);
  // sepals under B and a whisper of green for the stems
  brush.fill("#a6be92", 195);
  brush.fillBleed(0.12);
  brush.beginShape(0.7);
  brush.vertex(bx - 45, by + 40); brush.vertex(bx + 5, by + 70); brush.vertex(bx + 50, by + 42); brush.vertex(bx + 5, by + 52);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(bx, by + 55); brush.vertex(bx + 8, by + 55); brush.vertex(bx + 30, by + 175); brush.vertex(bx + 22, by + 175);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(cx - 20, cy + 70); brush.vertex(cx - 12, cy + 72); brush.vertex(bx + 40, by + 165); brush.vertex(bx + 32, by + 165);
  brush.endShape(true);
}
