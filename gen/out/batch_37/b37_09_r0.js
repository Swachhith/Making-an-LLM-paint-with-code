async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf6ee");
  brush.noStroke();
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.fill("#b8d8f0", 190);
  brush.beginShape(0.5);
  brush.vertex(0, 0); brush.vertex(600, 0); brush.vertex(600, 200); brush.vertex(0, 200);
  brush.endShape(true);
  brush.fill("#d8c8e8", 190);
  brush.beginShape(0.9);
  brush.vertex(0, 190); brush.vertex(150, 160); brush.vertex(300, 190); brush.vertex(450, 150); brush.vertex(600, 185); brush.vertex(600, 240); brush.vertex(0, 240);
  brush.endShape(true);
  const cols = ["#f0a0b8", "#f8d070", "#f0b0d0", "#e8c8f0", "#f8a890"];
  for (let r = 0; r < 5; r++) {
    const y0 = 230 + r * r * 14 + r * 20, y1 = y0 + 30 + r * 14;
    brush.fill(cols[r], 215);
    for (let s = 0; s < 6; s++) {
      brush.beginShape(0.6);
      brush.vertex(s * 100 + 5, y0); brush.vertex(s * 100 + 70, y0 - 6); brush.vertex(s * 100 + 100 + r * 6, y1); brush.vertex(s * 100 - r * 6, y1);
      brush.endShape(true);
    }
    brush.fill("#98c898", 190);
    brush.beginShape(0.6);
    brush.vertex(0, y1); brush.vertex(600, y1); brush.vertex(600, y1 + 10); brush.vertex(0, y1 + 10);
    brush.endShape(true);
  }
  brush.fill("#e87898", 200);
  for (let k = 0; k < 8; k++) brush.circle(40 + k * 75, 560, 14, 0.8);
}
