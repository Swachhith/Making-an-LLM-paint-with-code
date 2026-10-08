async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3efe4");
  randomSeed(1101);
  brush.noStroke();

  // splashy sky: teal and violet drips in the corners
  brush.fill("#2f8fa8", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.8);
  brush.vertex(-20, -20); brush.vertex(220, 60); brush.vertex(200, 300); brush.vertex(-20, 250);
  brush.endShape(true);
  brush.fill("#6a4fb8", 170);
  brush.beginShape(0.8);
  brush.vertex(620, -20); brush.vertex(620, 200); brush.vertex(400, 320); brush.vertex(200, 150);
  brush.endShape(true);

  // stem: a wide soft arc from lower left to upper right
  brush.fill("#4a7a3a", 225);
  brush.fillBleed(0.25);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.3);
  brush.vertex(40, 520); brush.vertex(150, 460); brush.vertex(280, 370); brush.vertex(420, 300);
  brush.vertex(560, 240); brush.vertex(620, 250); brush.vertex(620, 620); brush.vertex(40, 620);
  brush.endShape(true);

  // cherry blossoms: pale pink, layered, two passes each
  const blooms = [
    [260, 270, 70], [220, 220, 55], [300, 330, 65],
    [180, 360, 50], [430, 210, 60], [470, 250, 55],
    [520, 290, 45], [340, 390, 48], [200, 430, 42],
    [120, 380, 40], [490, 180, 45], [550, 230, 42]
  ];
  for (const b of blooms) {
    const [cx, cy, r] = b;
    brush.fill("#f6a8c0", 215);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.circle(cx, cy, r, 0.7);
    brush.fill("#e87aa8", 185);
    brush.fillBleed(0.25);
    brush.fillTexture(0.4, 0.4);
    brush.circle(cx, cy, r * 0.75, 0.7);
    // splatter dots around each bloom
    for (let i = 0; i < 5; i++) {
      const a = random(360), d = random(15, 45);
      brush.fill("#f28aa2", 160);
      brush.fillBleed(0.2);
      brush.circle(cx + cos(a) * d, cy + sin(a) * d, random(2, 5), 0.4);
    }
  }

  // darker pink shadowed side of blossoms
  for (const b of blooms) {
    const [cx, cy, r] = b;
    brush.fill("#d96a9a", 170);
    brush.fillBleed(0.25);
    brush.circle(cx + 4, cy + 4, r * 0.5, 0.5);
  }

  // green leaves, small and loose
  brush.fill("#3f8a4a", 220);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.circle(200, 460, 18, 0.5);
  brush.circle(420, 310, 16, 0.5);
  brush.circle(300, 370, 14, 0.5);
  brush.circle(500, 200, 12, 0.5);

  // drips from the upper blooms
  brush.fill("#f28aa2", 170);
  brush.fillBleed(0.3);
  brush.circle(260, 270, 5, 0.4);
  brush.circle(260, 275, 6, 0.4);
  brush.circle(260, 280, 5, 0.4);
  brush.circle(470, 250, 5, 0.4);
  brush.circle(470, 255, 6, 0.4);
  brush.circle(470, 260, 5, 0.4);
  brush.circle(300, 330, 5, 0.4);
  brush.circle(300, 335, 6, 0.4);
}
