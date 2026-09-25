async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f7e9d2");
  randomSeed(66);
  brush.noStroke();

  // warm ochre and rose light in the corners
  brush.fill("#e8b877", 170);
  brush.fillBleed(0.5);
  brush.fillTexture(0.6, 0.5);
  brush.circle(80, 80, 180, 0.6);
  brush.fill("#e7a58a", 150);
  brush.circle(560, 560, 170, 0.6);

  // a few leaf edges behind the head
  brush.fill("#6f8f4a", 200);
  brush.fillBleed(0.3);
  brush.beginShape(1);
  brush.vertex(420, 470); brush.vertex(600, 420); brush.vertex(600, 600); brush.vertex(470, 600);
  brush.endShape(true);
  brush.beginShape(1);
  brush.vertex(0, 400); brush.vertex(160, 470); brush.vertex(120, 600); brush.vertex(0, 600);
  brush.endShape(true);

  // underpainting of the dome: one soft cool pass
  brush.fill("#8aa1d6", 200);
  brush.fillBleed(0.4);
  brush.fillTexture(0.5, 0.6);
  brush.circle(300, 300, 250, 0.3);

  // florets, back to front (top first), bigger at the front
  const pts = [];
  for (let i = 0; i < 85; i++) {
    const r = 235 * sqrt(random()), t = random(360);
    pts.push([300 + cos(t) * r, 300 + sin(t) * r]);
  }
  pts.sort((p, q) => p[1] - q[1]);
  for (const [x, y] of pts) {
    const s = map(y, 60, 540, 34, 50) * random(0.85, 1.1);
    const rot = random(90);
    const shade = map(y, 60, 540, 0, 1);
    const c = random() < 0.25 ? "#7b6cc0" : (shade > 0.6 ? "#2f4fa8" : (shade > 0.3 ? "#4c70c4" : "#7894d6"));
    for (let p = 0; p < 4; p++) {
      const a = rot + p * 90;
      brush.fill(c, random(190, 230));
      brush.fillBleed(0.18);
      brush.fillTexture(0.35, 0.5);
      brush.beginShape(1);
      brush.vertex(x + cos(a) * 3, y + sin(a) * 3);
      brush.vertex(x + cos(a - 32) * s * 0.8, y + sin(a - 32) * s * 0.8);
      brush.vertex(x + cos(a) * s, y + sin(a) * s);
      brush.vertex(x + cos(a + 32) * s * 0.8, y + sin(a + 32) * s * 0.8);
      brush.endShape(true);
    }
    brush.fill("#f4e3b0", 230);
    brush.fillBleed(0.02);
    brush.circle(x, y, 3.5, 0.2);
  }
}
