async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f8f3e8");
  randomSeed(66);
  brush.noStroke();
  // deep blue sky
  brush.fill("#1f6fd1", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 260); brush.vertex(-20, 200);
  brush.endShape(true);
  // hill rising steeply seen from below
  brush.fill("#c9a24a", 210);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, 190); brush.vertex(180, 120); brush.vertex(330, 150); brush.vertex(620, 250);
  brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // houses stacked up the hill, larger toward bottom
  let cols = ["#e8452c", "#f2b705", "#1aa39a", "#e86fa0", "#f07a1a", "#3a7ad9"];
  let rows = [[160, 22], [230, 32], [320, 44], [430, 60]];
  for (let r = 0; r < rows.length; r++) {
    let y = rows[r][0], s = rows[r][1];
    for (let x = -10 + r * 15; x < 610; x += s * 1.7 + random(10)) {
      let top = y - (r == 0 ? (x < 330 ? -(330 - x) * 0.05 : 0) : 0);
      let h = s * (0.9 + random(0.4));
      // wall (some left white)
      if (random() < 0.75) {
        brush.fill(random(cols), 210);
        brush.fillBleed(0.2);
        brush.fillTexture(0.4, 0.4);
        brush.beginShape(0.05);
        brush.vertex(x, top); brush.vertex(x + s * 1.5, top); brush.vertex(x + s * 1.5, top + h); brush.vertex(x, top + h);
        brush.endShape(true);
      }
      // roof
      brush.fill(random(["#a8321c", "#c24a1c"]), 225);
      brush.fillBleed(0.15);
      brush.beginShape(0.05);
      brush.vertex(x - 4, top + 2); brush.vertex(x + s * 0.75, top - s * 0.5); brush.vertex(x + s * 1.5 + 4, top + 2);
      brush.endShape(true);
      // window
      brush.fill("#1c2a50", 220);
      brush.fillBleed(0.1);
      brush.circle(x + s * 0.75, top + h * 0.5, max(3, s * 0.14), 0.3);
    }
  }
  // harbour wall at bottom
  brush.fill("#2a4a8a", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.3);
  brush.vertex(-20, 540); brush.vertex(620, 530); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  // cypress
  brush.fill("#1f5a2a", 230);
  brush.fillBleed(0.2);
  brush.beginShape(0.7);
  brush.vertex(520, 440); brush.vertex(540, 330); brush.vertex(560, 440);
  brush.endShape(true);
}
