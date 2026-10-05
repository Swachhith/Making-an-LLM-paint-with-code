async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f1ecd8");
  brush.noStroke();
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.fill("#d8c890", 110);
  brush.circle(300, 250, 230, 0.9);
  brush.fill("#0e3a22", 220);
  brush.beginShape(0.6);
  brush.vertex(285, 330); brush.vertex(320, 330); brush.vertex(330, 600); brush.vertex(290, 600);
  brush.endShape(true);
  brush.fill("#14502e", 220);
  brush.beginShape(0.8);
  brush.vertex(300, 480); brush.vertex(150, 420); brush.vertex(80, 480); brush.vertex(200, 520);
  brush.endShape(true);
  brush.beginShape(0.8);
  brush.vertex(310, 520); brush.vertex(450, 450); brush.vertex(530, 500); brush.vertex(410, 560);
  brush.endShape(true);
  for (let i = 0; i < 10; i++) {
    const a = i * 36;
    const x = 300 + 95 * Math.cos(a * Math.PI / 180), y = 250 + 95 * Math.sin(a * Math.PI / 180);
    brush.fill(i % 2 ? "#e8d8a0" : "#c9a830", 150);
    brush.beginShape(0.8);
    brush.vertex(300, 250); brush.vertex(x - 20, y - 20); brush.vertex(x + 20, y + 20);
    brush.endShape(true);
    brush.circle(x, y, 38, 0.8);
  }
  brush.fill("#6a4a90", 200);
  brush.circle(300, 250, 60, 0.7);
  brush.fill("#1a3a1e", 230);
  brush.circle(300, 250, 28, 0.7);
  brush.fill("#d8a820", 230);
  for (let j = 0; j < 5; j++) brush.circle(300 + 38 * Math.cos(j * 1.256), 250 + 38 * Math.sin(j * 1.256), 9, 0.6);
}
