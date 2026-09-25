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
  // bloom A: front-facing, a few big loose coral washes, upper right
  let cx = 380, cy = 215;
  let lobes = [[0, 110], [70, 115], [140, 105], [210, 118], [285, 110]];
  for (let L of lobes) {
    brush.fill("#f7b5a0", 165);
    brush.fillBleed(0.45);
    brush.fillTexture(0.5, 0.4);
    brush.circle(cx + 60 * cos(L[0]), cy + 55 * sin(L[0]), L[1] * 0.6, true);
  }
  brush.fill("#f29a86", 180);
  brush.fillBleed(0.3);
  brush.circle(cx, cy, 55, true);
  brush.fill("#e7806c", 195);
  brush.fillBleed(0.2);
  brush.beginShape(0.9);
  brush.vertex(cx - 30, cy + 5); brush.vertex(cx - 10, cy - 25); brush.vertex(cx + 25, cy - 15);
  brush.vertex(cx + 30, cy + 15); brush.vertex(cx, cy + 30);
  brush.endShape(true);
  brush.fill("#f5d27c", 180);
  brush.fillBleed(0.1);
  brush.circle(cx + 2, cy + 2, 9, true);
  // bloom B: tilted cup seen from the side, lower left
  let bx = 190, by = 400;
  brush.fill("#f9c2ae", 170);
  brush.fillBleed(0.4);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.9);
  brush.vertex(bx - 110, by - 30); brush.vertex(bx - 60, by - 90); brush.vertex(bx + 10, by - 70);
  brush.vertex(bx + 80, by - 100); brush.vertex(bx + 115, by - 35); brush.vertex(bx + 60, by + 50);
  brush.vertex(bx - 60, by + 45);
  brush.endShape(true);
  brush.fill("#f09f89", 190);
  brush.fillBleed(0.25);
  brush.beginShape(0.9);
  brush.vertex(bx - 70, by - 20); brush.vertex(bx, by - 45); brush.vertex(bx + 70, by - 20);
  brush.vertex(bx + 40, by + 35); brush.vertex(bx - 40, by + 35);
  brush.endShape(true);
  brush.fill("#e27f6c", 180);
  brush.fillBleed(0.15);
  brush.beginShape(0.9);
  brush.vertex(bx - 40, by - 40); brush.vertex(bx, by - 60); brush.vertex(bx + 40, by - 40); brush.vertex(bx, by - 25);
  brush.endShape(true);
  // a whisper of green for the stems
  brush.fill("#b5c9a3", 170);
  brush.fillBleed(0.1);
  brush.beginShape(0.6);
  brush.vertex(bx, by + 40); brush.vertex(bx + 8, by + 40); brush.vertex(bx + 30, by + 170); brush.vertex(bx + 22, by + 170);
  brush.endShape(true);
  brush.beginShape(0.6);
  brush.vertex(cx - 20, cy + 70); brush.vertex(cx - 12, cy + 72); brush.vertex(bx + 40, by + 160); brush.vertex(bx + 32, by + 160);
  brush.endShape(true);
}
