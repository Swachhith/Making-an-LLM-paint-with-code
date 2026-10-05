async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#faf4ec");
  brush.noStroke();
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.5);
  brush.fill("#a8d0f0", 210);
  brush.beginShape(0.4);
  brush.vertex(-40, -40); brush.vertex(640, -40); brush.vertex(640, 190); brush.vertex(-40, 190);
  brush.endShape(true);
  brush.fill("#fce4c8", 160);
  brush.beginShape(0.8);
  brush.vertex(-40, 130); brush.vertex(640, 140); brush.vertex(640, 220); brush.vertex(-40, 210);
  brush.endShape(true);
  brush.fill("#c0aedc", 210);
  brush.beginShape(0.9);
  brush.vertex(-40, 220); brush.vertex(120, 170); brush.vertex(300, 205); brush.vertex(470, 160); brush.vertex(640, 200); brush.vertex(640, 260); brush.vertex(-40, 260);
  brush.endShape(true);
  const cols = ["#e890b0", "#f4c860", "#ea9cc8", "#c8a8e8", "#f49880"];
  let y = 250;
  for (let r = 0; r < 5; r++) {
    const h = 24 + r * 24;
    for (let s = -1; s < 7; s++) {
      brush.fill(cols[(r + s + 10) % 5 === r ? r : (s % 2 ? r : (r + 1) % 5)], 205);
      brush.beginShape(0.3);
      brush.vertex(s * 90 + 10 - r * 10, y); brush.vertex(s * 90 + 80 - r * 8, y); brush.vertex(s * 90 + 90 + r * 12, y + h); brush.vertex(s * 90 - r * 18, y + h);
      brush.endShape(true);
    }
    brush.fill("#7ab87a", 215);
    brush.beginShape(0.5);
    brush.vertex(-40, y + h); brush.vertex(640, y + h); brush.vertex(640, y + h + 12 + r * 4); brush.vertex(-40, y + h + 12 + r * 4);
    brush.endShape(true);
    y += h + 12 + r * 4;
  }
  brush.fill("#d85a88", 220);
  for (let k = 0; k < 10; k++) brush.circle(25 + k * 62, y + 16, 12, 0.8);
  brush.fill("#6ea06e", 200);
  brush.beginShape(0.5);
  brush.vertex(-40, y + 30); brush.vertex(640, y + 30); brush.vertex(640, 650); brush.vertex(-40, 650);
  brush.endShape(true);
  brush.fill("#8a6a50", 190);
  brush.beginShape(0.5);
  brush.vertex(60, 215); brush.vertex(100, 205); brush.vertex(104, 235); brush.vertex(64, 240);
  brush.endShape(true);
}
