async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf1e4");
  brush.noStroke();
  // warm glow behind
  brush.fill("#f7dcc0", 160);
  brush.fillBleed(0.5, "out");
  brush.fillTexture(0.4, 0.2);
  brush.circle(320, 260, 210, true);
  // stem and leaf
  brush.fill("#8a9a5b", 200);
  brush.fillBleed(0.1, "out");
  brush.fillTexture(0.3, 0.4);
  brush.beginShape(0.4);
  brush.vertex(305, 390); brush.vertex(290, 480); brush.vertex(270, 600);
  brush.vertex(286, 600); brush.vertex(306, 482); brush.vertex(322, 390);
  brush.endShape(true);
  brush.fill("#a3ad6a", 180);
  brush.fillBleed(0.3, "out");
  brush.beginShape(0.7);
  brush.vertex(292, 500); brush.vertex(380, 470); brush.vertex(440, 490); brush.vertex(370, 515);
  brush.endShape(true);
  // cup: stacked arcs, outer to inner, bottom to top
  let cx = 315, base = 390;
  for (let i = 0; i < 9; i++) {
    let w = 190 - i * 14;
    let top = base - 60 - i * 22;
    let col = i < 3 ? "#f2b38c" : (i < 6 ? "#f4a07a" : "#e98a62");
    brush.fill(col, 160 + i * 8);
    brush.fillBleed(0.25, "out");
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.9);
    brush.vertex(cx - w, top + 20);
    brush.vertex(cx - w * 0.7, top + 80 + i * 4);
    brush.vertex(cx, base - i * 12);
    brush.vertex(cx + w * 0.7, top + 80 + i * 4);
    brush.vertex(cx + w, top + 20);
    brush.vertex(cx + w * 0.5, top + 40);
    brush.vertex(cx, top + 30);
    brush.vertex(cx - w * 0.5, top + 40);
    brush.endShape(true);
  }
  // sepals
  brush.fill("#6f8a4a", 200);
  brush.fillBleed(0.15, "out");
  brush.beginShape(0.6);
  brush.vertex(270, 370); brush.vertex(315, 400); brush.vertex(360, 370); brush.vertex(315, 385);
  brush.endShape(true);
  // tight green-peach heart on top
  brush.fill("#c9b86a", 170);
  brush.fillBleed(0.2, "out");
  brush.circle(cx, 150, 22, true);
}
