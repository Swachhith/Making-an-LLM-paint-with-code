async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#f3f5f4");
  randomSeed(242);

  brush.noStroke();
  for (let i = 0; i < 9; i++) {
    brush.fill(random() < 0.5 ? "#9fc3e8" : "#c9d9a4", 150);
    brush.fillBleed(0.3);
    brush.fillTexture(0.5, 0.5);
    brush.circle(random(0, 600), random(0, 600), random(70, 150), 0.8);
  }

  let cx = 300, cy = 300;
  let n = 13;
  for (let pass = 0; pass < 2; pass++) {
    for (let i = 0; i < n; i++) {
      let a = i * (360 / n) + random(-8, 8) + pass * 12;
      let r1 = pass === 0 ? 255 : 205;
      let r0 = 55;
      let spread = pass === 0 ? 15 : 11;
      brush.fill(pass === 0 ? "#3a6fe0" : "#1f43c4", pass === 0 ? 200 : 220);
      brush.fillBleed(0.3);
      brush.fillTexture(0.5, 0.45);
      brush.beginShape(0.2);
      brush.vertex(cx + cos(a - 5) * r0, cy + sin(a - 5) * r0);
      brush.vertex(cx + cos(a - spread) * r1 * 0.8, cy + sin(a - spread) * r1 * 0.8);
      brush.vertex(cx + cos(a - spread - 3) * r1, cy + sin(a - spread - 3) * r1);
      brush.vertex(cx + cos(a - 5) * r1 * 0.88, cy + sin(a - 5) * r1 * 0.88);
      brush.vertex(cx + cos(a) * r1 * 1.02, cy + sin(a) * r1 * 1.02);
      brush.vertex(cx + cos(a + 5) * r1 * 0.88, cy + sin(a + 5) * r1 * 0.88);
      brush.vertex(cx + cos(a + spread + 3) * r1, cy + sin(a + spread + 3) * r1);
      brush.vertex(cx + cos(a + spread) * r1 * 0.8, cy + sin(a + spread) * r1 * 0.8);
      brush.vertex(cx + cos(a + 5) * r0, cy + sin(a + 5) * r0);
      brush.endShape(true);
    }
  }

  brush.fill("#3a0e78", 240);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.circle(cx, cy, 80, 0.5);
  brush.fill("#1e0648", 240);
  brush.circle(cx + 5, cy + 4, 50, 0.6);
  brush.fill("#2a0c5a", 220);
  brush.circle(cx - 4, cy + 2, 38, 0.6);
  for (let i = 0; i < 14; i++) {
    let a = random(360);
    let r = random(10, 45);
    brush.fill("#130530", 220);
    brush.fillBleed(0.2);
    brush.circle(cx + cos(a) * r, cy + sin(a) * r, random(4, 8), 0.3);
  }

  for (let i = 0; i < 16; i++) {
    let a = random(360);
    let r = random(240, 290);
    brush.fill("#2548c8", 210);
    brush.fillBleed(0.3);
    brush.fillTexture(0.4, 0.4);
    brush.circle(cx + cos(a) * r, cy + sin(a) * r, random(4, 14), 0.5);
  }
  brush.fill("#5e8a3a", 200);
  brush.fillBleed(0.3);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.5);
  brush.vertex(290, 520);
  brush.vertex(312, 520);
  brush.vertex(322, 620);
  brush.vertex(296, 620);
  brush.endShape(true);
  for (let i = 0; i < 4; i++) {
    let x = random(220, 380);
    let top = 520 + random(-20, 20);
    brush.fill("#2a4bc0", 190);
    brush.fillBleed(0.25);
    brush.beginShape(0.5);
    brush.vertex(x - 8, top);
    brush.vertex(x + 8, top);
    brush.vertex(x + 6, top + random(40, 70));
    brush.vertex(x - 6, top + random(40, 70));
    brush.endShape(true);
    brush.circle(x, top + 72, 10, 0.3);
  }
}
