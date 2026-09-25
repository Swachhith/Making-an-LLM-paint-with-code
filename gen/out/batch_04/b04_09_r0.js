async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8e1d6");
  randomSeed(90);
  brush.noStroke();

  // bloom low and to the right; stem rises from bottom-left edge
  brush.fill("#6a6242", 210);
  brush.fillBleed(0.12);
  brush.fillTexture(0.4, 0.3);
  brush.beginShape(0.8);
  brush.vertex(0, 560); brush.vertex(200, 470); brush.vertex(360, 380); brush.vertex(366, 392); brush.vertex(206, 484); brush.vertex(0, 578);
  brush.endShape(true);
  // leaves: one above the stem, one below, sage-olive
  brush.fill("#7c8158", 195);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(1);
  brush.vertex(140, 505); brush.vertex(90, 420); brush.vertex(150, 370); brush.vertex(190, 460);
  brush.endShape(true);
  brush.fill("#5f6443", 190);
  brush.beginShape(1);
  brush.vertex(230, 460); brush.vertex(260, 540); brush.vertex(330, 560); brush.vertex(300, 480);
  brush.endShape(true);

  // camellia built as many small petal strokes, spiralling inward
  const cx = 390, cy = 330;
  let n = 0;
  for (let r = 130; r > 10; r -= 10) {
    const count = max(3, floor(r / 14));
    for (let i = 0; i < count; i++) {
      const a = i * 360 / count + n * 23 + random(-8, 8);
      const x = cx + cos(a) * r * 0.75, y = cy + sin(a) * r * 0.68;
      const t = r / 130;
      const col = t > 0.6 ? "#c98a8c" : (t > 0.3 ? "#b56a74" : "#8f4a58");
      brush.fill(col, 160 + (1 - t) * 60 + random(-10, 10));
      brush.fillBleed(0.1 + t * 0.2);
      brush.fillTexture(0.4, 0.5);
      brush.beginShape(1);
      brush.vertex(x + cos(a - 60) * r * 0.25, y + sin(a - 60) * r * 0.25);
      brush.vertex(x + cos(a) * r * 0.32, y + sin(a) * r * 0.32);
      brush.vertex(x + cos(a + 60) * r * 0.25, y + sin(a + 60) * r * 0.25);
      brush.vertex(x - cos(a) * r * 0.08, y - sin(a) * r * 0.08);
      brush.endShape(true);
    }
    n++;
  }
  brush.fill("#6e3442", 215);
  brush.fillBleed(0.15);
  brush.circle(cx, cy, 12, 0.5);
}
