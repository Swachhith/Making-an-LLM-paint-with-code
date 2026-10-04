async function setup() {
  createCanvas(600, 600, WEBGL);
  brush.scaleBrushes(3);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  translate(-width / 2, -height / 2);
  background("#fcf4e2");
  brush.noStroke();
  // warm honey glow across the top-right
  brush.fill("#f4d38a", 170);
  brush.fillBleed(0.3);
  brush.fillTexture(0.4, 0.4);
  brush.circle(440, 180, 240, 0.5);
  // long arcing stem from bottom-left sweeping up to the head at top-right
  brush.fill("#7a9a3a", 210);
  brush.fillBleed(0.2);
  brush.beginShape(1);
  brush.vertex(20, 600);
  brush.vertex(120, 420);
  brush.vertex(260, 260);
  brush.vertex(400, 190);
  brush.vertex(410, 206);
  brush.vertex(274, 278);
  brush.vertex(140, 432);
  brush.vertex(44, 606);
  brush.endShape(true);
  // leaves along the arc
  let leaves = [[140, 440, -40], [230, 320, 40]];
  for (let L of leaves) {
    brush.fill("#8aae44", 200);
    brush.fillBleed(0.3);
    brush.beginShape(1);
    brush.vertex(L[0], L[1]);
    brush.vertex(L[0] + cos(L[2] - 20) * 70, L[1] + sin(L[2] - 20) * 70);
    brush.vertex(L[0] + cos(L[2]) * 120, L[1] + sin(L[2]) * 120);
    brush.vertex(L[0] + cos(L[2] + 20) * 70, L[1] + sin(L[2] + 20) * 70);
    brush.endShape(true);
    brush.fill("#5d7f28", 160);
    brush.fillBleed(0.2);
    brush.circle(L[0] + cos(L[2]) * 50, L[1] + sin(L[2]) * 50, 16, 0.6);
  }
  // sunflower head, tilted: ray petals first
  let hx = 430, hy = 170;
  for (let pass = 0; pass < 2; pass++) {
    for (let k = 0; k < 18; k++) {
      let a = k * 20 + pass * 10;
      let r = 120 - pass * 20;
      brush.fill(pass ? "#f0a818" : "#f7c43a", 210);
      brush.fillBleed(0.28);
      brush.fillTexture(0.4, 0.5);
      brush.beginShape(1);
      brush.vertex(hx + cos(a - 9) * 40, hy + sin(a - 9) * 34);
      brush.vertex(hx + cos(a) * r, hy + sin(a) * r * 0.85);
      brush.vertex(hx + cos(a + 9) * 40, hy + sin(a + 9) * 34);
      brush.endShape(true);
    }
  }
  // disc
  brush.fill("#8a5a1a", 220);
  brush.fillBleed(0.25);
  brush.circle(hx, hy, 50, 0.3);
  brush.fill("#5a3610", 210);
  brush.fillBleed(0.2);
  brush.circle(hx + 4, hy + 4, 34, 0.3);
  brush.fill("#c88a2a", 150);
  brush.circle(hx - 14, hy - 12, 14, 0.5);
}
