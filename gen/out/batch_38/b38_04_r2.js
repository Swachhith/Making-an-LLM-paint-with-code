async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f5f1ea");
  brush.noStroke(); brush.fillTexture(0.4, 0.4); brush.fillBleed(0.3);
  brush.fill("#c8dcb0", 150);
  brush.beginShape(0.6); brush.vertex(-40,-40); brush.vertex(640,-40); brush.vertex(640,640); brush.vertex(-40,640); brush.endShape(true);
  for (let k = 0; k < 7; k++) {
    const a = (k * 51 + 20) * Math.PI / 180, x = 300 + 215 * Math.cos(a), y = 300 + 215 * Math.sin(a);
    brush.fill("#1d6b2f", 195); brush.circle(x, y, 120, 0.8);
    brush.fill("#0f4a1f", 175); brush.circle(300 + 235 * Math.cos(a + 0.12), 300 + 235 * Math.sin(a + 0.12), 62, 0.7);
    brush.fill("#8cc04a", 130); brush.circle(300 + 180 * Math.cos(a - 0.1), 300 + 180 * Math.sin(a - 0.1), 40, 0.6);
  }
  brush.fill("#e8607a", 140);
  brush.circle(300, 300, 215, 0.6);
  // five-petal florets in a dome
  const fl = [[300,300,100],[200,245,66],[400,245,66],[210,375,64],[395,375,66],[300,180,60],[300,420,60],[150,310,40],[455,315,40]];
  fl.forEach((f, n) => {
    for (let p = 0; p < 5; p++) {
      const a = (p * 72 - 90 + n * 17) * Math.PI / 180;
      const px = f[0] + f[2] * 0.52 * Math.cos(a), py = f[1] + f[2] * 0.52 * Math.sin(a);
      brush.fill("#e0102a", 195); brush.fillBleed(0.3);
      brush.circle(px, py, f[2] * 0.52, 0.7);
      brush.fill("#9a0618", 170);
      brush.circle(f[0] + (px - f[0]) * 0.5, f[1] + (py - f[1]) * 0.5, f[2] * 0.26, 0.6);
    }
    brush.fill("#f6c8bc", 215); brush.circle(f[0], f[1], f[2] * 0.12, 0.4);
  });
  brush.fill("#7a0414", 150);
  brush.circle(300, 300, 40, 0.6);
  brush.fill("#f6d8a0", 220); brush.circle(300, 300, 12, 0.4);
}
