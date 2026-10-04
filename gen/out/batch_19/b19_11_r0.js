async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f0f3f6");
  brush.noStroke();

  // cool blue-grey sky
  brush.fill("#b7c8d9", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.35, 0.35);
  brush.beginShape(0.2);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 470); brush.vertex(-20, 470);
  brush.endShape(true);
  // cool ground
  brush.fill("#8fa3a8", 190);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 460); brush.vertex(300, 450); brush.vertex(620, 465); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);

  // trunk
  brush.fill("#4b4046", 220);
  brush.fillBleed(0.2);
  brush.fillTexture(0.5, 0.4);
  brush.beginShape(0.4);
  brush.vertex(270, 520); brush.vertex(285, 380); brush.vertex(250, 300); brush.vertex(275, 295);
  brush.vertex(300, 350); brush.vertex(330, 290); brush.vertex(350, 300); brush.vertex(318, 380); brush.vertex(335, 520);
  brush.endShape(true);

  // crown: big loose orange masses, then red, then deep crimson shadow clusters
  const blobs = [[300, 200, 170], [170, 250, 110], [430, 250, 110], [230, 120, 100], [380, 120, 100], [300, 80, 90], [120, 330, 70], [480, 330, 70]];
  for (const b of blobs) {
    brush.fill("#f08a2a", 190);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.circle(b[0], b[1], b[2], true);
  }
  for (const b of blobs) {
    brush.fill("#d8342a", 190);
    brush.fillBleed(0.25);
    brush.fillTexture(0.5, 0.5);
    brush.circle(b[0] + 10, b[1] + 18, b[2] * 0.62, true);
  }
  for (const b of blobs) {
    brush.fill("#8a1f3a", 170);
    brush.fillBleed(0.2);
    brush.fillTexture(0.45, 0.5);
    brush.circle(b[0] + 22, b[1] + 34, b[2] * 0.3, true);
  }
  // fallen leaves under the tree
  let s = 5;
  for (let i = 0; i < 30; i++) {
    s = (s * 48271) % 2147483647;
    const x = 80 + (s / 2147483647) * 440;
    s = (s * 48271) % 2147483647;
    const y = 490 + (s / 2147483647) * 90;
    brush.fill(i % 2 ? "#e0602a" : "#c0283a", 210);
    brush.fillBleed(0.2);
    brush.fillTexture(0.3, 0.3);
    brush.circle(x, y, 5 + (i % 3) * 2, true);
  }
  // cool blue shadow at base
  brush.fill("#5d6f8c", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.6);
  brush.vertex(150, 525); brush.vertex(300, 505); brush.vertex(460, 520); brush.vertex(300, 545);
  brush.endShape(true);
}
