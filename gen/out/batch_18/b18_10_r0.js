async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3f5e8");
  randomSeed(1810);
  brush.noStroke();

  // tall vertical: a narrow valley band in the middle, terraces stacked from top to bottom
  // mist sky, thin strip at top
  brush.fill("#a8d0cf", 160);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.7);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 70); brush.vertex(0, 90);
  brush.endShape(true);

  let greens = ["#2e8a2a", "#58b82a", "#1f6e32", "#7ccb1e", "#3c9c3a"];
  let y = 60;
  let k = 0;
  while (y < 620) {
    let h = 30 + k * 4.5;
    let sway = sin(k * 47) * 40;
    brush.fill(greens[k % 5], 200);
    brush.fillBleed(0.25);
    brush.fillTexture(0.45, 0.5);
    brush.beginShape(0.8);
    brush.vertex(-10, y + sway * 0.3);
    brush.vertex(200, y - 10 + sway);
    brush.vertex(420, y + 10 - sway);
    brush.vertex(610, y - sway * 0.4);
    brush.vertex(610, y + h - sway * 0.4);
    brush.vertex(420, y + h + 10 - sway);
    brush.vertex(200, y + h - 10 + sway);
    brush.vertex(-10, y + h + sway * 0.3);
    brush.endShape(true);
    // dark earthen bund below each terrace
    brush.fill("#1a4a22", 220);
    brush.fillBleed(0.2);
    brush.beginShape(0.8);
    brush.vertex(-10, y + h + sway * 0.3 - 4);
    brush.vertex(200, y + h - 14 + sway);
    brush.vertex(420, y + h + 6 - sway);
    brush.vertex(610, y + h - sway * 0.4 - 4);
    brush.vertex(610, y + h - sway * 0.4 + 12);
    brush.vertex(420, y + h + 22 - sway);
    brush.vertex(200, y + h + 2 + sway);
    brush.vertex(-10, y + h + sway * 0.3 + 12);
    brush.endShape(true);
    y += h + 6;
    k++;
  }
  // a tiny hut and path for scale
  brush.fill("#7a4a22", 220);
  brush.beginShape(0.2);
  brush.vertex(430, 170); brush.vertex(470, 150); brush.vertex(510, 170); brush.vertex(495, 195); brush.vertex(445, 195);
  brush.endShape(true);
}
