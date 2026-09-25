async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fdf3e8");
  brush.noStroke();

  brush.fill("#2f8f6a", 170);
  brush.fillBleed(0.45);
  brush.fillTexture(0.6, 0.5);
  brush.circle(70, 540, 170, true);
  brush.fill("#1c6a4a", 200);
  brush.circle(40, 580, 90, true);
  brush.circle(540, 70, 130, true);

  let cx = 300, cy = 300;
  brush.fill("#ff9a5c", 175);
  brush.fillBleed(0.4);
  brush.fillTexture(0.5, 0.5);
  brush.circle(cx, cy, 275, true);

  // concentric cupped petals, many small strokes
  let bands = 9;
  for (let b = 0; b < bands; b++) {
    let r = 265 - b * 27;
    let count = 14 - b;
    let hue = ["#ff8a4a", "#ff7d45", "#fb6e3c", "#f46236", "#ec5530", "#e2482c", "#d63c28", "#c83224", "#b52a20"][b];
    for (let k = 0; k < count; k++) {
      let a = k * 360 / count + b * 11;
      let span = 360 / count * 0.7;
      brush.fill(hue, 175 + b * 6);
      brush.fillBleed(0.2);
      brush.fillTexture(0.5, 0.55);
      brush.beginShape(0.7);
      brush.vertex(cx + cos(a - span) * r * 0.8, cy + sin(a - span) * r * 0.8);
      brush.vertex(cx + cos(a - span * 0.5) * r, cy + sin(a - span * 0.5) * r);
      brush.vertex(cx + cos(a + span * 0.5) * r, cy + sin(a + span * 0.5) * r);
      brush.vertex(cx + cos(a + span) * r * 0.8, cy + sin(a + span) * r * 0.8);
      brush.vertex(cx + cos(a) * r * 0.72, cy + sin(a) * r * 0.72);
      brush.endShape(true);
      if (b > 5) continue;
      brush.fill("#ffd2a8", 170);
      brush.fillBleed(0.05);
      brush.beginShape(0.9);
      brush.vertex(cx + cos(a - span * 0.5) * r * 0.97, cy + sin(a - span * 0.5) * r * 0.97);
      brush.vertex(cx + cos(a + span * 0.5) * r * 0.97, cy + sin(a + span * 0.5) * r * 0.97);
      brush.vertex(cx + cos(a) * r * 0.92, cy + sin(a) * r * 0.92);
      brush.endShape(true);
    }
  }
  brush.fill("#9a2018", 215);
  brush.fillBleed(0.3);
  brush.circle(cx, cy, 48, true);
  brush.fill("#3d6b2a", 230);
  brush.fillBleed(0.15);
  brush.circle(cx, cy, 20, true);
  brush.fill("#1e3a18", 220);
  brush.circle(cx + 2, cy + 2, 8, true);
}
