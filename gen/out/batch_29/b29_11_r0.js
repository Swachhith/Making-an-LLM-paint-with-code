async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f2e6cc");
  brush.noStroke();
  brush.fillBleed(0.3);
  brush.fillTexture(0.45, 0.45);
  brush.fill("#e8a848", 180);
  brush.beginShape(0.6);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 380); brush.vertex(0, 380);
  brush.endShape(true);
  brush.fill("#d86a28", 160);
  brush.beginShape(0.6);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 160); brush.vertex(0, 190);
  brush.endShape(true);
  // far mountains
  brush.fill("#4a2a2a", 190);
  brush.beginShape(0.4);
  brush.vertex(0, 400); brush.vertex(0, 300); brush.vertex(110, 250); brush.vertex(210, 310); brush.vertex(330, 220); brush.vertex(460, 300); brush.vertex(600, 250); brush.vertex(600, 400);
  brush.endShape(true);
  // terraces
  for (let i = 0; i < 5; i++) {
    const y = 400 + i * 38;
    brush.fill(i % 2 ? "#d86a28" : "#e8a848", 200);
    brush.beginShape(0.5);
    brush.vertex(0, y); brush.vertex(200, y - 18); brush.vertex(400, y - 6); brush.vertex(600, y - 20); brush.vertex(600, y + 38); brush.vertex(0, y + 40);
    brush.endShape(true);
    brush.fill("#3a1e1e", 190);
    brush.beginShape(0.4);
    brush.vertex(0, y + 28); brush.vertex(300, y + 14); brush.vertex(600, y + 20); brush.vertex(600, y + 38); brush.vertex(0, y + 42);
    brush.endShape(true);
  }
  // village houses
  const hs = [[200,360,40],[255,350,50],[320,365,38],[370,355,46],[430,372,36]];
  hs.forEach((h, i) => {
    brush.fill(i % 2 ? "#d86a28" : "#2a1616", 220);
    brush.beginShape(0.2);
    brush.vertex(h[0], h[1] + 45); brush.vertex(h[0], h[1]); brush.vertex(h[0] + h[2] / 2, h[1] - 18); brush.vertex(h[0] + h[2], h[1]); brush.vertex(h[0] + h[2], h[1] + 45);
    brush.endShape(true);
  });
  brush.fill("#2a1616", 200);
  brush.beginShape(0.4);
  brush.vertex(180, 410); brush.vertex(460, 410); brush.vertex(460, 430); brush.vertex(180, 430);
  brush.endShape(true);
}
