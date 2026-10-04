async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f4efe2");
  brush.noStroke();
  // sky: crimson top, orange lower
  brush.fill("#f5941c", 215);
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.5);
  brush.beginShape(0.4);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 250); brush.vertex(-20, 250);
  brush.endShape(true);
  brush.fill("#d92a5a", 200);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 110); brush.vertex(300, 140); brush.vertex(-20, 100);
  brush.endShape(true);
  brush.fill("#7a1f7a", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 40); brush.vertex(-20, 55);
  brush.endShape(true);
  // setting sun, left
  brush.fill("#ffd21c", 235);
  brush.fillBleed(0.2);
  brush.fillTexture(0.3, 0.3);
  brush.circle(160, 215, 45, 0.3);
  // headland silhouette right
  brush.fill("#4a1f6a", 225);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.5);
  brush.vertex(360, 250); brush.vertex(440, 200); brush.vertex(530, 190); brush.vertex(620, 170);
  brush.vertex(620, 262); brush.vertex(360, 262);
  brush.endShape(true);
  // sea
  brush.fill("#0d7ac0", 225);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.2);
  brush.vertex(-20, 250); brush.vertex(620, 250); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  brush.fill("#0a3a8a", 215);
  brush.fillBleed(0.3);
  brush.beginShape(0.5);
  brush.vertex(-20, 400); brush.vertex(300, 380); brush.vertex(620, 410); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // broken sun path
  for (let i = 0; i < 9; i++) {
    brush.fill(i % 2 ? "#ffb81c" : "#ff7a1c", 215);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    let y = 268 + i * 26, w = 55 - i * 3 + (i % 3) * 8;
    brush.beginShape(0.6);
    brush.vertex(160 - w, y); brush.vertex(160 + w, y - 2); brush.vertex(160 + w - 12, y + 10); brush.vertex(160 - w + 8, y + 11);
    brush.endShape(true);
  }
  // boat, small, mid-right
  let bx = 420, by = 355;
  brush.fill("#e81a1a", 240);
  brush.fillBleed(0.15);
  brush.fillTexture(0.3, 0.3);
  brush.beginShape(0.15);
  brush.vertex(bx - 45, by); brush.vertex(bx + 45, by - 4); brush.vertex(bx + 32, by + 18); brush.vertex(bx - 34, by + 18);
  brush.endShape(true);
  brush.fill("#f5f0e0", 200);
  brush.fillBleed(0.1);
  brush.beginShape(0.1);
  brush.vertex(bx - 40, by - 2); brush.vertex(bx + 40, by - 5); brush.vertex(bx + 40, by + 1); brush.vertex(bx - 40, by + 3);
  brush.endShape(true);
  // fisherman: yellow oilskin, dark hat
  brush.fill("#ffc400", 240);
  brush.fillBleed(0.1);
  brush.beginShape(0.3);
  brush.vertex(bx - 12, by); brush.vertex(bx - 9, by - 30); brush.vertex(bx + 7, by - 30); brush.vertex(bx + 10, by);
  brush.endShape(true);
  brush.fill("#1a1a2a", 235);
  brush.circle(bx - 1, by - 37, 7, 0.3);
  brush.beginShape(0.1);
  brush.vertex(bx - 12, by - 40); brush.vertex(bx + 10, by - 40); brush.vertex(bx + 10, by - 44); brush.vertex(bx - 12, by - 44);
  brush.endShape(true);
  // rod
  brush.fill("#1a1a2a", 200);
  brush.beginShape(0.1);
  brush.vertex(bx + 5, by - 22); brush.vertex(bx + 110, by - 85); brush.vertex(bx + 113, by - 80); brush.vertex(bx + 9, by - 16);
  brush.endShape(true);
  // reflection
  brush.fill("#8a0f2a", 190);
  brush.fillBleed(0.3);
  brush.beginShape(0.6);
  brush.vertex(bx - 34, by + 20); brush.vertex(bx + 32, by + 20); brush.vertex(bx + 20, by + 45); brush.vertex(bx - 25, by + 42);
  brush.endShape(true);
  // gulls
  brush.fill("#2a1a3a", 220);
  brush.fillBleed(0.05);
  for (let g of [[300, 120], [330, 100], [520, 130]]) {
    brush.circle(g[0], g[1], 3, 0.2);
    brush.circle(g[0] + 6, g[1] + 2, 3, 0.2);
  }
}
