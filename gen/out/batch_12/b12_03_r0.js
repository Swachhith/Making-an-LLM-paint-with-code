async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#efe6d6");
  randomSeed(33);
  brush.noStroke();
  // muted olive/umber background corners
  brush.fill("#8c8a62", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(-20, -20); brush.vertex(620, -20); brush.vertex(620, 620); brush.vertex(-20, 620);
  brush.endShape(true);
  let cx = 300, cy = 310;
  // outer ring of long curling petals, darker bronze
  for (let ring = 0; ring < 4; ring++) {
    let n = 22 - ring * 3;
    let len = 250 - ring * 55;
    let col = ["#8a4a22", "#a65e2a", "#c07a36", "#d49a4c"][ring];
    for (let i = 0; i < n; i++) {
      let a = i * 360 / n + ring * 11 + random(-5, 5);
      let l = len * random(0.85, 1.05);
      let w = 11 + ring * 1.5;
      brush.fill(col, random(170, 220));
      brush.fillBleed(0.25);
      brush.fillTexture(0.4, 0.5);
      brush.beginShape(0.7);
      brush.vertex(cx + cos(a - w) * 20, cy + sin(a - w) * 20);
      brush.vertex(cx + cos(a - w * 0.6) * l * 0.7, cy + sin(a - w * 0.6) * l * 0.7);
      brush.vertex(cx + cos(a + 3) * l, cy + sin(a + 3) * l);
      brush.vertex(cx + cos(a + w * 0.6) * l * 0.7, cy + sin(a + w * 0.6) * l * 0.7);
      brush.vertex(cx + cos(a + w) * 20, cy + sin(a + w) * 20);
      brush.endShape(true);
    }
  }
  // dense centre
  brush.fill("#b8783a", 220);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(cx, cy, 45, 0.5);
  brush.fill("#6e3a1a", 200);
  brush.fillBleed(0.2);
  brush.circle(cx + 4, cy + 3, 22, 0.6);
}
