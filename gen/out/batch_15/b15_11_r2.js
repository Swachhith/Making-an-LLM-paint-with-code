async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcf7ef");
  randomSeed(1112);
  brush.noStroke();

  let cx = 205, cy = 395;

  brush.fill("#b8a8c0", 150);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.circle(cx + 50, cy + 40, 140, 0.7);
  brush.fill("#1a6a34", 220);
  brush.fillBleed(0.2);
  brush.beginShape(0.6);
  brush.vertex(cx + 30, cy + 60);
  brush.vertex(cx + 50, cy + 60);
  brush.vertex(cx + 110, 600);
  brush.vertex(cx + 88, 600);
  brush.endShape(true);

  // leaves, saturated emerald, layered
  let leaves = [
    [[cx + 60, cy + 50], [cx + 210, cy + 50], [cx + 250, cy + 110], [cx + 110, cy + 110]],
    [[cx - 30, cy + 90], [cx - 130, cy + 190], [cx - 60, cy + 205], [cx + 20, cy + 120]],
    [[cx + 20, cy + 110], [cx + 60, cy + 205], [cx + 110, cy + 200], [cx + 70, cy + 110]],
  ];
  for (let lf of leaves) {
    for (let pass = 0; pass < 2; pass++) {
      brush.fill(pass ? "#10502a" : "#1f8a44", pass ? 170 : 210);
      brush.fillBleed(0.25);
      brush.fillTexture(0.45, 0.4);
      brush.beginShape(0.85);
      for (let p of lf) brush.vertex(p[0] + pass * 8, p[1] + pass * 6);
      brush.endShape(true);
    }
  }

  // outer ruffled guard petals, big
  for (let i = 0; i < 12; i++) {
    let a = i * 30 + random(-8, 8);
    let r = random(110, 140);
    brush.fill(random(["#ff5a40", "#ff6848", "#f84c38"]), random(200, 235));
    brush.fillBleed(0.28);
    brush.fillTexture(0.5, 0.5);
    brush.beginShape(0.9);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 24) * r * 0.78, cy + sin(a - 24) * r * 0.78);
    brush.vertex(cx + cos(a - 10) * r, cy + sin(a - 10) * r);
    brush.vertex(cx + cos(a) * r * 0.88, cy + sin(a) * r * 0.88);
    brush.vertex(cx + cos(a + 10) * r * 0.98, cy + sin(a + 10) * r * 0.98);
    brush.vertex(cx + cos(a + 24) * r * 0.8, cy + sin(a + 24) * r * 0.8);
    brush.endShape(true);
  }
  // middle ring, deeper coral-red
  for (let i = 0; i < 10; i++) {
    let a = i * 36 + 15 + random(-8, 8);
    let r = random(70, 95);
    brush.fill("#e83028", random(180, 220));
    brush.fillBleed(0.24);
    brush.fillTexture(0.45, 0.5);
    brush.beginShape(0.9);
    brush.vertex(cx + cos(a) * 10, cy + sin(a) * 10);
    brush.vertex(cx + cos(a - 26) * r, cy + sin(a - 26) * r);
    brush.vertex(cx + cos(a) * r * 1.08, cy + sin(a) * r * 1.08);
    brush.vertex(cx + cos(a + 26) * r, cy + sin(a + 26) * r);
    brush.endShape(true);
  }
  // cupped centre, crimson shadow pools
  for (let i = 0; i < 7; i++) {
    let a = i * 51 + random(-10, 10);
    let r = random(35, 50);
    brush.fill("#c01830", 200);
    brush.fillBleed(0.2);
    brush.beginShape(0.9);
    brush.vertex(cx, cy);
    brush.vertex(cx + cos(a - 30) * r, cy + sin(a - 30) * r);
    brush.vertex(cx + cos(a + 30) * r, cy + sin(a + 30) * r);
    brush.endShape(true);
  }
  brush.fill("#8a0e28", 220);
  brush.fillBleed(0.18);
  brush.circle(cx + 4, cy - 2, 18, 0.6);
  brush.fill("#ffc020", 230);
  brush.fillBleed(0.1);
  for (let i = 0; i < 10; i++) brush.circle(cx + random(-12, 12), cy + random(-12, 12), 3, 0.2);

  // a single fallen petal far across the empty space
  brush.fill("#ff5a40", 210);
  brush.fillBleed(0.25);
  brush.beginShape(0.9);
  brush.vertex(470, 200);
  brush.vertex(510, 180);
  brush.vertex(525, 210);
  brush.vertex(490, 228);
  brush.endShape(true);
}
