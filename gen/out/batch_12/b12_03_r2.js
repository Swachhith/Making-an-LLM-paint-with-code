async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#e8dcc4");
  randomSeed(3303);
  brush.noStroke();
  // deep earthy background, darker than the bloom
  for (let p = 0; p < 2; p++) {
    brush.fill(p ? "#3e3a26" : "#6a6444", 190);
    brush.fillBleed(0.3);
    brush.fillTexture(0.55, 0.55);
    brush.beginShape(0.5);
    brush.vertex(-30, -30); brush.vertex(630, -30); brush.vertex(630, 630); brush.vertex(-30, 630);
    brush.endShape(true);
  }
  // incurved globe: petals are short upturned cups stacked from bottom to top
  let cx = 300, cy = 300, R = 240;
  let rows = 11;
  for (let r = 0; r < rows; r++) {
    let v = r / (rows - 1);
    let y = cy + R * 0.8 - v * R * 1.6;
    let half = sqrt(max(0, 1 - pow((y - cy) / R, 2))) * R;
    let n = floor(half / 22) + 2;
    let tone = ["#6a3416", "#743a18", "#80431c", "#8c4c20", "#985624", "#a4602a", "#b06c32", "#bc783a", "#c88644", "#d6964e", "#e2a860"][r];
    for (let i = 0; i < n; i++) {
      let x = cx - half + (i + 0.5) * (2 * half / n) + random(-6, 6);
      let w = 26 + random(-4, 6), h = 46 + random(-6, 8);
      brush.fill(tone, random(190, 235));
      brush.fillBleed(0.25);
      brush.fillTexture(0.45, 0.5);
      brush.beginShape(0.9);
      brush.vertex(x - w, y + h * 0.3);
      brush.vertex(x - w * 0.8, y - h * 0.5);
      brush.vertex(x, y - h * 0.7);
      brush.vertex(x + w * 0.8, y - h * 0.5);
      brush.vertex(x + w, y + h * 0.3);
      brush.vertex(x, y + h * 0.1);
      brush.endShape(true);
    }
  }
  // shadow on lower-right of globe, highlight left as lighter
  brush.fill("#4a2410", 150);
  brush.fillBleed(0.35);
  brush.fillTexture(0.55, 0.55);
  brush.circle(cx + 110, cy + 120, 120, 0.7);
  // a few loose outer reflexed petals at the bottom
  for (let i = 0; i < 7; i++) {
    let a = 40 + i * 17;
    brush.fill("#8a4a22", 210);
    brush.fillBleed(0.25);
    brush.beginShape(0.7);
    brush.vertex(cx + cos(a - 6) * 180, cy + sin(a - 6) * 180);
    brush.vertex(cx + cos(a) * 280, cy + sin(a) * 280);
    brush.vertex(cx + cos(a + 6) * 180, cy + sin(a + 6) * 180);
    brush.endShape(true);
  }
}
