async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fbf4f2");
  randomSeed(10010);
  brush.noStroke();
  // soft pastel ground: peach top-right, mint below, lilac left
  brush.fill("#fcd8c0", 170);
  brush.fillBleed(0.35);
  brush.fillTexture(0.6, 0.6);
  brush.circle(470, 110, 190, 0.9);
  brush.fill("#cde8da", 170);
  brush.circle(330, 520, 240, 0.9);
  brush.fill("#e0d6f4", 160);
  brush.circle(90, 260, 170, 0.9);
  // bloom seen in 3/4 side view, upper left of centre
  let cx = 250, cy = 200;
  // long gently curving stem
  brush.fill("#7cb088", 215);
  brush.fillBleed(0.2);
  brush.fillTexture(0.4, 0.4);
  brush.beginShape(0.7);
  brush.vertex(cx - 8, cy + 20); brush.vertex(cx + 10, cy + 20); brush.vertex(cx + 40, 380); brush.vertex(cx + 52, 620); brush.vertex(cx + 32, 620); brush.vertex(cx + 22, 380);
  brush.endShape(true);
  // two long lance leaves from the stem, one each side
  let lv = [[cx + 30, 400, -1, 20], [cx + 44, 500, 1, -10]];
  for (let L of lv) {
    for (let p = 0; p < 2; p++) {
      let k = p ? 0.65 : 1;
      brush.fill(p ? "#5e9a70" : "#9ccda6", p ? 190 : 210);
      brush.fillBleed(0.25);
      brush.fillTexture(0.45, 0.5);
      brush.beginShape(0.8);
      brush.vertex(L[0], L[1]);
      brush.vertex(L[0] + L[2] * 80 * k, L[1] - 40 * k + L[3]);
      brush.vertex(L[0] + L[2] * 170 * k, L[1] - 70 * k + L[3]);
      brush.vertex(L[0] + L[2] * 90 * k, L[1] - 12 + L[3] * 0.5);
      brush.endShape(true);
    }
  }
  // drooping petals hanging down and outward from the cone
  for (let p = 0; p < 2; p++) {
    for (let i = 0; i < 12; i++) {
      let a = 15 + i * 13.5 + random(-3, 3);
      let l = random(120, 150) * (p ? 0.7 : 1);
      brush.fill(p ? "#e886b0" : "#f6b4cf", p ? 190 : 215);
      brush.fillBleed(0.3);
      brush.fillTexture(0.5, 0.5);
      brush.beginShape(0.7);
      brush.vertex(cx + cos(a - 10) * 26, cy + sin(a - 10) * 14);
      brush.vertex(cx + cos(a - 5) * l * 0.85, cy + sin(a - 5) * l * 0.85 + 10);
      brush.vertex(cx + cos(a) * l, cy + sin(a) * l + 18);
      brush.vertex(cx + cos(a + 5) * l * 0.85, cy + sin(a + 5) * l * 0.85 + 10);
      brush.vertex(cx + cos(a + 10) * 26, cy + sin(a + 10) * 14);
      brush.endShape(true);
    }
  }
  // tall domed cone above the petals, layered peach→rust
  brush.fill("#f0a868", 225);
  brush.fillBleed(0.25);
  brush.fillTexture(0.5, 0.5);
  brush.beginShape(0.9);
  brush.vertex(cx - 42, cy + 6); brush.vertex(cx - 34, cy - 34); brush.vertex(cx, cy - 52); brush.vertex(cx + 34, cy - 34); brush.vertex(cx + 42, cy + 6); brush.vertex(cx, cy + 16);
  brush.endShape(true);
  brush.fill("#c86a38", 200);
  brush.beginShape(0.9);
  brush.vertex(cx - 10, cy + 8); brush.vertex(cx + 2, cy - 36); brush.vertex(cx + 30, cy - 26); brush.vertex(cx + 38, cy + 4);
  brush.endShape(true);
  for (let i = 0; i < 36; i++) {
    brush.fill("#8a4020", 210);
    brush.fillBleed(0.05);
    brush.circle(cx + random(-34, 36), cy + random(-42, 6), random(1.5, 3), 0.3);
  }
}
